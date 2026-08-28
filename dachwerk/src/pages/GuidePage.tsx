import { Link } from 'react-router-dom';
import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { findGuide } from '@/content/guide';
import { findService } from '@/content/services';
import { legalNote } from '@/content/legal';
import { NotFound } from './NotFound';
import type { RouteMeta } from '@/routes';

export function GuidePage({ meta, slug }: { meta: RouteMeta; slug: string }) {
  useMotion();
  const a = findGuide(slug);
  void meta;
  if (!a) return <NotFound />;

  return (
    <>
      <PageIntro label="Ratgeber" h1={a.question} lead={a.teaser} />
      <Section id="antwort" label="Antwort" labelAs="h2">
        <div className="prose-col text-text-1">
          {a.answer.map((p) => <p key={p} data-reveal>{p}</p>)}
        </div>

        {a.asOf ? (
          <div className="mt-7 border-l-2 border-energie pl-5" data-reveal>
            <p className="t-body-s max-w-[76ch] text-text-1">{legalNote.text}</p>
            {a.sources && a.sources.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-1">
                {a.sources.map((q) => (
                  <li key={q.url}>
                    <a href={q.url} className="t-spec underline" target="_blank" rel="noreferrer">{q.label}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3" data-reveal>
          {a.relatedServices.map((s) => {
            const svc = findService(s);
            if (!svc) return null;
            return (
              <Link key={s} to={svc.page ?? (svc.domain === 'dach' ? '/dach/' : '/photovoltaik/')}
                className="text-s text-text-1 underline decoration-hair hover:text-text-0">
                {svc.name}
              </Link>
            );
          })}
          <Link to="/dach-und-pv/" className="text-s text-energie underline decoration-hair">Dach und Photovoltaik kombinieren</Link>
        </div>
      </Section>
      <CtaBlock first="Wie sieht das bei Ihrem Haus aus?" />
    </>
  );
}
