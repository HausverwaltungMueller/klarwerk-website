import { useEffect, useRef, useState } from 'react';
import { Section } from '@/design/Section';
import { hero } from '@/content/home';
import { motionProfile, BREAKPOINT_CHOREO } from '@/motion/motionProfile';

const zustaende = [
  { p: 0.4, label: 'Zustand 1 von 3 · Dachfläche', alt: 'Dachfläche mit Tondachziegeln aus erhöhter Position.' },
  { p: 0.55, label: 'Zustand 2 von 3 · Unterkonstruktion', alt: 'Geöffnete Ziegelreihen, darunter Lattung und Unterdeckung.' },
  { p: 1.0, label: 'Zustand 3 von 3 · Energiefläche', alt: 'Dasselbe Dach mit geschlossener Deckung und Photovoltaikmodulen.' },
];

/**
 * Mobiler Pfad und Pfad bei reduzierter Bewegung: kein Pin, keine laufende Szene.
 * Drei diskrete Zustände als Standbilder, einmal gerendert und danach als Bild
 * angezeigt. docs/04, Teil F.2 und Teil E, Absatz zu `prefers-reduced-motion`:
 * dort tritt die Standbildfassung an die Stelle der Hero-Sequenz, auch am Desktop.
 * Die Sichtbarkeit am Desktop regelt `base.css` über die Medienabfrage, damit sie
 * auch ohne JavaScript stimmt.
 */
export function HeroMobileStates() {
  const [stills, setStills] = useState<string[]>([]);
  /** Am Desktop steht die Standbildfassung im Querformat, mobil im Hochformat. */
  const [quer, setQuer] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const profile = motionProfile();
    // Am Desktop nur bei reduzierter Bewegung, dort ersetzt die Standbildfassung die Szene.
    if (window.innerWidth >= BREAKPOINT_CHOREO && profile !== 'reduced') return;
    // Bei `low` bleibt es bei der Materialfläche, dort ist Sparsamkeit der Zweck.
    if (profile === 'low') return;
    const landscape = window.innerWidth >= BREAKPOINT_CHOREO;
    setQuer(landscape);

    let cancelled = false;
    const io = new IntersectionObserver(async (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const { renderHeroStills } = await import('@/three');
      const w = Math.min(1200, Math.round(window.innerWidth * (landscape ? 1 : 2)));
      const h = Math.round(w * (landscape ? 0.625 : 1.25));
      const bilder = await renderHeroStills(w, h, zustaende.map((z) => z.p), profile);
      if (!cancelled) setStills(bilder);
    }, { rootMargin: '300px' });

    if (boxRef.current) io.observe(boxRef.current);
    return () => { cancelled = true; io.disconnect(); };
  }, []);

  return (
    <Section id="transformation" label="Aus Dachfläche wird Energiefläche" rail={false} className="hero-stills md:hidden">
      <div ref={boxRef} className="flex flex-col gap-7 md:mx-auto md:max-w-[840px]">
        {zustaende.map((z, i) => (
          <figure key={z.label} className="flex flex-col gap-3">
            <figcaption className="t-label">{z.label}</figcaption>
            <div className={`mat mat-ziegel border border-hair ${quer ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
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
