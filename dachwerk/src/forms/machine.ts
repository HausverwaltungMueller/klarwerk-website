import type { CtaPreset } from '@/types';
import type { StepId } from './steps';

export type InquiryValues = {
  anliegen: CtaPreset[];
  plz: string;
  name: string;
  telefon: string;
  email: string;
  beschreibung: string;
  einwilligung: boolean;
};

export const emptyValues: InquiryValues = {
  anliegen: [], plz: '', name: '', telefon: '', email: '', beschreibung: '', einwilligung: false,
};

const KEY = 'dachwerk.anfrage';

/** Zustand übersteht einen versehentlichen Reload. */
export function loadValues(): InquiryValues {
  if (typeof sessionStorage === 'undefined') return emptyValues;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return emptyValues;
    return { ...emptyValues, ...(JSON.parse(raw) as Partial<InquiryValues>) };
  } catch {
    return emptyValues;
  }
}

export function saveValues(v: InquiryValues): void {
  if (typeof sessionStorage === 'undefined') return;
  try {
    sessionStorage.setItem(KEY, JSON.stringify(v));
  } catch {
    // Speichern ist eine Bequemlichkeit, kein Muss
  }
}

export function clearValues(): void {
  if (typeof sessionStorage === 'undefined') return;
  try { sessionStorage.removeItem(KEY); } catch { /* nichts */ }
}

export const nextStep = (s: StepId): StepId => (s < 4 ? ((s + 1) as StepId) : s);
export const prevStep = (s: StepId): StepId => (s > 1 ? ((s - 1) as StepId) : s);
