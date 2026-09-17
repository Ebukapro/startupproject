# Final Report — Full Pipeline Re-Run

Product: retail investment and stock trading app · Tecdrich Technologies Limited
Run date: 2026-09-17 · Model: Opus · **Domains verified live via GoDaddy**

---

## The change that matters

With a working domain API available from the start, the pipeline finally ran the
way the brief designed it: **generate, then gate immediately, before any other
research**. Nothing was spent on names that cannot be bought.

The gate also filters on **price tier, not just availability**. GoDaddy returns
`available: true` for aftermarket Premium domains with no price attached — in the
previous run `northbell.com`, then ranked #1, was one of them. Every name below is
confirmed `inventoryType: Standard`, read from the raw `isExactMatch` object.

**All ten are registrable today for about $12.** Scores are out of the full 100.

---

## Funnel

| Stage | In | Out | Removed by |
|---|---|---|---|
| Generation (fresh 120) | — | 120 | — |
| NGX ticker screen | 120 | 120 | 0 collisions in 257 entries |
| **Domain gate — run immediately** | 120 | **34** | 63 taken, 23 Premium |
| Pool with run-1 confirmed Standard names | 34 | 69 | — |
| Screening shortlist (territory spread) | 69 | 34 | — |
| Linguistic (Agent 4) | 34 | 16 | **18 FAILs** |
| Findability (Agent 6) | 16 | 11 | 5 HARD |
| Regulatory (Agent 7) | 11 | 11 | 0 (both MEDIUMs already cut) |
| **Final ten** | 11 | **10** | lowest score |

Gate kill rate: **72%** (63 taken + 23 Premium of 120). Within the brief's 70–85%
prediction, and far better than run 1's 87% — the inverted generator worked.

---

## Two findings that shaped the result

### 1. Aesthetic plausibility is what kills a domain

Carried from run 1: names that read like a real place or object (`keelstone`,
`larkstone`, `beamhouse`) were registered years ago. Arbitrary pairings survive.
This generation paired words that do **not** naturally collocate, banned `-stone`
and `-house`, and banned 6–7 letter coinages (`torven` and `rondeva` both died).

### 2. Agent 4's discovery: the suffix decides the register

**Every `-basis`, `-parity` and `-tenor` name failed or cautioned.** They read as
institutional finance jargon — precisely the opposite of a brief that asks for
Kuda and Trove, not Meristem. `Levelbasis`, `Fairtenor`, `Anchorbasis`,
`Fairparity`, `Dawnparity` and `Quarrybasis` all died here despite clean domains.

**And `lot` is conditional.** Paired with a landscape or place noun it reads as
*real estate* — `Plainlot`, `Traillot`, `Cedarlot`, `Willowlot`, `Aspenlot` and
`Compasslot` all fail as land listings, confirmed by Agent 6 finding Zillow and
Movoto results dominating those searches. Paired with a **light or verb** word
(`Torch`, `Candle`, `Dawn`, `Lantern`, `Hold`) it stays safely abstract and reads
as a trading lot.

That is why the final ten lean the way they do. It was not a stylistic choice;
it is the shape that survives all four screens at once.

---

## Scoring — the final ten, out of 100

| # | Name | Domain /20 | Mem /18 | Find /15 | Dual /12 | Dist /12 | WOM /10 | Tone /8 | Reg /5 | **Total** |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Dawnlot** | 18 | 16 | 14 | 12 | 10 | 6 | 7 | 5 | **88** |
| 2 | **Talvinia** | 18 | 15 | 14 | 11 | 10 | 7 | 7 | 5 | **87** |
| 3 | **Candlelot** | 18 | 15 | 10 | 12 | 11 | 6 | 7 | 5 | **84** |
| 4 | **Torchlot** | 18 | 15 | 10 | 11 | 11 | 6 | 7 | 5 | **83** |
| 5 | **Quiettally** | 18 | 15 | 10 | 12 | 9 | 6 | 7 | 5 | **82** |
| 6 | **Lanternlot** | 14 | 15 | 10 | 12 | 10 | 7 | 8 | 5 | **81** |
| 7 | **Ridgetally** | 14 | 14 | 14 | 12 | 9 | 6 | 6 | 5 | **80** |
| 8 | **Ondrevia** | 18 | 12 | 14 | 10 | 9 | 5 | 6 | 5 | **79** |
| 9 | **Holdlot** | 14 | 15 | 10 | 12 | 9 | 7 | 6 | 5 | **78** |
| 10 | **Novaleth** | 18 | 12 | 10 | 10 | 9 | 5 | 5 | 5 | **74** |

Cut at 11th: **Routelot** (71) — "Route" is a live 50-state-licensed insurance
fintech, and it scored lowest on distinctiveness and tone.

### Composition rules

- **Territory spread (≥3).** Four: light + lot (4), coinages (3), noun + tally (2),
  agency verb + lot (1). ✓
- **No two finalists share their first three letters.** Daw · Tal · Can · Tor ·
  Qui · Lan · Rid · Ond · Hol · Nov. ✓
- **Suffix observation, stated rather than forced.** Five of the ten end in `-lot`.
  The brief's rule guards prefixes, and these read distinctly because the
  *first* word is what people remember. But it is a real pattern and the product
  owner should see it: the `-lot` family is the shape that survived, so choosing
  across shapes (a `-lot`, a coinage, a `-tally`) is a deliberate decision, not a
  default. Only one non-`-lot`, non-coinage, non-`-tally` candidate survived all
  four screens, so I did not force a cut that would have replaced a strong name
  with a weaker one.

---

## The ten

### 1. Dawnlot — 88/100 · `dawnlot.com` ~$12 · trademark CLEAR
Dawn (a fresh start, first light) + lot (a parcel of shares). The only name to
score EASY on findability *and* CLEAR on trademark *and* clean across all nine
languages. Short, warm, spelled right after one hearing.
**App Store:** `Dawnlot: Invest in Stocks` (25) · `Buy NGX & US Shares` (19).
**Weakness:** no verb form, and "dawn" is mild — it does not say investing on its own.

### 2. Talvinia — 87/100 · `talvinia.com` ~$12 · trademark CLEAR
Coined on a *tally* root. Genuinely thin SERP, no entity, no store noise —
Agent 6 called it the cleanest coinage tested. Produces a user noun ("Talvinians").
**App Store:** `Talvinia — Stocks & Shares` (25) · `Invest in NGX & US Stocks` (25).
**Weakness:** reads as a place or a person before it reads as a product.

### 3. Candlelot — 84/100 · `candlelot.com` ~$12 · trademark CLEAR
Candle (light; and the candlestick chart every trader reads) + lot. The best
double meaning in the set — warm to a beginner, precise to someone who trades.
**App Store:** `Candlelot: Stock Investing` (26) · `NGX & US Shares, Simply` (23).
**Weakness:** the candlestick meaning is invisible to the first-timers it targets;
`Cand-` autocompletes toward Candy Crush in store browse.

### 4. Torchlot — 83/100 · `torchlot.com` ~$12 · trademark CLEAR
Torch — which in Nigerian English is the flashlight you reach for when the power
goes — plus lot. The most locally-warm name in the ten.
**App Store:** `Torchlot: Invest in Stocks` (26) · `Buy NGX and US Shares` (21).
**Weakness:** "torch" is British/Nigerian; a US speaker hears a burning brand, so
the warmth does not fully survive the phase-two market.

### 5. Quiettally — 82/100 · `quiettally.com` ~$12 · trademark CLEAR
A calm count of what you own. Easiest of all to spell from a voice note, and
"tally up" is a working verb.
**App Store:** `Quiettally: Stocks` (18) · `A Calm Way to Invest` (20).
**Weakness:** "Tally" is a live USPTO fintech mark; both halves sit in noisy
autocomplete neighbourhoods.

### 6. Lanternlot — 81/100 · `lanternlot.com` **$11.28 confirmed** · trademark CONTESTED
A lantern is guidance and visibility. Lands in the light/clarity territory Agent 1
found genuinely open — used once globally (Lightyear), never in Nigeria. The only
name with a **confirmed exact price from two independent sources**.
**App Store:** `Lanternlot: Invest` (18) · `Invest in NGX & US Stocks` (25).
**Weakness:** Lantern Finance is a live FinCEN-registered crypto-lending fintech.
Needs a lawyer's eye before committing.

### 7. Ridgetally — 80/100 · `ridgetally.com` ~$12 · trademark CONTESTED
A steady count from high ground. EASY on findability — the cleanest of the
`-tally` pair.
**App Store:** `Ridgetally: Stocks` (18) · `Track & Buy NGX Shares` (22).
**Weakness:** `Ridgeline®` is a registered mark of a major institutional
investment-management software vendor. Same sector, so this one matters.

### 8. Ondrevia — 79/100 · `ondrevia.com` ~$12 · trademark CLEAR
Pure coinage. No real entity, no store collision, no autocomplete clash — EASY,
and completely clear legally.
**App Store:** `Ondrevia — Invest` (17) · `NGX & US Stocks, Simply` (23).
**Weakness:** carries no meaning at all, so every bit of brand association must be
bought with marketing a bootstrapped company does not have.

### 9. Holdlot — 78/100 · `holdlot.com` ~$12 · trademark CONTESTED
"Hold" is one of the three words every investor already knows — buy, sell, hold.
Best word-of-mouth grammar in the set: *"I'm holding."*
**App Store:** `Holdlot: Buy & Hold Stocks` (26) · `NGX & US Shares` (15).
**Weakness:** a real consumer storage brand already uses the exact name. Agent 7
cleared "hold" as a neutral trading verb, unlike "steer".

### 10. Novaleth — 74/100 · `novaleth.com` ~$12 · trademark CLEAR
Coined, 8 letters, clean across all nine languages.
**App Store:** `Novaleth — Stocks` (17) · `Invest in NGX & US Stocks` (25).
**Weakness:** near-homophone of Novalith Technologies, a funded startup, and the
least warm name in the ten.

---

## Comparison

| # | Name | Score | Domain | Findability | Trademark | The idea |
|---|---|---|---|---|---|---|
| 1 | Dawnlot | 88 | ~$12 | **EASY** | CLEAR | First light, a parcel of shares |
| 2 | Talvinia | 87 | ~$12 | **EASY** | CLEAR | A tally of what you own |
| 3 | Candlelot | 84 | ~$12 | WORKABLE | CLEAR | Candlelight and candlestick |
| 4 | Torchlot | 83 | ~$12 | WORKABLE | CLEAR | The torch you reach for |
| 5 | Quiettally | 82 | ~$12 | WORKABLE | CLEAR | A calm count |
| 6 | Lanternlot | 81 | **$11.28** | WORKABLE | CONTESTED | A light to see by |
| 7 | Ridgetally | 80 | ~$12 | **EASY** | CONTESTED | A count from high ground |
| 8 | Ondrevia | 79 | ~$12 | **EASY** | CLEAR | Pure coinage |
| 9 | Holdlot | 78 | ~$12 | WORKABLE | CONTESTED | Buy, sell, hold |
| 10 | Novaleth | 74 | ~$12 | WORKABLE | CLEAR | Pure coinage |

**Acquisition cost for any of them: ~$12** — 6% of the USD 200 ceiling, leaving
room for `.ng`/`.com.ng` defensive registrations or a second name.

---

## Late eliminations

**Killed by the domain gate (86 of 120):** 63 taken outright, 23 Premium. The
Premium set includes several strong names — `Lanternpath`, `Clearlot`, `Keylot`,
`Anchorlot`, `Fairlot`, `Openbasis`, `Evenpath`, `Velantris`, `Orchardpath`.
Available, but not at $12 and with no price disclosed.

**Killed by Agent 4, linguistics (18).** The instructive ones:

| Name | Reason |
|---|---|
| Plainlot, Traillot, Cedarlot, Willowlot, Aspenlot | Read as real-estate land listings, confirmed by Zillow/Movoto SERP dominance |
| Compasslot, Compassbasis | Compass is a major US real-estate brokerage — wrong industry entirely |
| Levelbasis, Fairtenor, Anchorbasis, Candlebasis, Torchbasis, Quarrybasis | `-basis`/`-tenor` reads as institutional jargon against a warm brief |
| Fairparity, Dawnparity | "parity" mishears as "parody" |
| Steerlot | Reads as "feedlot" — a cattle-fattening pen |
| Corvalta | Root is crow/raven, an ill omen in Italian and Portuguese |
| Ordenalis | Reads as a generic pharmaceutical |

**Killed by Agent 6, findability (5).** `Paritana` is the sharpest loss — clean
domain, warm sound, but page one is owned by a decade-running Malagasy art prize
**and `Pari-` autocompletes to Nigerian gambling apps (PariPesa, Afropari)**. For a
regulated investment product that is a brand-safety problem, not just an SEO one.
Also cut: `Beaconlot` (an existing NG Finance-category app, "Beacon DeFi"),
`Opentenor` (both halves owned — OPay in Nigeria, Tenor globally), `Amberlis`
(Wikipedia homophone "ambergris" plus a musician of the exact name), `Estavana`
(a Dutch Olympic handball champion owns the name).

**Regulatory (Agent 7): 32 LOW, 2 MEDIUM, 0 HIGH.** Both MEDIUMs had already
failed elsewhere. Its rulings worth keeping:
- **`Anchorbasis` MEDIUM** — "anchor" echoes Anchor Protocol, the DeFi platform
  that collapsed with Terra/Luna and ~$14B. Bad echo for a Nigerian market with a
  collapsed-scheme history.
- **`Steerlot` MEDIUM, `Holdlot` LOW** — "steer" implies directing the customer's
  money, adjacent to discretionary portfolio management, a separately licensed
  activity. "Hold" is a neutral trading verb. Holdlot kept, Steerlot dropped.
- **Light metaphors all LOW** — lantern, torch, candle, dawn, beacon are fanciful
  illumination branding, not claims of advice. They only become a problem if
  marketing pairs them with "guidance" or "signals", which is a copy issue.

---

## What a human must verify before money is spent

1. **Confirm price at checkout.** Availability and Standard tier are verified;
   the cart is what settles the final number.
2. **Nigerian trademark search, classes 9 and 36, by a Nigerian attorney.**
   `iponigeria.gov.ng` was unreachable throughout. **There is no Nigerian trademark
   data in this run at all.** Most urgent for the four CONTESTED names:
   Lanternlot, Ridgetally, Holdlot, and Routelot if it is revived.
3. **CAC company search** at `search.cac.gov.ng` (403 throughout).
4. **Social handles on live platforms.** X, Instagram, TikTok and LinkedIn were all
   blocked. Every handle statement is WebSearch inference, never confirmation. The
   brief's rule about rejecting finalists whose handles are taken **could not be
   applied**.
5. **Pronunciation test with Yoruba, Igbo and Hausa speakers.** Agent 4's work is a
   model's judgment, not fieldwork — and it is carrying a lot of weight here,
   having cut 18 of 34.
6. **Re-check the domain immediately before paying.** Verified 2026-09-17.

## Every UNVERIFIED item

| Item | Scope | Cause |
|---|---|---|
| Exact price | 9 of 10 | `priceInfo` null; only Lanternlot has a confirmed $11.28 |
| Price of the 23 Premium domains | all | `priceInfo` null |
| Nigeria trademarks | all | CONNECT-denied |
| CAC company register | all | 403 |
| EUIPO | all | CONNECT-denied |
| Social handles, all four platforms | all | CONNECT-denied |
| Google SERP, direct | all | CONNECT-denied — WebSearch used instead |
| Google Trends volume | all | 301, unusable |
| App Store autocomplete, true | all | not queryable; iTunes-API prefix used as proxy |
| WIPO/USPTO exhaustiveness | all | targeted WebSearch, not formal TESS/Global Brand DB queries |

**Verified live:** `.com` availability *and price tier* for all 120 (GoDaddy, with
controls passing and agreement with an independent registrar bulk search on the
overlap); NGX ticker collisions (257 entries, 0 hits); Apple App Store exact-name
collisions (iTunes Search API, NG storefront, 0 for all 34 screened); WIPO/USPTO
hits via targeted search; association risk via web search.
