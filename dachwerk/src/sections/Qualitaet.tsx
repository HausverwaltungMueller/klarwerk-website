import { Section } from '@/design/Section';
import { Figure } from '@/design/Figure';
import { qualitaet } from '@/content/home';

export function Qualitaet() {
  return (
    <Section id="qualitaet" label={qualitaet.label} bridge="satz">
      <div className="grid gap-7 md:grid-cols-[5fr_7fr]">
        <div data-reveal="surface">
          <Figure id="pro-01" ratio="3/2" />
        </div>
        <div>
          <h2 className="t-display-l" data-reveal>{qualitaet.h2}</h2>
          <ul className="mt-6">
            {qualitaet.points.map((p) => (
              <li key={p} className="border-t border-hair py-4 text-text-1" data-reveal="block">{p}</li>
            ))}
          </ul>
          <p className="t-spec mt-5 max-w-[70ch] leading-relaxed" data-reveal>{qualitaet.note}</p>
        </div>
      </div>
    </Section>
  );
}
