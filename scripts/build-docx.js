const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat, convertInchesToTwip,
} = require('docx');
const fs = require('fs');

const W = 9360;               // US Letter content width in DXA (12240 - 2*1440 margins)
const NAVY = '1F3050';
const GREY = '5A6472';
const RULE = 'D5DAE0';
const BAND = 'F2F4F7';

const P = (text, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 140, line: 276 },
  alignment: opts.align,
  children: [new TextRun({ text, bold: opts.bold, italics: opts.italics,
    size: opts.size ?? 21, color: opts.color ?? '222222', font: 'Calibri' })],
});

// A paragraph mixing bold lead-in with normal body text.
const PRuns = (runs, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 140, line: 276 },
  children: runs.map(r => new TextRun({
    text: r.t, bold: r.b, italics: r.i,
    size: r.size ?? 21, color: r.color ?? '222222', font: 'Calibri' })),
});

const H1 = text => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 320, after: 180 },
  children: [new TextRun({ text, bold: true, size: 30, color: NAVY, font: 'Calibri' })],
});

const H2 = text => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 260, after: 140 },
  children: [new TextRun({ text, bold: true, size: 24, color: NAVY, font: 'Calibri' })],
});

// Horizontal rule as a bottom-bordered paragraph (never a table).
const HR = () => new Paragraph({
  spacing: { before: 60, after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 1 } },
  children: [new TextRun({ text: '', size: 2 })],
});

const cell = (text, { widths, bold, header, align, color, shade } = {}) => new TableCell({
  width: { size: widths, type: WidthType.DXA },
  shading: shade ? { type: ShadingType.CLEAR, fill: shade, color: 'auto' } : undefined,
  margins: { top: 90, bottom: 90, left: 120, right: 120 },
  children: [new Paragraph({
    spacing: { after: 0, line: 252 },
    alignment: align,
    children: [new TextRun({
      text, bold: bold || header, size: 19,
      color: header ? 'FFFFFF' : (color ?? '222222'), font: 'Calibri' })],
  })],
});

const table = (headers, rows, cols) => new Table({
  columnWidths: cols,
  width: { size: W, type: WidthType.DXA },
  borders: {
    top:    { style: BorderStyle.SINGLE, size: 2, color: RULE },
    bottom: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    left:   { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    right:  { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    insideVertical:   { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  },
  rows: [
    new TableRow({
      tableHeader: true,
      children: headers.map((h, i) => cell(h, { widths: cols[i], header: true, shade: NAVY })),
    }),
    ...rows.map((r, ri) => new TableRow({
      children: r.map((c, i) => cell(c, {
        widths: cols[i],
        bold: i === 0,
        shade: ri % 2 === 1 ? BAND : undefined,
      })),
    })),
  ],
});

// ---------------------------------------------------------------- content

const theEight = [
  ['1. Tarvick', 'TAR-vick', 'tarvick.com', 'Easy',
   'Nothing to flag — it simply carries no meaning, so you supply all of it.'],
  ['2. Fenvon', 'FEN-von', 'fenvon.com', 'Easy',
   '"-von" reads formal and European, a little cool against the warm brief.'],
  ['3. Tervick', 'TER-vick', 'tervick.com', 'Easy',
   'Sits very close to Tarvick — do not shortlist both.'],
  ['4. Fenvell', 'FEN-vell', 'fenvell.com', 'Workable',
   'Drifts toward "Fennell", a real surname and a herb.'],
  ['5. Brawick', 'BRAW-ick', 'brawick.com', 'Easy',
   'Heard once, it can be written down as "Berwick".'],
  ['6. Tarwen', 'TAR-wen', 'tarwen.com', 'Easy',
   'Faint echo of Arwen, so it reads slightly fantasy.'],
  ['7. Sarwen', 'SAR-wen', 'sarwen.com', 'Easy',
   'Same Arwen echo, and a softer opening syllable than Tarwen.'],
  ['8. Zervick', 'ZER-vick', 'zervick.com', 'Easy',
   'The Z start pushes it toward science fiction rather than finance.'],
];

const rejected = [
  ['Kelvell', 'Heard as "Kelvin" — one of the most common male first names in Nigeria. Permanent confusion in search and on support calls.'],
  ['Danvell', 'Heard as "Danielle".'],
  ['Sarwick', 'Near-homophone of Warwick — a university, a hotel group and a castle.'],
  ['Verwick', 'Same Warwick collision, and many Nigerian speakers do not sharply separate "v" from "w".'],
  ['Dorwen', 'Collapses into "Doreen" or "Dorwin", both real names.'],
  ['Bravton', 'Collapses into "Braxton", which has live trademark filings, and looks like "Brighton".'],
  ['Fernvo', 'Echoes Venmo — the dominant US payments app, and you plan to enter the US.'],
  ['Cadvar', 'Contains "cad", an English word for a dishonourable man. Wrong word to sit inside a money brand.'],
  ['Gaflin', 'Reads as a pharmaceutical. The "-flin" pattern belongs to drug names.'],
  ['Zarwen', 'The Z and the "-wen" together read as a fantasy character.'],
];

const comparison = [
  ['Two syllables', 'Tarvick, Fenvon, Tervick', 'Exactly the shape you asked for. Short, clean, no baggage.',
   'Weakest of the three. Nothing sounds warm, and none is memorable on its own.'],
  ['Name-style', 'Elowena, Kerwenna, Cordenna', 'Sounds like a person. Pleasant to say, easy to own.',
   'Three syllables, and they say nothing about money.'],
  ['Meaning-led', 'Dawnlot, Torchlot, Lanternlot', 'Arrives with an idea, so it explains itself.',
   'Constructed rather than elegant, and two of the three are three syllables.'],
];

const doc = new Document({
  creator: 'Tecdrich Technologies',
  title: 'Two-Syllable Name Options',
  description: 'Brand name shortlist for the trading app',
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: '•',
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 340, hanging: 200 } } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
        margin: { top: 1300, right: 1440, bottom: 1300, left: 1440 },
      },
    },
    children: [
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: 'Two-Syllable Name Options', bold: true, size: 40, color: NAVY, font: 'Calibri' })],
      }),
      new Paragraph({
        spacing: { after: 220 },
        children: [new TextRun({
          text: 'Retail investing app  ·  Tecdrich Technologies Limited  ·  17 September 2026',
          size: 20, color: GREY, font: 'Calibri' })],
      }),
      HR(),

      H1('What you asked for, and what came back'),
      P('You asked for names of exactly two syllables. 217 were generated and every one had its .com checked against the live registry.'),
      table(['Outcome', 'Count', 'Share'], [
        ['Domain already registered', '158', '73%'],
        ['Available, but priced as a premium asset', '41', '19%'],
        ['Available at ordinary price (about $12)', '18', '8%'],
      ], [4680, 2340, 2340]),
      P(''),
      P('Those 18 then went through language, trademark, association and search checks. Eight cleared. Ten did not.', { after: 200 }),
      PRuns([
        { t: 'Be aware: ', b: true },
        { t: 'this is the weakest of the three shortlists produced so far, and the reason is structural. Two syllables is the shortest, most contested shape on the internet. What survives at $12 is not what sounds best — it is what nobody else wanted. Eight names cleared rather than ten, and padding the list would have meant recommending names I would argue against.' },
      ]),
      HR(),

      H1('The eight'),
      P('Every domain below is available today at about $12 a year. Verified 17 September 2026.', { after: 180 }),
      table(['Name', 'Say it', 'Domain', 'Findability', 'Watch out for'],
        theEight, [1500, 1250, 1750, 1300, 3560]),
      P(''),
      PRuns([
        { t: 'Findability ', b: true },
        { t: 'means how hard it would be to reach the top of Google for your own name within six months without paying for advertising. That matters more than usual here, because there is no marketing budget.' },
      ], { after: 200 }),

      H2('If you want one recommendation'),
      PRuns([
        { t: 'Take Tarvick as first choice and Fenvon as second. ', b: true },
        { t: 'Tarvick is the only name in the set with nothing at all to flag: no meaning in any of the ten languages checked, no trademark conflict, no app already using it, and it sounds like a plausible surname rather than an invention. Fenvon is equally clean and more distinctive, but its "von" ending reads formal, which you would need to warm up through tone of voice.' },
      ]),
      PRuns([
        { t: 'Do not shortlist Tarvick and Tervick together. ', b: true },
        { t: 'They differ by one letter and are indistinguishable when spoken in the same room.' },
      ]),
      HR(),

      H1('The ten that were rejected'),
      P('All ten have an available .com. They were cut anyway, because a name that collapses into a real word or a real name the moment it is spoken cannot survive word-of-mouth growth. Someone hears it, types what they heard, and finds nothing.', { after: 180 }),
      table(['Name', 'Why it was cut'], rejected, [1800, 7560]),
      HR(),

      H1('How this compares with the other two shortlists'),
      P('Three different angles have now been run. Each trades something away.', { after: 180 }),
      table(['Approach', 'Best three', 'What it gives you', 'What it costs you'],
        comparison, [1700, 2300, 2680, 2680]),
      P(''),
      PRuns([
        { t: 'The honest summary: ', b: true },
        { t: 'the two-syllable constraint and the $200 budget pull hard against each other. Every two-syllable name that sounds effortless was bought years ago. If two syllables matters more than warmth, Tarvick is a sound choice. If warmth matters more, the meaning-led list is stronger.' },
      ]),
      HR(),

      H1('Before any money is spent'),
      new Paragraph({
        numbering: { reference: 'bullets', level: 0 }, spacing: { after: 110 },
        children: [new TextRun({ text: 'Register the .com the same day you decide. Confirm the price in the basket — that is what settles it.', size: 21, font: 'Calibri' })],
      }),
      new Paragraph({
        numbering: { reference: 'bullets', level: 0 }, spacing: { after: 110 },
        children: [new TextRun({ text: 'Instruct a Nigerian trademark attorney to search classes 9 and 36. The Nigerian register could not be reached during this work, so no Nigerian trademark check exists for any name on any of the three lists. This is a real gap, not a formality.', size: 21, font: 'Calibri' })],
      }),
      new Paragraph({
        numbering: { reference: 'bullets', level: 0 }, spacing: { after: 110 },
        children: [new TextRun({ text: 'Search the CAC company register. It refused access throughout, so a same-name Nigerian company could exist without this work having seen it.', size: 21, font: 'Calibri' })],
      }),
      new Paragraph({
        numbering: { reference: 'bullets', level: 0 }, spacing: { after: 110 },
        children: [new TextRun({ text: 'Claim the handles on X, Instagram, TikTok and LinkedIn. All four platforms were unreachable, so nothing here should be read as "the handle is free".', size: 21, font: 'Calibri' })],
      }),
      new Paragraph({
        numbering: { reference: 'bullets', level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: 'Say the name aloud to Yoruba, Igbo and Hausa speakers before committing. The language work here is careful, but it is desk research, not fieldwork.', size: 21, font: 'Calibri' })],
      }),

      new Paragraph({
        spacing: { before: 200 },
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } },
        children: [new TextRun({
          text: 'Domain availability and price tier verified against the live registry on 17 September 2026. Domains are registered daily — re-check immediately before purchase.',
          size: 18, italics: true, color: GREY, font: 'Calibri' })],
      }),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('output/Two-Syllable-Name-Options.docx', buf);
  console.log('written: output/Two-Syllable-Name-Options.docx');
});
