# DACHWERK · PHASE 8: UMSETZUNGSSTAND

Stand: 28.08.2026
Grundlage: `01` bis `06`, alle freigegeben. Diese Datei hält fest, was gebaut wurde,
was geprüft wurde, wo bewusst von der Architektur abgewichen wurde und was offen ist.

---

## 1 · Gebaut

| Bereich | Stand |
|---|---|
| Projektaufsetzung | Vite 6, React 19, TypeScript strikt, Tailwind mit ersetztem Theme, oxlint, tsx |
| Design Tokens | `src/styles/tokens.css`, Farben, Typografie, Raster, Bewegung, Tagfläche über `[data-surface="day"]` |
| Typografie | Instrument Serif und Inter, selbst gehostet als woff2, Subsets latin und latin-ext, Preload für zwei Schnitte, Fallback-Metriken |
| Design-Primitive | Section, Button, Icon mit 14 eigenen Zeichen, Figure, Field, Row, Measure, Prose, Zeichnungen Dachschnitt und Karte |
| Layout | Header mit Mega-Panel und Mobilmenü, Footer, Brotkrume, Sprungmarke, mobile Aktionsleiste, SEO-Komponente |
| Routing | 18 Routen aus `src/routes.ts`, eine Quelle für Sitemap, Prerender, Brotkrume, Navigation und Inszenierungsbudget |
| Vorrendern | eigener Schritt, `scripts/prerender.ts`, echtes HTML mit finalen Metadaten je URL, danach Hydrierung |
| SEO | Titel, Description, Canonical, Open Graph, robots-Schalter, 404 |
| Schema.org | RoofingContractor, WebSite, Service, BreadcrumbList, FAQPage. Unbestätigte Firmenangaben werden über ein `confirmed`-Flag ausgeschlossen |
| Content-Modell | typisierte Inhalte in `src/content/`, 12 Leistungen, 2 Beispielprojekte, 3 Ratgeberartikel, 1 Ortsseite, Prozess, Schichten, Slots, CTA-Texte, Rechtshinweise |
| Startseite | 14 Sektionen in acht Akten, zwei Flächenwechsel über die 38-Grad-Kante, drei Pins |
| Motion | GSAP mit ScrollTrigger, Profil aus einem Modul, Content-erst-Schalter `html.motion-ready`, Szenen für Hero, Split, Schichten, Prozess, Flächenwechsel, Karte, Reveal-Batch, begrenzter Parallax |
| Three.js | Hero-Szene mit Haus, Kamin, Dachflächen, Ziegeln und Modulen als je eine InstancedMesh, Kamera-Keyframes, wandernde Sonne, Off-Axis-Projektion für die Komposition, Renderschleife nur bei Sichtbarkeit und Änderung, Kontextverlust behandelt |
| Mobiler Hero | kein Pin, statisches Eröffnungsbild, danach drei diskrete Zustände als Standbilder, aus derselben Szene gerendert und danach freigegeben |
| Formular | vier Schritte, Vorbelegung aus dem CTA, feldweise Validierung, Meldungen ausserhalb des Textflusses, Zustand im sessionStorage, Einwilligung, deaktivierter Upload mit Begründung, Stub ohne Versand |
| Unterseiten | 2 Domänenseiten, 4 Leistungsseiten, Brückenseite, Projekte, Ortsseite, Ratgeberübersicht und 3 Artikel, Über uns, Kontakt, Impressum, Datenschutz |
| Bild-System | Slot-Registry mit 16 Plätzen, `Figure` mit AVIF und WebP in fünf Breiten, Materialfläche mit Kennung solange keine Datei vorliegt |
| Bild-Pipeline | `scripts/build-images.ts` mit sharp, erzeugt alle Ableitungen und schreibt die Herkunft nach `public/img/QUELLEN.md` |
| Prüfskripte | Content-Linter, Kontrastprüfung, Budgetprüfung, Sitemap- und robots-Erzeugung, Schriftkopie |
| Tracking | Adapter mit festen Ereignisnamen, No-Op, Consent-Gate, keine Freitexte und keine vollständige Postleitzahl im Payload |

## 2 · Geprüft

Alle Prüfungen gegen den Produktionsbuild, ausgeliefert über einen statischen Server,
Chromium über Playwright.

| Prüfung | Ergebnis |
|---|---|
| Typprüfung, Linter | ohne Befund |
| Content-Linter | 210 Textstellen und 18 Routen, keine Befunde |
| Kontraste | 20 Token-Paare geprüft, alle bestanden. Zwei Tokenwerte mussten korrigiert werden |
| Bundlegrößen | kritisches JS 114,6 von 120 kB, GSAP 44,7 von 55 kB, Three.js 128,9 von 180 kB |
| LCP | 176 bis 212 ms, LCP-Element ist die Hero-Überschrift, nicht der Canvas |
| CLS | 0,0008 |
| Alle 18 Routen | Status 200, genau eine h1, kein horizontaler Überlauf |
| Überschriftenhierarchie | acht Seiten geprüft, keine Sprünge mehr |
| Ohne JavaScript | 1461 Wörter sichtbar, null unsichtbare Reveal-Elemente, fünf Handlungsangebote bedienbar |
| Reduzierte Bewegung | `motion-ready` wird nicht gesetzt, keine Sequenz, alles sichtbar |
| Tastatur | Sprungmarke ist erstes Ziel, Fokus 2px Solar sichtbar, 35 Ziele erreichbar, Vorher-Nachher-Regler mit Pfeiltasten, Home und End bedienbar |
| Formular | Vorbelegung, PLZ-Prüfung, Kontaktprüfung, Einwilligung und Abschlussmeldung vollständig durchgespielt |
| Mobil | Hero ohne Pin bei 86svh, drei Standbilder gerendert, Aktionsleiste erscheint nach dem Hero und verschwindet im Kontaktbereich |
| Breiten 1440, 1024, 900, 768, 390 | kein horizontaler Überlauf |
| Bild-Pipeline | mit einer Testdatei geprüft: 10 Ableitungen, srcset im HTML, Browser wählt AVIF, Bild lädt. Testdatei danach entfernt |

## 3 · Im Test gefundene und behobene Fehler

1. **Beide Mega-Panels dauerhaft offen.** Das HTML-Attribut `hidden` wird von der Klasse `lg:block` überschrieben. Panels werden jetzt konditional gerendert.
2. **Rückseitige Dachfläche falsch rotiert.** Die Neigung zeigte nach vorne unten statt nach hinten. Korrigiert auf `PI` minus Neigung.
3. **Haus überlappte die Hero-Überschrift.** Off-Axis-Projektion über `setViewOffset`, abhängig vom Fortschritt.
4. **Weiter-Button im Formular nicht klickbar.** Eine verschwindende Fehlermeldung verschob den Button zwischen Mousedown und Mouseup. Meldungen liegen jetzt außerhalb des Textflusses.
5. **Validierung beim Verlassen eines Feldes meldete fremde Felder.** Es wird nur noch das verlassene Feld geprüft.
6. **Horizontaler Überlauf durch Zeichnungen.** Grid- und Flex-Kinder schrumpfen ohne `min-width: 0` nicht. Utility ergänzt.
7. **Kopfzeile ohne Hintergrund.** Tailwind kann bei CSS-Variablen kein Alpha einsetzen. Halbtransparente Flächen liegen jetzt als eigene Token vor.
8. **Überschriftensprung h1 auf h3** auf sechs Seiten. Sektionslabels tragen dort jetzt die h2.
9. **Zwei Kontraste unter 4,5:1** bei Meta-Text auf erhöhten Flächen. Tokenwerte korrigiert, Prüfung erweitert.
10. **Maßlinienbeschriftung abgeschnitten** in der Schnittzeichnung. Koordinaten korrigiert.
11. **Auf Mobil war der Hero gepinnt** und 320vh hoch. Jetzt 86svh ohne Pin, dazu drei Standbilder.
12. **Bildslots im Split waren hart codiert.** Echte Bilder hätten dort nicht eintreten können. Split nutzt jetzt die Registry.
13. **Dateinamen der Pipeline passten nicht zu `Figure`.** Komponente auf die tatsächlichen Ableitungen mit srcset umgestellt.
14. **Tastatureingabe am Vorher-Nachher-Regler wurde vom Scroll-Handler überschrieben.** Zustand liegt jetzt in einem Ref und wirkt sofort.

## 4 · Bewusste Abweichungen von `06-PRODUCTION-ARCHITECTURE.md`

| Punkt | Abweichung | Begründung |
|---|---|---|
| `vite-react-ssg` | ersetzt durch einen eigenen Prerender-Schritt | Das Paket verlangt React Router 6, das Projekt nutzt 7. Abschnitt 1.1 sieht ausdrücklich einen gleichwertigen Prerender-Schritt vor. Nebeneffekt: volle Kontrolle über den Kopfbereich, der jetzt als Datenprodukt aus der Routenliste entsteht |
| Code-Splitting je Route | nicht umgesetzt | `renderToString` kann `React.lazy` nicht auflösen, das vorgerenderte HTML würde den Suspense-Fallback statt der Seite enthalten. Das wäre für die SEO schädlicher als der Gewinn. Splitting bleibt für Three.js und GSAP, die den größten Anteil tragen |
| Schichtmodell in 3D | als SVG-Schnittzeichnung mit scrollgesteuertem Explosionsfaktor | Der dokumentierte Fallbackpfad ist vollständig umgesetzt und trägt die Information, zusätzlich die Schichtliste als Text. Eine zweite Three.js-Szene ist vorbereitet, aber nicht gebaut, siehe offene Punkte |

## 5 · Offene Punkte

1. **Bilder.** Alle 16 Slots tragen die gestaltete Materialfläche mit Kennung. Die Pipeline ist geprüft, der Eintritt echter Bilder ändert kein Layout.
2. **Schichtmodell als Three.js-Szene.** Derzeit SVG. Der `SceneController`-Vertrag steht, `layerScene.ts` müsste ergänzt werden.
3. **Stufe 2 der Seiten.** Offen sind acht Leistungsseiten ohne eigene Seite, vier weitere Ortsseiten und zwei Ratgeberartikel. Alle Inhalte liegen als Daten vor, die Templates existieren.
4. **Open-Graph-Bild** ist derzeit ein SVG. Für Plattformen, die kein SVG lesen, ist eine PNG-Variante nötig, sobald das Hero-Motiv vorliegt.
5. **Formular ohne Endpunkt.** Der Stub übermittelt nichts. Ein echter Endpunkt ersetzt `submit.ts`, die Ansicht bleibt unverändert.
6. **Kritisches JS bei 114,6 von 120 kB.** React und Router tragen den größten Teil. Ohne Route-Splitting bleibt die Reserve klein. Bei weiterem Wachstum kommen ein Preact-Alias oder ein Streaming-Renderer mit echtem Splitting in Frage.
7. **Lighthouse** ist in der Arbeitsumgebung nicht verfügbar. LCP, CLS und Bundlegrößen wurden direkt gemessen, ein vollständiger Lighthouse-Bericht steht noch aus.
8. **Freigabeliste vor einem echten Livegang** unverändert: Kostenfreiheit des Potenzialchecks, Gewährleistung, Mitgliedschaften, Team, Erreichbarkeitszeiten, reale Anschrift und Registerdaten, danach `SITE_INDEXABLE` auf `true`.
