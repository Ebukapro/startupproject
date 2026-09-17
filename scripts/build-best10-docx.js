const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat,
} = require('docx');
const fs = require('fs');

const W = 9360;
const NAVY = '1F3050';
const ACCENT = '2E5A8A';
const GREY = '5A6472';
const RULE = 'D5DAE0';
const BAND = 'F2F4F7';
const F = 'Calibri';

const P = (t, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 140, line: 276 },
  alignment: o.align,
  children: [new TextRun({ text: t, bold: o.bold, italics: o.italics,
    size: o.size ?? 21, color: o.color ?? '222222', font: F })],
});

const PR = (runs, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 140, line: 276 },
  indent: o.indent,
  children: runs.map(r => new TextRun({
    text: r.t, bold: r.b, italics: r.i,
    size: r.size ?? 21, color: r.color ?? '222222', font: F })),
});

const H1 = t => new Paragraph({
  heading: HeadingLevel.HEADING_1, spacing: { before: 340, after: 170 },
  children: [new TextRun({ text: t, bold: true, size: 30, color: NAVY, font: F })],
});

const HR = (o = {}) => new Paragraph({
  spacing: { before: o.before ?? 60, after: o.after ?? 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 1 } },
  children: [new TextRun({ text: '', size: 2 })],
});

const cell = (t, { widths, bold, header, shade, color } = {}) => new TableCell({
  width: { size: widths, type: WidthType.DXA },
  shading: shade ? { type: ShadingType.CLEAR, fill: shade, color: 'auto' } : undefined,
  margins: { top: 90, bottom: 90, left: 120, right: 120 },
  children: [new Paragraph({
    spacing: { after: 0, line: 252 },
    children: [new TextRun({ text: t, bold: bold || header, size: 19,
      color: header ? 'FFFFFF' : (color ?? '222222'), font: F })],
  })],
});

const table = (headers, rows, cols) => new Table({
  columnWidths: cols,
  width: { size: W, type: WidthType.DXA },
  borders: {
    top: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    bottom: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  },
  rows: [
    new TableRow({ tableHeader: true,
      children: headers.map((h, i) => cell(h, { widths: cols[i], header: true, shade: NAVY })) }),
    ...rows.map((r, ri) => new TableRow({
      children: r.map((c, i) => cell(c, { widths: cols[i], bold: i === 0,
        shade: ri % 2 === 1 ? BAND : undefined })) })),
  ],
});

const bullet = t => new Paragraph({
  numbering: { reference: 'b', level: 0 }, spacing: { after: 110, line: 276 },
  children: [new TextRun({ text: t, size: 21, font: F })],
});

// --------------------------------------------------------------- the ten

const names = [
  {
    n: '1.  Dawnlot', score: '88 / 100', say: 'DAWN-lot', dom: 'dawnlot.com  ·  about $12',
    find: 'Easy', tm: 'Clear',
    idea: 'Dawn is first light and a fresh start. A lot is a parcel of shares — the unit you actually buy. Together: the morning you start owning something.',
    fit: 'Your user is not a trader. They have kept money in PiggyVest or Cowrywise and are buying equities for the first time, and the feeling that matters is starting, not winning. "Dawn" says beginning without promising a return, which is exactly the line SEC Nigeria cares about. It is also the only name of the ten clean on trademark, easy to find online and safe across all ten languages checked — nothing else scored top marks on all three.',
    store: 'Dawnlot: Invest in Stocks  /  Buy NGX & US Shares',
    call: 'Warm and unremarkable in a good way. Sounds like a firm that has been around a while.',
    weak: 'Mild. "Dawn" does not tell anyone you are an investing app, so the subtitle and icon carry that. No verb form either — nobody will say "I dawnlotted it".',
  },
  {
    n: '2.  Talvinia', score: '87 / 100', say: 'tal-VIN-ee-a', dom: 'talvinia.com  ·  about $12',
    find: 'Easy', tm: 'Clear',
    idea: 'An invented word built on a tally root — the counting of what is yours.',
    fit: 'The cleanest slate on the list. Search results for the bare word are genuinely empty: no company, no Wikipedia entry, no app, nothing to displace. For a company that cannot buy visibility, that means ranking for your own name within weeks rather than fighting someone for years. It also produces a user noun on its own — "Talvinians" — which is what a community forms around.',
    store: 'Talvinia — Stocks & Shares  /  Invest in NGX & US Stocks',
    call: 'Credible and slightly premium, without sounding like an old-line asset manager.',
    weak: 'Reads as a place or a person before it reads as a product. Being meaningless is the price of being unclaimed — you get a clean run at search, but you must teach the market what the word means.',
  },
  {
    n: '3.  Kerwenna', score: '85 / 100', say: 'ker-WEN-a', dom: 'kerwenna.com  ·  about $12',
    find: 'Easy', tm: 'Clear',
    idea: 'Invented, with the shape of a real Celtic given name. It means nothing, deliberately.',
    fit: 'This is the closest the list gets to what you originally wanted — a name in the register of Claude, Marcus or Monzo, that carries no argument about the product and simply sounds like a name a person would trust. It came through the language screen clean in all ten languages, holds up in both a Nigerian and an international mouth, and has no trademark, company or app collision anywhere.',
    store: 'Kerwenna — Invest in Stocks  /  Buy NGX and US Shares',
    call: 'Sounds like a real firm with a real history. Among the most credible of the ten.',
    weak: 'The doubled "n" is a spelling risk. Heard once in a voice note, some listeners will write "Kerwena" and find nothing.',
  },
  {
    n: '4.  Candlelot', score: '84 / 100', say: 'CAN-dl-lot', dom: 'candlelot.com  ·  about $12',
    find: 'Workable', tm: 'Clear',
    idea: 'A candle is light. A candlestick is the chart every trader reads. A lot is a parcel of shares. One word, both audiences.',
    fit: 'The best double meaning on the list, and it maps onto your two-phase audience. To a first-time investor a candle is warmth and light — domestic, nothing to fear. To anyone who has traded before, "candle" is immediately the green-and-red chart, which makes the name feel insider-correct rather than childish. Few names speak to a beginner and a trader at once without patronising one of them.',
    store: 'Candlelot: Stock Investing  /  NGX & US Shares, Simply',
    call: 'Friendly and clear, no pomp.',
    weak: 'The clever half is invisible to the people you are aiming at — a first-timer does not know what a candlestick is yet. And typing "Cand-" in the App Store pulls up Candy Crush long before it reaches you.',
  },
  {
    n: '5.  Cordenna', score: '84 / 100', say: 'kor-DEN-a', dom: 'cordenna.com  ·  about $12',
    find: 'Easy', tm: 'Clear',
    idea: 'Invented. A solid, slightly formal proper noun with no meaning attached.',
    fit: 'Clean on every screen and easy in both accents, with a firmer, more established sound than most invented names — it reads like an institution rather than a startup. For a product asking first-time investors to hand over money, sounding older than you are is an asset. Nothing competes for it online, so page one is winnable quickly and cheaply.',
    store: 'Cordenna: Invest in Stocks  /  NGX & US Shares, Simply',
    call: 'Formal and solid. The most institutional-sounding name of the ten.',
    weak: 'A faint echo of the surname Corden, and "cord" is visible inside it. It is also the least warm of the invented names — closer to a law firm than to Kuda.',
  },
  {
    n: '6.  Torchlot', score: '83 / 100', say: 'TORCH-lot', dom: 'torchlot.com  ·  about $12',
    find: 'Workable', tm: 'Clear',
    idea: 'In Nigerian English a torch is the flashlight you reach for when the power goes. Plus lot, a parcel of shares.',
    fit: 'The most locally-felt name of the ten. Almost every Nigerian has reached for a torch this week, and that ordinary domestic familiarity is exactly the register the brief asks for. It carries the same light-and-visibility idea as Lanternlot but with none of the trademark problem. If you want a name that feels like it came from the market you are selling into rather than from a branding agency, this is it.',
    store: 'Torchlot: Invest in Stocks  /  Buy NGX and US Shares',
    call: 'Grounded and plain.',
    weak: 'It does not travel as well as it lands. "Torch" meaning flashlight is British and Nigerian usage; an American hears a burning stick. The warmth that makes it strong for the NGX phase partly evaporates in the US phase.',
  },
  {
    n: '7.  Quiettally', score: '82 / 100', say: 'KWY-et-TAL-ee', dom: 'quiettally.com  ·  about $12',
    find: 'Workable', tm: 'Clear',
    idea: 'A calm, unhurried count of what you own.',
    fit: 'The easiest of all ten to spell correctly after hearing it once — two ordinary words, no traps — and that single property is what protects word-of-mouth referrals. It also takes a position against the category. Nigerian retail investing is loud, and carries the memory of MMM and MBA Forex. "Quiet" says the opposite of a get-rich-quick scheme, which speaks to a first-timer whose real fear is being scammed rather than missing out. "Tally up" gives you a working verb.',
    store: 'Quiettally: Stocks  /  A Calm Way to Invest',
    call: 'Calm and reassuring — the right note for someone ringing about their money.',
    weak: '"Tally" is a registered fintech trademark elsewhere. At ten letters it is also the longest name here, which eats into your App Store title budget.',
  },
  {
    n: '8.  Fenmara', score: '82 / 100', say: 'fen-MAR-a', dom: 'fenmara.com  ·  about $12',
    find: 'Easy', tm: 'Clear',
    idea: 'Invented. Soft, open vowels; no meaning attached.',
    fit: 'The warmest of the invented names and the easiest to say of all ten — three open syllables, no consonant clusters, no spelling trap. It works equally well in a Nigerian and an international mouth, which several stronger-scoring names do not. Clean on trademark, company and app checks, with an empty page one.',
    store: 'Fenmara — Invest in Stocks  /  Invest in NGX & US Stocks',
    call: 'Warm and approachable. The friendliest of the ten.',
    weak: '"Mara" is the biblical word for bitter — Ruth 1:20, "call me Mara, for the Almighty has dealt bitterly with me". In a market that is roughly half Christian, that is a real echo to weigh, even if most people will never make the connection.',
  },
  {
    n: '9.  Lanternlot', score: '81 / 100', say: 'LAN-tern-lot', dom: 'lanternlot.com  ·  $11.28 confirmed',
    find: 'Workable', tm: 'Contested',
    idea: 'A lantern is the light you carry to see where you are going. Plus lot, a parcel of shares.',
    fit: 'Two reasons worth taking seriously. First, the territory is genuinely empty: across every competitor surveyed, Nigerian and international, only one company anywhere uses a light metaphor (Lightyear, in the UK), and nobody in Nigeria does. Most territories in this market are crowded — savings jars, growth verbs, local currency words. This one is open. Second, a lantern means something specific in Nigeria: it is what you light when the grid goes. The metaphor is domestic, not imported.',
    store: 'Lanternlot: Invest  /  Invest in NGX & US Stocks',
    call: 'The warmest of the ten.',
    weak: 'Lantern Finance is a live, FinCEN-registered crypto-lending fintech. Different product, different market, and the domain is free — but close enough in sector that it needs a lawyer before you commit. If the opinion comes back clean this is arguably the best name here. If it does not, take Torchlot, which carries almost the same idea with no conflict.',
  },
  {
    n: '10.  Danvellis', score: '81 / 100', say: 'dan-VELL-is', dom: 'danvellis.com  ·  about $12',
    find: 'Easy', tm: 'Clear',
    idea: 'Invented, with the cadence of a surname.',
    fit: 'Distinctive and completely clear legally, with an empty page one. The "Dan" opening is familiar and likeable to a Nigerian ear without belonging to any one ethnic group, which several candidates failed on. It is the most obviously ownable name of the ten — nothing else in the world is called this.',
    store: 'Danvellis — Stocks & Shares  /  Buy NGX and US Stocks',
    call: 'Professional, if slightly formal.',
    weak: 'It reads as a person’s full name rather than a brand — closer to meeting someone called Dan Vellis than to opening an app. Nine letters also makes it the joint-longest here.',
  },
];

const compare = [
  ['1', 'Dawnlot', 'DAWN-lot', '88', 'Easy', 'Clear', 'First light, a parcel of shares'],
  ['2', 'Talvinia', 'tal-VIN-ee-a', '87', 'Easy', 'Clear', 'A tally of what you own'],
  ['3', 'Kerwenna', 'ker-WEN-a', '85', 'Easy', 'Clear', 'Invented; sounds like a real name'],
  ['4', 'Candlelot', 'CAN-dl-lot', '84', 'Workable', 'Clear', 'Candlelight, and the candlestick chart'],
  ['5', 'Cordenna', 'kor-DEN-a', '84', 'Easy', 'Clear', 'Invented; solid and institutional'],
  ['6', 'Torchlot', 'TORCH-lot', '83', 'Workable', 'Clear', 'The torch you reach for'],
  ['7', 'Quiettally', 'KWY-et-TAL-ee', '82', 'Workable', 'Clear', 'A calm count of your money'],
  ['8', 'Fenmara', 'fen-MAR-a', '82', 'Easy', 'Clear', 'Invented; the warmest sound'],
  ['9', 'Lanternlot', 'LAN-tern-lot', '81', 'Workable', 'Contested', 'A light to see your money by'],
  ['10', 'Danvellis', 'dan-VELL-is', '81', 'Easy', 'Clear', 'Invented; a surname cadence'],
];

const children = [
  new Paragraph({ spacing: { after: 60 },
    children: [new TextRun({ text: 'Naming Your Trading App', bold: true, size: 44, color: NAVY, font: F })] }),
  new Paragraph({ spacing: { after: 40 },
    children: [new TextRun({ text: 'The Best Ten', bold: true, size: 30, color: ACCENT, font: F })] }),
  new Paragraph({ spacing: { after: 240 },
    children: [new TextRun({ text: 'Tecdrich Technologies Limited  ·  17 September 2026', size: 20, color: GREY, font: F })] }),
  HR(),

  H1('How to use this document'),
  P('You are choosing a first choice and a second choice. The second matters: a name can still fall over at the trademark stage, and you want the fallback already agreed rather than starting the conversation again.'),
  PR([{ t: 'Every domain here has been checked against the live registry and is available today at ordinary price, about $12 a year. ', b: true },
      { t: 'None is a premium resale domain. That was the hardest condition to meet. Across the whole project, 418 candidate names were generated and domain-checked; roughly three quarters were already registered and another fifth were priced as assets rather than domains.' }]),
  P('The score out of 100 weighs eight things: domain and trademark cleanliness, memorability, how cheaply the name can be found, whether it works in both a Nigerian and an international mouth, distinctiveness, word-of-mouth potential, tone, and regulatory safety.'),
  PR([{ t: 'Treat the ranking as a starting point, not a verdict. ', b: true },
      { t: 'Seven points separate first from tenth. Several names lower down beat the leader on a single dimension that may matter more to you. Read the ten, then use the three decision frames at the end.' }]),
  HR(),

  H1('What this name has to do'),
  P('Four jobs, in order of how much they cost you if the name gets them wrong.'),
  PR([{ t: '1.  Survive being heard once. ', b: true },
      { t: 'Your first users are 22 to 40, buying equities for the first time, and most will arrive because a friend said the name aloud in a voice note or across a table. If the listener types the wrong spelling into the App Store and finds nothing, that referral is gone and you never learn it happened. Several otherwise good names were cut for exactly this — anything with a homophone trap loses customers silently.' }]),
  PR([{ t: '2.  Be findable without paying for it. ', b: true },
      { t: 'You are bootstrapping. You cannot buy your way to the top of Google or the App Store, so the name has to rank for itself. A coined word with no prior meaning does that within weeks; a common English word can take years and may never displace what already owns it. Each name is marked Easy or Workable on this, and the difference is worth more to you than almost anything else on the list.' }]),
  PR([{ t: '3.  Travel from Lagos to New York. ', b: true },
      { t: 'NGX equities now, US equities and dollar balances later. A name effortless in Lagos but awkward in New York fails as badly as the reverse, so both were weighted equally.' }]),
  PR([{ t: '4.  Survive a regulator and an app store reviewer. ', b: true },
      { t: 'The brand goes on SEC Nigeria filings and an App Store listing. It must not imply guaranteed returns or suggest a licence you do not hold. All ten were screened against that and all ten passed.' }]),
  PR([{ t: 'One thing the name does not need to do: ', b: true },
      { t: 'relate to Tecdrich. That is the operating company and can stay the back-office name while the product carries all the warmth.' }], { after: 40 }),
  HR(),
];

names.forEach((x, i) => {
  children.push(new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: i === 0 ? 120 : 340, after: 60 },
    children: [new TextRun({ text: x.n, bold: true, size: 28, color: NAVY, font: F })],
  }));
  children.push(new Paragraph({
    spacing: { after: 150 },
    children: [
      new TextRun({ text: x.say, bold: true, size: 21, color: ACCENT, font: F }),
      new TextRun({ text: '     ·     ', size: 21, color: RULE, font: F }),
      new TextRun({ text: x.dom, size: 20, color: GREY, font: F }),
      new TextRun({ text: '     ·     ', size: 21, color: RULE, font: F }),
      new TextRun({ text: 'Findability: ' + x.find + '     ·     Trademark: ' + x.tm + '     ·     ' + x.score, size: 20, color: GREY, font: F }),
    ],
  }));
  children.push(P(x.idea, { italics: true, color: '3A4553' }));
  children.push(PR([{ t: 'Why it fits what you are building.  ', b: true }, { t: x.fit }]));
  children.push(PR([{ t: 'In the App Store.  ', b: true }, { t: x.store }]));
  children.push(PR([{ t: 'On a support call.  ', b: true }, { t: '"You’re through to ' + x.n.replace(/^\d+\.\s+/, '') + ', how can I help?"  ' + x.call }]));
  children.push(PR([{ t: 'Its honest weakness.  ', b: true }, { t: x.weak }], { after: 40 }));
});

children.push(
  HR({ before: 220 }),
  H1('The ten side by side'),
  table(['#', 'Name', 'Say it', 'Score', 'Findability', 'Trademark', 'The idea'],
    compare, [500, 1500, 1500, 700, 1300, 1260, 2600]),
  P(''),
  PR([{ t: 'Findability ', i: true },
      { t: 'is how hard it would be to reach the top of Google for your own name within six months without paying for advertising. ' },
      { t: 'Contested ', i: true },
      { t: 'means someone else uses a similar name in a related field — not a block, but a question for a lawyer.' }]),
  HR(),

  H1('Three ways to decide'),
  P('Rather than arguing about which name is nicest, pick the question that matters most and let it choose.'),
  PR([{ t: 'If warmth matters most ', b: true },
      { t: '— you want a name a 24-year-old in Lagos recommends to a friend without feeling like they are recommending a bank:' }]),
  bullet('Torchlot — the most locally-felt, and legally clean'),
  bullet('Lanternlot — warmer still, but needs the trademark opinion first'),
  bullet('Fenmara — the softest sound of the ten, and the easiest to say'),
  PR([{ t: 'If legal safety matters most ', b: true },
      { t: '— you are about to file with the SEC and want the fewest future arguments:' }]),
  bullet('Talvinia, Kerwenna, Danvellis — invented, unclaimed, nothing competes for them anywhere'),
  bullet('Dawnlot — clear trademark and clean in every language checked'),
  bullet('Avoid Lanternlot under this frame until a lawyer has looked at the Lantern Finance conflict'),
  PR([{ t: 'If cheap growth matters most ', b: true },
      { t: '— you have no advertising budget and the name must do the work:' }]),
  bullet('Dawnlot, Talvinia, Kerwenna, Cordenna, Fenmara, Danvellis — all rated Easy, so you own your own search results in weeks rather than years'),
  bullet('Quiettally — slower on search, but the easiest of all ten to spell after hearing it once'),
  PR([{ t: 'If you want one recommendation: ', b: true },
      { t: 'take Dawnlot as first choice and Torchlot as second. Dawnlot is the only name clean on all three of trademark, findability and language. Torchlot gives you the warmth Dawnlot lacks, with no legal question attached.' }]),
  HR(),

  H1('Two names that did not make the ten, and why'),
  PR([{ t: 'Elowena ', b: true },
      { t: '(el-oh-WEE-na) is the best-sounding name produced anywhere in this project — effortless, warm, a real Cornish name shape. Its domain is free at standard price. It is not on the list because a fashion label and a skincare brand already occupy its search results, and for a company with no advertising budget that is a permanent tax. If you would rather spend on marketing than rely on free search, take Elowena instead of any name above.' }]),
  PR([{ t: 'Tarvick ', b: true },
      { t: '(TAR-vick) is the strongest two-syllable name found. When the search was restricted to two syllables, 217 candidates yielded only eight usable names and none rated strong — two syllables is the shortest and most contested shape there is, and what survives at $12 is what nobody else wanted. Tarvick is clean and sound, but it did not outscore the ten above. If two syllables is a firm requirement rather than a preference, it is the one to take.' }]),
  HR(),

  H1('Before any money is spent'),
  bullet('Register the .com the same day you decide. About $12. Availability was verified on 17 September 2026 and domains are registered daily — re-check in the basket, and confirm the price there, since that is what settles it.'),
  bullet('Instruct a Nigerian trademark attorney to search classes 9 (software) and 36 (financial services). Most urgent for Lanternlot.'),
  bullet('Claim the handles on X, Instagram, TikTok and LinkedIn before announcing anything.'),
  bullet('Say the name aloud to Yoruba, Igbo and Hausa speakers before committing.'),

  new Paragraph({ spacing: { before: 200, after: 120 },
    children: [new TextRun({ text: 'What could not be checked', bold: true, size: 22, color: NAVY, font: F })] }),
  P('Stated plainly so nothing here is taken as more settled than it is.'),
  bullet('No Nigerian trademark search was possible — the Nigerian IP registry was unreachable throughout. There is no Nigerian trademark data behind any of these ten names. This is the single biggest gap and the reason the attorney search above is not a formality.'),
  bullet('No CAC company-register search was possible — the site refused access. A same-name Nigerian company could exist without this work having seen it.'),
  bullet('Social handles were never confirmed. All four platforms were unreachable, so nothing here should be read as "the handle is free".'),
  bullet('Exact prices are confirmed for one name only. Lanternlot is confirmed at $11.28; the rest are confirmed as standard-price rather than premium, which in practice means roughly $10 to $15.'),

  new Paragraph({ spacing: { before: 220 },
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } },
    children: [new TextRun({
      text: 'Verified directly: .com availability and price tier for all 418 candidates against the live registry; no collision with any NGX-listed company or ticker across 257 entries; no exact-name clash in the Nigerian App Store; trademark and reputation checks against WIPO, the USPTO and the open web.',
      size: 18, italics: true, color: GREY, font: F })] }),
);

const doc = new Document({
  creator: 'Tecdrich Technologies',
  title: 'Naming Your Trading App — The Best Ten',
  description: 'Final brand name shortlist',
  numbering: { config: [{ reference: 'b', levels: [{
    level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 340, hanging: 200 } } } }] }] },
  sections: [{
    properties: { page: {
      size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
      margin: { top: 1300, right: 1440, bottom: 1300, left: 1440 } } },
    children,
  }],
});

Packer.toBuffer(doc).then(b => {
  fs.writeFileSync('output/Naming-Your-Trading-App-Best-Ten.docx', b);
  console.log('written');
});
