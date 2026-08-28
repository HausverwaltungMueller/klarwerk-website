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

---

# TEIL B · ABNAHME- UND REVIEW-DURCHLAUF

Stand 28.08.2026. Geprüft wurde der gebaute Stand in `dist`, nicht der Entwicklungsserver. Grundlage sind die acht Prüffelder der Abnahme: visuelle Qualität, Erlebnis und Storytelling, SEO, Performance, Barrierefreiheit, Inhalt, technische Architektur, Conversion.

## B1 · Prüfumfang

| Feld | Vorgehen | Umfang |
|---|---|---|
| Visuell | Screenshots bei 1440, 1280, 1024, 768, 390 und 375 Pixel an je neun Scrollpositionen, dazu Ausschnitte der Nähte, des Hero und der Zeichnungen | 54 Aufnahmen der Startseite, 16 der Unterseiten |
| Überlauf | Messung von `scrollWidth` gegen `clientWidth` plus Ermittlung des verursachenden Elements | 6 Breiten, 8 Seiten |
| SEO | Prüfung mit abgeschaltetem JavaScript über alle 18 Routen: Titel, Beschreibung, Kanonisch, Robots, Open Graph, Überschriftenkette, Wortzahl, strukturierte Daten, interne Verweise, Brotkrume, Sprache | 18 Routen |
| Verlinkung | neues Prüfskript `check-links.ts` gegen die Matrix aus `06`, Abschnitt 20 | 12 Regeln |
| Performance | FCP, LCP samt LCP-Element, CLS, Long Tasks, Übertragungsvolumen je Typ, Bundlebudget | 4 Routen |
| Barrierefreiheit | Sprunglink, Landmarken, Alternativtexte, Feldbezeichnungen, doppelte Kennungen, positive `tabindex`, Fokusreihenfolge und Fokusring, Tastaturbedienung von Panel, Regler und Formular, reduzierte Bewegung, Betrieb ohne JavaScript | 13 Routen |
| Inhalt | Content-Linter, Abgleich der Sprachregeln aus `05` und `06` mit dem gerenderten Text | 214 Textstellen |
| Architektur | Zeilengrenze je Datei, Doppelungen, Qualitätsschranken im Build | 88 Dateien |
| Conversion | Abgleich aller Handlungsangebote der Startseite mit der CTA-Matrix aus `05`, Teil C | 8 CTA im Hauptbereich |

## B2 · Im Review gefundene und behobene Fehler

| Nr | Befund | Bewertung | Behebung |
|---|---|---|---|
| 15 | **Kein Tailwind-Rahmenstandard.** Ohne Preflight steht `border-style` auf `none`. Jede Utility wie `border`, `border-t` oder `border-b` blieb wirkungslos. Der sekundäre Knopf hatte damit im gesamten Projekt keine sichtbare Umgrenzung, ebenso Trennlinien und Feldunterkanten | kritisch, betraf jede Seite | Rahmenstandard in `base.css` ergänzt, wie Preflight ihn setzt |
| 16 | **Solar als Textfarbe auf der Tagfläche.** `--energie` war auf der Tagfläche nicht überschrieben. Solar auf Creme ergibt etwa 1,8:1. Betroffen waren Schichtnamen, Domänentitel und Verweise auf die Brückenseite | kritisch, Lesbarkeit | Token `--energie-text` je Fläche getrennt, zwölf Textstellen umgestellt, `--dach-text` der Tagfläche nachgezogen, Prüfung um sechs Paare erweitert |
| 17 | **Grenzen von Bedienelementen unter 3:1.** `--hair-1` trägt Knopfrahmen, Feldunterkanten und Navigationsunterstreichung und lag bei 1,6 bis 1,8:1, WCAG 1.4.11 fordert 3:1 | kritisch, Barrierefreiheit | Alphawerte auf 0,40 (Nacht) und 0,50 (Tag) angehoben, Prüfskript rechnet halbtransparente Token jetzt über der Fläche aus |
| 18 | **Der 38-Grad-Winkel fehlte in der Ruhelage beider Nähte.** Die Szene flachte den Winkel bis auf 0 Grad ab, die Lichtlinie blieb bei 38 Grad und löste sich sichtbar von der Kante. Die statische Fassung nutzte 38 Prozent statt des Winkels, das ergibt 21 Grad. Die Nachtnaht zeigte gar keinen Wechsel, weil die Grundfläche fehlte | kritisch, Verstoß gegen `04`, A.3 und Szene `arcToDay` | Naht neu gefasst: der Winkel ist konstant, bewegt wird die Kante entlang ihrer Richtung. `--arc-run` und `--arc-edge` folgen der Bandhöhe, die Grundfläche ist die abgebende Fläche |
| 19 | **Standbildfassung bei reduzierter Bewegung fehlte.** Am Desktop war die Szene abgeschaltet und die Standbilder ausgeblendet, der Hero zeigte kein Bild. `04`, Teil E verlangt dort ausdrücklich die Standbildfassung | kritisch, Barrierefreiheit | Standbildabschnitt bei `prefers-reduced-motion` auch am Desktop sichtbar, im Querformat gerendert, Steuerung über Medienabfrage, damit sie ohne JavaScript stimmt |
| 20 | **Bestätigung nach dem Absenden außerhalb des Sichtfelds.** Sie steht höher als der Sendeknopf, der Blick blieb am Fußbereich | wichtig, Conversion | Bestätigung wird in den Blick geholt und erhält den Fokus |
| 21 | **Aktionsleiste blieb auf der Kontaktseite sichtbar.** Die Erkennung suchte nur `#kontakt`, die Kontaktseite nutzt `#anfrage`. `02` verlangt das Verschwinden im Formular | wichtig | beide Kennungen werden erkannt |
| 22 | **Mega-Panel blieb bei Tastaturbedienung offen** und wanderte in die Tabreihenfolge, obwohl der Fokus längst weitergezogen war | wichtig, Barrierefreiheit | Panel schließt, sobald der Fokus es und seinen Auslöser verlässt |
| 23 | **Startseite verwies nicht auf die Ratgeberübersicht und nicht auf die Domänenseite Photovoltaik.** Die Brückenseite verwies auf keine der beiden Domänenseiten und nicht auf Projekte. Eine Leistungsseite verwies auf keine benachbarte Leistungsseite, eine weitere auf keinen Ratgeberartikel | wichtig, Verstoß gegen `06`, Abschnitt 20 | Verweis im Qualitätsabschnitt, Domänentitel der Leistungsübersicht verlinken ihre Seite, Brückenseite erhält den Abschnitt „Weiter im Detail“, verwandte Leistungen und Artikel in den Daten korrigiert. Die Matrix hängt jetzt an `check-links.ts` und bricht den Lauf |
| 24 | **Zweiter Hero-Knopf führte nur zur Domäne Dach.** Die Matrix nennt beide Domänenseiten als Ziel, `04`, W03 verlangt das Gleichgewicht | wichtig | Ziel ist die Leistungsübersicht, dort stehen beide Domänen gleichrangig mit Verweis auf ihre Seite |
| 25 | **„Belegung 74 %“ war durch die Szene nicht gedeckt.** 74 Prozent ist die Breite des Belegungsfeldes, die Fläche liegt bei etwa 46 Prozent | wichtig, keine Zahl ohne Deckung | Angabe lautet „24 Module · 74 % der Dachbreite“ |
| 26 | **„70 Kilometer rund um Hildesheim“ als Überschrift.** `06`, Abschnitt 20 hält fest: der Radius ist nie die Hauptaussage | wichtig, Verstoß gegen die Sprachregel | Überschrift „Zuhause im Landkreis Hildesheim.“, der Radius steht im Begleitsatz |
| 27 | **Vorspann der Projektseite beschrieb einen Regler**, den nur die Startseite hat | wichtig, Inhalt trifft nicht die Ansicht | eigener Vorspann für die Projektseite |
| 28 | **Beschriftung „Vorher“ und „Nachher“ unlesbar** auf der Tagfläche: dunkler Text auf dunkler Abdeckung | wichtig | Token `--text-on-scrim`, außerhalb der Flächenpalette |
| 29 | **Text hinter der Kopfzeile sichtbar.** Die Abdeckung lag bei 0,94 Alpha, große Serifenzeilen schimmerten durch und störten die Navigation | sinnvoll | Alpha auf 0,985 |
| 30 | **Zwei Dateien über der Zeilengrenze** aus `06`, Abschnitt 21: `ProjectInquiry.tsx` mit 286 und `heroScene.ts` mit 268 Zeilen | sinnvoll, Verstoß gegen ein Abnahmekriterium | Schritt 1 und Schritt 4 des Formulars sowie die Kamera-Keyframes in eigene Dateien. Größte Datei jetzt 236 Zeilen |

## B3 · Neue Qualitätsschranken

| Skript | Prüft | Bricht |
|---|---|---|
| `scripts/check-links.ts`, neu, `npm run links` | die interne Verlinkungsmatrix aus `06`, Abschnitt 20 gegen die vorgerenderten Seiten, nur Verweise im Hauptbereich zählen | ja |
| `scripts/check-contrast.ts`, erweitert | zusätzlich `--energie-text` und `--dach-text` je Fläche sowie halbtransparente Bedienränder über ihrer Fläche gegen 3:1 | ja |
| `npm run verify`, neu | Bündelbudget und Verlinkungsmatrix nach dem Build in einem Lauf | ja |

Anmerkung zur Matrix: „zwei verwandte Leistungen“ ist in Stufe 1 nicht vollständig erreichbar, weil nur vier Leistungsseiten existieren. Das Skript fordert deshalb eine benachbarte Leistungsseite und lässt die zweite Verwandtschaft bis Stufe 2 auf die Domänenseite laufen. Der Grund steht im Skript.

## B4 · Messwerte nach den Korrekturen

| Größe | Wert |
|---|---|
| HTML, CSS und kritisches JS, komprimiert | 116,4 kB von 120 kB |
| GSAP mit ScrollTrigger, komprimiert | 44,7 kB von 55 kB |
| Three.js mit Szene, komprimiert | 128,9 kB von 180 kB |
| Startseite als HTML, komprimiert | 11,9 kB |
| LCP Startseite | 128 bis 144 ms, LCP-Element ist die Überschriftenzeile, nie die Szene |
| CLS Startseite | 0,0008 |
| LCP Unterseiten | 60 bis 92 ms, LCP-Element ist die `h1` |
| Long Tasks Startseite | vier, längste 246 ms, verursacht vom Aufbau der Szene |
| Horizontaler Überlauf | keiner bei sechs Breiten |
| Kontrastprüfungen | 32 von 32 bestanden |
| Content-Linter | 214 Textstellen, keine Befunde |
| Verlinkungsmatrix | 12 Regeln, keine Befunde |
| SEO-Prüfung ohne JavaScript | 18 Routen, keine Befunde |
| Barrierefreiheit, maschinell | 13 Routen, keine Befunde |

## B5 · Nach dem Review offene Punkte

Zu den Punkten aus Teil A, Abschnitt 5 kommen hinzu:

1. **Leitmotivhaus im Hero.** Geometrisch korrekt, aber als Baukörper noch ein Studienmodell: Fassade ohne Laibungen, Fenster als schwarze Flächen, kein Dachüberstand, keine Ortgang- und Traufdetails. Das ist der schwächste Punkt der Premium-Wirkung und eine Aufgabe für Phase 9, keine Fehlerbehebung.
2. **Long Task von 246 ms** beim Aufbau der Szene. Aufteilen in zwei Bilder oder Aufbau in Schritten wäre möglich.
3. **Beschriftung 03 und 04 der Schnittzeichnung** liegen nah beieinander, die Bezugslinien kreuzen sich fast.
4. **Erster mobiler Bildschirm ohne Bild.** Der Hero trägt mobil nur Typografie, das Bild folgt im Abschnitt darunter. Das entspricht der dokumentierten mobilen Fassung, wirkt aber nüchtern.
5. **Bildplatz-Beschriftungen** sind auf der dunklen Materialfläche schwach lesbar. Betrifft nur den Platzhalterzustand.
6. **Kritisches JS bei 116,4 kB.** Die Reserve ist durch die Korrekturen kleiner geworden.
