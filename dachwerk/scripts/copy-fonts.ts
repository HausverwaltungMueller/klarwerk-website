/**
 * Kopiert die benoetigten woff2-Dateien aus den Fontsource-Paketen nach public/fonts.
 * Selbst gehostet, kein CDN: Ladezeit, Renderstabilitaet und Datenschutz.
 * Nur die tatsaechlich benoetigten Schnitte, latin und latin-ext.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'public/fonts');
mkdirSync(out, { recursive: true });

const files: Array<[string, string]> = [
  ['node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2', 'instrument-serif-400.woff2'],
  ['node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2', 'instrument-serif-400-italic.woff2'],
  ['node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-ext-400-normal.woff2', 'instrument-serif-400-ext.woff2'],
  ['node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'inter-var.woff2'],
  ['node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2', 'inter-var-ext.woff2'],
];

for (const [from, to] of files) {
  const src = resolve(root, from);
  const dst = resolve(out, to);
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  console.log('kopiert:', to);
}
