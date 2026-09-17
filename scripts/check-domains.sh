#!/usr/bin/env bash
# check-domains.sh — hardened RDAP domain availability gate
#
#   usage:  ./check-domains.sh names.txt > results.csv
#           ./check-domains.sh names.txt --shards 4 > results.csv   (parallel)
#
# WHY THIS EXISTS (read before you trust any domain CSV):
#
# The naive version of this script — the one in the original brief — is:
#
#     code=$(curl -s -o /dev/null -w "%{http_code}" "https://rdap.org/domain/$n.$tld")
#     case "$code" in 404) FREE ;; 200) TAKEN ;; *) UNKNOWN ;; esac
#
# That script is WRONG in three separate ways, each of which silently
# produces confident, false results:
#
#  1. NO -L.  rdap.org is a *redirect* service. It answers 302 with a
#     Location: header pointing at the registry's real RDAP server. Without
#     -L, curl reports 302 and EVERY domain lands in the UNKNOWN branch.
#     Verified: https://rdap.org/domain/google.com -> HTTP 302.
#
#  2. 404 IS NOT "AVAILABLE".  rdap.org answers 404 with the body
#     {"errorCode":404,"title":"No RDAP service is available for this
#     resource"} for any TLD it has no mapping for — .co and .io among them.
#     The naive script reads that as FREE. Verified: nike.co, angel.co,
#     github.io and nic.io — all plainly registered — all return 404.
#     A registered domain reported as FREE is the worst output this
#     pipeline can produce, and the naive script produces it by default.
#
#  3. NO CONTROLS.  Nothing tells the operator the lookups are meaningful.
#     A blocked network, a rate limit, or a dead registry all degrade
#     silently into a clean-looking CSV full of FREEs.
#
# This version fixes all three:
#   - resolves each TLD to its authoritative registry RDAP server
#   - classifies on the RESPONSE BODY, not the status code alone
#   - runs PREFLIGHT CONTROLS per TLD (a known-registered domain must read
#     TAKEN and a known-unregistered one must read FREE) and REFUSES to emit
#     results for any TLD whose controls fail. Silence beats a false FREE.
#
# Requires: curl, and optionally `whois` for the ccTLD fallback (.ng/.com.ng).

set -uo pipefail

TLDS=(com co app io ng com.ng africa)
UA="brand-naming-domain-gate/1.0"
TIMEOUT=10
SLEEP=0.25

# ---------------------------------------------------------------------------
# Authoritative RDAP base per TLD. Bootstrapped from IANA's registry at
# https://data.iana.org/rdap/dns.json — hardcoded so the gate does not depend
# on that file being reachable. Verify against IANA if a TLD starts failing.
# ---------------------------------------------------------------------------
rdap_base() {
  case "$1" in
    com)    echo "https://rdap.verisign.com/com/v1/domain/" ;;
    co)     echo "https://rdap.nic.co/domain/" ;;
    app)    echo "https://pubapi.registry.google/rdap/domain/" ;;
    io)     echo "https://rdap.nic.io/domain/" ;;
    africa) echo "https://rdap.nic.africa/domain/" ;;
    ng|com.ng) echo "https://rdap.nic.net.ng/domain/" ;;
    *)      echo "" ;;
  esac
}

# Preflight controls: "<registered-domain> <unregistered-domain>".
# The unregistered ones are long random strings; if one of them ever gets
# registered, swap it — a control failure here is a hard stop by design.
control_pair() {
  case "$1" in
    com)    echo "google.com qx7vzmplkjhgtrfd91x.com" ;;
    co)     echo "angel.co qx7vzmplkjhgtrfd91x.co" ;;
    app)    echo "web.app qx7vzmplkjhgtrfd91x.app" ;;
    io)     echo "github.io qx7vzmplkjhgtrfd91x.io" ;;
    africa) echo "nic.africa qx7vzmplkjhgtrfd91x.africa" ;;
    ng)     echo "nic.net.ng qx7vzmplkjhgtrfd91x.ng" ;;
    com.ng) echo "google.com.ng qx7vzmplkjhgtrfd91x.com.ng" ;;
    *)      echo "" ;;
  esac
}

# ---------------------------------------------------------------------------
# lookup <fqdn> <tld> -> FREE | TAKEN | UNKNOWN:<reason>
# Classifies on status code AND body. Never guesses.
# ---------------------------------------------------------------------------
lookup() {
  local fqdn="$1" tld="$2" base code body resp
  base="$(rdap_base "$tld")"
  [[ -z "$base" ]] && { echo "UNKNOWN:no-rdap-base"; return; }

  resp=$(curl -sL -m "$TIMEOUT" -A "$UA" \
           -H 'Accept: application/rdap+json' \
           -w '\n__HTTP__%{http_code}' \
           "${base}${fqdn}" 2>/dev/null)
  code="${resp##*__HTTP__}"
  body="${resp%$'\n'__HTTP__*}"

  case "$code" in
    200)
      # A real domain object echoes its own name. Anything else is not proof.
      if grep -qi '"ldhName"' <<<"$body"; then echo "TAKEN"
      else echo "UNKNOWN:200-without-domain-object"; fi
      ;;
    404)
      # THE CRITICAL DISTINCTION. "no RDAP service" != "domain not found".
      if grep -qiE 'no rdap service|not authoritative|unknown (tld|domain name)' <<<"$body"; then
        echo "UNKNOWN:tld-not-served"
      else
        echo "FREE"
      fi
      ;;
    429) echo "UNKNOWN:rate-limited" ;;
    403|407) echo "UNKNOWN:blocked-by-policy" ;;
    000) echo "UNKNOWN:unreachable" ;;
    *)   echo "UNKNOWN:http-$code" ;;
  esac
}

# whois fallback, used only for ccTLDs RDAP cannot serve.
whois_lookup() {
  local fqdn="$1" out
  command -v whois >/dev/null 2>&1 || { echo "UNKNOWN:no-whois"; return; }
  out=$(timeout 20 whois "$fqdn" 2>/dev/null) || { echo "UNKNOWN:whois-timeout"; return; }
  [[ -z "$out" ]] && { echo "UNKNOWN:whois-empty"; return; }
  if grep -qiE '^\s*(no match|not found|no data found|no entries found|available)' <<<"$out"; then
    echo "FREE"
  elif grep -qiE '^\s*(domain name|registrar|creation date|registered on):' <<<"$out"; then
    echo "TAKEN"
  else
    echo "UNKNOWN:whois-unparsed"
  fi
}

# ---------------------------------------------------------------------------
# PREFLIGHT. Any TLD that cannot prove it distinguishes registered from
# unregistered is disabled for the whole run and reported as UNKNOWN.
# ---------------------------------------------------------------------------
# TLD_OK_LIST is a space-delimited string, not an associative array, so that it
# survives `export` into the sharded subshells. Bash cannot export assoc arrays.
TLD_OK_LIST=""
tld_ok() { [[ " $TLD_OK_LIST " == *" $1 "* ]]; }

preflight() {
  echo "# preflight $(date -u +%Y-%m-%dT%H:%M:%SZ)" >&2
  local ok_count=0
  for tld in "${TLDS[@]}"; do
    read -r reg unreg <<<"$(control_pair "$tld")"
    local r u
    r=$(lookup "$reg" "$tld"); u=$(lookup "$unreg" "$tld")
    if [[ "$r" == "TAKEN" && "$u" == "FREE" ]]; then
      TLD_OK_LIST="$TLD_OK_LIST $tld"; ok_count=$((ok_count+1))
      printf '#   .%-7s OK       (%s=TAKEN, control=FREE)\n' "$tld" "$reg" >&2
    else
      printf '#   .%-7s DISABLED (%s=%s, control=%s)\n' "$tld" "$reg" "$r" "$u" >&2
    fi
  done
  if (( ok_count == 0 )); then
    echo "# FATAL: no TLD passed preflight. Network or policy is blocking RDAP." >&2
    echo "# Refusing to emit results. Do NOT proceed on unverified domain data." >&2
    exit 2
  fi
  echo "# $ok_count/${#TLDS[@]} TLDs verified usable" >&2
}

check_one() {
  local n="$1" row="$1" tld status
  # Plain arrays do not survive `export` either, so sharded workers rebuild the
  # TLD list from the exported string.
  local -a tlds
  if [[ -n "${TLDS_STR:-}" ]]; then read -r -a tlds <<<"$TLDS_STR"; else tlds=("${TLDS[@]}"); fi
  for tld in "${tlds[@]}"; do
    if tld_ok "$tld"; then
      status=$(lookup "$n.$tld" "$tld")
      # ccTLD RDAP is patchy; try whois before giving up.
      if [[ "$status" == UNKNOWN:* && ( "$tld" == "ng" || "$tld" == "com.ng" ) ]]; then
        status=$(whois_lookup "$n.$tld")
      fi
    else
      status="UNKNOWN:tld-unverified"
    fi
    row="$row,$status"
    sleep "$SLEEP"
  done
  echo "$row"
}

main() {
  local infile="${1:?usage: $0 names.txt [--shards N]}"
  local shards=1
  [[ "${2:-}" == "--shards" ]] && shards="${3:-4}"

  preflight

  { IFS=,; echo "name,${TLDS[*]}"; }

  if (( shards > 1 )); then
    # Shard the list and run the blocks concurrently. RDAP tolerates this far
    # better than whois does, but keep shards modest to stay under rate limits.
    local tmp; tmp=$(mktemp -d)
    split -n "l/$shards" "$infile" "$tmp/shard."
    export -f check_one lookup whois_lookup rdap_base tld_ok
    export TIMEOUT SLEEP UA TLD_OK_LIST
    export TLDS_STR="${TLDS[*]}"
    for f in "$tmp"/shard.*; do
      ( while read -r n; do [[ -n "$n" ]] && check_one "$n"; done < "$f" ) &
    done
    wait
    rm -rf "$tmp"
  else
    while read -r n; do [[ -n "$n" ]] && check_one "$n"; done < "$infile"
  fi
}

main "$@"
