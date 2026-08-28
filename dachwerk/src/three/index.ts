import type { MotionProfile } from '@/motion/motionProfile';
import type { HeroSceneHandle, HeroPhaseLabel } from '@/motion/heroBus';
import { setHeroScene } from '@/motion/heroBus';

/**
 * Einstieg in die 3D-Schicht. Wird ausschließlich dynamisch importiert und nur,
 * wenn der Canvas sich im Blickfeld befindet und das Profil es erlaubt.
 * Ohne WebGL bleibt die Seite unverändert nutzbar.
 */
export async function mountHeroScene(
  canvas: HTMLCanvasElement,
  opts: { profile: MotionProfile; onPhase?: (s: { label: HeroPhaseLabel; late: boolean }) => void },
): Promise<HeroSceneHandle> {
  const { mountHeroScene: mount } = await import('./heroScene');
  const handle = mount(canvas, opts);
  if (!handle) {
    return { setProgress: () => undefined, resize: () => undefined, dispose: () => undefined };
  }
  setHeroScene(handle);
  return {
    ...handle,
    dispose: () => { setHeroScene(null); handle.dispose(); },
  };
}

/**
 * Rendert einzelne Zustaende der Hero-Szene als Standbilder.
 * Fuer den mobilen Pfad: kein Pin, keine laufende Szene, drei feste Bilder.
 * Es entsteht genau ein WebGL-Kontext, der danach freigegeben wird.
 */
export async function renderHeroStills(
  width: number,
  height: number,
  progresses: number[],
  profile: MotionProfile,
): Promise<string[]> {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.position = 'fixed';
  canvas.style.left = '-10000px';
  canvas.style.top = '0';
  document.body.appendChild(canvas);

  const out: string[] = [];
  try {
    const { mountHeroScene: mount } = await import('./heroScene');
    const handle = mount(canvas, { profile });
    if (!handle) return out;
    for (const p of progresses) {
      handle.setProgress(p);
      // Die Renderschleife zeichnet erst im naechsten Rahmen
      await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
      out.push(canvas.toDataURL('image/webp', 0.82));
    }
    handle.dispose();
  } catch {
    return out;
  } finally {
    canvas.remove();
  }
  return out;
}
