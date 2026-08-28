import type { Scene } from '../gsapContext';
import { getHeroScene } from '../heroBus';

/** Himmelsfarben entlang des Lichtbogens, Morgen bis Nachmittag. */
const sky: Array<[number, string, string]> = [
  [0.0, '#1b2431', '#3b3325'],
  [0.38, '#222b35', '#443a2b'],
  [0.62, '#272d33', '#4c3e2c'],
  [1.0, '#2c2b2c', '#553f26'],
];

function skyAt(p: number): [string, string] {
  let i = 0;
  while (i < sky.length - 2 && p > (sky[i + 1]?.[0] ?? 1)) i++;
  const a = sky[i]!;
  return [a[1], a[2]];
}

/**
 * Hero-Sequenz. Das Pinnen macht CSS mit position sticky, GSAP treibt den
 * Fortschritt der Szene und die beiden Textzustände. 320 Prozent Viewporthöhe.
 */
export const heroScene: Scene = ({ gsap, ScrollTrigger, profile }) => {
  const section = document.getElementById('hero');
  const stage = document.querySelector<HTMLElement>('[data-hero-stage]');
  const text = document.querySelector<HTMLElement>('[data-hero-text]');
  const closing = document.querySelector<HTMLElement>('[data-hero-closing]');
  if (!section || !stage) return;

  const desktop = profile === 'full';

  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate: (self) => {
      const p = self.progress;
      getHeroScene()?.setProgress(p);

      const [a, b] = skyAt(p);
      stage.style.setProperty('--sky-a', a);
      stage.style.setProperty('--sky-b', b);

      if (!desktop) return;

      // Erster Textzustand weicht, zweiter tritt am Ende ein
      const fade = gsap.utils.clamp(0, 1, (p - 0.08) / 0.1);
      if (text) {
        text.style.opacity = String(1 - fade);
        text.style.transform = `translateY(calc(-50% - ${(fade * 46).toFixed(1)}px))`;
        text.style.pointerEvents = fade > 0.6 ? 'none' : 'auto';
      }
      const two = gsap.utils.clamp(0, 1, (p - 0.885) / 0.07);
      if (closing) {
        closing.style.opacity = String(two);
        closing.style.transform = `translateY(calc(-50% + ${((1 - two) * 22).toFixed(1)}px))`;
        closing.style.pointerEvents = two > 0.6 ? 'auto' : 'none';
      }
    },
  });

  return () => trigger.kill();
};
