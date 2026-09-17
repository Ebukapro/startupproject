#!/usr/bin/env bash
# confirm-domains-standalone.sh
#
# Self-contained domain availability check for the brand-naming shortlist.
# No repo, no API key, no signup. Needs only bash, curl and jq.
#
#   chmod +x confirm-domains-standalone.sh && ./confirm-domains-standalone.sh
#
# It queries the authoritative registry RDAP servers directly and runs preflight
# controls first: a known-registered domain must read TAKEN and a known-free one
# must read FREE. If a TLD cannot prove it tells those apart, that TLD is
# disabled rather than reported. It will refuse to print results rather than
# print wrong ones.

set -uo pipefail
TIMEOUT=10; UA="brand-gate/1.0"

# The 10 finalists, checked first, then the wider bench.
FINALISTS=(northbell torven keelstone rondeva larkstone stavion truetenor talvin foredeck tickline)
BENCH=(helmstone beamhouse lotline indexel librova tallyhouse mainmast midprice tenura equora
       ordena marketday slatehouse windlass larkstone anvilbay riverlot clearbasis evenbasis
       lanternlot dawnledger northbell cairnpost openfloat quietfloat paritan tenorbell
       spreadwell purlin escarp barbican keelson)

TLDS=(com co app io ng com.ng africa)
rdap_base() { case "$1" in
  com) echo "https://rdap.verisign.com/com/v1/domain/";;
  co) echo "https://rdap.nic.co/domain/";;
  app) echo "https://pubapi.registry.google/rdap/domain/";;
  io) echo "https://rdap.nic.io/domain/";;
  africa) echo "https://rdap.nic.africa/domain/";;
  ng|com.ng) echo "https://rdap.nic.net.ng/domain/";;
esac; }
control() { case "$1" in
  com) echo "google.com qx7vzmplkjhgtrfd91x.com";;
  co) echo "angel.co qx7vzmplkjhgtrfd91x.co";;
  app) echo "web.app qx7vzmplkjhgtrfd91x.app";;
  io) echo "github.io qx7vzmplkjhgtrfd91x.io";;
  africa) echo "nic.africa qx7vzmplkjhgtrfd91x.africa";;
  ng) echo "nic.net.ng qx7vzmplkjhgtrfd91x.ng";;
  com.ng) echo "google.com.ng qx7vzmplkjhgtrfd91x.com.ng";;
esac; }

look() { # look <fqdn> <tld>
  local b; b=$(rdap_base "$2"); [[ -z "$b" ]] && { echo UNKNOWN; return; }
  local r c body
  r=$(curl -sL -m "$TIMEOUT" -A "$UA" -H 'Accept: application/rdap+json' \
        -w '\n__H__%{http_code}' "${b}${1}" 2>/dev/null)
  c="${r##*__H__}"; body="${r%$'\n'__H__*}"
  case "$c" in
    200) grep -qi '"ldhName"' <<<"$body" && echo TAKEN || echo UNKNOWN ;;
    # A 404 saying "no RDAP service" means "cannot answer", NOT "available".
    404) grep -qiE 'no rdap service|not authoritative' <<<"$body" && echo UNKNOWN || echo FREE ;;
    429) echo UNKNOWN ;; 403|407) echo UNKNOWN ;; *) echo UNKNOWN ;;
  esac
}

OK=""
echo "Preflight — verifying each registry actually answers correctly:"
for t in "${TLDS[@]}"; do
  read -r reg unreg <<<"$(control "$t")"
  a=$(look "$reg" "$t"); b=$(look "$unreg" "$t")
  if [[ "$a" == TAKEN && "$b" == FREE ]]; then OK="$OK $t"; printf '  .%-7s usable\n' "$t"
  else printf '  .%-7s DISABLED (control returned %s/%s) — will report as UNKNOWN\n' "$t" "$a" "$b"; fi
done
[[ -z "${OK// /}" ]] && { echo; echo "FATAL: no TLD passed preflight — network is blocking RDAP."; echo "Refusing to print results rather than print wrong ones."; exit 2; }

run() {
  echo; echo "=== $1 ==="; shift
  printf '%-12s %-9s %-9s %-9s %-9s\n' NAME .com .ng .com.ng .co
  for n in $(printf '%s\n' "$@" | awk '!seen[$0]++'); do
    declare -A S
    for t in com ng com.ng co; do
      if [[ " $OK " == *" $t "* ]]; then S[$t]=$(look "$n.$t" "$t"); else S[$t]=UNKNOWN; fi
      sleep 0.2
    done
    mark=""; [[ "${S[com]}" == FREE ]] && mark="   <<< .com IS FREE"
    printf '%-12s %-9s %-9s %-9s %-9s%s\n' "$n" "${S[com]}" "${S[ng]}" "${S[com.ng]}" "${S[co]}" "$mark"
  done
}

run "THE TEN FINALISTS" "${FINALISTS[@]}"
run "BENCH (backups, if finalists fail)" "${BENCH[@]}"

echo
echo "FREE  = unregistered, buyable at normal price (~\$10-15)"
echo "TAKEN = already registered"
echo "UNKNOWN = could not verify — do NOT assume either way"
echo
echo "Confirm at a registrar before paying: RDAP says a domain is unregistered,"
echo "but it does not say it isn't premium-priced."
