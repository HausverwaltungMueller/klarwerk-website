import { useEffect, useRef, useState } from 'react';
import { Section } from '@/design/Section';
import { hero } from '@/content/home';
import { motionProfile, allowsThree, BREAKPOINT_CHOREO } from '@/motion/motionProfile';

const zustaende = [
  { p: 0.4, label: 'Zustand 1 von 3 · Dachfläche', alt: 'Dachfläche mit Tondachziegeln aus erhöhter Position.' },
  { p: 0.55, label: 'Zustand 2 von 3 · Unterkonstruktion', alt: 'Geöffnete Ziegelreihen, darunter Lattung und Unterdeckung.' },
  { p: 1.0, label: 'Zustand 3 von 3 · Energiefläche', alt: 'Dasselbe Dach mit geschlossener Deckung und Photovoltaikmodulen.' },
];

/**
 * Mobiler Pfad: kein Pin, keine laufende Szene. Drei diskrete Zustände als
 * Standbilder, einmal gerendert und danach als Bild angezeigt.
 * docs/04, Teil F.2.
 */
export function HeroMobileStates() {
  const [stills, setStills] = useState<string[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= BREAKPOINT_CHOREO) return;
    const profile = motionProfile();
    if (!allowsThree(profile)) return;

    let cancelled = false;
    const io = new IntersectionObserver(async (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const { renderHeroStills } = await import('@/three');
      const w = Math.min(900, Math.round(window.innerWidth * 2));
      const bilder = await renderHeroStills(w, Math.round(w * 1.25), zustaende.map((z) => z.p), profile);
      if (!cancelled) setStills(bilder);
    }, { rootMargin: '300px' });

    if (boxRef.current) io.observe(boxRef.current);
    return () => { cancelled = true; io.disconnect(); };
  }, []);

  return (
    <Section id="transformation" label="Aus Dachfläche wird Energiefläche" rail={false} className="md:hidden">
      <div ref={boxRef} className="flex flex-col gap-7">
        {zustaende.map((z, i) => (
          <figure key={z.label} className="flex flex-col gap-3">
            <figcaption className="t-label">{z.label}</figcaption>
            <div className="mat mat-ziegel border border-hair" style={{ aspectRatio: '4/5' }}>
              {stills[i] ? (
                <img src={stills[i]} alt={z.alt} className="h-full w-full object-cover" />
              ) : (
                <span className="mat-fill" aria-hidden="true" />
              )}
            </div>
          </figure>
        ))}
      </div>
      <p className="t-display-s mt-7">{hero.closing}</p>
    </Section>
  );
}
