import { Link } from 'react-router-dom';
import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { guide } from '@/content/guide';
import { legalNote } from '@/content/legal';
import type { RouteMeta } from '@/routes';

export function GuideIndexPage({ meta }: { meta: RouteMeta }) {
  useMotion();
  void meta;
  return (
    <>
      <PageIntro
        label="Ratgeber"
        h1="Photovoltaik und Dach, verständlich erklärt."
        lead="Wir beantworten die Fragen, die im Beratungsgespräch immer kommen. Sachlich, mit Quellen und mit Standdatum. Ohne Verkaufsdruck."
      />
      <Section id="artikel" label="Themen" labelAs="h2">
        <div className="grid gap-px bg-hair md:grid-cols-2">
          {guide.map((a) => (
            <Link key={a.slug} to={`/ratgeber/${a.slug}/`} className="bg-surface-1 p-6 transition-colors duration-1 ease-out hover:bg-surface-2" data-reveal="block">
              <h2 className="t-display-s">{a.question}</h2>
              <p className="mt-3 text-s text-text-1">{a.teaser}</p>
              {a.asOf ? <p className="t-spec mt-4">Stand {a.asOf}</p> : null}
            </Link>
          ))}
        </div>
        <p className="t-body-s mt-7 max-w-[76ch] border-l-2 border-energie pl-5 text-text-1" data-reveal>
          {legalNote.text}
        </p>
      </Section>
      <CtaBlock first="Fragen, die hier nicht stehen?" preset="beratung" />
    </>
  );
}
