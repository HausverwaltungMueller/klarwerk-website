import {
  BoxGeometry, BufferGeometry, CylinderGeometry, Float32BufferAttribute, InstancedMesh, Matrix4, Mesh, Group, Object3D,
} from 'three';
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

/** Fensteroeffnungen: Position an der Traufseite, gleiche Groesse fuer beide. */
const WINDOWS: Array<[number, number]> = [[-2.1, 2.4], [2.1, 2.4]];
const WIN_W = 1.6;
const WIN_H = 1.8;
const FRAME_T = 0.09;
/** Laibungstiefe, wie eine verputzte Wand mit Aussendaemmung. */
const REVEAL_D = 0.16;

/** Ein Einheitswuerfel, anisotrop skaliert und platziert. Reduziert Rahmen- und
 *  Laibungsstreifen auf je einen Drawcall pro InstancedMesh. */
function place(dummy: Object3D, x: number, y: number, z: number, sx: number, sy: number, sz: number): Matrix4 {
  dummy.position.set(x, y, z);
  dummy.scale.set(sx, sy, sz);
  dummy.updateMatrix();
  return dummy.matrix.clone();
}

/** Wände, Giebel, Fenster mit Rahmen und Laibung, Tür, Kamin, Dachrand und Boden. */
export function buildHouse(m: RoofMaterials): Group {
  const g = new Group();
  const dummy = new Object3D();
  const unit = new BoxGeometry(1, 1, 1);

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

  // Fenster: die Oeffnung liegt als Laibung in der Wand, das Glas sitzt
  // zurueckversetzt, der Rahmen darauf. Eine Andeutung von Tiefe ohne Schattenkarte,
  // wie die gebackene Bodenverdunkelung an anderer Stelle der Szene.
  const glass = new BoxGeometry(WIN_W, WIN_H, 0.05);
  const frame = new InstancedMesh(unit, m.rahmen, WINDOWS.length * 4);
  const reveal = new InstancedMesh(unit, m.laibung, WINDOWS.length * 4);
  let fi = 0;
  let ri = 0;
  for (const [x, y] of WINDOWS) {
    const glassMesh = new Mesh(glass, m.fenster);
    glassMesh.position.set(x, y, D / 2 - REVEAL_D);
    g.add(glassMesh);

    // Rahmen: vier schmale Streifen, buendig mit dem Glas
    const fz = D / 2 - REVEAL_D + 0.03;
    frame.setMatrixAt(fi++, place(dummy, x, y + WIN_H / 2 + FRAME_T / 2, fz, WIN_W + FRAME_T * 2, FRAME_T, 0.05));
    frame.setMatrixAt(fi++, place(dummy, x, y - WIN_H / 2 - FRAME_T / 2, fz, WIN_W + FRAME_T * 2, FRAME_T, 0.05));
    frame.setMatrixAt(fi++, place(dummy, x - WIN_W / 2 - FRAME_T / 2, y, fz, FRAME_T, WIN_H + FRAME_T * 2, 0.05));
    frame.setMatrixAt(fi++, place(dummy, x + WIN_W / 2 + FRAME_T / 2, y, fz, FRAME_T, WIN_H + FRAME_T * 2, 0.05));

    // Laibung: die vier Wandflaechen der Oeffnung, von der Aussenwand zur Fensterebene
    const rz = D / 2 - REVEAL_D / 2;
    reveal.setMatrixAt(ri++, place(dummy, x, y + WIN_H / 2 + 0.02, rz, WIN_W + 0.04, 0.04, REVEAL_D));
    reveal.setMatrixAt(ri++, place(dummy, x, y - WIN_H / 2 - 0.02, rz, WIN_W + 0.04, 0.04, REVEAL_D));
    reveal.setMatrixAt(ri++, place(dummy, x - WIN_W / 2 - 0.02, y, rz, 0.04, WIN_H, REVEAL_D));
    reveal.setMatrixAt(ri++, place(dummy, x + WIN_W / 2 + 0.02, y, rz, 0.04, WIN_H, REVEAL_D));
  }
  frame.instanceMatrix.needsUpdate = true;
  reveal.instanceMatrix.needsUpdate = true;
  g.add(frame, reveal);

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

  // Traufbrett: schliesst die Dachkante an der Traufe ab und macht den
  // dokumentierten Ueberstand (EAVE_Z, ROOF_W) als Bauteil lesbar.
  const fascia = new Mesh(new BoxGeometry(ROOF_W, 0.16, 0.05), m.holz);
  fascia.position.set(0, EAVE_Y - 0.09, EAVE_Z - 0.01);
  g.add(fascia);

  // Regenrinne aus Titanzink, direkt unter dem Traufbrett. Rundprofil,
  // niedrige Segmentzahl, Materialwiederverwendung von der Montageschiene.
  const rinne = new Mesh(new CylinderGeometry(0.06, 0.06, ROOF_W - 0.1, 8), m.schiene);
  rinne.rotation.z = Math.PI / 2;
  rinne.position.set(0, EAVE_Y - 0.24, EAVE_Z - 0.05);
  g.add(rinne);

  // Ortgang: Windbretter an beiden Giebelkanten. Eigener Rahmen mit derselben
  // Transformation wie die Dachflaeche in heroScene.ts (Ursprung an der Traufe,
  // lokal y Richtung First), damit die Bretter exakt in der Dachebene liegen
  // statt frei im Raum zu stehen.
  const vergeFrame = new Group();
  vergeFrame.position.set(0, EAVE_Y, EAVE_Z);
  vergeFrame.rotation.x = -(Math.PI / 2 - PITCH);
  g.add(vergeFrame);
  for (const sign of [1, -1]) {
    const board = new Mesh(new BoxGeometry(0.05, SLOPE_LEN, 0.16), m.holz);
    board.position.set(sign * (ROOF_W / 2 - 0.03), SLOPE_LEN / 2, 0.05);
    vergeFrame.add(board);
  }

  // Boden
  const boden = new Mesh(new BoxGeometry(160, 0.1, 160), m.boden);
  boden.position.y = -0.06;
  g.add(boden);

  return g;
}
