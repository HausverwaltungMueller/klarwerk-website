import type { InquiryValues } from './machine';
import type { StepId } from './steps';

export type Errors = Partial<Record<keyof InquiryValues, string>>;

/** Fehlermeldungen sind Sätze mit Lösung, kein "Ungültige Eingabe". */
export function validateStep(step: StepId, v: InquiryValues): Errors {
  const e: Errors = {};

  if (step === 1 && v.anliegen.length === 0) {
    e.anliegen = 'Bitte wählen Sie mindestens einen Punkt aus. Wenn Sie unsicher sind, nehmen Sie den Potenzialcheck.';
  }

  if (step === 2 && v.plz.trim() !== '' && !/^\d{5}$/.test(v.plz.trim())) {
    e.plz = 'Bitte eine fünfstellige Postleitzahl eintragen.';
  }

  if (step === 3) {
    if (v.name.trim().length < 2) e.name = 'Bitte tragen Sie Ihren Namen ein, damit wir Sie ansprechen können.';
    const hatTelefon = v.telefon.replace(/[^0-9]/g, '').length >= 6;
    const hatMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim());
    if (!hatTelefon && !hatMail) {
      e.telefon = 'Bitte eine Telefonnummer oder eine E-Mail-Adresse angeben. Eines von beidem genügt.';
    }
    if (v.email.trim() !== '' && !hatMail) {
      e.email = 'Diese E-Mail-Adresse ist unvollständig. Bitte prüfen Sie die Schreibweise.';
    }
  }

  if (step === 4 && !v.einwilligung) {
    e.einwilligung = 'Bitte bestätigen Sie den Hinweis zum Datenschutz, damit wir antworten dürfen.';
  }

  return e;
}

/** Postleitzahlen im Kerngebiet. Kein Ausschluss, nur ein Hinweis. */
export function outsideArea(plz: string): boolean {
  const n = Number(plz);
  if (!/^\d{5}$/.test(plz)) return false;
  return !(n >= 30000 && n <= 38999);
}

/**
 * Beim Verlassen eines Feldes wird ausschliesslich dieses Feld geprueft.
 * Eine Schrittpruefung an dieser Stelle wuerde ueber Felder meckern, die der
 * Nutzer noch nicht ausgefuellt hat. Im Browsertest aufgefallen.
 */
export function validateField(field: keyof InquiryValues, v: InquiryValues): string | undefined {
  if (field === 'plz') {
    return v.plz.trim() !== '' && !/^\d{5}$/.test(v.plz.trim())
      ? 'Bitte eine fünfstellige Postleitzahl eintragen.'
      : undefined;
  }
  if (field === 'name') {
    return v.name.trim() !== '' && v.name.trim().length < 2
      ? 'Bitte tragen Sie Ihren Namen ein, damit wir Sie ansprechen können.'
      : undefined;
  }
  if (field === 'email') {
    return v.email.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())
      ? 'Diese E-Mail-Adresse ist unvollständig. Bitte prüfen Sie die Schreibweise.'
      : undefined;
  }
  return undefined;
}
