# DACHWERK

Musterprojekt einer Website für einen fiktiven Meisterbetrieb für Dachhandwerk und
Photovoltaik im Landkreis Hildesheim. Konzept, Art Direction und Umsetzungsstand
sind in `docs/` dokumentiert, die Dokumente sind die verbindliche Grundlage.

> DACHWERK ist ein fiktiver Betrieb. Alle Firmenangaben sind Platzhalter, Projekte
> sind als Beispiele gekennzeichnet, und die Seite läuft auf `noindex`, solange
> `SITE_INDEXABLE` in `src/config.ts` auf `false` steht.

## Befehle

| Befehl | Wirkung |
|---|---|
| `npm run dev` | Entwicklungsserver |
| `npm run build` | Typprüfung, Client-Build, SSR-Build, Vorrendern aller Routen, robots und Sitemap |
| `npm run preview` | gebautes Ergebnis lokal ausliefern |
| `npm run check` | Typprüfung, Linter, Content-Linter, Kontrastprüfung |
| `npm run budget` | Bundlegrößen gegen das Budget aus `docs/06` |
| `npm run fonts` | Schriften aus den Fontsource-Paketen nach `public/fonts` kopieren |
| `npm run content:lint` | Floskeln, Zahlen ohne Quelle, Fachwortdichte, Standdaten, interne Verlinkung |
| `npm run contrast` | alle Token-Paare gegen die WCAG-Formel |

## Architektur in Kurzform

- **Eine Quelle für Routing:** `src/routes.ts` speist Sitemap, Vorrendern, Brotkrume,
  Navigation und das Inszenierungsbudget je Seitentyp. Die Datei enthält kein JSX,
  damit die Build-Skripte sie lesen können.
- **Vorrendern statt Server:** `vite build` erzeugt Client und SSR-Bundle,
  `scripts/prerender.ts` schreibt für jede Route echtes HTML mit finalen Metadaten.
- **Content erst, Bewegung danach:** Startzustände von Animationen hängen an
  `html.motion-ready`, das JavaScript erst nach der Initialisierung setzt. Ohne
  Skript, bei Fehler und bei reduzierter Bewegung ist alles sichtbar.
- **3D hinter einem Vertrag:** `src/three/` wird dynamisch geladen, nur bei
  sichtbarem Canvas und nur in den Profilen `full` und `mobile`.
- **Bildplätze als Daten:** `src/content/slots.ts` hält die sechzehn Slots aus
  `docs/03-BILDBRIEFINGS.md`. Fehlt die Datei, rendert `Figure` die gestaltete
  Materialfläche mit Kennung. Layout und Bewegung sind identisch.
- **Firmenangaben mit Bestätigungsflag:** `src/content/company.ts`. Der
  Schema-Generator gibt ausschließlich bestätigte Felder aus.

## Struktur

```text
src/
├── routes.ts            Routen, Metadaten, Schema, Budget
├── config.ts            Indexierung, Ursprung, Standdatum
├── styles/              Tokens, Basis, Schriften, Materialflächen
├── design/              Primitive ohne Inhaltswissen, Zeichnungen
├── layout/              Kopf, Fuß, Brotkrume, SEO, Aktionsleiste
├── sections/            Sektionen der Startseite
├── pages/               eine Datei je Seitentyp
├── motion/              Profil, GSAP-Kontext, Szenen
├── three/               Renderer, Hero-Szene, Geometrie, Materialien
├── forms/               vierstufige Projektanfrage
├── content/             typisierte Inhalte, einzige Textquelle
└── lib/                 Schema, Kopfbereich, Tracking, Formate
```
