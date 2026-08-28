import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/design/Button';
import { Icon } from '@/design/Icon';
import { presets, presetLabel, stepHints, stepTitles, type StepId } from './steps';
import { emptyValues, loadValues, nextStep, prevStep, saveValues, type InquiryValues } from './machine';
import { outsideArea, validateField, validateStep, type Errors } from './validate';
import { demoSubmitter } from './submit';
import type { CtaPreset } from '@/types';
import { cta } from '@/content/cta';
import { track } from '@/lib/track';
import { IS_DEMO } from '@/config';

/**
 * Vier Schritte, ein Feldbereich je Schritt. Label immer sichtbar, kein Floating Label.
 * Validierung beim Verlassen des Feldes, Fehler als Satz. Optionale Felder sind
 * gekennzeichnet, Pflichtfelder tragen kein Sternchen. docs/06, Abschnitt 18.
 */
export function ProjectInquiry() {
  const [params] = useSearchParams();
  const [step, setStep] = useState<StepId>(1);
  const [values, setValues] = useState<InquiryValues>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  // Vorbelegung aus dem CTA, danach gespeicherter Zustand
  useEffect(() => {
    const stored = loadValues();
    const preset = params.get('anliegen') as CtaPreset | null;
    const merged: InquiryValues = { ...stored };
    if (preset && presets.includes(preset) && !merged.anliegen.includes(preset)) {
      merged.anliegen = [...merged.anliegen, preset];
    }
    setValues(merged);
  }, [params]);

  useEffect(() => { saveValues(values); }, [values]);

  const set = <K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) => {
    if (!started.current) { started.current = true; track('form_start'); }
    setValues((v) => ({ ...v, [key]: value }));
  };

  const toggle = (p: CtaPreset) => {
    const has = values.anliegen.includes(p);
    set('anliegen', has ? values.anliegen.filter((x) => x !== p) : [...values.anliegen, p]);
  };

  const go = (dir: 'next' | 'back') => {
    if (dir === 'next') {
      const e = validateStep(step, values);
      setErrors(e);
      if (Object.keys(e).length > 0) { track('form_error', { schritt: step }); return; }
      const n = nextStep(step);
      setStep(n);
      track('form_step', { schritt: n });
    } else {
      setStep(prevStep(step));
    }
    window.setTimeout(() => headingRef.current?.focus(), 30);
  };

  const submit = async () => {
    const e = validateStep(4, values);
    setErrors(e);
    if (Object.keys(e).length > 0) { track('form_error', { schritt: 4 }); return; }
    setBusy(true);
    const res = await demoSubmitter.submit({ ...values, pfad: window.location.pathname });
    setBusy(false);
    if (res.ok) {
      track('form_submit');
      setDone(res.message);
    }
  };

  if (done) {
    return (
      <div className="border border-hair bg-surface-1 p-6" role="status" aria-live="polite">
        <p className="t-label mb-3">Hinweis</p>
        <h3 className="t-display-s mb-4">Vielen Dank.</h3>
        <p className="max-w-measure text-text-1">{done}</p>
        <div className="mt-6"><Link to="/" className="t-spec underline">Zurück zur Startseite</Link></div>
      </div>
    );
  }

  /**
   * Der Platz fuer die Meldung ist immer reserviert. Sonst verschiebt eine
   * verschwindende Fehlermeldung beim Verlassen des Feldes den Weiter-Button
   * und ein Klick landet daneben. Im Browsertest aufgefallen.
   */
  /**
   * Meldungen liegen ausserhalb des Textflusses. Sonst verschiebt eine
   * erscheinende oder verschwindende Meldung den Weiter-Button und ein Klick
   * landet daneben. Im Browsertest aufgefallen.
   */
  const err = (k: keyof InquiryValues) => (
    <p
      className="absolute inset-x-0 bottom-0 text-s leading-tight text-state-error"
      id={errors[k] ? `err-${k}` : undefined}
      aria-live="polite"
    >
      {errors[k] ?? ''}
    </p>
  );

  /** Beim Verlassen eines Feldes nur dieses Feld pruefen. */
  const blur = (k: keyof InquiryValues) => () =>
    setErrors((prev) => ({ ...prev, [k]: validateField(k, values) }));

  return (
    <form
      className="border border-hair bg-surface-1 p-5 md:p-6"
      onSubmit={(e) => { e.preventDefault(); if (step === 4) void submit(); else go('next'); }}
      noValidate
    >
      <div className="mb-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="t-label">Schritt {step} von 4</p>
          <p className="t-spec">{stepHints[step]}</p>
        </div>
        <div className="mt-3 h-px bg-hair" aria-hidden="true">
          <div className="h-px bg-energie transition-[width] duration-2 ease-out" style={{ width: `${(step / 4) * 100}%` }} />
        </div>
      </div>

      <h3 ref={headingRef} tabIndex={-1} className="t-display-s mb-5 outline-none">{stepTitles[step]}</h3>
      <p className="sr-only" aria-live="polite">{`Schritt ${step} von 4: ${stepTitles[step]}`}</p>

      <div className="min-h-[248px]">
      {step === 1 ? (
        <div className="grid gap-px bg-hair sm:grid-cols-2">
          {presets.map((p) => {
            const on = values.anliegen.includes(p);
            return (
              <button
                key={p} type="button" onClick={() => toggle(p)} aria-pressed={on}
                className={`flex min-h-[64px] items-center justify-between gap-3 border-l-2 bg-surface-1 px-4 text-left transition-colors duration-1 ease-out hover:bg-surface-2 ${
                  on ? 'border-l-energie bg-surface-2' : 'border-l-transparent'
                }`}
              >
                <span className="text-base">{presetLabel(p)}</span>
                {on ? <Icon name="check" size={18} className="text-energie" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="relative flex max-w-[320px] flex-col gap-2 pb-[42px]">
          <label htmlFor="plz" className="t-label">Postleitzahl</label>
          <input
            id="plz" name="plz" inputMode="numeric" autoComplete="postal-code" value={values.plz}
            onChange={(e) => set('plz', e.target.value)}
            onBlur={blur('plz')}
            aria-describedby={errors.plz ? 'err-plz' : undefined}
            className={`h-[56px] rounded-t bg-surface-2 px-4 outline-none border-b ${
              errors.plz ? 'border-b-state-error' : 'border-b-hair-1 focus:border-b-2 focus:border-b-energie'
            }`}
          />
          {err('plz')}
          {outsideArea(values.plz) ? (
            <p className="text-s text-text-2" role="status">
              Diese Postleitzahl liegt außerhalb unseres üblichen Gebiets. Schreiben Sie uns trotzdem, wir sagen Ihnen offen, ob wir das übernehmen können.
            </p>
          ) : null}
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="relative flex flex-col gap-2 pb-[42px]">
            <label htmlFor="name" className="t-label">Name</label>
            <input id="name" name="name" autoComplete="name" value={values.name}
              onChange={(e) => set('name', e.target.value)}
              onBlur={blur('name')}
              aria-describedby={errors.name ? 'err-name' : undefined}
              className={`h-[56px] rounded-t bg-surface-2 px-4 outline-none border-b ${
                errors.name ? 'border-b-state-error' : 'border-b-hair-1 focus:border-b-2 focus:border-b-energie'
              }`} />
            {err('name')}
          </div>
          <div className="relative flex flex-col gap-2 pb-[42px]">
            <label htmlFor="telefon" className="t-label">
              Telefon <span className="font-normal normal-case tracking-normal">optional</span>
            </label>
            <input id="telefon" name="telefon" type="tel" autoComplete="tel" value={values.telefon}
              onChange={(e) => set('telefon', e.target.value)}
              aria-describedby={errors.telefon ? 'err-telefon' : undefined}
              className={`h-[56px] rounded-t bg-surface-2 px-4 outline-none border-b ${
                errors.telefon ? 'border-b-state-error' : 'border-b-hair-1 focus:border-b-2 focus:border-b-energie'
              }`} />
            {err('telefon')}
          </div>
          <div className="relative flex flex-col gap-2 pb-[42px] sm:col-span-2">
            <label htmlFor="email" className="t-label">
              E-Mail <span className="font-normal normal-case tracking-normal">optional, wenn Sie eine Telefonnummer angeben</span>
            </label>
            <input id="email" name="email" type="email" autoComplete="email" value={values.email}
              onChange={(e) => set('email', e.target.value)}
              onBlur={blur('email')}
              aria-describedby={errors.email ? 'err-email' : undefined}
              className={`h-[56px] rounded-t bg-surface-2 px-4 outline-none border-b ${
                errors.email ? 'border-b-state-error' : 'border-b-hair-1 focus:border-b-2 focus:border-b-energie'
              }`} />
            {err('email')}
          </div>
        </div>
      ) : null}

      {step === 4 ? (
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
                aria-describedby={errors.einwilligung ? 'err-einwilligung' : undefined}
                className="mt-1 h-[18px] w-[18px] accent-[var(--energie)]" />
              <span className="text-text-1">
                Ich habe die <Link to="/datenschutz/" className="underline">Datenschutzhinweise</Link> gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.
              </span>
            </label>
            {err('einwilligung')}
          </div>

          {IS_DEMO ? (
            <p className="t-spec max-w-[70ch] leading-relaxed">
              Musterformular. Es wird nichts übermittelt und nichts gespeichert.
            </p>
          ) : null}
        </div>
      ) : null}

      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {step > 1 ? <Button variant="secondary" onClick={() => go('back')}>Zurück</Button> : null}
        {step < 4 ? (
          <Button type="submit" arrow>Weiter</Button>
        ) : (
          <Button type="submit" arrow disabled={busy}>{busy ? 'Wird gesendet' : cta.senden}</Button>
        )}
      </div>
    </form>
  );
}
