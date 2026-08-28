import { Button } from '@/design/Button';
import { cta, potenzialcheckNote } from '@/content/cta';
import { Section } from '@/design/Section';

/** Leiser Abschluss jeder Unterseite. Gleicher Aufbau, wechselnder erster Satz. */
export function CtaBlock({ first, preset = 'potenzialcheck' }: { first: string; preset?: string }) {
  return (
    <Section id="abschluss" label="Nächster Schritt" rhythm="cesura">
      <div className="light-edge mb-6" aria-hidden="true" />
      <div className="grid gap-6 md:grid-cols-[5fr_7fr] md:gap-7">
        <h2 className="t-display-m" data-reveal>{first}</h2>
        <div data-reveal>
          <p className="max-w-measure text-text-1">{potenzialcheckNote}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button to={`/kontakt/?anliegen=${preset}`} size="lg" arrow>{cta.potenzialcheck}</Button>
            <Button to="/kontakt/" variant="secondary" size="lg">{cta.projekt}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
