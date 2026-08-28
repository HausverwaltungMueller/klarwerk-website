import type { ExperienceLevel, SchemaKind } from '@/types';

/**
 * Einzige Quelle fuer Routing, Sitemap, Prerender, Brotkrume und Experience-Budget.
 * Enthaelt bewusst kein JSX, damit die Build-Skripte diese Datei lesen koennen.
 * Das Mapping key -> Seitenkomponente steht in src/App.tsx.
 */
export type RouteMeta = {
  path: string;
  key: string;
  title: string;
  description: string;
  breadcrumb: string;
  parent?: string;
  domain?: 'dach' | 'energie' | 'beides';
  /** Steuert, wie viel Inszenierung eine Seite laden darf. docs/05, W06. */
  experience: ExperienceLevel;
  sitemap: { priority: number; changefreq: 'monthly' | 'yearly' };
  schema: SchemaKind[];
  /** Parameter fuer Template-Seiten. */
  param?: string;
};

export const routes: RouteMeta[] = [
  {
    path: '/', key: 'home',
    title: 'Dachdecker und Photovoltaik in Hildesheim · DACHWERK',
    description: 'Dachhandwerk und Photovoltaik aus einer Hand im Landkreis Hildesheim. Sanierung, Neueindeckung, Reparatur, PV und Speicher. Kostenfreier Dach- und PV-Potenzialcheck.',
    breadcrumb: 'Start', experience: 'home',
    sitemap: { priority: 1, changefreq: 'monthly' }, schema: ['localbusiness', 'website'],
  },
  {
    path: '/dach/', key: 'domain-dach', domain: 'dach', parent: '/',
    title: 'Dach: Sanierung, Neueindeckung, Reparatur · DACHWERK',
    description: 'Dacharbeiten im Landkreis Hildesheim: Sanierung, Neueindeckung, Reparatur, Dämmung, Dachfenster und Flachdach. Geprüft wird vor der Empfehlung, nicht danach.',
    breadcrumb: 'Dach', experience: 'domain',
    sitemap: { priority: 0.9, changefreq: 'monthly' }, schema: ['service', 'breadcrumb'],
  },
  {
    path: '/dach/dachsanierung/', key: 'service', param: 'dachsanierung', domain: 'dach', parent: '/dach/',
    title: 'Dachsanierung in Hildesheim und Umgebung · DACHWERK',
    description: 'Dachsanierung im Landkreis Hildesheim: Deckung, Unterdeckung und Dämmung in einem Zug, vorbereitet für eine spätere Photovoltaikanlage ohne zweiten Eingriff.',
    breadcrumb: 'Dachsanierung', experience: 'service',
    sitemap: { priority: 0.9, changefreq: 'monthly' }, schema: ['service', 'breadcrumb', 'faq'],
  },
  {
    path: '/dach/dachreparatur/', key: 'service', param: 'dachreparatur', domain: 'dach', parent: '/dach/',
    title: 'Dachreparatur in Hildesheim · DACHWERK',
    description: 'Dach undicht oder Sturmschaden im Landkreis Hildesheim? Wir sichern zuerst, prüfen die Ursache und sagen offen, ob eine Reparatur trägt oder nur Zeit kauft.',
    breadcrumb: 'Dachreparatur', experience: 'service',
    sitemap: { priority: 0.8, changefreq: 'monthly' }, schema: ['service', 'breadcrumb', 'faq'],
  },
  {
    path: '/photovoltaik/', key: 'domain-energie', domain: 'energie', parent: '/',
    title: 'Photovoltaik in Hildesheim: Planung und Montage · DACHWERK',
    description: 'Photovoltaik im Landkreis Hildesheim vom Dachbetrieb: Prüfung des Dachs, Planung nach Verbrauch, Montage, Elektrik und Anmeldung aus einer Hand.',
    breadcrumb: 'Photovoltaik', experience: 'domain',
    sitemap: { priority: 0.9, changefreq: 'monthly' }, schema: ['service', 'breadcrumb'],
  },
  {
    path: '/photovoltaik/pv-anlage/', key: 'service', param: 'pv-anlage', domain: 'energie', parent: '/photovoltaik/',
    title: 'PV-Anlage planen und montieren lassen · DACHWERK',
    description: 'Photovoltaikanlage im Landkreis Hildesheim: erst Dachprüfung, dann Auslegung nach Ihrem Verbrauch, dann Montage. Ein Betrieb, ein Ansprechpartner.',
    breadcrumb: 'PV-Anlage', experience: 'service',
    sitemap: { priority: 0.9, changefreq: 'monthly' }, schema: ['service', 'breadcrumb', 'faq'],
  },
  {
    path: '/photovoltaik/stromspeicher/', key: 'service', param: 'stromspeicher', domain: 'energie', parent: '/photovoltaik/',
    title: 'Stromspeicher: rechnen, dann entscheiden · DACHWERK',
    description: 'Stromspeicher im Landkreis Hildesheim: Ein Speicher lohnt sich nicht immer. Wir rechnen es an Ihrem Verbrauch durch, bevor wir ihn anbieten.',
    breadcrumb: 'Stromspeicher', experience: 'service',
    sitemap: { priority: 0.8, changefreq: 'monthly' }, schema: ['service', 'breadcrumb', 'faq'],
  },
  {
    path: '/dach-und-pv/', key: 'bridge', domain: 'beides', parent: '/',
    title: 'Dachsanierung und Photovoltaik kombinieren · DACHWERK',
    description: 'Dach und Photovoltaik gemeinsam planen: ein Gerüst, eine Baustelle, ein Ansprechpartner. Warum die Reihenfolge über die Gesamtkosten entscheidet.',
    breadcrumb: 'Dach und PV', experience: 'bridge',
    sitemap: { priority: 1, changefreq: 'monthly' }, schema: ['service', 'breadcrumb', 'faq'],
  },
  {
    path: '/projekte/', key: 'projects', parent: '/',
    title: 'Beispielprojekte: Dach und Energie · DACHWERK',
    description: 'Beispielprojekte aus dem Landkreis Hildesheim: Dachsanierung mit Photovoltaik und eine Anlage auf geprüftem Bestandsdach. Vorher und nachher aus gleicher Achse.',
    breadcrumb: 'Projekte', experience: 'plain',
    sitemap: { priority: 0.7, changefreq: 'monthly' }, schema: ['breadcrumb'],
  },
  {
    path: '/region/hildesheim/', key: 'region', param: 'hildesheim', parent: '/',
    title: 'Dachdecker in Hildesheim: Bauweisen vor Ort · DACHWERK',
    description: 'Dach und Photovoltaik in Hildesheim: typische Dachformen der Nachkriegsjahre, Flachdachanbauten der siebziger Jahre und was das für Ihr Vorhaben bedeutet.',
    breadcrumb: 'Hildesheim', experience: 'region',
    sitemap: { priority: 0.8, changefreq: 'monthly' }, schema: ['service', 'breadcrumb'],
  },
  {
    path: '/ratgeber/', key: 'guide-index', parent: '/',
    title: 'Ratgeber: Photovoltaik und Dach erklärt · DACHWERK',
    description: 'Photovoltaik und Dach verständlich erklärt: Kosten, Speicher und die Prüfung des Dachs vor einer Anlage. Sachlich, mit Quellen und Standdatum.',
    breadcrumb: 'Ratgeber', experience: 'guide',
    sitemap: { priority: 0.7, changefreq: 'monthly' }, schema: ['breadcrumb'],
  },
  {
    path: '/ratgeber/pv-kosten/', key: 'guide', param: 'pv-kosten', parent: '/ratgeber/',
    title: 'Was kostet eine Photovoltaikanlage? · DACHWERK',
    description: 'Was den Preis einer Photovoltaikanlage bestimmt: Leistung, Aufwand auf dem Dach, Elektrik im Haus und Speicher. Mit Hinweis zum Umsatzsteuersatz von 0 Prozent.',
    breadcrumb: 'PV-Kosten', experience: 'guide',
    sitemap: { priority: 0.7, changefreq: 'monthly' }, schema: ['faq', 'breadcrumb'],
  },
  {
    path: '/ratgeber/speicher-sinnvoll/', key: 'guide', param: 'speicher-sinnvoll', parent: '/ratgeber/',
    title: 'Lohnt sich ein Stromspeicher? · DACHWERK',
    description: 'Ein Speicher verschiebt Strom von Mittag in den Abend. Wann sich das rechnet, wann Steuerung günstiger ist und was steuerlich gilt.',
    breadcrumb: 'Speicher', experience: 'guide',
    sitemap: { priority: 0.7, changefreq: 'monthly' }, schema: ['faq', 'breadcrumb'],
  },
  {
    path: '/ratgeber/dach-vor-pv-pruefen/', key: 'guide', param: 'dach-vor-pv-pruefen', parent: '/ratgeber/',
    title: 'Dach vor der PV-Anlage prüfen · DACHWERK',
    description: 'Sieben Punkte, die vor der Belegung geklärt sein sollten: Statik, Deckung, Unterdeckung, Anschlüsse, Ausrichtung, Verschattung und Leitungswege.',
    breadcrumb: 'Dach vor PV', experience: 'guide',
    sitemap: { priority: 0.7, changefreq: 'monthly' }, schema: ['faq', 'breadcrumb'],
  },
  {
    path: '/ueber-uns/', key: 'about', parent: '/',
    title: 'Über uns: Meisterbetrieb für Dach und Energie · DACHWERK',
    description: 'Wer hinter DACHWERK steht: ein Betrieb, der Dachhandwerk und Photovoltaik als ein System denkt, mit einem Ansprechpartner von der Prüfung bis zur Übergabe.',
    breadcrumb: 'Über uns', experience: 'plain',
    sitemap: { priority: 0.6, changefreq: 'yearly' }, schema: ['breadcrumb'],
  },
  {
    path: '/kontakt/', key: 'contact', parent: '/',
    title: 'Kontakt und Potenzialcheck anfragen · DACHWERK',
    description: 'Projekt besprechen oder den kostenfreien Dach- und PV-Potenzialcheck anfragen. Vier kurze Schritte, Telefon oder E-Mail genügt.',
    breadcrumb: 'Kontakt', experience: 'plain',
    sitemap: { priority: 0.9, changefreq: 'yearly' }, schema: ['localbusiness', 'breadcrumb'],
  },
  {
    path: '/impressum/', key: 'imprint', parent: '/',
    title: 'Impressum · DACHWERK',
    description: 'Angaben zum Anbieter dieses Musterprojekts. DACHWERK ist ein fiktiver Betrieb, die Angaben sind Platzhalter und dienen der Darstellung.',
    breadcrumb: 'Impressum', experience: 'plain',
    sitemap: { priority: 0.2, changefreq: 'yearly' }, schema: ['breadcrumb'],
  },
  {
    path: '/datenschutz/', key: 'privacy', parent: '/',
    title: 'Datenschutz · DACHWERK',
    description: 'Hinweise zum Umgang mit Daten in diesem Musterprojekt: keine Übermittlung, keine Speicherung, keine Einbindung von Diensten Dritter.',
    breadcrumb: 'Datenschutz', experience: 'plain',
    sitemap: { priority: 0.2, changefreq: 'yearly' }, schema: ['breadcrumb'],
  },
];

export const findRoute = (path: string): RouteMeta | undefined => routes.find((r) => r.path === path);

/** Brotkrume aus der Elternkette, ohne Duplikate. */
export function trail(path: string): RouteMeta[] {
  const out: RouteMeta[] = [];
  let cur = findRoute(path);
  while (cur) {
    out.unshift(cur);
    cur = cur.parent ? findRoute(cur.parent) : undefined;
  }
  return out;
}

/** Erlaubtes Inszenierungsbudget je Seitentyp. docs/05, W06. */
export const experienceBudget: Record<ExperienceLevel, { pins: number; three: boolean }> = {
  home: { pins: 3, three: true },
  bridge: { pins: 1, three: true },
  domain: { pins: 1, three: false },
  service: { pins: 0, three: false },
  region: { pins: 0, three: false },
  guide: { pins: 0, three: false },
  plain: { pins: 0, three: false },
};
