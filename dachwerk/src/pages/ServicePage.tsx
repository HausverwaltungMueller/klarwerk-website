import { Link } from 'react-router-dom';
import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { Figure } from '@/design/Figure';
import { Row } from '@/design/Row';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { findService } from '@/content/services';
import { findGuide } from '@/content/guide';
import { legalNote } from '@/content/legal';
import { NotFound } from './NotFound';
import type { RouteMeta } from '@/routes';

/** Leistungsseite. Kein Pin, drei Reveal-Szenen, kein 3D. Experience-Budget aus docs/05, W06. */
export function ServicePage({ meta, slug }: { meta: RouteMeta; slug: string }) {
  useMotion();
  const s = findService(slug);
  void meta;
  if (!s) return <NotFound />;

  return (
    <>
      <PageIntro label={s.domain === 'dach' ? 'Dach' : 'Photovoltaik'} h1={`${s.name} in Hildesheim und Umgebung`} lead={s.explain} />

      <Section id="worum-es-geht" label={s.claim} labelAs="h2">
        <div className="grid gap-7 md:grid-cols-[7fr_5fr]">
          <div className="prose-col text-text-1">
            {s.detail.map((p) => <p key={p} data-reveal>{p}</p>)}
          </div>
          <div className="flex flex-col gap-5">
            {s.slots.slice(0, 2).map((id) => (
              <div key={id} data-reveal="surface"><Figure id={id} ratio="3/2" /></div>
            ))}
          </div>
        </div>
      </Section>

      {s.faq && s.faq.length > 0 ? (
        <Section id="fragen" label="Häufige Fragen" labelAs="h2">
          <div>
            {s.faq.map((f, i) => (
              <div key={f.question} data-reveal="block">
                <Row index={String(i + 1).padStart(2, '0')} title={f.question}>{f.answer}</Row>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {s.legalNote ? (
        <Section id="hinweis" label="Rechtlicher Hinweis" rhythm="tight" labelAs="h2">
          <div className="border-l-2 border-energie pl-5" data-reveal>
            <p className="t-body-s max-w-[76ch] text-text-1">{legalNote.text}</p>
            <ul className="mt-3 flex flex-col gap-1">
              {legalNote.sources.map((q) => (
                <li key={q.url}>
                  <a href={q.url} className="t-spec underline" target="_blank" rel="noreferrer">{q.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section id="weiter" label="Passt dazu" labelAs="h2">
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {s.relatedServices.map((r) => {
            const rel = findService(r);
            if (!rel) return null;
            return (
              <li key={r}>
                <Link to={rel.page ?? (rel.domain === 'dach' ? '/dach/' : '/photovoltaik/')}
                  className="text-s text-text-1 underline decoration-hair hover:text-text-0">
                  {rel.name}
                </Link>
              </li>
            );
          })}
          {s.relatedGuides.map((g) => {
            const art = findGuide(g);
            if (!art) return null;
            return (
              <li key={g}>
                <Link to={`/ratgeber/${art.slug}/`} className="text-s text-text-1 underline decoration-hair hover:text-text-0">
                  {art.question}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/dach-und-pv/" className="text-s text-energie underline decoration-hair">Dach und Photovoltaik kombinieren</Link>
          </li>
        </ul>
      </Section>

      <CtaBlock first="Klingt das nach Ihrem Fall?" preset={s.domain === 'dach' ? 'sanierung' : 'photovoltaik'} />
    </>
  );
}
