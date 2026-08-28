import { useMotion } from '@/motion/useMotion';
import { layersScene } from '@/motion/scenes/layers';
import { Section } from '@/design/Section';
import { Figure } from '@/design/Figure';
import { Row } from '@/design/Row';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { RoofSectionDrawing } from '@/design/drawings/RoofSectionDrawing';
import { layers } from '@/content/process';
import { pvBenefits, legalNote } from '@/content/legal';
import { bridgeFaq, bridgeText } from '@/content/bridge';
import type { RouteMeta } from '@/routes';

/** Die strategisch wichtigste Unterseite. Ein Pin ist erlaubt, hier genügt Ruhe. */
export function BridgePage({ meta }: { meta: RouteMeta }) {
  useMotion([layersScene]);
  void meta;

  return (
    <>
      <PageIntro
        label="Dach und Photovoltaik"
        h1="Zwei Gewerke, ein Bauteil."
        lead="Wer das Dach öffnet, entscheidet gleichzeitig über die nächsten Jahrzehnte Energie. Deshalb planen wir beides in einem Zug, mit einem Ansprechpartner und einer Baustelle."
      />

      <Section id="warum" label="Warum zusammen" labelAs="h2">
        <div className="min-w-0-children grid gap-7 md:grid-cols-[7fr_5fr]">
          <div className="prose-col text-text-1">
            {bridgeText.reihenfolge.map((t) => <p key={t} data-reveal>{t}</p>)}
          </div>
          <div data-reveal="surface"><Figure id="obj-03" ratio="16/9" /></div>
        </div>
      </Section>

      <Section id="zusammen" label="Was zusammen geplant wird" labelAs="h2">
        <div className="grid gap-7 md:grid-cols-[7fr_5fr]">
          <div className="prose-col text-text-1">
            {bridgeText.zusammen.map((t) => <p key={t} data-reveal>{t}</p>)}
          </div>
          <ul className="flex flex-col">
            {bridgeText.gruende.map((g, i) => (
              <li key={g.title} className="grid grid-cols-[44px_1fr] gap-x-4 border-t border-hair py-4" data-reveal="block">
                <span className="t-spec pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-base font-medium">{g.title}</h3>
                  <p className="mt-1 text-s text-text-2">{g.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="aufbau" label="Der Dachaufbau" surface="day" labelAs="h2">
        <div className="min-w-0-children grid gap-7 md:grid-cols-[7fr_5fr]">
          <div data-reveal="surface"><RoofSectionDrawing /></div>
          <ol>
            {layers.map((l) => (
              <li key={l.index} className="grid grid-cols-[44px_1fr] gap-x-4 border-t border-hair py-4" data-reveal="block">
                <span className="t-spec pt-1">{l.index}</span>
                <div>
                  <h3 className={`text-base font-medium ${l.domain === 'energie' ? 'text-energie' : 'text-text-0'}`}>{l.name}</h3>
                  <p className="mt-1 text-s text-text-2">{l.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="pv-einfach" label="PV muss nicht kompliziert sein" labelAs="h2">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {pvBenefits.map((b, i) => (
            <div key={b.title} className="bg-surface-1 p-6" data-reveal="block">
              <p className="t-spec mb-3">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="t-display-s">{b.title}</h3>
              <p className="mt-2 text-s text-text-1">{b.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-l-2 border-energie pl-5" data-reveal>
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

      <Section id="reihenfolge" label="Die Reihenfolge" labelAs="h2">
        <div>
          <div data-reveal="block"><Row index="01" title="Prüfung">Zustand der Deckung, Statik, Ausrichtung, Verschattung und Leitungswege.</Row></div>
          <div data-reveal="block"><Row index="02" title="Entscheidung">Sanieren und belegen, oder nur belegen. Mit Zahlen, nicht mit Bauchgefühl.</Row></div>
          <div data-reveal="block"><Row index="03" title="Planung">Eine Planung für beides, ein Angebot mit benannten Positionen.</Row></div>
          <div data-reveal="block"><Row index="04" title="Ausführung">Ein Gerüst, eine Baustelle, ein Ansprechpartner.</Row></div>
          <div data-reveal="block"><Row index="05" title="Übergabe">Dokumentation des Aufbaus und der Anlage, danach erreichbar bleiben.</Row></div>
        </div>
      </Section>

      <Section id="fragen" label="Häufige Fragen" labelAs="h2">
        <div>
          {bridgeFaq.map((f, i) => (
            <div key={f.question} data-reveal="block">
              <Row index={String(i + 1).padStart(2, '0')} title={f.question}>{f.answer}</Row>
            </div>
          ))}
        </div>
      </Section>

      <CtaBlock first="Lohnt sich das für Ihr Haus?" preset="dach-und-pv" />
    </>
  );
}
