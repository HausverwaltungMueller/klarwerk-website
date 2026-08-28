import type { Source } from '@/types';

/**
 * Alle Firmenangaben stehen ausschliesslich hier. Footer, Impressum, Schema und
 * Kontaktbereich lesen von hier. Keine zweite Schreibweise im Projekt.
 *
 * confirmed: false bedeutet Platzhalter. Der Schema-Generator gibt ausschliesslich
 * bestaetigte Felder aus, damit keine unbestaetigte Angabe in strukturierte Daten geraet.
 */
export type Fact<T> = { value: T; confirmed: boolean };

export const company = {
  name: 'DACHWERK',
  legalName: { value: 'DACHWERK Musterbetrieb', confirmed: false } as Fact<string>,
  tagline: 'Hildesheim · Dach & Energie',
  claim: 'Meisterhandwerk, das in die Zukunft denkt.',
  street: { value: 'Musterstraße 00', confirmed: false } as Fact<string>,
  zip: { value: '31134', confirmed: false } as Fact<string>,
  city: { value: 'Hildesheim', confirmed: true } as Fact<string>,
  region: { value: 'Niedersachsen', confirmed: true } as Fact<string>,
  country: { value: 'DE', confirmed: true } as Fact<string>,
  phone: { value: '05121 000000', confirmed: false } as Fact<string>,
  email: { value: 'kontakt@dachwerk-hildesheim.de', confirmed: false } as Fact<string>,
  /** Zentrum des Arbeitsgebiets, Radius in Metern. */
  geo: { lat: 52.1516, lng: 9.9514, radius: 70000 },
  areaLabel: 'Zuhause im Landkreis Hildesheim. Im Einsatz bis etwa 70 Kilometer.',
  /** Nur eintragen, was der Betrieb bestaetigt hat. Leer heisst: erscheint nicht. */
  register: { value: '', confirmed: false } as Fact<string>,
  openingHours: { value: '', confirmed: false } as Fact<string>,
  knowsAbout: [
    'Dachsanierung', 'Neueindeckung', 'Dachreparatur', 'Dachdämmung', 'Flachdach',
    'Photovoltaik', 'Stromspeicher', 'PV-Planung', 'Dach und Photovoltaik kombiniert',
  ],
};

export const legalSources: Source[] = [
  {
    label: 'BMF, Nullsteuersatz für bestimmte Photovoltaikanlagen, § 12 Abs. 3 UStG',
    url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Umsatzsteuer/Umsatzsteuer-Anwendungserlass/2023-02-27-nullsteuersatz-fuer-umsaetze-im-zusammenhang-mit-bestimmten-photovoltaikanlagen.html',
    kind: 'behoerde',
  },
  {
    label: 'BMF, Einzelfragen zur Anwendung des Nullsteuersatzes',
    url: 'https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Umsatzsteuer/Umsatzsteuer-Anwendungserlass/2023-11-30-einzelfragen-bei-der-anwendung-des-nullsteuersatzes-fuer-bestimmte-photovoltaikanlagen.html',
    kind: 'behoerde',
  },
  {
    label: 'BMF-FAQ, umsatzsteuerliche Maßnahmen zur Förderung von Photovoltaikanlagen',
    url: 'https://www.bundesfinanzministerium.de/Content/DE/FAQ/foerderung-photovoltaikanlagen.html',
    kind: 'behoerde',
  },
  {
    label: '§ 3 Nr. 72 EStG, Steuerbefreiung für bestimmte Photovoltaikanlagen',
    url: 'https://www.gesetze-im-internet.de/estg/__3.html',
    kind: 'gesetz',
  },
];
