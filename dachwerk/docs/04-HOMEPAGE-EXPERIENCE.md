# DACHWERK · PHASE 6: HERO EXPERIENCE UND HOMEPAGE CHOREOGRAPHY

Stand: 28.08.2026
Status: zur Freigabe. Kein Produktionscode.
Grundlage: `01-BLUEPRINT.md`, `02-ART-DIRECTION.md`, `03-BILDBRIEFINGS.md` (alle freigegeben).
Begleitend: `homepage-experience-specimen.html`, interaktiver Prototyp der Dramaturgie.

---

## TEIL A · DRAMATURGIE

### A.1 Grundsatz

Die Startseite ist eine geführte Sequenz mit acht Akten. Sie hat einen Anfang, eine Wendung und ein Ziel. Jeder Akt hat genau eine Aufgabe, genau ein Leitmaterial, genau eine Bewegungsart und höchstens einen Handlungsimpuls. Wenn ein Akt zwei Aufgaben hat, wird er geteilt. Wenn er keine hat, wird er gestrichen.

### A.2 Die acht Akte

| Akt | Aufgabe | Sektionen | Fläche | Leitmaterial | Bewegungsart | CTA |
|---|---|---|---|---|---|---|
| 01 Aufmerksamkeit | DACHWERK und die zentrale Idee | S01 Hero | Nacht | Tondachziegel zu Modul | Kamera | Projekt besprechen · Unsere Leistungen |
| 02 Problem | Ein Dach ist eine langfristige Entscheidung | S02 Haltung, S03 Lebensdauer | Nacht | Holz, Konstruktion | Konstruktion | keiner, bewusst |
| 03 Erkenntnis | Dach und Energie gehören zusammen | S04 Split Screen, S05 Brückenwort | Nacht | Titanzink als Kante | Kamera | Potenzial einschätzen |
| 04 Kompetenz | DACHWERK verbindet beides | S06 Was braucht Ihr Haus, S07 Leistungen | Nacht | Modul, Ziegel | Konstruktion | Dach und PV planen |
| 05 Prozess | Analyse bis Betreuung | S08 Schichtmodell, S09 Prozess | Tag | Holz, Dämmung, Ziegel | Kamera plus Konstruktion | Dach prüfen lassen |
| 06 Beweis | Material, Projekte, Ergebnis | S10 Projekte, S11 Qualität und Menschen | Tag zu Nacht | Schiefer, Ziegel | Konstruktion | Projekte ansehen |
| 07 Entscheidung | Warum nicht der billigste Anbieter | S12 Brand Statement, S13 Region | Nacht | alle fünf | Kamera | Beratung anfragen |
| 08 Conversion | Der erste Schritt | S14 Kontakt und Formular | Nacht | keines, Ruhe | Konstruktion | Projektanfrage senden |

### A.3 Der 38-Grad-Winkel, dosiert

Der Winkel erscheint auf der Startseite an **genau vier Stellen**, sonst nirgends:

1. Dachfläche der 3D-Szene im Hero, dort ist er die Sache selbst.
2. Kante des Flächenwechsels von Nacht zu Tag vor Akt 05.
3. Kante des Flächenwechsels von Tag zu Nacht in Akt 06.
4. Reflexionsverlauf in der Textur `tex-glass` in Akt 04.

Alle anderen Sektionen sind orthogonal aufgebaut. Der Winkel ist ein Fingerabdruck, kein Layoutprinzip. Diese Begrenzung ist verbindlich und Teil der QA.

### A.4 Der Materialkontrast als durchgehendes Motiv

Der Gegensatz zwischen traditionellem Handwerk und moderner Energietechnik wird nicht behauptet, sondern in jedem Akt materiell inszeniert. Jeder Akt trägt ein Materialpaar, eine warme und eine kühle Seite:

| Akt | warme Seite, Handwerk | kühle Seite, Energietechnik | Ort des Kontrasts |
|---|---|---|---|
| 01 | Tondachziegel, Terracotta, rauh | Modulglas, Solar, glatt | derselbe Dachbereich, zeitlich versetzt |
| 02 | Holz, Faser, Sparren | keine | der Kontrast pausiert, um das Problem zu setzen |
| 03 | Ziegel links | Modul rechts | Split Screen, Titanzink als trennende Kante |
| 04 | Ziegelraster im Hintergrund | Modulraster im Hintergrund | zwei Leistungsspalten, gleiche Struktur |
| 05 | Holz und Ziegel in den Schichten 01 bis 05 | Schiene und Modul in 06 und 07 | ein Bauteil, sieben Schichten |
| 06 | Schiefer und Ziegel im Detail | Wechselrichter, Schiene | Projektbilder vorher und nachher |
| 07 | „Traditionell im Handwerk“ | „Modern in der Technik“ | ein Satz, zwei Hälften |
| 08 | Ruhe, kein Material | Ruhe, kein Material | der Kontrast ist aufgelöst, das ist die Botschaft |

Regel: In Akt 08 endet der Kontrast. Wer bis dort gelesen hat, hat verstanden, dass beides zusammengehört. Ein weiterer Materialbeweis wäre Wiederholung.

---

## TEIL B · HERO, PHASE FÜR PHASE

Der Hero ist eine gepinnte Sequenz über 300 Prozent Viewporthöhe, `scrub: 1`. Alle Werte sind Scroll-Fortschritt `p` von 0 bis 1.

### Phase 1 · Ankunft · p 0,00 bis 0,10

- **Was sieht der Besucher?** Ein Wohnhaus in mittlerer Distanz, Drei-Viertel-Ansicht, Morgenlicht flach von links. Links die Headline über drei Zeilen, darunter Subheadline und zwei CTAs. Links unten das Eyebrow, rechts unten eine Maßangabe.
- **Was verändert sich?** Nichts außer der Ladechoreografie: Headline zeilenweise über Masken, Stagger 0,08, dann Subheadline und CTAs, danach blendet die Szene über 900ms ein.
- **Was liest er?** „Ein Dach muss mehr können.“ Darunter: „Dachhandwerk und Photovoltaik für Häuser, die bleiben sollen. Aus Hildesheim, für die Region.“
- **Warum passiert die Bewegung?** Sie passiert bewusst kaum. Der erste Eindruck muss stehen, nicht arbeiten. Ruhe im ersten Viewport ist das Gegenteil der üblichen Handwerkerseite.
- **Was soll er verstehen?** Angebot, Region und Haltung in unter zehn Sekunden.
- **Emotion:** Wiedererkennung und Ruhe. „So ein Haus kenne ich.“
- **Nächste Handlung:** Scrollen. Der statische Strich mit dem Wort „Weiter“ genügt, kein animierter Indikator.

### Phase 2 · Annäherung · p 0,10 bis 0,25

- **Was sieht er?** Die Kamera fährt heran, die Perspektive kippt leicht zum Dach, der Bildausschnitt verliert Garten und Nachbarschaft.
- **Was verändert sich?** Kamera von 34 auf 22 Metern Distanz, Höhe von 1,6 auf 2,4 Meter, Blickpunkt wandert vom Gebäudemittelpunkt zur Dachmitte. Headline driftet 40 Pixel nach oben und verliert Deckkraft bis 0. CTAs bleiben bis p 0,18 bedienbar, dann weichen sie.
- **Was liest er?** Nichts Neues. Text wird bewusst entfernt, damit das Bild übernehmen kann.
- **Warum die Bewegung?** Sie führt den Blick dorthin, wo die Aussage liegt. Eine Kamerafahrt ist ein Argument: Wir reden über das Dach, nicht über das Haus.
- **Was soll er verstehen?** Das Thema verengt sich vom Gebäude auf die Dachfläche.
- **Emotion:** Neugier, leichte Beschleunigung.
- **Nächste Handlung:** Weiterscrollen, um zu sehen, worauf es zuläuft.

### Phase 3 · Die Fläche · p 0,25 bis 0,38

- **Was sieht er?** Die Dachfläche füllt zwei Drittel des Bildes, das Haus verlässt den Rahmen, der Himmel wird zu einem schmalen Band.
- **Was verändert sich?** Distanz 22 auf 12 Meter, der Firstverlauf richtet sich diagonal aus. Links unten erscheint das Label DACHFLÄCHE, rechts eine Maßlinie mit der Flächenangabe.
- **Was liest er?** „DACHFLÄCHE“, dazu „62 m²“ als Maßangabe.
- **Warum die Bewegung?** Der Sprung von Objekt zu Fläche ist die inhaltliche Prämisse der ganzen Marke. Er braucht eine eigene Phase, sonst wird er überlesen.
- **Was soll er verstehen?** Ein Dach ist eine Fläche mit einer messbaren Größe.
- **Emotion:** Sachlichkeit, erster technischer Respekt.
- **Nächste Handlung:** Er beginnt zu fragen, was mit dieser Fläche geschieht.

### Phase 4 · Material · p 0,38 bis 0,50

- **Was sieht er?** Die Ziegelstruktur wird lesbar, jede Reihe erhält eine Lichtkante, die Oberfläche zeigt Streuung zwischen den einzelnen Ziegeln.
- **Was verändert sich?** Distanz 12 auf 7 Meter, Sonnenstand steigt leicht, Schatten je Ziegelreihe verkürzen sich. Das Materiallabel wechselt.
- **Was liest er?** „Tondachziegel, Doppelmuldenfalz“.
- **Warum die Bewegung?** Nähe erzeugt Materialglaubwürdigkeit. Wer das Material zeigt, muss nicht über Qualität schreiben.
- **Was soll er verstehen?** Hier arbeitet jemand mit echten Materialien und kennt ihre Bezeichnungen.
- **Emotion:** Haptik, Wertigkeit.
- **Nächste Handlung:** Vertrauen in die Fachlichkeit, Bereitschaft für die Wendung.

### Phase 5 · Öffnung · p 0,50 bis 0,62

- **Was sieht er?** Die Ziegelreihen des künftigen Belegungsfeldes kippen sequenziell von der Traufe zum First um ihre obere Kante, darunter erscheinen Lattung und Unterdeckung. Der Rest der Dachfläche bleibt geschlossen, das Dach bleibt als Dach lesbar.
- **Was verändert sich?** Je Reihe eine Rotation von 0 auf etwa 46 Grad, versetzt um 0,008 Fortschritt je Reihe. Betroffen sind ausschließlich die Reihen innerhalb des Belegungsfeldes. Kamera hält die Distanz und wandert nur seitlich. Label wechselt zu UNTERKONSTRUKTION.
- **Was liest er?** „Unterkonstruktion“, klein.
- **Warum die Bewegung?** Das Kippen ist die einzige Stelle, an der die Website etwas zeigt, das Fotografie nicht kann. Es macht sichtbar, dass unter der Deckung ein System liegt.
- **Was soll er verstehen?** Ein Dach besteht aus Schichten. Was oben liegt, ist austauschbar, was darunter liegt, entscheidet.
- **Emotion:** Einsicht, ein kleiner Aha-Moment.
- **Nächste Handlung:** Er erwartet, dass etwas Neues auf die Fläche kommt.

### Phase 6 · Die Wendung · p 0,62 bis 0,78

- **Was sieht er?** Die geöffneten Ziegelreihen klappen zurück auf die Fläche. Darüber erscheinen zuerst die Montageschienen, dann setzen sich die Photovoltaikmodule reihenweise von der Traufe zum First, mit sauberen Randabständen, parallel zur Traufe.
- **Was verändert sich?** Die Ziegelrotation läuft ab p 0,60 zurück auf 0. Ab p 0,585 erscheinen die Schienen, ab p 0,625 die Module, je Reihe eine Bewegung von etwa 30 Zentimetern über der Fläche auf die Endlage plus Deckkraft von 0 auf 1, versetzt um 0,026 Fortschritt je Reihe. Das Modulglas übernimmt die Himmelsreflexion. Label wechselt zu ENERGIEFLÄCHE.
- **Warum diese Korrektur gegenüber dem ersten Entwurf:** Eine Anlage sitzt auf der Deckung, die Dachhaken greifen unter den Ziegel. Wenn die Ziegel gekippt bleiben und die Module über der Lattung schweben, zeigt die Animation eine technisch falsche Montage. Öffnen, hineinsehen, schließen, dann belegen ist sowohl korrekt als auch dramaturgisch besser, weil die Bewegung eine Reihenfolge erzählt.
- **Was liest er?** „Energiefläche“.
- **Warum die Bewegung?** Sie ist die Übersetzung des Markenkerns in Bewegung. Aus der Fläche, die schützt, wird die Fläche, die erzeugt. Das Setzen von unten nach oben entspricht der realen Montagereihenfolge, deshalb wirkt es glaubwürdig und nicht wie ein Effekt.
- **Was soll er verstehen?** Photovoltaik ist Teil des Dachaufbaus, kein Aufbau auf dem Dach.
- **Emotion:** Überraschung, die sich sofort in Logik auflöst.
- **Nächste Handlung:** Er will wissen, was das für sein Haus bedeutet.

### Phase 7 · Ertrag, ohne Zahlenversprechen · p 0,78 bis 0,88

- **Was sieht er?** Sehr zurückhaltende Lichtimpulse entlang der Modulkanten, die zu einem Anschlusspunkt an der Gebäudekante laufen.
- **Was verändert sich?** Zwei bis drei Impulse, Dauer je 1400ms, Deckkraft maximal 35 Prozent, keine Wiederholung nach dem Verlassen der Phase. Sonnenstand wandert weiter.
- **Was liest er?** Eine Maßangabe zur Fläche und zur Modulanzahl. **Keine Ertragsangabe, keine Ersparnis, keine Amortisation**, weil dafür keine belegbare Grundlage existiert.
- **Warum die Bewegung?** Ein Energiefluss macht das Unsichtbare sichtbar. Er muss so leise sein, dass er nicht nach Werbung aussieht.
- **Was soll er verstehen?** Die Fläche arbeitet. Wie viel sie leistet, wird individuell berechnet und nicht auf einer Website behauptet.
- **Emotion:** stille Plausibilität, kein Versprechen.
- **Nächste Handlung:** Interesse an einer individuellen Einschätzung, das ist der CTA in Akt 03.

### Phase 8 · Rückzug und Satz · p 0,88 bis 1,00

- **Was sieht er?** Die Kamera zieht zurück, das Haus ist wieder vollständig sichtbar, jetzt mit Anlage. Das Licht ist im späten Nachmittag angekommen.
- **Was verändert sich?** Distanz 7 auf 30 Meter, Kamerahöhe zurück auf 1,8 Meter. Sonnenazimut von Morgen auf Nachmittag, Farbtemperatur von 4800 auf 3200 Kelvin. Die zweite Headline tritt über Masken ein, dazu ein CTA.
- **Was liest er?** „Aus Dachfläche wird Energiefläche.“ Darunter: „Projekt besprechen“.
- **Warum die Bewegung?** Der Rückzug schließt den Kreis zur ersten Phase und macht aus einer Demonstration ein Ergebnis. Der Lichtwechsel erzählt einen vergangenen Arbeitstag.
- **Was soll er verstehen?** Das war kein Effekt, das ist das Leistungsversprechen.
- **Emotion:** Abschluss, ruhige Zufriedenheit.
- **Nächste Handlung:** Entweder Kontakt oder weiterlesen. Beides ist gleichwertig angeboten, der Scroll geht nahtlos in Akt 02.

---

## TEIL C · HOMEPAGE-SEKTIONEN

Für jede Sektion: Inhalt, Bewegung, Begründung, Verständnisziel, Emotion, vorbereitete Handlung.

### S02 · Haltung · Akt 02

- **Sieht:** Ruhige Nachtfläche, links das Sektionslabel, rechts ein Textblock in Lead-Größe. Kein Bild.
- **Liest:** „Wir denken das Dach ganzheitlich.“ Dazu: „Reparieren, sanieren oder neu denken? Wir verbinden klassisches Dachhandwerk mit moderner Energietechnik, damit aus einzelnen Maßnahmen eine Lösung wird, die in zehn Jahren noch richtig ist.“
- **Verändert sich:** Zeilenweiser Maskeneintritt, 16 Pixel Weg, Stagger 0,08. Sonst nichts.
- **Warum:** Nach der Kamerafahrt braucht das Auge eine Pause. Eine Sektion ohne Bild und ohne Bewegung wirkt nach der Sequenz wie ein Innehalten und erhöht die Aufmerksamkeit für den Text.
- **Versteht:** Das ist eine Denkweise, kein Sortiment.
- **Emotion:** Ernsthaftigkeit.
- **Vorbereitet:** die Problemstellung.

### S03 · Lebensdauer · Akt 02

- **Sieht:** Drei Zeitangaben in Numeral-Größe, untereinander, jeweils mit einer Bezugslinie und einem kurzen Satz. Im Hintergrund `tex-grain-wood` bei 3 Prozent.
- **Liest:** Überschrift: „Ein Dach ist eine Entscheidung für Jahrzehnte.“ Dann drei Zeilen, jeweils Zeitraum und Konsequenz, zum Beispiel: „Eine Dachdeckung begleitet ein Haus über Jahrzehnte. Eine Photovoltaikanlage arbeitet über einen langen Zeitraum. Beides zweimal aufzubauen kostet doppelt.“
- **Verändert sich:** Zahlen erscheinen hart, ohne Hochzählen. Bezugslinien zeichnen sich nach, 640ms, gestaffelt.
- **Warum:** Die Bewegung ist eine Zeichnung, kein Effekt. Sie überträgt die technische Beschriftungsebene der Marke auf ein Argument.
- **Versteht:** Die Reihenfolge der Maßnahmen entscheidet über die Gesamtkosten.
- **Emotion:** nachdenkliche Zustimmung, kein Druck.
- **Vorbereitet:** die Erkenntnis in Akt 03.
- **Hinweis:** Konkrete Jahreszahlen zu Lebensdauern werden erst eingesetzt, wenn eine belastbare Quelle oder eine Angabe des Betriebs vorliegt. Bis dahin bleibt die Formulierung qualitativ. Kein erfundener Zahlenwert.

### S04 · Split Screen · Akt 03

- **Sieht:** Zwei Materialflächen, links Ziegel und Terracotta, rechts Modul und Solar. Zwischen ihnen eine Fuge, die als Titanzinkkante gestaltet ist.
- **Liest:** links „DACH · Schützen. Sanieren. Erhalten.“ Rechts „ENERGIE · Erzeugen. Speichern. Nutzen.“
- **Verändert sich:** Gepinnt. Beim Scrollen laufen beide Flächen gegenläufig auseinander, maximal 8 Prozent der Breite. Die Fuge öffnet sich, dahinter wird eine dritte Ebene sichtbar.
- **Warum:** Zwei getrennte Welten werden physisch getrennt gezeigt, damit ihre Zusammenführung im nächsten Moment eine Bedeutung hat. Ohne die Trennung ist die Vereinigung keine Aussage.
- **Versteht:** DACHWERK arbeitet in zwei Feldern, die die Branche getrennt behandelt.
- **Emotion:** Spannung.
- **Vorbereitet:** das Brückenwort.

### S05 · Brückenwort · Akt 03

- **Sieht:** In der geöffneten Fuge steht in Display-XL das Wort DACH + ENERGIE, das Plus im Verlauf von Terracotta zu Solar. Darunter ein Satz und der erste weiche CTA.
- **Liest:** „Zwei Gewerke, ein Bauteil.“ Dazu: „Wer das Dach öffnet, entscheidet gleichzeitig über die nächsten Jahrzehnte Energie. Deshalb planen wir beides in einem Zug.“ CTA: „Potenzial einschätzen“.
- **Verändert sich:** Das Wort skaliert nicht, es wird durch die Maske freigelegt. Die Verlaufsrichtung folgt 38 Grad. Danach fahren die Flächen langsam zurück und schließen sich hinter dem Wort.
- **Warum:** Das Schließen der Flächen hinter dem Wort ist das dramaturgische Zentrum der Seite: aus zwei Teilen wird ein Bauteil. Diese Bewegung ist die einzige auf der Startseite, die eine Vereinigung zeigt.
- **Versteht:** Die Kombination ist keine Zusatzleistung, sondern die Grundidee.
- **Emotion:** Auflösung der Spannung, Klarheit.
- **Vorbereitet:** Selbstzuordnung in Akt 04.

### S06 · Was braucht Ihr Haus · Akt 04

- **Sieht:** Fünf Auswahlflächen als Flächenverband mit 1px Fugen. Die fünfte ist über die volle Breite und in Warm White invertiert.
- **Liest:** „Was braucht Ihr Haus?“ Dann die fünf Aussagen aus Ich-Perspektive des Kunden. Die fünfte: „Ich weiß noch nicht, was sinnvoll ist.“ Dazu klein: „Das ist der häufigste Fall.“
- **Verändert sich:** Die Flächen treten einzeln über Masken ein, 12 Pixel Weg, Stagger 0,08. Hover setzt die Fläche auf `surface-2` und die linke Kante auf Solar.
- **Warum:** Selbstzuordnung vor Leistungsdarstellung. Der Nutzer soll seinen Fall finden, bevor ihm ein Sortiment gezeigt wird.
- **Versteht:** Auch ohne fertige Entscheidung ist er hier richtig.
- **Emotion:** Erleichterung.
- **Vorbereitet:** Klick in das Formular mit vorbelegtem Anliegen.

### S07 · Leistungen · Akt 04

- **Sieht:** Zwei große Domänenbereiche untereinander, nicht als Kachelgitter. Je Domäne eine Zeilenliste mit Nummer, Leistung und einem erklärenden Satz. Im Hintergrund je Domäne die zugehörige Textur bei 4 Prozent.
- **Liest:** je Leistung einen Satz, der eine Entscheidung erklärt, keine Selbstbeschreibung. Beispiel Dämmung: „Ob eine Aufsparrendämmung sinnvoll ist, entscheidet der Dachaufbau, nicht der Prospekt.“
- **Verändert sich:** Zeilen treten gestaffelt ein, maximal acht je Gruppe. Hover legt die Zeilenfläche auf `surface-2`.
- **Warum:** Zeilen statt Kacheln, weil eine Liste Vollständigkeit zeigt und ein Kachelgitter Beliebigkeit. Die Nummerierung ist echt, sie folgt der Reihenfolge im Leistungsverzeichnis.
- **Versteht:** Die Bandbreite deckt sein Anliegen ab.
- **Emotion:** Sicherheit.
- **Vorbereitet:** CTA „Dach und PV planen“ am Ende der Sektion.

### S08 · Schichtmodell · Akt 05, erster Flächenwechsel

- **Sieht:** Der Flächenwechsel von Nacht zu Tag über die 38-Grad-Kante mit Lichtlinie. Danach die 3D-Schichtszene: sieben Schichten, die auseinanderfahren, mit Bezugslinien und Labels.
- **Liest:** „Ein Dach ist ein System aus sieben Schichten.“ Je Schicht ein Label und ein Satz.
- **Verändert sich:** Der Explosionsfaktor ist an den Scroll gekoppelt, 0 bis 1 bis 0. Jede Schicht erhält beim Erreichen ihrer Position eine Bezugslinie, die sich zeichnet. Am Ende fahren die Schichten zu einem geschlossenen Aufbau zusammen.
- **Warum:** Der Flächenwechsel signalisiert einen Modus: bis hier wurde erzählt, ab hier wird erklärt. Tageslicht ist der Modus der technischen Klarheit.
- **Versteht:** Photovoltaik ist Schicht 06 und 07 desselben Bauteils.
- **Emotion:** fachlicher Respekt.
- **Vorbereitet:** Verständnis für die Notwendigkeit einer Prüfung, also für den Prozess.

### S09 · Prozess · Akt 05

- **Sieht:** Fünf Schritte. Desktop horizontal gepinnt, Fortschrittslinie zeichnet mit. Je Schritt eine Nummer in Numeral-Größe, ein Titel, zwei Sätze und ein Bildslot.
- **Liest:** „So wird aus einer Idee ein fertiges Projekt.“ Dann: 01 Wir schauen hin. 02 Wir denken voraus. 03 Wir planen sauber. 04 Wir setzen um. 05 Wir bleiben erreichbar. Je Schritt zwei konkrete Sätze, keine Floskeln.
- **Verändert sich:** Horizontale Bewegung des Streifens, Nummern wechseln hart, Fortschrittslinie wächst. Kein Zählen, kein Skalieren.
- **Warum:** Der Prozess ist der eigentliche Vertrauensbeweis eines Handwerksbetriebs. Horizontale Führung macht Abfolge körperlich erfahrbar.
- **Versteht:** Er weiß, was passiert, bevor er anruft.
- **Emotion:** Kontrolle.
- **Vorbereitet:** der niedrigschwelligste CTA der Seite: „Dach prüfen lassen“.

### S10 · Projekte · Akt 06

- **Sieht:** Zwei Beispielprojekte, je mit Vorher-Nachher-Regler auf identischer Bildachse. Deutlich sichtbare Kennzeichnung „Beispielprojekt“.
- **Liest:** „Gute Arbeit sieht man.“ Je Projekt: Nummer, Maßnahme, Ort, Kennzeichnung. Kein erfundener Kundenname, keine erfundene Bewertung, kein erfundener Ertrag.
- **Verändert sich:** Der Regler läuft an den Scroll gekoppelt einmal durch und bleibt danach per Ziehen bedienbar.
- **Warum:** Die scrollgebundene Vorführung zeigt das Prinzip, die Bedienbarkeit gibt die Kontrolle zurück. Beides zusammen wirkt souverän statt spielerisch.
- **Versteht:** So sieht ein Ergebnis aus.
- **Emotion:** Beweis, nicht Werbung.
- **Vorbereitet:** Vertiefung auf `/projekte/`.

### S11 · Qualität und Menschen · Akt 06, zweiter Flächenwechsel

- **Sieht:** Rückkehr in die Nachtfläche über die 38-Grad-Kante. Ein großer Bildslot mit Händen am Material, daneben vier Qualitätsaussagen als Zeilen.
- **Liest:** „Gute Arbeit endet nicht mit der Montage.“ Die Aussagen sind konkret: ein Ansprechpartner, dokumentierte Ausführung, erreichbar nach der Übergabe, Wartung auf Wunsch. Keine erfundenen Garantien, keine Zertifikate.
- **Verändert sich:** Bild tritt über Maske ein, Parallax 4 Prozent. Zeilen gestaffelt.
- **Warum:** Der Rückweg in die dunkle Fläche schließt die technische Passage und leitet in den emotionalen Schluss. Licht am Abend, Arbeit ist getan.
- **Versteht:** Hinter dem Betrieb stehen Menschen, die erreichbar bleiben.
- **Emotion:** Sympathie ohne Inszenierung.
- **Vorbereitet:** die Wertfrage.

### S12 · Brand Statement · Akt 07

- **Sieht:** Eine Bildschirmhöhe, fast leer. Zwei Zeilen in Display-XL, zentriert im Raum, aber linksbündig gesetzt.
- **Liest:** „Modern in der Technik. Traditionell im Handwerk.“ Darunter der Absatz zur Haltung.
- **Verändert sich:** Die beiden Zeilen treten getrennt ein, 900ms auseinander. Die erste Zeile trägt einen Solar-Akzent, die zweite einen Terracotta-Akzent. Sonst keine Bewegung.
- **Warum:** Die Leere ist die Aussage. Nach elf Sektionen ist eine fast leere Fläche das stärkste Mittel, das noch übrig ist.
- **Versteht:** Warum dieser Betrieb nicht der billigste sein muss.
- **Emotion:** Identifikation.
- **Vorbereitet:** Beratung anfragen.

### S13 · Region · Akt 07

- **Sieht:** Stilisierte Karte, Hildesheim als Zentrum, Radius breitet sich aus, Orte erscheinen gestaffelt. Kein Google-Maps-Einbau als Hauptvisual.
- **Liest:** „70 Kilometer rund um Hildesheim.“ Danach ein redaktionell geschriebener Regionsabsatz mit den Orten als Textlinks, kein Keyword-Block.
- **Verändert sich:** Radiusbogen zeichnet sich, Ortspunkte erscheinen gestaffelt mit ihren Namen, Verbindungslinien als Pfadzeichnung.
- **Warum:** Regionale Nähe ist ein Vertrauenssignal und gleichzeitig SEO-Substanz. Als Zeichnung gehört sie zur Marke, als Karteneinbettung wäre sie fremd.
- **Versteht:** Die sind bei mir und fahren auch zu mir.
- **Emotion:** Zugehörigkeit.
- **Vorbereitet:** Kontakt.

### S14 · Kontakt · Akt 08

- **Sieht:** Ein invertiertes Feld über die volle Breite, das Formular in vier Schritten, links die Ansprache, rechts der erste Schritt.
- **Liest:** „Vielleicht beginnt Ihr Projekt genau hier.“ Dazu: „Sie wissen noch nicht, ob Ihr Dach repariert, saniert oder neu gedacht werden sollte? Erzählen Sie uns einfach, worum es geht.“ CTA im Formular: „Projektanfrage senden“.
- **Verändert sich:** Nur der Feldeintritt und die Lichtkante, die sich oben zeichnet. Ab hier keine Choreografie mehr.
- **Warum:** Am Conversion-Punkt endet die Inszenierung. Jede Bewegung wäre hier ein Risiko und eine Ablenkung.
- **Versteht:** Der erste Kontakt ist unverbindlich und kostet ihn nichts als vier kurze Schritte.
- **Emotion:** Unaufgeregtheit.
- **Vorbereitet:** das Absenden.

---

## TEIL D · GSAP-TIMELINE UND SCROLLTRIGGER

### D.1 Szenenspezifikation

| Szene | Trigger | Start und Ende | Pin | Scrub | Kernwerte |
|---|---|---|---|---|---|
| `heroSeq` | `#hero` | `top top` bis `+=300%` | ja | 1 | treibt `heroScene.setProgress(p)`, zwei Headline-Zustände, Labelwechsel bei 0,25 / 0,38 / 0,50 / 0,62 |
| `revealBatch` | alle `[data-reveal]` | `top 82%` | nein | nein | `y` 16 auf 0, Maske, `--dur-3`, Stagger 0,08, `once: true` |
| `splitOpen` | `#split` | `top top` bis `+=180%` | ja | 0,8 | links `x` 0 auf -8%, rechts `x` 0 auf +8%, Fuge `clip-path` 0 auf 100%, danach Rückführung ab p 0,7 |
| `bridgeWord` | Teil von `splitOpen` | p 0,45 bis 0,75 | erbt | erbt | Maske 0 auf 100%, kein Scale, Verlaufsrichtung 38 Grad |
| `layerScene` | `#layers` | `top 70%` bis `bottom 30%` | nein | 1 | `layerScene.setExplode(p)`, Bezugslinien `stroke-dashoffset` gestaffelt |
| `processTrack` | `#process` | `top top` bis `+=(Breite - 100vw)` | ja Desktop | 1 | `x` des Streifens, Fortschrittslinie `scaleX` |
| `arcToDay` | `#arc-1` | `top 85%` bis `top 35%` | nein | 1 | `clip-path` der Tagfläche entlang 38 Grad, Textfarben invertieren mit 120ms Verzögerung |
| `arcToNight` | `#arc-2` | analog | nein | 1 | Rückwechsel |
| `beforeAfter` | `#projects .ba` | `top 75%` bis `center center` | nein | 1 | `clip-path` 0 auf 100%, danach Pointer-Steuerung aktiv |
| `mapDraw` | `#region` | `top 75%` | nein | nein | Radius `stroke-dashoffset`, Orte Stagger 0,10, maximal 8 |
| `ctaField` | `#contact` | `top 80%` | nein | nein | Feldeintritt 12px, Lichtkante `scaleX` 0 auf 1 |

### D.2 Regeln

1. Ein `ScrollTrigger` je Szene. Reveals laufen über `ScrollTrigger.batch`, nicht über einen Trigger je Element.
2. Alle Timelines in `gsap.context()` mit `matchMedia`. Drei Breakpoints: `(min-width: 900px)`, `(max-width: 899px)`, `(prefers-reduced-motion: reduce)`.
3. `scrub` immer als Zahl, nie `true`, damit Bewegung Trägheit hat.
4. Nur `transform`, `opacity` und `clip-path` animieren.
5. Der CSS-Grundzustand ist der sichtbare Endzustand. Startzustände setzt ausschließlich JavaScript. Ohne Skript ist die Seite vollständig lesbar.
6. `ScrollTrigger.refresh()` nach `document.fonts.ready` und nach `load` der Bilder im ersten Viewport. Ohne das verschieben sich Pins beim Schriftwechsel.
7. Kein Smooth-Scroll-Plugin, kein Lenis.
8. Kein Pin auf Mobil außer im Prozessstreifen, dort wird stattdessen vertikal aufgelöst.
9. Jede Szene meldet sich beim Verlassen ab und entfernt `will-change`.

---

## TEIL E · THREE.JS-SZENE

### E.1 Aufbau

```text
scene
├── sky            fotografischer Verlauf als Hintergrund, wechselt mit dem Lichtbogen
├── ground         große Fläche, sehr matt, gebackene Verdunkelung um das Haus
├── house
│   ├── walls      extrudierte Form, verputzt, roughness 0.9
│   ├── gable      Holzverschalung, Faserstruktur
│   ├── roofBase   Dachfläche 38 Grad, Trägergeometrie
│   ├── tiles      InstancedMesh, 130 Instanzen, rotierbar je Reihe
│   ├── battens    InstancedMesh, 18 Instanzen, nur in Phase 5 bis 6 sichtbar
│   ├── rails      InstancedMesh, 8 Instanzen, Titanzink metallisch
│   └── modules    InstancedMesh, 24 Instanzen, Glas mit Zellraster
├── sun            DirectionalLight, Azimut und Farbe an den Lichtbogen gekoppelt
├── fill           HemisphereLight, sehr schwach
└── camera         PerspectiveCamera, fov 34
```

Keine externen Modelldateien. Alle Geometrien werden im Code erzeugt. Materialtexturen entstehen prozedural oder aus je einer AVIF-Kachel unter 40 kB.

### E.2 Kamera-Keyframes

| p | Distanz | Höhe | Blickpunkt | Sonnenazimut | Farbtemperatur |
|---|---|---|---|---|---|
| 0,00 | 34 m | 1,6 m | Gebäudemitte | 96° | 4800 K |
| 0,25 | 22 m | 2,4 m | Dachmitte | 104° | 4700 K |
| 0,38 | 12 m | 4,2 m | Dachfläche | 112° | 4600 K |
| 0,50 | 7 m | 5,0 m | Ziegelfeld | 124° | 4400 K |
| 0,62 | 7 m | 5,0 m | Ziegelfeld, seitlich versetzt | 140° | 4100 K |
| 0,78 | 9 m | 5,4 m | Modulfeld | 168° | 3700 K |
| 1,00 | 30 m | 1,8 m | Gebäudemitte | 214° | 3200 K |

Interpolation mit `ease-inout` zwischen den Stützpunkten, Rollwinkel konstant 0, keine Kreisfahrt.

### E.3 Materialwechsel

| Phase | Änderung |
|---|---|
| 4 | Ziegelmaterial erhält höhere Normalintensität, damit das Profil im Nahbereich lesbar wird |
| 5 | Ziegel rotieren, Battens werden sichtbar, Unterdeckung erhält matte Fläche |
| 6 | Modulglas erscheint, `envMapIntensity` steigt von 0 auf 0,8, Rails werden metallisch sichtbar |
| 7 | Lichtimpuls als zusätzliche Emissivkante entlang der Modulreihen, Deckkraft maximal 0,35 |
| 8 | Sonnenfarbe und Himmel wandern in den Nachmittag, Ziegelmaterial wird wieder weicher |

### E.4 Renderbudget

Drawcalls maximal 25, Dreiecke maximal 60.000, Texturen maximal 3 bei je 1024 Pixel, DPR-Grenze 1,5 im Profil `full` und 1,25 mobil, Schattenkarte nur im Schichtmodell und nur bei `full`. Renderschleife nur bei sichtbarem Canvas und geändertem Zustand, Stopp bei `visibilitychange`, Behandlung von `webglcontextlost` mit Übergang in den Fallback.

---

## TEIL F · RESPONSIVE, MOBIL, REDUZIERTE BEWEGUNG

### F.1 Desktop ab 900 Pixel

Vollständige Choreografie wie beschrieben, drei Pins auf der Startseite: Hero, Split, Prozess. Mehr als drei Pins auf einer Seite machen den Scroll unlesbar.

### F.2 Mobil unter 900 Pixel

| Sektion | Mobile Auflösung |
|---|---|
| Hero | kein Pin. Statisches Eröffnungsbild mit Headline und einem CTA. Danach eine eigene Sektion mit drei diskreten Zuständen: Dachfläche, Öffnung, Energiefläche. Jeder Zustand ein gerendertes Standbild oder eine reduzierte Szene mit 48 Ziegel- und 12 Modulinstanzen |
| Split | vertikal gestapelt, Materialflächen erscheinen über Masken, das Brückenwort steht danach allein auf einer Fläche |
| Schichtmodell | drei diskrete Zustände statt kontinuierlicher Explosion, dazu die vollständige Schichtliste als Text |
| Prozess | vertikale Fortschrittslinie, kein Pin |
| Projekte | Regler primär per Ziehen, Hinweis „ziehen“ als Label |
| Karte | Radius statisch, Orte gestaffelt |
| Formular | unverändert, vollständig ohne 3D und ohne GSAP bedienbar |

Zusätzlich: untere Aktionsleiste mit „Anrufen“ und „Projekt besprechen“ ab dem Ende des Heros, verschwindet im Formular.

### F.3 Reduzierte Bewegung

Bei `prefers-reduced-motion: reduce` gilt: keine Pins, keine Scrub-Sequenzen, keine Kamerafahrt, kein Parallax. Der Hero zeigt zwei Standbilder, Dachfläche und Energiefläche, untereinander, beide Headlines lesbar. Alle Sektionen stehen in ihrem Endzustand. Erlaubt bleiben Farb- und Opazitätswechsel unter 240ms. Das Schichtmodell erscheint als SVG-Schnittzeichnung plus Textliste, nicht als Canvas.

---

## TEIL G · LCP UND PERFORMANCE

### G.1 Ladeordnung

| Reihenfolge | Inhalt | Technik |
|---|---|---|
| 1 | Flächen, Himmelsverlauf als CSS, Kopfzeile, Hero-Headline, Subheadline, CTAs | im HTML, kein JavaScript nötig |
| 2 | zwei Schriftschnitte | `preload`, `font-display: swap` |
| 3 | Himmel- und Umgebungsbild | `fetchpriority="high"`, AVIF |
| 4 | GSAP mit ScrollTrigger | normales Modul, blockiert nichts |
| 5 | Three.js und Hero-Szene | dynamischer Import bei Sichtbarkeit oder Annäherung |
| 6 | alles weitere | lazy, `IntersectionObserver` |

**Das LCP-Element ist die Hero-Headline, nicht der Canvas.** Der Hero ist vollständig lesbar und bedienbar, bevor die 3D-Szene existiert. Fällt WebGL aus, bleibt die Seite unverändert nutzbar.

### G.2 Budget für die Startseite

| Größe | Ziel |
|---|---|
| HTML, CSS, kritisches JS, komprimiert | unter 120 kB |
| GSAP mit ScrollTrigger, komprimiert | unter 55 kB |
| Three.js-Chunk, nachgeladen | unter 180 kB |
| Bilder im ersten Viewport | unter 250 kB |
| LCP Desktop | unter 1,8 s |
| LCP Mobil, 4G-Profil | unter 2,5 s |
| CLS | unter 0,05 |
| INP | unter 200 ms |
| lange Tasks beim Szenenaufbau | keine über 200 ms, Aufbau in zwei Rahmen aufgeteilt |

### G.3 Maßnahmen

Feste Seitenverhältnisse an jedem Bildslot gegen Layoutsprünge, `content-visibility: auto` für Sektionen unterhalb des dritten Viewports, Instanzaufbau der 3D-Szene über zwei Frames verteilt, Kornkachel als eine einzige 128-Pixel-Datei unter 4 kB, keine Icon- oder UI-Bibliothek, kein zweites Animationspaket.

---

## TEIL H · CTA-MATRIX

| Akt | CTA | Verbindlichkeit | Ziel | Warum dieser Wortlaut |
|---|---|---|---|---|
| 01 | Projekt besprechen | mittel | Formular, ohne Vorbelegung | „besprechen“ verspricht ein Gespräch, keinen Vertrag |
| 01 | Unsere Leistungen | keine | `/dach/` und `/photovoltaik/` | Ausweg für Nutzer, die noch nicht reden wollen |
| 02 | keiner | keine | keiner | An der Problemstelle nicht verkaufen, sonst kippt die Glaubwürdigkeit |
| 03 | Potenzial einschätzen | niedrig | Formular, Anliegen „Dach und Photovoltaik“ | „einschätzen“ ist eine Einschätzung, keine Berechnung, und behauptet keine Zahl |
| 04 | Dach und PV planen | mittel | `/dach-und-pv/` | benennt die Kombination, die Kernkompetenz |
| 05 | Dach prüfen lassen | niedrig | Formular, Anliegen „Beratung“ | konkretester und niedrigschwelligster Einstieg der Seite |
| 06 | Projekte ansehen | keine | `/projekte/` | Beweis, kein Verkauf |
| 07 | Beratung anfragen | mittel | Formular, Anliegen „Beratung“ | passt zur Wertfrage, nicht zum Preis |
| 08 | Projektanfrage senden | hoch | Absenden | einzige hohe Verbindlichkeit der Seite, am Ende |

Nicht verwendet: „Jetzt Angebot anfordern“, „Kostenlos“, „Unverbindlich“ als Schlagwort, „Sichern“, „Sparen“, Zeitdruck jeder Art.

**Offener Punkt:** Ob der Dachcheck kostenfrei angeboten wird, ist eine Aussage des Betriebs und keine Designentscheidung. Bis zu einer Bestätigung steht auf der Seite „Dach prüfen lassen“ ohne Preisangabe. Ohne Bestätigung wird nicht „kostenlos“ geschrieben.

---

## TEIL I · COPY-DECK

Alle Texte der Startseite in der Fassung, die implementiert wird. Prüfung auf Floskeln erfolgt gegen die Liste in `01-BLUEPRINT.md` Abschnitt 41 des Briefings.

**S01 Hero**
Eyebrow: HILDESHEIM · DACH & ENERGIE
H1: Ein Dach muss mehr können.
Lead: Dachhandwerk und Photovoltaik für Häuser, die bleiben sollen. Aus Hildesheim, für die Region.
CTA: Projekt besprechen · Unsere Leistungen
Phasenlabels: DACHFLÄCHE · Tondachziegel, Doppelmuldenfalz · UNTERKONSTRUKTION · ENERGIEFLÄCHE
Schlusszeile: Aus Dachfläche wird Energiefläche.

**S02 Haltung**
H2: Wir denken das Dach ganzheitlich.
Text: Reparieren, sanieren oder neu denken? Wir verbinden klassisches Dachhandwerk mit moderner Energietechnik, damit aus einzelnen Maßnahmen eine Lösung wird, die in zehn Jahren noch richtig ist.

**S03 Lebensdauer**
H2: Ein Dach ist eine Entscheidung für Jahrzehnte.
Text: Eine Dachdeckung begleitet ein Haus über Jahrzehnte, eine Photovoltaikanlage über einen langen Zeitraum. Wer beides getrennt beauftragt, baut das Gerüst zweimal auf, öffnet die Fläche zweimal und zahlt zweimal für dieselbe Vorbereitung.
Abschluss: Deshalb sprechen wir über die Reihenfolge, bevor wir über Material sprechen.

**S04 Split Screen**
Links: DACH · Schützen. Sanieren. Erhalten.
Rechts: ENERGIE · Erzeugen. Speichern. Nutzen.

**S05 Brückenwort**
Display: DACH + ENERGIE
H2: Zwei Gewerke, ein Bauteil.
Text: Wer das Dach öffnet, entscheidet gleichzeitig über die nächsten Jahrzehnte Energie. Deshalb planen wir beides in einem Zug, mit einem Ansprechpartner und einer Baustelle.
CTA: Potenzial einschätzen

**S06 Was braucht Ihr Haus**
H2: Was braucht Ihr Haus?
01 Mein Dach braucht Aufmerksamkeit. · Reparatur
02 Mein Dach ist in die Jahre gekommen. · Sanierung
03 Ich möchte meinen eigenen Strom erzeugen. · Photovoltaik
04 Wenn wir schon ans Dach gehen. · Dach und Photovoltaik
05 Ich weiß noch nicht, was sinnvoll ist. · Beratung
Zusatz zu 05: Das ist der häufigste Fall. Wir schauen uns das Dach an und sagen Ihnen, was sinnvoll ist und was warten kann.

**S07 Leistungen, je ein erklärender Satz**
Dachsanierung: Wir erneuern Deckung, Unterdeckung und Dämmung in einem Zug und legen die Fläche so aus, dass eine Photovoltaikanlage später ohne zweiten Eingriff möglich bleibt.
Neueindeckung: Ziegel, Schiefer oder Blech. Die Wahl richtet sich nach Dachneigung, Bauweise und Umgebung, nicht nach Katalog.
Dachreparatur: Wir sichern zuerst, prüfen dann die Ursache und sagen offen, ob eine Reparatur trägt oder nur Zeit kauft.
Dämmung: Ob eine Aufsparrendämmung sinnvoll ist, entscheidet der Dachaufbau, nicht der Prospekt.
Dachfenster: Position, Größe und Anschluss entscheiden über Licht und über Dichtheit. Beides planen wir gemeinsam.
Flachdach: Abdichtung, Gefälle und Anschlüsse sind der eigentliche Aufwand. Daran messen wir die Ausführung.
Photovoltaik: Wir prüfen zuerst das Dach, dann planen wir die Anlage. In dieser Reihenfolge, nicht umgekehrt.
Stromspeicher: Ein Speicher lohnt sich nicht immer. Wir rechnen es an Ihrem Verbrauch durch, bevor wir ihn anbieten.
Energiemanagement: Wärmepumpe, Auto, Haushalt. Wer den Verbrauch kennt, legt die Anlage richtig aus.
PV-Planung: Ausrichtung, Verschattung, Belegung, Netzanschluss. Die Planung entscheidet über den Ertrag, nicht die Modulmarke.
Installation: Montage, Elektrik und Anmeldung laufen über einen Betrieb und einen Ansprechpartner.
Wartung: Wir sehen uns Dach und Anlage nach Absprache an, dokumentieren den Zustand und melden uns, wenn etwas zu tun ist.

**S08 Schichtmodell**
H2: Ein Dach ist ein System aus sieben Schichten.
01 Sparren, das Tragwerk. 02 Dämmung zwischen den Sparren. 03 Unterdeckung als zweite Ebene. 04 Konterlattung und Traglattung. 05 Dachziegel als Dachhaut. 06 Unterkonstruktion der Anlage. 07 Photovoltaikmodule.
Abschluss: Schicht 06 und 07 gehören zum Dachaufbau. Deshalb prüfen wir die Schichten 01 bis 05, bevor wir sie belegen.

**S09 Prozess**
H2: So wird aus einer Idee ein fertiges Projekt.
01 Wir schauen hin. Ortstermin und Bestandsaufnahme, auch der Bereiche, die man von der Straße nicht sieht.
02 Wir denken voraus. Dach, Energie und Ihre Anforderungen betrachten wir gemeinsam, nicht nacheinander.
03 Wir planen sauber. Sie erhalten eine nachvollziehbare Planung und ein Angebot, das Positionen benennt.
04 Wir setzen um. Ein Ansprechpartner koordiniert Gewerke, Termine und Material.
05 Wir bleiben erreichbar. Nach der Übergabe erreichen Sie dieselbe Person wie am ersten Tag.
CTA: Dach prüfen lassen

**S10 Projekte**
H2: Gute Arbeit sieht man.
Beispielprojekt 01 · Dachsanierung und Photovoltaik · Hildesheim · Beispielprojekt
Beispielprojekt 02 · Neueindeckung mit Schiefer · Landkreis Hildesheim · Beispielprojekt
Hinweis: Musterprojekt. Die gezeigten Projekte dienen der Darstellung von Leistungen und sind keine realen Referenzen.

**S11 Qualität und Menschen**
H2: Gute Arbeit endet nicht mit der Montage.
Ein Ansprechpartner begleitet Ihr Projekt von der ersten Bestandsaufnahme bis zur Übergabe.
Wir dokumentieren, was unter der Deckung liegt, damit auch in zehn Jahren nachvollziehbar ist, wie das Dach aufgebaut wurde.
Nach der Fertigstellung erreichen Sie uns unter derselben Nummer.
Wartung und Kontrolle vereinbaren wir auf Wunsch, nicht automatisch.

**S12 Brand Statement**
Display: Modern in der Technik. Traditionell im Handwerk.
Text: Wir verbinden Erfahrung und moderne Technik, ohne das Wesentliche aus den Augen zu verlieren: saubere Arbeit, klare Kommunikation und Lösungen, die langfristig funktionieren.
CTA: Beratung anfragen

**S13 Region**
H2: 70 Kilometer rund um Hildesheim.
Text: Unser Arbeitsgebiet ist der Landkreis Hildesheim und die Region ringsum. Wir kennen die Bauweisen zwischen Leinebergland und Börde, die typischen Dachformen der Siedlungen der Nachkriegsjahre und die Anforderungen der Netzbetreiber vor Ort. Kurze Wege bedeuten, dass ein Ortstermin keine Tagesreise ist.
Orte: Hildesheim, Sarstedt, Alfeld, Bad Salzdetfurth, Bockenem, Elze, Gronau, Holle, Diekholzen, Nordstemmen

**S14 Kontakt**
H2: Vielleicht beginnt Ihr Projekt genau hier.
Text: Sie wissen noch nicht, ob Ihr Dach repariert, saniert oder neu gedacht werden sollte? Erzählen Sie uns einfach, worum es geht. Alles Weitere klären wir am Telefon oder vor Ort.
Formular: Schritt 1 Anliegen, Schritt 2 Standort, Schritt 3 Kontakt, Schritt 4 Beschreibung.
CTA: Projektanfrage senden
Hinweis: Musterformular. In diesem Musterprojekt wird keine Anfrage übermittelt und nicht gespeichert.

---

## TEIL J · WAS ZUR FREIGABE OFFEN IST

1. **Zahlen in S03.** Für die Lebensdaueraussagen brauche ich entweder Angaben des Betriebs oder ich formuliere weiterhin qualitativ ohne Jahreszahlen. Erfundene Werte kommen nicht auf die Seite.
2. **Dachcheck.** Ist die Dachprüfung kostenfrei? Ohne Bestätigung steht dort kein „kostenlos“.
3. **Drei Pins auf der Startseite.** Hero, Split und Prozess sind gepinnt. Wenn du den Scroll ruhiger willst, streiche ich den Pin am Prozess und löse ihn vertikal auf. Empfehlung: drei Pins beibehalten, sie liegen weit auseinander.
4. **Länge der Startseite.** Vierzehn Sektionen sind bewusst viel, weil die Dramaturgie acht Akte braucht. Wenn du kürzen willst, empfehle ich, S03 in S02 zu integrieren und S13 in den Footerbereich zu verschieben. Damit bleiben zwölf Sektionen und die Dramaturgie steht weiterhin.


---

## TEIL K · SPEZIMEN UND PRÜFSTAND

### K.1 Was das Spezimen ist

`homepage-experience-specimen.html` ist ein Prototyp der Dramaturgie, kein Produktionscode. Es enthält die vollständige Startseite in acht Akten, die Hero-Sequenz in acht Phasen, beide Flächenwechsel über die 38-Grad-Kante, das Schichtmodell mit Explosionsfaktor, den horizontal geführten Prozess, den Vorher-Nachher-Regler, die gezeichnete Regionskarte und den Conversion-Abschluss.

Ein Anzeigefeld oben rechts nennt laufend Akt, Hero-Phase, Scroll-Fortschritt und aktives Materiallabel. Damit ist die Choreografie beurteilbar, ohne den Code zu lesen.

### K.2 Bewusste Abweichungen von der Produktion

| Bereich | Spezimen | Produktion |
|---|---|---|
| Scroll-Engine | Sticky-Pins plus eine `requestAnimationFrame`-Schleife, ohne Bibliothek | GSAP mit ScrollTrigger nach Teil D |
| 3D | leichtgewichtige Canvas-Projektion mit eigener Kamera, Painter-Algorithmus und Flächenschattierung | Three.js nach Teil E, mit Instanzen, physikalisch basierten Materialien und Tone Mapping |
| Bilder | Materialflächen mit sichtbarer Slot-Kennung und Motivtext | Fotografie nach `03-BILDBRIEFINGS.md`, gleiche Slots, gleiche Seitenverhältnisse |
| Schriften | über Google Fonts geladen, damit das Spezimen ohne Repository läuft | selbst gehostet als woff2, kein CDN |
| Formular | Darstellung der vier Schritte, keine Eingabelogik | vollständiges Formular mit Zustand, Validierung und Barrierefreiheit |

Der Grund für die eigene Canvas-Projektion ist praktisch: In der Arbeitsumgebung ist der Zugriff auf das CDN gesperrt, GSAP und Three.js waren dort nicht ladbar und damit nicht prüfbar. Ein Prototyp, den ich nicht selbst im Browser prüfen kann, ist als Freigabegrundlage unbrauchbar. Die Choreografie, die Kamerakurve, die Phasenlogik und alle Übergänge sind identisch zur Spezifikation und lassen sich eins zu eins auf Three.js übertragen.

### K.3 Was geprüft wurde

Geprüft im Browser (Chromium, Playwright, headless), Auflösungen 1440, 1024, 900, 768 und 390 Pixel:

- keine JavaScript-Fehler, keine Konsolenfehler außer der lokal gesperrten Schriftanfrage,
- Phasenzuordnung korrekt an sieben Scroll-Punkten geprüft, Label- und Headline-Wechsel an den dokumentierten Grenzen,
- Canvas rendert an allen geprüften Punkten, auch in den mobilen Standbildern,
- kein horizontaler Überlauf in allen fünf Breiten,
- Mobil: kein Pin, statisches Eröffnungsbild, drei diskrete Zustände, Aktionsleiste erscheint nach dem Hero und verschwindet im Kontaktbereich,
- reduzierte Bewegung: Hero-Sequenz wird ausgeblendet, die Standbildfassung mit beiden Headlines erscheint stattdessen.

Vier Fehler wurden dabei gefunden und behoben: eine falsch aufgebaute Kamerabasis, deren Up-Vektor das Bild kippte; eine Kamerafahrt, die zu nah heranfuhr und die Dachfläche unlesbar machte; die falsche Kipprichtung der Ziegelreihen; und die technisch falsche Montagefolge aus K.1, siehe die Korrektur in Phase 6.

### K.4 Was im Spezimen noch offen ist

- Der mobile Bildausschnitt des Eröffnungsbildes ist noch nicht endgültig, Haus und Headline berühren sich am Rand.
- Die Materialflächen ersetzen Fotografie. Sobald die Slots gefüllt sind, ändert sich die Bildwirkung der Akte 05 und 06 deutlich, die Komposition bleibt.
- Der Energieimpuls in Phase 7 ist im Spezimen als einzelne Linie angelegt. In der Produktion läuft er entlang der Modulkanten zum Anschlusspunkt.
