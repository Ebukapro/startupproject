# 00 — Run Progress

Run started 2026-09-17. Read this file first if the run is interrupted.

## Headline

**Agent 3, the domain gate, is BLOCKED by network egress policy and could not be
run.** Both of the brief's sanctioned methods — RDAP over HTTPS and `whois` — are
denied in this environment. No candidate has a verified domain status. See
`output/03-domain-gate.md` for the evidence and the three-minute remediation.

The pipeline was **inverted** in response: every screen that does not depend on
domain data was run across all 120 candidates, rather than on a 30–40 name survivor
list. When the gate is finally run, survivors already carry their full research.

## Agent status

| Agent | Model | Status | Output | Candidates in → out |
|---|---|---|---|---|
| 1. Landscape | Sonnet | done | `research/01-landscape.md` | — |
| 2. Generation | Opus | done | `output/02-longlist.md` | → 120 |
| — NGX screen | script | done | inline | 120 → 120 (no collisions) |
| — App Store collision | script (live iTunes API) | done | `output/appstore-raw.csv` | 120 checked, 21 exact collisions |
| 3. Domain gate | — | **BLOCKED** | `output/03-domain-gate.md` | 120 → **0 verified** |
| 4. Linguistic | Sonnet | done | `output/04-linguistic.md` | 120 assessed |
| 5. Trademarks/handles | Sonnet | running | `output/05-availability.md` | 36 shortlist |
| 6. Search + ASO | Sonnet | running (2 shards) | `output/06-seo-aso-{a,b}.md` | 36 shortlist |
| 7. Regulatory | Sonnet | done | `output/07-regulatory.md` | 120 assessed |
| 8. Scoring + report | Opus | pending | `output/08-final-report.md`, `output/09-client-shortlist.md` | → 10 ranked |

## Gate counts

| Gate | Surviving |
|---|---|
| Generated | 120 |
| After NGX collision screen | 120 |
| After linguistic (25 FAILs removed) | 95 |
| After regulatory (3 HIGH removed, all already linguistic FAILs) | 95 |
| After domain gate | **not run — 0 verified** |
| Priority set (PASS + no store collision + not reg-MEDIUM) | 65 |
| Deep-research shortlist (Agents 5/6), territory-spread | 36 |
| Final ranked | 10 (provisional, pending domains) |

## Next step

Run `./scripts/check-domains.sh output/names-120.txt --shards 4 > output/03-domain-raw.csv`
on an unrestricted machine, confirm the preflight reports `7/7 TLDs verified usable`,
then intersect the CSV with the ranked list in `output/08-final-report.md`.

Every name in the final ten is provisional **only** on its domain. All other
research is complete and verified.
