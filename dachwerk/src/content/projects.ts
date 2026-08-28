import type { Project } from '@/types';

/** isExample ist im Typ als true festgelegt. Ein Projekt ohne Kennzeichnung
 *  ist im Modell nicht darstellbar. */
export const projects: Project[] = [
  {
    id: '01', kind: 'beides',
    measure: 'Dachsanierung und Photovoltaik',
    place: 'Hildesheim',
    isExample: true,
    before: 'obj-01', after: 'obj-03',
    notes: [
      'Ausgangslage: Deckung am Ende des Lebenszyklus, Moos in den Kehlen, ein verschobener Ziegel.',
      'Ausgeführt: Neue Deckung, erneuerte Unterdeckung, Dämmung, danach Belegung mit einem geschlossenen Modulfeld.',
      'Reihenfolge: ein Gerüst, eine Baustelle, ein Ansprechpartner.',
    ],
  },
  {
    id: '02', kind: 'energie',
    measure: 'Photovoltaik mit Speicher auf geprüftem Bestandsdach',
    place: 'Landkreis Hildesheim',
    isExample: true,
    before: 'obj-02', after: 'mat-05',
    notes: [
      'Ausgangslage: Deckung in gutem Zustand, Prüfung ergab keine Sanierungsnotwendigkeit.',
      'Ausgeführt: Belegung des Bestandsdachs, Speicher und Zählerschrank im Hausanschlussraum.',
      'Ergebnis: keine unnötige Sanierung, weil die Prüfung vorher stattgefunden hat.',
    ],
  },
];
