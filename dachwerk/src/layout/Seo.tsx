import { useEffect } from 'react';
import type { RouteMeta } from '@/routes';
import { SITE_INDEXABLE, SITE_ORIGIN } from '@/config';

/**
 * Der Kopfbereich wird beim Prerender final erzeugt, siehe lib/head.ts.
 * Diese Komponente haelt ihn bei Navigation innerhalb der Anwendung nach.
 */
function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function Seo({ meta }: { meta: RouteMeta }) {
  useEffect(() => {
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', `${SITE_ORIGIN}${meta.path}`);
    setMeta('meta[name="robots"]', 'content', SITE_INDEXABLE ? 'index,follow' : 'noindex,nofollow');
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', `${SITE_ORIGIN}${meta.path}`);
  }, [meta]);
  return null;
}
