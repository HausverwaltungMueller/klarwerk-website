import { Link } from 'react-router-dom';
import { Section } from '@/design/Section';
import { Button } from '@/design/Button';
import { Row } from '@/design/Row';
import { byDomain } from '@/content/services';
import { split } from '@/content/home';
import { cta } from '@/content/cta';

/** Zeilen statt Kacheln: eine Liste zeigt Vollständigkeit, ein Kachelgitter Beliebigkeit. */
export function Leistungen() {
  return (
    <Section id="leistungen" label="Leistungen" bridge="flaeche" labelAs="h2">
      <div className="grid gap-px bg-hair md:grid-cols-2">
        {(['dach', 'energie'] as const).map((d) => (
          <div key={d} className={`relative overflow-hidden bg-surface-1 ${d === 'dach' ? 'tex-tile' : 'tex-glass'}`}>
            <div className="relative z-[2] p-6">
              <p className="t-label">{d === 'dach' ? 'Domäne A' : 'Domäne B'}</p>
              <p className={`t-display-m mt-1 ${d === 'dach' ? 'text-dach-text' : 'text-energie'}`}>
                {d === 'dach' ? split.dach.title : split.energie.title}
              </p>
              <p className="mt-1 text-s text-text-1">
                {d === 'dach' ? split.dach.lines : split.energie.lines}
              </p>
            </div>
            <div className="relative z-[2] pb-3">
              {byDomain(d).map((s) => (
                <div key={s.slug} className="px-6" data-reveal="block">
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
          </div>
        ))}
      </div>
      <div className="mt-7" data-reveal>
        <Button to="/dach-und-pv/" variant="secondary" arrow event="services_bridge_click">{cta.planen}</Button>
      </div>
    </Section>
  );
}
