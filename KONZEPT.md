# Klarwerk – Website-Konzept

## Projektübersicht

Marketing-Website für die Agentur **Klarwerk**. Stack: **Astro + Tailwind CSS**. Prinzip: **Mobile First**.

---

## Design-Tokens

| Token   | Hex       | Verwendung                          |
|---------|-----------|-------------------------------------|
| Primär  | `#1E2A4A` | Header, Überschriften, Footer       |
| Akzent  | `#FF5A3C` | Buttons, CTAs (ausschließlich)      |
| Support | `#17B0A0` | Icons, Highlights, Links, Hover     |
| Flächen | `#F4F5F7` | Hintergründe, Cards, Sections       |
| Text    | `#1A1A1A` | Fließtext                           |

---

## Typografie

| Rolle     | Font          | Quelle       | Gewichte        |
|-----------|---------------|--------------|-----------------|
| Headlines | Space Grotesk | Google Fonts | 400, 500, 600, 700 |
| Body/UI   | Inter         | Google Fonts | 400, 500, 600   |

Tailwind-Klassen: `font-headline` / `font-body`

---

## Seitenstruktur

```
/                               → Startseite
/leistungen/                    → Leistungsübersicht
  /leistungen/social-media-content/
  /leistungen/performance-marketing/
  /leistungen/website-erstellung/
  /leistungen/ki-automatisierung/
/referenzen/                    → Referenzen
/ueber-uns/                     → Über uns
/blog/                          → Blog
/kontakt/                       → Kontakt
```

---

## Layout-Komponenten

### Header (sticky)
- Hintergrund: `primary (#1E2A4A)`
- Links: Logo „Klarwerk"
- Mitte/rechts: Navigation (5 Links)
- Rechts: CTA-Button „Kostenloses Erstgespräch" (`accent`)
- Mobile: Hamburger-Menü mit Slide-down-Panel

### Footer (dreispaltig)
| Spalte 1            | Spalte 2              | Spalte 3          |
|---------------------|-----------------------|-------------------|
| Logo + Kurzbeschreibung | Leistungen + Rechtliches | Kontakt + CTA |

---

## Ordnerstruktur

```
src/
  components/
    Header.astro
    Footer.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    leistungen/
      index.astro
      social-media-content.astro
      performance-marketing.astro
      website-erstellung.astro
      ki-automatisierung.astro
    referenzen.astro
    ueber-uns.astro
    blog/
      index.astro
    kontakt.astro
  styles/
    global.css
public/
  favicon.svg
```

---

## Technischer Stack

| Technologie     | Version | Zweck                            |
|-----------------|---------|----------------------------------|
| Astro           | ^4.15   | Static Site Generator            |
| Tailwind CSS    | ^3.4    | Utility-First Styling            |
| @astrojs/tailwind | ^5.1  | Astro-Integration für Tailwind   |
| TypeScript      | strict  | Typsicherheit                    |
| Google Fonts    | –       | Space Grotesk + Inter (via Link) |
