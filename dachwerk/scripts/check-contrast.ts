/**
 * Prueft alle Token-Paare gegen die WCAG-Kontrastformel. Bricht ab, wenn ein
 * Paar die in docs/02 festgelegte Schwelle unterschreitet. Damit haengt der
 * Kontrast nicht an Disziplin, sondern am Build. docs/06, Abschnitt 9.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const css = readFileSync(resolve(import.meta.dirname, '../src/styles/tokens.css'), 'utf8');

function token(name: string, block?: 'day'): string {
  const scope = block === 'day'
    ? css.slice(css.indexOf("[data-surface='day']"))
    : css.slice(0, css.indexOf("[data-surface='day']"));
  const m = new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`).exec(scope);
  if (!m || !m[1]) throw new Error(`Token nicht gefunden: ${name}${block ? ' (' + block + ')' : ''}`);
  return m[1];
}

const lum = (hex: string): number => {
  const v = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * (v[0] ?? 0) + 0.7152 * (v[1] ?? 0) + 0.0722 * (v[2] ?? 0);
};
const ratio = (a: string, b: string): number => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p) as [number, number];
  return (x + 0.05) / (y + 0.05);
};

type Check = { name: string; fg: string; bg: string; min: number };
const checks: Check[] = [
  { name: 'text-0 auf surface-0 (Nacht)', fg: token('text-0'), bg: token('surface-0'), min: 7 },
  { name: 'text-1 auf surface-0 (Nacht)', fg: token('text-1'), bg: token('surface-0'), min: 7 },
  { name: 'text-2 auf surface-0 (Nacht)', fg: token('text-2'), bg: token('surface-0'), min: 4.5 },
  { name: 'text-1 auf surface-1 (Nacht)', fg: token('text-1'), bg: token('surface-1'), min: 4.5 },
  { name: 'text-2 auf surface-2 (Nacht)', fg: token('text-2'), bg: token('surface-2'), min: 4.5 },
  { name: 'energie auf surface-0', fg: token('energie'), bg: token('surface-0'), min: 4.5 },
  { name: 'dach-text auf surface-0', fg: token('dach-text'), bg: token('surface-0'), min: 4.5 },
  { name: 'nature-text auf surface-0', fg: token('nature-text'), bg: token('surface-0'), min: 4.5 },
  { name: 'state-error auf surface-1', fg: token('state-error'), bg: token('surface-1'), min: 4.5 },
  { name: 'state-ok auf surface-1', fg: token('state-ok'), bg: token('surface-1'), min: 4.5 },
  { name: 'surface-0 auf energie (Button)', fg: token('surface-0'), bg: token('energie'), min: 7 },
  { name: 'dach als Flaeche auf surface-0', fg: token('dach'), bg: token('surface-0'), min: 3 },
  { name: 'text-0 auf surface-0 (Tag)', fg: token('text-0', 'day'), bg: token('surface-0', 'day'), min: 7 },
  { name: 'text-1 auf surface-0 (Tag)', fg: token('text-1', 'day'), bg: token('surface-0', 'day'), min: 4.5 },
  { name: 'text-2 auf surface-0 (Tag)', fg: token('text-2', 'day'), bg: token('surface-0', 'day'), min: 4.5 },
  { name: 'dach-text auf surface-0 (Tag)', fg: token('dach-text', 'day'), bg: token('surface-0', 'day'), min: 4.5 },
  { name: 'text-1 auf surface-1 (Tag)', fg: token('text-1', 'day'), bg: token('surface-1', 'day'), min: 4.5 },
  { name: 'text-2 auf surface-1 (Tag)', fg: token('text-2', 'day'), bg: token('surface-1', 'day'), min: 4.5 },
  { name: 'text-2 auf surface-2 (Tag)', fg: token('text-2', 'day'), bg: token('surface-2', 'day'), min: 4.5 },
  { name: 'text-2 auf surface-1 (Nacht)', fg: token('text-2'), bg: token('surface-1'), min: 4.5 },
];

let failed = 0;
for (const c of checks) {
  const r = ratio(c.fg, c.bg);
  const ok = r >= c.min;
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${r.toFixed(2)}:1 (min ${c.min}) ${c.name}`);
}

// Reines Schwarz und Weiss sind im Projekt nicht zulaessig
if (/#000000|#fff\b|#ffffff/i.test(css)) {
  console.error('FAIL reines Schwarz oder Weiss in den Tokens gefunden');
  failed++;
}

if (failed > 0) {
  console.error(`\n${failed} Kontrastprüfungen fehlgeschlagen.`);
  process.exit(1);
}
console.log(`\nAlle ${checks.length} Kontrastprüfungen bestanden.`);
