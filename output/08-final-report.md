# Agent 8 — Scoring and Final Report

Product: retail investment and stock trading app · Tecdrich Technologies Limited
Run date: 2026-09-17 · Model: Opus

---

## ⚠️ Read this before the rankings

**No candidate in this report has a verified domain.** Agent 3, the domain gate,
could not be run: this environment's egress policy denies the registry RDAP servers
and blocks TCP/43, so both RDAP and `whois` — the brief's two sanctioned methods —
are unavailable. Full evidence in `output/03-domain-gate.md`.

The brief's instruction for this case was followed exactly: *"If both fail, stop and
report. Do not proceed on unverified domain data."* Nothing here claims a domain is
free, priced, or purchasable.

**Consequences for this report, stated plainly:**

1. **Scores are out of 80, not 100.** The rubric's 20-point "Domain and availability"
   criterion is held open, because its three inputs — `.com` status, trademark
   conflict, handle cleanliness — are respectively unverified, partly verified, and
   unverified. Every score below is `/80`.
2. **The ranking is provisional.** A name whose `.com` turns out to be taken should
   drop out entirely. The ten below are the ten best names *on every dimension that
   could be verified*, ordered so that the product owner can act the moment the
   domain check is run.
3. **The brief's "re-run whois on the top fifteen before scoring" step was not
   performed** — it is the same blocked capability. There is no stale finding here
   because there is no finding at all.
4. **The brief's elimination rule 5** — reject any finalist whose exact handle is
   unavailable on X, Instagram and TikTok — **could not be applied.** All four social
   platforms are CONNECT-denied. No finalist was eliminated or retained on handle
   grounds.

Everything else in the rubric was verified against live sources.

---

## Pipeline funnel

| Stage | In | Out | Removed by |
|---|---|---|---|
| Generation (Agent 2) | — | 120 | — |
| NGX listed-company / ticker screen | 120 | 120 | 0 collisions across 257 NGX entries |
| Linguistic (Agent 4) | 120 | 95 | 25 FAILs |
| Regulatory (Agent 7) | 95 | 95 | 3 HIGH, all already linguistic FAILs |
| Priority set (PASS + no store collision + not reg-MEDIUM) | 95 | 65 | — |
| Deep-research shortlist, territory-spread | 65 | 36 | — |
| Trademark / association (Agent 5) | 36 | 24 | 12 BLOCKED |
| Findability (Agent 6) | 24 | 14 | 10 marked HARD |
| **Final ten** | 14 | **10** | composition rules |
| **Domain gate (Agent 3)** | — | **NOT RUN** | **blocked** |

---

## Scoring rubric as applied

| Criterion | Weight | Status |
|---|---|---|
| Domain and availability | 20 | **HELD OPEN — not scored** |
| Memorability and speakability | 18 | scored (Agent 4) |
| Search and app store findability | 15 | scored (Agent 6) |
| Dual pronunciation | 12 | scored (Agent 4) |
| Distinctiveness | 12 | scored |
| Word of mouth | 10 | scored (Agent 4) |
| Tonal fit | 8 | scored |
| Regulatory safety | 5 | scored (Agent 7) |
| **Total available** | **80** | |

The brief's cap was applied: a candidate marked HARD by Agent 6 cannot score above
6/15 on findability. In practice this removed all ten HARD candidates from
contention before the final cut, which is the correct outcome for a bootstrapped
product — an unfindable name is a permanent tax.

---

## Component scores — the final ten

| # | Name | Terr | Mem /18 | Find /15 | Dual /12 | Dist /12 | WOM /10 | Tone /8 | Reg /5 | **Total /80** |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Northbell** | B | 16 | 14 | 12 | 10 | 7 | 7 | 5 | **71** |
| 2 | **Torven** | A | 15 | 14 | 12 | 10 | 6 | 6 | 5 | **68** |
| 3 | **Keelstone** | B | 15 | 10 | 12 | 11 | 6 | 7 | 5 | **66** |
| 4 | **Rondeva** | A | 14 | 14 | 11 | 9 | 6 | 6 | 5 | **65** |
| 5 | **Larkstone** | B | 15 | 10 | 12 | 10 | 6 | 7 | 5 | **65** |
| 6 | **Stavion** | A | 13 | 10 | 11 | 10 | 6 | 7 | 5 | **62** |
| 7 | **Truetenor** | B | 12 | 14 | 12 | 8 | 5 | 5 | 5 | **61** |
| 8 | **Talvin** | A | 14 | 10 | 11 | 9 | 6 | 6 | 5 | **61** |
| 9 | **Foredeck** | D | 14 | 10 | 12 | 9 | 5 | 6 | 5 | **61** |
| 10 | **Tickline** | C | 14 | 10 | 12 | 9 | 5 | 5 | 5 | **60** |

### Composition rules, applied

- **Territory spread (≥3 required).** Four represented: A coined (4), B compounds (4),
  C market vocabulary (1), D uncommon real word (1). ✓
- **No two finalists share their first three letters.** Nor · Tor · Kee · Ron · Lar ·
  Sta · Tru · Tal · For · Tic — all distinct. ✓
- **Tie-break (within 2 points → prefer lower search difficulty).** Applied between
  Helmstone (62) and Tickline (60). Both WORKABLE, so the tie fell to Agent 5:
  Tickline is CLEAR, Helmstone CONTESTED. **Tickline promoted, Helmstone cut.**
- **Suffix-cluster judgment (added, not in the brief).** The 14-name pool contained
  three `-stone` names. The brief's confusability rule only guards *prefixes*, but
  three near-rhyming finalists would produce exactly the bad decision that rule
  exists to prevent. Capped at two (Keelstone, Larkstone); this is what cut
  Helmstone alongside the tie-break. The same reasoning was flagged in
  `02-longlist.md` about the `-a` ending cluster — the final ten contains one
  `-a`-final name, well inside the ≤3 recommendation.

---

## The ten, in order

### 1. Northbell — 71/80

- **Derivation.** *North* (a bearing, the direction you steer by) + *bell* (the
  opening bell that starts a trading session). Two ordinary English words.
- **Why it fits.** It is the only name in the set that encodes both halves of the
  product — direction and the market day — without making a claim about returns.
  Two plain words means a Nigerian listener spells it correctly from a voice note on
  the first try, which is the single highest-leverage property for a brand that has
  to spread by word of mouth.
- **Positioning.** Steady guidance into the market. Not a tipster, not a casino.
- **Brand statement.** *Know which way you're headed before the bell.*
- **App Store.** `Northbell: Stock Investing` (26 chars) · subtitle `Invest in NGX & US Stocks` (25 chars). Name is 9 characters, leaving ample subtitle room for keywords.
- **Support call.** "You're through to Northbell, how can I help?" — credible, institutional without being cold.
- **Domain.** **UNVERIFIED.** Check `northbell.com` first, then `.ng`.
- **Verb form.** None. Produces a natural place-noun ("I keep my shares on Northbell").
- **Principal weakness.** No verb and no user noun, so it does not generate its own
  word-of-mouth grammar the way "I Robinhooded it" or a "Piggy" user does. It is also
  the most conventional-sounding name in the ten — safe rather than distinctive.

### 2. Torven — 68/80

- **Derivation.** Coined. Two syllables, hard consonant frame, no prior meaning.
- **Why it fits.** The shortest name in the ten at 6 characters, which buys the most
  App Store subtitle room of any candidate. A coined word with no prior meaning
  typically ranks for itself within weeks — Agent 6 marked it EASY.
- **Positioning.** Modern, solid, unfussy. Reads as infrastructure rather than as a
  savings jar.
- **Brand statement.** *Own a piece of the market.*
- **App Store.** `Torven — Stocks & Shares` (24 chars) · subtitle `Buy NGX and US Stocks` (21 chars).
- **Support call.** "You're through to Torven, how can I help?" — crisp, confident.
- **Domain.** **UNVERIFIED.** 6-letter coinages are the borderline case at this
  budget; investors hold most 4–5 letter coinages but 6 is often still free. Check
  `torven.com` first.
- **Verb form.** None.
- **Principal weakness.** Reads slightly Nordic and cold — the least *warm* name in
  the ten, against a brief that explicitly asks for approachable. Agent 5 marked it
  CONTESTED on a lower-severity conflict.

### 3. Keelstone — 66/80

- **Derivation.** *Keel* (the structural backbone that keeps a ship upright) +
  *stone*. The keel is not what makes a ship fast; it is what stops it capsizing.
- **Why it fits.** The best metaphor in the set for what a first-time investor
  actually wants — not spectacular returns but the confidence not to be capsized.
  It earns the highest distinctiveness score of the ten (11/12).
- **Positioning.** Stability as the feature. Directly counter-programmes the
  get-rich-quick framing that Nigerian retail investing carries after MMM and MBA Forex.
- **Brand statement.** *The steady part of your money.*
- **App Store.** `Keelstone: Invest in Stocks` (27 chars) · subtitle `NGX & US Shares, Simply` (23 chars).
- **Support call.** "You're through to Keelstone, how can I help?" — sounds like a firm that has been around longer than it has.
- **Domain.** **UNVERIFIED.** A two-word compound of ordinary words is the single
  most reliable route to a free `.com` at this budget. Best structural odds in the ten.
- **Verb form.** None.
- **Principal weakness.** Agent 6 marked it WORKABLE rather than EASY, and Agent 5
  CONTESTED — so it will take longer to own page one than Northbell or Torven, and it
  carries a live lower-severity name conflict that needs a lawyer's eye.

### 4. Rondeva — 65/80

- **Derivation.** Coined from *rendezvous* — a meeting point, an appointment kept.
- **Why it fits.** Agent 4 ranked it in the strongest 15 on linguistics alone, noting
  it "rolls off the tongue in every accent tested." Agent 5 found it fully CLEAR and
  Agent 6 marked it EASY — the only name in the ten clean on both.
- **Positioning.** The place you and the market meet. Warm, human, appointment-like.
- **Brand statement.** *Where your money meets the market.*
- **App Store.** `Rondeva: Stocks & Investing` (27 chars) · subtitle `Invest in NGX & US Stocks` (25 chars).
- **Support call.** "You're through to Rondeva, how can I help?" — warm, approachable.
- **Domain.** **UNVERIFIED.** 7-letter coinage; reasonable odds.
- **Verb form.** None.
- **Principal weakness.** The spelling is not self-evident from hearing — a listener
  may try *Rondeeva* or *Rondiva*. It is also the one `-a`-final name in the ten, and
  reads slightly soft for a trading product.

### 5. Larkstone — 65/80

- **Derivation.** *Lark* (the bird that sings at first light; also "up with the lark",
  early) + *stone*.
- **Why it fits.** Warm and optimistic without touching the banned growth-and-returns
  vocabulary. Trivially spellable from a voice note.
- **Positioning.** Early, bright, unintimidating. Aimed squarely at the first-time investor.
- **Brand statement.** *Start early. Stay steady.*
- **App Store.** `Larkstone: Invest in Stocks` (27 chars) · subtitle `NGX & US Shares for You` (23 chars).
- **Support call.** "You're through to Larkstone, how can I help?" — friendly, credible.
- **Domain.** **UNVERIFIED.** Ordinary-word compound; good structural odds.
- **Verb form.** None.
- **Principal weakness.** Agent 6 found the `Lark-` prefix autocompletes toward Lark
  Technologies in app store browse, which permanently costs some discovery traffic.
  It also reads somewhat English-pastoral rather than Nigerian.

### 6. Stavion — 62/80

- **Derivation.** Coined from Latin *stare*, to stand firm.
- **Why it fits.** Distinctive, modern, and fully CLEAR on trademark and association.
  Three syllables that land the same way in Lagos and New York.
- **Positioning.** Something that holds its ground. Confident and contemporary.
- **Brand statement.** *Stand in the market.*
- **App Store.** `Stavion — Stocks & Shares` (25 chars) · subtitle `Buy NGX and US Stocks` (21 chars).
- **Support call.** "You're through to Stavion, how can I help?" — modern, assured.
- **Domain.** **UNVERIFIED.** 7-letter coinage.
- **Verb form.** None.
- **Principal weakness.** The `Stav-` prefix autocompletes to Strava in store browse,
  and the spelling has real alternates (*Stavian*, *Staveon*) that a listener may try
  first.

### 7. Truetenor — 61/80

- **Derivation.** *True* + *tenor*. In finance a "tenor" is the term to maturity of an
  instrument — the length of time you hold.
- **Why it fits.** Agent 6 rated it EASY, the only name in its whole shard to earn
  that: a scattered, low-authority page one with nothing to displace. For an unfunded
  company that is worth a great deal.
- **Positioning.** Honest about time horizons. Investing as duration, not as a bet.
- **Brand statement.** *Invest for the term you actually have.*
- **App Store.** `Truetenor: Invest in Stocks` (27 chars) · subtitle `NGX & US Stocks, Long Term` (26 chars).
- **Support call.** "You're through to Truetenor, how can I help?" — a little formal but sound.
- **Domain.** **UNVERIFIED.** Ordinary-word compound; good structural odds.
- **Verb form.** None.
- **Principal weakness.** The dominant everyday meaning of "tenor" is the singing
  voice, not the finance term — so the name's actual idea is invisible to exactly the
  first-time investors it targets. Weakest distinctiveness and tonal scores in the ten.

### 8. Talvin — 61/80

- **Derivation.** Coined, built on a *tally* root — the counting of what is yours.
- **Why it fits.** Short (6 characters), clean, easy in every accent tested, and
  leaves maximum App Store subtitle room.
- **Positioning.** Plain accounting of what you own. Unshowy.
- **Brand statement.** *Every share, counted.*
- **App Store.** `Talvin — Stocks & Shares` (24 chars) · subtitle `Invest in NGX & US Stocks` (25 chars).
- **Support call.** "You're through to Talvin, how can I help?" — clean and human.
- **Domain.** **UNVERIFIED.** 6-letter coinage; borderline at this budget.
- **Verb form.** None.
- **Principal weakness.** Talvin reads as a personal first name (Talvin Singh is a
  well-known British musician), so it will always sound slightly like a person rather
  than a product. Agent 5 marked it CONTESTED.

### 9. Foredeck — 61/80

- **Derivation.** A real but uncommon English word: the forward deck of a ship, where
  you stand to see what is coming.
- **Why it fits.** The only uncommon-real-word candidate to survive the full pipeline —
  Agent 5 CLEAR, Agent 6 WORKABLE. Real words normally die at the findability gate;
  this one is obscure enough to survive it while still being a genuine word.
- **Positioning.** Forward visibility. You can see where you are going.
- **Brand statement.** *See what's ahead of your money.*
- **App Store.** `Foredeck: Invest in Stocks` (26 chars) · subtitle `NGX & US Shares, Simply` (23 chars).
- **Support call.** "You're through to Foredeck, how can I help?" — solid, nautical, credible.
- **Domain.** **UNVERIFIED.** Uncommon real word — genuinely uncertain, could go
  either way.
- **Verb form.** None.
- **Principal weakness.** The nautical meaning is opaque to a Lagos audience with no
  sailing reference; it will need to be explained rather than being self-evident. It
  is also the third nautical name in the ten (with Keelstone and, loosely, Northbell) —
  a thematic narrowness worth noticing.

### 10. Tickline — 60/80

- **Derivation.** *Tick* (the minimum price increment a stock moves in — real market
  vocabulary) + *line*.
- **Why it fits.** The only market-vocabulary name to survive. It signals the
  category to people who already know it, without touching a regulated-status word.
  Agent 5 CLEAR.
- **Positioning.** Close to the market mechanics. For the user who wants to feel the
  price move.
- **Brand statement.** *Every tick, in your pocket.*
- **App Store.** `Tickline: Stocks & Shares` (25 chars) · subtitle `Live NGX & US Stock Prices` (26 chars).
- **Support call.** "You're through to Tickline, how can I help?" — fine, slightly technical.
- **Domain.** **UNVERIFIED.**
- **Verb form.** None.
- **Principal weakness.** "Tick" reads as a parasite or a checkmark to anyone outside
  trading, and the name is the most jargon-dependent in the ten — it rewards
  knowledge the target audience does not yet have. Lowest tonal-fit score.

---

## Comparison table

| # | Name | Terr | Score /80 | Findability | Trademark | Chars | The idea | Principal weakness |
|---|---|---|---|---|---|---|---|---|
| 1 | Northbell | B | 71 | **EASY** | CLEAR | 9 | A bearing + the opening bell | Conventional; no verb form |
| 2 | Torven | A | 68 | **EASY** | CONTESTED | 6 | Coined; solid and short | Cold, least warm of the ten |
| 3 | Keelstone | B | 66 | WORKABLE | CONTESTED | 9 | The keel keeps you upright | Slower to rank; live name conflict |
| 4 | Rondeva | A | 65 | **EASY** | CLEAR | 7 | A rendezvous with the market | Spelling not obvious from hearing |
| 5 | Larkstone | B | 65 | WORKABLE | CLEAR | 9 | Up with the lark; early and steady | `Lark-` autocompletes elsewhere |
| 6 | Stavion | A | 62 | WORKABLE | CLEAR | 7 | Latin *stare*, to stand firm | `Stav-` autocompletes to Strava |
| 7 | Truetenor | B | 61 | **EASY** | CLEAR | 9 | A true term to maturity | "Tenor" reads as the singing voice |
| 8 | Talvin | A | 61 | WORKABLE | CONTESTED | 6 | A tally of what you own | Reads as a person's first name |
| 9 | Foredeck | D | 61 | WORKABLE | CLEAR | 8 | Stand where you can see ahead | Nautical sense opaque in Lagos |
| 10 | Tickline | C | 60 | WORKABLE | CLEAR | 8 | Every tick of the price | Jargon-dependent; "tick" = parasite |

---

## Exact acquisition cost

**Cannot be stated for any candidate.** Domain price is the dominant term and it is
unverified. What *is* known:

| Item | Status |
|---|---|
| `.com` registration, if free | ~USD 10–15 at a standard registrar — **conditional on the gate** |
| `.ng` / `.com.ng`, if needed | typically USD 15–40/yr via a NiRA-accredited registrar — unverified |
| Social handles (X, IG, TikTok, LinkedIn) | free to claim if available — **availability unverified, all platforms blocked** |
| Nigerian trademark search, classes 9 and 36 | attorney engagement, **advisable before committing** for all ten |
| **Total for the top choice** | **cannot be computed until the domain gate is run** |

A trademark search is **strongly advisable** before committing for the three
CONTESTED names — Torven, Keelstone and Talvin — and advisable for all ten.

---

## Late eliminations, for audit

**Cut by Agent 5 (trademark / association), 12 names.** Each has a live conflict:

| Name | Killer fact |
|---|---|
| Bollard | **Bollard Group** — an actively branded *Nigerian* finance/investment conglomerate in Lagos since 2019, with live handles. The most direct same-country, same-sector collision in the run. |
| Quantal | Exact-match live US trademark for investment-portfolio software (Class 9) *and* portfolio-management consulting (Class 36) — literally this product's description. |
| Camber | `CAMBER CAPITAL MANAGEMENT` live Class 36 mark; Camber Energy (NYSE:CEI) carries a documented securities-fraud investigation history. |
| Corbel | Corbel Capital Partners (~USD 1.5B AUM); a same-named company is also CAC-registered in Nigeria. |
| Lintel | Lintel Capital (Sub-Saharan Africa credit fund) and Lintel Financial Services Plc (UK). |
| Longtide | Longtide Financial Partners — an active US registered investment advisor on `longtide.com` since 2006. |
| Keelson | Keelson Partners, active US financial and risk-management firm. |
| Fulcra | Live US trademark `FULCRA` for crowdfunding and financing services, Class 36. |
| Cordant | "Cordant AI" markets itself as a payment platform for fintechs and banks. |
| Lumera | Lumera Group, live insurtech; same-named consumer brand carries public scam complaints. |
| Norvell | Norvell Tanning, major global consumer brand, owns essentially every usable handle. |
| Emberlane | `EMBERLINE`, one letter different, live US mark for investment advice and fund management. |

**Cut by Agent 6 (findability), 10 names.** Tenura, Equora, Ordena, Librova,
Marketday, Tallyhouse, Mainmast, Slatehouse, Midprice, Windlass. The instructive
cases: **Marketday** — Agent 4's second-strongest name on pure linguistics, with
genuine Igbo four-day-market resonance, killed by a live same-name App Store app and
real Wikipedia-documented entities. **Tallyhouse** — App Store completely empty, but
`tallyhouseapp.com` is a live, name-identical, *category-identical* competitor
(personal wealth tracking) that simply has not shipped to the store yet. **Equora** —
four live same-name apps including two unrelated fintech platforms.

**Cut by composition rules, 1 name.** Helmstone (62/80) — lost the tie-break to
Tickline on trademark status, and was the third `-stone` name.

**Cut earlier:** 25 by Agent 4 (linguistics), including all ten of Territory E, the
respelled words, which fail the voice-note spelling test by construction — a listener
hearing "LEJ-er" types *Ledger* and finds nothing. **Gudgeon** was cut for meaning:
it is standing English idiom for *a person easily cheated*, which is close to the
worst possible connotation for a company holding retail investors' money. 3 by
Agent 7, including the whole `bourse` family, where Agent 7 overruled the brief's own
sanctioned-vocabulary table on the grounds that *bourse* is ordinary finance
vocabulary in West African media and reads as an exchange claim without any French
required.

---

## What a human must verify before money is spent

In priority order.

1. **Run the domain gate.** `./scripts/check-domains.sh output/names-120.txt --shards 4`
   on an unrestricted machine. Confirm the preflight header reports `7/7 TLDs verified
   usable` before believing any column. **Nothing else on this list matters until this
   is done** — a name whose `.com` is gone drops out regardless of its score.
2. **Confirm at a registrar.** RDAP tells you a domain is unregistered; it does not
   tell you it is not premium-priced. The USD 200 ceiling is only satisfied at
   checkout.
3. **Nigerian trademark search, classes 9 and 36, by a Nigerian attorney.**
   `iponigeria.gov.ng` was unreachable for all 36 candidates — there is *no* Nigerian
   trademark data in this run at all. This is a material gap, not a formality.
4. **CAC company search** at `search.cac.gov.ng` for all finalists. The CAC site
   returned 403; company-conflict findings came only from incidental web results, not
   a direct search. Bollard was caught this way by luck, which means others may have
   been missed.
5. **Social handle check on live platforms.** X, Instagram, TikTok and LinkedIn were
   all blocked. Every handle statement in this run is inference from indexed search
   results, which can prove a conflicting account exists but can never prove a handle
   is free. Check the exact strings and a common suffix set, and confirm one
   consistent handle is achievable across all four.
6. **Pronunciation test with Yoruba, Igbo and Hausa speakers.** Agent 4's assessment
   is a model's linguistic judgment, not fieldwork. Test the shortlist out loud with
   native speakers of all three, and confirm that no name reads as belonging to one
   ethnic group.
7. **EUIPO** was never queried — blocked.

---

## Every UNVERIFIED item in this run

Per the brief: *"Silence on an unchecked item is worse than the gap itself."*

| Item | Scope | Cause |
|---|---|---|
| **Domain availability, all TLDs** | **all 120** | **RDAP CONNECT-denied; TCP/43 blocked** |
| **Domain pricing** | **all 120** | **dependent on the above** |
| Nigeria trademarks (IPO Nigeria) | all 36 | `iponigeria.gov.ng` CONNECT-denied |
| CAC company name search | all 36 | `search.cac.gov.ng` returns 403 |
| EUIPO trademarks | all 36 | CONNECT-denied |
| Social handles — X, Instagram, TikTok, LinkedIn | all 36 | all four platforms CONNECT-denied |
| Google SERP, direct inspection | all 36 | `google.com/search` CONNECT-denied — WebSearch used as substitute |
| Google Trends volume figures | all 36 | `trends.google.com` 301, not reliably usable |
| Play Store per-name rank | Librova, Ordena, Tallyhouse | JS-rendered pages defeat curl scraping |
| App Store autocomplete, true | all 36 | not independently queryable; iTunes-API prefix used as a proxy |
| NGX full company names | ~smaller tickers | only ticker symbols obtainable; ~180 tickers is a superset, so the screen is safe |

**Verified against live sources:** NGX ticker collision (257 entries, 0 hits), Apple
App Store exact-name collision (120/120 via the iTunes Search API, NG storefront),
WIPO and USPTO trademark hits, and association risk via web search.
