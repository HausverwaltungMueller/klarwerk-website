import { Section } from '@/design/Section';
import { Button } from '@/design/Button';
import { Figure } from '@/design/Figure';
import { ablauf } from '@/content/home';
import { processSteps } from '@/content/process';
import { cta, potenzialcheckNote } from '@/content/cta';

/**
 * Prozess in fünf Schritten. Auf dem Desktop horizontal geführt, auf Mobil vertikal.
 * Danach steht das Hauptangebot der Journey: der Potenzialcheck.
 */
export function Ablauf() {
  return (
    <Section id="ablauf" label={ablauf.label} surface="day" bridge="satz" rail={false}>
      <h2 className="t-display-l mb-7 max-w-[24ch]" data-reveal>{ablauf.h2}</h2>

      <div className="overflow-hidden">
        <ol className="flex flex-col gap-4 md:flex-row md:gap-px" data-process-track>
          {processSteps.map((s) => (
            <li key={s.index}
              className="flex min-h-[300px] flex-col gap-3 border border-hair bg-surface-1 p-5 md:flex-[0_0_min(78vw,400px)]"
              data-reveal="block">
              <span className="t-numeral" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{s.index}</span>
              <h3 className="t-display-s">{s.title}</h3>
              {s.lines.map((l) => <p key={l} className="text-s text-text-1">{l}</p>)}
              <Figure id={s.slot} ratio="16/10" className="mt-auto" />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 h-px bg-hair" aria-hidden="true">
        <div className="h-px w-0 bg-dach" data-process-progress />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-6">
        <Button to="/kontakt/?anliegen=potenzialcheck" variant="on-light" size="lg" arrow event="process_potenzialcheck_click">
          {cta.potenzialcheck}
        </Button>
        <p className="max-w-[46ch] text-s text-text-1">{potenzialcheckNote}</p>
      </div>
    </Section>
  );
}
