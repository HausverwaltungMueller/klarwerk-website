import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/design/Icon';
import { IS_DEMO } from '@/config';
import type { InquiryValues } from './machine';

/**
 * Schritt 4 der Projektanfrage: Beschreibung, Uploadhinweis, Einwilligung.
 * Eigene Datei, damit `ProjectInquiry` unter der Zeilengrenze aus docs/06, Abschnitt 21 bleibt.
 */
export function InquiryDetails({
  values,
  set,
  fehlerEinwilligung,
  meldung,
}: {
  values: InquiryValues;
  set: <K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) => void;
  fehlerEinwilligung: boolean;
  meldung: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="beschreibung" className="t-label">Projektbeschreibung</label>
        <textarea id="beschreibung" name="beschreibung" rows={5} value={values.beschreibung}
          onChange={(e) => set('beschreibung', e.target.value)}
          placeholder="Worum geht es? Ein paar Sätze genügen."
          className="rounded-t bg-surface-2 p-4 outline-none border-b border-b-hair-1 focus:border-b-2 focus:border-b-energie" />
      </div>

      <div className="flex flex-col gap-2 opacity-45">
        <span className="t-label">Foto oder Dokument</span>
        <div className="flex items-center gap-3 border border-dashed border-hair-1 p-4">
          <Icon name="upload" size={20} />
          <span className="text-s">Im Musterprojekt deaktiviert.</span>
        </div>
        <p className="text-s text-text-2">
          Ein echter Upload ohne Verarbeitungsgrundlage und ohne Speicherort wäre datenschutzrechtlich nicht sauber.
        </p>
      </div>

      <div className="relative flex flex-col gap-2 pb-[42px]">
        <label className="flex items-start gap-3 text-s">
          <input type="checkbox" checked={values.einwilligung}
            onChange={(e) => set('einwilligung', e.target.checked)}
            aria-describedby={fehlerEinwilligung ? 'err-einwilligung' : undefined}
            className="mt-1 h-[18px] w-[18px] accent-[var(--energie)]" />
          <span className="text-text-1">
            Ich habe die <Link to="/datenschutz/" className="underline">Datenschutzhinweise</Link> gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.
          </span>
        </label>
        {meldung}
      </div>

      {IS_DEMO ? (
        <p className="t-spec max-w-[70ch] leading-relaxed">
          Musterformular. Es wird nichts übermittelt und nichts gespeichert.
        </p>
      ) : null}
    </div>
  );
}
