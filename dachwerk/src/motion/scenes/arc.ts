import type { Scene } from '../gsapContext';

/**
 * Flächenwechsel über die 38-Grad-Kante. Genau zwei Wechsel auf der Startseite.
 * Die Kante wandert entlang ihrer eigenen Richtung, der Winkel bleibt konstant,
 * docs/04, Szene `arcToDay`. Die Lichtlinie liegt dabei immer auf der Kante.
 */
export const arcScene: Scene = ({ gsap, ScrollTrigger }) => {
  const arcs = Array.from(document.querySelectorAll<HTMLElement>('[data-arc]'));
  if (arcs.length === 0) return;

  const triggers = arcs.map((arc) => {
    const surface = arc.querySelector<HTMLElement>('[data-arc-surface]');
    const edge = arc.querySelector<HTMLElement>('[data-arc-edge]');
    const toDay = arc.dataset.arc === 'day';
    const run = () => parseFloat(getComputedStyle(arc).getPropertyValue('--arc-run')) || 243;

    return ScrollTrigger.create({
      trigger: arc,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const t = gsap.utils.clamp(0, 1, (self.progress - 0.18) / 0.5);
        const r = run();
        // Ruhelage der Kante: Knick bei `run`. Davor liegt sie um die Bandbreite weiter rechts.
        const k = r + (1 - t) * (arc.offsetWidth + r);
        if (surface) {
          surface.style.clipPath = toDay
            ? `polygon(100% 100%, 0% 100%, ${(k - r).toFixed(0)}px 100%, ${k.toFixed(0)}px 0%, 100% 0%)`
            : `polygon(100% 0%, 0% 0%, ${(k - r).toFixed(0)}px 0%, ${k.toFixed(0)}px 100%, 100% 100%)`;
        }
        if (edge) {
          edge.style.transform = `translateX(${(k - r).toFixed(0)}px) rotate(${toDay ? '-38deg' : '38deg'})`;
          edge.style.opacity = String(gsap.utils.clamp(0, 1, t * 2));
        }
      },
    });
  });

  return () => triggers.forEach((t) => t.kill());
};
