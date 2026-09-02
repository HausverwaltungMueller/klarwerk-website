import { SITE_INDEXABLE, SITE_ORIGIN } from '@/config';
import type { RouteMeta } from '@/routes';
import { buildSchema } from './schema';

/**
 * Der Kopfbereich ist ein Datenprodukt, kein Renderprodukt. Der Prerender baut ihn
 * direkt aus der RouteMeta, damit jede URL final ausgelieferte Metadaten hat.
 */
const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function buildHead(meta: RouteMeta): string {
  const canonical = `${SITE_ORIGIN}${meta.path}`;
  const robots = SITE_INDEXABLE ? 'index,follow' : 'noindex,nofollow';
  // PNG als Primaerformat, da nicht alle Plattformen SVG-Vorschaubilder lesen.
  // docs/07-PHASE-8-UMSETZUNG.md, offener Punkt 4.
  const og = `${SITE_ORIGIN}/og/dachwerk.png`;
  const parts = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="de_DE">`,
    `<meta property="og:site_name" content="DACHWERK">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:image" content="${og}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ];
  const schema = buildSchema(meta);
  if (schema) parts.push(`<script type="application/ld+json">${schema}</script>`);
  return parts.join('\n    ');
}
