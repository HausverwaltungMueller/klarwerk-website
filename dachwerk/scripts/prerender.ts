/**
 * Statisches Vorrendern je Route. Jede URL erhaelt echtes HTML mit finalen
 * Metadaten, danach hydriert der Client. Kein Server notwendig.
 * Ersetzt vite-react-ssg, das React Router 6 verlangt, waehrend das Projekt 7 nutzt.
 * docs/06, Abschnitt 1.1 sieht ausdruecklich einen gleichwertigen Prerender-Schritt vor.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { routes } from '../src/routes';

const root = resolve(import.meta.dirname, '..');
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf8');

const { render } = (await import(resolve(root, 'dist-ssr/entry-server.js'))) as {
  render: (url: string) => { html: string; head: string };
};

let count = 0;
for (const route of routes) {
  const { html, head } = render(route.path);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  const file = route.path === '/' ? 'dist/index.html' : `dist${route.path}index.html`;
  const target = resolve(root, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, page, 'utf8');
  count++;
  console.log('gerendert:', route.path);
}

// 404 mit demselben Layout, damit ein Fehlaufruf nicht nackt erscheint
const nf = render('/404');
writeFileSync(
  resolve(root, 'dist/404.html'),
  template.replace('<!--app-head-->', '<title>Seite nicht gefunden · DACHWERK</title>\n<meta name="robots" content="noindex,nofollow">').replace('<!--app-html-->', nf.html),
  'utf8',
);
console.log(`\n${count} Routen vorgerendert, dazu 404.html`);
