# DACHWERK · LEITMOTIVHAUS MASTER-SPEZIFIKATION

Stand: 02.09.2026
Status: Produktionsgrundlage zur Freigabe. Keine Bildproduktion in diesem Dokument.
Grundlage ausschließlich: `01-BLUEPRINT.md`, `02-ART-DIRECTION.md`, `03-BILDBRIEFINGS.md`, Phase-9- und Phase-10.1-Bericht.
Betrifft in erster Linie die Master Assets `OBJ-01` und `OBJ-03`. Wo eine Eigenschaft in den
genannten Dokumenten nicht definiert ist, steht hier **OFFEN – ENTSCHEIDUNG ERFORDERLICH**,
nicht eine erfundene Annahme.

---

## TEIL A · Bereinigte Konflikte (Phase 10.2, Teil 1)

### A.1 Beispielprojekt 02, Vorher/Nachher

**Entscheidung:** Beispielprojekt 01 (`OBJ-01` → `OBJ-03`) ist das einzige Projekt mit
identischer Kameraachse. Beispielprojekt 02 (`OBJ-02` → `MAT-05`) bleibt als Projekt-/
Systemstory bestehen, beansprucht aber nicht mehr eine identische Achse. Die Regler-Mechanik
(`BeforeAfter`-Komponente) bleibt für beide Projekte technisch dieselbe; es ändert sich nur die
**Behauptung im Text**, nicht die Interaktion.

Betroffene Stellen, geprüft, mit exakter Änderung (Umsetzung folgt einer Implementierungsphase,
hier nicht angewendet, siehe `07-PHASE-8-UMSETZUNG.md`-Konvention „erst SoT, dann Code"):

| Datei | Aktueller Text | Befund | Vorgeschlagene neue Formulierung |
|---|---|---|---|
| `docs/04-HOMEPAGE-EXPERIENCE.md`, S10 | „Zwei Beispielprojekte, je mit Vorher-Nachher-Regler auf identischer Bildachse." | pauschale Behauptung für beide Projekte | **bereits in diesem Commit korrigiert**, siehe S10-Eintrag |
| `src/content/home.ts`, `projekte.lead` | „Vorher und nachher aus identischer Kameraachse. Der Regler läuft beim Scrollen einmal durch und bleibt danach zum Ziehen bedienbar." | gilt sichtbar für beide Projektkarten auf der Startseite, obwohl nur Projekt 01 das leistet | „Zwei Beispielprojekte, vorher und nachher. Beim ersten sehen Sie dasselbe Dach aus derselben Kameraposition, beim zweiten den Wechsel von der Dachprüfung zur eingebauten Technik. Der Regler läuft beim Scrollen einmal durch und bleibt danach zum Ziehen bedienbar." |
| `src/content/home.ts`, `projekte.leadSeite` | „Vorher und nachher aus identischer Kameraachse, je Projekt nebeneinander. Daneben stehen Ausgangslage, Ausführung und Ergebnis." | dieselbe Pauschalisierung auf `/projekte/` | „Vorher und nachher, je Projekt nebeneinander. Bei Beispielprojekt 01 aus identischer Kameraachse, bei Beispielprojekt 02 als Wechsel von der Dachprüfung zur eingebauten Technik. Daneben stehen Ausgangslage, Ausführung und Ergebnis." |

`src/content/projects.ts` und `src/sections/Projekte.tsx` selbst benötigen **keine strukturelle
Änderung**: Der `Project`-Typ verlangt keine Achsen-Identität, die `BeforeAfter`-Komponente ist
medienneutral (sie zeigt zwei beliebige `ReactNode`). Die Inkonsistenz lag ausschließlich im Text,
nicht im Code-Aufbau. Das erfüllt die Vorgabe „bestehende Projektstruktur so wenig wie möglich
verändern".

### A.2 OBJ-01 und die Sektion Haltung

**Entscheidung:** `04-HOMEPAGE-EXPERIENCE.md` hat für die Homepage-Dramaturgie Vorrang. Die
Sektion „Unsere Haltung" (S02) zeigt kein Bild. `OBJ-01` wird dort nicht eingesetzt.

**Umgesetzt:** Der Zweck-Eintrag von `OBJ-01` in `03-BILDBRIEFINGS.md` ist in diesem Commit
korrigiert (Verweis auf Sektion Haltung und `/ueber-uns/` gestrichen, durch den tatsächlich
bestätigten Einsatz ersetzt: `/projekte/` als Vorher, Master Asset für `OBJ-03`). Kein weiteres
Dokument musste geändert werden, weil `04-HOMEPAGE-EXPERIENCE.md` an der fraglichen Stelle
bereits korrekt war.

Zur Einordnung, damit nichts verloren geht: Das Leitmotivhaus selbst bleibt als Idee an anderer
Stelle präsent, weil `PRO-05` laut `03-BILDBRIEFINGS.md` ausdrücklich dasselbe Haus zeigen soll
(„zwei Personen stehen vor dem Haus"). Das ist ein eigener Slot mit eigenem Bildinhalt, keine
Wiederverwendung von `OBJ-01` selbst, und bleibt von dieser Korrektur unberührt.

---

## TEIL B · Master-Spezifikation Leitmotivhaus

### B.1 Gebäudeprofil

| Merkmal | Vorgabe | Quelle |
|---|---|---|
| Gebäudetyp | freistehendes Wohnhaus, zwei Vollgeschosse | `03`, Abschnitt 0 |
| Baualter | um 1970 | `03`, Abschnitt 0; `02`, Abschnitt 17.2 |
| Geschosse | zwei Vollgeschosse | `03`, Abschnitt 0 |
| Dachform | Satteldach | `03`, Abschnitt 0 |
| Dachneigung | 38 Grad, systemweit einziger Winkel der Marke | `01`, Abschnitt 6.1; `02`, Abschnitt 1.2 |
| Dachdeckung | Tondachziegel, Doppelmuldenfalz | `03`, Abschnitt 0 und OBJ-01 |
| Ziegelfarbe | rotbraun | `03`, Abschnitt 0 |
| Fassadenfarbe | verputzt, gebrochenes Weiß | `03`, Abschnitt 0 |
| Giebel | senkrechte Holzverschalung, verwittertes Grau | `03`, Abschnitt 0 |
| Sockel | Klinker | `03`, Abschnitt 0 |
| Fenster | **OFFEN – ENTSCHEIDUNG ERFORDERLICH** (Material, Sprossen, Rollläden nicht dokumentiert) | – |
| Türen | **OFFEN – ENTSCHEIDUNG ERFORDERLICH** (keine Beschreibung für die Fotobriefings) | – |
| Schornstein | vorhanden, mit Blechanschluss sichtbar (aus OBJ-02 abgeleitet); Material/Form **OFFEN** | `03`, OBJ-02 |
| Dachaufbauten | ein Dachflächenfenster im Bestand (aus OBJ-02 abgeleitet), sonst keine weiteren dokumentiert | `03`, OBJ-02 |
| Dachüberstand | dem Grunde nach vorhanden (Traufe wird als Bezugskante genannt), Maß für die Fotografie **OFFEN** | `03`, OBJ-02/OBJ-03 (Randabstand zur Traufe) |
| Ortgang | als Bezugskante genannt (Randabstand der PV-Module zum Ortgang), Gestaltungsdetail **OFFEN** | `03`, OBJ-03 |
| Traufe | als Bezugskante genannt, kein Gestaltungsdetail | `03`, OBJ-02/OBJ-03 |
| Regenrinne | im Vorher-Zustand mit Patina | `03`, OBJ-01 |
| Garten | gewachsen, mit alten Sträuchern | `03`, Abschnitt 0 |
| Zufahrt | Betonsteinpflaster | `03`, Abschnitt 0 |
| Grundstück | Größe/Form **OFFEN – ENTSCHEIDUNG ERFORDERLICH** | – |

### B.2 Dachprofil

| Merkmal | Vorher (OBJ-01) | Nachher (OBJ-03) |
|---|---|---|
| Deckung | Tondachziegel, Doppelmuldenfalz, alt | Tondachziegel, Doppelmuldenfalz, neu |
| Zustand | „gepflegt, Dach am Ende des Lebenszyklus", kein Verfall | vollständig neue Deckung |
| Moosbildung | leicht, ausschließlich in den Kehlen | keine (neue Deckung) |
| verschobener Ziegel | genau ein Ziegel sichtbar verschoben | keiner |
| Regenrinne | mit Patina | keine Aussage dokumentiert (Konsistenzregel verlangt: unverändert oder erneuert je nach Gesamtkonzept → **OFFEN**, siehe unten) |
| First / Kehle | First auf oberer Drittellinie, Kehle Ort der Moosbildung | First identisch positioniert (Konsistenzpflicht) |
| Kaminanschluss | vorhanden (aus OBJ-02), Zustand **OFFEN** | muss technisch korrekt an neue Deckung anschließen |
| PV-Fläche | nicht vorhanden | rechteckig geschlossenes Modulfeld |
| Modulorientierung | – | Reihen parallel zur Traufe / zu den Ziegelreihen |
| Randabstände | – | gleichmäßig zu Traufe, First und Ortgang; Maßzahl **OFFEN** |
| Reihenabstände | – | „gleichmäßig", Maßzahl **OFFEN** |
| Ausschlüsse | keine zusätzliche künstliche Beschädigung, kein Verfall | keine Module über Kanten/Gauben, keine falsche Zellteilung, keine schrägen Reihen |

Ein Punkt, den ich nicht glätten will: Für die Regenrinne trifft `03-BILDBRIEFINGS.md` nur für
OBJ-01 eine Aussage („mit Patina"). Ob sie im Nachher-Zustand erneuert erscheinen soll (was zu
einer neuen Dacheindeckung passen würde) oder unverändert bleibt (weil sie nicht Teil der
Baumaßnahme war), ist nicht entschieden. Ich nehme das in die offenen Punkte auf, statt es
stillschweigend festzulegen.

### B.3 Umgebung

| Merkmal | Vorgabe | Quelle |
|---|---|---|
| Landschaft | Niedersachsen, Region Leinebergland (regional, nicht am Grundstück selbst beschrieben) | `03`, Abschnitt 0; REG-01/REG-02 |
| Vegetation | gewachsener Garten, alte Sträucher | `03`, Abschnitt 0 |
| Nachbarbebauung | **OFFEN – ENTSCHEIDUNG ERFORDERLICH** | – |
| Gelände | **OFFEN – ENTSCHEIDUNG ERFORDERLICH** | – |
| regionale Anmutung | kein Neubaugebiet, kein Architektenhaus, kein Reihenhaus, kein amerikanischer Holzbau | `03`, Abschnitt 0; `01`, Abschnitt 8.1 |

---

## TEIL C · Kamera-Master (OBJ-01 und OBJ-03)

Verbindlich, **nicht veränderbar**, aus `03-BILDBRIEFINGS.md` OBJ-01/OBJ-03 wörtlich übernommen:

| Parameter | Wert |
|---|---|
| Standpunkt | von der Straße |
| Höhe | 1,6 m Augenhöhe |
| Brennweite | 35 mm |
| Blende | f/8, durchgehende Schärfe |
| Blickrichtung / Perspektive | Drei-Viertel-Ansicht von links, Giebel und Traufseite gleichzeitig lesbar |
| Gebäudeausrichtung zur Kamera | Kamera parallel zur Fassade, keine stürzenden Linien |
| Position des Hauses im Frame | rechte Bildhälfte, Dachfirst auf der oberen Drittellinie |
| Horizont | 62 Prozent Bildhöhe |
| Bildausschnitt Desktop | 16 zu 9, `breakout` |
| Bildausschnitt Mobil | 4 zu 5, Anschnitt links, Dachfläche vollständig, Garten beschnitten |
| Achsenidentität OBJ-01 zu OBJ-03 | Pflicht: identischer Standpunkt, identische Brennweite, identische Perspektive, identische Komposition |

Nicht dokumentiert und daher **OFFEN – ENTSCHEIDUNG ERFORDERLICH**:
- exakter Abstand zum Gebäude in Metern (nur qualitativ „von der Straße" beschrieben)
- Dachflächenanteil am Bild in Prozent (für OBJ-02 mit „zwei Drittel" beziffert, für OBJ-01/OBJ-03 nicht)

### C.1 Praktische Konsequenz für die Produktion

Damit OBJ-01 und OBJ-03 „nicht wie zwei unterschiedliche Häuser wirken" (Auftrag Phase 10.2),
muss die Produktionsmethode diese Kamera-Identität technisch erzwingen können, unabhängig davon,
ob am Ende fotografiert oder generiert wird:
- **Bei Fotoproduktion:** ein fixierter Kamerastandpunkt (Stativmarkierung), zwei Aufnahmetermine
  am selben Gebäude.
- **Bei Generierung:** ein Verfahren, das den zweiten Zustand als Bearbeitung des ersten Bildes
  erzeugt (Bild-zu-Bild, nicht zwei unabhängige Neugenerierungen mit demselben Prompt-Text), weil
  unabhängige Generierungen erfahrungsgemäß Proportionen, Fensterzahl und Gartenbepflanzung nicht
  zuverlässig identisch reproduzieren.

Das ist eine Produktionsanforderung, keine Methodenentscheidung – letztere bleibt wie in Phase
10.1 offen (siehe Teil G).

---

## TEIL D · Vorher-/Nachher-Masterregeln

**Muss zwischen OBJ-01 und OBJ-03 identisch bleiben:**
1. Gebäude (Proportionen, Fensterzahl und -position, Fassade, Giebel, Sockel)
2. Grundstück, Garten, Zufahrt
3. Nachbarschaft / Umgebung im Bildausschnitt
4. Kamerastandpunkt
5. Brennweite (35 mm)
6. Perspektive (Drei-Viertel von links, 1,6 m Augenhöhe)
7. Bildkomposition (Haus rechts, First obere Drittellinie, Horizont 62 %)
8. Gebäudeposition im Frame

**Darf sich ausschließlich ändern:**
1. Dachzustand (alt/Moos/verschobener Ziegel → neue Deckung)
2. Vorhandensein der Photovoltaikanlage
3. Licht/Tageszeit, wie in Teil E dokumentiert (Morgen → Nachmittag), weil das Teil der erzählten
   Dramaturgie ist, nicht eine zusätzliche Freiheit

Jede weitere Abweichung zwischen den beiden Bildern gilt als Fehler, unabhängig von der
Produktionsmethode.

## TEIL E · Licht und Wetter

| | OBJ-01 (Vorher) | OBJ-03 (Nachher) |
|---|---|---|
| Tageszeit | bedeckt und gleichmäßig, oder früher Morgen | später Nachmittag |
| Lichtrichtung | flach von links | von links |
| Schatten | keine harten Schlagschatten auf der Dachfläche | – (nicht gesondert spezifiziert) |
| Reflexion | – | Modulglas zeigt ruhige Himmelsreflexion, keine gleißende Spiegelung |
| Himmel | ruhig, allenfalls strukturierte Wolken, keine Dramatik | keine gesonderte Aussage über OBJ-01 hinaus |

Zusätzlich, für beide Bilder aus dem allgemeinen fotografischen Look (`02`, Abschnitt 10.2)
verbindlich: natürliches Licht, kein Blitz, Sättigung etwa 85 bis 90 Prozent, angehobener
Schwarzpunkt, kein HDR, kein Blaustich, kein Orange-Teal-Grading. Das global im Code ergänzte
Filmkorn wird nicht in die Bildquelle hineingerendert.

---

## TEIL F · Ausschlussliste

Nur Punkte, die sich aus den drei Grunddokumenten ableiten lassen. Herkunft in Klammern.

- kein Baugerüst (OBJ-01)
- keine Personen im Bild (OBJ-01)
- kein Fahrzeug mit Beschriftung, kein sichtbares Kennzeichen (OBJ-01)
- keine zusätzliche künstliche Beschädigung über das dokumentierte Moos und den einen verschobenen
  Ziegel hinaus (OBJ-01, Auftrag 10.2 Punkt 2.4)
- falsche Dachneigung, jede Abweichung von 38 Grad (`01`, Abschnitt 6.1)
- falscher Ziegeltyp oder falsche Ziegelfarbe (Doppelmuldenfalz, rotbraun; `03`, Abschnitt 0)
- Module über Dachkanten oder Gauben hinweg (OBJ-03)
- schwebende Module, unplausible Montage, falsche Zellteilung, schräge Reihen, unrealistische
  Kabelführung (Sammelbegriff „technisch plausible Montage", OBJ-03 und Auftrag 10.2 Punkt 2.5)
- Anlage bis an die Dachkante, Sonnenstern, Lens Flare (OBJ-03)
- zusätzliche Dachflächenfenster über das eine dokumentierte hinaus (Konsistenzpflicht, aus OBJ-02
  abgeleitet)
- Gauben jeder Art (im Leitmotivhaus nirgends dokumentiert; ein Satteldach ohne Gaube ist die
  dokumentierte Grundform)
- von Bild zu Bild abweichende Fenster in Zahl, Position oder Format (Konsistenzpflicht Teil D)
- veränderte Gebäudefassade, veränderte Gartenstruktur, andere Hausproportionen zwischen OBJ-01
  und OBJ-03 (Konsistenzpflicht Teil D, „diese Identität ist Pflicht")
- andere Kameraposition oder andere Brennweite als in Teil C festgelegt
- amerikanische Architektur, amerikanischer Holzbau (`03`, Abschnitt 0; `01`, Abschnitt 8.1)
- Neubau-Charakter, Architektenhaus-Charakter, Reihenhaus-Charakter (`03`, Abschnitt 0)
- unplausible deutsche Handwerksdetails; bei Generierung immer deutsche Bauteilbegriffe führen,
  sonst entstehen amerikanische Dächer (`03`, Hinweise für gezielte Bilderzeugung, Punkt 2)

Nicht übernommen, weil nicht für dieses Gebäude/diese zwei Bilder belegt: ein allgemeiner Verweis
auf „unrealistische Kabel" als eigener Punkt losgelöst von der Montage-Plausibilität — die
Bildbriefings äußern sich dazu für OBJ-01/OBJ-03 nicht gesondert, ich habe ihn deshalb unter
„technisch plausible Montage" gefasst statt ihn als eigenständige, sonst unbelegte Regel zu führen.

---

## TEIL G · Offene Auftraggeberentscheidungen

Nicht von mir entschieden, weil die Dokumentation dazu keine Vorgabe enthält:

1. **Fensterdetails** des Leitmotivhauses (Material, Sprossen, Rollläden, Anzahl je Fassadenseite).
2. **Nachbarbebauung** im Bildhintergrund (vorhanden/nicht vorhanden, Charakter).
3. **Gelände** und Grundstücksgröße/-form.
4. **Konkrete Produktionsmethode** (Fotoproduktion, kontrollierte KI-Generierung, oder weiterhin
   Materialflächen) – aus Phase 10.1 unverändert offen.
5. **Türgestaltung** (Material, Farbe, Form).
6. **Zustand von Regenrinne und Kaminanschluss im Nachher-Bild** (erneuert oder unverändert
   übernommen, siehe Teil B.2).
7. **Maßzahlen** für Kameraabstand, Dachflächenanteil im Bild, PV-Randabstände und -Reihenabstände
   (bisher nur qualitativ „gleichmäßig" dokumentiert).
8. **Ortgang- und Traufe-Gestaltung** im fotografischen Detail (Material, Farbe), über die reine
   Nennung als Bezugskante hinaus.

Diese acht Punkte blockieren keine weitere Konzeptarbeit, sie blockieren aber jede konkrete
Bildproduktion, sobald sie beginnt – deshalb sind sie hier vollständig aufgeführt statt verstreut.

---

## TEIL H · Kein Produktionsentscheid

Dieses Dokument trifft **keine** Entscheidung zwischen Fotoproduktion und KI-Generierung. Alle
Angaben in Teil B bis F sind absichtlich so formuliert, dass sie für beide Wege gleichermaßen als
Abnahmekriterium taugen. Es werden hier keine Bildgenerator-Prompts formuliert.
