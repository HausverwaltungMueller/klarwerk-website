import type { Scene } from '../gsapContext';

/** Horizontal geführter Prozessstreifen auf dem Desktop, vertikal auf Mobil. */
export const processScene: Scene = ({ ScrollTrigger, profile }) => {
  if (profile !== 'full') return;
  const section = document.getElementById('ablauf');
  const track = document.querySelector<HTMLElement>('[data-process-track]');
  const progress = document.querySelector<HTMLElement>('[data-process-progress]');
  if (!section || !track) return;

  const distance = () => Math.max(0, track.scrollWidth - (track.parentElement?.clientWidth ?? 0));

  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: () => `+=${distance() + window.innerHeight * 0.6}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      track.style.transform = `translateX(${(-distance() * self.progress).toFixed(1)}px)`;
      if (progress) progress.style.width = `${(self.progress * 100).toFixed(1)}%`;
    },
  });

  return () => trigger.kill();
};
