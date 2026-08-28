import type { Scene } from '../gsapContext';

/** Explosionsfaktor der Schnittzeichnung, danach wieder geschlossen. */
export const layersScene: Scene = ({ gsap, ScrollTrigger }) => {
  const box = document.querySelector<HTMLElement>('[data-layer-drawing]');
  if (!box) return;

  const offsets = [0, -10, -18, -26, -38, -52, -66];
  const groups = Array.from({ length: 7 }, (_, i) => ({
    layer: box.querySelector<SVGGElement>(`[data-layer="${i + 1}"]`),
    leader: box.querySelector<SVGPathElement>(`[data-leader="${i + 1}"]`),
    label: box.querySelector<SVGTextElement>(`[data-leader-label="${i + 1}"]`),
    offset: offsets[i] ?? 0,
  }));

  const trigger = ScrollTrigger.create({
    trigger: box,
    start: 'top 85%',
    end: 'bottom 20%',
    scrub: 1,
    onUpdate: (self) => {
      const e = Math.sin(gsap.utils.clamp(0, 1, (self.progress - 0.1) / 0.7) * Math.PI);
      for (const g of groups) {
        const y = (g.offset * e).toFixed(1);
        g.layer?.setAttribute('transform', `translate(0,${y})`);
        const half = (g.offset * e * 0.5).toFixed(1);
        g.leader?.setAttribute('transform', `translate(0,${half})`);
        g.label?.setAttribute('transform', `translate(0,${half})`);
      }
    },
  });

  return () => trigger.kill();
};
