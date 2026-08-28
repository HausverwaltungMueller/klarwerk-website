import { useEffect } from 'react';
import { loadGsap, type Scene } from './gsapContext';
import { motionProfile } from './motionProfile';

/**
 * Content erst, Bewegung danach.
 * html.motion-ready wird gesetzt, nachdem die Schicht bereit ist. Erst dann greifen
 * die Startzustände aus base.css. Ohne Skript oder bei Fehler bleibt alles sichtbar.
 * docs/05-KOHAERENZPRUEFUNG, W11.
 */
export function useMotion(scenes: Scene[] = []) {
  useEffect(() => {
    const profile = motionProfile();
    let disposed = false;
    const cleanups: Array<() => void> = [];

    if (profile === 'reduced' || profile === 'low') {
      markAllVisible();
      return;
    }

    loadGsap()
      .then(({ gsap, ScrollTrigger }) => {
        if (disposed) return;
        document.documentElement.classList.add('motion-ready');

        const ctx = gsap.context(() => {
          // Reveals als Batch, nicht ein Trigger je Element
          ScrollTrigger.batch('[data-reveal], [data-mask]', {
            start: 'top 84%',
            once: true,
            batchMax: 8,
            onEnter: (targets) => {
              targets.forEach((el, i) => {
                window.setTimeout(() => el.setAttribute('data-in', ''), i * 80);
              });
            },
          });

          // Begrenzter Parallax
          document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
            const pct = Number(el.dataset.parallax ?? '6');
            const max = Math.min(pct, 8);
            gsap.fromTo(
              el,
              { yPercent: -max / 2 },
              {
                yPercent: max / 2,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
              },
            );
          });

          for (const scene of scenes) {
            const off = scene({ gsap, ScrollTrigger, profile });
            if (off) cleanups.push(off);
          }
        });

        cleanups.push(() => ctx.revert());

        const refresh = () => ScrollTrigger.refresh();
        document.fonts?.ready.then(refresh).catch(() => undefined);
        window.addEventListener('load', refresh, { once: true });
      })
      .catch(() => {
        // Wenn die Motion-Schicht nicht laedt, bleibt der sichtbare Grundzustand stehen
        document.documentElement.classList.remove('motion-ready');
        markAllVisible();
      });

    return () => {
      disposed = true;
      cleanups.forEach((fn) => fn());
      document.documentElement.classList.remove('motion-ready');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function markAllVisible() {
  document.querySelectorAll('[data-reveal], [data-mask]').forEach((el) => el.setAttribute('data-in', ''));
}
