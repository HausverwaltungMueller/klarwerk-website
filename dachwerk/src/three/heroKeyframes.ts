/**
 * Kamerafahrt und Interpolation der Hero-Sequenz.
 * Reine Daten und reine Funktionen, getrennt von der Szene, damit `heroScene.ts`
 * unter der Zeilengrenze aus docs/06, Abschnitt 21 bleibt.
 */
export type Keyframe = {
  p: number; dist: number; height: number; target: [number, number, number];
  az: number; sunAz: number; sun: [number, number, number];
};

/** Kamera-Keyframes aus docs/04, Teil E.2, im Prototyp erprobt. */
const KEYS: Keyframe[] = [
  { p: 0.0, dist: 34, height: 1.6, target: [0, 4.0, 0], az: 40, sunAz: 96, sun: [1.0, 0.886, 0.741] },
  { p: 0.25, dist: 22, height: 2.4, target: [0, 6.4, 1.4], az: 40, sunAz: 104, sun: [1.0, 0.878, 0.729] },
  { p: 0.38, dist: 17.5, height: 8.4, target: [0, 6.5, 1.7], az: 38, sunAz: 112, sun: [1.0, 0.867, 0.706] },
  { p: 0.5, dist: 13.5, height: 10.2, target: [-0.3, 6.5, 1.9], az: 34, sunAz: 124, sun: [1.0, 0.847, 0.675] },
  { p: 0.62, dist: 13.5, height: 10.8, target: [0.4, 6.5, 1.9], az: 44, sunAz: 140, sun: [1.0, 0.82, 0.635] },
  { p: 0.78, dist: 16.5, height: 9.6, target: [0.2, 6.5, 1.7], az: 42, sunAz: 168, sun: [1.0, 0.776, 0.58] },
  { p: 1.0, dist: 30, height: 1.9, target: [0, 4.2, 0], az: 40, sunAz: 214, sun: [1.0, 0.729, 0.522] },
];

export const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function frameAt(p: number): Keyframe {
  let i = 0;
  while (i < KEYS.length - 2 && p > (KEYS[i + 1]?.p ?? 1)) i++;
  const a = KEYS[i]!;
  const b = KEYS[i + 1]!;
  const t = easeInOut(clamp((p - a.p) / (b.p - a.p)));
  return {
    p,
    dist: lerp(a.dist, b.dist, t),
    height: lerp(a.height, b.height, t),
    target: [lerp(a.target[0], b.target[0], t), lerp(a.target[1], b.target[1], t), lerp(a.target[2], b.target[2], t)],
    az: lerp(a.az, b.az, t),
    sunAz: lerp(a.sunAz, b.sunAz, t),
    sun: [lerp(a.sun[0], b.sun[0], t), lerp(a.sun[1], b.sun[1], t), lerp(a.sun[2], b.sun[2], t)],
  };
}
