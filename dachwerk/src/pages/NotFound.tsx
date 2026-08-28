import { Button } from '@/design/Button';

export function NotFound() {
  return (
    <section className="page py-11">
      <p className="t-label">Fehler 404</p>
      <h1 className="t-display-l mt-4 max-w-[22ch]">Diese Seite haben wir nicht gefunden.</h1>
      <p className="t-lead mt-5">
        Vielleicht hilft der Weg über die Startseite oder direkt über die Leistungen.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <Button to="/">Zur Startseite</Button>
        <Button to="/dach/" variant="secondary">Dach</Button>
        <Button to="/photovoltaik/" variant="secondary">Photovoltaik</Button>
      </div>
    </section>
  );
}
