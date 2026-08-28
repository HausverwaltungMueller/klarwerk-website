# Bildquellen

Noch keine Bilder eingesetzt. Alle sechzehn Bildplätze rendern die gestaltete
Materialfläche mit Slot-Kennung, siehe `src/content/slots.ts` und `docs/03-BILDBRIEFINGS.md`.

Ablauf, sobald Bilder vorliegen:

1. Quelldateien als `assets-src/<slot-id>.jpg` ablegen, ein Bild je Slot.
2. `npx tsx scripts/build-images.ts` erzeugt AVIF und WebP in den Breiten
   2560, 1920, 1280 für Desktop sowie 1200 und 828 für Mobil und schreibt die
   Herkunft in diese Datei.
3. In `src/content/slots.ts` beim betreffenden Slot `file: '/img/<slot-id>'` setzen.

Layout, Seitenverhältnis und Bewegungsprofil bleiben unverändert. Die Pipeline und
der Eintritt eines echten Bildes wurden am 28.08.2026 mit einer Testdatei geprüft,
die anschließend entfernt wurde.

Erzeugte oder lizenzierte Herkunft wird hier festgehalten. Ein erzeugtes Bild wird
nie als Fotografie eines realen Projekts ausgegeben.

| Slot | Datei | Art | Datum |
| --- | --- | --- | --- |
