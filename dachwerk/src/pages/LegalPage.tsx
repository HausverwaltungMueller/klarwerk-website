import { useMotion } from '@/motion/useMotion';
import { Section } from '@/design/Section';
import { PageIntro } from './PageIntro';
import { company } from '@/content/company';
import { demoNote } from '@/content/legal';
import type { RouteMeta } from '@/routes';

/** Impressum und Datenschutz. Musterinhalte, ausdrücklich als solche gekennzeichnet,
 *  keine erfundenen Registerdaten. */
export function LegalPage({ meta, kind }: { meta: RouteMeta; kind: 'imprint' | 'privacy' }) {
  useMotion();
  void meta;

  if (kind === 'imprint') {
    return (
      <>
        <PageIntro label="Rechtliches" h1="Impressum" lead={demoNote} />
        <Section id="angaben" label="Angaben" labelAs="h2">
          <div className="prose-col text-text-1">
            <p><strong className="text-text-0">Anbieter</strong><br />{company.name}<br />{company.street.value}<br />{company.zip.value} {company.city.value}</p>
            <p><strong className="text-text-0">Kontakt</strong><br />Telefon {company.phone.value}<br />E-Mail {company.email.value}</p>
            <p><strong className="text-text-0">Handelsregister und Kammerangaben</strong><br />
              In diesem Musterprojekt sind keine Register-, Kammer- oder Umsatzsteuerangaben eingetragen. Für einen echten Auftritt sind hier die tatsächlichen Pflichtangaben zu ergänzen.</p>
            <p><strong className="text-text-0">Verantwortlich für den Inhalt</strong><br />
              Platzhalter. Für einen echten Auftritt ist die verantwortliche Person zu benennen.</p>
            <p><strong className="text-text-0">Hinweis</strong><br />
              Alle Angaben auf dieser Website dienen der Darstellung eines Gestaltungs- und Umsetzungskonzepts. Es besteht kein Geschäftsbetrieb, es werden keine Leistungen angeboten und keine Verträge geschlossen.</p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageIntro label="Rechtliches" h1="Datenschutz" lead="Diese Website ist ein Musterprojekt. Sie überträgt keine Formulareingaben, bindet keine Dienste Dritter ein und setzt keine Zählpixel." />
      <Section id="daten" label="Umgang mit Daten" labelAs="h2">
        <div className="prose-col text-text-1">
          <p><strong className="text-text-0">Formular</strong><br />
            Das Anfrageformular ist ein Musterformular. Eingaben werden nicht übermittelt und nicht auf einem Server gespeichert. Zur Bequemlichkeit hält der Browser Ihre Eingaben während des Besuchs im Sitzungsspeicher, damit ein versehentliches Neuladen sie nicht verwirft. Beim Schließen des Tabs verfallen sie.</p>
          <p><strong className="text-text-0">Schriften</strong><br />
            Die verwendeten Schriften werden von diesem Server ausgeliefert. Es findet keine Verbindung zu Google Fonts oder einem anderen Anbieter statt.</p>
          <p><strong className="text-text-0">Karten</strong><br />
            Das Arbeitsgebiet ist als eigene Zeichnung dargestellt. Es wird kein Kartendienst eingebunden.</p>
          <p><strong className="text-text-0">Statistik und Tracking</strong><br />
            Es ist kein Analysewerkzeug eingebunden. Die Website enthält eine vorbereitete Schnittstelle für eine spätere Messung, die ohne Einwilligung nichts sendet und keine Freitexte oder vollständigen Postleitzahlen verarbeitet.</p>
          <p><strong className="text-text-0">Hinweis</strong><br />
            Für einen echten Auftritt ist eine vollständige Datenschutzerklärung erforderlich, die den tatsächlichen Verarbeitungen entspricht. Dieser Text ersetzt sie nicht.</p>
        </div>
      </Section>
    </>
  );
}
