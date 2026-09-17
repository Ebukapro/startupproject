# 00 — Run Progress

Full pipeline re-run, 2026-09-17. **COMPLETE.**

## Headline

The GoDaddy connector made the domain gate runnable from the start, so the
pipeline ran as the brief designed it: generate, then gate immediately, before any
other research. The gate filters on **price tier**, not just availability, so a
Premium aftermarket domain cannot reach the shortlist as a $12 buy.

**All ten finalists have a `.com` confirmed available at Standard price (~$12).**
Scores are out of the full 100.

## Agent status

| Agent | Model | Status | Output |
|---|---|---|---|
| 1. Landscape | Sonnet | done | `research/01-landscape.md` |
| 2. Generation (fresh 120) | Opus | done | `output/02c-longlist-run2.md` |
| — NGX screen | script | done | 0 collisions in 257 entries |
| 3. Domain gate (ran 2nd, as designed) | GoDaddy | done | `output/R2-03-domain-raw.csv` |
| 4. Linguistic | Sonnet | done | `output/R2-04-linguistic.md` |
| 5. Trademarks/association | Sonnet | done | `output/R2-05-availability.md` |
| 6. Search + ASO | Sonnet (2 shards) | done | `output/R2-06-aso-{1,2}.md` |
| 7. Regulatory | Sonnet | done | `output/R2-07-regulatory.md` |
| 8. Scoring + report | Opus | done | `output/R2-08-final-report.md`, `output/09-client-shortlist.md` |

Agents 4, 5, 6 and 7 ran concurrently on the gated survivors, per the brief.

## Gate counts

| Gate | Surviving |
|---|---|
| Generated | 120 |
| NGX ticker screen | 120 |
| **Domain gate** (63 taken, 23 Premium) | **34 Standard** |
| Pool incl. run-1 confirmed Standard | 69 |
| Screening shortlist, territory spread | 34 |
| Linguistic (18 FAILs) | 16 |
| Findability (5 HARD) | 11 |
| Regulatory (0 removed) | 11 |
| **Final ranked** | **10** |

Gate kill rate 72%, inside the brief's 70–85% prediction and far better than the
first run's 87%.

## Deliverables

- `output/09-client-shortlist.md` — the client-facing page. Ten names, prices, one
  honest weakness each, plus a WhatsApp plain-text version.
- `output/R2-08-final-report.md` — internal: full scoring, funnel, eliminations,
  and every unverified item.

## Next step

Product owner picks first and second choice. Then register the `.com` (~$12) and
instruct a Nigerian trademark attorney to search classes 9 and 36 — the Nigerian
registry was unreachable throughout, so no Nigerian trademark check exists for any
candidate. Most urgent for Lanternlot, Ridgetally and Holdlot.
