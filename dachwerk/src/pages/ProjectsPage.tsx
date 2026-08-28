import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { Figure } from '@/design/Figure';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { projects } from '@/content/projects';
import { projekte } from '@/content/home';
import type { RouteMeta } from '@/routes';

export function ProjectsPage({ meta }: { meta: RouteMeta }) {
  useMotion();
  void meta;
  return (
    <>
      <PageIntro label="Beispielprojekte" h1="Gute Arbeit sieht man." lead={projekte.lead} />
      {projects.map((p) => (
        <Section key={p.id} id={`projekt-${p.id}`} label={`Beispielprojekt ${p.id}`}>
          <div className="grid gap-7 md:grid-cols-2">
            <div data-reveal="surface">
              <Figure id={p.before} ratio="16/9" />
              <p className="t-spec mt-2">Vorher</p>
            </div>
            <div data-reveal="surface">
              <Figure id={p.after} ratio="16/9" />
              <p className="t-spec mt-2">Nachher</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[5fr_7fr]">
            <h2 className="t-display-m" data-reveal>{p.measure}</h2>
            <div data-reveal>
              <p className="t-spec mb-3">{p.place} · Beispielprojekt</p>
              <ul className="flex flex-col gap-2">
                {p.notes.map((n) => <li key={n} className="text-text-1">{n}</li>)}
              </ul>
            </div>
          </div>
        </Section>
      ))}
      <Section id="hinweis" label="Hinweis" rhythm="tight" labelAs="h2">
        <p className="t-body-s max-w-[80ch] text-text-1" data-reveal>{projekte.note}</p>
      </Section>
      <CtaBlock first="Soll Ihr Dach der nächste Fall werden?" />
    </>
  );
}
