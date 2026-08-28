import type { Layer, ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  { index: '01', title: 'Wir schauen hin.', slot: 'pro-02',
    lines: ['Ortstermin und Bestandsaufnahme, auch der Bereiche, die man von der Straße nicht sieht.', 'Sie erfahren am selben Tag, was wir gesehen haben.'] },
  { index: '02', title: 'Wir denken voraus.', slot: 'mat-03',
    lines: ['Dach, Energie und Ihre Anforderungen betrachten wir gemeinsam, nicht nacheinander.', 'Dazu gehört die Frage, was jetzt sinnvoll ist und was warten kann.'] },
  { index: '03', title: 'Wir planen sauber.', slot: 'pro-03',
    lines: ['Sie erhalten eine nachvollziehbare Planung und ein Angebot, das Positionen benennt.', 'Gerüst, Entsorgung und Nebenarbeiten stehen darin, nicht im Kleingedruckten.'] },
  { index: '04', title: 'Wir setzen um.', slot: 'pro-04',
    lines: ['Ein Ansprechpartner koordiniert Gewerke, Termine und Material.', 'Die Baustelle wird täglich aufgeräumt, das gehört zur Arbeit.'] },
  { index: '05', title: 'Wir bleiben erreichbar.', slot: 'pro-01',
    lines: ['Nach der Übergabe erreichen Sie dieselbe Person wie am ersten Tag.', 'Sie erhalten eine Dokumentation des Aufbaus für Ihre Unterlagen.'] },
];

export const layers: Layer[] = [
  { index: '01', name: 'Sparren', note: 'Das Tragwerk. Es trägt Deckung, Schnee und später die Anlage.', domain: 'dach' },
  { index: '02', name: 'Dämmung', note: 'Zwischen den Sparren, oberhalb oder unterhalb. Die Lage entscheidet über die Aufbauhöhe.', domain: 'dach' },
  { index: '03', name: 'Unterdeckung', note: 'Die zweite wasserführende Ebene unter den Ziegeln. Sie leitet ab, was durch die Deckung kommt.', domain: 'dach' },
  { index: '04', name: 'Lattung', note: 'Konterlattung für die Belüftung, Traglattung für die Ziegel.', domain: 'dach' },
  { index: '05', name: 'Dachziegel', note: 'Die Dachhaut. Sichtbar, austauschbar, und nur so gut wie ihre Anschlüsse.', domain: 'dach' },
  { index: '06', name: 'Unterkonstruktion', note: 'Dachhaken und Schiene. Die Haken greifen unter den Ziegel und sitzen auf dem Sparren.', domain: 'energie' },
  { index: '07', name: 'PV-Module', note: 'Die Energiefläche. Sie sitzt auf der Deckung, nicht an ihrer Stelle.', domain: 'energie' },
];
