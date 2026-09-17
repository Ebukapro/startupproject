# Domain Gate, Round 1 — Results and Pattern Analysis

Checked 2026-09-17 via registrar bulk search (real registry data, with prices).
Source: `output/domain-results-batch1.csv`.

## Result

| | Count |
|---|---|
| Submitted | 22 |
| **Returned by the registrar** | **15** |
| Not checked — still unknown | 7 |
| **AVAILABLE** | **2** |
| TAKEN | 13 |
| **Kill rate on checked** | **87%** |

The brief predicted 70–85% mortality. Observed 87% — slightly worse than the
brief's worst case, which is why the gate is the architecture and not an
afterthought.

### Survivors

| Domain | Price |
|---|---|
| `lanternlot.com` | **$11.28** |
| `evenbasis.com` | **$11.28** |

### Casualties (13)

torven · keelstone · rondeva · larkstone · truetenor · foredeck · beamhouse ·
lotline · indexel · tallyhouse · cairnpost · anvilbay · clearbasis

### Not checked — 7, including 4 of the ten finalists

`northbell` · `stavion` · `talvin` · `tickline` · `helmstone` · `riverlot` · `tenorbell`

**Northbell was the #1 ranked name and its status is unknown.** These are not
failures; they are gaps. They lead the round-2 check list.

---

## Why those two survived — the actual discriminator

The obvious hypothesis is length. **It is wrong.** Length does not separate the
groups:

| Length | Taken | Free |
|---|---|---|
| 10 chars | tallyhouse, clearbasis | **lanternlot** |
| 9 chars | keelstone, larkstone, truetenor, beamhouse, cairnpost | **evenbasis** |

The real discriminator is **aesthetic plausibility**, and it is uncomfortable:

> **Every name that sounds like a good brand has already been registered.
> The two that survived are the two that sound slightly *wrong*.**

Look at what died: *keelstone, larkstone, beamhouse, tallyhouse, cairnpost,
anvilbay, foredeck.* Every one is a noun+noun pairing that reads like a real
place or a real object — evocative, pretty, and therefore swept up years ago by
domain investors who register exactly this shape on spec.

Now look at what lived. **`lanternlot`** and **`evenbasis`** are *arbitrary*
pairings. "Lantern" and "lot" have no natural bond in English; neither do "even"
and "basis". No investor speculatively registers a phrase nobody would think of,
because there is no resale story.

Three corollaries, each directly actionable:

1. **`-stone` and `-house` are exhausted.** keelstone, larkstone, beamhouse and
   tallyhouse all died. Stop generating them.
2. **Short coinages are exhausted too, and worse than assumed.** `torven` (6) and
   `rondeva` (7) both died. The brief warned that 4–5 letter coinages are gone;
   the evidence says 6–7 letter coinages are largely gone as well.
3. **The generative rule for round 2 is therefore inverted.** Instead of pairing
   words that belong together, pair words that *don't* — a concrete noun with an
   abstract market noun, or a plain qualifier with a market noun. That is exactly
   the shape of both survivors.

### The honest cost of this

This is a real tradeoff, not a free win. Names built to be semantically arbitrary
are, by construction, less immediately charming than `Keelstone` or `Larkstone`.
At a USD 200 ceiling that is the trade on offer: **a beautiful name you cannot
buy, or a slightly odd name you can.** Round 2 is tuned to find the best names
available on the correct side of that line, not to pretend the line isn't there.

### A note in the survivors' favour

`Lanternlot` is better than its arbitrariness suggests. Agent 1 identified the
**light / clarity / transparency metaphor** as one of the few genuinely open
territories in this market — used once globally (Lightyear, UK), never in Nigeria
and never in the emerging-market set. A lantern is guidance and visibility; a
*lot* is a parcel of shares. It lands in an open territory *and* it is buyable
for $11.28. It goes into round 2 ranking as a live contender, not a consolation.

`Evenbasis` is drier but clean: "on an even basis" is fair, level, unhyped, and
it carries no regulatory implication at all.

---

## Gate rule triggered

The brief: *"If fewer than 30 survive, return to Agent 2, write a short analysis
of which patterns failed and why, and generate a further 80 informed by it.
Repeat at most twice."*

Two survivors is far below 30. **Round 2 generation is mandatory and has been
run** — see `output/02b-longlist-round2.md`. This is repetition 1 of a permitted 2.
