import type { Faq } from '@/types';

/** Inhalte der Brückenseite. Sichtbare Fragen, damit das FAQ-Markup gedeckt ist. */
export const bridgeText = {
  reihenfolge: [
    'Getrennt beauftragt heißt: zweimal Gerüst, zweimal Baustelle, zweimal Vorbereitung. Die Arbeiten an der Deckung und die Montage der Anlage greifen auf dieselben Bauteile zu, deshalb ist die Reihenfolge eine Kostenfrage und keine Geschmacksfrage.',
    'Kommt die Anlage auf eine Deckung, die in wenigen Jahren erneuert werden muss, fallen Demontage und erneute Montage an. Umgekehrt ist eine sanierte Fläche ohne vorbereitete Befestigungspunkte und Leitungswege eine vertane Gelegenheit.',
    'Wir prüfen deshalb zuerst und legen dann die Reihenfolge fest. Manchmal lautet das Ergebnis: erst sanieren, dann belegen. Manchmal: direkt belegen, die Deckung trägt noch Jahre. Beides ist ein Ergebnis, kein Verkaufsgespräch.',
  ],
  zusammen: [
    'Wenn beides zusammen geplant wird, ändert sich mehr als der Termin. Die Unterkonstruktion wird dort gesetzt, wo die Sparren tatsächlich liegen, und nicht dort, wo sie vermutet werden. Die Dachhaken greifen unter den Ziegel und sitzen auf dem Sparren, das lässt sich bei offener Fläche prüfen statt schätzen.',
    'Die Leitungswege vom Dach zum Zählerschrank entstehen, während die Fläche offen ist. Nachträglich sind sie fast immer ein Kompromiss, oft sichtbar und selten der kürzeste Weg.',
    'Auch die Dämmung profitiert. Durchdringungen für Befestigungen und Leitungen werden einmal geplant und einmal abgedichtet, nicht zweimal geöffnet.',
    'Und die Zuständigkeit bleibt klar. Wenn ein Betrieb die Deckung ausführt und ein anderer die Anlage montiert, ist im Schadensfall die erste Frage, wer den Anschluss verantwortet. Bei uns entfällt diese Frage, weil beide Arbeiten aus einer Hand kommen.',
  ],
  gruende: [
    { title: 'Ein Gerüst', note: 'Auf- und Abbau fallen einmal an, nicht zweimal.' },
    { title: 'Eine Prüfung', note: 'Statik, Deckung und Leitungswege werden einmal beurteilt.' },
    { title: 'Ein Ansprechpartner', note: 'Keine Schnittstelle, an der Verantwortung endet.' },
    { title: 'Eine Dokumentation', note: 'Dachaufbau und Anlage in einem Satz Unterlagen.' },
  ],
};

export const bridgeFaq: Faq[] = [
  {
    question: 'Muss das Dach vor einer Photovoltaikanlage immer saniert werden?',
    answer:
      'Nein. Entscheidend ist der Zustand der Deckung und der Unterdeckung. Trägt die Fläche noch viele Jahre, belegen wir sie ohne Sanierung. Steht die Erneuerung ohnehin an, ist der gemeinsame Weg günstiger als zwei getrennte Baustellen.',
  },
  {
    question: 'Was kostet die Kombination gegenüber zwei getrennten Aufträgen?',
    answer:
      'Belastbar wird das erst am Objekt. Sicher ist, welche Posten nur einmal anfallen: Gerüst, Baustelleneinrichtung, Prüfung, Leitungswege und Dokumentation. Diese Posten benennen wir im Angebot einzeln, damit der Vergleich möglich ist.',
  },
  {
    question: 'Wie lange dauert eine Dachsanierung mit Photovoltaik?',
    answer:
      'Die Dauer hängt von Fläche, Deckung, Wetter und Lieferzeiten ab. Eine belastbare Aussage machen wir nach der Bestandsaufnahme und nicht vorher. Was wir vorher zusagen können, ist die Reihenfolge der Arbeiten und wer sie koordiniert.',
  },
  {
    question: 'Gilt der Umsatzsteuersatz von 0 Prozent auch für die Dacharbeiten?',
    answer:
      'Für bestimmte Photovoltaikanlagen und ihre wesentlichen Komponenten gilt unter den gesetzlichen Voraussetzungen ein Umsatzsteuersatz von 0 Prozent. Dacharbeiten sind davon nicht automatisch erfasst. Wie Ihr Vorhaben im Einzelfall zu beurteilen ist, klärt Ihr Steuerberater, wir stellen die Positionen transparent dar.',
  },
];

/** Weiterführende Verweise der Brückenseite, docs/06, Abschnitt 20. */
export const bridgeWeiter = [
  { to: '/dach/', label: 'Alle Leistungen am Dach' },
  { to: '/photovoltaik/', label: 'Alle Leistungen an der Anlage' },
  { to: '/projekte/', label: 'Ausgeführte Projekte ansehen' },
];
