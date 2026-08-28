import { Link } from 'react-router-dom';
import { useMotion } from '@/motion/useMotion';
import { layersScene } from '@/motion/scenes/layers';
import { Section } from '@/design/Section';
import { Row } from '@/design/Row';
import { Figure } from '@/design/Figure';
import { Button } from '@/design/Button';
import { PageIntro } from './PageIntro';
import { CtaBlock } from './CtaBlock';
import { byDomain } from '@/content/services';
import { split } from '@/content/home';
import { cta } from '@/content/cta';
import type { RouteMeta } from '@/routes';

const intro = {
  dach: {
    label: 'Dach',
    h1: 'Dacharbeiten im Landkreis Hildesheim.',
    lead: 'Schützen, sanieren, erhalten. Wir öffnen das Dach an einer Stelle, prüfen den Aufbau und entscheiden erst danach über den Umfang.',
    body: [
      'Ein Dach besteht aus mehr als seiner Deckung. Unter den Ziegeln liegen Lattung, Unterdeckung als zweite wasserführende Ebene und die Dämmung. Welche Maßnahme sinnvoll ist, entscheidet dieser Aufbau, nicht der Blick von der Straße.',
      'Deshalb beginnt bei uns jede Empfehlung mit einer Prüfung. Wir sagen offen, wenn eine Reparatur trägt, und wir sagen es genauso offen, wenn sie nur Zeit kauft.',
      'Wenn die Fläche ohnehin geöffnet wird, ist der günstigste Zeitpunkt für alles, was später schwer nachzuholen ist: Dämmung, Anschlüsse und die Vorbereitung für eine Photovoltaikanlage.',
    ],
    slot: 'obj-02' as const,
  },
  energie: {
    label: 'Photovoltaik',
    h1: 'Photovoltaik vom Dachbetrieb.',
    lead: 'Erzeugen, speichern, nutzen. Wir prüfen zuerst das Dach, dann planen wir die Anlage. In dieser Reihenfolge, nicht umgekehrt.',
    body: [
      'Eine Anlage bleibt Jahrzehnte auf einer Fläche, die selbst Jahrzehnte halten muss. Wer sie auf eine Deckung setzt, die vorher hätte erneuert werden müssen, zahlt Demontage und Montage zweimal.',
      'Wir legen die Anlage nach Ihrem Verbrauch aus, nicht nach der freien Fläche. Wer eine Wärmepumpe oder ein Auto laden will, braucht eine andere Auslegung als ein Zweipersonenhaushalt.',
      'Montage, Elektrik und die Anmeldung beim Netzbetreiber sowie im Marktstammdatenregister der Bundesnetzagentur laufen über einen Betrieb und einen Ansprechpartner.',
    ],
    slot: 'mat-02' as const,
  },
};

export function DomainPage({ meta, domain }: { meta: RouteMeta; domain: 'dach' | 'energie' }) {
  useMotion([layersScene]);
  const t = intro[domain];
  void meta;

  return (
    <>
      <PageIntro label={t.label} h1={t.h1} lead={t.lead} />

      <Section id="ueberblick" label="Überblick" labelAs="h2">
        <div className="grid gap-7 md:grid-cols-[7fr_5fr]">
          <div className="prose-col text-text-1">
            {t.body.map((p) => <p key={p} data-reveal>{p}</p>)}
          </div>
          <div data-reveal="surface"><Figure id={t.slot} ratio="3/2" /></div>
        </div>
      </Section>

      <Section id="leistungen" label="Leistungen" labelAs="h2">
        <p className={`t-display-m mb-5 ${domain === 'dach' ? 'text-dach-text' : 'text-energie-text'}`}>
          {domain === 'dach' ? split.dach.lines : split.energie.lines}
        </p>
        <div>
          {byDomain(domain).map((s) => (
            <div key={s.slug} data-reveal="block">
              {s.page ? (
                <Link to={s.page} className="block">
                  <Row index={String(s.order).padStart(2, '0')} title={s.name}>{s.explain}</Row>
                </Link>
              ) : (
                <Row index={String(s.order).padStart(2, '0')} title={s.name}>{s.explain}</Row>
              )}
            </div>
          ))}
        </div>
        <div className="mt-7" data-reveal>
          <Button to="/dach-und-pv/" variant="secondary" arrow event="services_bridge_click">{cta.planen}</Button>
        </div>
      </Section>

      <CtaBlock
        first={domain === 'dach' ? 'Sie wissen nicht, ob Ihr Dach saniert werden muss?' : 'Sie wissen nicht, ob Ihr Dach für Photovoltaik geeignet ist?'}
        preset={domain === 'dach' ? 'sanierung' : 'photovoltaik'}
      />
    </>
  );
}
