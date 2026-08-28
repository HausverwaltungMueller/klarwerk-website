/**
 * Bild-Pipeline. Erzeugt aus je einer Quelldatei alle Ableitungen der Slot-Registry
 * als AVIF und WebP, entfernt Metadaten und schreibt die Herkunft nach
 * public/img/QUELLEN.md.
 *
 * sharp ist absichtlich keine feste Abhaengigkeit, solange keine Bilder vorliegen.
 * Sobald die ersten Dateien geliefert sind: npm i -D sharp, dann dieses Skript.
 *
 * Quellen liegen unter assets-src/<slot-id>.<jpg|png>, Ziel ist public/img/.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { slots } from '../src/content/slots';

const root = resolve(import.meta.dirname, '..');
const srcDir = resolve(root, 'assets-src');
const outDir = resolve(root, 'public/img');

const widthsDesktop = [2560, 1920, 1280];
const widthsMobile = [1200, 828];

if (!existsSync(srcDir)) {
  console.log('Kein Ordner assets-src gefunden. Es liegen noch keine Bilder vor.');
  console.log('Alle Bildplätze rendern bis dahin die gestaltete Materialfläche mit Kennung.');
  process.exit(0);
}

type SharpFn = (typeof import('sharp'))['default'];
let sharp: SharpFn | undefined;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('sharp ist nicht installiert. Bitte ausführen: npm i -D sharp');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const dateien = readdirSync(srcDir).filter((f) => /\.(jpe?g|png|tiff?)$/i.test(f));
const protokoll: string[] = [
  '# Bildquellen',
  '',
  'Erzeugte oder lizenzierte Herkunft wird hier festgehalten. Ein erzeugtes Bild wird',
  'nie als Fotografie eines realen Projekts ausgegeben.',
  '',
  '| Slot | Datei | Art | Datum |',
  '| --- | --- | --- | --- |',
];

for (const datei of dateien) {
  const id = datei.replace(/\.[^.]+$/, '');
  const slot = Object.values(slots).find((s) => s.id === id);
  if (!slot) { console.warn('kein Slot zu', datei); continue; }

  for (const [suffix, widths] of [['d', widthsDesktop], ['m', widthsMobile]] as const) {
    for (const w of widths) {
      const base = resolve(outDir, `${id}-${suffix}-${w}`);
      const img = sharp(resolve(srcDir, datei)).resize({ width: w, withoutEnlargement: true }).withMetadata({});
      await img.clone().avif({ quality: 62, effort: 5 }).toFile(`${base}.avif`);
      await img.clone().webp({ quality: 78 }).toFile(`${base}.webp`);
    }
  }
  protokoll.push(`| ${id} | ${datei} | ${slot.klasse} | ${new Date().toISOString().slice(0, 10)} |`);
  console.log('aufbereitet:', id);
}

writeFileSync(resolve(outDir, 'QUELLEN.md'), protokoll.join('\n') + '\n', 'utf8');
console.log(`\n${dateien.length} Bilder aufbereitet. Danach in src/content/slots.ts das Feld file setzen.`);
