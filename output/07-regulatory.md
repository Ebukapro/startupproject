# Agent 7 — Regulatory Screen

Generated 2026-09-17. Screened against SEC Nigeria naming expectations for investment
products, CBN sensitivities (payment rails / virtual accounts / deposit-taking), and
Apple App Store Guideline 3.2.1(viii) (finance apps must not imply the publisher is a
licensed financial institution when it isn't — Apple actively enforces this and has
pulled apps over it).

**Method note.** The hard constraints already stripped the obvious regulated words
(Exchange, Bank, Trust, Capital, Securities, Vault, etc. — see the dedup pass in
`02-longlist.md`). This screen is a second pass for words that *imply* the same thing
without using it outright: performance promises, licensed-institution claims, and
deposit/banking claims. CBN risk is uniformly LOW across all 120 — none use "bank,"
"deposit," "trust," "save," or "vault," and the product's payment-rail/virtual-account
exposure is a licensing-structure question (partner bank/PSP holds that license), not a
naming one; it isn't restated per-candidate below.

## Ruling on the bourse family

**Bourse is not a safe substitute for "Exchange."** It is standard finance vocabulary
across West African and pan-African financial media (the Bourse Régionale des Valeurs
Mobilières serves Francophone West Africa next door), so neither an SEC Nigeria
reviewer, a partner-bank compliance desk, nor an Apple App Store reviewer applying
3.2.1(viii) needs French fluency to read "Bourse" as "we are an exchange." The brief's
own sanctioned-vocabulary list is wrong to treat it as clear of the constraint it bans
in English. **Recommendation: drop Boursa and Boursel outright (HIGH); Stonebourse,
Openbourse, and Bellbourse are salvageable only if legal sign-off is obtained, and
Bourz is the lowest-risk of the six only because the clipped spelling partly disguises
the root.** None of the six should be treated as pre-cleared by the brief's vocabulary
table — that table is overruled by hard constraint 2 on this point.

## Risk counts

| Risk | Count |
|---|---|
| HIGH | 3 |
| MEDIUM | 4 |
| LOW | 113 |

## MEDIUM and HIGH candidates

| # | Name | Risk | SEC Nigeria | Apple 3.2.1(viii) | Ruling |
|---|---|---|---|---|---|
| 66 | Boursa | **HIGH** | Reads as a direct, minimally-disguised claim to *be* an exchange ("bourse" + generic -a suffix). Same defect as if it used "Exchange." | Reviewer applying 3.2.1(viii) may read it as an institutional-exchange name, not a retail app publisher. | Drop. Functionally identical to the banned word in a different language. |
| 67 | Boursel | **HIGH** | Same as Boursa — "bourse" is fully legible under the suffix. | Same exchange-claim reading. | Drop. |
| 43 | Stonebourse | **MEDIUM** | "Bourse" is still the operative, pronounced half of the compound (STONE-**boorse**). The qualifier softens but doesn't neutralise the claim. | Plausible flag on review; defensible but not clean. | Keep only with legal sign-off; not a first-choice finalist. |
| 44 | Openbourse | **MEDIUM** | Same — "open" reads as an operational descriptor ("open for trading"), which if anything reinforces an exchange reading rather than diluting it. | Same. | Keep only with legal sign-off; weaker than Stonebourse/Bellbourse on this point because "open" compounds the exchange framing instead of softening it. |
| 57 | Bellbourse | **MEDIUM** | Same root issue; "bell" (opening bell) is trading-floor imagery layered on top of an exchange claim, not a real dilution. | Same. | Keep only with legal sign-off. |
| 109 | Bourz | **MEDIUM** | Clipped spelling (no "e," terminal "z") gives it the most phonetic distance from "bourse" of the six, but BOORZ still resolves to "bourse" on a second listen. | Lower salience than the others but not zero. | Lowest-risk of the bourse family; still not LOW — flag for legal review rather than clearing outright. |
| 107 | Steddy | **HIGH** | Direct respelling of "steady," read against a stock-trading app as a performance/consistency claim — exactly the "guaranteed/unrealistic returns" language SEC Nigeria warns investors to watch for. The generation team already excluded "Steadyhelm" for this identical reason (see `02-longlist.md` dedup pass); "Steddy" is worse because nothing in the name dilutes it. | Not primarily an Apple issue, but a name read as a returns promise invites extra scrutiny under 3.2.1's broader "no false/misleading claims" language. | Drop. |

## Rulings on the other specific candidates in scope

- **Solvera** (#13, *solvere*) — LOW. Evokes solvency/stability, a generic reassurance
  connotation shared by countless licensed and unlicensed brands alike (Assurance,
  Secure, Solid...). It doesn't assert registration, a license, or a return figure —
  the SEC/CBN/Apple concern is specifically about false claims of status or performance,
  not generic "sounds sturdy" branding.
- **Longtide, Openfloat, Quietfloat** (#51, #63, #56) — LOW. "Long" and "float" are
  neutral, descriptive market-mechanics terms (a position type; share liquidity), not
  claims about the company's own status or promised outcomes. Brokers name themselves
  after market jargon constantly (Robinhood, E*TRADE) without triggering this kind of
  scrutiny.
- **Equora** (#14) — LOW. "Equity" is an asset-class term, not a licensing claim;
  compare "Equity Bank" (Kenya), which uses the word as a brand without regulators
  reading it as a status claim.
- **Bellwether** (#79) — LOW. Names itself after a market indicator/leading stock, a
  metaphor about market relevance, not a claim of license or guaranteed performance.
  Its flagged issue in the longlist is length/genericness, not regulatory.
- **Fidara** (#17, *fides*) and **Cordant** (#12) — LOW. The "Trust" ban targets the
  literal, surface-level regulated word (Nigerian law treats "Trustee"/trust companies
  as a defined licensed category); it does not extend to a buried Latin root that
  requires outside knowledge to even notice. Applying that logic consistently would
  also disqualify half of Territory A (Tenura/*tenere*, Fulcra, Sperra/*spero*, etc.),
  which is not the intent of the constraint. Cordant in particular reads as "agreement,"
  not fiduciary trust, and carries no fiduciary echo at all. Neither name spells or
  sounds like "trust," "fiduciary," or "fidelity" on first hearing.

## LOW — full roster (113)

Tenura, Ankram, Librova, Meriden, Kairova, Fulcra, Basira, Stavion, Portara, Quantara,
Tessira, Cordant, Solvera, Equora, Nautera, Ordena, Fidara, Claresta, Verantis, Rondeva,
Corvena, Talvin, Norvell, Pellant, Sperra, Rivent, Halvern, Denova, Estera, Orbita,
Lumera, Tavelo, Sember, Ventora, Torven, Keelstone, Tidemark, Plumbline, Marketday,
Northbell, Larkstone, Emberlane, Dawnledger, Ledgerlane, Tallyhouse, Anvilbay, Mainmast,
Beamhouse, Longtide, Riverlot, Clearbasis, Truetenor, Firstparity, Quietfloat, Homeport,
Stillpoint, Slatehouse, Helmstone, Cairnpost, Openfloat, Evenbasis, Lanternlot, Tenorly,
Parita, Ledgra, Tranchet, Lotline, Spreadwell, Floatly, Indexel, Basline, Midprice,
Pennant, Bellwether, Tickline, Lotwell, Paritan, Tenorbell, Quantal, Trancha, Keelson,
Camber, Purlin, Soffit, Escarp, Barbican, Foredeck, Windlass, Halyard, Bollard, Marline,
Cleat, Tiller, Thalweg, Gudgeon, Ankora, Kompas, Ledjer, Tallee, Parrity, Tenur, Klarity,
Merid, Northing, Mainspring, Escapement, Detent, Lintel, Corbel, Trestle, Spandrel,
Abutment, Tourbillon
