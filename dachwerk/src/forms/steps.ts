import type { CtaPreset } from '@/types';
import { presetLabels } from '@/content/cta';

export type StepId = 1 | 2 | 3 | 4;

export const stepTitles: Record<StepId, string> = {
  1: 'Was können wir für Sie tun?',
  2: 'Wo befindet sich das Gebäude?',
  3: 'Wie erreichen wir Sie?',
  4: 'Worum geht es?',
};

export const stepHints: Record<StepId, string> = {
  1: 'Mehrfachauswahl möglich.',
  2: 'Die Postleitzahl genügt. Außerhalb des Gebiets sagen wir es Ihnen offen.',
  3: 'Telefon oder E-Mail genügt, nicht beides.',
  4: 'Ein paar Sätze reichen. Details klären wir im Gespräch.',
};

export const presets: CtaPreset[] = [
  'reparatur', 'sanierung', 'photovoltaik', 'dach-und-pv', 'speicher', 'potenzialcheck', 'beratung', 'sonstiges',
];

export const presetLabel = (p: CtaPreset): string => presetLabels[p];
