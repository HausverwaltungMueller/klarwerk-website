import { useCallback, useEffect, useRef, useState } from 'react';
import { Section } from '@/design/Section';
import { Button } from '@/design/Button';
import { Figure } from '@/design/Figure';
import { projekte } from '@/content/home';
import { projects } from '@/content/projects';
import { cta } from '@/content/cta';
import { track } from '@/lib/track';

/** Vorher und nachher aus identischer Achse. Scrollgesteuert und zusätzlich bedienbar. */
function BeforeAfter({ before, after, label }: { before: React.ReactNode; after: React.ReactNode; label: string }) {
  const [value, setValue] = useState(0);
  const manualRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const fromPointer = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    manualRef.current = true;
    setValue(Math.min(1, Math.max(0, (clientX - r.left) / r.width)));
    track('projects_slider_use');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (manualRef.current) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.86 - r.top) / (vh * 0.5)));
      setValue(p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value * 100)}
      aria-valuetext={`${Math.round(value * 100)} Prozent nachher`}
      className="relative cursor-ew-resize select-none overflow-hidden border border-hair"
      style={{ aspectRatio: '16/9' }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); fromPointer(e.clientX); }}
      onPointerMove={(e) => { if (e.buttons > 0) fromPointer(e.clientX); }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') { manualRef.current = true; setValue((v) => Math.min(1, v + 0.1)); e.preventDefault(); }
        if (e.key === 'ArrowLeft') { manualRef.current = true; setValue((v) => Math.max(0, v - 0.1)); e.preventDefault(); }
        if (e.key === 'Home') { manualRef.current = true; setValue(0); e.preventDefault(); }
        if (e.key === 'End') { manualRef.current = true; setValue(1); e.preventDefault(); }
      }}
    >
      <div className="absolute inset-0">{before}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${(1 - value) * 100}%)` }}>{after}</div>
      <span className="absolute bottom-3 left-3 z-[3] bg-scrim-tag px-2 py-1 text-label text-on-scrim">Vorher</span>
      <span className="absolute bottom-3 right-3 z-[3] bg-scrim-tag px-2 py-1 text-label text-on-scrim">Nachher</span>
      <span aria-hidden="true" className="absolute inset-y-0 z-[4] w-px bg-energie" style={{ left: `${value * 100}%` }} />
    </div>
  );
}

export function Projekte() {
  return (
    <Section id="projekte" label={projekte.label} surface="day" bridge="satz">
      <div className="mb-7 grid gap-6 md:grid-cols-[5fr_7fr] md:gap-7">
        <h2 className="t-display-l" data-reveal>{projekte.h2}</h2>
        <p className="t-lead" data-reveal>{projekte.lead}</p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} data-reveal="block">
            <BeforeAfter
              label={`Vorher und nachher, Beispielprojekt ${p.id}`}
              before={<Figure id={p.before} ratio="16/9" className="h-full border-0" showMeta={false} />}
              after={<Figure id={p.after} ratio="16/9" className="h-full border-0" showMeta={false} />}
            />
            <div className="mt-4 flex flex-col gap-2">
              <p className="t-label">
                Beispielprojekt {p.id} · {p.kind === 'energie' ? 'Energie' : p.kind === 'dach' ? 'Dach' : 'Dach und Energie'}
              </p>
              <h3 className="t-display-s">{p.measure}</h3>
              <p className="text-s text-text-2">{p.place} · Beispielprojekt</p>
              <ul className="mt-2 flex flex-col gap-1">
                {p.notes.map((n) => <li key={n} className="text-s text-text-1">{n}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="t-spec mt-7 max-w-[80ch] leading-relaxed" data-reveal>{projekte.note}</p>
      <div className="mt-6" data-reveal>
        <Button to="/projekte/" variant="secondary" arrow>{cta.projekte}</Button>
      </div>
    </Section>
  );
}
