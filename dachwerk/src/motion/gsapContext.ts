import type { MotionProfile } from './motionProfile';

type Gsap = typeof import('gsap')['gsap'];
type ScrollTriggerType = typeof import('gsap/ScrollTrigger')['ScrollTrigger'];

let cached: { gsap: Gsap; ScrollTrigger: ScrollTriggerType } | null = null;

/** Laedt GSAP und ScrollTrigger einmalig und registriert das Plugin. */
export async function loadGsap() {
  if (cached) return cached;
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out', duration: 0.64 });
  cached = { gsap, ScrollTrigger };
  return cached;
}

export type SceneApi = {
  gsap: Gsap;
  ScrollTrigger: ScrollTriggerType;
  profile: MotionProfile;
};

/** Eine Szene ist eine Funktion, die ihre Aufräumarbeit selbst zurückgibt. */
export type Scene = (api: SceneApi) => void | (() => void);
