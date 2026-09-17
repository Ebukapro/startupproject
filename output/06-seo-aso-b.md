# Agent 6 (Shard B) — Search & App Store Discoverability Assessment

Scope: 18 candidates in `/home/user/startupproject/output/shard-b.txt`. Context: bootstrapped Nigerian retail stock-trading app — cannot buy visibility, so organic/branded findability is existential. Built on top of the pre-run App Store exact-match check in `appstore-raw.csv`.

**Method note (read first):** `google.com/search` is blocked; all SERP judgments below come from the `WebSearch` tool (Google-backed but not raw Google HTML, so treat snippet ordering as directionally reliable, not pixel-exact). Google Trends is unreachable (redirects) — all volume calls below are **qualitative, marked UNVERIFIED for exact numbers**. App Store data comes from `appstore-raw.csv` (exact-match sweep already run) plus my own iTunes API prefix queries used as an **autocomplete proxy** (method: query the first 4 letters of each name against `itunes.apple.com/search`, `entity=software`, `country=NG`, and see what currently surfaces — this approximates, but is not identical to, what Apple's/Google's live autocomplete would show a typer).

---

## Bottom line

This shard is unusually dangerous: **11 of 18 names are real dictionary/encyclopedia words or already belong to an existing company**, several in finance or finance-adjacent categories. Only one candidate (Truetenor) is genuinely close to a blank slate.

- **HARD: 11** — Mainmast, Longtide, Slatehouse, Midprice, Quantal, Keelson, Camber, Bollard, Windlass, Lintel, Corbel
- **WORKABLE: 6** — Helmstone, Beamhouse, Lotline, Tickline, Indexel, Foredeck
- **EASY: 1** — Truetenor

---

## Per-candidate reasoning

**Mainmast — HARD.** Page one is dictionary/encyclopedia territory (Wiktionary, Britannica "ship part," Merriam-Webster) plus, worse, an existing capital/finance firm literally branded **"Mainmast Capital"** (mainmastcapital.com, with a page titled "About the Mainmast Name") and a separate "MainMast International Ltd." A stock-trading app called Mainmast would be fighting a same-sector name-holder from day one.

**Longtide — HARD.** No Wikipedia entry, but the top results are dominated by **Longtide Financial Partners**, a real registered investment advisory / wealth-management firm (longtide.com, est. 2006, Commonwealth Financial Network). This is a direct same-industry brand collision — arguably worse than a dictionary word, since it's an active financial-services competitor for the identical search term.

**Truetenor — EASY.** Page one is scattered and weak: sheet-music sites, a Tumblr handle, and tangential "tenor" Wikipedia pages that don't match the compound word. Nigeria/invest/app contamination search returned nothing related. No dominant entity, no encyclopedia entry, no company. This is the one name in the shard close to a blank slate.

**Helmstone — WORKABLE.** Fragmented across Fandom wikis (a Forgotten Realms D&D noble house, a Doctor Who audio story) and a small stone-restoration business. None of this is authoritative Wikipedia-grade content and none is finance-adjacent, but the fantasy-fiction association is a mild reputational nuisance a new brand will have to out-publish.

**Slatehouse — HARD.** Close spelling to Wikipedia's "Slate House" articles (several historic-building entries), and more importantly an existing **SlateHouse Group Property Management**, a real company managing 7,000+ rental units across multiple US regions with LinkedIn/Yelp/Dwellsy presence. A well-established, if unrelated-industry, company already owns this brand's search real estate.

**Beamhouse — WORKABLE.** A genuine dictionary word (Merriam-Webster: a section of a tannery), but a low-traffic, niche industrial term — not something people search often. A small regional restaurant ("The Beamhouse," Glastonbury CT) also uses it. No finance overlap. Winnable with sustained content effort.

**Lotline — WORKABLE (crowded).** No Wikipedia, but "lot line" is a standing real-estate/zoning glossary term (Kreo, RealEstateWords, Permit Sonoma), and the bare brand "LotLine"/"Lot Line" is independently used by three unrelated companies (a specialty finance firm for homebuilders, a real-estate photography studio, and a cost-segregation software startup on PitchBook). App Store already lists **"LotLine: GPS Area Calculator"** for the term. No single dominant entity, but meaningfully crowded.

**Tickline — WORKABLE.** No Wikipedia. tickline.com is a live product (a macOS Markdown app, actively released on GitHub, v1.0.0), and "Tickline Syrup" is a real antibiotic brand sold in India (1mg.com listing). Fragmented across unrelated categories but nothing finance-related or Nigeria-related surfaced.

**Midprice — HARD.** This is the single worst pick in the shard for a *trading* app specifically: "mid price" is core market-microstructure vocabulary (Wikipedia has a dedicated "Mid price" article; Interactive Brokers' own glossary and order-type documentation use it constantly) describing the bid-ask midpoint. Every trader and every competitor's help docs already use this term generically — the exact audience you want will read "Midprice" as a feature, not a brand. App Store already has **"MidPrice - changing money,"** a forex-adjacent app.

**Quantal — HARD.** Real dictionary word (Merriam-Webster, Dictionary.com, Wiktionary) plus a Wikipedia entry ("Quantal neurotransmitter release") plus, critically, **three separate existing tech/AI companies branded Quantal**, one of which (quantaltech.com) explicitly serves "quantitative and algorithmic trading" — a direct category collision with a stock-trading product.

**Indexel — WORKABLE.** No Wikipedia entry for the compound. Real companies exist (Indexel Engineering Ltd., an Indian industrial-automation firm with Crunchbase/LinkedIn/its own domain; a French digital-marketing agency) but both are off-industry (engineering, marketing, not finance). Nigeria/invest search returned nothing relevant. Usefully, the root "index" is on-theme for a stocks app, which cuts both ways for branding but doesn't create a competing entity.

**Keelson — HARD.** A textbook real word with its own **Wikipedia article** (a ship's structural keel-reinforcement member, also used metaphorically by Walt Whitman), plus Merriam-Webster/Dictionary.com entries, plus "Keelson Strategic" (an existing consulting firm). App Store already carries **"Keelson: Prostate & Pelvic,"** an unrelated health app that will out-rank a new listing on the identical keyword.

**Camber — HARD.** The single most contaminated name in the shard. Multiple Wikipedia articles (Camber, Cambering, Camber angle, Camber thrust) cover a term with genuinely enormous everyday search volume among car/motorsport enthusiasts (wheel alignment). On top of that, "Camber Cloud" (an AI data-science company), "Camber Sportswear," and a German automotive-streetwear brand all use the exact word commercially. iTunes autocomplete for the first four letters ("Camb") surfaces **Canva** — one of the largest design apps on earth — as the top hit.

**Bollard — HARD.** An extremely common English word with deep, current Wikipedia coverage (Bollard, Mooring bollard, Traffic bollard, Folly Bollards) and constant real-world search volume (urban planning, pedestrian-safety/vehicle-mitigation barriers — a live public-safety topic). No unfunded brand can plausibly own page one for "bollard" within six months.

**Foredeck — WORKABLE.** A real nautical term that appears across many sailing glossaries (PredictWind, UK Sailmakers, Collins, Wiktionary) but has **no dedicated Wikipedia article** of its own (search surfaced the related-but-distinct "Forecastle" instead). Two small businesses use the name (Foredeck Consulting, Foredeck Constructions, Australia) but neither is large. No finance contamination found.

**Windlass — HARD.** Two separate Wikipedia articles ("Windlass," "Anchor windlass"), Merriam-Webster-grade dictionary status, and — notably — an established commercial brand, **Windlass Steelcrafts**, an actual sword/armor manufacturer that already owns windlass.com and ranks prominently. "The Windlass" restaurant also competes for the term.

**Lintel — HARD.** Wikipedia articles ("Lintel," "Post and lintel") plus the term's ubiquity across every home-renovation and building-products site (UltraTech, Catnic, Lowe's, York Building Products). Worse for this specific use case: App Store already lists **"Lintel: Renovation Budget,"** a budgeting app — i.e., an existing finance-adjacent app already owns the identical keyword in-store.

**Corbel — HARD.** Wikipedia articles ("Corbel (disambiguation)," "Corbel arch") plus heavy e-commerce contamination — Lowe's, Osborne Wood, Ekena Millwork, and Timber Wolf Forest Products all rank for "corbel" as a physical product people buy. (UNVERIFIED, from background knowledge rather than a search run this session: "Corbel" is also a long-shipped Microsoft Office typeface, which if correct adds yet another entrenched, unrelated meaning familiar to any office-software user — flagging this for the domain/legal agents to confirm independently rather than asserting it as checked here.)

---

## Summary table

| Name | SERP page one | Wikipedia/entity | Existing volume | Rank difficulty | Name chars | Subtitle chars left | Store collision | Prefix/autocomplete | VERDICT |
|---|---|---|---|---|---|---|---|---|---|
| Mainmast | Dictionary + Britannica + "Mainmast Capital" (finance co.) | Referenced across Britannica/MW; direct finance-brand collision | High (nautical term + finance co. own brand) | HIGH | 8 | 22 avail. | No exact App Store match (0 results) | "Main" → Mail/Gmail (huge, unrelated) | HARD |
| Longtide | Dominated by Longtide Financial Partners (real RIA firm) | No Wikipedia; but active same-industry company | Medium-High (branded, sector-specific) | HIGH | 8 | 22 avail. | No exact match (0 results) | "Long" → EasyKash (NG fintech, coincidental), Long Châu | HARD |
| Truetenor | Scattered: sheet music, Tumblr, unrelated tenor pages | None dominant | Low | LOW | 9 | 21 avail. | No exact match (0 results) | "True" → **Truecaller** (major global app) | EASY |
| Helmstone | Fandom wikis (D&D, Doctor Who), small stone business | No Wikipedia; niche fandom only | Low | LOW-MED | 9 | 21 avail. | No exact match (0 results) | "Helm" → niche dev tool, low risk | WORKABLE |
| Slatehouse | SlateHouse Group Property Mgmt (7,000+ units), Wikipedia "Slate House" (close spelling) | Real company + near-match Wikipedia entries | Medium | MED-HIGH | 10 | 20 avail. | No exact match (0 results) | "Slat" → Salaat/Slack/YouTube | HARD |
| Beamhouse | MW dictionary def (tannery term), small CT restaurant | Real dictionary word, niche/low-traffic | Low | MEDIUM | 9 | 21 avail. | No exact match (0 results) | "Beam" → Beam Escooter, BEAM AI Editor (real apps) | WORKABLE |
| Lotline | Real-estate "lot line" glossary term; 3 unrelated companies use name | No Wikipedia; crowded but no single dominant entity | Medium (real-estate term) | MED-HIGH | 7 | 23 avail. | **"LotLine: GPS Area Calculator" exists** (1 result) | "Lotl" → cluster of axolotl-themed games | WORKABLE |
| Tickline | GitHub macOS app (tickline.com live), India medical syrup brand | No Wikipedia; live product site will outrank | Low-Medium | MEDIUM | 8 | 22 avail. | No exact match (0 results) | "Tick" → **TikTok, TickTick** (huge apps) | WORKABLE |
| Midprice | Wikipedia "Mid price," IBKR glossary, core trading jargon | Wikipedia entry; term of art in the exact category | High (finance-specific) | HIGH | 8 | 22 avail. | **"MidPrice - changing money" exists** (1 result) | "Midp" → clean (1 irrelevant hit) | HARD |
| Quantal | MW/Dictionary.com/Wiktionary def; Wikipedia neuroscience entry; 3 Quantal-branded tech/AI/trading firms | Dictionary word + Wikipedia + trading-adjacent company | Medium-High | HIGH | 7 | 23 avail. | No exact match (0 results) | "Quan" → **Quran apps** (very high volume in Nigeria) | HARD |
| Indexel | Indian industrial-automation firm, French marketing agency | No Wikipedia; off-industry companies only | Low-Medium | MEDIUM | 7 | 23 avail. | No exact match (0 results) | "Inde" → **inDrive, Indeed, LinkedIn** (huge apps) | WORKABLE |
| Keelson | MW/Dictionary.com def; **Wikipedia article**; "Keelson Strategic" consulting | Dictionary word + dedicated Wikipedia entry | Medium | HIGH | 7 | 23 avail. | **"Keelson: Prostate & Pelvic" exists** (1 result) | "Keel" → existing app literally named "Keel" | HARD |
| Camber | 4 Wikipedia articles (automotive/aero); Camber Cloud, Camber Sportswear, etc. | Dictionary + multiple Wikipedia entries | High (automotive alignment term) | HIGH | 6 | 24 avail. | 5 results incl. Canva (SERP noise) | "Camb" → **Canva** (top global design app) | HARD |
| Bollard | Extensive Wikipedia (4 articles); huge everyday/safety-topic volume | Dictionary + deep Wikipedia coverage | Very high | HIGH | 7 | 23 avail. | 5 results, top "8 Ball Pool" (SERP noise) | "Boll" → sports/games apps, crowded prefix | HARD |
| Foredeck | Sailing glossaries (no dedicated Wikipedia); 2 small unrelated businesses | Glossary term, not encyclopedic | Low-Medium | MEDIUM | 8 | 22 avail. | No exact match (0 results) | "Fore" → Firefox, Snapchat, Fire TV (unrelated, huge) | WORKABLE |
| Windlass | **2 Wikipedia articles**; Windlass Steelcrafts (owns windlass.com), restaurant brand | Dictionary + Wikipedia + established commercial brand | Medium-High | HIGH | 8 | 22 avail. | 3 results ("Windlass Canal Locks") | "Wind" → Windscribe VPN, Wink Editor | HARD |
| Lintel | Wikipedia ("Lintel," "Post and lintel"); ubiquitous construction term | Dictionary + Wikipedia | High (construction) | HIGH | 6 | 24 avail. | **"Lintel: Renovation Budget" exists** (5 results, finance-adjacent!) | "Lint" → existing app named "Lint" | HARD |
| Corbel | Wikipedia ("Corbel (disambiguation)," "Corbel arch"); heavy retail/product contamination | Dictionary + Wikipedia | High (home-decor product searches) | HIGH | 6 | 24 avail. | 4 results ("Graphene India 2026," SERP noise) | "Corb" → mostly clean (askCORB only) | HARD |

---

## App Store listing drafts

Category assumed: **Finance**. Subtitle keeps within Apple's 30-char subtitle limit; separate 100-char keyword field can add: `NGX, invest, trading, shares, portfolio, Nigeria, dividends, ETF`.

1. **Mainmast** (8) — Title: `Mainmast` · Subtitle: `Invest in NGX & US Stocks` (25)
2. **Longtide** (8) — Title: `Longtide` · Subtitle: `NGX & US Stocks, Simplified` (27)
3. **Truetenor** (9) — Title: `Truetenor` · Subtitle: `Invest in Nigerian & US Stocks` (30, exact fit)
4. **Helmstone** (9) — Title: `Helmstone` · Subtitle: `Trade NGX & US Stocks Easily` (29)
5. **Slatehouse** (10) — Title: `Slatehouse` · Subtitle: `Invest in Nigerian Stocks` (25)
6. **Beamhouse** (9) — Title: `Beamhouse` · Subtitle: `Buy NGX & US Stocks Easily` (26)
7. **Lotline** (7) — Title: `Lotline` · Subtitle: `Invest in NGX & US Stocks` (25)
8. **Tickline** (8) — Title: `Tickline` · Subtitle: `Track & Trade NGX/US Stocks` (28)
9. **Midprice** (8) — Title: `Midprice` · Subtitle: `Invest in NGX & US Stocks` (25) — caution: subtitle risks reading as a feature description rather than a brand, given the term's existing trading meaning.
10. **Quantal** (7) — Title: `Quantal` · Subtitle: `Invest in NGX & US Stocks` (25)
11. **Indexel** (7) — Title: `Indexel` · Subtitle: `Invest in NGX & US Stocks` (25)
12. **Keelson** (7) — Title: `Keelson` · Subtitle: `Invest in NGX & US Stocks` (25)
13. **Camber** (6) — Title: `Camber` · Subtitle: `Invest in NGX & US Stocks` (25)
14. **Bollard** (7) — Title: `Bollard` · Subtitle: `Invest in NGX & US Stocks` (25)
15. **Foredeck** (8) — Title: `Foredeck` · Subtitle: `Invest in NGX & US Stocks` (25)
16. **Windlass** (8) — Title: `Windlass` · Subtitle: `Invest in NGX & US Stocks` (25)
17. **Lintel** (6) — Title: `Lintel` · Subtitle: `Invest in NGX & US Stocks` (25) — caution: an existing "Lintel: Renovation Budget" app already uses this exact colon-subtitle pattern in a finance-adjacent category.
18. **Corbel** (6) — Title: `Corbel` · Subtitle: `Invest in NGX & US Stocks` (25)

All 18 names leave 20–24 spare characters in the 30-char title field and comfortably fit a keyword-bearing subtitle — character budget is not a real constraint for this shard. The constraint is entirely SERP/Wikipedia/company contamination, not ASO field length.

---

## UNVERIFIED items (explicitly not confirmed this session)

- **All search-volume claims are qualitative**, not numeric — Google Trends was unreachable (301 redirect) for every candidate, as flagged in the environment notes. Where "high/medium/low existing volume" is stated above, it is inferred from SERP density and topic ubiquity, not measured.
- **Corbel-as-Microsoft-Office-font** is recalled from background knowledge, not confirmed by a search run in this session. Flagging for the domain/trademark agents to verify independently before relying on it.
- **Trademark/registration status** of "Mainmast Capital," "Longtide Financial Partners," "SlateHouse Group," "Keelson Strategic," "Windlass Steelcrafts," and "Quantal Technology" was not checked against any trademark database — only their live web/social presence was confirmed via WebSearch. Legal collision risk (as opposed to SEO collision risk) is unassessed.
- **Google Play Store listings** were not independently curled via `play.google.com/store/search` for every candidate in this shard (time/budget); Play-side collision is inferred only from what WebSearch and the iTunes sweep surfaced, not directly verified per-name on Play.
- **iTunes prefix autocomplete is an approximation**, not real Apple Search Ads or App Store "suggested search" data — it shows what a 4-letter `term=` query currently returns from the iTunes Search API, which correlates with but is not identical to live autocomplete suggestions a typing user would see.
- **"Contaminated results" checks** (the `{name} nigeria/invest/stocks` queries) were run for the 7 borderline WORKABLE/EASY names only (Truetenor, Helmstone, Slatehouse, Beamhouse, Lotline, Tickline, Indexel, Foredeck, Longtide), per the task's explicit budget instruction not to run all four query types for every name; the 11 HARD names were not run through this additional check since their Wikipedia/company collisions already settle the verdict.
