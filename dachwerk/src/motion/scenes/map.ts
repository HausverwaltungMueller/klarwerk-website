import type { Scene } from '../gsapContext';

/** Radien zeichnen sich, Orte erscheinen gestaffelt, maximal acht. */
export const mapScene: Scene = ({ gsap, ScrollTrigger }) => {
  const box = document.querySelector<HTMLElement>('[data-map]');
  if (!box) return;

  const rings = Array.from(box.querySelectorAll<SVGCircleElement>('[data-map-ring]'));
  const lines = box.querySelector<SVGGElement>('[data-map-lines]');
  const places = Array.from(box.querySelectorAll<SVGGElement>('[data-map-place]')).slice(0, 8);

  rings.forEach((r) => {
    const len = 2 * Math.PI * Number(r.getAttribute('r') ?? '0');
    r.style.strokeDasharray = String(len);
    r.style.strokeDashoffset = String(len);
  });
  if (lines) { lines.style.strokeDasharray = '200'; lines.style.strokeDashoffset = '200'; }
  places.forEach((p) => { p.style.opacity = '0'; });

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power2.inOut', duration: 1.4 },
  });
  rings.forEach((r, i) => tl.to(r, { strokeDashoffset: 0 }, i * 0.22));
  if (lines) tl.to(lines, { strokeDashoffset: 0, duration: 1.2 }, 0.5);
  places.forEach((p, i) => tl.to(p, { opacity: 1, duration: 0.52, ease: 'power3.out' }, 0.4 + i * 0.11));

  const trigger = ScrollTrigger.create({
    trigger: box,
    start: 'top 82%',
    once: true,
    onEnter: () => tl.play(),
  });

  return () => { trigger.kill(); tl.kill(); };
};
