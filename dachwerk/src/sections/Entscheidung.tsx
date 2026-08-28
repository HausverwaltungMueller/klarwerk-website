import { Section } from '@/design/Section';
import { Lead } from '@/design/Prose';
import { entscheidung } from '@/content/home';

/** Acht Prüfpunkte statt dekorativer Lebensdauerzahlen. docs/05, Teil D. */
export function Entscheidung() {
  return (
    <Section id="was-ein-dach-entscheidet" label={entscheidung.label} bridge="frage" texture="wood">
      <div className="grid gap-6 md:grid-cols-[5fr_7fr] md:gap-7">
        <h2 className="t-display-l" data-reveal>{entscheidung.h2}</h2>
        <div>
          <div data-reveal><Lead>{entscheidung.lead}</Lead></div>
          <ol className="mt-6">
            {entscheidung.points.map((p, i) => (
              <li key={p} className="grid grid-cols-[44px_1fr] gap-x-5 border-t border-hair py-4" data-reveal="block">
                <span className="t-spec pt-1">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-text-1">{p}</p>
              </li>
            ))}
          </ol>
          <p className="t-lead mt-6" data-reveal>{entscheidung.closing}</p>
          <p className="mt-4 max-w-measure text-text-1" data-reveal>{entscheidung.regional}</p>
        </div>
      </div>
    </Section>
  );
}
