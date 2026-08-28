import { LEGAL_AS_OF } from '@/config';
import { legalSources } from './company';
import type { LegalNoteData } from '@/types/legal';

export const legalNote: LegalNoteData = {
  asOf: LEGAL_AS_OF,
  text: `Stand der Informationen: ${LEGAL_AS_OF}. Keine Steuer- oder Rechtsberatung. Die Voraussetzungen können im Einzelfall abweichen. Für die steuerliche Beurteilung Ihres Vorhabens ziehen Sie bitte einen Steuerberater hinzu.`,
  sources: legalSources,
};

export const demoNote =
  'Musterprojekt. DACHWERK ist ein fiktiver Betrieb. Angaben zu Leistungen, Konditionen und Projekten dienen der Darstellung und sind keine realen Referenzen.';

export const pvBenefits = [
  { title: '0 Prozent Umsatzsteuer', note: 'Unter bestimmten gesetzlichen Voraussetzungen.' },
  { title: 'Weniger Bürokratie', note: 'Anmeldung und Abstimmung mit dem Netzbetreiber begleiten wir.' },
  { title: 'Planung aus einer Hand', note: 'Dach und Energie werden gemeinsam betrachtet.' },
];
