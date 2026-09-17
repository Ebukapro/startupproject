# 00 — Run Progress

Run started 2026-09-17. Read this file first if the run is interrupted.

## Headline

**RUN COMPLETE.** The domain gate ran via the GoDaddy MCP connector, which routes
outside this container's blocked egress. All ten finalists have a `.com` confirmed
available at standard price (~$12). Scores are out of the full 100.

RDAP and `whois` remain blocked here; see `03-domain-gate.md` for that evidence and
the hardened scripts, which are still the right tool on an unrestricted machine.

## Agent status

| Agent | Model | Status | Output | Candidates in → out |
|---|---|---|---|---|
| 1. Landscape | Sonnet | done | `research/01-landscape.md` | — |
| 2. Generation | Opus | done | `output/02-longlist.md` | → 120 |
| — NGX screen | script | done | inline | 120 → 120 (no collisions) |
| — App Store collision | script (live iTunes API) | done | `output/appstore-raw.csv` | 120 checked, 21 exact collisions |
| 3. Domain gate | script + GoDaddy | **done** | `03-domain-gate.md`, `03b-gate-round1-analysis.md`, `03-domain-raw.csv` | 87 checked → 35 Standard |
| 2b. Generation round 2 | Opus | done | `output/02b-longlist-round2.md` | → +80 |
| 4b/5b. Round-2 screening | Sonnet | done | `04b-linguistic-round2.md`, `05b-availability-round2.md`, `screen-reserves.md` | 21 → 16 |
| 4. Linguistic | Sonnet | done | `output/04-linguistic.md` | 120 assessed |
| 5. Trademarks/handles | Sonnet | done (12 CLEAR / 12 CONTESTED / 12 BLOCKED) | `output/05-availability.md` | 36 shortlist |
| 6. Search + ASO | Sonnet | done (4 EASY / 11 WORKABLE / 21 HARD) | `output/06-seo-aso-{a,b}.md` | 36 shortlist |
| 7. Regulatory | Sonnet | done | `output/07-regulatory.md` | 120 assessed |
| 8. Scoring + report | Opus | done | `output/08-final-report.md`, `output/09-client-shortlist.md` | → 10 ranked |

## Gate counts

| Gate | Surviving |
|---|---|
| Generated | 120 |
| After NGX collision screen | 120 |
| After linguistic (25 FAILs removed) | 95 |
| After regulatory (3 HIGH removed, all already linguistic FAILs) | 95 |
| Domain gate round 1 | 2 of 15 (87% kill) |
| Domain gate round 2 | 54 available, **35 Standard** |
| Priority set (PASS + no store collision + not reg-MEDIUM) | 65 |
| Deep-research shortlist (Agents 5/6), territory-spread | 36 |
| After trademark/association (12 BLOCKED removed) | 24 |
| After findability (10 HARD removed) | 14 |
| **Final ranked** | **10, all domains confirmed** |

## Next step

Product owner picks a first and second choice from `output/09-client-shortlist.md`,
then: register the `.com` (~$12), and instruct a Nigerian trademark attorney to
search classes 9 and 36 — the Nigerian registry was unreachable throughout, so no
Nigerian trademark check exists for any candidate.

Optional: run the 19 Premium domains in `output/premium-verify.txt` through a
registrar bulk search to get their prices. `northbell.com` is the one worth
checking — it ranked first on every non-domain dimension.
