#!/usr/bin/env bash
# check-domains-domainr.sh — domain availability gate via the Domainr status API.
#
#   usage:  DOMAINR_CLIENT_ID=xxxx ./check-domains-domainr.sh names.txt > results.csv
#
# WHY THIS EXISTS
#
# The primary gate (scripts/check-domains.sh) talks to registry RDAP servers.
# In some environments those hosts are denied by an egress policy. Domainr's
# status API is a different route to the same fact: it queries registries and
# returns a structured status per domain, and it is the fallback the brief
# itself names ("Domain status, bulk (optional) — api.domainr.com — Yes, free tier").
#
# Get a free client_id at https://domainr.com/api  (the direct API; note that
# the RapidAPI-hosted variant uses a different host and an X-RapidAPI-Key header).
#
# Domainr status flags, per its docs:
#   active        -> registered
#   inactive      -> NOT registered, can be bought at standard price
#   undelegated   -> no nameservers (often paired with inactive)
#   marketed / priced / premium / transferable -> registered AND for sale on the
#                    aftermarket. These are the USD 200 ceiling's problem cases:
#                    obtainable in principle, but almost never within budget.
#   reserved / disallowed -> cannot be registered at all
#   unknown       -> Domainr could not determine it. NEVER guess on these.
#
# Like the RDAP gate, this script runs PREFLIGHT CONTROLS and refuses to emit
# results if it cannot prove it distinguishes a registered domain from an
# unregistered one.

set -uo pipefail

TLDS=(com co app io ng com.ng africa)
API="https://api.domainr.com/v2/status"
KEY="${DOMAINR_CLIENT_ID:-}"
BATCH=12          # Domainr accepts a comma-separated list
SLEEP=0.35

if [[ -z "$KEY" ]]; then
  echo "# FATAL: DOMAINR_CLIENT_ID is not set." >&2
  echo "# Get a free key at https://domainr.com/api then re-run:" >&2
  echo "#   DOMAINR_CLIENT_ID=xxxx $0 names.txt > results.csv" >&2
  exit 2
fi

# classify <status-string> -> FREE | TAKEN | AFTERMARKET | UNAVAILABLE | UNKNOWN
classify() {
  local s=" $1 "
  case "$s" in
    *" unknown "*)                                   echo "UNKNOWN:domainr-unknown"; return ;;
    *" reserved "*|*" disallowed "*)                 echo "UNAVAILABLE";             return ;;
  esac
  # Aftermarket flags mean registered-and-for-sale. Registered wins over "inactive"
  # if both somehow appear: never report a for-sale domain as free.
  case "$s" in
    *" marketed "*|*" priced "*|*" premium "*|*" transferable "*) echo "AFTERMARKET"; return ;;
  esac
  case "$s" in
    *" active "*)                                    echo "TAKEN";                   return ;;
    *" inactive "*|*" undelegated "*)                echo "FREE";                    return ;;
  esac
  echo "UNKNOWN:unparsed[$1]"
}

# query <domain[,domain...]> -> emits "domain<TAB>status" lines
query() {
  local list="$1" resp
  resp=$(curl -s -m 20 --get "$API" \
           --data-urlencode "domain=$list" \
           --data-urlencode "client_id=$KEY" 2>/dev/null)
  if [[ -z "$resp" ]]; then echo "__ERROR__ empty-response"; return; fi
  if grep -q '"errors"' <<<"$resp"; then
    echo "__ERROR__ $(jq -r '.errors[0] | "\(.code) \(.message)"' <<<"$resp" 2>/dev/null || echo parse-fail)"
    return
  fi
  jq -r '.status[]? | "\(.domain)\t\(.status)"' <<<"$resp" 2>/dev/null
}

one_status() {
  local d="$1" line
  line=$(query "$d")
  case "$line" in __ERROR__*) echo "UNKNOWN:api[${line#__ERROR__ }]"; return ;; esac
  classify "$(cut -f2 <<<"$line")"
}

preflight() {
  echo "# domainr preflight $(date -u +%Y-%m-%dT%H:%M:%SZ)" >&2
  local reg unreg
  reg=$(one_status "google.com")
  unreg=$(one_status "qx7vzmplkjhgtrfd91x.com")
  printf '#   control google.com            = %s (want TAKEN)\n' "$reg" >&2
  printf '#   control qx7vzmplkjhgtrfd91x.com = %s (want FREE)\n' "$unreg" >&2
  if [[ "$reg" != "TAKEN" || "$unreg" != "FREE" ]]; then
    echo "# FATAL: controls failed — the API key may be invalid, rate-limited, or the" >&2
    echo "# service is degraded. Refusing to emit results. Do NOT proceed on" >&2
    echo "# unverified domain data." >&2
    exit 2
  fi
  echo "# controls passed — proceeding" >&2
}

main() {
  local infile="${1:?usage: DOMAINR_CLIENT_ID=xxx $0 names.txt}"
  preflight

  declare -A ST
  local -a all=()
  while read -r n; do
    [[ -z "$n" ]] && continue
    for tld in "${TLDS[@]}"; do all+=("$n.$tld"); done
  done < "$infile"

  echo "# querying ${#all[@]} domains in batches of $BATCH" >&2
  local i=0 total=${#all[@]}
  while (( i < total )); do
    local chunk; chunk=$(IFS=,; echo "${all[*]:i:BATCH}")
    local out; out=$(query "$chunk")
    case "$out" in
      __ERROR__*)
        # Record the whole batch as UNKNOWN rather than dropping it silently.
        for d in "${all[@]:i:BATCH}"; do ST[$d]="UNKNOWN:api[${out#__ERROR__ }]"; done
        echo "#   batch at $i failed: ${out#__ERROR__ }" >&2
        ;;
      *)
        while IFS=$'\t' read -r d s; do
          [[ -z "$d" ]] && continue
          ST[$d]=$(classify "$s")
        done <<<"$out"
        ;;
    esac
    i=$((i+BATCH))
    printf '\r#   %d/%d' "$i" "$total" >&2
    sleep "$SLEEP"
  done
  echo >&2

  { IFS=,; echo "name,${TLDS[*]}"; }
  while read -r n; do
    [[ -z "$n" ]] && continue
    row="$n"
    for tld in "${TLDS[@]}"; do row="$row,${ST[$n.$tld]:-UNKNOWN:no-result}"; done
    echo "$row"
  done < "$infile"
}

main "$@"
