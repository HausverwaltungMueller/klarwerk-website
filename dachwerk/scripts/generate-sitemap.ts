/** robots.txt und sitemap.xml aus der Routenliste. Nur bei SITE_INDEXABLE. */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { routes } from '../src/routes';
import { SITE_INDEXABLE, SITE_ORIGIN } from '../src/config';

const root = resolve(import.meta.dirname, '..');
const today = new Date().toISOString().slice(0, 10);

if (!SITE_INDEXABLE) {
  writeFileSync(
    resolve(root, 'dist/robots.txt'),
    ['User-agent: *', 'Disallow: /', '', '# Musterprojekt. Indexierung ist bewusst ausgeschaltet.', '# Umschalten in src/config.ts, SITE_INDEXABLE.', ''].join('\n'),
    'utf8',
  );
  console.log('robots.txt geschrieben, Indexierung aus. Keine Sitemap erzeugt.');
} else {
  const urls = routes
    .map((r) => `  <url>\n    <loc>${SITE_ORIGIN}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.sitemap.changefreq}</changefreq>\n    <priority>${r.sitemap.priority.toFixed(1)}</priority>\n  </url>`)
    .join('\n');
  writeFileSync(
    resolve(root, 'dist/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    'utf8',
  );
  writeFileSync(
    resolve(root, 'dist/robots.txt'),
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_ORIGIN}/sitemap.xml`, ''].join('\n'),
    'utf8',
  );
  console.log(`sitemap.xml mit ${routes.length} Einträgen und robots.txt geschrieben.`);
}
