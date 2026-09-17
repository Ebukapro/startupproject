#!/usr/bin/env bash
# Apple App Store collision check via the public iTunes Search API (no key).
# Storefront NG = what a Nigerian user actually sees.
echo "name,exact_match_app,top_result,total_results"
while read -r n; do
  [[ -z "$n" ]] && continue
  j=$(curl -s -m 12 --get "https://itunes.apple.com/search" \
        --data-urlencode "term=$n" -d "entity=software&limit=5&country=NG" 2>/dev/null)
  if [[ -z "$j" ]]; then echo "$n,UNVERIFIED,UNVERIFIED,UNVERIFIED"; continue; fi
  echo "$j" | jq -r --arg n "$n" '
    (.resultCount // 0) as $c |
    ([.results[]? | select((.trackName|ascii_downcase) == ($n|ascii_downcase))] | length) as $exact |
    [$n, (if $exact>0 then "YES" else "no" end),
     ((.results[0].trackName // "-") | gsub(",";" ") | .[0:45]), ($c|tostring)] | @csv'
  sleep 0.2
done
