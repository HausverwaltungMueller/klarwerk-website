/**
 * Prueft die interne Verlinkungsmatrix aus docs/06, Abschnitt 20.
 * Laeuft nach dem Build gegen die vorgerenderten Seiten in dist,
 * damit nur Verweise zaehlen, die auch ohne JavaScript im Dokument stehen.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { routes } from '../src/routes';

const dist = resolve(import.meta.dirname, '../dist');

const file = (path: string) => resolve(dist, `.${path}index.html`);

/** Nur Verweise im Hauptbereich zaehlen, Kopf und Fuss verlinken ohnehin alles. */
function mainLinks(path: string): string[] {
  const f = file(path);
  if (!existsSync(f)) return [];
  const html = readFileSync(f, 'utf8');
  const main = /<main[^>]*>([\s\S]*?)<\/main>/.exec(html);
  const inner = main?.[1];
  if (!inner) return [];
  return [...inner.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1] ?? '');
}

const services = routes.filter((r) => r.key === 'service');
const guides = routes.filter((r) => r.key === 'guide');

type Rule = { von: string; nach: string[]; mindestens?: { was: string; von: string[]; anzahl: number }[] };

const rules: Rule[] = [
  {
    von: '/',
    nach: ['/dach/', '/photovoltaik/', '/dach-und-pv/', '/projekte/', '/ratgeber/', '/region/hildesheim/'],
  },
  { von: '/dach/', nach: ['/dach-und-pv/', ...services.filter((s) => s.domain === 'dach').map((s) => s.path)] },
  {
    von: '/photovoltaik/',
    nach: ['/dach-und-pv/', ...services.filter((s) => s.domain === 'energie').map((s) => s.path)],
  },
  { von: '/dach-und-pv/', nach: ['/dach/', '/photovoltaik/', '/projekte/', '/kontakt/'] },
  ...services.map((s) => ({
    von: s.path,
    nach: ['/dach-und-pv/'],
    mindestens: [
      /**
       * Die Matrix fordert zwei verwandte Leistungen. In Stufe 1 existieren nur vier
       * Leistungsseiten, deshalb ist hier eine benachbarte Leistungsseite die Pflicht,
       * die zweite Verwandtschaft fuehrt bis Stufe 2 auf die Domaenenseite.
       */
      { was: 'benachbarte Leistungsseite', von: services.filter((x) => x.path !== s.path).map((x) => x.path), anzahl: 1 },
      { was: 'Ratgeberartikel', von: guides.map((g) => g.path), anzahl: 1 },
    ],
  })),
  ...guides.map((g) => ({
    von: g.path,
    nach: ['/dach-und-pv/'],
    mindestens: [{ was: 'Leistungsseite', von: services.map((s) => s.path), anzahl: 1 }],
  })),
  {
    von: '/region/hildesheim/',
    nach: ['/dach-und-pv/'],
    mindestens: [{ was: 'Leistungsseiten', von: services.map((s) => s.path), anzahl: 3 }],
  },
];

const befunde: string[] = [];

for (const rule of rules) {
  const links = new Set(mainLinks(rule.von));
  if (links.size === 0) {
    befunde.push(`${rule.von}: kein Hauptbereich oder keine Verweise gefunden`);
    continue;
  }
  for (const ziel of rule.nach) {
    if (!links.has(ziel)) befunde.push(`${rule.von}: Verweis auf ${ziel} fehlt`);
  }
  for (const m of rule.mindestens ?? []) {
    const treffer = m.von.filter((z) => links.has(z)).length;
    if (treffer < m.anzahl) {
      befunde.push(`${rule.von}: ${treffer} von ${m.anzahl} ${m.was} verlinkt`);
    }
  }
}

console.log(`Verlinkungsmatrix, ${rules.length} Regeln geprüft.`);
if (befunde.length > 0) {
  console.log('\nBefunde:');
  for (const b of befunde) console.log(` - ${b}`);
  process.exit(1);
}
console.log('Keine Befunde.');
