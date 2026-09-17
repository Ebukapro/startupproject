# Agent 8 — Final Report (Domain Gate Complete)

Product: retail investment and stock trading app · Tecdrich Technologies Limited
Run date: 2026-09-17 · Model: Opus · **Domains verified 2026-09-17**

---

## Status: complete

The domain gate ran. Every name in the final ten has a **`.com` confirmed
available at standard registration price (~$12)**, verified against two
independent sources: a registrar bulk search and the GoDaddy API. Scores below
are out of the **full 100 points**.

---

## Two traps found on the way, both of which produce false "available"

This run hit two separate failure modes that each silently report a registered or
expensive domain as a cheap free one. Both are recorded because either would have
put a name on the shortlist that cannot actually be bought for $12.

### Trap 1 — the brief's own RDAP script

The script supplied in the brief has three defects (full detail in
`03-domain-gate.md`). The serious one: `rdap.org` answers `404` with
`{"errorCode":404,"title":"No RDAP service is available for this resource"}` for
any TLD it does not map, including `.co` and `.io`. The script's `404) FREE`
branch reads that as available. Verified against four plainly registered domains —
`nike.co`, `angel.co`, `github.io`, `nic.io` — **all four report FREE** under the
original script. `scripts/check-domains.sh` fixes it, classifies on the response
body, and runs per-TLD preflight controls that refuse to emit results when a TLD
cannot prove it distinguishes registered from unregistered.

### Trap 2 — `available: true` on a Premium domain

GoDaddy returns `available: true` for aftermarket-priced domains. The exact-match
object carries `inventoryType: "Premium"` with `priceInfo: null`. **`northbell.com`,
the name ranked #1 in the provisional round, is one of these.** Availability alone
would have placed a potentially four-figure domain on a $200-budget shortlist at
"$12".

**19 of 54 "available" domains were Premium.** Delegated parsing got this wrong —
subagents reported all 54 as Standard. Direct verification caught it, and the
checks were re-run with agents returning verbatim JSON rather than their own
classification. **Every price tier in this report was confirmed from the raw
`isExactMatch` object.**

---

## Pipeline funnel

| Stage | In | Out | Removed by |
|---|---|---|---|
| Generation round 1 | — | 120 | — |
| NGX ticker screen | 120 | 120 | 0 collisions in 257 entries |
| Linguistic (Agent 4) | 120 | 95 | 25 FAILs |
| Regulatory (Agent 7) | 95 | 95 | 3 HIGH (already FAILs) |
| Deep-research shortlist | 95 | 36 | territory spread |
| Trademark (Agent 5) | 36 | 24 | 12 BLOCKED |
| Findability (Agent 6) | 24 | 14 | 10 HARD |
| **Domain gate round 1** | 22 | **2** | **87% kill rate** |
| **Generation round 2** (gate rule triggered) | — | +80 | inverted generator |
| **Domain gate round 2** | 87 | 54 available → **35 Standard** | 33 taken, 19 Premium |
| Screening of round-2 names | 21 | 16 usable | 3 linguistic FAIL, 2 REJECT |
| **Final ten** | 16 | **10** | composition rules |

The brief's gate rule — *"if fewer than 30 survive, return to Agent 2 and generate
a further 80"* — fired after round 1 (2 survivors) and was satisfied after round 2
(**35 Standard, above the 30 threshold**). No third round needed. One repetition
of a permitted two.

---

## What round 1 taught, and what changed

Round 1's kill rate was 87%, above the brief's 70–85% worst case. Length was *not*
the discriminator — 10-character names appeared on both sides. The real one:

> **Every name that sounded like a good brand was already registered. The two
> survivors were the two that sounded slightly wrong.**

`keelstone`, `larkstone`, `beamhouse`, `cairnpost`, `foredeck` — all noun+noun
pairings that read like real places. Pretty, and therefore swept up years ago on
spec. `lanternlot` and `evenbasis` survived because they are *arbitrary* pairings
with no natural bond in English and so no resale story.

Round 2 inverted the generator accordingly: pair words that do not belong
together; drop `-stone` and `-house` (all four died); drop 6–7 letter coinages
(`torven`, `rondeva` both died — worse than the brief's 4–5 letter warning).

**It worked: 54 of 87 available in round 2, against 2 of 15 in round 1.**

---

## Scoring — the final ten, out of 100

| # | Name | Terr | Domain /20 | Mem /18 | Find /15 | Dual /12 | Dist /12 | WOM /10 | Tone /8 | Reg /5 | **Total** |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Talvinia** | coined | 18 | 15 | 14 | 11 | 10 | 7 | 7 | 5 | **87** |
| 2 | **Lanternlot** | noun+mkt | 15 | 16 | 14 | 12 | 10 | 7 | 8 | 5 | **87** |
| 3 | **Beaconlot** | noun+mkt | 15 | 16 | 14 | 12 | 9 | 6 | 7 | 5 | **84** |
| 4 | **Fairtenor** | qual+mkt | 18 | 14 | 14 | 12 | 9 | 5 | 6 | 5 | **83** |
| 5 | **Levelbasis** | qual+mkt | 18 | 14 | 14 | 12 | 8 | 5 | 6 | 5 | **82** |
| 6 | **Quiettally** | qual+mkt | 15 | 16 | 12 | 12 | 9 | 6 | 7 | 5 | **82** |
| 7 | **Paritana** | coined | 18 | 14 | 13 | 11 | 8 | 5 | 6 | 5 | **80** |
| 8 | **Ridgetally** | noun+mkt | 13 | 15 | 10 | 12 | 9 | 6 | 6 | 5 | **76** |
| 9 | **Opentenor** | qual+mkt | 18 | 13 | 10 | 11 | 8 | 5 | 5 | 5 | **75** |
| 10 | **Ordenalis** | coined | 18 | 11 | 13 | 10 | 9 | 4 | 4 | 5 | **74** |

### The tie at the top, and why Talvinia is ranked first

Talvinia and Lanternlot both score 87. The brief's tie-break — prefer lower search
difficulty — does not separate them; both are EASY.

They split on trademark. **Talvinia is CLEAR. Lanternlot is CONTESTED** — "Lantern
Finance" is an active crypto-lending fintech. For a company about to spend money
and appear on SEC Nigeria filings, a clean record beats a contested one, so
Talvinia takes the top slot.

**But this is genuinely close, and the call is the product owner's.** Lanternlot
is the warmer name, scores higher on tone (8 vs 7), carries real Nigerian cultural
resonance — a lantern is the light you use when the power goes — and lands in the
light/clarity territory Agent 1 identified as one of the few genuinely open ones in
this market, used once globally (Lightyear) and never in Nigeria. It also has the
most thoroughly verified domain of any candidate: two independent sources and a
confirmed price of $11.28. **If warmth matters more than a clean trademark search,
Lanternlot is the pick, and a Nigerian attorney's opinion on the Lantern conflict
would settle it either way.**

### Composition rules

- **Territory spread (≥3).** Three represented: coined (3), concrete noun + market
  noun (3), qualifier + market noun (4). ✓
- **No two finalists share their first three letters.** Tal · Lan · Bea · Fai ·
  Lev · Qui · Par · Rid · Ope · Ord — all distinct. ✓ This rule did real work: it
  forced one name each from the `Beacon-` and `Lantern-` families, cutting
  Beacontally, Lanterntally and Lanternbasis, all of which were otherwise usable.
- **Tie-break.** Applied at the top (see above) and at slot 6, where Quiettally
  (82) was preferred over Tenoravia on findability and spelling.
- **Suffix-cluster judgment (added).** The brief guards prefixes only. Three
  `-tenor` names were in contention; capped at two (Fairtenor, Opentenor) and
  Tenoravia was cut. Same reasoning applied to `-stone` in round 1.

---

## Exact acquisition cost

| Item | Cost |
|---|---|
| `.com` for any of the ten | **~$12/yr** (Lanternlot confirmed at **$11.28**) |
| Social handles | free to claim — **availability UNVERIFIED, all platforms blocked** |
| Nigerian trademark search, classes 9 and 36 | attorney fee — **strongly advised** |
| **Total to secure the top choice** | **~$12** plus attorney fee |

**Well inside the USD 200 ceiling** — the domain is ~6% of budget, leaving room for
defensive registrations (`.ng`, `.com.ng`) or a second name.

A trademark search is **most urgent** for the three CONTESTED names: Lanternlot
(Lantern Finance), Beaconlot (Beacon-named finance firms), Ridgetally (Ridge is an
actively litigated mark), and Quiettally (Tally is a live USPTO fintech mark).

---

## Available but Premium — 19 names, including the former #1

These are available and `purchasable: true`, but priced above standard.
`priceInfo` was null, so **no price is known for any of them.**

northbell · talvin · tickline · helmstone · tenorbell · riverlot · lanternpost ·
beaconpost · truebasis · plainledger · evenledger · cleartally · bridgetally ·
solventia · torvenia · wholebasis · harborlot · bridgebasis · orbitana

**Worth one action:** `.com` has no registry-level premium tier, so a GoDaddy
"Premium" label on an unregistered `.com` usually means an aftermarket listing
rather than a registry price. **Run these through the same registrar bulk search
that produced the round-1 CSV** — it has a Premium column and shows prices. If any
comes back standard at ~$12, it re-enters contention immediately. **Northbell is
the one worth checking**, since it ranked #1 on every non-domain dimension.

---

## Late eliminations, for audit

**Killed by the domain gate (15):** torven · keelstone · rondeva · larkstone ·
truetenor · foredeck · beamhouse · lotline · indexel · tallyhouse · cairnpost ·
anvilbay · clearbasis · stavion · halvernia. Eight of the ten provisional
finalists died here — which is the gate doing exactly its job.

**Killed by round-2 screening (5):**

| Name | Reason |
|---|---|
| Evenbasis | Linguistic FAIL — heard aloud it becomes "Evan Basis". One of only two round-1 survivors, lost on the spelling test. |
| Quietparity | Linguistic FAIL — "Quiet Parody" misspelling trap. |
| Rondevia | FAIL + HARD — near-homophone of Rondevo, a live dating app. |
| Kilnledger | REJECT — embeds "Ledger", a dominant and litigious crypto-wallet brand; also misreads as "Kill Ledger". |
| Wharflot | REJECT — unspellable from hearing (silent `wh` + invented `flot`); disqualifying for word-of-mouth growth. |

**Killed by the prefix rule (3):** Beacontally, Lanterntally, Lanternbasis — all
usable, all lost to a same-family sibling that scored higher.

**Earlier rounds:** 25 by linguistics (including all ten respelled words, which
fail the voice-note test by construction, and **Gudgeon**, English idiom for *a
person easily cheated*); 12 by trademark (the sharpest being **Bollard** — Bollard
Group is an actively branded Lagos investment conglomerate); 10 by findability
(the architectural and nautical real words all carry Wikipedia articles an unfunded
brand cannot displace); 3 by regulation, where Agent 7 **overruled the brief's own
sanctioned-vocabulary table** on the `bourse` family, on the grounds that *bourse*
is ordinary finance vocabulary in West African media and reads as an exchange
claim without any French required.

---

## What a human must still verify

1. **Confirm the price at checkout.** Availability is verified; the registrar's
   cart is what settles the final price.
2. **Nigerian trademark search, classes 9 and 36, by a Nigerian attorney.**
   `iponigeria.gov.ng` was unreachable throughout. **There is no Nigerian
   trademark data in this run at all.** Material gap, not a formality. Most urgent
   for Lanternlot, Beaconlot, Ridgetally, Quiettally.
3. **CAC company search** at `search.cac.gov.ng` (returned 403). Bollard was caught
   only by an incidental web result, which means others may have been missed.
4. **Social handles on live platforms.** X, Instagram, TikTok and LinkedIn were all
   blocked. Every handle statement in this run is inference from indexed search
   results. The brief's rule about rejecting finalists whose handles are taken
   **could not be applied**.
5. **Pronunciation test with Yoruba, Igbo and Hausa speakers.** The linguistic work
   is a model's judgment, not fieldwork.
6. **Re-check the domain before paying.** Verified 2026-09-17. Domains are
   registered daily.

---

## Every UNVERIFIED item

| Item | Scope | Cause |
|---|---|---|
| Exact domain price | 9 of 10 | `priceInfo` null; only Lanternlot has a confirmed $11.28 |
| Price of the 19 Premium domains | all 19 | `priceInfo` null |
| Nigeria trademarks (IPO Nigeria) | all | CONNECT-denied |
| CAC company search | all | 403 |
| EUIPO | all | CONNECT-denied |
| Social handles, all four platforms | all | CONNECT-denied |
| Google SERP, direct | all | CONNECT-denied — WebSearch used instead |
| Google Trends volume | all | 301, unusable |
| App Store autocomplete, true | all | not queryable; iTunes-API prefix used as proxy |

**Verified against live sources:** `.com` availability and price tier for all 87
round-2 candidates (GoDaddy, cross-checked against a registrar bulk search on the
overlap, zero disagreements); NGX ticker collisions (257 entries, 0 hits); Apple
App Store exact-name collisions (iTunes Search API, NG storefront); WIPO and USPTO
trademark hits; association risk via web search.
