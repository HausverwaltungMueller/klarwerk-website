import { BoxGeometry, BufferGeometry, Float32BufferAttribute, Mesh, Group } from 'three';
import type { RoofMaterials } from '../materials/roof';

export const PITCH = (38 * Math.PI) / 180;
export const W = 9;
export const D = 7;
export const HW = 5.5;
export const OVER = 0.4;
export const EAVE_Z = D / 2 + OVER;
export const EAVE_Y = HW - OVER * Math.tan(PITCH);
export const RIDGE_Y = HW + (D / 2) * Math.tan(PITCH);
export const SLOPE_LEN = Math.sqrt((RIDGE_Y - EAVE_Y) ** 2 + EAVE_Z ** 2);
export const ROOF_W = W + 0.6;

/** Wände, Giebel, Fenster, Tür, Kamin und Boden. Alles im Code erzeugt. */
export function buildHouse(m: RoofMaterials): Group {
  const g = new Group();

  const walls = new Mesh(new BoxGeometry(W, HW, D), m.wand);
  walls.position.y = HW / 2;
  g.add(walls);

  // Giebeldreiecke an beiden Seiten
  for (const sign of [1, -1]) {
    const tri = new BufferGeometry();
    const x = (sign * W) / 2;
    tri.setAttribute('position', new Float32BufferAttribute(
      sign > 0
        ? [x, HW, D / 2, x, HW, -D / 2, x, RIDGE_Y, 0]
        : [x, HW, -D / 2, x, HW, D / 2, x, RIDGE_Y, 0],
      3,
    ));
    tri.computeVertexNormals();
    g.add(new Mesh(tri, m.holz));
  }

  // Fenster und Tür an der Traufseite
  const win = new BoxGeometry(1.6, 1.8, 0.08);
  for (const x of [-2.1, 2.1]) {
    const w = new Mesh(win, m.fenster);
    w.position.set(x, 2.4, D / 2 + 0.02);
    g.add(w);
  }
  const door = new Mesh(new BoxGeometry(1.1, 2.3, 0.1), m.holz);
  door.position.set(0, 1.15, D / 2 + 0.02);
  g.add(door);

  // Kamin
  const kamin = new Mesh(new BoxGeometry(0.8, RIDGE_Y - HW + 1.3, 0.8), m.kamin);
  kamin.position.set(2.5, (HW + 0.4 + RIDGE_Y + 0.9) / 2, -0.05);
  g.add(kamin);

  // Rückseitige Dachfläche, geschlossen
  // Rueckseitige Dachflaeche: vom First nach hinten unten. Die lokale Tiefenachse
  // muss auf (0, -sin PITCH, -cos PITCH) zeigen, das ergibt PI minus PITCH.
  const back = new Mesh(new BoxGeometry(ROOF_W, 0.12, SLOPE_LEN), m.ziegel);
  back.position.set(0, (EAVE_Y + RIDGE_Y) / 2, -EAVE_Z / 2);
  back.rotation.x = Math.PI - PITCH;
  g.add(back);

  // Boden
  const boden = new Mesh(new BoxGeometry(160, 0.1, 160), m.boden);
  boden.position.y = -0.06;
  g.add(boden);

  return g;
}
