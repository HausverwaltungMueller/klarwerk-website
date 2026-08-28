# DACHWERK · BILDBRIEFINGS

Stand: 28.08.2026
Gehört zu `02-ART-DIRECTION.md` Abschnitt 10.
Zweck: Jeder Bildplatz der Website ist hier vollständig beschrieben. Die Bilder können produziert, gezielt generiert oder später ersetzt werden, ohne dass Layout, Animation oder Konzept angepasst werden müssen.

---

## 0. Verbindliche Rahmenwerte

**Leitmotivhaus (in allen Objekt- und Prozessbildern dasselbe Gebäude)**
Wohnhaus in Niedersachsen, Baujahr um 1970, freistehend, zwei Vollgeschosse, Satteldach mit 38 Grad Neigung, Tondachziegel rotbraun im Doppelmuldenfalz, Fassade verputzt in gebrochenem Weiß, Giebel mit senkrechter Holzverschalung in verwittertem Grau, Sockel aus Klinker, gewachsener Garten mit alten Sträuchern, Zufahrt aus Betonsteinpflaster. Kein Neubaugebiet, kein Architektenhaus, kein Reihenhaus, kein amerikanischer Holzbau.

**Look, für alle Aufnahmen identisch**
Natürliches Licht, Sättigung etwa 85 bis 90 Prozent, angehobener Schwarzpunkt, Lichter nicht ausgebrannt, moderate Kontraste, senkrechte Kanten senkrecht, kein Orange-Teal-Grading, kein HDR, Korn 2 bis 3 Prozent wird global im Code ergänzt und ist nicht ins Bild zu rendern.

**Technische Auslieferung je Slot**

| Angabe | Vorgabe |
|---|---|
| Formate | AVIF als Primärformat, WebP als Fallback |
| Breiten Desktop | 2560, 1920, 1280 Pixel |
| Breiten Mobil | 1200, 828 Pixel |
| Gewicht | Desktop maximal 220 kB, Mobil maximal 120 kB je Bild |
| Farbraum | sRGB, kein eingebettetes Profil über 1 kB |
| Dateiname | `<slot-id>-<zustand>-<breite>.avif`, Beispiel `obj-01-bestand-1920.avif` |
| Metadaten | entfernt, außer Urheberangabe |

**Felder je Briefing**
Zweck · Motiv · Perspektive · Licht · Brennweite und Look · Bildkomposition · Emotion · Verhältnis zum Text · Crop Desktop · Crop Mobil · Bewegung · Ladepriorität · alt-Text · Ausschluss

---

## Klasse A · Objekt

### OBJ-01 · Leitmotivhaus, Bestand
- **Zweck:** Erste fotografische Begegnung mit dem Haus. Referenzzustand für alle späteren Zustände. Einsatz auf `/projekte/` als Vorher, in der Sektion Haltung und auf `/ueber-uns/`.
- **Motiv:** Das Leitmotivhaus im Bestand, altes Dach, leichte Moosbildung in den Kehlen, ein Ziegel sichtbar verschoben, Regenrinne mit Patina. Kein Verfall, sondern ein Haus, das gepflegt ist und dessen Dach am Ende seines Lebenszyklus steht.
- **Perspektive:** Standpunkt von der Straße, Augenhöhe 1,6m, Drei-Viertel-Ansicht von links, sodass Giebel und Traufseite gleichzeitig lesbar sind. Kamera parallel zur Fassade ausgerichtet, keine stürzenden Linien.
- **Licht:** Bedeckt und gleichmäßig oder früher Morgen mit flachem Licht von links. Keine harten Schlagschatten auf der Dachfläche, damit der Zustand des Ziegels lesbar bleibt.
- **Brennweite und Look:** 35mm, Blende etwa f/8, durchgehende Schärfe, dokumentarisch, kein Weichzeichner.
- **Bildkomposition:** Haus auf der rechten Bildhälfte, Dachfirst auf der oberen Drittellinie, links Raum für Text. Horizont bei 62 Prozent Bildhöhe. Himmel ruhig, allenfalls strukturierte Wolken ohne Dramatik.
- **Emotion:** Nüchterne Wiedererkennung. „So ein Haus kenne ich, so eines habe ich.“ Keine Nostalgie, kein Mitleid.
- **Verhältnis zum Text:** Bild rechts, Text links auf 5 von 12 Spalten. Text steht über Himmel und Garten, nie über der Dachfläche.
- **Crop Desktop:** 16 zu 9, `breakout`.
- **Crop Mobil:** 4 zu 5, Anschnitt links, Dachfläche bleibt vollständig, Garten wird beschnitten.
- **Bewegung:** Maskenreveal von unten, Parallax 6 Prozent.
- **Ladepriorität:** lazy, hoher Rang.
- **alt-Text:** „Freistehendes Wohnhaus mit Satteldach aus rotbraunen Tondachziegeln, Dachfläche mit Moosbildung, Aufnahme von der Straßenseite.“
- **Ausschluss:** kein Baugerüst, keine Personen, kein Fahrzeug mit Beschriftung, kein sichtbares Kennzeichen.

### OBJ-02 · Dachfläche aus erhöhter Position
- **Zweck:** Kopfbild der Domänenseite `/dach/`. Zeigt die Fläche als Fläche.
- **Motiv:** Die Dachfläche des Leitmotivhauses aus erhöhter Position, Ziegelreihen im Rhythmus, First, Gratkante und ein Dachflächenfenster im Bild, Blechanschluss am Kamin sichtbar.
- **Perspektive:** Standpunkt vom Nachbardach oder aus einem Fenster gegenüber, etwa 8m Höhe, Blickwinkel schräg auf die Fläche, sodass die Ziegelreihen als Raster verlaufen und in der Tiefe zusammenlaufen.
- **Licht:** Streiflicht am späten Nachmittag, seitlich einfallend, sodass jede Ziegelreihe eine feine Lichtkante bekommt.
- **Brennweite und Look:** 50mm, f/8, Schärfe über die gesamte Fläche.
- **Bildkomposition:** Fläche füllt zwei Drittel des Bildes, Kante der Traufe verläuft diagonal, idealerweise nahe 38 Grad. Kein Himmel oder nur ein schmales Band oben.
- **Emotion:** Respekt vor Präzision. Handwerk als Ordnung.
- **Verhältnis zum Text:** Bild `bleed` als Sektionskopf, Headline sitzt unter dem Bild, nicht darauf.
- **Crop Desktop:** 21 zu 9.
- **Crop Mobil:** 3 zu 2, engerer Ausschnitt, Ziegelraster bleibt als Raster erkennbar.
- **Bewegung:** Parallax 8 Prozent, kein Zoom.
- **Ladepriorität:** eager auf `/dach/`, sonst lazy.
- **alt-Text:** „Dachfläche mit Ziegelreihen im Streiflicht, First, Gratkante und Blechanschluss am Kamin.“
- **Ausschluss:** keine Person auf dem Dach ohne Absturzsicherung, keine sichtbaren Schäden, keine unsauberen Anschlüsse.

### OBJ-03 · Leitmotivhaus fertig, mit Photovoltaik
- **Zweck:** Beweisbild. Einsatz auf `/dach-und-pv/`, `/projekte/` als Nachher, als Grundlage des Open-Graph-Bildes.
- **Motiv:** Dasselbe Haus, neues Ziegeldach, darauf eine Photovoltaikanlage. Modulfeld rechteckig geschlossen, gleichmäßige Randabstände zu Traufe, First und Ortgang, Modulreihen parallel zu den Ziegelreihen, keine Module über Kanten oder Gauben hinweg.
- **Perspektive:** Identische Achse, identische Brennweite und identischer Standpunkt wie OBJ-01. Diese Identität ist Pflicht, sie trägt den Vorher-Nachher-Regler.
- **Licht:** Später Nachmittag, Licht von links, Modulglas zeigt eine ruhige Himmelsreflexion, keine gleißende Spiegelung.
- **Brennweite und Look:** 35mm, f/8, wie OBJ-01.
- **Bildkomposition:** wie OBJ-01, damit der Wischer funktioniert.
- **Emotion:** Stille Zufriedenheit. „Fertig, und es sieht selbstverständlich aus.“
- **Verhältnis zum Text:** identisch zu OBJ-01, damit der Text bei beiden Zuständen an derselben Stelle lesbar bleibt.
- **Crop Desktop:** 16 zu 9, `breakout`. Zusätzlich 1200 mal 630 für Open Graph.
- **Crop Mobil:** 4 zu 5, identisch beschnitten wie OBJ-01.
- **Bewegung:** `clip-path`-Wischer gegen OBJ-01, an Scroll und Drag.
- **Ladepriorität:** lazy, hoher Rang.
- **alt-Text:** „Dasselbe Wohnhaus nach der Sanierung, neues Ziegeldach mit geschlossenem Photovoltaikfeld und gleichmäßigen Randabständen.“
- **Ausschluss:** keine Module mit falscher Zellteilung, keine schrägen Reihen, keine Anlage bis an die Dachkante, kein Sonnenstern, kein Lens Flare.

### OBJ-04 · Himmel und Umgebungsband für die Hero-Szene
- **Zweck:** Ebene 0 und 1 des Heros. Liefert echten Himmel und echte Landschaft für die 3D-Szene und macht sie glaubwürdig.
- **Motiv:** Zwei Aufnahmen. Erstens ein Himmel im frühen Morgen mit feiner Wolkenstruktur, ohne Sonne im Bild. Zweitens ein Landschaftsband: Baumreihen, Hecken, Feld, angedeutete Dachlandschaft in der Ferne, alles als niedriges horizontales Band.
- **Perspektive:** Himmel leicht nach oben, ohne Bodenanteil. Landschaftsband auf Augenhöhe, Horizont gerade.
- **Licht:** Morgen, Dunst in der Tiefe, Kontrast in der Ferne bewusst niedrig.
- **Brennweite und Look:** Himmel 35mm, Landschaft 85mm für Kompression und ruhige Ebenen. Landschaft um etwa 25 Prozent entsättigt, damit sie hinter der Szene bleibt.
- **Bildkomposition:** Himmel ohne Blickfang, keine markante Wolke in der Bildmitte, weil dort später die Headline steht. Landschaft ohne erkennbares Einzelgebäude.
- **Emotion:** Ruhe, Morgen, Beginn eines Arbeitstages.
- **Verhältnis zum Text:** Die Headline liegt über dem Himmel im linken Bilddrittel. Dieser Bereich muss tonal gleichmäßig sein, Kontrastmessung mindestens 7 zu 1 gegen `--text-0`.
- **Crop Desktop:** Himmel 2560 mal 1440, Landschaft 2560 mal 520.
- **Crop Mobil:** Himmel 1200 mal 1600, Landschaft 1200 mal 400.
- **Bewegung:** Himmel bewegt sich mit der Kamerafahrt um maximal 4 Prozent, Landschaft um 8 Prozent, damit Tiefe entsteht.
- **Ladepriorität:** Himmel eager nach dem ersten Frame, Landschaft direkt danach.
- **alt-Text:** dekorativ, `aria-hidden`, da die Hero-Aussage im Text steht.
- **Ausschluss:** keine Sonne im Bild, keine Vögel, keine Kondensstreifen, keine dramatischen Wolkenformationen, kein Sonnenuntergang.

---

## Klasse B · Material

### MAT-01 · Tondachziegel im Streiflicht
- **Zweck:** Linke Seite des Split Screens, Domäne DACH. Erster fotografischer Materialbeweis der Seite direkt nach dem Hero.
- **Motiv:** Ausschnitt einer Ziegelfläche, drei bis vier Reihen, Doppelmuldenfalz, Oberfläche mit sichtbarer Struktur und leichter Farbstreuung zwischen den Ziegeln.
- **Perspektive:** Nah, etwa 60cm Abstand, Blickwinkel 45 Grad zur Fläche, sodass Profil und Fläche gleichzeitig lesbar sind.
- **Licht:** Hartes Streiflicht von links, sodass jede Ziegelkante eine Lichtkante und einen kurzen Schatten wirft.
- **Brennweite und Look:** 85mm, f/4, Schärfe auf der zweiten Ziegelreihe, Tiefe nach hinten weich auslaufend.
- **Bildkomposition:** Hochformat, Ziegelreihen laufen diagonal von unten links nach oben rechts. Kein Himmel, kein Kontext, nur Material.
- **Emotion:** Wertigkeit, Haptik. Man möchte das Material anfassen.
- **Verhältnis zum Text:** Text steht neben dem Bild, nicht darauf. Über dem Bild nur das Domänenwort DACH in `--dach`.
- **Crop Desktop:** 4 zu 5 hoch.
- **Crop Mobil:** 3 zu 2 quer, Diagonale bleibt erhalten.
- **Bewegung:** gegenläufiger Parallax zu MAT-02, 6 Prozent, plus Maskenreveal von unten.
- **Ladepriorität:** eager, im ersten Scrollbereich.
- **alt-Text:** „Nahaufnahme einer Dachfläche aus Tondachziegeln im Doppelmuldenfalz, Streiflicht betont die Profilkanten.“
- **Ausschluss:** kein Moos, keine Beschädigung, keine Wassertropfen, keine sichtbare Beschriftung des Herstellers.

### MAT-02 · Modulkante und Glasreflexion
- **Zweck:** Rechte Seite des Split Screens, Domäne ENERGIE. Gegenstück zu MAT-01.
- **Motiv:** Kante eines Photovoltaikmoduls, Aluminiumrahmen, Glasoberfläche mit Zellstruktur, darunter die Montageschiene angedeutet. Die Reflexion zeigt Himmel und eine angedeutete Baumkrone.
- **Perspektive:** Nah, entlang der Modulreihe, sodass die Rahmenkante als Linie durch das Bild läuft und die Zellen in die Tiefe fluchten.
- **Licht:** Bedeckt und diffus. Bewusst kein Sonnenlicht, weil harte Reflexionen die Zellstruktur zerstören und billig aussehen.
- **Brennweite und Look:** 50mm, f/5,6, Schärfe auf der Rahmenkante.
- **Bildkomposition:** Hochformat, Kante läuft diagonal gegenläufig zu MAT-01, also von unten rechts nach oben links. Diese Gegenläufigkeit ist die visuelle Klammer des Split Screens.
- **Emotion:** Technische Präzision, Sauberkeit, Gegenwart.
- **Verhältnis zum Text:** wie MAT-01, Domänenwort ENERGIE in `--energie`.
- **Crop Desktop:** 4 zu 5 hoch.
- **Crop Mobil:** 3 zu 2 quer.
- **Bewegung:** gegenläufiger Parallax zu MAT-01.
- **Ladepriorität:** eager.
- **alt-Text:** „Kante eines Photovoltaikmoduls mit Aluminiumrahmen, Zellstruktur und ruhiger Himmelsreflexion im Glas.“
- **Ausschluss:** keine Spiegelung von Personen oder Kameras, keine Regentropfen, keine Verschmutzung, keine unrealistische Zellgeometrie, kein Solarpark im Hintergrund.

### MAT-03 · Blech und Kantenverarbeitung
- **Zweck:** Leistungsseiten `/dach/neueindeckung/` und `/dach/flachdach/`. Zeigt Verarbeitungsqualität an der Stelle, an der Dächer tatsächlich undicht werden.
- **Motiv:** Ein handwerklich saubere Blechanschluss, Zink oder Titanzink, an Kamin, Ortgang oder Kehle. Falzkante scharf, Löten oder Falzung erkennbar, Anschluss an den Ziegel korrekt ausgeführt.
- **Perspektive:** Detail, etwa 40cm Abstand, leicht von oben, sodass die Falzlinie das Bild teilt.
- **Licht:** Bedeckt, weiches Licht, damit das Metall Struktur zeigt und nicht ausbrennt.
- **Brennweite und Look:** 85mm, f/5,6, Schärfe auf der Falzkante.
- **Bildkomposition:** Querformat, Falzlinie als führende Linie durch das Bild, Materialwechsel Metall zu Ton in der Bildmitte.
- **Emotion:** „Hier arbeitet jemand genau.“
- **Verhältnis zum Text:** Bild neben einem kurzen Fachabsatz, technische Beschriftung mit Bezugslinie zum Detail.
- **Crop Desktop:** 3 zu 2.
- **Crop Mobil:** 1 zu 1, Falzkante bleibt zentral.
- **Bewegung:** Maskenreveal, kein Parallax.
- **Ladepriorität:** lazy.
- **alt-Text:** „Sauber gefalzter Zinkblechanschluss am Übergang zwischen Kamin und Ziegeldeckung.“
- **Ausschluss:** keine Silikonfuge als Ersatz für Blech, keine Rostspuren, keine improvisierte Ausführung.

### MAT-04 · Offener Dachaufbau
- **Zweck:** Begleitbild zum 3D-Schichtmodell und Kopfbild `/dach/daemmung/`. Verbindet die abstrahierte Darstellung mit der Realität.
- **Motiv:** Dachaufbau in Bearbeitung von innen oder außen: Sparren, Dämmung zwischen den Sparren, Unterspannbahn, Konterlattung, Traglattung. Mindestens drei Schichten gleichzeitig sichtbar.
- **Perspektive:** Aus dem Dachraum heraus schräg nach oben oder von außen auf die offene Fläche, sodass die Schichtung als Schichtung lesbar wird.
- **Licht:** Tageslicht, das durch die offene Fläche einfällt, warm, mit sichtbarem Lichtkeil. Keine Baustrahler.
- **Brennweite und Look:** 35mm, f/5,6, Schärfe auf der mittleren Schicht.
- **Bildkomposition:** Sparren als parallele Linien, die in die Tiefe fluchten, Schichten quer dazu. Starke Liniengrafik, fast schon Zeichnung.
- **Emotion:** Einsicht. „So ist ein Dach aufgebaut.“
- **Verhältnis zum Text:** Bild links, Schichtliste rechts mit Bezugslinien, die auf die jeweilige Schicht zeigen. Das ist die anspruchsvollste Text-Bild-Verbindung der Seite und braucht ein Bild mit ruhigem Hintergrund.
- **Crop Desktop:** 3 zu 2.
- **Crop Mobil:** 4 zu 5, Schichten bleiben vollständig.
- **Bewegung:** Bezugslinien zeichnen sich nach dem Bildreveal, gestaffelt.
- **Ladepriorität:** lazy.
- **alt-Text:** „Offener Dachaufbau mit Sparren, Zwischensparrendämmung, Unterspannbahn und Lattung.“
- **Ausschluss:** keine Bauschäden, keine unsachgemäße Dämmung, keine offenen Kabel, kein unaufgeräumter Bauschutt.

### MAT-05 · Technik im Haus, Wechselrichter und Speicher
- **Zweck:** Kopfbild `/photovoltaik/stromspeicher/` und Beleg in der Sektion Qualität.
- **Motiv:** Wechselrichter und Batteriespeicher an einer Wand in einem Hausanschlussraum. Saubere Kabelführung, beschriftete Leitungen, gerade montierte Geräte, Zählerschrank angedeutet.
- **Perspektive:** Frontal, leicht seitlich, Augenhöhe, keine stürzenden Linien.
- **Licht:** Vorhandenes Raumlicht plus Tageslicht durch ein Kellerfenster, kühl aber nicht steril. Keine Aufhellung des ganzen Raums.
- **Brennweite und Look:** 35mm, f/5,6.
- **Bildkomposition:** Geräte auf der rechten Bildhälfte, Kabelführung als vertikale Linien, links Wandfläche als Ruhezone für Text.
- **Emotion:** Ordnung. „Das ist fachgerecht gemacht und nicht improvisiert.“
- **Verhältnis zum Text:** Text auf der Wandfläche im Bild möglich, mit gerichtetem Verlauf, Kontrast messen.
- **Crop Desktop:** 16 zu 9.
- **Crop Mobil:** 4 zu 5, Geräte bleiben vollständig.
- **Bewegung:** Maskenreveal von links.
- **Ladepriorität:** lazy.
- **alt-Text:** „Wechselrichter und Batteriespeicher mit sauberer Kabelführung an einer Kellerwand.“
- **Ausschluss:** keine Herstellerlogos in Großaufnahme, keine sichtbaren Zählernummern, keine offenen Klemmen, kein Kabelchaos.

---

## Klasse C · Prozess

### PRO-01 · Hände am Ziegel
- **Zweck:** Sektion Qualität und Menschen. Das zentrale Menschlichkeitsbild der Startseite.
- **Motiv:** Zwei Hände legen einen Ziegel in die Lattung ein. Arbeitshandschuhe abgelegt oder getragen, Hände mit Arbeitsspuren, Ziegelstaub. Werkzeug im Bildrand.
- **Perspektive:** Über die Schulter der arbeitenden Person, Blick auf die Hände, Person selbst nur als Anschnitt.
- **Licht:** Tageslicht, seitlich, Hände im Licht, Hintergrund etwas dunkler.
- **Brennweite und Look:** 50mm, f/2,8, Schärfe auf den Händen, Hintergrund weich.
- **Bildkomposition:** Hände im linken unteren Drittel, Ziegelfläche läuft nach rechts oben aus dem Bild.
- **Emotion:** Nähe, Können, Ruhe. Kein Heldentum.
- **Verhältnis zum Text:** Bild `breakout`, Text darunter. Kein Text über den Händen.
- **Crop Desktop:** 3 zu 2.
- **Crop Mobil:** 4 zu 5.
- **Bewegung:** Maskenreveal von unten, Parallax 4 Prozent.
- **Ladepriorität:** lazy.
- **alt-Text:** „Hände legen einen Dachziegel in die Lattung ein, Werkzeug liegt daneben.“
- **Ausschluss:** kein Blick in die Kamera, kein Lächeln, keine neue oder saubere Arbeitskleidung, keine gestellte Handhaltung, kein Daumen hoch.

### PRO-02 · Bestandsaufnahme im Dachraum
- **Zweck:** Prozessschritt 01 „Wir schauen hin“ und `/dach/dachsanierung/`.
- **Motiv:** Prüfung im Dachstuhl: eine Hand mit Feuchtemessgerät oder Taschenlampe am Sparren, Blick auf eine Fehlstelle in der Unterdeckung. Notizblock oder Tablet angedeutet.
- **Perspektive:** Aus dem Dachraum, niedriger Standpunkt, Sparren fluchten in die Tiefe.
- **Licht:** Lichtkeil aus einer Dachluke plus Lampenlicht, warm, kontrastreich, aber mit lesbaren Tiefen.
- **Brennweite und Look:** 35mm, f/2,8, Schärfe auf Messgerät und Sparren.
- **Bildkomposition:** Diagonale Sparrenführung, Messpunkt im Schnittpunkt der Drittellinien, dunkler Raum als Rahmen.
- **Emotion:** Aufmerksamkeit, fachliche Prüfung, kein Alarm.
- **Verhältnis zum Text:** Text neben dem Bild, Prozessnummer 01 in `--t-numeral` links.
- **Crop Desktop:** 3 zu 2.
- **Crop Mobil:** 1 zu 1.
- **Bewegung:** Maskenreveal, kein Parallax, weil der Raum dunkel ist.
- **Ladepriorität:** lazy.
- **alt-Text:** „Prüfung im Dachraum, eine Hand hält ein Messgerät an den Sparren.“
- **Ausschluss:** keine dramatische Schadensdarstellung, kein Schimmel in Großaufnahme, keine Angstbilder.

### PRO-03 · Planung
- **Zweck:** Prozessschritt 03 „Wir planen sauber“ und `/photovoltaik/pv-planung/`.
- **Motiv:** Tisch mit einer Dachaufsicht als Zeichnung, Maßband, Bleistift, eine Hand die eine Modulbelegung einträgt. Zusätzlich eine Ziegelprobe auf dem Tisch. Kein Laptop im Zentrum.
- **Perspektive:** Von oben, leicht schräg, Aufsicht auf den Tisch.
- **Licht:** Tageslicht von der Seite, warme Streiflichter auf dem Papier, klarer Schattenwurf des Stifts.
- **Brennweite und Look:** 35mm, f/4, Schärfe auf der Zeichnung.
- **Bildkomposition:** Zeichnung füllt zwei Drittel, Hand kommt von rechts unten ins Bild, oben Tischfläche als Ruhezone.
- **Emotion:** Nachvollziehbarkeit. „Hier wird gerechnet, nicht geschätzt.“
- **Verhältnis zum Text:** Bild rechts, Prozesstext links. Die technische Beschriftung der Seite und die Zeichnung im Bild sollen sich formal entsprechen.
- **Crop Desktop:** 3 zu 2.
- **Crop Mobil:** 4 zu 5.
- **Bewegung:** Maskenreveal von rechts.
- **Ladepriorität:** lazy.
- **alt-Text:** „Dachaufsicht als Zeichnung auf einem Tisch, eine Hand trägt die Modulbelegung ein.“
- **Ausschluss:** keine erfundene Software-Oberfläche, keine lesbaren Kundendaten, keine erfundenen Zahlen auf der Zeichnung, kein Taschenrechner mit Betrag.

### PRO-04 · Modulmontage
- **Zweck:** Prozessschritt 04 „Wir setzen um“, `/photovoltaik/pv-anlage/`, `/dach-und-pv/`.
- **Motiv:** Montage eines Moduls auf der Schiene. Zwei Personen, Hände am Modul, Akkuschrauber, Schienensystem und Dachhaken sichtbar. Persönliche Schutzausrüstung korrekt, Sicherung sichtbar oder plausibel angedeutet.
- **Perspektive:** Auf Dachniveau, seitlich, Modulfläche fluchtet in die Tiefe, Personen im Anschnitt und von hinten.
- **Licht:** Bedeckt oder Vormittagslicht, keine Sonne im Bild, keine Gegenlichtsilhouetten.
- **Brennweite und Look:** 35mm, f/5,6, Schärfe auf Modulkante und Händen.
- **Bildkomposition:** Diagonale der Dachfläche von links unten nach rechts oben, Personen auf der rechten Seite, Himmel schmales Band.
- **Emotion:** Handwerk in Bewegung, konzentriert, kein Actionbild.
- **Verhältnis zum Text:** Bild `bleed` als Sektionskopf, Text darunter.
- **Crop Desktop:** 21 zu 9.
- **Crop Mobil:** 3 zu 4, Anschnitt auf Hände und Modulkante.
- **Bewegung:** Parallax 6 Prozent.
- **Ladepriorität:** lazy.
- **alt-Text:** „Zwei Handwerker setzen ein Photovoltaikmodul auf die Montageschiene eines Ziegeldachs.“
- **Ausschluss:** keine Person ohne Absturzsicherung, kein Blick in die Kamera, keine Pose, keine gestellte Übergabe eines Werkzeugs, keine leere Corporate-Kleidung.

### PRO-05 · Gespräch am Objekt
- **Zweck:** Sektion Kontakt und `/ueber-uns/`. Der erste Kontakt soll als Gespräch erkennbar sein.
- **Motiv:** Zwei Personen stehen vor dem Haus, beide von hinten oder im Profil, eine deutet zum Dach, die andere blickt hinauf. Zwischen ihnen ein Ausdruck oder ein Klemmbrett.
- **Perspektive:** Hinter den Personen, Augenhöhe, sodass der Betrachter die Position des Hausbesitzers einnimmt.
- **Licht:** Später Nachmittag, langes Licht von der Seite, Schatten der Personen auf dem Pflaster.
- **Brennweite und Look:** 50mm, f/2,8, Schärfe auf den Personen, Haus leicht weich.
- **Bildkomposition:** Personen im unteren linken Drittel, Dach im oberen rechten Bereich, Blickrichtung führt zur Dachfläche.
- **Emotion:** Vertrauen, Augenhöhe, Unverbindlichkeit des ersten Gesprächs.
- **Verhältnis zum Text:** Bild neben dem Kontaktabschluss, Text auf ruhiger Fläche links, nie über den Personen.
- **Crop Desktop:** 3 zu 2.
- **Crop Mobil:** 4 zu 5.
- **Bewegung:** Maskenreveal, Parallax 4 Prozent.
- **Ladepriorität:** lazy.
- **alt-Text:** „Zwei Personen stehen vor einem Wohnhaus und betrachten die Dachfläche, eine deutet nach oben.“
- **Ausschluss:** kein Handschlag, keine Visitenkarte, kein Vertrag, kein Lächeln in die Kamera, keine Familieninszenierung.

---

## Klasse D · Region

### REG-01 · Leinebergland, Fernblick
- **Zweck:** Sektion Region auf der Startseite, hinter der stilisierten Karte oder daneben.
- **Motiv:** Blick über eine bewegte Landschaft, Felder, Waldkanten, in der Tiefe eine Ortschaft, deren Dächer als Fläche lesbar sind. Kein markantes Wahrzeichen, damit das Bild regional bleibt und nicht zum Postkartenmotiv wird.
- **Perspektive:** Von einer erhöhten Position, Blick über Höhenrücken, mehrere Tiefenebenen.
- **Licht:** Morgendunst, Ebenen mit abnehmendem Kontrast in die Tiefe.
- **Brennweite und Look:** 85mm, f/8, Kompression der Ebenen, ruhig, fast grafisch.
- **Bildkomposition:** Horizontale Bänder, Ortschaft im mittleren Drittel, oben Dunst, unten Feldfläche. Keine Person, kein Weg, der ins Bild führt.
- **Emotion:** Zugehörigkeit. „Das ist meine Gegend.“
- **Verhältnis zum Text:** Bild `bleed`, Text als Overlay möglich, aber nur im oberen Dunstbereich mit gerichtetem Verlauf.
- **Crop Desktop:** 21 zu 9.
- **Crop Mobil:** 16 zu 9, Ortschaft bleibt sichtbar.
- **Bewegung:** sehr langsame Skalierung, maximal 4 Prozent, über 1800ms.
- **Ladepriorität:** lazy.
- **alt-Text:** „Blick über die Landschaft des Leineberglands, im Hintergrund die Dächer einer Ortschaft im Morgendunst.“
- **Ausschluss:** keine Windräder als Bildmittelpunkt, kein Freiflächen-Solarpark, kein Sonnenaufgang mit Strahlen, keine Drohnenperspektive.

### REG-02 · Ortsbild
- **Zweck:** Kopfbild `/region/hildesheim/` und Vorlage für weitere Regionsseiten.
- **Motiv:** Ein Straßenzug mit gemischter Bebauung, verschiedene Dachformen und Dachalter nebeneinander, ein Dach in Sanierung im Hintergrund. Zeigt die Aufgabe, nicht die Sehenswürdigkeit.
- **Perspektive:** Straßenraum, Augenhöhe, Blick entlang der Häuserzeile, Dachlinien laufen in die Tiefe.
- **Licht:** Bedeckt oder Vormittag, gleichmäßig, damit alle Dachflächen lesbar sind.
- **Brennweite und Look:** 50mm, f/8, senkrechte Kanten senkrecht.
- **Bildkomposition:** Dachlinien als Fluchtlinien im oberen Bilddrittel, Straße als Basis, keine dominante Person und kein Fahrzeug im Vordergrund.
- **Emotion:** Alltag, Nähe, Wiedererkennung des eigenen Ortes.
- **Verhältnis zum Text:** Bild oben, Breadcrumb und H1 darunter, kein Text im Bild.
- **Crop Desktop:** 16 zu 9.
- **Crop Mobil:** 3 zu 2.
- **Bewegung:** Parallax 6 Prozent.
- **Ladepriorität:** eager auf Regionsseiten.
- **alt-Text:** „Straßenzug mit unterschiedlichen Dachformen, im Hintergrund ein Dach in Sanierung.“
- **Ausschluss:** keine lesbaren Hausnummern oder Namensschilder, keine Kennzeichen, keine identifizierbaren Personen, kein Wahrzeichen als Hauptmotiv.

---

## Hinweise für gezielte Bilderzeugung

Falls Bilder generiert statt fotografiert werden, gelten zusätzlich:

1. Ein Bild je Slot, nie eine Serie mit Auswahl nach Geschmack. Die Briefingfelder sind die Vorgabe, nicht die Anregung.
2. Immer die deutschen Bauteilbegriffe in der Bildbeschreibung führen: Doppelmuldenfalzziegel, Ortgang, Traufe, First, Kehle, Konterlattung, Titanzink. Generische Beschreibungen erzeugen amerikanische Dächer.
3. PV-Geometrie explizit festlegen: rechteckiges, geschlossenes Modulfeld, Reihen parallel zur Traufe, Randabstand zu allen Kanten, keine Module über Kanten oder Gauben.
4. Menschen nur als Anschnitt, ohne Blick in die Kamera, mit benutzter Arbeitskleidung.
5. Nach der Erzeugung immer die Prüfliste aus `02-ART-DIRECTION.md` Abschnitt 10.6 anwenden. Bei zwei verletzten Punkten wird das Bild nicht eingesetzt.
6. Erzeugte Bilder erhalten im Repository einen Vermerk in `dachwerk/public/img/QUELLEN.md` mit Slot-ID, Erzeugungsart und Datum. Erzeugte oder lizenzierte Herkunft wird nicht als Fotografie eines realen Projekts ausgegeben.
