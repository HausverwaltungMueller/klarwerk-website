import { Link } from 'react-router-dom';
import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { Figure } from '@/design/Figure';
import { Row } from '@/design/Row';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { regions } from '@/content/regions';
import { findService } from '@/content/services';
import { company } from '@/content/company';
import { NotFound } from './NotFound';
import type { RouteMeta } from '@/routes';

export function RegionPage({ meta, slug }: { meta: RouteMeta; slug: string }) {
  useMotion();
  const r = regions.find((x) => x.slug === slug);
  void meta;
  if (!r) return <NotFound />;

  return (
    <>
      <PageIntro
        label="Arbeitsgebiet"
        h1={`Dach und Photovoltaik in ${r.name}`}
        lead={company.areaLabel}
      />

      <Section id="vor-ort" label="Bauweisen vor Ort" labelAs="h2">
        <div className="grid gap-7 md:grid-cols-[7fr_5fr]">
          <div>
            <ol>
              {r.buildingFacts.map((f, i) => (
                <li key={f} className="grid grid-cols-[44px_1fr] gap-x-4 border-t border-hair py-4" data-reveal="block">
                  <span className="t-spec pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-text-1">{f}</p>
                </li>
              ))}
            </ol>
            <div className="prose-col mt-6 text-text-1">
              {r.text.map((p) => <p key={p} data-reveal>{p}</p>)}
            </div>
          </div>
          <div data-reveal="surface"><Figure id="reg-02" ratio="16/9" /></div>
        </div>
      </Section>

      <Section id="leistungen-ort" label={`Häufig gefragt in ${r.name}`} labelAs="h2">
        <div>
          {r.services.map((s, i) => {
            const svc = findService(s);
            if (!svc) return null;
            return (
              <div key={s} data-reveal="block">
                {svc.page ? (
                  <Link to={svc.page} className="block">
                    <Row index={String(i + 1).padStart(2, '0')} title={svc.name}>{svc.explain}</Row>
                  </Link>
                ) : (
                  <Row index={String(i + 1).padStart(2, '0')} title={svc.name}>{svc.explain}</Row>
                )}
              </div>
            );
          })}
        </div>
        <p className="t-spec mt-6" data-reveal>
          Entfernung zur Werkstatt: {r.distanceKm === 0 ? 'am Ort' : `etwa ${r.distanceKm} km`}.
        </p>
        <div className="mt-4" data-reveal>
          <Link to="/dach-und-pv/" className="text-s text-energie underline decoration-hair">Dach und Photovoltaik kombinieren</Link>
        </div>
      </Section>

      <CtaBlock first={`Wir sind regelmäßig in ${r.name} unterwegs.`} />
    </>
  );
}
