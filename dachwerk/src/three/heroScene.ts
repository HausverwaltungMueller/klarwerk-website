import {
  BoxGeometry, Color, DirectionalLight, Group, HemisphereLight, InstancedMesh, Matrix4, Object3D, Vector3,
} from 'three';
import type { MotionProfile } from '@/motion/motionProfile';
import type { HeroPhaseLabel, HeroSceneHandle } from '@/motion/heroBus';
import { createRenderContext } from './renderer';
import { materials } from './materials/roof';
import { buildHouse, EAVE_Y, EAVE_Z, PITCH, RIDGE_Y, ROOF_W, SLOPE_LEN } from './geometry/house';

type Keyframe = {
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

const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function frameAt(p: number): Keyframe {
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

export type HeroSceneOptions = {
  profile: MotionProfile;
  onPhase?: (state: { label: HeroPhaseLabel; late: boolean }) => void;
};

/**
 * Die Dachfläche als eigene Gruppe: lokal ist x die Traufenrichtung, y die Richtung
 * Traufe zu First und z die Flächennormale. Damit sind alle Instanzen zweidimensional
 * platzierbar und das Kippen ist eine Rotation um die lokale x-Achse.
 */
export function mountHeroScene(canvas: HTMLCanvasElement, opts: HeroSceneOptions): HeroSceneHandle | null {
  const { profile } = opts;
  const full = profile === 'full';

  let lostHandler: (() => void) | undefined;
  const ctx = createRenderContext(canvas, profile, () => lostHandler?.());
  if (!ctx) return null;

  const m = materials();
  ctx.scene.add(buildHouse(m));

  // Licht
  const sun = new DirectionalLight(0xffffff, 3.1);
  sun.position.set(12, 10, 10);
  ctx.scene.add(sun);
  ctx.scene.add(new HemisphereLight(0x93a3b8, 0x34302a, 0.62));

  // Dachgruppe
  const roof = new Group();
  roof.position.set(0, EAVE_Y, EAVE_Z);
  roof.rotation.x = -(Math.PI / 2 - PITCH);
  ctx.scene.add(roof);

  const ROWS = full ? 11 : 6;
  const COLS = full ? 13 : 8;
  const MROWS = full ? 4 : 3;
  const MCOLS = full ? 6 : 4;

  const tileW = ROOF_W / COLS;
  const tileL = SLOPE_LEN / ROWS;

  // Belegungsfeld
  const M_W = ROOF_W * 0.74;
  const M_U0 = (ROOF_W - M_W) / 2;
  const M_L = SLOPE_LEN * 0.62;
  const M_V0 = SLOPE_LEN * 0.18;

  // Dachschalung, sichtbar wenn Ziegel geöffnet sind
  const deck = new InstancedMesh(new BoxGeometry(ROOF_W, SLOPE_LEN, 0.06), m.deck, 1);
  deck.position.set(0, SLOPE_LEN / 2, 0.02);
  roof.add(deck);

  // Lattung
  const battens = new InstancedMesh(new BoxGeometry(ROOF_W - 0.4, 0.1, 0.06), m.latte, ROWS);
  battens.visible = false;
  roof.add(battens);
  {
    const dummy = new Object3D();
    for (let i = 0; i < ROWS; i++) {
      dummy.position.set(0, (i / ROWS) * SLOPE_LEN + tileL * 0.5, 0.06);
      dummy.updateMatrix();
      battens.setMatrixAt(i, dummy.matrix);
    }
    battens.instanceMatrix.needsUpdate = true;
  }

  // Ziegel als eine InstancedMesh
  const tiles = new InstancedMesh(new BoxGeometry(tileW - 0.03, tileL - 0.02, 0.05), m.ziegel, ROWS * COLS);
  roof.add(tiles);

  // Schienen
  const rails = new InstancedMesh(new BoxGeometry(M_W - 0.3, 0.05, 0.05), m.schiene, MROWS + 1);
  rails.visible = false;
  roof.add(rails);
  {
    const dummy = new Object3D();
    for (let i = 0; i <= MROWS; i++) {
      dummy.position.set(0, M_V0 + (i / MROWS) * M_L, 0.13);
      dummy.updateMatrix();
      rails.setMatrixAt(i, dummy.matrix);
    }
    rails.instanceMatrix.needsUpdate = true;
  }

  // Module
  const modW = M_W / MCOLS;
  const modL = M_L / MROWS;
  const modules = new InstancedMesh(new BoxGeometry(modW - 0.06, modL - 0.06, 0.04), m.glas, MROWS * MCOLS);
  modules.visible = false;
  roof.add(modules);

  const dummy = new Object3D();
  const hinge = new Matrix4();
  const rot = new Matrix4();
  const back = new Matrix4();
  const scale = new Matrix4();
  const sunColor = new Color();

  let phaseLabel: HeroPhaseLabel = null;
  let late = false;

  const setProgress = (p: number) => {
    const f = frameAt(p);
    // Auf schmalen Flaechen mehr Abstand, damit das Haus vollstaendig im Bild bleibt
    if (!full) { f.dist *= 1.45; f.height *= 1.1; }

    // Voller Versatz in den weiten Phasen, kein Versatz in der Naehe
    const back0 = clamp((p - 0.86) / 0.12);
    const away = clamp((p - 0.14) / 0.18) * (1 - back0);
    ctx.setShift(1 - away);

    // Kamera
    const azr = (f.az * Math.PI) / 180;
    ctx.camera.position.set(Math.sin(azr) * f.dist, f.height, Math.cos(azr) * f.dist);
    ctx.camera.lookAt(new Vector3(f.target[0], f.target[1], f.target[2]));

    // Sonne
    const sa = (f.sunAz * Math.PI) / 180;
    const se = (26 * Math.PI) / 180;
    sun.position.set(Math.cos(sa) * Math.cos(se) * 30, Math.sin(se) * 30 + 6, Math.sin(sa) * Math.cos(se) * 30);
    sunColor.setRGB(f.sun[0], f.sun[1], f.sun[2]);
    sun.color.copy(sunColor);

    // Ziegel: nur das Belegungsfeld öffnen und danach zurückklappen,
    // weil die Anlage auf der Deckung sitzt und nicht an ihrer Stelle
    let anyOpen = false;
    for (let r = 0; r < ROWS; r++) {
      const rowMid = (r + 0.5) * tileL;
      const inBand = rowMid > M_V0 - 0.35 && rowMid < M_V0 + M_L + 0.35;
      const op = clamp((p - 0.495 - r * 0.008) / 0.055);
      const cl = clamp((p - 0.6 - r * 0.008) / 0.055);
      const kip = inBand ? easeInOut(op) - easeInOut(cl) : 0;
      if (kip > 0.02) anyOpen = true;
      const angle = clamp(kip) * ((46 * Math.PI) / 180);

      for (let c = 0; c < COLS; c++) {
        const x = -ROOF_W / 2 + (c + 0.5) * tileW;
        const yTop = (r + 1) * tileL;
        const yMid = yTop - tileL / 2;

        if (angle < 0.001) {
          dummy.position.set(x, yMid, 0.07);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.set(1, 1, 1);
          dummy.updateMatrix();
          tiles.setMatrixAt(r * COLS + c, dummy.matrix);
        } else {
          // Rotation um die Oberkante der Reihe
          hinge.makeTranslation(x, yTop, 0.07);
          rot.makeRotationX(-angle);
          back.makeTranslation(0, -tileL / 2, 0);
          const mtx = hinge.clone().multiply(rot).multiply(back);
          tiles.setMatrixAt(r * COLS + c, mtx);
        }
      }
    }
    tiles.instanceMatrix.needsUpdate = true;
    battens.visible = anyOpen;

    // Schienen und Module
    const railAmt = clamp((p - 0.585) / 0.05);
    rails.visible = railAmt > 0.02;
    const modAny = p > 0.62;
    modules.visible = modAny;
    if (modAny) {
      for (let r = 0; r < MROWS; r++) {
        const t = clamp((p - 0.625 - r * 0.026) / 0.07);
        const e = easeInOut(t);
        const lift = 0.185 + (1 - e) * 0.5;
        for (let c = 0; c < MCOLS; c++) {
          const x = -ROOF_W / 2 + M_U0 + (c + 0.5) * modW;
          const y = M_V0 + (r + 0.5) * modL;
          const s = clamp(e * 10);
          dummy.position.set(x, y, lift);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.set(1, 1, 1);
          dummy.updateMatrix();
          scale.makeScale(s, s, 1);
          tilesSafeSet(modules, r * MCOLS + c, dummy.matrix.clone().multiply(scale));
        }
      }
      modules.instanceMatrix.needsUpdate = true;
    }

    // Phasenlabel und Maßangabe
    const label: HeroPhaseLabel =
      p >= 0.885 ? null
        : p >= 0.62 ? 'energie'
          : p >= 0.5 ? 'unterkonstruktion'
            : p >= 0.38 ? 'material'
              : p >= 0.25 ? 'flaeche'
                : null;
    const nowLate = p > 0.6;
    if (label !== phaseLabel || nowLate !== late) {
      phaseLabel = label;
      late = nowLate;
      opts.onPhase?.({ label, late: nowLate });
    }

    ctx.invalidate();
  };

  setProgress(0);

  const handle: HeroSceneHandle = {
    setProgress,
    resize: () => ctx.resize(),
    dispose: () => ctx.dispose(),
  };

  lostHandler = () => { handle.setProgress = () => undefined; };

  return handle;
}

/** InstancedMesh.setMatrixAt ohne Bereichsfehler, falls die Instanzzahl knapp ist. */
function tilesSafeSet(mesh: InstancedMesh, index: number, matrix: Matrix4) {
  if (index < 0 || index >= mesh.count) return;
  mesh.setMatrixAt(index, matrix);
}

export const RIDGE_HEIGHT = RIDGE_Y;
