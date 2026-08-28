import { useEffect, useRef, useState } from 'react';
import { Button } from '@/design/Button';
import { Measure } from '@/design/Measure';
import { hero } from '@/content/home';
import { cta } from '@/content/cta';
import { motionProfile, allowsThree } from '@/motion/motionProfile';

/**
 * Hero. Text, Kopfzeile und beide Handlungsangebote stehen im HTML und sind
 * bedienbar, bevor die 3D-Szene existiert. Das LCP-Element ist die Überschrift,
 * niemals der Canvas. docs/04, Teil G.
 *
 * 320 Prozent Viewporthöhe als gepinnte Sequenz auf dem Desktop,
 * auf Mobil drei diskrete Zustände ohne Pin. docs/05, W07.
 */
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'flaeche' | 'material' | 'unterkonstruktion' | 'energie' | null>(null);
  const [late, setLate] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    const profile = motionProfile();
    // Die laufende Szene gehoert zur Desktop-Choreografie. Auf Mobil rendert
    // HeroMobileStates drei Standbilder.
    if (profile !== 'full' || !allowsThree(profile) || !canvasRef.current) return;

    let dispose: (() => void) | undefined;
    let cancelled = false;

    // Erst bei Sichtbarkeit laden, nie global
    const io = new IntersectionObserver(async (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const { mountHeroScene } = await import('@/three');
      if (cancelled || !canvasRef.current) return;
      const handle = await mountHeroScene(canvasRef.current, {
        profile,
        onPhase: (p) => { setPhase(p.label); setLate(p.late); },
      });
      if (cancelled) { handle.dispose(); return; }
      dispose = handle.dispose;
      setSceneReady(true);
    }, { rootMargin: '200px' });

    io.observe(canvasRef.current);
    return () => { cancelled = true; io.disconnect(); dispose?.(); };
  }, []);

  return (
    <section id="hero" className="relative md:h-[320vh]" aria-label="Aus Dachfläche wird Energiefläche">
      {/* Auf Mobil kein Pin und keine Sequenz, docs/04 Teil F.2 */}
      <div className="relative h-[86svh] overflow-hidden md:sticky md:top-0 md:h-[100svh]" data-hero-stage>
        {/* Ebene 0: Himmel als CSS-Verlauf, wandert mit dem Lichtbogen */}
        <div className="absolute inset-0" data-hero-sky
          style={{ background: 'linear-gradient(180deg, var(--sky-a, #1b2431) 0%, var(--sky-b, #3b3325) 62%, var(--sky-c, #181917) 100%)' }} />
        {/* Ebene 2: 3D */}
        <canvas ref={canvasRef} className="absolute inset-0 hidden h-full w-full md:block" aria-hidden="true" />
        {/* Ebene 3 und 4: Lichtnebel, Vignette, Korn */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[66%] md:h-[46%]"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(17,18,17,0.72) 46%, rgba(17,18,17,0.94))' }} />
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(17,18,17,0.72) 0%, rgba(17,18,17,0.42) 34%, transparent 62%)' }} />
        <div className="grain pointer-events-none absolute inset-0" />

        {/* Ebene 5 bis 7: Beschriftung und Typografie */}
        <div className="page absolute inset-0">
          <div className="absolute left-[20px] top-1/2 w-[min(58%,640px)] -translate-y-1/2 md:left-[40px] max-md:top-auto max-md:bottom-[96px] max-md:w-[calc(100%-40px)] max-md:translate-y-0"
            data-hero-text>
            <p className="t-label">{hero.eyebrow}</p>
            <h1 className="t-display-xl mt-4">
              {hero.h1.map((line) => (
                <span key={line} className="block">
                  {line.includes(hero.h1Italic)
                    ? line.split(hero.h1Italic).flatMap((part, i, arr) =>
                        i < arr.length - 1
                          ? [part, <em key={`i-${i}`} className="display-italic">{hero.h1Italic}</em>]
                          : [part],
                      )
                    : line}
                </span>
              ))}
            </h1>
            <p className="t-lead mt-5 max-w-[44ch]">{hero.lead}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button to="/kontakt/" size="lg" arrow event="hero_cta_click">{cta.projekt}</Button>
              <Button to="/#leistungen" variant="secondary" size="lg">{cta.leistungen}</Button>
            </div>
          </div>

          {/* Zweite Überschrift, erscheint am Ende der Sequenz */}
          <div className="absolute left-[20px] top-1/2 hidden w-[min(64%,760px)] -translate-y-1/2 opacity-0 md:left-[40px] md:block"
            data-hero-closing>
            <p className="t-label">{hero.closingEyebrow}</p>
            <h2 className="t-display-l mt-4">{hero.closing}</h2>
            <div className="mt-6">
              <Button to="/kontakt/" size="lg" arrow event="hero_cta_click">{cta.projekt}</Button>
            </div>
          </div>

          {phase ? (
            <p className="t-label absolute bottom-[78px] left-[20px] md:left-[40px]" aria-live="off">
              {hero.phaseLabels[phase]}
            </p>
          ) : null}

          <div className="absolute bottom-[78px] right-[20px] hidden md:right-[40px] md:block">
            <Measure value={late ? hero.measureLate : hero.measure} align="right" />
          </div>

          {/* Sprungmarke statt dekorativem Indikator. docs/05, W07 */}
          <a href="#haltung" className="t-spec absolute bottom-[26px] left-[20px] flex items-center gap-3 md:left-[40px]"
            data-hero-skip>
            <span aria-hidden="true" className="block h-px w-[40px] bg-text-2 transition-all duration-1 ease-out group-hover:w-[56px]" />
            <span>{cta.weiter}</span>
          </a>
        </div>

        {/* Textalternative zur Szene, gleicher Informationsgehalt */}
        {!sceneReady ? null : (
          <p className="sr-only">
            Die Darstellung zeigt ein Wohnhaus mit Satteldach. Im Verlauf öffnen sich die Ziegelreihen des
            künftigen Belegungsfeldes, darunter werden Lattung und Unterdeckung sichtbar. Danach schließen
            sich die Ziegel wieder und darüber entstehen Montageschienen und Photovoltaikmodule.
          </p>
        )}
      </div>
    </section>
  );
}
