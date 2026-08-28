/** Fachbegriffe, die der Content-Linter zaehlt. Mehr als zwei unerklaerte
 *  Begriffe je Absatz sind nicht zulaessig, siehe docs/05, W04. */
export const glossary = [
  'Doppelmuldenfalz', 'Aufsparrendämmung', 'Zwischensparrendämmung', 'Konterlattung',
  'Traglattung', 'Unterdeckung', 'Unterspannbahn', 'Ortgang', 'Traufe', 'Kehle',
  'Titanzink', 'Dachhaken', 'Sparren', 'Attika', 'Firstziegel', 'Kilowatt peak',
  'Marktstammdatenregister', 'Wechselrichter', 'Bruttoleistung', 'Verschattung',
];

/** Woerter, die im Zusammenhang mit einem Fachbegriff als Auflösung gelten. */
export const explainMarkers = [', also ', ', die ', ', das ', ', der ', 'heißt', 'bedeutet', ': '];
