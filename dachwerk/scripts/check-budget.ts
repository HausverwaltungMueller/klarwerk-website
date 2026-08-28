/**
 * Prueft die Bundlegroessen gegen das Budget aus docs/06, Abschnitt 16.
 * Laeuft nach dem Build gegen dist/assets.
 */
import { gzipSync } from 'node:zlib';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const dir = resolve(import.meta.dirname, '../dist/assets');
const kb = (n: number) => n / 1024;

type Row = { datei: string; gz: number };
const rows: Row[] = readdirSync(dir)
  .filter((f) => f.endsWith('.js') || f.endsWith('.css'))
  .map((f) => ({ datei: f, gz: kb(gzipSync(readFileSync(resolve(dir, f))).length) }));

const sum = (pred: (r: Row) => boolean) => rows.filter(pred).reduce((a, r) => a + r.gz, 0);

const kritisch = sum((r) => !r.datei.startsWith('three') && !r.datei.startsWith('gsap') && !r.datei.startsWith('heroScene'));
const gsap = sum((r) => r.datei.startsWith('gsap'));
const three = sum((r) => r.datei.startsWith('three') || r.datei.startsWith('heroScene'));

type Limit = { name: string; wert: number; max: number };
const limits: Limit[] = [
  { name: 'HTML, CSS und kritisches JS', wert: kritisch, max: 120 },
  { name: 'GSAP mit ScrollTrigger', wert: gsap, max: 55 },
  { name: 'Three.js-Chunk inklusive Szene', wert: three, max: 180 },
];

console.log('Bundlegrößen, komprimiert:\n');
for (const r of rows.sort((a, b) => b.gz - a.gz)) {
  console.log(` ${r.gz.toFixed(1).padStart(7)} kB  ${r.datei}`);
}
console.log('');

let failed = 0;
for (const l of limits) {
  const ok = l.wert <= l.max;
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${l.wert.toFixed(1).padStart(6)} kB von ${l.max} kB  ${l.name}`);
}

// Groesse der ausgelieferten HTML-Dateien und Schriften
const html = statSync(resolve(dir, '..', 'index.html')).size;
console.log(`\nStartseite als HTML: ${kb(html).toFixed(1)} kB unkomprimiert, ${kb(gzipSync(readFileSync(resolve(dir, '..', 'index.html'))).length).toFixed(1)} kB komprimiert`);

if (failed > 0) { console.error(`\n${failed} Budgetgrenzen überschritten.`); process.exit(1); }
console.log('\nAlle Budgetgrenzen eingehalten.');
