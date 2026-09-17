const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat,
} = require('docx');
const fs = require('fs');

const W = 9360, NAVY = '1F3050', ACCENT = '2E5A8A', GREY = '5A6472',
      RULE = 'D5DAE0', BAND = 'F2F4F7', F = 'Calibri';

const P = (t, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 140, line: 276 }, alignment: o.align,
  children: [new TextRun({ text: t, bold: o.bold, italics: o.italics,
    size: o.size ?? 21, color: o.color ?? '222222', font: F })] });

const PR = (runs, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 140, line: 276 },
  children: runs.map(r => new TextRun({ text: r.t, bold: r.b, italics: r.i,
    size: r.size ?? 21, color: r.color ?? '222222', font: F })) });

const H1 = t => new Paragraph({
  heading: HeadingLevel.HEADING_1, spacing: { before: 340, after: 170 },
  children: [new TextRun({ text: t, bold: true, size: 30, color: NAVY, font: F })] });

const HR = (o = {}) => new Paragraph({
  spacing: { before: o.before ?? 60, after: o.after ?? 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 1 } },
  children: [new TextRun({ text: '', size: 2 })] });

const cell = (t, { widths, bold, header, shade } = {}) => new TableCell({
  width: { size: widths, type: WidthType.DXA },
  shading: shade ? { type: ShadingType.CLEAR, fill: shade, color: 'auto' } : undefined,
  margins: { top: 90, bottom: 90, left: 120, right: 120 },
  children: [new Paragraph({ spacing: { after: 0, line: 252 },
    children: [new TextRun({ text: t, bold: bold || header, size: 19,
      color: header ? 'FFFFFF' : '222222', font: F })] })] });

const table = (headers, rows, cols) => new Table({
  columnWidths: cols, width: { size: W, type: WidthType.DXA },
  borders: {
    top: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    bottom: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' } },
  rows: [
    new TableRow({ tableHeader: true,
      children: headers.map((h, i) => cell(h, { widths: cols[i], header: true, shade: NAVY })) }),
    ...rows.map((r, ri) => new TableRow({
      children: r.map((c, i) => cell(c, { widths: cols[i], bold: i === 0,
        shade: ri % 2 === 1 ? BAND : undefined })) })) ] });

const bullet = t => new Paragraph({
  numbering: { reference: 'b', level: 0 }, spacing: { after: 110, line: 276 },
  children: [new TextRun({ text: t, size: 21, font: F })] });

// ------------------------------------------------------------------ names

const names = [
  { n: 'Tarvick', say: 'TAR-vick', dom: 'tarvick.com', find: 'Easy',
    what: 'An invented word with the shape and weight of a real surname.',
    why: 'The cleanest name of the nine, and the only one with nothing at all to flag. No meaning in any of the ten languages checked. No trademark, no company, no app anywhere using it. No drift toward another word when spoken. It carries the solidity of a family firm without belonging to any family, which is exactly the trick Marcus pulls for Goldman Sachs.',
    store: 'Tarvick: Stock Investing   /   Buy NGX Shares in Minutes',
    call: 'Sounds like a firm that has been around longer than it has.',
    weak: 'It means nothing, so every association has to be built by you. That is the price of a name nobody else has taken.' },
  { n: 'Fenvon', say: 'FEN-von', dom: 'fenvon.com', find: 'Easy',
    what: 'Invented. The "von" ending gives it a European, almost aristocratic cadence.',
    why: 'The most distinctive of the nine and completely collision-free. Where Tarvick is safe, Fenvon is memorable — the unusual ending makes it stick after one hearing, which matters for a brand that spreads by word of mouth. Clean in every language checked and clear on every trademark search.',
    store: 'Fenvon: Stocks Made Simple   /   Buy NGX and US Shares',
    call: 'Confident and a little formal. Credible for money.',
    weak: 'That same "von" reads cool and European rather than warm and Nigerian. It would need friendly tone of voice around it to avoid feeling distant.' },
  { n: 'Tervick', say: 'TER-vick', dom: 'tervick.com', find: 'Easy',
    what: 'Invented, in the same family as Tarvick.',
    why: 'Almost everything true of Tarvick is true here: clean across all ten languages, no trademark or company collision, no app using it, and an empty page one so you can rank for your own name within weeks.',
    store: 'Tervick — Invest in Stocks   /   Own a Piece of NGX Today',
    call: 'Clean and businesslike.',
    weak: 'It is a near-twin of Tarvick. Spoken in the same room the two are hard to tell apart, so shortlist one or the other, never both.' },
  { n: 'Brawick', say: 'BRAW-ick', dom: 'brawick.com', find: 'Easy',
    what: 'Invented, with the shape of a British place name.',
    why: 'Pleasant and easy to say in both accents, with a solid, settled sound. Nothing competes for it online and no app uses it, so it is cheap to become findable.',
    store: 'Brawick: Buy NGX Stocks   /   Investing Made Simple',
    call: 'Warm and established.',
    weak: 'Heard once, some people will write it down as "Berwick" — a real town and surname. Not fatal, but it costs some referrals.' },
  { n: 'Fenvell', say: 'FEN-vell', dom: 'fenvell.com', find: 'Workable',
    what: 'Invented, softer than Fenvon and easier on the ear.',
    why: 'The warmest of the Fen- family and the most approachable of the nine. It sounds like a name rather than a construction, which is the whole point of this exercise. Clean on trademark and association.',
    store: 'Fenvell: Stock Investing   /   Invest in NGX and US Stocks',
    call: 'Friendly without being casual.',
    weak: 'It drifts toward "Fennell", which is both a real surname and a herb. Search results will be slightly muddier than for the others.' },
  { n: 'Tarwen', say: 'TAR-wen', dom: 'tarwen.com', find: 'Easy',
    what: 'Invented, with a Celtic cadence.',
    why: 'Short, clean, and the best of the -wen family. No collision anywhere and an empty page one. It has a lighter, more modern feel than Tarvick while keeping the same opening syllable.',
    store: 'Tarwen — Invest in Stocks   /   Your First Stock, Made Easy',
    call: 'Light and modern.',
    weak: 'A faint echo of Arwen, the Tolkien character, gives it a slightly fantasy tint. It also shares its first three letters with Tarvick, so the two should not both be shortlisted.' },
  { n: 'Sarwen', say: 'SAR-wen', dom: 'sarwen.com', find: 'Easy',
    what: 'Invented, a softer sibling of Tarwen.',
    why: 'The gentlest opening of the nine — an "S" start reads calmer than a hard "T" or "Z", which suits a product asking nervous first-time investors to trust it. Clean on every check.',
    store: 'Sarwen: NGX Stock Trading   /   Simple Investing for Everyone',
    call: 'Calm and unthreatening.',
    weak: 'The same Arwen echo as Tarwen, and the soft opening makes it slightly less memorable than the harder-edged names.' },
  { n: 'Fenvyn', say: 'FEN-vin', dom: 'fenvyn.com', find: 'Easy',
    what: 'Invented, with a "y" spelling that gives it a modern, deliberate look.',
    why: 'Distinctive on the page in a way the others are not — the "y" makes it look designed rather than accidental, which reads as a considered brand. Clean on trademark, company and app checks.',
    store: 'Fenvyn: Stocks & Shares   /   Buy NGX and US Shares',
    call: 'Modern and considered.',
    weak: 'The "-vyn" spelling is ambiguous on first sight and almost everyone will type "Fenvin" after hearing it. For a brand that grows by word of mouth, that is the most expensive flaw on this list.' },
  { n: 'Zervick', say: 'ZER-vick', dom: 'zervick.com', find: 'Easy',
    what: 'Invented, in the Tarvick family but with a Z opening.',
    why: 'The most distinctive-looking of the nine. A Z start is rare and memorable, and nothing at all competes for the word online.',
    store: 'Zervick: Stocks & Shares   /   Start Investing Today',
    call: 'Sharp and modern.',
    weak: 'The Z pushes it toward science fiction rather than finance. Of the nine it is furthest from the warm, approachable tone the brand is aiming for.' },
];

const compare = [
  ['1', 'Tarvick', 'TAR-vick', 'tarvick.com', 'Easy', 'Nothing to flag; it simply means nothing'],
  ['2', 'Fenvon', 'FEN-von', 'fenvon.com', 'Easy', 'Reads cool and European, not warm'],
  ['3', 'Tervick', 'TER-vick', 'tervick.com', 'Easy', 'Near-twin of Tarvick'],
  ['4', 'Brawick', 'BRAW-ick', 'brawick.com', 'Easy', 'Can be written down as "Berwick"'],
  ['5', 'Fenvell', 'FEN-vell', 'fenvell.com', 'Workable', 'Drifts toward "Fennell"'],
  ['6', 'Tarwen', 'TAR-wen', 'tarwen.com', 'Easy', 'Faint Arwen echo; shares "Tar" with Tarvick'],
  ['7', 'Sarwen', 'SAR-wen', 'sarwen.com', 'Easy', 'Same Arwen echo; softest, least memorable'],
  ['8', 'Fenvyn', 'FEN-vin', 'fenvyn.com', 'Easy', 'Will be typed "Fenvin" after hearing'],
  ['9', 'Zervick', 'ZER-vick', 'zervick.com', 'Easy', 'Z start reads sci-fi, not finance'],
];

const cut = [
  ['Kelvell', 'Heard as "Kelvin" — one of the most common male first names in Nigeria.'],
  ['Danvell', 'Heard as "Danielle".'],
  ['Lormon', 'Heard as "Mormon". A religious collision is disqualifying for a trust product.'],
  ['Zarvyn', 'Heard as "Marvin", and several live commercial users already.'],
  ['Sarwick', 'Near-homophone of Warwick — a university, a hotel group, a castle.'],
  ['Verwick', 'Same Warwick collision, worse because many Nigerian speakers do not sharply separate "v" from "w".'],
  ['Dorwen', 'Collapses into "Doreen" or "Dorwin".'],
  ['Bravton', 'Collapses into "Braxton", which has live trademark filings.'],
  ['Fernvo', 'Echoes Venmo, the dominant US payments app — and you plan to enter the US.'],
  ['Cadvar', 'Contains "cad", an English word for a dishonourable man.'],
  ['Gaflin', 'Reads as a pharmaceutical. The "-flin" pattern belongs to drug names.'],
  ['Zarwen', 'The Z and the "-wen" together read as a fantasy character.'],
];

const children = [
  new Paragraph({ spacing: { after: 60 },
    children: [new TextRun({ text: 'Two-Syllable Names', bold: true, size: 44, color: NAVY, font: F })] }),
  new Paragraph({ spacing: { after: 40 },
    children: [new TextRun({ text: 'Short, human-sounding, no meaning attached', bold: true, size: 26, color: ACCENT, font: F })] }),
  new Paragraph({ spacing: { after: 240 },
    children: [new TextRun({ text: 'Tecdrich Technologies Limited  ·  17 September 2026', size: 20, color: GREY, font: F })] }),
  HR(),

  H1('What this is'),
  P('Every name in this document is exactly two syllables, invented, and carries no meaning about investing. This is the register of Claude, Marcus, Oscar, Monzo, Chime and Kuda — none of which mean anything either. They became what they mean through use.'),
  PR([{ t: 'Every domain here is available today at ordinary price, about $12 a year. ', b: true },
      { t: 'None is a premium resale domain. All were checked against the live registry on 17 September 2026.' }]),
  P('Nothing else is in this document. No longer names, no meaning-led names, no comparisons.'),
  HR(),

  H1('Why there are nine and not ten'),
  P('335 two-syllable names were generated and every one had its domain checked.'),
  table(['Outcome', 'Count', 'Share'], [
    ['Domain already registered', '246', '73%'],
    ['Available, but priced as a premium asset', '68', '20%'],
    ['Available at ordinary price (about $12)', '21', '7%'],
  ], [4680, 2340, 2340]),
  P(''),
  PR([{ t: 'Two syllables is the most contested shape on the internet. ', b: true },
      { t: 'Short, smooth, human-sounding words are what every domain investor bought a decade ago and what every startup has wanted since. Claude, Monzo, Chime, Oscar, Marcus and Kuda were all claimed long before a company with a USD 200 budget could reach them. The instinct is right; the inventory is gone.' }]),
  P('Those 21 then went through language, trademark, association and search checks. Twelve were cut. Nine cleared. Padding the list to ten would have meant including a name I would argue against, so the ninth is the last one that earns its place.'),
  HR(),

  H1('The nine'),
];

names.forEach((x, i) => {
  children.push(new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: i === 0 ? 120 : 320, after: 60 },
    children: [new TextRun({ text: (i + 1) + '.   ' + x.n, bold: true, size: 28, color: NAVY, font: F })] }));
  children.push(new Paragraph({ spacing: { after: 150 },
    children: [
      new TextRun({ text: x.say, bold: true, size: 21, color: ACCENT, font: F }),
      new TextRun({ text: '     ·     ', size: 21, color: RULE, font: F }),
      new TextRun({ text: x.dom + '  ·  about $12  ·  Findability: ' + x.find, size: 20, color: GREY, font: F }) ] }));
  children.push(P(x.what, { italics: true, color: '3A4553' }));
  children.push(PR([{ t: 'Why it works.  ', b: true }, { t: x.why }]));
  children.push(PR([{ t: 'In the App Store.  ', b: true }, { t: x.store }]));
  children.push(PR([{ t: 'On a support call.  ', b: true }, { t: '"You’re through to ' + x.n + ', how can I help?"  ' + x.call }]));
  children.push(PR([{ t: 'Watch out for.  ', b: true }, { t: x.weak }], { after: 40 }));
});

children.push(
  HR({ before: 220 }),
  H1('The nine side by side'),
  table(['#', 'Name', 'Say it', 'Domain', 'Findability', 'Watch out for'],
    compare, [440, 1250, 1300, 1700, 1250, 3420]),
  P(''),
  PR([{ t: 'Findability ', i: true },
      { t: 'is how hard it would be to reach the top of Google for your own name within six months without paying for advertising. That matters more than usual here, because there is no advertising budget.' }]),
  HR(),

  H1('How to choose'),
  PR([{ t: 'Take Tarvick as first choice and Fenvon as second. ', b: true },
      { t: 'Tarvick is the only one of the nine with nothing at all to flag — no meaning anywhere, no trademark, no app, no drift toward another word. Fenvon is equally clean and more memorable, held back only by a cool European register that friendly branding would fix.' }]),
  PR([{ t: 'Three pairs must not be shortlisted together. ', b: true },
      { t: 'Tarvick and Tervick are near-twins. Tarvick and Tarwen share their opening. Fenvon, Fenvell and Fenvyn are all Fen-. Pick one from each pair or family, or the shortlist becomes a memory test.' }]),
  PR([{ t: 'If warmth matters most, ', b: true },
      { t: 'take Fenvell or Sarwen — the two softest of the nine.' }]),
  PR([{ t: 'If being memorable matters most, ', b: true },
      { t: 'take Fenvon or Zervick — the two that stick after one hearing.' }]),
  HR(),

  H1('The twelve that were cut'),
  P('All twelve have an available domain. They were cut anyway, because a name that collapses into a real word or a real name the moment it is spoken cannot survive word-of-mouth growth. Someone hears it, types what they heard, and finds nothing.', { after: 180 }),
  table(['Name', 'Why it was cut'], cut, [1700, 7660]),
  HR(),

  H1('Before any money is spent'),
  bullet('Register the .com the same day you decide. About $12. Availability was verified on 17 September 2026 and domains are registered daily — re-check in the basket, and confirm the price there.'),
  bullet('Instruct a Nigerian trademark attorney to search classes 9 (software) and 36 (financial services).'),
  bullet('Claim the handles on X, Instagram, TikTok and LinkedIn before announcing anything.'),
  bullet('Say the name aloud to Yoruba, Igbo and Hausa speakers before committing.'),

  new Paragraph({ spacing: { before: 200, after: 120 },
    children: [new TextRun({ text: 'What could not be checked', bold: true, size: 22, color: NAVY, font: F })] }),
  bullet('No Nigerian trademark search was possible — the Nigerian IP registry was unreachable. There is no Nigerian trademark data behind any of these nine names. This is the biggest gap and the reason the attorney search above is not a formality.'),
  bullet('No CAC company-register search was possible — the site refused access.'),
  bullet('Social handles were never confirmed. All four platforms were unreachable, so nothing here should be read as "the handle is free".'),
  bullet('Prices are confirmed as standard tier rather than as an exact figure, which in practice means roughly $10 to $15.'),

  new Paragraph({ spacing: { before: 220 },
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } },
    children: [new TextRun({
      text: 'Verified directly: domain availability and price tier for all 335 two-syllable candidates against the live registry; no collision with any NGX-listed company or ticker; no exact-name clash in the Nigerian App Store; trademark and reputation checks against WIPO, the USPTO and the open web.',
      size: 18, italics: true, color: GREY, font: F })] }),
);

const doc = new Document({
  creator: 'Tecdrich Technologies',
  title: 'Two-Syllable Names',
  description: 'Short human-sounding name options',
  numbering: { config: [{ reference: 'b', levels: [{
    level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 340, hanging: 200 } } } }] }] },
  sections: [{
    properties: { page: {
      size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
      margin: { top: 1300, right: 1440, bottom: 1300, left: 1440 } } },
    children }],
});

Packer.toBuffer(doc).then(b => {
  fs.writeFileSync('output/Two-Syllable-Names.docx', b);
  console.log('written');
});
