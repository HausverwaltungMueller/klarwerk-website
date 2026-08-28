import { Section } from '@/design/Section';
import { kontakt } from '@/content/home';
import { company } from '@/content/company';
import { telHref } from '@/lib/format';
import { ProjectInquiry } from '@/forms/ProjectInquiry';
import { track } from '@/lib/track';

export function Kontakt() {
  return (
    <Section id="kontakt" label={kontakt.label} rail={false} rhythm="cesura">
      <div className="light-edge mb-7" aria-hidden="true" />
      <div className="grid gap-7 md:grid-cols-[5fr_7fr]">
        <div className="flex flex-col gap-5">
          <h2 className="t-display-l" data-reveal>{kontakt.h2}</h2>
          <p className="max-w-measure text-text-1" data-reveal>{kontakt.text}</p>
          <p className="t-spec" data-reveal>{kontakt.quiet}</p>
          <div className="mt-2 flex flex-col gap-1" data-reveal>
            <a href={telHref(company.phone.value)} className="t-display-s tabular-nums" onClick={() => track('phone_click')}>
              {company.phone.value}
            </a>
            <a href={`mailto:${company.email.value}`} className="text-s text-text-1">{company.email.value}</a>
            <p className="t-spec mt-3">{company.areaLabel}</p>
          </div>
        </div>
        <div data-reveal="surface"><ProjectInquiry /></div>
      </div>
    </Section>
  );
}
