# Klarwerk – Website-Konzept (Umsetzungsbriefing)

Tech-Stack: Astro + Tailwind CSS, Mobile First, statisch, deploybar auf Vercel/Netlify.

## 0. Eckdaten
- Marke: Klarwerk – digitale Marketing-Agentur
- Zielgruppen (zwei Segmente, differenziert ansprechen):
  1. Lokale KMU & Einzelunternehmer (Friseure, Gastro, Handwerk, Praxen, Studios; 1–15 MA) → Verständlichkeit, faire Preise, schnelle Ergebnisse, persönlicher Ansprechpartner
  2. Mittelständische Unternehmen (20–250 MA) → Professionalität, Strategie, Referenzen, Datenkompetenz, Verlässlichkeit
- Doppelziel der Website: (1) aktiv Anfragen/Leads generieren UND (2) Vertrauen aufbauen. Beide gleichwertig.
- Leistungen: Social Media & Content · Performance Marketing / Paid Ads · Website-Erstellung (ab 1.000 €) · KI-Automatisierung & Digitalisierung (Differenzierungsmerkmal)

## 1. Positionierungsstatement
Klarwerk macht lokale und mittelständische Unternehmen online sichtbar – mit Social Media, Werbeanzeigen, Websites und Automatisierung, die nicht nur gut aussehen, sondern messbar Anfragen bringen. Anders als klassische Agenturen arbeiten wir transparent, datenbasiert und ohne Knebelverträge.

## 2. Seitenarchitektur & Navigation
### 2.1 Sitemap
Startseite · Leistungen (Übersicht) mit 4 Unterseiten (Social Media & Content, Performance Marketing / Paid Ads, Website-Erstellung, KI-Automatisierung & Digitalisierung) · Referenzen / Case Studies · Über uns · Blog / Insights · Kontakt / Anfrage · Footer-Rechtliches (Impressum, Datenschutz)
### 2.2 Navigation
- Header (sticky): Leistungen (Dropdown mit 4 Unterseiten) · Referenzen · Über uns · Blog · Kontakt — rechts abgesetzt: Button "Kostenloses Erstgespräch"
- Footer (dreispaltig): Spalte 1 Leistungen / Spalte 2 Unternehmen (Über uns, Referenzen, Blog, Erstgespräch) / Spalte 3 Kontakt & Rechtliches (Telefon, E-Mail, Social-Profile, Impressum, Datenschutz)

## 3. Seitenkonzept
### 3.1 Startseite (Sections von oben nach unten)
1. Hero – Nutzenversprechen + Subline + 2 Buttons (Copy siehe 4.1) → Primär-CTA "Kostenloses Erstgespräch"
2. Vertrauensleiste – Kundenlogos / Plattform-Badges (Meta, Google Partner) / Kennzahlen (Platzhalter)
3. Problem & Lösung – Schmerz beider Segmente, Lösung in einem Satz → Sekundär-CTA "Leistungen ansehen"
4. Leistungen – 4 Karten (je Leistung) mit Nutzen + Link
5. So arbeiten wir – 3 Schritte: Erstgespräch → Strategie → Umsetzung & Reporting
6. Differenzierung – Warum Klarwerk anders: transparent, datenbasiert, Automatisierung als Plus
7. Referenzen-Teaser – 2–3 kurze Auszüge mit Ergebniszahl (Platzhalter) → Link "Alle Referenzen"
8. Über den Gründer – Kurzvorstellung + Foto → Link "Mehr über uns"
9. Lead-Magnet – kostenloser Sichtbarkeits-Check (siehe 7.3) → Formular/CTA
10. FAQ – 5–6 Fragen (Preise, Laufzeit, Ablauf)
11. Abschluss-CTA – starker Schlusssatz + Button + Kontaktdaten
### 3.2 Leistungsseiten (einheitliches Gerüst für alle 4)
Hero (leistungsspezifisches Nutzenversprechen + CTA) → Für wen → Was enthalten ist (Liste) → Ablauf (3–4 Schritte) → Preislogik → Mini-Referenz (Platzhalter) → FAQ + Abschluss-CTA.
Preislogik: Social Media "individuelles Angebot nach Erstgespräch"; Performance Marketing "ab X €/Monat Betreuung" + Hinweis Werbebudget separat; Website "ab 1.000 €" (Festpreis-Einstieg); KI-Automatisierung "auf Anfrage" einmalige Einrichtung + optionale Betreuung.
### 3.3 Über uns
Hero (Haltung) → Gründerstory (8+ Jahre Unternehmer, vom ersten Projekt über Firmenaufbau/-verkauf bis Agentur) → Werte (transparent, datenbasiert, partnerschaftlich) → Foto → CTA "Lernen wir uns kennen". Intro-Text siehe 4.2.
### 3.4 Referenzen / Case Studies
Struktur je Fall: Kunde & Branche → Ausgangslage → Was wir gemacht haben → Ergebnis in Zahlen (Vorher-Nachher) → Kundenzitat → CTA. Phase 0 (keine Fälle): ehrlicher Abschnitt "Wir bauen gerade unsere ersten dokumentierten Projekte auf – und vergeben dafür einige Plätze zu Sonderkonditionen." + CTA. Frühzeitig Google-Bewertungen einbinden.
### 3.5 Kontakt / Anfrage
Felder: Name, E-Mail, Telefon (optional), Unternehmen; "Wobei können wir helfen?" (Mehrfachauswahl: Social Media / Paid Ads / Website / Automatisierung / weiß noch nicht); "Wie groß ist Ihr Unternehmen?" (Einzelunternehmer / 2–15 / 16–50 / 50+); "Was ist Ihr Ziel?" (Freitext); Nachricht (optional). Hinweis am Formular: "Wir melden uns innerhalb von 24 Stunden werktags." + "Unverbindlich und kostenlos." Alternativ Terminbuchungs-Button (Cal.com).
### 3.6 Blog / Insights
Seite anlegen, vorerst nicht befüllen (kein leerer Blog). Später 1–2 Artikel/Monat via Markdown (Astro Content Collections).

## 4. Fertige Copy (wörtlich verwenden)
### 4.1 Hero Startseite
- Headline: Mehr Sichtbarkeit. Mehr Anfragen. Ohne Marketing-Kauderwelsch.
- Subline: Klarwerk bringt lokale und mittelständische Unternehmen online nach vorn – mit Social Media, Werbeanzeigen, Websites und Automatisierung, die messbar Kunden bringen. Transparent, datenbasiert, ohne lange Bindung.
- Button 1 (Primär): Kostenloses Erstgespräch vereinbaren
- Button 2 (Sekundär): Unsere Leistungen ansehen
### 4.2 Über uns – Intro
Hinter Klarwerk steht kein anonymes Agenturkonstrukt, sondern ein Unternehmer, der seit über acht Jahren selbst Geschäfte aufbaut – vom ersten eigenen Projekt als Jugendlicher über den Aufbau und Verkauf eines Unternehmens bis hin zur digitalen Vermarktung. Diese Erfahrung prägt unsere Arbeit: Wir denken nicht in Klicks, sondern in Anfragen, Kunden und Umsatz. Sie arbeiten direkt mit uns zusammen, bekommen ehrliche Einschätzungen statt Buzzwords – und Ergebnisse, die Sie schwarz auf weiß nachvollziehen können.
### 4.3 Leistungsbeschreibungen
Social Media & Content: Ihre Kanäle sollen verkaufen, nicht nur existieren. Wir übernehmen die komplette Betreuung Ihrer Social-Media-Präsenz – von der Strategie über professionelle Inhalte (Foto, Video, Grafik, Text) bis zur Veröffentlichung. So bleiben Sie sichtbar, ohne selbst Zeit zu investieren. Sie bekommen einen klaren Plan, regelmäßige Inhalte und einen monatlichen Überblick.
Performance Marketing / Paid Ads: Werbung muss sich rechnen – sonst ist sie verbranntes Geld. Wir planen, schalten und optimieren Ihre Kampagnen auf Meta, Google und Co. konsequent nach Zahlen. Jeder Euro Werbebudget wird darauf ausgerichtet, Anfragen und Kunden zu bringen, nicht nur Klicks. Sie sehen transparent, was Ihre Werbung kostet und einbringt – ohne Blackbox.
Website-Erstellung: Ihre Website ist oft der erste Eindruck. Wir bauen moderne, schnelle Websites, die auf dem Handy genauso überzeugen wie am PC und gezielt zu Kontaktaufnahmen führen. Fair kalkuliert ab 1.000 €, in der Regel fertig in ein bis zwei Wochen – auf Wunsch mit laufender Pflege.
KI-Automatisierung & Digitalisierung: Während andere Agenturen beim Marketing aufhören, gehen wir weiter: Wir automatisieren die Aufgaben nach der Anfrage. Terminerinnerungen, Bewertungsanfragen, Bearbeitung von Kundenanfragen – alles läuft zuverlässig im Hintergrund. So gewinnen Sie mehr Anfragen, verlieren keine mehr und sparen täglich Zeit.
### 4.4 CTA-Varianten
- Hero/Hauptbutton: Kostenloses Erstgespräch vereinbaren
- Mitten im Inhalt: Unverbindlich anfragen – Antwort in 24 Stunden
- Lead-Magnet/Abschluss: Kostenlosen Sichtbarkeits-Check anfordern
### 4.5 Meta-Descriptions (max. 155 Zeichen)
- Startseite: Klarwerk: Marketing-Agentur für lokale & mittelständische Unternehmen. Social Media, Werbeanzeigen & Websites, die messbar Anfragen bringen.
- Leistungsseite Website: Professionelle Website erstellen lassen – modern, mobiloptimiert, ab 1.000 €. Klarwerk baut Websites, die Besucher zu Anfragen machen.

## 5. Design-Leitlinien
### 5.1 Farben
Primär #1E2A4A (Tiefes Indigoblau, Flächen/Header/Überschriften); Sekundär #F4F5F7 (Helles Schiefergrau, ruhige Flächen); Akzent #FF5A3C (Korallrot, NUR Buttons/CTAs/Hover); Support #17B0A0 (Petrol-Türkis, Bestätigung/Zahlen); Text #1A1A1A (Anthrazit). Regel: Indigoblau dominiert, Korallrot sparsam.
### 5.2 Typografie (Google Fonts)
Headline: Space Grotesk. Body: Inter (16–18 px, Zeilenhöhe ~1,6). Max. 2 Schnitte je Font.
### 5.3 Bildsprache
DO: echte Arbeitssituationen, authentische Menschen, Ergebnis-Visualisierungen (Mockups, Dashboards), Gründer-Foto, Akzentton als Detail. DON'T: generische Stockfotos (Handschlag im Anzug, Roboterhände), übertriebene 3D-KI-Motive.
### 5.4 Designprinzipien (verbindlich)
1. Klarheit vor Effekt – eine Botschaft + ein nächster Schritt je Section.
2. Viel Weißraum.
3. Mobile First.
4. Beweis statt Behauptung (Zahlen, Beispiele).
5. Ein klarer CTA pro Bildschirm.

## 6. Technik
Stack: Astro + Tailwind (statisch). Must-haves: Kontaktformular mit Spamschutz; Terminbuchung (Cal.com); DSGVO-Cookie-Consent mit Opt-in VOR Tracking; Analytics (GA4 oder Matomo) consent-basiert; SSL; Impressum & Datenschutz; schnelle Ladezeiten; Mobiloptimierung. Deployment: Vercel oder Netlify. Domain später verbinden.

## 7. Conversion-Strategie
### 7.1 Lead-Generierung
Sticky "Erstgespräch"-Button im Header; direkte Terminbuchung (Cal.com); Lead-Magnet Sichtbarkeits-Check; mehrere CTAs entlang der Startseite; dezenter Exit-Intent-Hinweis.
### 7.2 Vertrauenssignale – Platzierung
Kundenlogos/Badges (unter Hero); Ergebniszahlen (Referenzen); Google-Bewertungen/Testimonials (Startseite Mitte + Leistungsseiten); Gründer-Foto & Story (Über uns + Teaser); Transparenz-Versprechen (am Formular + Footer); Zertifikate (Footer, sobald vorhanden).
### 7.3 Lead-Magnet
Kostenloser "Sichtbarkeits-Check": Interessent gibt Website/Social-Profil an, erhält kurze individuelle Einschätzung mit 3–5 Verbesserungspunkten. Kostenlos, unverbindlich, endet immer mit dem Angebot eines Erstgesprächs.

## Leitprinzip
Jede Seite beantwortet drei Fragen: Was habe ich davon? Warum ausgerechnet Klarwerk? Was ist mein nächster Schritt? Wo eine dieser Antworten fehlt, fehlt eine Conversion.
