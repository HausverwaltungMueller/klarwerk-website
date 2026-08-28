import type { InquiryValues } from './machine';

export type InquiryPayload = InquiryValues & { pfad: string };

export interface InquirySubmitter {
  submit(payload: InquiryPayload): Promise<{ ok: boolean; message: string }>;
}

/**
 * Musterprojekt: Es wird nichts übermittelt und nichts gespeichert. Kein Scheinversand.
 * Ein echter Endpunkt ersetzt genau diese Implementierung, die Ansicht bleibt unverändert.
 */
export const demoSubmitter: InquirySubmitter = {
  async submit() {
    await new Promise((r) => setTimeout(r, 400));
    return {
      ok: true,
      message:
        'Dies ist ein Musterformular. Ihre Eingaben wurden nicht übermittelt und nicht gespeichert. In einem echten Projekt ginge die Anfrage jetzt an den Betrieb.',
    };
  },
};
