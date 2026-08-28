import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { Figure } from '@/design/Figure';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { qualitaet, statement } from '@/content/home';
import { company } from '@/content/company';
import { demoNote } from '@/content/legal';
import type { RouteMeta } from '@/routes';

export function AboutPage({ meta }: { meta: RouteMeta }) {
  useMotion();
  void meta;
  return (
    <>
      <PageIntro
        label="Über uns"
        h1="Ein Betrieb, der das Dach als System denkt."
        lead={company.claim}
      />

      <Section id="haltung" label="Haltung" labelAs="h2">
        <div className="grid gap-7 md:grid-cols-[7fr_5fr]">
          <div className="prose-col text-text-1">
            <p data-reveal>{statement.text}</p>
            <p data-reveal>Der Markt teilt sich in Dachdecker, die Photovoltaik als Fremdgewerk behandeln, und Vertriebe, die den Zustand der Deckung nicht bewerten. Wir arbeiten dazwischen: Dach und Energie sind für uns dasselbe Bauteil.</p>
            <p data-reveal>Das hat Folgen für die Arbeitsweise. Wir prüfen, bevor wir empfehlen. Wir sagen ab, wenn eine Maßnahme nicht sinnvoll ist. Und wir behalten einen Ansprechpartner von der ersten Bestandsaufnahme bis zur Übergabe.</p>
          </div>
          <div data-reveal="surface"><Figure id="pro-05" ratio="3/2" /></div>
        </div>
      </Section>

      <Section id="qualitaet" label="Wie wir arbeiten" labelAs="h2">
        <ul>
          {qualitaet.points.map((p) => (
            <li key={p} className="border-t border-hair py-4 text-text-1" data-reveal="block">{p}</li>
          ))}
        </ul>
        <p className="t-spec mt-6 max-w-[76ch] leading-relaxed" data-reveal>{qualitaet.note}</p>
      </Section>

      <Section id="hinweis" label="Hinweis" rhythm="tight" labelAs="h2">
        <p className="t-body-s max-w-[80ch] text-text-1" data-reveal>{demoNote}</p>
      </Section>

      <CtaBlock first="Sprechen wir über Ihr Dach." preset="beratung" />
    </>
  );
}
