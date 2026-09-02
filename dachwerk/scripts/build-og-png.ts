/**
 * PNG-Fallback fuer das Open-Graph-Bild, docs/07-PHASE-8-UMSETZUNG.md, offener
 * Punkt 4: "Fuer Plattformen, die kein SVG lesen, ist eine PNG-Variante noetig."
 *
 * Kein neues Bildmotiv: dieselbe Dach-Linie und dieselben Token-Farben wie
 * public/og/dachwerk.svg, nur auf 1200x630 gebracht und um die Wortmarke aus
 * content/company.ts ergaenzt, wie im Slot OBJ-03 dokumentiert
 * ("Hero-Ausschnitt mit Wortmarke"). Sobald echtes Hero-Bildmaterial vorliegt
 * (docs/03-BILDBRIEFINGS.md, OBJ-03), ersetzt dieses Skript eine echte Fotomontage.
 */
import { statSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#111211"/>
  <g transform="translate(120,157)">
    <path d="M0 240 190 88l190 152" fill="none" stroke="#9A6950" stroke-width="16" stroke-linecap="square"/>
    <path d="M74 288h232" fill="none" stroke="#D5B45A" stroke-width="12" stroke-linecap="square"/>
  </g>
  <text x="120" y="520" font-family="Inter, Helvetica, Arial, sans-serif" font-size="64" font-weight="600"
        letter-spacing="10" fill="#F3F0E9">DACHWERK</text>
  <text x="120" y="562" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="500"
        letter-spacing="2" fill="#C9C1B4">HILDESHEIM &#183; DACH &amp; ENERGIE</text>
</svg>
`.trim();

const outDir = resolve(import.meta.dirname, '../public/og');
const outFile = resolve(outDir, 'dachwerk.png');
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outFile);

const size = statSync(outFile).size;
console.log(`dachwerk.png geschrieben, ${W}x${H}, ${(size / 1024).toFixed(1)} kB`);
