import type { Scene } from '../gsapContext';

/**
 * Zwei Materialflächen fahren gegenläufig auseinander, das Brückenwort wird
 * freigelegt, danach schließen sich die Flächen hinter dem Wort.
 * Das dramaturgische Zentrum der Startseite.
 */
export const splitScene: Scene = ({ gsap, ScrollTrigger, profile }) => {
  if (profile !== 'full') return;
  const section = document.getElementById('dach-und-energie');
  const left = document.querySelector<HTMLElement>('[data-split="left"]');
  const right = document.querySelector<HTMLElement>('[data-split="right"]');
  const word = document.querySelector<HTMLElement>('[data-bridge-word]');
  if (!section || !left || !right || !word) return;

  const ease = gsap.parseEase('power2.inOut');

  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.8,
    onUpdate: (self) => {
      const p = self.progress;
      const open = ease(gsap.utils.clamp(0, 1, p / 0.62));
      const close = ease(gsap.utils.clamp(0, 1, (p - 0.72) / 0.28));
      const amt = open * (1 - close * 0.92);
      left.style.transform = `translateX(${(-amt * 8.5).toFixed(2)}%)`;
      right.style.transform = `translateX(${(amt * 8.5).toFixed(2)}%)`;

      const b = gsap.utils.clamp(0, 1, (p - 0.3) / 0.22);
      word.style.opacity = String(b);
      word.style.transform = `translateY(${((1 - b) * 14).toFixed(1)}px)`;
    },
  });

  return () => trigger.kill();
};
