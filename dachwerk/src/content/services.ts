import type { Service } from '@/types';

/** Jeder Satz erklaert eine Entscheidung, keine Selbstbeschreibung.
 *  Fachwoerter werden im selben Satz aufgeloest, siehe docs/05, W04. */
export const services: Service[] = [
  {
    slug: 'dachsanierung', domain: 'dach', order: 1, page: '/dach/dachsanierung/',
    name: 'Dachsanierung', claim: 'Einmal öffnen, alles richtig machen.',
    explain: 'Wir erneuern Deckung, Unterdeckung und Dämmung in einem Zug und legen die Fläche so aus, dass eine Photovoltaikanlage später ohne zweiten Eingriff möglich bleibt.',
    detail: [
      'Eine Sanierung beginnt nicht mit dem Ziegel, sondern mit dem, was darunter liegt. Wir öffnen an einer Stelle, prüfen Sparren, Dämmung und Unterdeckung, also die zweite wasserführende Ebene unter den Ziegeln, und entscheiden erst danach über den Umfang.',
      'Wenn die Fläche ohnehin offen ist, ist der richtige Zeitpunkt für alles, was später schwer nachzuholen ist: Dämmung, Anschlüsse, Durchdringungen und die Vorbereitung für eine Photovoltaikanlage.',
      'Sie erhalten eine Planung, die Positionen benennt, und einen Ansprechpartner, der die Gewerke koordiniert. Gerüst, Entsorgung und Termine gehören dazu und tauchen nicht später als Überraschung auf.',
    ],
    slots: ['obj-02', 'mat-04', 'pro-02'],
    faq: [
      { question: 'Muss immer das ganze Dach saniert werden?', answer: 'Nein. Wenn Deckung und Unterdeckung tragen, reicht oft eine Teilmaßnahme. Wir sagen offen, wenn eine Reparatur nur Zeit kauft.' },
      { question: 'Lässt sich Photovoltaik später nachrüsten?', answer: 'Ja, wenn die Fläche dafür vorbereitet ist. Deshalb planen wir Befestigungspunkte und Leitungswege schon bei der Sanierung mit.' },
    ],
    relatedServices: ['neueindeckung', 'daemmung'], relatedGuides: ['dach-vor-pv-pruefen'],
  },
  {
    slug: 'neueindeckung', domain: 'dach', order: 2,
    name: 'Neueindeckung', claim: 'Material nach Dach, nicht nach Katalog.',
    explain: 'Ziegel, Schiefer oder Blech. Die Wahl richtet sich nach Dachneigung, Bauweise und Umgebung, nicht nach Katalog.',
    detail: [
      'Die Dachneigung entscheidet mit, welche Deckung zulässig ist. Ein flach geneigtes Dach verlangt andere Lösungen als ein steiles, und ein Ortsbild mit Schiefer verlangt Zurückhaltung bei der Farbwahl.',
    ],
    slots: ['mat-01', 'mat-03'], relatedServices: ['dachsanierung', 'flachdach'], relatedGuides: [],
  },
  {
    slug: 'dachreparatur', domain: 'dach', order: 3, page: '/dach/dachreparatur/',
    name: 'Dachreparatur', claim: 'Erst sichern, dann die Ursache.',
    explain: 'Erst sichern, dann die Ursache prüfen, dann offen sagen, ob die Reparatur trägt oder nur Zeit kauft.',
    detail: [
      'Ein Wasserfleck an der Decke sitzt selten unter der undichten Stelle. Wasser läuft auf der Unterdeckung ab und tritt dort aus, wo es einen Weg findet. Deshalb suchen wir die Ursache und nicht die Spur.',
      'Wenn eine Reparatur sinnvoll ist, reparieren wir. Wenn sie nur ein Jahr kauft, sagen wir das und rechnen beides gegeneinander. Sie entscheiden mit Zahlen, nicht mit Bauchgefühl.',
      'Nach einem Sturm sichern wir zuerst und dokumentieren den Schaden so, dass Ihre Versicherung damit arbeiten kann.',
    ],
    slots: ['mat-03', 'pro-02'],
    faq: [
      { question: 'Wie schnell können Sie kommen?', answer: 'Das hängt von der Auftragslage ab. Eine belastbare Zusage geben wir am Telefon, nicht auf einer Website.' },
    ],
    relatedServices: ['dachsanierung', 'flachdach'], relatedGuides: [],
  },
  {
    slug: 'daemmung', domain: 'dach', order: 4,
    name: 'Dämmung', claim: 'Der Aufbau entscheidet, nicht der Prospekt.',
    explain: 'Ob eine Aufsparrendämmung sinnvoll ist, also eine Dämmung oberhalb der Sparren, entscheidet der Dachaufbau und nicht der Prospekt.',
    detail: [
      'Zwischen den Sparren, oberhalb oder unterhalb: jede Lage hat Folgen für Raumhöhe, Aufbauhöhe und Anschlüsse an Fenster und Ortgang.',
    ],
    slots: ['mat-04'], relatedServices: ['dachsanierung'], relatedGuides: [],
  },
  {
    slug: 'dachfenster', domain: 'dach', order: 5,
    name: 'Dachfenster', claim: 'Licht planen, Dichtheit sichern.',
    explain: 'Position, Größe und Anschluss entscheiden über Licht und über Dichtheit. Beides planen wir gemeinsam.',
    detail: ['Ein Fenster ist eine Durchdringung der Dachhaut. Der Anschluss ist die Arbeit, nicht das Fenster.'],
    slots: ['obj-02'], relatedServices: ['dachsanierung'], relatedGuides: [],
  },
  {
    slug: 'flachdach', domain: 'dach', order: 6,
    name: 'Flachdach', claim: 'Abdichtung, Gefälle, Anschlüsse.',
    explain: 'Abdichtung, Gefälle und Anschlüsse sind der eigentliche Aufwand. Daran messen wir die Ausführung.',
    detail: ['Stehendes Wasser ist kein Schönheitsfehler, sondern der Anfang eines Schadens. Deshalb beginnt ein Flachdach beim Gefälle.'],
    slots: ['mat-03'], relatedServices: ['dachreparatur'], relatedGuides: [],
  },
  {
    slug: 'pv-anlage', domain: 'energie', order: 1, page: '/photovoltaik/pv-anlage/',
    name: 'Photovoltaik', claim: 'Erst das Dach, dann die Anlage.',
    explain: 'Wir prüfen zuerst das Dach, dann planen wir die Anlage. In dieser Reihenfolge, nicht umgekehrt.',
    detail: [
      'Eine Anlage hält Jahrzehnte auf einer Fläche, die selbst Jahrzehnte halten muss. Deshalb steht am Anfang die Prüfung von Statik, Deckung und Unterdeckung und nicht die Modulauswahl.',
      'Wir legen die Anlage nach Ihrem Verbrauch aus, nicht nach der freien Fläche. Wer eine Wärmepumpe oder ein Auto laden will, braucht eine andere Auslegung als ein Zweipersonenhaushalt.',
      'Montage, Elektrik und Anmeldung beim Netzbetreiber sowie im Marktstammdatenregister der Bundesnetzagentur laufen über einen Betrieb und einen Ansprechpartner.',
    ],
    slots: ['mat-02', 'pro-04', 'obj-03'],
    faq: [
      { question: 'Ist mein Dach geeignet?', answer: 'Das klären Ausrichtung, Neigung, Verschattung und der Zustand der Deckung. Genau dafür gibt es den kostenfreien Dach- und PV-Potenzialcheck.' },
      { question: 'Was gilt umsatzsteuerlich?', answer: 'Für bestimmte Photovoltaikanlagen gilt unter den gesetzlichen Voraussetzungen ein Umsatzsteuersatz von 0 Prozent. Ob die Regelung auf Ihr Vorhaben zutrifft, klären wir im Rahmen der Beratung.' },
    ],
    relatedServices: ['stromspeicher', 'pv-planung'], relatedGuides: ['pv-kosten', 'dach-vor-pv-pruefen'],
    legalNote: true,
  },
  {
    slug: 'stromspeicher', domain: 'energie', order: 2, page: '/photovoltaik/stromspeicher/',
    name: 'Stromspeicher', claim: 'Rechnen, dann anbieten.',
    explain: 'Ein Speicher lohnt sich nicht immer. Wir rechnen es an Ihrem Verbrauch durch, bevor wir ihn anbieten.',
    detail: [
      'Ein Speicher verschiebt Strom von Mittag in den Abend. Wie viel er bringt, hängt an Ihrem Tagesverlauf, nicht an der Kapazität in Kilowattstunden.',
      'Wir sehen uns an, wann Sie Strom brauchen, welche Verbraucher planbar sind und was sich mit einer Steuerung ohne Speicher erreichen lässt.',
      'Erst wenn die Rechnung aufgeht, empfehlen wir einen Speicher. Wenn nicht, sagen wir das auch.',
    ],
    slots: ['mat-05'],
    faq: [
      { question: 'Ist der Speicher steuerlich wie die Anlage zu behandeln?', answer: 'Batterien und Speicher unterliegen dem Nullsteuersatz, wenn sie im konkreten Fall dazu bestimmt sind, Strom aus begünstigten Solarmodulen zu speichern. Die Beurteilung im Einzelfall gehört zum Steuerberater.' },
    ],
    relatedServices: ['pv-anlage', 'energiemanagement'], relatedGuides: ['speicher-sinnvoll'],
    legalNote: true,
  },
  {
    slug: 'energiemanagement', domain: 'energie', order: 3,
    name: 'Energiemanagement', claim: 'Verbrauch kennen, Anlage richtig auslegen.',
    explain: 'Wärmepumpe, Auto, Haushalt. Wer den Verbrauch kennt, legt die Anlage richtig aus.',
    detail: ['Steuerung ist oft günstiger als Kapazität. Wer den Verbrauch verschiebt, braucht weniger Speicher.'],
    slots: ['mat-05'], relatedServices: ['stromspeicher'], relatedGuides: [],
  },
  {
    slug: 'pv-planung', domain: 'energie', order: 4,
    name: 'PV-Planung', claim: 'Die Planung entscheidet, nicht die Marke.',
    explain: 'Ausrichtung, Verschattung, Belegung, Netzanschluss. Die Planung entscheidet über den Ertrag, nicht die Modulmarke.',
    detail: ['Ein Baum, ein Kamin oder eine Gaube kostet mehr Ertrag als der Unterschied zwischen zwei Modultypen.'],
    slots: ['pro-03'], relatedServices: ['pv-anlage'], relatedGuides: ['pv-kosten'],
  },
  {
    slug: 'installation', domain: 'energie', order: 5,
    name: 'Installation', claim: 'Ein Betrieb, ein Ansprechpartner.',
    explain: 'Montage, Elektrik und Anmeldung laufen über einen Betrieb und einen Ansprechpartner.',
    detail: ['Keine Subunternehmerkette, in der niemand für den Anschluss an die Deckung verantwortlich ist.'],
    slots: ['pro-04'], relatedServices: ['pv-anlage'], relatedGuides: [],
  },
  {
    slug: 'pv-wartung', domain: 'energie', order: 6,
    name: 'Wartung', claim: 'Zustand dokumentieren, melden wenn nötig.',
    explain: 'Dach und Anlage nach Absprache prüfen, Zustand dokumentieren und melden, wenn etwas zu tun ist.',
    detail: ['Eine Anlage arbeitet unauffällig. Genau deshalb fällt ein Ertragsverlust erst spät auf.'],
    slots: ['mat-02'], relatedServices: ['pv-anlage'], relatedGuides: [],
  },
];

export const byDomain = (d: 'dach' | 'energie'): Service[] =>
  services.filter((s) => s.domain === d).sort((a, b) => a.order - b.order);

export const findService = (slug: string): Service | undefined => services.find((s) => s.slug === slug);
