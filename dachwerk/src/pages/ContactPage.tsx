import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { PageIntro } from './PageIntro';
import { ProjectInquiry } from '@/forms/ProjectInquiry';
import { company } from '@/content/company';
import { kontakt } from '@/content/home';
import { potenzialcheckNote } from '@/content/cta';
import { telHref } from '@/lib/format';
import { track } from '@/lib/track';
import type { RouteMeta } from '@/routes';

export function ContactPage({ meta }: { meta: RouteMeta }) {
  useMotion();
  void meta;
  return (
    <>
      <PageIntro label="Kontakt" h1={kontakt.h2} lead={kontakt.text} />
      <Section id="anfrage" label="Anfrage" rail={false} labelAs="h2">
        <div className="grid gap-7 md:grid-cols-[5fr_7fr]">
          <div className="flex flex-col gap-4">
            <p className="max-w-measure text-text-1" data-reveal>{potenzialcheckNote}</p>
            <div className="mt-2 flex flex-col gap-1" data-reveal>
              <a href={telHref(company.phone.value)} className="t-display-s tabular-nums" onClick={() => track('phone_click')}>
                {company.phone.value}
              </a>
              <a href={`mailto:${company.email.value}`} className="text-s text-text-1">{company.email.value}</a>
            </div>
            <div className="mt-2" data-reveal>
              <p className="t-label mb-2">Anschrift</p>
              <p className="text-s text-text-1">{company.name}</p>
              <p className="text-s text-text-2">{company.street.value}</p>
              <p className="text-s text-text-2">{company.zip.value} {company.city.value}</p>
              <p className="t-spec mt-4">{company.areaLabel}</p>
            </div>
          </div>
          <div data-reveal="surface"><ProjectInquiry /></div>
        </div>
      </Section>
    </>
  );
}
