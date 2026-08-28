/** Texte der Startseite. Reihenfolge und Wortlaut nach docs/04, Teil I, mit den
 *  Nachtraegen aus docs/05. Sichtbare Labels sind inhaltlich, nie Aktnamen. */

export const hero = {
  eyebrow: 'Hildesheim · Dach & Energie · Meisterbetrieb',
  h1: ['Ein Dach', 'muss mehr', 'können.'],
  h1Italic: 'mehr',
  lead: 'Dachhandwerk und Photovoltaik für Häuser, die bleiben sollen. Aus Hildesheim, für die Region.',
  phaseLabels: {
    flaeche: 'Dachfläche',
    material: 'Tondachziegel, Doppelmuldenfalz',
    unterkonstruktion: 'Unterkonstruktion',
    energie: 'Energiefläche',
  },
  measure: 'Dachneigung 38°',
  measureLate: '24 Module · 74 % der Dachbreite',
  closing: 'Aus Dachfläche wird Energiefläche.',
  closingEyebrow: 'Dieselbe Fläche, zwei Aufgaben',
};

export const haltung = {
  label: 'Unsere Haltung',
  h2: 'Wir denken das Dach ganzheitlich.',
  text: 'Reparieren, sanieren oder neu denken? Wir verbinden klassisches Dachhandwerk mit moderner Energietechnik, damit aus einzelnen Maßnahmen eine Lösung wird, die in zehn Jahren noch richtig ist.',
};

export const entscheidung = {
  label: 'Was ein Dach entscheidet',
  h2: 'Ein Dach ist eine Entscheidung für Jahrzehnte.',
  lead: 'Ob ein Dach saniert werden muss oder noch Jahre trägt, entscheidet niemand aus der Ferne. Wir beurteilen es an acht Punkten, vor Ort und am Bauteil.',
  points: [
    'Alter des Daches und der letzten Eingriffe.',
    'Zustand der Dachfläche, der Deckung, der Kehlen und der Anschlüsse.',
    'Material und Ausführungsqualität.',
    'Bisherige Instandhaltung und dokumentierte Reparaturen.',
    'Erwartbare Restnutzungsdauer der Deckung.',
    'Notwendige Sanierungsmaßnahmen und ihre Reihenfolge.',
    'Technische Eignung für Photovoltaik: Statik, Ausrichtung, Verschattung.',
    'Langfristige Kombination aus Dach und Energie.',
  ],
  closing: 'Erst danach reden wir über Material und Kosten. Nicht vorher.',
  regional:
    'Viele Häuser im Landkreis Hildesheim stammen aus den Siedlungsjahren der Nachkriegszeit. Wir kennen die Dachaufbauten dieser Baujahre und wissen, worauf bei ihnen zu achten ist.',
};

export const split = {
  label: 'Dach und Energie',
  dach: { title: 'DACH', lines: 'Schützen. Sanieren. Erhalten.' },
  energie: { title: 'ENERGIE', lines: 'Erzeugen. Speichern. Nutzen.' },
  word: 'DACH + ENERGIE',
  h2: 'Zwei Gewerke, ein Bauteil.',
  text: 'Wer das Dach öffnet, entscheidet gleichzeitig über die nächsten Jahrzehnte Energie. Deshalb planen wir beides in einem Zug, mit einem Ansprechpartner und einer Baustelle.',
};

export const anliegen = {
  label: 'Ihr Anliegen',
  h2: 'Was braucht Ihr Haus?',
  choices: [
    { q: 'Mein Dach braucht Aufmerksamkeit.', k: 'Reparatur', preset: 'reparatur' as const },
    { q: 'Mein Dach ist in die Jahre gekommen.', k: 'Sanierung', preset: 'sanierung' as const },
    { q: 'Ich möchte meinen eigenen Strom erzeugen.', k: 'Photovoltaik', preset: 'photovoltaik' as const },
    { q: 'Wenn wir schon ans Dach gehen.', k: 'Dach und Photovoltaik', preset: 'dach-und-pv' as const },
  ],
  wide: {
    q: 'Ich weiß noch nicht, was sinnvoll ist.',
    sub: 'Das ist der häufigste Fall. Wir schauen uns das Dach an und sagen Ihnen, was sinnvoll ist und was warten kann.',
    preset: 'potenzialcheck' as const,
  },
};

export const aufbau = {
  label: 'Der Dachaufbau',
  h2: 'Ein Dach ist ein System aus sieben Schichten.',
  lead: 'Schicht 06 und 07 gehören zum Dachaufbau. Deshalb prüfen wir die Schichten 01 bis 05, bevor wir sie belegen.',
  closing:
    'Eine Photovoltaikanlage sitzt auf der Deckung, die Dachhaken greifen unter den Ziegel. Wer belegt, ohne den Aufbau zu kennen, verschiebt ein Problem nach oben.',
};

export const ablauf = {
  label: 'Ablauf',
  h2: 'So wird aus einer Idee ein fertiges Projekt.',
};

export const projekte = {
  label: 'Beispielprojekte',
  h2: 'Gute Arbeit sieht man.',
  lead: 'Vorher und nachher aus identischer Kameraachse. Der Regler läuft beim Scrollen einmal durch und bleibt danach zum Ziehen bedienbar.',
  note: 'Musterprojekt. Die gezeigten Projekte dienen der Darstellung von Leistungen und sind keine realen Referenzen. Keine Kundennamen, keine Bewertungen, keine Ertragsangaben.',
  /** Die Projektseite zeigt Paare nebeneinander, keinen Regler. Eigener Vorspann. */
  leadSeite: 'Vorher und nachher aus identischer Kameraachse, je Projekt nebeneinander. Daneben stehen Ausgangslage, Ausführung und Ergebnis.',
};

export const qualitaet = {
  label: 'Qualität',
  h2: 'Gute Arbeit endet nicht mit der Montage.',
  points: [
    'Ein Ansprechpartner begleitet Ihr Projekt von der ersten Bestandsaufnahme bis zur Übergabe.',
    'Wir dokumentieren, was unter der Deckung liegt, damit auch in zehn Jahren nachvollziehbar ist, wie das Dach aufgebaut wurde.',
    'Nach der Fertigstellung erreichen Sie uns unter derselben Nummer.',
    'Wartung und Kontrolle vereinbaren wir auf Wunsch, nicht automatisch.',
  ],
  note: 'Keine erfundenen Garantien, keine Zertifikate, keine Mitgliedschaften. Was hier steht, muss der Betrieb bestätigen können.',
  guide: {
    text: 'Worauf es beim Dachaufbau und bei der Auslegung einer Anlage ankommt, erklären wir ausführlich im',
    link: 'Ratgeber',
    to: '/ratgeber/',
  },
};

export const statement = {
  label: 'Haltung',
  lineA: 'Modern in der Technik.',
  lineB: 'Traditionell im Handwerk.',
  text: 'Wir verbinden Erfahrung und moderne Technik, ohne das Wesentliche aus den Augen zu verlieren: saubere Arbeit, klare Kommunikation und Lösungen, die langfristig funktionieren.',
};

export const arbeitsgebiet = {
  label: 'Arbeitsgebiet',
  h2: 'Zuhause im Landkreis Hildesheim.',
  lead: 'Im Einsatz bis etwa 70 Kilometer.',
  text: 'Wir kennen die Bauweisen zwischen Leinebergland und Börde, die typischen Dachformen der Siedlungen der Nachkriegsjahre und die Anforderungen der Netzbetreiber vor Ort. Kurze Wege bedeuten, dass ein Ortstermin keine Tagesreise ist.',
};

export const kontakt = {
  label: 'Kontakt',
  h2: 'Vielleicht beginnt Ihr Projekt genau hier.',
  text: 'Sie wissen noch nicht, ob Ihr Dach repariert, saniert oder neu gedacht werden sollte? Erzählen Sie uns einfach, worum es geht. Alles Weitere klären wir am Telefon oder vor Ort.',
  quiet: 'Ab hier keine Choreografie mehr. Am Conversion-Punkt wäre jede Bewegung ein Risiko.',
};
