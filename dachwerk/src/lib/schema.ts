import { company } from '@/content/company';
import { SITE_ORIGIN } from '@/config';
import { trail, type RouteMeta } from '@/routes';
import { findService } from '@/content/services';
import { findGuide } from '@/content/guide';
import { bridgeFaq } from '@/content/bridge';

/**
 * JSON-LD Generatoren. Ausdruecklich nicht enthalten: AggregateRating, Review,
 * Award, Offer mit Preis, oeffnungszeiten ohne Bestaetigung. Unbestaetigte
 * Firmenangaben werden uebersprungen, siehe docs/06, Abschnitt 5.
 */
type Json = Record<string, unknown>;

const abs = (path: string): string => `${SITE_ORIGIN}${path}`;

/** Gibt den Wert nur zurueck, wenn er bestaetigt und nicht leer ist. */
function confirmed<T>(fact: { value: T; confirmed: boolean }): T | undefined {
  if (!fact.confirmed) return undefined;
  if (typeof fact.value === 'string' && fact.value.trim() === '') return undefined;
  return fact.value;
}

function localBusiness(): Json {
  const node: Json = {
    '@type': 'RoofingContractor',
    '@id': `${SITE_ORIGIN}/#betrieb`,
    name: company.name,
    url: SITE_ORIGIN,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
      geoRadius: company.geo.radius,
    },
    knowsAbout: company.knowsAbout,
  };
  const legal = confirmed(company.legalName);
  if (legal) node.legalName = legal;
  const phone = confirmed(company.phone);
  if (phone) node.telephone = phone;
  const email = confirmed(company.email);
  if (email) node.email = email;

  const street = confirmed(company.street);
  const zip = confirmed(company.zip);
  const city = confirmed(company.city);
  if (city) {
    const address: Json = { '@type': 'PostalAddress', addressLocality: city, addressCountry: confirmed(company.country) ?? 'DE' };
    if (street) address.streetAddress = street;
    if (zip) address.postalCode = zip;
    const region = confirmed(company.region);
    if (region) address.addressRegion = region;
    node.address = address;
  }
  const hours = confirmed(company.openingHours);
  if (hours) node.openingHours = hours;
  return node;
}

function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    name: company.name,
    url: SITE_ORIGIN,
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE_ORIGIN}/#betrieb` },
  };
}

function breadcrumb(meta: RouteMeta): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail(meta.path).map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.breadcrumb,
      item: abs(r.path),
    })),
  };
}

function service(meta: RouteMeta): Json | undefined {
  const svc = meta.param ? findService(meta.param) : undefined;
  const name = svc?.name ?? (meta.domain === 'energie' ? 'Photovoltaik' : meta.domain === 'beides' ? 'Dach und Photovoltaik' : 'Dacharbeiten');
  return {
    '@type': 'Service',
    name,
    serviceType: name,
    description: svc?.explain ?? meta.description,
    provider: { '@id': `${SITE_ORIGIN}/#betrieb` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Landkreis Hildesheim' },
    url: abs(meta.path),
  };
}

function faq(meta: RouteMeta): Json | undefined {
  const items = meta.key === 'bridge'
    ? bridgeFaq
    : meta.param
      ? (findService(meta.param)?.faq ?? faqFromGuide(meta.param))
      : undefined;
  if (!items || items.length === 0) return undefined;
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Ratgeberartikel liefern genau eine sichtbare Frage mit sichtbarer Antwort. */
function faqFromGuide(slug: string): Array<{ question: string; answer: string }> | undefined {
  const article = findGuide(slug);
  if (!article) return undefined;
  const first = article.answer[0];
  if (!first) return undefined;
  return [{ question: article.question, answer: first }];
}

export function buildSchema(meta: RouteMeta): string | undefined {
  const nodes: Json[] = [];
  for (const kind of meta.schema) {
    if (kind === 'localbusiness') nodes.push(localBusiness());
    if (kind === 'website') nodes.push(website());
    if (kind === 'breadcrumb') nodes.push(breadcrumb(meta));
    if (kind === 'service') {
      const s = service(meta);
      if (s) nodes.push(s);
    }
    if (kind === 'faq') {
      const f = faq(meta);
      if (f) nodes.push(f);
    }
  }
  if (nodes.length === 0) return undefined;
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
