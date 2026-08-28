# DACHWERK · KOHÄRENZPRÜFUNG DES GESAMTSYSTEMS

Stand: 28.08.2026
Geprüft: `01-BLUEPRINT.md`, `02-ART-DIRECTION.md`, `03-BILDBRIEFINGS.md`, `04-HOMEPAGE-EXPERIENCE.md`, `design-system-specimen.html`, `homepage-experience-specimen.html`
Prüfkette: Strategie, Positionierung, Art Direction, Bildsprache, Hero, Scroll Story, 3D, Content, SEO, Conversion

**Ergebnis: keine grundlegenden Widersprüche. Zwölf Konflikte gefunden, alle mit Beschluss geschlossen.** Vier davon waren echte Fehler im bisherigen System, nicht nur Feinjustierung. Phase 7 kann starten.

---

## TEIL A · GEFUNDENE WIDERSPRÜCHE UND BESCHLÜSSE

### W01 · Sichtbare Akt-Labels sind Agentursprache (schwer)

**Konflikt:** Das Specimen zeigt Sektionslabels wie „02 · Problem“, „06 · Beweis“, „08 · Conversion“. Das ist die interne Dramaturgie, sichtbar gemacht im Frontend. Ein Hausbesitzer liest dort das Vokabular einer Marketingabteilung, nicht das eines Meisterbetriebs. Direkter Widerspruch zur Positionierung und zur Forderung, nicht agenturhaft zu wirken.

**Beschluss:** Die Akt-Struktur ist ein Regieinstrument und erscheint nie im Interface. Sichtbare Sektionslabels sind inhaltlich und in der Sprache des Kunden:

| intern | sichtbar |
|---|---|
| 02 Problem, Haltung | Unsere Haltung |
| 02 Problem, Zeithorizont | Was ein Dach entscheidet |
| 03 Erkenntnis | Dach und Energie |
| 04 Kompetenz | Ihr Anliegen · Leistungen |
| 05 Prozess | Der Dachaufbau · Ablauf |
| 06 Beweis | Beispielprojekte · Qualität |
| 07 Entscheidung | Haltung · Arbeitsgebiet |
| 08 Conversion | Kontakt |

### W02 · Nummerierte Sektionen widersprechen der durchlaufenden Geschichte (schwer)

**Konflikt:** Sektionsnummern von 01 bis 08 betonen genau das, was vermieden werden soll: die Aneinanderreihung. Sie sagen dem Besucher „jetzt kommt die nächste Sektion“.

**Beschluss:** Nummern erscheinen nur dort, wo sie echte Information tragen: Prozessschritte 01 bis 05, Dachschichten 01 bis 07, Leistungen 01 bis 06 innerhalb ihrer Domäne, Beispielprojekte 01 und 02. Sonst keine Nummerierung.

Stattdessen tragen **Übergänge** die Kontinuität. Verbindliche Regel: Jede Sektion endet mit einem Element, das die nächste vorbereitet, und keine zwei benachbarten Sektionen beginnen gleich. Vier Übergangstypen, festgelegt je Naht:

| Naht | Übergangstyp |
|---|---|
| Hero zu Haltung | Satzfortsetzung. Die Hero-Schlusszeile wird im ersten Satz der Haltung aufgenommen |
| Haltung zu Zeithorizont | Materialkontinuität. Die Holzfasertextur läuft durch beide Sektionen |
| Zeithorizont zu Split | Frage. Der letzte Satz stellt die Frage, die der Split beantwortet |
| Split zu Anliegen | Konsequenz. Aus dem Brückenwort wird die Frage „Was braucht Ihr Haus?“ |
| Anliegen zu Leistungen | Auswahl wird Antwort. Dieselbe Flächenstruktur, gefüllt mit Leistungen |
| Leistungen zu Dachaufbau | Flächenwechsel über die 38-Grad-Kante mit Lichtlinie |
| Dachaufbau zu Ablauf | Vom Bauteil zur Arbeitsweise, gleiche Tagfläche |
| Ablauf zu Projekten | Vom Versprechen zum Ergebnis |
| Projekte zu Qualität | Flächenwechsel zurück in die Nacht |
| Qualität zu Haltung | Person wird Prinzip |
| Haltung zu Arbeitsgebiet | Prinzip wird Ort |
| Arbeitsgebiet zu Kontakt | Ort wird Gespräch |

### W03 · Photovoltaik war visuell nachgeordnet (schwer)

**Konflikt:** Prüfung ergibt eine strukturelle Schieflage. Die Marke heißt DACHWERK, der Hero beginnt mit dem Dach, im Split steht DACH links auf der ersten Leseposition, die Leistungsspalte DACH kommt zuerst, beide Beispielprojekte haben eine Dachmaßnahme als Hauptthema, und die Prozessbilder zeigen überwiegend Dacharbeit. Inhaltlich ist die Reihenfolge richtig, weil das Dach zuerst geprüft werden muss. In der Summe der visuellen Signale ist Energie aber die zweite Stimme, nicht die gleichwertige.

**Beschluss, vier Maßnahmen:**
1. **Der Potenzialcheck ist der Gleichstellungshebel.** Das Hauptangebot der Journey heißt „Kostenfreier Dach- und PV-Potenzialcheck“ und trägt beide Domänen im Namen. Er wird der prominenteste CTA der Seite.
2. **Energie hat das letzte Wort.** Der Hero endet auf „Energiefläche“, das bleibt.
3. **Beispielprojekt 02 wechselt das Thema** von „Neueindeckung mit Schiefer“ zu „Photovoltaik mit Speicher auf geprüftem Bestandsdach“. Damit steht ein reines Energieprojekt gleichberechtigt neben dem Kombinationsprojekt. Schiefer bleibt als Material in den Leistungs- und Materialslots präsent.
4. **Solar bleibt Primärakzent.** Buttons, Fokusring und Lichtkante sind Solar, nicht Terracotta. Das ist die dauerhafte visuelle Gleichgewichtung.

### W04 · Fachsprache gegen Verständlichkeit (mittel)

**Konflikt:** Doppelmuldenfalz, Aufsparrendämmung, Konterlattung, Unterdeckung. Fachbegriffe tragen Kompetenz und schließen gleichzeitig Laien aus.

**Beschluss, Content-Regel „Fachwort plus Funktion“:** Jedes Fachwort erscheint entweder als Beschriftung eines Bildes oder einer Zeichnung, wo es wie eine Bildunterschrift wirkt, oder es wird im selben Satz in Alltagssprache aufgelöst. Beispiel: „Unterdeckung, die zweite wasserführende Ebene unter den Ziegeln.“ Kein Absatz enthält mehr als zwei unerklärte Fachbegriffe. Die Prüfung erfolgt automatisiert, siehe Content-Linter in `06-PRODUCTION-ARCHITECTURE.md`.

### W05 · 70 Kilometer gegen lokale Verankerung (mittel)

**Konflikt:** Ein Radius von 70 Kilometern reicht bis Hannover, Salzgitter und in die Nähe von Göttingen. Das klingt nach Vertriebsgebiet, nicht nach Nachbarschaft, und schwächt genau das Vertrauenssignal, das es stützen soll. Zusätzlich erscheint der Ortsbezug auf der Startseite erst spät in Akt 07.

**Beschluss:** Kern und Radius werden sprachlich getrennt und der Ortsbezug dreifach früher verankert.
- Sprachregel: „Zuhause im Landkreis Hildesheim. Im Einsatz bis etwa 70 Kilometer.“ Nie „wir arbeiten in einem Radius von 70 km“ als Hauptaussage.
- Verankerung 1: Hero-Eyebrow nennt Hildesheim, bleibt.
- Verankerung 2: In der Sektion Zeithorizont kommt ein regionaler Satz zur Bauwirklichkeit vor Ort, weil regionale Kompetenz sich an Bauweisen zeigt und nicht an einer Ortsliste.
- Verankerung 3: Der Kontaktabschluss nennt Ort und Anfahrt.

### W06 · Experience gegen SEO auf der Startseite (schwer, technisch)

**Konflikt:** Der Hero belegt 400 Prozent Viewporthöhe, die Startseite hat 14 Sektionen und rund 17.000 Pixel Höhe, im ersten Bildschirm stehen etwa 25 Wörter. Für ein lokales Hauptkeyword konkurriert diese Seite mit textreichen Wettbewerbern. Drei gepinnte Sektionen sind für Crawler unproblematisch, weil der Text im DOM steht, die Textmenge bleibt aber gering.

**Beschluss, Experience-Budget je Seitentyp.** Die Startseite ist die Markenseite, die Suchintentionen tragen die Unterseiten:

| Seitentyp | Pins | Scroll-Szenen | 3D | Mindest-Textmenge |
|---|---|---|---|---|
| Startseite | maximal 3 | 9 | Hero und Schichtmodell | rund 900 Wörter |
| Domänenseite `/dach/`, `/photovoltaik/` | 1 | 4 | optional Schichtmodell | 700 Wörter |
| Leistungsseite | 0 | 3 | keines | 800 Wörter |
| Brückenseite `/dach-und-pv/` | 1 | 5 | Schichtmodell | 1000 Wörter |
| Regionsseite | 0 | 2 | keines | 600 Wörter, davon 300 ortsspezifisch |
| Ratgeber | 0 | 2 | keines | 900 Wörter |

Damit steht die Experience der SEO nicht im Weg, sondern ist auf die Seite begrenzt, auf der sie Markenarbeit leistet.

### W07 · Die Hero-Länge gegen den Notfallkunden (mittel)

**Konflikt:** Wer mit einem undichten Dach kommt, will telefonieren und nicht drei Bildschirmhöhen scrollen. Zwischen p 0,18 und p 0,885 gibt es im Hero keinen bedienbaren CTA.

**Beschluss:**
- Hero von 400 auf 320 Prozent Viewporthöhe verkürzt. Die acht Phasen bleiben, die Wege werden dichter.
- Der Strich mit dem Wort „Weiter“ am unteren Rand wird ein echter Ankerlink zur nächsten Sektion, tastaturbedienbar. Wer die Sequenz überspringen will, kann das.
- Telefonnummer und Button in der Kopfzeile bleiben während der gesamten Sequenz bedienbar. Auf Mobil erscheint die Aktionsleiste unmittelbar nach dem Eröffnungsbild.

### W08 · Leistungszusage im Musterprojekt (mittel, rechtlich)

**Konflikt:** „Kostenfreier Dach- und PV-Potenzialcheck“ ist eine verbindliche Zusage. Der Betrieb ist fiktiv, die Zusage nicht einlösbar.

**Beschluss:** Formulierung wie freigegeben verwenden. Der Musterhinweis im Footer und die Bestätigungsseite nennen ausdrücklich, dass Leistungen und Konditionen der Darstellung dienen. Für einen echten Kundenbetrieb steht die Bestätigung der Kostenfreiheit auf der Freigabeliste vor dem Livegang, zusammen mit Gewährleistung, Mitgliedschaften und Erreichbarkeitszeiten.

### W09 · „Kostenfrei“ gegen die Regel, nicht über Preis zu kommunizieren (mittel)

**Konflikt:** Die Marke argumentiert über Qualität, nicht über Preis. Ein Gratisangebot ist Preiskommunikation.

**Beschluss, Dosierung:** Das Wort kostenfrei erscheint höchstens zweimal auf der Startseite, nie in Versalien, nie allein auf einem Button. Aufteilung:
- **Button:** „Potenzialcheck anfragen“. Der Button trägt die Handlung.
- **Fließtext daneben:** „Der Dach- und PV-Potenzialcheck ist kostenfrei und unverbindlich. Wir prüfen Dachzustand, Ausrichtung, Verschattung und die grundsätzliche Eignung für eine Photovoltaikanlage.“
- Kein Ausrufezeichen, kein Badge, kein Störer, keine Verknappung.

### W10 · Terracotta als Domänenfarbe war technisch nicht durchführbar (mittel, System)

**Konflikt:** Die Domäne DACH ist Terracotta `#9A6950`, Kontrast auf Obsidian 4,0:1. Auf Leistungsseiten treten Domänenlabels aber als kleiner Text auf. Die Regel „nur Fläche und große Typografie“ ist in der Praxis nicht haltbar.

**Beschluss:** Trennung in zwei Token. `--dach` `#9A6950` für Flächen, Kanten und Display ab 24 Pixel. Neu `--dach-text` `#C08A6E` mit gemessenem Kontrast 6,4:1 auf Obsidian für Labels und Textauszeichnungen. Analog `--nature-text` für die Kartenbeschriftung. Damit ist die Regel im Token-System durchgesetzt und nicht von Disziplin abhängig.

### W11 · Der Prototyp verletzt das eigene Content-erst-Prinzip (schwer, Fehler)

**Konflikt:** Die Dokumentation verlangt, dass der CSS-Grundzustand der sichtbare Endzustand ist. Im Specimen steht `.rv { opacity: 0 }`. Ohne JavaScript wären große Teile der Seite unsichtbar. Genau der Fehler, den die Regel verhindern soll.

**Beschluss, verbindliche Implementierung:** Alle Startzustände hängen an einer Klasse, die JavaScript erst setzt, nachdem die Motion-Schicht initialisiert ist.

```css
/* sichtbar, immer */
[data-reveal] { opacity: 1; transform: none; }
/* erst wenn Motion bereit ist, wird zurückgezogen */
html.motion-ready [data-reveal]:not(.is-in) { opacity: 0; transform: translateY(var(--move-text)); }
```

Ohne JavaScript, bei Skriptfehler, bei aktivierter Bewegungsreduktion und für Crawler ist die Seite vollständig sichtbar. Das gilt auch für Pins: die Sticky-Container brauchen den Klassen-Schalter, damit ohne Motion einfach gescrollt wird.

### W12 · Materialflächen statt Fotografie können abstrakt wirken (leicht)

**Konflikt:** Solange die Bildslots Materialflächen zeigen, wirkt die Seite grafischer und damit agenturhafter als beabsichtigt.

**Beschluss:** Platzhalter geben sich als Platzhalter zu erkennen, mit Slot-Kennung und Motivtext. Damit bewertet der Betrachter die Komposition und hält die Materialfläche nicht für die gestalterische Absicht. Die Slot-Registry hält Seitenverhältnis, Crop und Bewegungsprofil, sodass echte Bilder eins zu eins eintreten.

---

## TEIL B · ANTWORTEN AUF DIE ELF PRÜFFRAGEN

| Frage | Befund | Maßnahme |
|---|---|---|
| Passt die visuelle Sprache zu einem lokalen Meisterbetrieb? | Überwiegend ja. Material, Licht, technische Beschriftung und die Bauzeichnungssprache kommen aus dem Handwerk. Risiko lag bei den Agenturcodes: Aktlabels, Sektionsnummern, sehr große Display-Typografie | W01, W02 geschlossen. Display-XL bleibt auf Hero und ein Statement begrenzt, sonst maximal Display-L |
| Hochwertig, ohne Luxus-Architekturagentur zu wirken? | Grenzfall. Dunkle Fläche plus Serif plus viel Weißraum kann in Richtung Galerie kippen | Gegengewichte verbindlich: Maßangaben und Materialbezeichnungen in jeder zweiten Sektion, Telefonnummer im Kopf, konkrete Sätze statt Behauptungen, keine Sektion ohne überprüfbare Information |
| Ist die technische Kompetenz glaubwürdig? | Ja, das ist die Stärke des Systems. Schichtmodell, korrekte Montagefolge, Bauteilbezeichnungen, Prüfung vor Belegung | halten, nicht ausweiten. Kein weiteres Fachthema auf der Startseite |
| Ist Photovoltaik gleichwertig? | Nein, war nachgeordnet | W03, vier Maßnahmen |
| Verständlich für technisch unerfahrene Kunden? | Teilweise. Fachbegriffe waren nicht durchgehend aufgelöst | W04, Regel Fachwort plus Funktion, plus Content-Linter |
| Wird der Bezug zum Landkreis Hildesheim deutlich? | Zu spät und zu wenig | W05, dreifache Verankerung |
| Ist die 70-Kilometer-Region sinnvoll integriert? | Als Karte ja, sprachlich riskant | W05, Trennung von Kern und Radius |
| Unterstützt die Gestaltung die SEO oder steht sie im Weg? | Auf der Startseite stand sie im Weg, auf Unterseiten war das Verhältnis ungeklärt | W06, Experience-Budget je Seitentyp |
| Sind die CTAs logisch verteilt? | Ja, die Staffelung nach Verbindlichkeit trägt. Der Potenzialcheck fehlte als niedrigschwelliges Hauptangebot | siehe Teil C, neue CTA-Matrix |
| Wird der visuelle Effekt irgendwo wichtiger als die Information? | Ja, an zwei Stellen. Der Energieimpuls in Hero-Phase 7 trägt keine Information, und die Zeitangaben im Zeithorizont waren dekorative Zahlen ohne Substanz | Energieimpuls bleibt, aber nur als Andeutung ohne Zahl und ohne Wiederholung. Die Zahlen im Zeithorizont werden durch Prüfkriterien ersetzt, siehe Teil D |
| Wirkt die Seite zu komplex oder zu agenturhaft? | An den in W01, W02 und W12 genannten Stellen ja | geschlossen |

---

## TEIL C · CTA-MATRIX, ÜBERARBEITET

Journey: **Potenzialcheck, Beratung, Planung, Angebot, Umsetzung.** Der Potenzialcheck ist der Einstieg, nicht der Abschluss.

| Ort | Button | Begleittext | Verbindlichkeit | Ziel |
|---|---|---|---|---|
| Kopfzeile, dauerhaft | Projekt besprechen | Telefonnummer daneben | mittel | Formular |
| Hero, Phase 1 | Projekt besprechen · Unsere Leistungen | keiner | mittel, keine | Formular, Domänenseiten |
| Hero, Phase 8 | Projekt besprechen | keiner | mittel | Formular |
| Haltung, Zeithorizont | keiner | keiner | keine | am Problem wird nicht verkauft |
| Brückenwort | Potenzialcheck anfragen | Dach und PV gemeinsam betrachten | niedrig | Formular, Anliegen Dach und PV |
| Leistungen | Dach und PV planen | keiner | mittel | `/dach-und-pv/` |
| Ablauf, nach Schritt 01 | Potenzialcheck anfragen | kostenfrei und unverbindlich, geprüft werden Dachzustand, Ausrichtung, Verschattung und die Eignung für Photovoltaik | niedrig, Hauptangebot | Formular, Anliegen Potenzialcheck |
| Projekte | Projekte ansehen | keiner | keine | `/projekte/` |
| Haltung, Statement | Beratung anfragen | keiner | mittel | Formular, Anliegen Beratung |
| Kontakt | Projektanfrage senden | Musterhinweis | hoch | Absenden |

Der Potenzialcheck erscheint zweimal, an der Erkenntnis und am Prozess. Das Formular erhält ihn als eigene Option in Schritt 1.

Nicht verwendet: Jetzt Angebot anfordern, Gratis, Sichern, Sparen, Nur heute, jede Form von Verknappung.

---

## TEIL D · SEKTION ZEITHORIZONT, NEU GEFASST

Die dekorativen Zahlen entfallen. Die Sektion zeigt stattdessen, **was tatsächlich beurteilt wird.** Das ist fachlich belastbar, braucht keine Quelle und stärkt die Kompetenz, statt sie zu behaupten.

**Überschrift:** Ein Dach ist eine Entscheidung für Jahrzehnte.

**Lead:** Ob ein Dach saniert werden muss oder noch Jahre trägt, entscheidet niemand aus der Ferne. Wir beurteilen es an acht Punkten, vor Ort und am Bauteil.

**Acht Prüfpunkte, als Zeilen mit Bezugslinien:**
1. Alter des Daches und der letzten Eingriffe
2. Zustand der Dachfläche, Deckung, Kehlen, Anschlüsse
3. Material und Ausführungsqualität
4. bisherige Instandhaltung und dokumentierte Reparaturen
5. erwartbare Restnutzungsdauer der Deckung
6. notwendige Sanierungsmaßnahmen und ihre Reihenfolge
7. technische Eignung für Photovoltaik, Statik, Ausrichtung, Verschattung
8. langfristige Kombination aus Dach und Energie

**Abschluss:** Erst danach reden wir über Material und Kosten. Nicht vorher.

**Regionaler Satz, Verankerung 2 aus W05:** Viele Häuser im Landkreis Hildesheim stammen aus den Siedlungsjahren der Nachkriegszeit. Wir kennen die Dachaufbauten dieser Baujahre und wissen, worauf bei ihnen zu achten ist.

Keine Jahreszahl, keine Lebensdauerangabe, keine Prozentzahl. Konkrete Werte kommen erst, wenn ein echter Betrieb sie fachlich bestätigt und belegt.

---

## TEIL E · SELBSTBEWERTUNG

| Dimension | Vorher | Nach den Beschlüssen | Wirksame Maßnahme |
|---|---|---|---|
| Art Direction | 9 | 9 | Display-Einsatz begrenzt |
| Brand Identity | 8 | 9 | Agenturcodes entfernt, W01, W02 |
| Hero | 9 | 9 | Länge reduziert, Sprungmarke, W07 |
| Storytelling | 8 | 9 | zwölf definierte Nähte, W02 |
| UX | 7 | 9 | Sprungmarke, dauerhafte Erreichbarkeit, kürzerer Hero |
| Conversion | 8 | 9 | Potenzialcheck als Hauptangebot, neue Matrix |
| SEO | 7 | 9 | Experience-Budget je Seitentyp, W06 |
| Mobil | 8 | 8 | Crop des Eröffnungsbildes noch offen |
| Performance | 8 | 9 | Content-erst-Schalter, W11 |
| Accessibility | 8 | 9 | Content-erst-Schalter, Token-Kontraste, W10, W11 |
| Motion Design | 9 | 9 | unverändert |
| 3D | 9 | 9 | Montagefolge korrigiert in Phase 6 |
| Content | 7 | 9 | Fachwort plus Funktion, Prüfpunkte statt Zahlen, W04, Teil D |
| Vertrauenswürdigkeit | 8 | 9 | keine erfundenen Zahlen, lokaler Bezug früher, W05 |
| Gleichgewicht Dach und Energie | 6 | 9 | vier Maßnahmen aus W03 |

Kein Bereich liegt nach den Beschlüssen unter 8. Der Mobil-Crop bleibt der einzige offene Punkt und wird in der Implementierung gelöst, nicht im Konzept.
