# DACHWERK · PHASE 5: ART DIRECTION UND DESIGN SYSTEM

Stand: 28.08.2026
Status: zur Freigabe. Noch kein Website-Code.
Grundlage: `01-BLUEPRINT.md` (freigegeben). Ergänzt durch die Vorgaben zu Bildstrategie, Motion und Hero.
Ergänzende Dokumente: `03-BILDBRIEFINGS.md`, `design-system-specimen.html`

---

## 1. Design Philosophy

### 1.1 Leitidee

**Fläche. Kante. Licht.**

Ein Dach ist die größte gestaltete Fläche eines Hauses und die einzige, die man normalerweise nicht betritt. Diese Fläche wird zum gestalterischen Grundelement der Website: große, ruhige Flächen, exakte Kanten, eine klare Lichtrichtung. Die Seite gestaltet nicht Handwerk, sie gestaltet Flächen im Licht.

### 1.2 Die drei Prinzipien

**Prinzip 1: Ein Winkel.**
Der Bezugswinkel des Systems ist die Dachneigung des Leitmotivhauses: **38 Grad**. Dieser Winkel erscheint als Maskenkante bei Reveals, als Kante bei Flächenübergängen, als Richtung des Lichtverlaufs und in den technischen Zeichnungen. Er erscheint nie in Textausrichtung, nie in Buttons, nie in Bildrahmen. Genau ein Winkel im gesamten System, sonst wird die Seite unruhig. Das ist der wiedererkennbare geometrische Fingerabdruck der Marke.

**Prinzip 2: Material trägt Farbe, Interface trägt keine.**
Farbe entsteht aus Ton, Holz, Zink, Glas und Licht. Bedienelemente sind unbunt bis auf einen Akzent. Es gibt keine farbigen Badges, keine bunten Kategorien, keine Farbverläufe als Dekoration.

**Prinzip 3: Präzision ist die Botschaft.**
Handwerksqualität wird nicht behauptet, sie wird durch Genauigkeit gezeigt. Deshalb trägt die Seite eine technische Beschriftungsebene, wie eine Bauzeichnung: Maßangaben, Neigungswinkel, Materialbezeichnungen, Schichtnummern. Diese Angaben sind klein, präzise gesetzt und immer echt.

### 1.3 Der Lichtbogen (dramaturgische Grundentscheidung)

Die Seite hat zwei Flächenmodi, Nachtfläche (Obsidian) und Tagfläche (Warm White). Sie wechseln nicht beliebig, sondern folgen einem Tageslauf, der die Scroll-Dramaturgie trägt:

| Abschnitt | Modus | Lichtsituation |
|---|---|---|
| Hero, Haltung, Split Screen | Nacht, Obsidian | früher Morgen, flaches Licht von links |
| Was braucht Ihr Haus, Leistungen | Nacht, Obsidian | Vormittag, härtere Kanten |
| Schichtmodell, Prozess, Ratgeber | Tag, Warm White | Mittag, technische Klarheit |
| Projekte, Region | Tag, Warm White | Nachmittag, langes Licht |
| Qualität, Menschen, Brand Statement, Kontakt | Nacht, Obsidian | Abend, warme Kanten |

Der Wechsel Nacht zu Tag erfolgt genau zweimal auf der Startseite, jeweils an einer inhaltlichen Zäsur, und wird über eine Kante im 38-Grad-Winkel geführt. Zwei Wechsel sind eine Dramaturgie, sechs Wechsel sind ein Flickenteppich.

### 1.4 Anti-Prinzipien (Abnahmekriterien)

Wenn eines dieser Merkmale in einem Entwurf auftritt, wird der Entwurf verworfen:
abgerundete Karten mit Schatten, Icon-Kacheln im Dreier- oder Vierergrid, Farbverläufe als Flächenfüllung, Glassmorphismus, Emoji als Sektionsmarker, zentrierte Textblöcke über mehr als drei Zeilen, Blau als Interfacefarbe, Gelb-Orange-Verläufe, schwebende Elemente in Endlosschleife, Zahlen ohne Grundlage, Stockfotografie mit Blick in die Kamera.

---

## 2. Farbpalette

### 2.1 Vollständiges Token-Set

**Flächen und Text, Nachtmodus**

| Token | Hex | Rolle | Kontrast auf `--surface-0` |
|---|---|---|---|
| `--surface-0` | `#111211` | Grundfläche | Referenz |
| `--surface-1` | `#1B1C1A` | erhöhte Fläche, Felder, Panels | 1,4:1 |
| `--surface-2` | `#232420` | Hover, Formularfeld, Tabellenkopf | 1,7:1 |
| `--text-0` | `#F3F0E9` | Primärtext | 16,6:1 |
| `--text-1` | `#C9C1B4` | Sekundärtext, Fließtext lang | 10,6:1 |
| `--text-2` | `#8C867B` | technische Beschriftung, Meta | 5,0:1 |
| `--hair` | `rgba(243,240,233,0.10)` | Standardtrennlinie | Fläche |
| `--hair-1` | `rgba(243,240,233,0.20)` | betonte Trennlinie, Feldrand | Fläche |

**Flächen und Text, Tagmodus**

| Token | Hex | Rolle | Kontrast auf `--surface-l0` |
|---|---|---|---|
| `--surface-l0` | `#F3F0E9` | Grundfläche hell | Referenz |
| `--surface-l1` | `#E9E4D9` | erhöhte Fläche hell | 1,1:1 |
| `--ink-0` | `#111211` | Primärtext auf hell | 16,6:1 |
| `--ink-1` | `#57534B` | Sekundärtext auf hell | 6,7:1 |
| `--ink-2` | `#7A7469` | Meta auf hell | 4,6:1 |
| `--hair-l` | `rgba(17,18,17,0.12)` | Trennlinie hell | Fläche |

**Marken- und Domänenfarben**

| Token | Hex | Rolle | Regel |
|---|---|---|---|
| `--dach` | `#9A6950` | Domäne DACH | 4,0:1 auf Obsidian, Flächen und Display ab 24px halbfett, kein Fließtext. Auf Warm White als Text zulässig (5,0:1) |
| `--energie` | `#D5B45A` | Domäne ENERGIE, Primärakzent, Fokusring | 9,4:1, überall zulässig |
| `--nature` | `#667060` | Karte, Region, tertiäre Flächen | 3,6:1, nur Fläche und Grafik |

**Zustandsfarben, aus der Palette abgeleitet, nicht importiert**

| Token | Hex | Rolle | Kontrast auf Obsidian |
|---|---|---|---|
| `--state-error` | `#E08B76` | Formularfehler | 7,3:1 |
| `--state-ok` | `#8FA083` | Bestätigung | 6,8:1 |

Zustände werden immer doppelt kodiert: Farbe plus Text plus Position. Farbe ist nie die einzige Information.

### 2.2 Regeln

1. Fließtext ausschließlich `--text-0`, `--text-1` (Nacht) oder `--ink-0`, `--ink-1` (Tag).
2. `--dach` und `--nature` sind Flächenfarben. Ihre Verwendung als Text ist an eine Mindestgröße gebunden und wird im Spezimen geprüft.
3. Genau eine Akzentfarbe pro Bildschirmhöhe. `--dach` und `--energie` treffen nur an einer Stelle der Seite bewusst aufeinander, im Wort DACH + ENERGIE.
4. Verläufe nur als Lichtverlauf einer Farbe in Transparenz, Richtung 38 Grad oder 0 Grad. Ausnahme: das Brückenwort.
5. Reines Schwarz `#000000` und reines Weiß `#FFFFFF` kommen im gesamten Projekt nicht vor.

---

## 3. Typografie

### 3.1 Familien

| Rolle | Familie | Schnitte | Fallback |
|---|---|---|---|
| Display | Instrument Serif | Regular 400, Italic 400 | Georgia, Times New Roman, serif |
| Sans | Inter (variabel, Achse 400 bis 600) | 400, 500, 600 | Helvetica Neue, Arial, sans-serif |
| Technisch | Inter mit `font-variant-numeric: tabular-nums` und erweiterter Laufweite | 500 | wie Sans |

Keine dritte Familie. Die technische Ebene entsteht durch Laufweite, Versalien und Tabellenziffern, nicht durch eine Monospace-Schrift. Eine Monospace wirkt in diesem Umfeld nach Software, nicht nach Bauzeichnung.

Auslieferung: selbst gehostet, woff2, Subset Latin plus deutsche Sonderzeichen, `font-display: swap`, Preload für die zwei im ersten Viewport benötigten Schnitte. Kein Google-Fonts-CDN.

### 3.2 Skala

| Token | Größe | Zeilenhöhe | Laufweite | Familie | Einsatz |
|---|---|---|---|---|---|
| `--t-display-xl` | `clamp(3.25rem, 9vw, 9.5rem)` | 0,94 | -0,02em | Display | Hero, Brand Statement |
| `--t-display-l` | `clamp(2.5rem, 5.5vw, 5rem)` | 1,00 | -0,015em | Display | Section Headline |
| `--t-display-m` | `clamp(1.875rem, 3.4vw, 3rem)` | 1,10 | -0,01em | Display | Feldtitel, Projekttitel |
| `--t-display-s` | `clamp(1.375rem, 2.2vw, 1.875rem)` | 1,15 | 0 | Display | Unterüberschrift |
| `--t-numeral` | `clamp(3rem, 8vw, 8rem)` | 0,88 | -0,03em | Display, tabular | Prozessnummern, Kennzahlen |
| `--t-lead` | `clamp(1.0625rem, 1.3vw, 1.3125rem)` | 1,60 | 0 | Sans 400 | Lead-Absatz |
| `--t-body` | `1rem` | 1,65 | 0 | Sans 400 | Fließtext |
| `--t-body-s` | `0.875rem` | 1,55 | 0 | Sans 400 | Hinweise, Rechtliches |
| `--t-label` | `0.6875rem` | 1,20 | 0,18em | Sans 600, versal | Eyebrow, Sektionslabel |
| `--t-spec` | `0.75rem` | 1,45 | 0,06em | Sans 500, tabular | Maßangaben, technische Beschriftung |

### 3.3 Satzregeln

- Fließtext maximal 68 Zeichen je Zeile, Lead maximal 62.
- `text-wrap: balance` für alle Display-Größen, `text-wrap: pretty` für Fließtext.
- Display nie unter 28 Pixel rendern. Wenn kleiner nötig, ist es kein Display, sondern Sans.
- Kursive Display-Schnitte nur für ein einzelnes hervorgehobenes Wort je Sektion.
- `lang="de"` am Dokument, `hyphens: auto` ausschließlich in Spalten unter 40 Zeichen Breite und in Tabellenzellen. Deutsche Komposita wie Dachflächenfenster oder Batteriespeicherlösung brechen sonst das Layout.
- Ziffern in Tabellen, Maßangaben, Preisen und Prozessnummern immer `tabular-nums`.
- Keine Gedankenstriche im deutschen Text, keine Ausrufezeichen, keine Versalsätze außer im `--t-label`.
- Anführungszeichen deutsch, „so“, nicht "so".

---

## 4. Spacing System

Basis 8 Pixel, geometrisch statt linear, damit große Abstände nicht beliebig wirken.

| Token | Wert | Einsatz |
|---|---|---|
| `--s-1` | 4px | Ausnahme, nur Label zu Wert |
| `--s-2` | 8px | innerhalb einer Zeile |
| `--s-3` | 12px | Feldinnenabstand klein |
| `--s-4` | 16px | Standardabstand innerhalb einer Gruppe |
| `--s-5` | 24px | Gruppenabstand, Gutter |
| `--s-6` | 32px | Feldinnenabstand |
| `--s-7` | 48px | Blockabstand |
| `--s-8` | 64px | Blockabstand groß |
| `--s-9` | 96px | Sektionsabstand mobil |
| `--s-10` | 128px | Sektionsabstand Desktop |
| `--s-11` | 192px | Sektionsabstand bei Zäsur |

Regeln:
1. Nur diese Werte. Kein `padding: 37px`.
2. Abstand vor einer Trennlinie ist immer größer als danach, Verhältnis etwa 3 zu 2. Damit gehört die Linie sichtbar zum folgenden Abschnitt.
3. Zwei aufeinanderfolgende Sektionen haben nie gleichen Abstand und gleiche Fläche. Rhythmus entsteht durch Wechsel.
4. Vertikaler Abstand entsteht über `gap` in Flex und Grid, nicht über Margins an Einzelelementen.

Radien: `--r-1: 2px` für Buttons, Felder und Eingaben, `--r-0: 0` für Bilder, Flächen und Tabellen. Keine größeren Radien im Projekt.

Tiefe: keine Schatten außer `--shadow-sticky: 0 -1px 24px rgba(0,0,0,0.5)` für die mobile Aktionsleiste. Tiefe entsteht durch Haarlinie, Flächenwechsel, Überlappung und Lichtkante.

---

## 5. Grid System

| Breakpoint | Bereich | Spalten | Rand | Gutter |
|---|---|---|---|---|
| `xs` | bis 639px | 4 | 20px | 16px |
| `sm` | 640 bis 899px | 6 | 32px | 20px |
| `md` | 900 bis 1199px | 12 | 40px | 24px |
| `lg` | 1200 bis 1599px | 12 | 56px | 24px |
| `xl` | ab 1600px | 12 | zentriert, max 1440px Inhalt | 24px |

Layoutmuster, verbindlich:

1. **Randspalte (Label Rail).** Ab `md` erhält jede Sektion links eine 170 Pixel breite Spalte für Sektionsnummer und Label, sticky. Der Inhalt beginnt danach. Das erzeugt die redaktionelle Anmutung eines Architekturmagazins und hält die Textspalte automatisch schmal.
2. **Textspalte.** Fließtext maximal 7 von 12 Spalten.
3. **Bildausbruch.** Drei Stufen: `contained` (innerhalb des Rasters), `breakout` (überschreitet das Raster um zwei Spalten), `bleed` (volle Viewportbreite, ohne Rand). Bilder wechseln bewusst zwischen diesen Stufen, nie mehr als zwei `bleed` je Seite.
4. **Asymmetrie.** Zweispaltige Abschnitte nutzen 5 zu 7 oder 7 zu 5, nie 6 zu 6. Symmetrie wirkt hier nach Template.

---

## 6. Button-System

| Variante | Fläche | Text | Rand | Einsatz |
|---|---|---|---|---|
| `primary` | `--energie` | `--surface-0` | keiner | genau ein Primärziel je Bildschirmhöhe |
| `secondary` | transparent | `--text-0` | 1px `--hair-1` | Sekundärziele, Navigation |
| `quiet` | transparent | `--text-0` | keiner, Unterstreichung 1px | Textlinks, Listen, Karten |
| `on-light` | `--ink-0` | `--surface-l0` | keiner | Primärziel im Tagmodus |

Maße: Höhe 48px Standard, 56px im Hero und im Formular, 40px in der Kopfzeile. Innenabstand 24px horizontal, Label in Sans 500, 0,9375rem, Laufweite 0,01em. Radius 2px.

Zustände:

| Zustand | Verhalten |
|---|---|
| `hover` | Fläche hellt um 6 Prozent auf, ein enthaltener Pfeil rückt 3px nach rechts, Dauer 240ms, `ease-out-expo` |
| `active` | Fläche dunkelt um 4 Prozent, Versatz 1px nach unten |
| `focus-visible` | 2px `--energie`, Offset 2px, immer sichtbar, nie entfernt |
| `disabled` | Deckkraft 40 Prozent, `cursor: not-allowed`, kein Hover |
| `loading` | Label bleibt, ein 1px Fortschrittsstrich läuft am unteren Rand, kein Spinner |

Kein Button ohne Verb. Keine Ausrufezeichen. Keine Versalien. Der Pfeil ist eine 1,25px Strichzeichnung aus dem eigenen Zeichensatz, kein Unicode-Pfeil.

---

## 7. Card-System

Es gibt in diesem Projekt keine Cards im üblichen Sinn. Es gibt **Felder**. Ein Feld ist eine Fläche mit Kante, keine schwebende Box.

| Typ | Aufbau | Hover | Einsatz |
|---|---|---|---|
| `field-plain` | `--surface-1`, 1px `--hair`, Innenabstand 32px | Kante zu `--hair-1`, Inhalt hebt 2px | Leistungen, Qualitätsaussagen |
| `field-image` | Bild oben mit festem Seitenverhältnis, Text darunter, kein Rahmen, nur Haarlinie oben | Bild skaliert 1,02 in 900ms, Text unverändert | Projekte, Ratgeber |
| `field-row` | Zeile im Raster: Nummer, Titel, Beschreibung, getrennt durch Haarlinien | Zeilenfläche wird `--surface-2` | Prozess, Schichtmodell, Leistungslisten |
| `field-choice` | große Auswahlfläche mit Kante, Zustand ausgewählt mit 2px `--energie` links | Kante hellt auf | Formularschritt 1, Sektion Was braucht Ihr Haus |
| `field-invert` | `--surface-l0` Fläche, `--ink-0` Text | keiner, das Feld ist Zielpunkt | die Beratungsoption, Kontaktabschluss |

Regeln: kein Feld mit Schatten, kein Feld mit mehr als einem CTA, kein Feld mit Icon oben links. Felder gruppieren sich über 1px Fugen zu Flächenverbänden, dadurch entsteht der Eindruck von Bauteilen statt Kacheln.

---

## 8. Form-System

Formular ist die Konversionsstelle der Seite und wird wie ein Bauteil gestaltet, nicht wie ein Webformular.

**Feldaufbau**
Label immer sichtbar über dem Feld, `--t-label` in `--text-2`. Kein Floating Label, weil es beim Ausfüllen die Information entfernt, die man dann braucht. Feld: Fläche `--surface-2`, Grundlinie unten 1px `--hair-1`, kein Rahmen an den anderen drei Seiten. Innenhöhe 56px, Schrift `--t-body`, Textfarbe `--text-0`.

| Zustand | Verhalten |
|---|---|
| Ruhe | Grundlinie `--hair-1` |
| Hover | Grundlinie hellt auf, Fläche unverändert |
| Fokus | Grundlinie 2px `--energie`, zusätzlich Fokusring am Feld, Label wechselt zu `--text-0` |
| Gefüllt | Grundlinie `--hair-1`, Text `--text-0` |
| Fehler | Grundlinie `--state-error`, Fehlersatz darunter in `--state-error`, Feld behält Inhalt |
| Deaktiviert | Deckkraft 45 Prozent, Hinweistext darunter erklärt den Grund |

**Verhalten**
- Validierung erst beim Verlassen des Feldes, nie beim Tippen.
- Fehlermeldungen sind Sätze mit Lösung: „Bitte eine fünfstellige Postleitzahl eintragen.“ Kein „Ungültige Eingabe“, kein Warnsymbol.
- Pflichtfelder werden nicht mit Sternchen markiert, sondern optionale Felder mit dem Wort „optional“. Das ist freundlicher und eindeutiger.
- Telefon oder E-Mail genügt, nicht beides.
- Fortschritt als 1px Linie über der Formularfläche plus Text „Schritt 2 von 4“. Keine Prozentangabe.
- Schrittwechsel: Fokus auf die Schrittüberschrift, Ankündigung per `aria-live="polite"`, Inhalt tritt über eine Maske ein, Dauer 480ms, kein Slide der ganzen Fläche.
- Zustand im `sessionStorage`, Zurücknavigation jederzeit ohne Verlust.
- Touch-Target mindestens 48 mal 48 Pixel, Auswahlflächen mindestens 64 Pixel hoch.
- Datenschutzhinweis als eigene Checkbox ohne Vorauswahl, Text in `--t-body-s`, mit Link.
- Musterprojekt: Absenden ohne Backend, Bestätigung benennt das offen. Datei-Upload sichtbar, aber deaktiviert, mit Begründung.

---

## 9. Icon- und Illustrationssprache

### 9.1 Zeichensatz statt Icon-Set

Keine Icon-Bibliothek. Es entsteht ein eigener, kleiner Zeichensatz im Stil einer **Bauzeichnung**:

- Strichstärke 1,25px bei 24px Zeichenfläche, nicht skalierend gerundet, `stroke-linecap: butt`, `stroke-linejoin: miter`.
- Keine Füllflächen, keine zwei Strichstärken in einem Zeichen, keine Rundungen außer dort, wo das Objekt rund ist.
- Zeichen sind Aufsichten, Schnitte oder Seitenansichten, keine Piktogramme mit Charakter.
- Optische Achse: alle Zeichen sitzen auf demselben 20px Innenquadrat, damit sie in Reihe stehen.

Benötigter Umfang, 14 Zeichen: Pfeil rechts, Pfeil diagonal (externer Link), Plus, Minus, Schließen, Häkchen, Telefon (Handapparat als Seitenansicht), Kuvert, Standort (Kreis mit Achskreuz), Uhr, Dokument, Upload, Neigungswinkel (Winkelsymbol mit Bogen und Gradzahl), Schichtstapel.

### 9.2 Technische Zeichnungen als Illustrationssprache

Wo eine Erklärung nötig ist, tritt keine Illustration auf, sondern eine Zeichnung:

- **Maßlinie:** 1px Linie, Endstriche im 38-Grad-Winkel, Maßtext in `--t-spec` mittig über der Linie.
- **Bezugslinie:** waagerechte Linie vom Bauteil zum Text, Knick nur einmal, Punkt am Ursprung.
- **Schnittdarstellung:** Dachaufbau als Schnitt mit Schraffuren, jede Schicht eine eigene Signatur (Dämmung als Wellenlinie, Holz als Faserlinie, Ziegel als Profil, Modul als Doppellinie mit Glaskante).
- **Flächendiagramm:** Dachfläche als Parallelogramm im 38-Grad-Winkel, belegbare Modulreihen als Raster.

Diese Zeichnungen sind Inline-SVG, farbig nur in `--text-2` und `--energie`, animierbar über Pfadzeichnung (`stroke-dasharray`). Sie sind die einzige erlaubte Form von Grafik neben Fotografie und 3D.

---

## 10. Bildsprache

### 10.1 Grundsatzentscheidung

Fotografie bleibt tragende Säule der Identität. Es werden **keine beliebigen Stockfotos** eingesetzt. Stattdessen entsteht ein definierter Bildkanon von 16 Slots, jeder mit vollständigem Briefing (`03-BILDBRIEFINGS.md`), die schrittweise mit produzierten oder gezielt generierten Aufnahmen gefüllt werden. Bis dahin trägt der jeweilige Slot eine gestaltete Materialfläche, nicht ein Platzhalterbild mit Wasserzeichen.

### 10.2 Look, verbindlich für alle Aufnahmen

| Parameter | Vorgabe |
|---|---|
| Genre | Dokumentar- und Architekturfotografie, ungestellt |
| Licht | ausschließlich natürliches Licht, früher Morgen, späterer Nachmittag oder gleichmäßig bedeckt. Kein Blitz, kein Aufheller, keine Sonnenuntergangsromantik |
| Kontrast | moderat, Schwarzpunkt angehoben, Tiefen bleiben lesbar, Lichter nicht ausgebrannt |
| Farbe | Sättigung etwa 85 bis 90 Prozent, leichte Wärme in den Mitten, kein Orange-Teal-Grading, kein Blaustich in den Schatten |
| Schärfe | Schärfepunkt immer auf Material oder Hand, nie auf ein Gesicht |
| Brennweiten | 35mm für Objekt und Situation, 50mm für Prozess, 85mm für Material und Landschaft. Kein Weitwinkel unter 28mm, keine gekrümmten Linien |
| Perspektive | Kamera auf Augenhöhe oder darunter, senkrechte Kanten senkrecht, keine gekippten Horizonte |
| Korn | dezentes Korn 2 bis 3 Prozent über allen Bildern, einheitlich, als 128px Kacheltextur |

Das Korn ist bewusst gesetzt. Es nimmt Bildern den sterilen, glatten Charakter, der Aufnahmen sofort künstlich wirken lässt, und verbindet fotografische mit gerenderten Flächen zu einer Oberfläche.

### 10.3 Vier Bildklassen

| Klasse | Inhalt | Anteil | Funktion |
|---|---|---|---|
| A · Objekt | Haus, Dachfläche, Gebäude in Umgebung | 4 Slots | Glaubwürdigkeit, Wiedererkennung des Leitmotivhauses |
| B · Material | Ziegel, Schiefer, Zinkblech, Holz, Modulglas, Schiene, Wechselrichter | 5 Slots | Wertigkeit, Materialnähe, Kompetenz |
| C · Prozess | Hände, Werkzeug, Messgerät, Montage, Planung, Gespräch | 5 Slots | Menschlichkeit ohne Inszenierung |
| D · Region | Landschaft Leinebergland, Dächer im Tal, Ortsbild | 2 Slots | regionale Verankerung |

### 10.4 Menschen im Bild

Menschen kommen vor, aber nie als Werbeträger:
- kein Blick in die Kamera, keine Pose, kein Daumen hoch, kein Lächeln in Richtung Betrachter,
- Gesichter höchstens angeschnitten, im Profil, unscharf oder durch die Handlung verdeckt,
- Kleidung realistisch getragen und benutzt, kein frisch gebügeltes Corporate-Outfit, keine leere Werbekleidung,
- Hände dürfen Arbeitsspuren zeigen,
- Handlung ist immer echt und technisch korrekt: Wer eine Latte anlegt, legt sie richtig an.

### 10.5 Ausschlussliste

Lächelnde Handwerker mit Helm vor weißem Hintergrund, Solarparks auf freier Fläche, Familien vor Einfamilienhaus mit Sonnenstrahlen, Hände die ein Modell-Haus halten, Glühbirnen mit Pflanzen, Drohnenaufnahmen mit HDR-Optik, amerikanische Holzhäuser mit Composite-Shingles, Dachdecker ohne Sicherung, PV-Module mit falscher Zellgeometrie, unrealistische Modulreihen über Firste oder Kanten hinweg, künstliche Lens Flares, Bildstile die sichtbar generiert wirken.

### 10.6 Abnahmeprüfung je Bild

Ein Bild wird nur eingesetzt, wenn alle sieben Punkte erfüllt sind:
1. Ist die Bauweise deutsch und dem Baujahr plausibel?
2. Ist die PV-Geometrie technisch korrekt, Modulraster, Reihenabstand, Randabstand zur Traufe und zum First?
3. Ist die Lichtrichtung im Bild mit den Nachbarbildern der Sektion verträglich?
4. Ist erkennbar, welches Material gezeigt wird?
5. Fehlt jede Werbeinszenierung?
6. Sind Hände, Werkzeuge und Arbeitsschritte technisch richtig?
7. Verträgt sich das Bild mit dem Korn- und Farbprofil der Seite?

Bei zwei verletzten Punkten wird das Bild nicht eingesetzt. Diese Prüfliste ist Teil der QA.

### 10.7 Umsetzung im Code

- Jeder Slot ist eine `<Figure>`-Komponente mit fixem Seitenverhältnis, Desktop- und Mobile-Quelle, AVIF mit WebP-Fallback, `alt`-Text beschreibend, Bewegungsprofil und Ladepriorität.
- Bildbewegung ausschließlich Parallax bis maximal 8 Prozent und Maskenreveal. Kein Ken-Burns-Zoom über Sekunden.
- Textlesbarkeit über Bild: nie Abdunkeln der ganzen Fläche, sondern gerichteter Verlauf von der Textkante aus, maximal 55 Prozent Deckkraft am Rand, 0 Prozent in der Bildmitte.
- Kein Bild ohne Zweck. Wenn ein Slot nur Fläche füllt, wird der Slot gestrichen.

---

## 11. Texture- und Materialsprache

Zwischen Fotografie und Interface liegt eine dritte Ebene: Material als Fläche. Sie trägt die Seite dort, wo kein Bild sinnvoll ist.

| Textur | Aufbau | Deckkraft | Einsatz |
|---|---|---|---|
| `tex-tile` | Ziegelprofil als SVG-Muster, 2px Linien, versetzte Reihen im 38-Grad-Anschnitt | 3 bis 5 Prozent | Sektion DACH, Hintergrund hinter Leistungen |
| `tex-zinc` | gerichtetes Rauschen plus feiner Linearverlauf | 4 Prozent | Sektionsübergänge, Footer |
| `tex-grain-wood` | Faserlinien, unregelmäßiger Abstand | 3 Prozent | Sektion Qualität und Menschen |
| `tex-glass` | Modulraster mit Zellteilung plus Reflexionsverlauf im 38-Grad-Winkel | 6 Prozent | Sektion ENERGIE, PV-Ratgeber |
| `tex-grain` | Filmkorn, 128px Kachel | 2 bis 3 Prozent | global über Bildern und 3D |
| `light-edge` | 1px Linie mit Verlauf von `--energie` 25 Prozent zu transparent | vollflächig | obere Kante von Flächenwechseln, Lichtkante am Dachfirst |

Regeln: maximal eine Textur je Sektion. Texturen sind statisch, sie bewegen sich nicht. Umsetzung als SVG-Muster oder einmalig erzeugte Kacheltextur, keine Canvas-Animation, kein Bild über 8 kB je Textur. Die Lichtkante ist das einzige leuchtende Element im gesamten Interface.

---

## 12. Motion Language

### 12.1 Zwei Bewegungsfamilien

Die Motion Language leitet sich aus dem Thema ab: **Kamera und Konstruktion.**

**Familie 1: Kamera.** Alles, was Raum zeigt (3D-Szene, Bilder, Sektionsübergänge, Karte), bewegt sich wie eine geführte Kamera: langsam, entlang einer Achse, mit Beschleunigung und Verzögerung, 1100 bis 1800ms, `ease-in-out`. Kamerabewegungen starten und enden immer in Ruhe.

**Familie 2: Konstruktion.** Alles, was Information setzt (Text, Felder, Listen, Zahlen, Formularschritte), wird gebaut, nicht animiert: Masken öffnen entlang einer Kante, das Element rückt maximal 16 Pixel nach, 480 bis 640ms, `ease-out-expo`. Nichts fliegt ein, nichts skaliert von 0,8, nichts blurrt.

### 12.2 Die Masseregel

Je größer die Fläche, desto kleiner der Weg:

| Elementgröße | maximaler Bewegungsweg |
|---|---|
| Vollflächige Sektion, Bild `bleed` | 8px |
| Feld, Bildblock, Tabelle | 12px |
| Textzeile, Label, Listenzeile | 16px |
| Detail, Zeichnung, Zahl | 24px |

Das ist die physikalische Glaubwürdigkeit: Schwere Dinge bewegen sich wenig. Diese Regel ersetzt Bauchgefühl bei jeder Animation.

### 12.3 Tokens

| Token | Wert | Einsatz |
|---|---|---|
| `--dur-1` | 240ms | Hover, Fokus, Farbwechsel |
| `--dur-2` | 480ms | Maskenreveal klein, Formularschritt |
| `--dur-3` | 640ms | Text Reveal, Feldeintritt |
| `--dur-4` | 900ms | Bildreveal, Flächenwechsel |
| `--dur-5` | 1100ms | Sektionsübergang |
| `--dur-6` | 1800ms | Kamerafahrt, 3D-Sequenz |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Eintritte, Konstruktion |
| `--ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Kamera, Sektionswechsel |
| `--ease-linear` | `linear` | ausschließlich scroll-gebundene Sequenzen |
| `--stagger` | 0,08s | Zeilen und Listen, maximal 8 Elemente |

### 12.4 Verbote

Kein Bounce, kein Elastic, kein Overshoot über 2 Prozent. Kein Endlos-Floating. Kein Blur-In. Kein Zeichen-für-Zeichen-Typewriter. Kein Zahlen-Hochzählen. Kein Smooth-Scroll-Hijacking, also kein Lenis und kein ScrollSmoother, weil es die Scrollgeschwindigkeit des Nutzers übernimmt, Tastatur- und Screenreader-Navigation stört und auf schwachen Geräten ruckelt. Keine gleichzeitige Bewegung auf zwei Achsen im selben Element. Kein Parallax über 8 Prozent. Kein Stagger über acht Elemente, danach wirkt es wie eine Welle.

### 12.5 Motion-Profile

| Profil | Bedingung | Verhalten |
|---|---|---|
| `full` | Desktop, keine reduzierte Bewegung, 4 Kerne oder mehr | vollständige Choreografie, 3D, Kamerafahrt |
| `mobile` | Viewport unter 900px | kein Pinning, diskrete Zustände, kürzere Dauern, 3D reduziert |
| `low` | wenig Kerne, wenig Speicher, `saveData` | keine 3D-Szene, Fallbackbilder, nur Opazitätsreveal |
| `reduced` | `prefers-reduced-motion: reduce` | keine Bewegung außer Farb- und Opazitätswechsel unter 240ms, alle Endzustände sofort |

Ein zentrales Modul liefert das Profil, jede Szene fragt nur das Profil ab. Barrierefreiheit ist damit strukturell.

---

## 13. GSAP-Konzept

### 13.1 Szenenkatalog

| Szene | Trigger und Verhalten | Amplitude | Mobile | Fallback |
|---|---|---|---|---|
| `hero` | pin, 300vh, `scrub: 1`, treibt die 3D-Kamera und zwei Headline-Zustände | Kamera, siehe 15 | kein Pin, drei Zustände | zwei Standbilder |
| `reveal` | Batch für alle Textblöcke, `start: top 82%`, einmalig | 16px, Maske | identisch, 12px | sichtbar |
| `split` | pin, gegenläufige x-Bewegung zweier Materialflächen, Mittelband öffnet per `clip-path` | 8 Prozent Breite | vertikal gestapelt, Maskenwechsel | statisch nebeneinander |
| `layers` | `scrub`, treibt den Explosionsfaktor der 3D-Schichtszene, Labels erscheinen an Bezugslinien | 3D | drei diskrete Zustände | SVG-Schnittzeichnung plus Liste |
| `process` | Desktop horizontal gepinnt, Fortschrittslinie zeichnet, Nummern wechseln hart | 12px | vertikale Linie, kein Pin | Liste |
| `map` | Timeline: Zentrum, Radiusbogen, Orte gestaffelt, Straßenlinien als Pfadzeichnung | Pfad | Radius statisch, Orte gestaffelt | statische Karte |
| `projects` | Vorher-Nachher per `clip-path`, an Scroll gebunden, zusätzlich per Drag bedienbar | Maske | Drag primär | zwei Bilder untereinander |
| `arc` | Flächenwechsel Nacht zu Tag über 38-Grad-Kante, Textfarben invertieren mit 120ms Verzögerung | Fläche | identisch, kürzer | harter Wechsel |
| `cta` | Feld tritt ein, Lichtkante zeichnet oben | 12px | identisch | sichtbar |

### 13.2 Architektur und Regeln

Wie in `01-BLUEPRINT.md` Abschnitt 9, ergänzt um:
- Ein `ScrollTrigger` je Szene, Reveals über `ScrollTrigger.batch`.
- Alle Timelines in `gsap.context()`, Cleanup beim Unmount, `ScrollTrigger.refresh()` nach `document.fonts.ready` und nach dem Laden der Bilder im ersten Viewport.
- `scrub` nur mit Zahlenwert, nie `true`, damit die Bewegung Trägheit hat.
- Ausschließlich `transform`, `opacity` und `clip-path` animieren.
- Der CSS-Grundzustand ist der sichtbare Endzustand. Die Animation setzt den Startzustand per JavaScript. Wenn ein Skript scheitert, ist alles lesbar.
- Kein `will-change` global, nur je Szene gesetzt und danach entfernt.
- Plugins: ausschließlich ScrollTrigger. Kein SplitText (Zeilenaufteilung erfolgt eigenhändig über `Range`-Messung oder vorbereitete Zeilenspans), kein Flip, kein MotionPath.

---

## 14. Three.js-Konzept, Art Direction

### 14.1 Einsatzorte

Zwei, wie freigegeben: Hero-Szene und Schichtmodell. Sonst kein 3D.

### 14.2 Kamera und Bildsprache

| Parameter | Wert | Begründung |
|---|---|---|
| Objektiv | 35mm Äquivalent, `fov` 32 bis 36 | architektonische Anmutung, geringe Verzerrung |
| Kamerahöhe Phase 1 | etwa 1,6m Augenhöhe, leicht erhöht auf 2,4m in Phase 3 | Blick eines Betrachters, nicht einer Drohne |
| Horizont | bei 62 Prozent Bildhöhe | Dachfläche erhält Raum, kein Himmelübermaß |
| Dachfirst | auf der oberen Drittellinie | klassische Bildteilung |
| Bewegungsachse | Blickachse plus minimale Vertikale | keine Kreisfahrt, keine Rollbewegung |
| Rollwinkel | konstant 0 | senkrechte Kanten bleiben senkrecht |

### 14.3 Material und Licht

| Bauteil | Material | Werte |
|---|---|---|
| Dachziegel | `MeshStandardMaterial`, Albedo aus Materialfoto oder prozeduraler Textur | `roughness` 0,78, `metalness` 0, leichte Normalvariation je Instanz |
| Modulglas | `MeshStandardMaterial` mit Reflexion aus der Gradientenumgebung | `roughness` 0,14, `metalness` 0,05, Zellraster als Normalmap |
| Aluschiene, Dachhaken | metallisch | `roughness` 0,35, `metalness` 0,9 |
| Holz, Sparren | matt | `roughness` 0,85 |
| Dämmung | diffus, ohne Glanz | `roughness` 1,0 |

Licht: eine Sonne als `DirectionalLight`, Azimut und Höhe an den Lichtbogen gekoppelt (Morgen in Phase 1, Nachmittag in Phase 8), Intensität 2,2 bis 2,8, Farbtemperatur wandert von 4800K nach 3200K. Dazu ein sehr schwaches Hemisphärenlicht für die Schattenfüllung. Keine Schattenkarte im Hero, stattdessen eine gebackene Bodenverdunkelung und eine Ambient-Occlusion-Andeutung in der Textur. Im Schichtmodell eine einzige weiche Schattenkarte bei 1024 Pixel, nur wenn das Profil `full` ist.

Farbmanagement: `outputColorSpace: SRGB`, Tone Mapping ACES Filmic mit `toneMappingExposure` 1,05, danach dieselbe Kornkachel wie über den Fotografien. Damit sitzt das 3D-Bild im selben Look wie die Fotos.

### 14.4 Geometrie und Budget

| Größe | Wert |
|---|---|
| Ziegel | eine `InstancedMesh`, etwa 130 Instanzen, `full`, 48 Instanzen im Profil `mobile` |
| Module | eine `InstancedMesh`, 24 Instanzen, 12 im Profil `mobile` |
| Drawcalls | maximal 25 |
| Dreiecke | maximal 60.000 |
| Texturen | maximal 3, je maximal 1024 Pixel, im Code erzeugt oder als AVIF unter 40 kB |
| Externe Modelle | keine |
| DPR | Grenze 1,5 im Profil `full`, 1,25 mobil |

Renderdisziplin: Schleife nur bei sichtbarem Canvas und geänderter Szene, Stopp bei `visibilitychange`, dynamischer Import erst bei Annäherung, Kontextverlust wird behandelt und führt in den Fallback.

---

## 15. Hero-Art-Direction

### 15.1 Grundsatzentscheidung zur Bildtechnik

Der Hero verbindet Fotografie und 3D, statt sich für eines zu entscheiden:

- **3D trägt die Transformation.** Das Kippen der Ziegelreihen und das Setzen der Modulreihen ist fotografisch nicht darstellbar.
- **Fotografie trägt die Glaubwürdigkeit.** Himmel, Umgebungsband und alle Materialoberflächen der 3D-Szene stammen aus fotografischen Vorlagen. Das Modulglas spiegelt einen echten Himmel, der Ziegel hat eine echte Oberfläche.
- **Direkt nach dem Hero kippt die Seite in echte Fotografie.** Der Split Screen zeigt zwei fotografische Materialaufnahmen. Der Übergang von gebauter zu fotografierter Realität ist damit ein bewusster erster Beweis.

### 15.2 Ebenenaufbau

```text
Ebene 7   UI: Kopfzeile, Telefonnummer
Ebene 6   Typografie: Headline, Subheadline, CTAs
Ebene 5   technische Beschriftung: Eyebrow, Materiallabel, Maßlinie
Ebene 4   Korn und Vignette, global
Ebene 3   Lichtnebel: gerichteter Verlauf entlang 38 Grad, sehr schwach
Ebene 2   3D-Szene: Haus, Dachfläche, Ziegel, Module
Ebene 1   Umgebungsband: fotografische Silhouette Landschaft, entsättigt
Ebene 0   Himmel: fotografischer Verlauf, wandert mit dem Lichtbogen
```

### 15.3 Die erste Bildschirmhöhe, exakt

Vor jedem Scroll ist sichtbar:

- Kopfzeile mit Wortmarke, sechs Navigationspunkten, Telefonnummer als Text, Button „Projekt besprechen“.
- Eyebrow links unten in `--t-label`: HILDESHEIM · DACH & ENERGIE.
- Headline in `--t-display-xl`, linksbündig, drei Zeilen, Umbruch fest gesetzt: „Ein Dach / muss mehr / können.“ Das Wort „mehr“ in Display Italic.
- Subheadline in `--t-lead`, maximal 62 Zeichen je Zeile, zwei Zeilen.
- Zwei CTAs: `primary` „Projekt besprechen“, `secondary` „Unsere Leistungen“.
- Rechts unten eine Maßlinie mit `--t-spec`: „Dachneigung 38° · Belegbare Fläche 62 m²“. Nur wenn diese Angaben zur gezeigten Geometrie passen, sonst entfällt die Angabe.
- Kein Scroll-Indikator als Maus- oder Pfeilanimation. Stattdessen ein 1px Strich mit dem Wort „Weiter“ am unteren Rand, statisch.

Die Headline liegt links auf 7 von 12 Spalten, die Dachfläche der Szene läuft von der rechten unteren Ecke in die linke obere Bildhälfte. Text und Dachkante bilden ein Dreieck, das die Blickführung ins Bild zieht. Kein Text zentriert, kein Text über der dichtesten Bildstelle.

### 15.4 Ladechoreografie

| Zeit | Ereignis |
|---|---|
| 0ms | HTML sichtbar: Fläche `--surface-0`, Himmelsverlauf als CSS-Verlauf, Kopfzeile, Headline. Die Headline ist das LCP-Element, nicht das Canvas |
| 0 bis 400ms | Headline tritt zeilenweise über Maske ein, Stagger 0,08 |
| 300ms | Subheadline und CTAs |
| ab 400ms | Himmelfoto und Umgebungsband ersetzen den CSS-Verlauf per Überblendung |
| ab 600ms | dynamischer Import der 3D-Szene, Aufbau im Hintergrund |
| bei Bereitschaft | Szene blendet über 900ms ein, Materiallabel und Maßlinie folgen |

Der Hero ist damit vollständig lesbar und bedienbar, bevor die 3D-Szene existiert. Das schützt LCP und funktioniert auch, wenn WebGL fehlt.

### 15.5 Textlesbarkeit

Kein flächiges Abdunkeln. Ein gerichteter Verlauf von der linken Kante, 55 Prozent Deckkraft am Rand, 0 Prozent bei 62 Prozent Bildbreite. Zusätzlich sitzt hinter der Headline keine Fläche, sondern die Szene wird so komponiert, dass der Himmel den Textbereich trägt. Kontrast wird gemessen, nicht geschätzt: mindestens 7:1 an der dunkelsten Textstelle.

---

## 16. Mobile Art Direction

Mobil ist eine eigene Inszenierung, keine Verkleinerung.

### 16.1 Layout und Typografie

- Ein Spaltenlayout, Rand 20 Pixel, Sektionsabstand 96 Pixel.
- Display-Größen greifen am unteren Ende der `clamp`-Skala, Hero-Headline etwa 52 Pixel, drei bis vier Zeilen, Umbruch eigens gesetzt.
- Die Randspalte mit Sektionsnummer und Label entfällt, Nummer und Label laufen einzeilig über der Headline.
- Fließtext 1rem, Zeilenlänge etwa 38 bis 42 Zeichen, `hyphens: auto` aktiv.

### 16.2 Hero mobil

Statisches Eröffnungsbild mit Headline und einem CTA, ohne Pinning. Darunter eine eigene Sektion „Aus Dachfläche wird Energiefläche“ mit drei diskreten Zuständen, gesteuert durch Scroll, jeder Zustand ein gerendertes Standbild oder eine reduzierte 3D-Szene. Kein kontinuierliches Rendern, kein 300vh-Pin.

### 16.3 Navigation und Aktionen

- Kopfzeile 56 Pixel hoch, Wortmarke plus Menütaste.
- Menü als vollflächiges Overlay, Display-Typografie, gestaffelter Eintritt, Telefon und Projektanfrage am unteren Rand.
- Untere Aktionsleiste erscheint nach dem Hero, verschwindet im Formular, zwei Ziele: Anrufen, Projekt besprechen. Höhe 64 Pixel, Fläche `--surface-1`, Lichtkante oben, `--shadow-sticky`.
- Alle Ziele in der Daumenzone, Touch-Target mindestens 48 Pixel, Abstand zwischen Zielen mindestens 8 Pixel.
- Kein Custom Cursor, keine Hover-abhängige Information.

### 16.4 Bild und 3D mobil

- Eigene Crops je Slot, meist 4 zu 5 oder 3 zu 4 statt 16 zu 9. Der Crop ist im Briefing definiert, kein automatisches Beschneiden.
- Bilder maximal 1200 Pixel Breite, AVIF, unter 120 kB je Bild.
- Parallax auf 4 Prozent reduziert, Maskenreveals bleiben.
- 3D nur im Schichtmodell und im Hero, reduzierte Instanzzahlen, DPR 1,25, sonst Fallbackbilder.

### 16.5 Budget mobil

Erste Ansicht unter 400 kB gesamt, LCP unter 2,5 Sekunden im 4G-Profil, kein Layoutsprung durch Bilder oder Schriften, Formular vollständig ohne 3D und ohne GSAP bedienbar.

---

## 17. Was zur Freigabe von Phase 5 offen ist

1. **Bildproduktion.** Die 16 Slots sind briefingfertig (`03-BILDBRIEFINGS.md`). Ich brauche die Entscheidung, ob die Bilder von dir geliefert werden, extern generiert werden oder ob ich bis zur Lieferung die gestalteten Materialflächen einsetze. Der Code bleibt in allen Fällen identisch, die Slots sind austauschbar.
2. **Leitmotivhaus.** Vorschlag: Wohnhaus, Baujahr um 1970, Satteldach 38 Grad, roter bis rotbrauner Tondachziegel, verputzte Fassade in gebrochenem Weiß, Holzverschalung am Giebel. Der Winkel 38 Grad ist dann systemweit gesetzt und lässt sich später nur mit Aufwand ändern.
3. **Zweite Materialwelt.** Neben Ziegel führt die Bildwelt Schiefer und Zinkblech als Nebenmaterialien. Bestätigung, dass das Sortiment so dargestellt werden darf, oder Reduktion auf Ziegel und Blech.
4. **Bezeichnung der Marke im Kopf.** Vorschlag: Wortmarke DACHWERK in Sans 600 mit 0,22em Laufweite, Unterzeile HILDESHEIM · DACH & ENERGIE nur im Footer und im Hero-Eyebrow, nicht dauerhaft in der Kopfzeile. Kein Bildzeichen, kein Logo-Symbol, weil jedes erfundene Zeichen hier billiger wirkt als eine präzise Wortmarke.

Nach der Freigabe folgt Phase 6, Implementierung in der Reihenfolge aus `01-BLUEPRINT.md` Abschnitt 16, beginnend mit Tokens, Design System und Hero.
