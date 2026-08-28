# DACHWERK · PHASE 7: PRODUCTION ARCHITECTURE UND DESIGN SYSTEM

Stand: 28.08.2026
Status: zur Freigabe. Kein Produktionscode.
Grundlage: `01` bis `05`, alle freigegeben. Die Beschlüsse aus `05-KOHAERENZPRUEFUNG.md` sind hier bereits eingearbeitet.

---

## 1 · Projektarchitektur

### 1.1 Stack und Werkzeuge

| Zweck | Wahl | Begründung |
|---|---|---|
| Build | Vite 6 | Vorgabe, schnelle Iteration |
| Sprache | TypeScript, `strict: true` | Content ist typisiert, das ist die halbe Qualitätssicherung |
| UI | React 19 | Vorgabe |
| Rendering | `vite-react-ssg` | pro Route echtes HTML mit finalen Metadaten, danach Hydrierung, deploybar als statische Dateien |
| Styles | Tailwind 3 mit vollständig ersetztem Theme plus `tokens.css` | Tokens sind die Quelle, Tailwind nur die Zugriffsschicht |
| Motion | GSAP mit ScrollTrigger | Vorgabe |
| 3D | Three.js, dynamisch geladen | Vorgabe |
| Bilder | `sharp` im Build-Skript | AVIF und WebP in festen Breiten, kein Dienst zur Laufzeit |
| Lint | `oxlint`, `tsc --noEmit`, eigener Content-Linter | wie im übrigen Repository |
| Test | Playwright für Rauchtests und visuelle Prüfpunkte | ersetzt keine Unit-Tests, prüft das, was hier bricht |
| Paketmanager | npm | wie im Repository |

Keine UI-Bibliothek, keine Icon-Bibliothek, keine zweite Animationsbibliothek, kein State-Management-Paket, kein CSS-in-JS.

### 1.2 Verzeichnisbaum

```text
dachwerk/
├── docs/                          01 bis 06, Spezimen
├── public/
│   ├── fonts/                     Instrument Serif, Inter, woff2, subsettet
│   ├── img/                       generierte Bildableitungen, QUELLEN.md
│   ├── og/                        Open-Graph-Bilder je Route
│   └── robots.txt                 aus dem Build erzeugt
├── scripts/
│   ├── build-images.ts            Slot-Manifest zu AVIF und WebP
│   ├── generate-sitemap.ts        aus der Routenliste
│   ├── content-lint.ts            Floskeln, Fachwortdichte, Zahlen ohne Quelle
│   └── check-budget.ts            Bundlegrößen gegen Abschnitt 16
├── src/
│   ├── main.tsx                   Einstieg, SSG-Bootstrap
│   ├── routes.ts                  einzige Quelle für Routing, Sitemap, Prerender, Breadcrumbs
│   ├── styles/
│   │   ├── tokens.css             Farben, Typo, Spacing, Motion als CSS-Variablen
│   │   ├── base.css               Reset, Grundtypografie, Fokus, Flächenmodi
│   │   └── fonts.css              @font-face mit size-adjust
│   ├── design/                    Primitive, kennen keinen Inhalt
│   │   ├── Button.tsx  Eyebrow.tsx  Figure.tsx  Field.tsx
│   │   ├── Hairline.tsx  Measure.tsx  Prose.tsx  Section.tsx
│   │   ├── Row.tsx  Choice.tsx  Icon.tsx
│   │   └── drawings/              Maßlinie, Bezugslinie, Schnitt, Flächendiagramm
│   ├── layout/
│   │   ├── Header.tsx  MegaPanel.tsx  MobileMenu.tsx
│   │   ├── StickyActions.tsx  Footer.tsx  Breadcrumbs.tsx
│   │   ├── Seo.tsx                Titel, Description, Canonical, OG, JSON-LD
│   │   └── SurfaceProvider.tsx    Tag- und Nachtfläche, Flächenwechsel
│   ├── sections/                  eine Datei je Sektion, kennen nur Props
│   ├── pages/                     eine Datei je Route, komponiert Sektionen
│   ├── motion/
│   │   ├── gsapContext.ts  motionProfile.ts  useScrollScene.ts
│   │   ├── useReveal.ts  useParallax.ts
│   │   └── scenes/                eine Datei je Szene aus 04, Teil D
│   ├── three/
│   │   ├── index.ts               dynamischer Einstieg, Fallback-Entscheidung
│   │   ├── renderer.ts            Renderer, Größe, Sichtbarkeit, Kontextverlust
│   │   ├── heroScene.ts  layerScene.ts
│   │   ├── geometry/  materials/  lights/
│   │   └── fallback/              Standbilder und Textalternative
│   ├── content/                   typisierte Inhalte, siehe Abschnitt 6
│   ├── forms/
│   │   ├── ProjectInquiry.tsx  steps.ts  machine.ts  validate.ts
│   │   └── submit.ts              Adapter, im Musterprojekt Stub
│   ├── lib/
│   │   ├── schema.ts              JSON-LD Generatoren
│   │   ├── track.ts               Conversion-Adapter, No-Op
│   │   ├── slots.ts               Bildslot-Registry
│   │   └── format.ts              Datum, Zahl, Einheit, deutsche Formate
│   └── types/                     gemeinsame Typen
├── tailwind.config.ts  vite.config.ts  tsconfig.json
└── README.md
```

### 1.3 Konventionen

Komponenten in `PascalCase.tsx`, Module in `camelCase.ts`, Inhalte in `kebab-case.ts`. Kein Standardexport außer bei Seiten. Keine Datei über 250 Zeilen, sonst wird geteilt. Jede Sektion exportiert genau eine Komponente und deren Props-Typ. Deutsche Fachbegriffe bleiben deutsch, auch im Code: `sparren`, `traufe`, `first`, weil eine Übersetzung nur Verwirrung erzeugt.

---

## 2 · Komponentenarchitektur

### 2.1 Vier Schichten, Abhängigkeiten nur nach unten

```text
pages/          komponiert Sektionen, hält kein Markup außer Reihenfolge
   ↓
sections/       ein Abschnitt der Erzählung, erhält Inhalt als Props
   ↓
design/         Primitive ohne Inhaltswissen, tragen die Tokens
   ↓
styles/         Tokens, Basis
```

Quer dazu, von Sektionen benutzbar, nie umgekehrt: `motion/`, `three/`, `lib/`, `forms/`.

Verbote: keine Inhalte in Sektionen fest verdrahtet, kein `fetch` in Komponenten, kein direkter Zugriff auf `window` außerhalb von `motion/` und `three/`, keine Motion-Logik in Sektionen, nur Marker-Attribute.

### 2.2 Sektionsvertrag

Jede Sektion erfüllt:

```ts
type SectionProps<T> = {
  id: string;              // Ankerziel, stabil, für Sprungmarken und Tracking
  surface: 'night' | 'day';
  label?: string;          // sichtbares, inhaltliches Label, nie ein Aktname
  data: T;                 // typisierter Inhalt aus src/content
};
```

1. Rendert ohne JavaScript vollständig und lesbar.
2. Setzt genau eine `h2` (die Startseite hat eine `h1` im Hero).
3. Trägt Motion nur über `data-reveal`, `data-scene` und `data-parallax`.
4. Enthält höchstens einen CTA.
5. Kennt ihre Naht: `data-bridge="satz | material | frage | flaeche"` nach `05`, W02.

### 2.3 Primitive

| Komponente | Aufgabe | wichtigste Props |
|---|---|---|
| `Section` | Rahmen, Flächenmodus, Rhythmus, Randspalte, Label | `surface`, `rhythm`, `label`, `bridge` |
| `Button` | vier Varianten aus `02`, Abschnitt 6 | `variant`, `size`, `arrow`, `track` |
| `Figure` | Bildslot mit fixem Seitenverhältnis, Quellen, Bewegung, Platzhalter | `slot`, `ratio`, `priority`, `motion` |
| `Field` | Flächenfeld, fünf Typen aus `02`, Abschnitt 7 | `variant`, `selected` |
| `Row` | Zeile im Raster mit optionaler echter Nummer | `index?`, `title`, `desc` |
| `Choice` | Auswahlfläche, führt in das Formular mit Vorbelegung | `preset`, `wide` |
| `Measure` | technische Beschriftung, Maßlinie, Bezugslinie | `value`, `unit`, `leader` |
| `Icon` | eigener Zeichensatz, 14 Zeichen, Inline-SVG | `name`, `size` |
| `Prose` | Fließtextspalte mit Zeilenlängenbegrenzung und Silbentrennung | `width` |

---

## 3 · Routing

`src/routes.ts` ist die einzige Quelle. Sitemap, Prerender-Liste, Breadcrumbs, interne Verlinkung und der Navigationsaufbau lesen daraus.

```ts
export type RouteMeta = {
  path: string;                  // '/dach/dachsanierung/', immer mit Schrägstrich am Ende
  page: () => Promise<unknown>;  // dynamischer Import der Seitenkomponente
  title: string;                 // maximal 60 Zeichen
  description: string;           // 150 bis 160 Zeichen, handgeschrieben
  breadcrumb: string;            // kurzer Name in der Brotkrume
  parent?: string;               // Pfad der Elternroute
  domain?: 'dach' | 'energie' | 'beides';
  experience: 'home' | 'domain' | 'service' | 'bridge' | 'region' | 'guide' | 'plain';
  sitemap: { priority: number; changefreq: 'monthly' | 'yearly' };
  schema: Array<'localbusiness' | 'service' | 'faq' | 'breadcrumb' | 'website'>;
  og?: string;                   // Pfad zum OG-Bild, sonst Standard
};
```

`experience` steuert das Budget aus `05`, W06: welche Szenen, wie viele Pins, ob 3D geladen wird. Damit ist die Regel Code und nicht Absicht.

Fehlerseite `/404.html` wird mitgerendert. Weiterleitungen bei Bedarf über die Hostkonfiguration, nicht im Client.

---

## 4 · SEO-System

Eine Komponente, `layout/Seo.tsx`, erhält die `RouteMeta` und rendert in den Kopf: Titel, Description, Canonical als absolute URL, `robots`, Open Graph, Twitter Card und die JSON-LD-Blöcke aus `schema`.

| Element | Regel |
|---|---|
| Titel | `<Thema> in Hildesheim und Umgebung · DACHWERK`, maximal 60 Zeichen, kein Keyword-Stapel, nie zwei Ortsnamen |
| Description | handgeschrieben, nennt Nutzen und Region, endet ohne Ausrufezeichen |
| Canonical | absolut, selbstreferenzierend, ein Schrägstrich am Ende |
| Robots | zentraler Schalter `SITE_INDEXABLE` in `src/config.ts`. Im Musterprojekt `false`, dann `noindex,nofollow` und `robots.txt` mit `Disallow: /` |
| Open Graph | pro Route eigenes Bild aus der Bildwelt, 1200 mal 630 |
| Überschriften | eine `h1`, danach lückenlose Hierarchie, geprüft im Rauchtest |
| Sitemap | `scripts/generate-sitemap.ts` aus `routes.ts`, nur bei `SITE_INDEXABLE` |
| Interne Verlinkung | Regeln aus Abschnitt 20, im Content-Linter geprüft |

---

## 5 · Schema.org-Struktur

`lib/schema.ts` liefert typisierte Generatoren. Nur diese Typen, keine anderen:

| Typ | Ort | Inhalt |
|---|---|---|
| `RoofingContractor` | Startseite, Kontakt | Name, Anschrift als Platzhalter, `areaServed` als `GeoCircle` um Hildesheim mit `geoRadius: 70000`, `knowsAbout` für Dach und Photovoltaik, Öffnungszeiten nur wenn bestätigt |
| `WebSite` | Startseite | Name, URL, `inLanguage: de-DE` |
| `Service` | Leistungsseiten | `serviceType`, `provider` als Verweis auf den Betrieb, `areaServed`, `hasOfferCatalog` nur wenn echte Positionen existieren |
| `BreadcrumbList` | alle Unterseiten | aus `routes.ts` erzeugt, gleich der sichtbaren Brotkrume |
| `FAQPage` | Ratgeber, nur wenn Fragen und Antworten sichtbar auf der Seite stehen | keine versteckten Antworten |

Ausdrücklich nicht: `AggregateRating`, `Review`, `Award`, erfundene `sameAs`-Profile, `Offer` mit Preis, `openingHours` ohne Bestätigung. Platzhalterdaten sind als solche erkennbar und stehen an einer Stelle in `content/company.ts`, mit einem Feld `confirmed: boolean` je Angabe. `schema.ts` gibt nur Felder aus, die `confirmed: true` tragen. Damit kann keine unbestätigte Angabe versehentlich in strukturierte Daten geraten.

---

## 6 · Content-Modell

Aller Inhalt liegt typisiert in `src/content/`, kein Fließtext im JSX.

```ts
type Service = {
  slug: string; domain: 'dach' | 'energie'; order: number;
  name: string; claim: string; explain: string;      // erklärt eine Entscheidung, keine Selbstbeschreibung
  detail: string[]; slots: SlotId[]; faq?: Faq[];
  relatedServices: string[]; relatedGuides: string[];
};
type Project = {
  id: string; kind: 'dach' | 'energie' | 'beides';
  measure: string; place: string; isExample: true;   // Typ erzwingt die Kennzeichnung
  before: SlotId; after: SlotId; steps?: SlotId[]; notes: string[];
};
type Region = {
  slug: string; name: string; distanceKm: number;
  buildingFacts: string[];        // mindestens drei ortsspezifische Aussagen, sonst keine Seite
  services: string[]; text: string[];
};
type GuideArticle = {
  slug: string; question: string; answer: string[];
  sources?: Source[]; asOf?: string;                 // Pflicht, sobald steuerlich oder rechtlich
  relatedServices: string[];
};
type LegalNote = { asOf: string; text: string; sources: Source[] };
type Source = { label: string; url: string; kind: 'gesetz' | 'behoerde' | 'betrieb' };
type CtaPreset = 'reparatur' | 'sanierung' | 'photovoltaik' | 'dach-und-pv'
               | 'speicher' | 'potenzialcheck' | 'beratung' | 'sonstiges';
```

`content/cta.ts` hält alle Button-Texte an einer Stelle. Kein Button-Text wird im JSX geschrieben, damit die Matrix aus `05`, Teil C, durchsetzbar bleibt.

### 6.1 Content-Linter, `scripts/content-lint.ts`

Bricht den Build bei:
1. Floskeln aus einer Sperrliste: kompetenter Partner, Qualität steht bei uns, freuen uns auf Ihre Anfrage, Rundum-sorglos, aus einer Hand als einziges Argument, Jetzt, Gratis, Sichern, Sparen, unschlagbar, günstigster.
2. Zahl mit Einheit ohne `Source` im selben Objekt, Ausnahmeliste für Maße der 3D-Szene.
3. mehr als zwei unerklärten Fachbegriffen je Absatz, Wortliste aus `content/glossary.ts`, Beschluss `05`, W04.
4. steuerlichem oder rechtlichem Text ohne `asOf` und ohne Quelle.
5. `Project` ohne Kennzeichnung, `Region` mit weniger als drei ortsspezifischen Aussagen.
6. Gedankenstrichen im deutschen Text und doppelten Anführungszeichen statt der deutschen Form.
7. fehlender interner Verlinkung nach den Regeln aus Abschnitt 20.

---

## 7 · Design Tokens

`styles/tokens.css` ist die Quelle, `tailwind.config.ts` bildet sie ab. Kein Wert wird in einer Komponente direkt geschrieben.

```css
:root{
  /* Flächen und Text, Nachtmodus */
  --surface-0:#111211; --surface-1:#1B1C1A; --surface-2:#232420;
  --text-0:#F3F0E9;   --text-1:#C9C1B4;   --text-2:#8C867B;
  --hair:rgba(243,240,233,.10); --hair-1:rgba(243,240,233,.20);
  /* Domänen und Zustand */
  --dach:#9A6950; --dach-text:#C08A6E;      /* 4,0:1 Fläche · 6,4:1 Text */
  --energie:#D5B45A;                         /* 9,4:1 */
  --nature:#667060; --nature-text:#8FA083;
  --state-error:#E08B76; --state-ok:#8FA083;
  --focus:var(--energie);
}
[data-surface="day"]{
  --surface-0:#F3F0E9; --surface-1:#E9E4D9; --surface-2:#E2DCCF;
  --text-0:#111211;   --text-1:#57534B;   --text-2:#7A7469;
  --hair:rgba(17,18,17,.12); --hair-1:rgba(17,18,17,.22);
  --dach-text:#8A5C45;                       /* auf hell dunkler, 5,4:1 */
  --nature-text:#4F5A4A;
}
```

Der Flächenwechsel läuft über ein Attribut am Sektionscontainer, nicht über eine zweite Farbpalette in den Komponenten. Damit funktioniert jede Sektion in beiden Modi ohne Zusatzcode, Beschluss `05`, W10.

---

## 8 · Typografie

| Punkt | Festlegung |
|---|---|
| Familien | Instrument Serif 400 und 400 kursiv, Inter variabel 400 bis 600 |
| Auslieferung | selbst gehostet, woff2, Subset Latin plus deutsche Sonderzeichen und die benötigten Ziffern |
| Preload | zwei Dateien: Instrument Serif 400, Inter 400. Alles Weitere nachgeladen |
| Fallback | `size-adjust`, `ascent-override` und `descent-override` je Familie, damit der Schriftwechsel keinen Layoutsprung erzeugt |
| Skala | Tokens `--t-display-xl` bis `--t-spec` aus `02`, Abschnitt 3.2, als Utilities `.t-display-xl` usw. |
| Grenzen | Display-XL nur im Hero und im Statement, sonst maximal Display-L, Beschluss `05`, Teil B |
| Satz | `lang="de"`, `hyphens: auto` nur unter 40 Zeichen Spaltenbreite, `text-wrap: balance` für Display, `pretty` für Fließtext, `tabular-nums` für alle Maße und Nummern |

---

## 9 · Farbvariablen

Siehe Abschnitt 7. Zusätzlich verbindlich:

1. Fließtext ausschließlich `--text-0` und `--text-1`.
2. Domänenfarbe als Text ausschließlich über `--dach-text` und `--nature-text`.
3. Fokusring immer `--focus`, 2 Pixel, 2 Pixel Abstand, wird nie entfernt.
4. Zustände immer doppelt kodiert, Farbe plus Text.
5. Kein `#000` und kein `#fff` im Projekt. Ein Lint-Schritt prüft das.
6. Ein Skript prüft alle Token-Paare gegen die WCAG-Formel und bricht bei Unterschreitung der in `02` festgelegten Schwellen.

---

## 10 · Spacing-System

Tokens `--s-1` bis `--s-11` aus `02`, Abschnitt 4, abgebildet auf Tailwind `spacing`. Zusätzlich:

- `Section` erhält `rhythm="normal" | "tight" | "cesura"` und setzt daraus den vertikalen Abstand. Zwei benachbarte Sektionen dürfen nie denselben Rhythmus und dieselbe Fläche haben, geprüft im Rauchtest über die DOM-Reihenfolge.
- Abstand vor einer Haarlinie zu Abstand danach im Verhältnis 3 zu 2.
- Vertikale Abstände nur über `gap`, nie über Margin an Einzelelementen.
- Layout: 12 Spalten ab `md`, Randspalte 170 Pixel, Textspalte maximal 7 Spalten, Zweispalter 5 zu 7 oder 7 zu 5, niemals 6 zu 6.

---

## 11 · Motion Tokens

```css
:root{
  --dur-1:240ms; --dur-2:480ms; --dur-3:640ms; --dur-4:900ms; --dur-5:1100ms; --dur-6:1800ms;
  --ease-out:cubic-bezier(.16,1,.3,1); --ease-inout:cubic-bezier(.65,0,.35,1);
  --stagger:80ms;
  /* Masseregel als Token, nicht als Bauchgefühl */
  --move-surface:8px; --move-block:12px; --move-text:16px; --move-detail:24px;
  --parallax-max:8%;
}
```

Jede Animation nimmt ihre Amplitude aus einem dieser vier Tokens. Andere Werte sind im Review nicht zulässig.

---

## 12 · GSAP-Architektur

```text
motion/
├── gsapContext.ts     registriert ScrollTrigger, setzt Defaults, kapselt gsap.context
├── motionProfile.ts   liefert 'full' | 'mobile' | 'low' | 'reduced'
├── useScrollScene.ts  Hook: Szene registrieren, Cleanup, matchMedia, Profil abfragen
├── useReveal.ts       Batch-Reveal über data-reveal
├── useParallax.ts     begrenzter Parallax, klemmt auf --parallax-max
└── scenes/            hero.ts split.ts layers.ts process.ts arc.ts projects.ts map.ts cta.ts
```

Verbindliche Punkte:

1. **Content-erst-Schalter, Beschluss `05`, W11.** JavaScript setzt `html.motion-ready` erst, wenn die Motion-Schicht initialisiert ist. Alle Startzustände hängen an dieser Klasse. Ohne Skript, bei Fehler, bei Bewegungsreduktion und für Crawler ist alles sichtbar.
2. Ein `ScrollTrigger` je Szene, Reveals über `ScrollTrigger.batch`.
3. Alles in `gsap.context()` mit `gsap.matchMedia()`, drei Zweige: ab 900 Pixel, unter 900 Pixel, reduzierte Bewegung.
4. `scrub` immer als Zahl. Nur `transform`, `opacity`, `clip-path`.
5. `ScrollTrigger.refresh()` nach `document.fonts.ready` und nach dem Laden der Bilder im ersten Viewport.
6. Plugins: ausschließlich ScrollTrigger. Kein SplitText, kein Flip, kein MotionPath, kein ScrollSmoother, kein Lenis.
7. Szenen werden nach `experience` der Route geladen, nicht global.
8. `will-change` nur szenenweise, danach entfernt.

---

## 13 · Three.js-Architektur

```text
three/
├── index.ts        entscheidet: Szene laden oder Fallback, dynamischer Import
├── renderer.ts     ein Renderer, Größe, DPR-Grenze, Sichtbarkeit, Kontextverlust
├── heroScene.ts    implementiert SceneController
├── layerScene.ts   implementiert SceneController
├── geometry/       house.ts roof.ts tiles.ts modules.ts rails.ts battens.ts chimney.ts
├── materials/      tile.ts glass.ts metal.ts wood.ts render.ts (Tone Mapping, Farbraum)
├── lights/         sun.ts (Azimut und Farbtemperatur entlang des Lichtbogens)
└── fallback/       stills/ (aus der Szene exportiert) plus TextAlternative.tsx
```

```ts
export interface SceneController {
  mount(canvas: HTMLCanvasElement): Promise<void>;
  setProgress(p: number): void;      // 0 bis 1, von GSAP getrieben
  setProfile(p: MotionProfile): void;// Instanzzahl, DPR, Schatten
  resize(): void;
  dispose(): void;                   // Geometrien, Materialien, Texturen, Renderer
}
```

Verbindlich:

1. Geladen wird erst bei Annäherung des Canvas und nur wenn das Profil `full` oder `mobile` ist. Bei `low` und `reduced` niemals.
2. Keine externen Modelldateien. Alle Geometrien im Code, Ziegel und Module als je eine `InstancedMesh`.
3. Budget: maximal 25 Drawcalls, 60.000 Dreiecke, 3 Texturen mit je maximal 1024 Pixeln, DPR-Grenze 1,5 und mobil 1,25.
4. Aufbau über zwei Frames verteilt, keine Aufgabe über 200 Millisekunden.
5. Renderschleife nur bei sichtbarem Canvas und geänderter Szene, Stopp bei `visibilitychange`.
6. `webglcontextlost` führt in den Fallback, nicht in einen Fehler.
7. Der Canvas trägt `aria-hidden`, die Information steht daneben als Text. Beim Schichtmodell ist das die vollständige Schichtliste.
8. `dispose()` beim Routenwechsel, geprüft über einen Rauchtest, der zweimal hin und her navigiert und den Speicher beobachtet.

---

## 14 · Responsive System

| Breakpoint | Bereich | Spalten | Rand |
|---|---|---|---|
| `xs` | bis 639 | 4 | 20 |
| `sm` | 640 bis 899 | 6 | 32 |
| `md` | 900 bis 1199 | 12 | 40 |
| `lg` | 1200 bis 1599 | 12 | 56 |
| `xl` | ab 1600 | 12, Inhalt maximal 1440 | zentriert |

Regeln: Der Umschaltpunkt der Choreografie liegt bei 900 Pixeln und ist derselbe Wert in CSS, in `motionProfile` und in `gsap.matchMedia`, definiert an einer Stelle. Container-Queries für Felder und Bildslots, damit dieselbe Komponente in Rand- und Hauptspalte funktioniert. Bild-Crops kommen aus der Slot-Registry, nichts wird automatisch beschnitten. Kein Hover trägt Information. Touch-Ziele mindestens 48 Pixel.

---

## 15 · Accessibility

Verbindliche Prüfliste, Teil der Abnahme jeder Komponente:

1. Semantische Landmarks, Sprungmarke zum Inhalt als erstes fokussierbares Element.
2. Eine `h1` je Seite, lückenlose Hierarchie, im Rauchtest geprüft.
3. Tastaturbedienung für Mega-Panel, Mobilmenü, Formularschritte, Vorher-Nachher-Regler mit `role="slider"`, Karte, Sprungmarke im Hero.
4. Fokus immer sichtbar, `--focus`, nie `outline: none` ohne Ersatz.
5. Kontraste nach Abschnitt 9, automatisch geprüft.
6. `alt`-Texte beschreibend, aus der Slot-Registry, nie keywordhaltig. Dekoration `aria-hidden`.
7. `prefers-reduced-motion` ist ein Erstklassenpfad, kein Notausgang.
8. Formular: Label sichtbar, Fehler als Satz mit `aria-describedby`, Schrittwechsel per `aria-live="polite"`, Fokus auf die Schrittüberschrift.
9. Canvas hat eine Textalternative mit demselben Informationsgehalt.
10. Bewegte Inhalte laufen nie automatisch länger als fünf Sekunden.

---

## 16 · Performance und Lazy Loading

| Größe | Ziel | geprüft durch |
|---|---|---|
| HTML, CSS, kritisches JS je Route, komprimiert | unter 120 kB | `check-budget.ts` |
| GSAP mit ScrollTrigger | unter 55 kB | `check-budget.ts` |
| Three.js-Chunk | unter 180 kB | `check-budget.ts` |
| Bilder erster Viewport | unter 250 kB | Playwright, Netzwerkbilanz |
| LCP Desktop, Mobil im 4G-Profil | unter 1,8 s, unter 2,5 s | Lighthouse im Rauchtest |
| CLS, INP | unter 0,05, unter 200 ms | Lighthouse |

Maßnahmen: Code-Splitting je Route über `routes.ts`, Szenen und 3D dynamisch nach `experience`, `content-visibility: auto` ab dem dritten Viewport, `fetchpriority="high"` nur für das Hero-Bild, `loading="lazy"` und `decoding="async"` sonst, feste Seitenverhältnisse überall, eine Kornkachel unter 4 kB, keine Laufzeit-Bilddienste, keine Schriftanfragen an Dritte. **Das LCP-Element ist immer eine Überschrift, niemals ein Canvas oder ein Video.**

---

## 17 · Bild- und Asset-System

Die 16 Slots aus `03-BILDBRIEFINGS.md` werden zur Datenstruktur:

```ts
type SlotId = 'obj-01' | 'obj-02' | 'obj-03' | 'obj-04'
            | 'mat-01' | 'mat-02' | 'mat-03' | 'mat-04' | 'mat-05'
            | 'pro-01' | 'pro-02' | 'pro-03' | 'pro-04' | 'pro-05'
            | 'reg-01' | 'reg-02';

type Slot = {
  id: SlotId; klasse: 'objekt' | 'material' | 'prozess' | 'region';
  motiv: string; alt: string;
  ratio: { desktop: string; mobile: string };     // '16/9', '4/5'
  widths: number[]; priority: 'eager' | 'lazy';
  motion: 'none' | 'mask' | 'parallax-4' | 'parallax-6' | 'parallax-8';
  file?: string;                                  // fehlt: Materialfläche mit Kennung
  quelle?: { art: 'foto' | 'erzeugt'; datum: string };
};
```

`Figure` liest den Slot und rendert entweder `<picture>` mit AVIF und WebP in den Breiten der Registry oder die gestaltete Materialfläche mit Slot-Kennung und Motivtext, Beschluss `05`, W12. Layout, Seitenverhältnis und Bewegung sind in beiden Fällen identisch, deshalb ändert der Bildeintritt später nichts am Aufbau.

`scripts/build-images.ts` erzeugt aus je einer Quelldatei alle Ableitungen mit `sharp`, entfernt Metadaten und schreibt die Herkunft in `public/img/QUELLEN.md`. Ein erzeugtes Bild wird nie als Fotografie eines realen Projekts ausgegeben.

---

## 18 · Formulararchitektur

```text
forms/
├── ProjectInquiry.tsx   Ansicht, vier Schritte
├── steps.ts             Schritte als Daten, inkl. Vorbelegung über CtaPreset
├── machine.ts           Zustand: step, values, errors, touched, submitState
├── validate.ts          Regeln je Feld, Meldungen als Sätze
└── submit.ts            Adapter-Interface plus Stub für das Musterprojekt
```

```ts
export interface InquirySubmitter {
  submit(payload: InquiryPayload): Promise<{ ok: boolean; message: string }>;
}
```

Im Musterprojekt liefert der Stub `ok: true` mit dem Hinweis, dass nichts übermittelt und nichts gespeichert wird. Ein echter Endpunkt wird später eingesetzt, ohne die Ansicht zu ändern.

Verbindlich: vier Schritte, ein Feldbereich je Schritt, Vorbelegung aus dem CTA, Telefon oder E-Mail genügt, Validierung beim Verlassen des Feldes, Fehler als Satz mit Lösung, optionale Felder als „optional“ gekennzeichnet statt Pflichtfelder mit Sternchen, Zustand im `sessionStorage`, Zurücknavigation ohne Verlust, Einwilligung als eigene Checkbox ohne Vorauswahl, Datei-Upload im Musterprojekt sichtbar und deaktiviert mit Begründung, kein Scheinversand.

---

## 19 · Conversion-Tracking, Platzhalter

`lib/track.ts` ist ein dünner Adapter mit No-Op-Implementierung. Es wird kein Tracking-Skript eingebunden, solange keine Einwilligung und kein Werkzeug entschieden ist.

```ts
export type TrackEvent =
  | 'hero_cta_view' | 'hero_cta_click' | 'hero_skip'
  | 'bridge_potenzialcheck_click' | 'services_bridge_click'
  | 'choice_select' | 'process_potenzialcheck_click'
  | 'projects_slider_use' | 'statement_beratung_click'
  | 'form_start' | 'form_step' | 'form_error' | 'form_submit'
  | 'phone_click' | 'sticky_action_click' | 'region_place_click';

export function track(e: TrackEvent, payload?: Record<string, string | number>): void;
```

Regeln: Aufruf ausschließlich über `track`, nie direkt an ein Werkzeug. Kein Aufruf ohne Einwilligung, geprüft über ein Consent-Gate, das im Musterprojekt immer negativ antwortet. Keine personenbezogenen Daten im Payload, insbesondere keine Freitexte, keine Postleitzahl vollständig, sondern nur die erste Stelle als Region. Ereignisnamen sind fest, damit später eine Auswertung ohne Neubau möglich ist.

---

## 20 · Lokale SEO-Struktur

**Sprachregel, Beschluss `05`, W05:** „Zuhause im Landkreis Hildesheim. Im Einsatz bis etwa 70 Kilometer.“ Der Radius ist nie die Hauptaussage.

**Kriterium für eine Ortsseite:** Sie entsteht nur, wenn `Region.buildingFacts` mindestens drei ortsspezifische, nachprüfbare Aussagen enthält, etwa vorherrschende Baujahre, typische Dachformen, ortsbildprägende Materialien. Ohne diese Substanz keine Seite. Der Content-Linter setzt das durch.

**Pflichtbausteine einer Ortsseite:** Brotkrume, `h1` mit Ort und Leistung, Absatz zur Bauwirklichkeit vor Ort, drei stärkste Leistungen mit Verweis, ein Beispielprojekt aus der Umgebung falls vorhanden, Entfernungsangabe zur Werkstatt, Kontaktabschluss, `BreadcrumbList` und `Service`-Markup.

**Interne Verlinkungsmatrix, im Linter geprüft:**

| von | nach |
|---|---|
| Startseite | beide Domänenseiten, Brückenseite, Projekte, Ratgeberübersicht, Ortsseite Hildesheim |
| Domänenseite | alle eigenen Leistungsseiten, Brückenseite |
| Leistungsseite | Brückenseite, zwei verwandte Leistungen, ein passender Ratgeberartikel |
| Ratgeberartikel | eine Leistungsseite, Brückenseite |
| Ortsseite | drei Leistungsseiten, Brückenseite |
| Brückenseite | beide Domänenseiten, Projekte, Potenzialcheck |

**NAP-Konsistenz:** Name, Anschrift und Telefon stehen ausschließlich in `content/company.ts` und werden überall von dort gelesen, auch im Schema, im Footer und im Impressum. Keine zweite Schreibweise im Projekt.

---

## 21 · Abnahmekriterien je Komponente

Eine Komponente gilt als fertig, wenn: ohne JavaScript vollständig lesbar, Tastaturbedienung geprüft, Kontraste geprüft, beide Flächenmodi geprüft, `reduced motion` geprüft, mobil und Desktop geprüft, Inhalte aus `content/` bezogen, keine Zahl ohne Quelle, keine Datei über 250 Zeilen, `oxlint` und `tsc` ohne Befund, Content-Linter ohne Befund.

## 22 · Reihenfolge in Phase 8

1. Projektaufsetzung, Tokens, Tailwind-Theme, Schriften, `base.css`
2. `routes.ts`, `Seo.tsx`, `schema.ts`, Sitemap- und Robots-Erzeugung
3. Design-Primitive plus Spezimen-Seite als lebendes Abbild
4. Header, Mega-Panel, Mobilmenü, Footer, Sticky Actions, Brotkrume
5. Content-Modell und Startseiteninhalte, Content-Linter
6. Startseite statisch, vollständig lesbar, ohne Motion und ohne 3D
7. Motion-Schicht, `motion-ready`-Schalter, Reveals, Nähte
8. Hero-Choreografie, danach Three.js Hero-Szene, danach Schichtmodell, jeweils mit Fallback
9. Formular inklusive Zustand, Barrierefreiheit und Hinweistexten
10. Unterseiten Stufe 1 nach Experience-Budget
11. Bild-Pipeline und Slot-Registry, Platzhalter aktiv
12. Messung, Barrierefreiheitsprüfung, Content-Prüfung, Selbstbewertung

Schritt 6 ist die wichtigste Zäsur: Erst wenn die Startseite ohne Motion und ohne 3D vollständig funktioniert, wird animiert.
