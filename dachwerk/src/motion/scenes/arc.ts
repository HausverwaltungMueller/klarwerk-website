import type { Scene } from '../gsapContext';

/** Flächenwechsel über die 38-Grad-Kante. Genau zwei Wechsel auf der Startseite. */
export const arcScene: Scene = ({ gsap, ScrollTrigger }) => {
  const arcs = Array.from(document.querySelectorAll<HTMLElement>('[data-arc]'));
  if (arcs.length === 0) return;

  const triggers = arcs.map((arc) => {
    const surface = arc.querySelector<HTMLElement>('[data-arc-surface]');
    const edge = arc.querySelector<HTMLElement>('[data-arc-edge]');
    const toDay = arc.dataset.arc === 'day';

    return ScrollTrigger.create({
      trigger: arc,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const t = gsap.utils.clamp(0, 1, (self.progress - 0.18) / 0.5);
        const h = arc.offsetHeight;
        const run = h / Math.tan((38 * Math.PI) / 180);
        const top = (1 - t) * 100;
        if (surface) {
          surface.style.clipPath = toDay
            ? `polygon(0% 100%, 0% ${top.toFixed(1)}%, ${run.toFixed(0)}px 0%, 100% 0%, 100% 100%)`
            : `polygon(0% 0%, 100% 0%, 100% ${(100 - top).toFixed(1)}%, ${run.toFixed(0)}px 100%, 0% 100%)`;
        }
        if (edge) {
          edge.style.transform = `translateY(${((top / 100) * h).toFixed(1)}px) rotate(-38deg)`;
          edge.style.opacity = String(gsap.utils.clamp(0, 1, t * 2) * (1 - gsap.utils.clamp(0, 1, (t - 0.85) / 0.15)));
        }
      },
    });
  });

  return () => triggers.forEach((t) => t.kill());
};
