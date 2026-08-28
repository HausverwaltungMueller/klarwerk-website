import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/design/Button';
import { Icon } from '@/design/Icon';
import { byDomain } from '@/content/services';
import { company } from '@/content/company';
import { cta } from '@/content/cta';
import { telHref } from '@/lib/format';
import { track } from '@/lib/track';

type Panel = 'dach' | 'energie' | null;

const domainMeta = {
  dach: { path: '/dach/', label: 'Dach', lines: 'Schützen. Sanieren. Erhalten.' },
  energie: { path: '/photovoltaik/', label: 'Photovoltaik', lines: 'Erzeugen. Speichern. Nutzen.' },
} as const;

export function Header() {
  const [solid, setSolid] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setPanel(null);
    setMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setPanel(null); setMenu(false); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-1 ease-out ${
        solid || panel || menu ? 'border-hair bg-scrim-header backdrop-blur' : 'border-transparent'
      }`}
      onMouseLeave={() => setPanel(null)}
      /* Das Panel oeffnet beim Fokus. Verlaesst der Fokus die Kopfzeile,
         schliesst es wieder, sonst bleibt es fuer Tastaturnutzer offen stehen. */
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPanel(null);
      }}
    >
      <div className="page flex items-center justify-between gap-5 py-4">
        <Link to="/" className="text-s font-semibold tracking-[0.22em]" aria-label="DACHWERK, zur Startseite">
          DACHWERK
        </Link>

        <div ref={navRef} className="hidden items-center gap-6 lg:flex">
          {(['dach', 'energie'] as const).map((d) => (
            <div key={d} className="relative">
              <button
                type="button"
                aria-expanded={panel === d}
                aria-controls={`panel-${d}`}
                className="flex items-center gap-2 border-b border-transparent pb-1 text-s text-text-1 hover:text-text-0"
                onMouseEnter={() => setPanel(d)}
                onFocus={() => setPanel(d)}
                onClick={() => setPanel(panel === d ? null : d)}
                /* Wandert der Fokus weiter, ohne in das eigene Panel zu gehen,
                   schliesst das Panel. Sonst steht es offen, waehrend weitergetabbt wird. */
                onBlur={(e) => {
                  const ziel = e.relatedTarget as Node | null;
                  if (!ziel || !document.getElementById(`panel-${d}`)?.contains(ziel)) setPanel(null);
                }}
              >
                {domainMeta[d].label}
                <Icon name={panel === d ? 'minus' : 'plus'} size={14} />
              </button>
            </div>
          ))}
          <Link to="/dach-und-pv/" className="border-b border-transparent pb-1 text-s text-text-1 hover:text-text-0 hover:border-hair-1">Dach und PV</Link>
          <Link to="/projekte/" className="border-b border-transparent pb-1 text-s text-text-1 hover:text-text-0 hover:border-hair-1">Projekte</Link>
          <Link to="/ratgeber/" className="border-b border-transparent pb-1 text-s text-text-1 hover:text-text-0 hover:border-hair-1">Ratgeber</Link>
          <Link to="/ueber-uns/" className="border-b border-transparent pb-1 text-s text-text-1 hover:text-text-0 hover:border-hair-1">Über uns</Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={telHref(company.phone.value)}
            className="hidden text-s text-text-1 tabular-nums hover:text-text-0 lg:block"
            onClick={() => track('phone_click')}
          >
            {company.phone.value}
          </a>
          <Button to="/kontakt/" size="sm" event="hero_cta_click" className="hidden sm:inline-flex">
            {cta.projekt}
          </Button>
          <button
            type="button"
            className="flex items-center gap-2 text-label lg:hidden"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? 'Schließen' : 'Menü'}
            <Icon name={menu ? 'close' : 'layers'} size={18} />
          </button>
        </div>
      </div>

      {/* Mega-Panel. Nur das offene Panel wird gerendert. Ein hidden-Attribut wuerde
          von der Klasse lg:block ueberschrieben, das war im Browsertest sichtbar. */}
      {(['dach', 'energie'] as const).filter((d) => panel === d).map((d) => (
        <div
          key={d}
          id={`panel-${d}`}
          className="hidden border-t border-hair bg-surface-1 lg:block"
        >
          <div className="page grid grid-cols-[1fr_1fr_260px] gap-7 py-7">
            <div>
              <p className="t-label mb-3">{domainMeta[d].label}</p>
              <p className={`t-display-s ${d === 'dach' ? 'text-dach-text' : 'text-energie-text'}`}>
                {domainMeta[d].lines}
              </p>
              <div className="mt-5">
                <Button to={domainMeta[d].path} variant="quiet" arrow>Alle Leistungen</Button>
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {byDomain(d === 'dach' ? 'dach' : 'energie').map((s) => (
                <li key={s.slug}>
                  {s.page ? (
                    <Link to={s.page} className="text-s text-text-1 hover:text-text-0">{s.name}</Link>
                  ) : (
                    <Link to={domainMeta[d].path} className="text-s text-text-2 hover:text-text-0">{s.name}</Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="border-l border-hair pl-5">
              <p className="t-label mb-2">Beides zusammen</p>
              <p className="text-s text-text-1">Wer das Dach öffnet, entscheidet gleichzeitig über die Energie der nächsten Jahrzehnte.</p>
              <div className="mt-4">
                <Button to="/dach-und-pv/" variant="quiet" arrow event="services_bridge_click">Dach und PV</Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobiles Menue */}
      {menu ? (
        <div id="mobile-menu" className="fixed inset-0 top-[57px] z-40 overflow-y-auto bg-surface-0 lg:hidden">
          <nav className="page flex flex-col gap-5 py-8" aria-label="Hauptnavigation">
            {[
              { to: '/dach/', label: 'Dach' },
              { to: '/photovoltaik/', label: 'Photovoltaik' },
              { to: '/dach-und-pv/', label: 'Dach und PV' },
              { to: '/projekte/', label: 'Projekte' },
              { to: '/ratgeber/', label: 'Ratgeber' },
              { to: '/ueber-uns/', label: 'Über uns' },
              { to: '/kontakt/', label: 'Kontakt' },
            ].map((i) => (
              <Link key={i.to} to={i.to} className="t-display-s border-b border-hair pb-3">
                {i.label}
              </Link>
            ))}
            <a href={telHref(company.phone.value)} className="t-spec mt-2" onClick={() => track('phone_click')}>
              {company.phone.value}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
