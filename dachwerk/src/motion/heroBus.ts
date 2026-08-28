export type HeroPhaseLabel = 'flaeche' | 'material' | 'unterkonstruktion' | 'energie' | null;

export type HeroSceneHandle = {
  setProgress: (p: number) => void;
  resize: () => void;
  dispose: () => void;
};

let current: HeroSceneHandle | null = null;

/** Kleiner Bus, damit die GSAP-Szene die 3D-Szene treiben kann,
 *  ohne dass die Sektion die Motion-Schicht kennen muss. */
export const setHeroScene = (h: HeroSceneHandle | null): void => { current = h; };
export const getHeroScene = (): HeroSceneHandle | null => current;
