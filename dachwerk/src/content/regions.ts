import type { Region } from '@/types';

/** Eine Ortsseite entsteht nur mit mindestens drei ortsspezifischen Aussagen.
 *  Der Content-Linter setzt das durch, siehe docs/06, Abschnitt 20. */
export const regions: Region[] = [
  {
    slug: 'hildesheim', name: 'Hildesheim', distanceKm: 0,
    buildingFacts: [
      'In den Stadtteilen der Nachkriegsjahre stehen viele Ein- und Zweifamilienhäuser mit Satteldächern zwischen 35 und 45 Grad Neigung, häufig mit Tondachziegeln der Baujahre bis 1980.',
      'In den innenstadtnahen Lagen prägen steilere Dächer und Schiefer das Ortsbild, dort ist die Materialwahl auch eine Frage der Umgebung.',
      'Auf Flachdachanbauten der siebziger Jahre finden wir regelmäßig Abdichtungen am Ende ihrer Nutzungsdauer, oft mit zu geringem Gefälle.',
    ],
    services: ['dachsanierung', 'pv-anlage', 'dachreparatur'],
    text: [
      'Hildesheim ist unser Standort und unser Hauptarbeitsgebiet. Kurze Wege heißen, dass ein Ortstermin keine Tagesreise ist und dass wir bei einem Schaden schneller sichern können.',
      'Für Photovoltaik ist die Stadt unauffällig gut geeignet: Die Bestandsdächer der Nachkriegsjahre haben meist ausreichend Fläche und eine Neigung, die für eine Belegung passt. Entscheidend ist der Zustand der Deckung, nicht die Himmelsrichtung allein.',
    ],
  },
];

export const otherPlaces = [
  'Sarstedt', 'Alfeld', 'Bad Salzdetfurth', 'Bockenem', 'Elze', 'Gronau', 'Holle', 'Diekholzen', 'Nordstemmen', 'Söhlde',
];
