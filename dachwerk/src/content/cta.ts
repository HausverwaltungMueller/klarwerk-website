import type { CtaPreset } from '@/types';

/**
 * Alle Handlungsangebote an einer Stelle. Kein Button-Text wird im JSX geschrieben,
 * damit die CTA-Matrix aus docs/05-KOHAERENZPRUEFUNG.md, Teil C, durchsetzbar bleibt.
 */
export const cta = {
  projekt: 'Projekt besprechen',
  leistungen: 'Unsere Leistungen',
  potenzialcheck: 'Potenzialcheck anfragen',
  planen: 'Dach und PV planen',
  projekte: 'Projekte ansehen',
  beratung: 'Beratung anfragen',
  senden: 'Projektanfrage senden',
  anrufen: 'Anrufen',
  weiter: 'Weiter',
} as const;

/** Begleittext zum Potenzialcheck. Der Button traegt die Handlung, dieser Satz die Kondition. */
export const potenzialcheckNote =
  'Der Dach- und PV-Potenzialcheck ist kostenfrei und unverbindlich. Wir prüfen Dachzustand, Ausrichtung, Verschattung und die grundsätzliche Eignung für eine Photovoltaikanlage.';

export const presetLabels: Record<CtaPreset, string> = {
  reparatur: 'Dachreparatur',
  sanierung: 'Dachsanierung',
  photovoltaik: 'Photovoltaik',
  'dach-und-pv': 'Dach und Photovoltaik',
  speicher: 'Stromspeicher',
  potenzialcheck: 'Potenzialcheck',
  beratung: 'Beratung',
  sonstiges: 'Sonstiges',
};
