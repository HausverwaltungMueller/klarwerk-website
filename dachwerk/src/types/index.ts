export type Domain = 'dach' | 'energie' | 'beides';

export type ExperienceLevel = 'home' | 'domain' | 'service' | 'bridge' | 'region' | 'guide' | 'plain';

export type SchemaKind = 'localbusiness' | 'service' | 'faq' | 'breadcrumb' | 'website';

export type SlotId =
  | 'obj-01' | 'obj-02' | 'obj-03' | 'obj-04'
  | 'mat-01' | 'mat-02' | 'mat-03' | 'mat-04' | 'mat-05'
  | 'pro-01' | 'pro-02' | 'pro-03' | 'pro-04' | 'pro-05'
  | 'reg-01' | 'reg-02';

export type CtaPreset =
  | 'reparatur' | 'sanierung' | 'photovoltaik' | 'dach-und-pv'
  | 'speicher' | 'potenzialcheck' | 'beratung' | 'sonstiges';

export type Source = { label: string; url: string; kind: 'gesetz' | 'behoerde' | 'betrieb' };

export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  domain: 'dach' | 'energie';
  order: number;
  name: string;
  claim: string;
  /** Erklaert eine Entscheidung, keine Selbstbeschreibung. */
  explain: string;
  detail: string[];
  slots: SlotId[];
  faq?: Faq[];
  relatedServices: string[];
  relatedGuides: string[];
  /** Nur gesetzt, wenn eine eigene Seite existiert. */
  page?: string;
  /** true, wenn die Seite steuerliche oder rechtliche Aussagen enthaelt.
   *  Dann rendert sie den Hinweisblock mit Standdatum und Quellen. */
  legalNote?: boolean;
};

export type Project = {
  id: string;
  kind: Domain;
  measure: string;
  place: string;
  /** Der Typ erzwingt die Kennzeichnung als Beispiel. */
  isExample: true;
  before: SlotId;
  after: SlotId;
  notes: string[];
};

export type Region = {
  slug: string;
  name: string;
  distanceKm: number;
  /** Mindestens drei ortsspezifische Aussagen, sonst entsteht keine Seite. */
  buildingFacts: string[];
  services: string[];
  text: string[];
};

export type GuideArticle = {
  slug: string;
  question: string;
  teaser: string;
  answer: string[];
  sources?: Source[];
  /** Pflicht, sobald steuerlich oder rechtlich. */
  asOf?: string;
  relatedServices: string[];
};

export type ProcessStep = { index: string; title: string; lines: string[]; slot: SlotId };

export type Layer = { index: string; name: string; note: string; domain: Domain };

export type Slot = {
  id: SlotId;
  klasse: 'objekt' | 'material' | 'prozess' | 'region';
  motiv: string;
  alt: string;
  ratio: { desktop: string; mobile: string };
  priority: 'eager' | 'lazy';
  motion: 'none' | 'mask' | 'parallax-4' | 'parallax-6' | 'parallax-8';
  /** Fehlt die Datei, erscheint die gestaltete Materialflaeche mit Kennung. */
  file?: string;
  material: 'ziegel' | 'schiefer' | 'zink' | 'modul' | 'holz' | 'haus' | 'landschaft';
};
