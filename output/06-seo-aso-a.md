# Agent 6 — Search & App Store Discoverability (Shard A)

**Scope:** 18 candidates in `/home/user/startupproject/output/shard-a.txt`, for a bootstrapped Nigerian retail stock-trading app. Findability is the deciding lens: this company cannot buy visibility, so a name that already belongs to someone else on page one is a cost the company can never pay off.

**Method:** WebSearch (bare name, plus one or two informative follow-ups per name) for SERP/entity/volume assessment; the pre-run `appstore-raw.csv` (iTunes API) for exact-match App Store collisions, re-verified live via `itunes.apple.com/search` for NG+US; iTunes API prefix queries as an autocomplete/browse proxy (true Store autocomplete isn't independently queryable); `play.google.com/store/search` curled for Play Store corroboration on three high-risk names. Google Trends was not usable (redirects) — every volume judgment below is qualitative, based on how many independent real organizations/entities compete for the term, and is flagged UNVERIFIED where it is a judgment call rather than a measured number.

## Summary verdicts

**EASY (3):** Rondeva, Torven, Northbell
**WORKABLE (5):** Talvin, Stavion, Keelstone, Larkstone, Emberlane
**HARD (10):** Tenura, Equora, Fulcra, Cordant, Ordena, Lumera, Norvell, Librova, Marketday, Tallyhouse

One-line reasoning per candidate:

- **Tenura — HARD.** An established UK/US disability-living-aids brand owns the term commercially (Amazon, its own two ccTLD sites, 10+ years of retail history), and the "Tenu-" prefix autocompletes straight into Temu, one of the most-downloaded shopping apps on earth.
- **Equora — HARD.** Already claimed by *four* unrelated finance-adjacent entities (an AI-native financial ecosystem, an onchain equity-index platform, an investment firm, plus a dating app and a jewelry brand) and by four live App Store apps under the same name.
- **Fulcra — HARD.** A common English dictionary word (plural of fulcrum) already used by a real Canadian credit-investing firm (Fulcra Asset Management) and by a live App Store app (Fulcra Dynamics' "Context").
- **Cordant — HARD.** An archaic dictionary word now owned in practice by a VC-funded fintech ("Cordant emerges from stealth with $8M... Command Center for Financial Infrastructure") — a name-twin competitor in the same category. App Store itself is empty and winnable, but the web is not.
- **Ordena — HARD.** A live Spanish-dictionary verb, and — critically — an existing Lagos-based restaurant-ordering app already trading under the exact name "Ordena" in the same country.
- **Rondeva — EASY.** Page one is owned only by a small UK holiday-cottage listing; no Wikipedia entity, no brand, no App Store collision, low apparent volume — a coined-feeling word that is genuinely winnable.
- **Lumera — HARD.** Contaminated by a $64.5M-funded Nordic insurtech (pre-IPO), a healthcare-blockchain platform, a finance-AI platform, and five live same-name App Store apps.
- **Talvin — WORKABLE.** Thin but not empty: a Wikipedia stub for a village plus a recognizable musician (Talvin Singh) will likely hold a slot or two, but there's no dominant brand and the App Store is clean.
- **Norvell — HARD.** A large, established global spray-tanning brand with its own already-live "Norvell Professional" App Store app and a Wikipedia disambiguation entry — a real incumbent that will not be displaced.
- **Torven — EASY.** Only fandom/wiki-fanon pages and a minor footballer surname compete for it; no Wikipedia article, no App Store collision, no dominant brand.
- **Librova — HARD.** A named academic (Hana Librová) has her own Wikipedia page, and there is an existing Nigeria-market digital-library app already trading under the name "Librova" — an in-country, same-space collision.
- **Stavion — WORKABLE.** The bare name itself is clean and thin (personal names only, no brand, no Wikipedia), but the "Stav-" prefix autocompletes into Strava, a massive fitness brand, which will steal some browse/typo traffic.
- **Keelstone — WORKABLE.** Split across several small, weak businesses (a government-affairs consultancy, a fractional-COO firm, a prayer app) and an obscure Wikipedia stub for a Missouri stream — crowded but none of the competitors is dominant.
- **Marketday — HARD.** A generic English compound with dictionary definitions, its own Wikipedia article (Market Day Local, a 27-state fundraising co-op), and an already-live same-name App Store app (MarketDay: Farmers Markets).
- **Northbell — EASY.** Only fragmented, weak entities (a small API-monitoring vendor, a UK shell company, a residential estate) compete; no Wikipedia, no App Store collision, no dominant brand.
- **Larkstone — WORKABLE.** The full name is clean (only a small Lancaster PA boutique uses it), but "Lark-" autocompletes into Lark Technologies, a major team-collaboration app, costing some browse traffic on the shortened prefix.
- **Emberlane — WORKABLE.** Fragmented small brands only for the full name, but "Ember-" autocompletes into Ember Fund, which is itself a finance/investing app — the closest semantic prefix collision on this shard.
- **Tallyhouse — HARD.** Clean on both app stores today, but an exact-name, exact-category competitor already exists on the web: TallyHouse, "the complete picture of your wealth. One private file" (tallyhouseapp.com) — a personal net-worth tracker. Same name, same conceptual space; only a matter of time before it or a copycat is on the App Store too.

## Full assessment table

| Name | SERP page one | Wikipedia / entity | Existing volume | Rank difficulty | Name chars | Subtitle chars left | Store collision | Prefix / autocomplete | VERDICT |
|---|---|---|---|---|---|---|---|---|---|
| Tenura | Dominated by a real disability-aids brand (Amazon, own site, 10+ yrs) | No Wikipedia; strong commercial entity | Moderate, real (UNVERIFIED, qualitative) | HIGH | 6 | 5 | 0 results — App Store itself clean | "Tenu" → **Temu** (top global shopping app) — severe | HARD |
| Equora | Split 4 ways: dating app, jewelry, 2 fintech/investment platforms | No Wikipedia; multiple real commercial entities incl. 2 finance-space | Moderate-high, fragmented (UNVERIFIED) | HIGH | 6 | 11 | 4 results, top "Equora Riding"; 2 apps literally by dev "Equora App" | "Equo" → small horse-mgmt app, minor | HARD |
| Fulcra | Dictionary def. + real investment firm (Fulcra Asset Mgmt) + live app | No Wikipedia (dict. word); real fintech-adjacent firm | Low-moderate (UNVERIFIED) | HIGH | 6 | 5 | 1 result, "Context: Personal Data Kit" (Fulcra Dynamics) | "Fulc" → almost nothing, minor | HARD |
| Cordant | OED archaic-word entry + funded fintech "Command Center for Financial Infrastructure" | No Wikipedia; real $8M-seed fintech name-twin | Low base term, but concentrated in-category (UNVERIFIED) | HIGH | 7 | 3 | 0 results — App Store clean | "Cord" → **Discord** — severe | HARD |
| Ordena | Spanish dictionary verb + Mexican e-commerce + Nigeria food-order app | No Wikipedia; real in-country app of same name | Moderate-high (Spanish verb) (UNVERIFIED) | HIGH | 6 | 5 | 4 results, top unrelated puzzle game; real Nigeria app found via web, not iTunes | "Orde" → Uber Eats/Shipt (generic "order") — moderate | HARD |
| Rondeva | Small UK holiday-cottage listing only | No Wikipedia; no dominant brand | Low (UNVERIFIED) | LOW | 7 | 9 | 0 results — clean | "Rond" → small card-game apps, minor | EASY |
| Lumera | Fire Emblem character + $64.5M insurtech + finance-AI platform + healthcare blockchain | No Wikipedia; multiple real funded companies | Moderate-high, fragmented (UNVERIFIED) | HIGH | 6 | 4 | 5 results, all literally "Lumera ___" apps | "Lume" → wellness/IPTV apps, minor | HARD |
| Talvin | Wikipedia stub (Iranian village) + musician Talvin Singh + small AI startup | Yes — Wikipedia page; real musician with recognizable name | Low-moderate (musician) (UNVERIFIED) | MEDIUM | 6 | 9 | 0 results — clean | "Talv" → small apps only, minor | WORKABLE |
| Norvell | Global spray-tan brand dominates; own live app | Yes — Wikipedia disambiguation page | Moderate-high, real brand (UNVERIFIED) | HIGH | 7 | 5 | 1 result, "Norvell Professional" (the brand's own app) | "Norv" → small apps, minor | HARD |
| Torven | Fandom/fanon wiki pages + minor footballer surname | No dedicated Wikipedia article | Low (UNVERIFIED) | LOW | 6 | 5 | 0 results — clean | "Torv" → Norwegian place-name apps, minor | EASY |
| Librova | Named academic (Hana Librová) + Nigeria-market library app of same name | Yes — Wikipedia page (Hana Librová) | Low-moderate but concentrated (academic + in-market app) (UNVERIFIED) | HIGH | 7 | 9 | 0 results on iTunes; real same-name Nigeria app found via web/Play (UNVERIFIED exact rank) | "Libr" → FreeStyle LibreLink/Apple Books, minor | HARD |
| Stavion | Only personal names/athlete profiles | No Wikipedia | Low (UNVERIFIED) | MEDIUM | 7 | 3 | 0 results — clean | "Stav" → **Strava** — significant | WORKABLE |
| Keelstone | Split across 3-4 small, weak businesses | Weak Wikipedia stub (obscure Missouri stream) | Low (UNVERIFIED) | MEDIUM | 9 | 5 | 0 results — clean | "Keel" → small focus/planner apps, minor | WORKABLE |
| Marketday | Dictionary compound + Wikipedia article (Market Day Local, 27-state co-op) + live app | Yes — Wikipedia article | Moderate-high, generic term (UNVERIFIED) | HIGH | 9 | 9 | 2 results, top "MarketDay: Farmers Markets" (same spelling) | "Marketd" → generic marketplace apps, moderate | HARD |
| Northbell | Fragmented weak entities only (API vendor, shell co., residential estate) | No Wikipedia | Low (UNVERIFIED) | LOW | 9 | 3 | 0 results — clean | "Northb" → golf club/church apps, minor | EASY |
| Larkstone | Small Lancaster PA boutique only | No Wikipedia | Low (UNVERIFIED) | MEDIUM | 9 | 3 | 0 results — clean | "Lark" → **Lark Technologies** (major collab app) + Lark Health — significant | WORKABLE |
| Emberlane | Fragmented small brands (band, fashion label, author, store) | No dedicated Wikipedia article | Low (UNVERIFIED) | MEDIUM | 9 | 9 | 0 results — clean | "Ember" → **Ember Fund** (finance/crypto app) + Ember mug brand — moderate, same-category | WORKABLE |
| Tallyhouse | Unrelated "Tally" restaurants/pubs, but exact-name wealth-tracking competitor live on web | No Wikipedia; real same-category competitor (tallyhouseapp.com) | Low base term, but exact competitor exists (UNVERIFIED) | HIGH | 10 | 3 | 0 results on both stores today — clean for now | "Tally" → counter/split-payment apps, minor | HARD |

## App Store listing drafts

Apple limit: 30 characters for app name, 30 for subtitle. All drafts below fit within both limits (char counts shown).

**Tenura** (6 chars)
- Title: `Tenura: NGX & US Stocks` (23/30)
- Subtitle: `Invest in Nigerian Stocks` (25/30)
- Keywords to fit remaining budget: NGX, shares, wealth, broker

**Equora** (6 chars)
- Title: `Equora: Stocks & Investing` (26/30)
- Subtitle: `Buy NGX & US Shares` (19/30)
- Keywords: NGX, portfolio, broker, wealth — caution: keyword field will compete against existing "Equora" listings for the same terms

**Fulcra** (6 chars)
- Title: `Fulcra: Stock Trading App` (25/30)
- Subtitle: `Invest in NGX & US Stocks` (25/30)
- Keywords: NGX, shares, portfolio, broker

**Cordant** (7 chars)
- Title: `Cordant: Invest in Stocks` (25/30)
- Subtitle: `NGX & US Stocks, Simplified` (27/30)
- Keywords: NGX, trading, shares, wealth

**Ordena** (6 chars)
- Title: `Ordena: NGX Stock Trading` (25/30)
- Subtitle: `Invest in Nigerian Shares` (25/30)
- Keywords: NGX, invest, broker, wealth

**Rondeva** (7 chars)
- Title: `Rondeva: Stocks & Wealth` (24/30)
- Subtitle: `Trade NGX & US Stocks` (21/30)
- Keywords: NGX, invest, shares, portfolio, broker

**Lumera** (6 chars)
- Title: `Lumera: Invest in Stocks` (24/30)
- Subtitle: `NGX & US Shares, Made Easy` (26/30)
- Keywords: NGX, trading, portfolio, wealth

**Talvin** (6 chars)
- Title: `Talvin: Stock Investing` (23/30)
- Subtitle: `Trade NGX & US Stocks` (21/30)
- Keywords: NGX, invest, shares, portfolio, broker

**Norvell** (7 chars)
- Title: `Norvell: Stocks & Trading` (25/30)
- Subtitle: `Invest in NGX & US Shares` (25/30)
- Keywords: NGX, portfolio, wealth, broker

**Torven** (6 chars)
- Title: `Torven: NGX Stock Trading` (25/30)
- Subtitle: `Invest in Nigerian Stocks` (25/30)
- Keywords: NGX, shares, wealth, broker, portfolio

**Librova** (7 chars)
- Title: `Librova: Stocks & Wealth` (24/30)
- Subtitle: `Trade NGX & US Shares` (21/30)
- Keywords: NGX, invest, portfolio, broker

**Stavion** (7 chars)
- Title: `Stavion: Invest & Trade` (23/30)
- Subtitle: `NGX & US Stocks, Simplified` (27/30)
- Keywords: NGX, shares, wealth, portfolio, broker

**Keelstone** (9 chars)
- Title: `Keelstone: Stock Trading` (24/30)
- Subtitle: `Invest in NGX & US Stocks` (25/30)
- Keywords: NGX, shares, wealth, broker

**Marketday** (9 chars)
- Title: `Marketday: Stocks & Invest` (26/30)
- Subtitle: `Trade NGX & US Shares` (21/30)
- Keywords: NGX, trading, portfolio, wealth, broker

**Northbell** (9 chars)
- Title: `Northbell: Stock Investing` (26/30)
- Subtitle: `NGX & US Stocks, Simplified` (27/30)
- Keywords: NGX, trade, shares, wealth

**Larkstone** (9 chars)
- Title: `Larkstone: Invest & Trade` (25/30)
- Subtitle: `NGX & US Stocks, Simplified` (27/30)
- Keywords: NGX, shares, wealth, portfolio

**Emberlane** (9 chars)
- Title: `Emberlane: Stock Investing` (26/30)
- Subtitle: `Trade NGX & US Shares` (21/30)
- Keywords: NGX, invest, portfolio, wealth, broker

**Tallyhouse** (10 chars)
- Title: `Tallyhouse: Invest & Trade` (26/30)
- Subtitle: `NGX & US Stocks, Simplified` (27/30)
- Keywords: NGX, shares, wealth, broker — caution: keyword overlap with the existing "TallyHouse" wealth-tracking product invites confusion if it ever ships to the App Store

## UNVERIFIED items (explicitly flagged)

1. **All "existing volume" judgments** are qualitative (based on the density and prominence of real organizations/pages competing for the bare term in WebSearch), not a measured search-volume number — Google Trends was not reachable in this environment (redirects), per the stated environment constraint.
2. **Norvell's claimed expansion "into the markets of Nigeria, Haiti, Jamaica..."** came from a product-page/marketing blurb surfaced in a WebSearch summary; not independently confirmed as an accurate description of real in-country retail distribution.
3. **Ordena's Nigeria restaurant-ordering app** (ordenaapp.com, "onboarding restaurants in Lagos") — the domain and marketing copy are real per WebSearch, but its exact current Play Store ranking/listing was not conclusively confirmed by this session's own `play.google.com/store/search` scrape (the scrape's HTML extraction did not reliably surface app IDs for a "Librova"/"Ordena"/"Tallyhouse" listing, likely due to the page being JS-rendered).
4. **Librova's existing Nigeria library app** ("Nigerian's Library, also known as Librova") — same caveat as above: the underlying product and domain are real per WebSearch, but its exact Play Store search rank was not independently confirmed by this session's curl-based scrape.
5. **Talvin AI's funding status** — one source (Tracxn) described it as "an unfunded company," which reads ambiguously (unclear if "not yet funded" or a data-quality artifact); not independently reconciled against other sources.
6. **Autocomplete/prefix findings** (e.g., "Tenu"→Temu, "Stav"→Strava, "Cord"→Discord, "Lark"→Lark Technologies, "Ember"→Ember Fund) are an **approximation**: iTunes Search API prefix queries were used as a proxy for true on-device App Store/Play Store autocomplete, which is not independently queryable via API. Real autocomplete behavior (which also factors in personalization, install base, and Play Store's separate algorithm) may differ.
7. **Whether "Fulcra" or "Cordant" have any dedicated Wikipedia article** — confirmed absent from the WebSearch snippets returned, but full Wikipedia site-search was not separately run to rule out a narrower/alternate-spelling article.
8. **Google Play HTML scrape results generally** — the curl-based Play Store search pull in this session returned mostly UI chrome (ratings, menu labels) rather than clean app-tile data for several queries; where cited, Play Store findings should be treated as directionally suggestive (a matching page title existed) rather than a confirmed ranked listing.
