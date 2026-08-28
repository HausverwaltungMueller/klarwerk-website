export type MotionProfile = 'full' | 'mobile' | 'low' | 'reduced';

/**
 * Ein Modul entscheidet, wie viel Bewegung erlaubt ist. Jede Szene fragt nur das
 * Profil ab, nie die Medienabfrage direkt. Damit ist Barrierefreiheit strukturell.
 * Der Umschaltpunkt 900px steht hier und nur hier.
 */
export const BREAKPOINT_CHOREO = 900;

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

export function motionProfile(): MotionProfile {
  if (typeof window === 'undefined') return 'reduced';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'reduced';

  const nav = navigator as NavigatorWithHints;
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  const saveData = nav.connection?.saveData === true;
  if (saveData || cores <= 2 || memory <= 2) return 'low';

  return window.innerWidth >= BREAKPOINT_CHOREO ? 'full' : 'mobile';
}

export const isDesktopChoreo = (p: MotionProfile): boolean => p === 'full';
export const allowsThree = (p: MotionProfile): boolean => p === 'full' || p === 'mobile';
