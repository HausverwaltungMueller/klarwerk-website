import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';

/** Materialwerte aus docs/02, Abschnitt 14.3. Keine externen Texturen. */
export const materials = () => ({
  ziegel: new MeshStandardMaterial({ color: 0x8f5340, roughness: 0.78, metalness: 0 }),
  deck: new MeshStandardMaterial({ color: 0x34312c, roughness: 0.95, metalness: 0 }),
  latte: new MeshStandardMaterial({ color: 0x96845a, roughness: 0.85, metalness: 0 }),
  wand: new MeshStandardMaterial({ color: 0xc4beb2, roughness: 0.92, metalness: 0 }),
  holz: new MeshStandardMaterial({ color: 0x6c6458, roughness: 0.85, metalness: 0 }),
  kamin: new MeshStandardMaterial({ color: 0x785448, roughness: 0.9, metalness: 0 }),
  fenster: new MeshStandardMaterial({ color: 0x252b33, roughness: 0.28, metalness: 0.12 }),
  schiene: new MeshStandardMaterial({ color: 0x9498a0, roughness: 0.35, metalness: 0.9 }),
  boden: new MeshStandardMaterial({ color: 0x2c2d27, roughness: 1, metalness: 0 }),
  glas: new MeshPhysicalMaterial({
    color: 0x16181d, roughness: 0.16, metalness: 0.05,
    clearcoat: 1, clearcoatRoughness: 0.1,
  }),
});

export type RoofMaterials = ReturnType<typeof materials>;
