import { Link } from 'react-router-dom';
import { Section } from '@/design/Section';
import { Field } from '@/design/Field';
import { anliegen } from '@/content/home';
import { cta } from '@/content/cta';
import { track } from '@/lib/track';

/** Selbstzuordnung vor Leistungsdarstellung. Die fünfte Option ist die stärkste. */
export function Anliegen() {
  return (
    <Section id="ihr-anliegen" label={anliegen.label} bridge="frage">
      <h2 className="t-display-l mb-6" data-reveal>{anliegen.h2}</h2>
      <div className="grid gap-px bg-hair sm:grid-cols-2 md:grid-cols-4">
        {anliegen.choices.map((c, i) => (
          <Link
            key={c.preset}
            to={`/kontakt/?anliegen=${c.preset}`}
            onClick={() => track('choice_select', { anliegen: c.preset })}
            className="block"
            data-reveal="block"
          >
            <Field variant="choice" className="h-full">
              <span className="t-spec">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-base text-text-0">{c.q}</span>
              <span className="text-s text-text-2">{c.k}</span>
            </Field>
          </Link>
        ))}
      </div>

      <Link
        to={`/kontakt/?anliegen=${anliegen.wide.preset}`}
        onClick={() => track('choice_select', { anliegen: anliegen.wide.preset })}
        className="mt-px block bg-text-0 text-surface-0 transition-[filter] duration-1 ease-out hover:brightness-95"
        data-reveal="surface"
      >
        <div className="flex flex-wrap items-center justify-between gap-5 p-6">
          <p className="t-display-s max-w-[22ch]">{anliegen.wide.q}</p>
          <p className="max-w-[36ch] text-s opacity-80">{anliegen.wide.sub}</p>
          <span className="inline-flex h-[40px] items-center gap-3 rounded bg-surface-0 px-4 text-s font-medium text-text-0">
            {cta.potenzialcheck}
          </span>
        </div>
      </Link>
    </Section>
  );
}
