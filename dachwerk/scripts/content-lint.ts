/**
 * Content-Linter. Bricht den Build bei Floskeln, Zahlen ohne Quelle, zu hoher
 * Fachwortdichte, steuerlichem Text ohne Standdatum, Ortsseiten ohne Substanz,
 * Gedankenstrichen im deutschen Text und fehlender interner Verlinkung.
 * docs/06, Abschnitt 6.1.
 */
import { services } from '../src/content/services';
import { guide } from '../src/content/guide';
import { regions } from '../src/content/regions';
import { projects } from '../src/content/projects';
import { glossary, explainMarkers } from '../src/content/glossary';
import * as home from '../src/content/home';
import { bridgeFaq, bridgeText } from '../src/content/bridge';
import { routes } from '../src/routes';

const floskeln = [
  'kompetenter partner', 'qualität steht bei uns', 'freuen uns auf ihre anfrage',
  'rundum sorglos', 'rundum-sorglos', 'unschlagbar', 'günstigster', 'billigst',
  'jetzt zugreifen', 'gratis', 'sichern sie sich', 'nur heute', 'einmalige chance',
  'wir sind ihr partner', 'zu 100 % zufrieden',
];

type Finding = { ort: string; regel: string; text: string };
const findings: Finding[] = [];
const add = (ort: string, regel: string, text: string) => findings.push({ ort, regel, text });

/** Alle Textabsätze mit Herkunft sammeln. */
const paragraphs: Array<{ ort: string; text: string; hasSource: boolean; hasAsOf: boolean }> = [];

for (const s of services) {
  const base = `services/${s.slug}`;
  [s.name, s.claim, s.explain, ...s.detail].forEach((t) => paragraphs.push({ ort: base, text: t, hasSource: false, hasAsOf: false }));
  // Frage und Antwort bilden eine Einheit. Getrennt geprueft wuerde eine Frage
  // mit steuerlichem Begriff als Verstoss gelten, obwohl die Antwort korrekt ist.
  (s.faq ?? []).forEach((f) => {
    paragraphs.push({
      ort: `${base}/faq`,
      text: `${f.question} ${f.answer}`,
      hasSource: s.legalNote === true,
      hasAsOf: s.legalNote === true,
    });
  });
}
for (const a of guide) {
  const hasSource = (a.sources?.length ?? 0) > 0;
  const hasAsOf = Boolean(a.asOf);
  [a.question, a.teaser, ...a.answer].forEach((t) => paragraphs.push({ ort: `guide/${a.slug}`, text: t, hasSource, hasAsOf }));
}
for (const r of regions) {
  [...r.buildingFacts, ...r.text].forEach((t) => paragraphs.push({ ort: `regions/${r.slug}`, text: t, hasSource: false, hasAsOf: false }));
}
for (const p of projects) {
  [p.measure, ...p.notes].forEach((t) => paragraphs.push({ ort: `projects/${p.id}`, text: t, hasSource: false, hasAsOf: false }));
}
const walk = (obj: unknown, ort: string) => {
  if (typeof obj === 'string') { paragraphs.push({ ort, text: obj, hasSource: false, hasAsOf: false }); return; }
  if (Array.isArray(obj)) { obj.forEach((o) => walk(o, ort)); return; }
  if (obj && typeof obj === 'object') { Object.values(obj).forEach((o) => walk(o, ort)); }
};
walk(home, 'home');
walk(bridgeText, 'bridge');
for (const f of bridgeFaq) {
  // Die Brueckenseite rendert den Hinweisblock mit Standdatum und Quellen.
  paragraphs.push({ ort: 'bridge/faq', text: `${f.question} ${f.answer}`, hasSource: true, hasAsOf: true });
}

// 1 Floskeln
for (const p of paragraphs) {
  const low = p.text.toLowerCase();
  for (const f of floskeln) if (low.includes(f)) add(p.ort, 'Floskel', f);
}

// 2 Zahlen mit Einheit ohne Quelle
const zahlEinheit = /\b\d+([.,]\d+)?\s?(%|Prozent|Jahre|Jahren|kWh|kWp|Kilowatt|EUR|Euro)\b/i;
const erlaubt = ['38°', '38 Grad', '70 Kilometer', '70 km', '24 Module', '62 m²', '30 Kilowatt', '30 kW', '0 Prozent', 'zehn Jahren'];
for (const p of paragraphs) {
  if (!zahlEinheit.test(p.text)) continue;
  if (erlaubt.some((e) => p.text.includes(e))) continue;
  if (p.hasSource) continue;
  add(p.ort, 'Zahl mit Einheit ohne Quelle', p.text.slice(0, 90));
}

// 3 Fachwortdichte
for (const p of paragraphs) {
  const treffer = glossary.filter((g) => p.text.includes(g));
  if (treffer.length <= 2) continue;
  const erklaert = treffer.filter((g) => {
    const i = p.text.indexOf(g);
    const nach = p.text.slice(i, i + 160);
    return explainMarkers.some((mk) => nach.includes(mk));
  });
  if (treffer.length - erklaert.length > 2) {
    add(p.ort, 'zu viele unerklärte Fachbegriffe', treffer.join(', '));
  }
}

// 4 Steuerliches ohne Standdatum
const steuerWorte = ['Umsatzsteuer', 'Steuersatz', 'steuerfrei', 'Einkommensteuer', 'Nullsteuersatz', 'steuerlich'];
for (const p of paragraphs) {
  if (!steuerWorte.some((w) => p.text.includes(w))) continue;
  if (p.hasAsOf) continue;
  const konditional = /unter den gesetzlichen Voraussetzungen|im Einzelfall|Steuerberater|bestimmte/i.test(p.text);
  if (!konditional) add(p.ort, 'steuerlicher Text ohne Standdatum und ohne Bedingung', p.text.slice(0, 90));
}

// 5 Ortsseiten mit Substanz
for (const r of regions) {
  if (r.buildingFacts.length < 3) add(`regions/${r.slug}`, 'weniger als drei ortsspezifische Aussagen', String(r.buildingFacts.length));
}

// 6 Gedankenstriche und falsche Anfuehrungszeichen
for (const p of paragraphs) {
  if (/[–—]/.test(p.text)) add(p.ort, 'Gedankenstrich im deutschen Text', p.text.slice(0, 70));
  if (/"[^"]*"/.test(p.text)) add(p.ort, 'englische Anführungszeichen', p.text.slice(0, 70));
}

// 7 Interne Verlinkung
for (const s of services) {
  if (s.page && s.relatedServices.length < 1) add(`services/${s.slug}`, 'keine verwandte Leistung verlinkt', s.slug);
}
for (const a of guide) {
  if (a.relatedServices.length < 1) add(`guide/${a.slug}`, 'keine Leistungsseite verlinkt', a.slug);
}
for (const r of regions) {
  if (r.services.length < 3) add(`regions/${r.slug}`, 'weniger als drei Leistungen verlinkt', String(r.services.length));
}

// 8 Titel- und Beschreibungslaengen
for (const r of routes) {
  if (r.title.length > 60) add(`routes${r.path}`, 'Titel über 60 Zeichen', `${r.title.length}`);
  if (r.description.length < 120 || r.description.length > 175) {
    add(`routes${r.path}`, 'Description außerhalb 120 bis 175 Zeichen', `${r.description.length}`);
  }
}

console.log(`Content-Linter: ${paragraphs.length} Textstellen und ${routes.length} Routen geprüft.`);
if (findings.length === 0) {
  console.log('Keine Befunde.');
} else {
  console.error(`\n${findings.length} Befunde:`);
  for (const f of findings) console.error(` - [${f.ort}] ${f.regel}: ${f.text}`);
  process.exit(1);
}
