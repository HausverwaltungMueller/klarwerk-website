import type { GuideArticle } from '@/types';
import { legalSources } from './company';
import { LEGAL_AS_OF } from '@/config';

/** Ratgeber. Steuerliche und rechtliche Aussagen tragen Standdatum und Quelle,
 *  sind konditional formuliert und verweisen auf die Klaerung im Einzelfall. */
export const guide: GuideArticle[] = [
  {
    slug: 'pv-kosten',
    question: 'Was kostet eine Photovoltaikanlage?',
    teaser: 'Warum eine seriöse Antwort mit einer Gegenfrage beginnt und welche Posten den Preis wirklich bestimmen.',
    answer: [
      'Eine Zahl ohne Ihr Dach ist eine Zahl ohne Wert. Der Preis einer Anlage entsteht aus der Leistung in Kilowatt peak, dem Aufwand auf dem Dach, der Elektrik im Haus und der Frage, ob ein Speicher dazukommt.',
      'Auf dem Dach kostet nicht die Fläche, sondern der Aufwand: Ziegelform, Zugänglichkeit, Zustand der Deckung, Anzahl der Durchdringungen. Ein Dach mit engen Kehlen und mehreren Gauben braucht mehr Zeit als eine geschlossene Fläche gleicher Größe.',
      'Im Haus entscheidet der Weg vom Dach zum Zählerschrank, der Zustand der Unterverteilung und die Frage, ob eine Wallbox oder eine Wärmepumpe mitgedacht werden soll.',
      'Umsatzsteuerlich gilt: Für bestimmte Photovoltaikanlagen gilt unter den gesetzlichen Voraussetzungen ein Umsatzsteuersatz von 0 Prozent. Nach der Verwaltungsauffassung gelten die Voraussetzungen als erfüllt, wenn die installierte Bruttoleistung laut Marktstammdatenregister 30 Kilowatt peak nicht übersteigt. Ob die Regelung auf Ihr Vorhaben zutrifft, klären wir im Rahmen der Beratung, die steuerliche Beurteilung gehört zum Steuerberater.',
      'Was wir Ihnen geben können, ist eine Aufstellung, die Positionen benennt, statt einer Pauschale, die alles verbirgt.',
      'Zu einer solchen Aufstellung gehören: Module und Wechselrichter, die Unterkonstruktion passend zur Ziegelform, die Montage, die Elektroarbeiten im Haus, ein möglicher Zählerschrankumbau, die Anmeldung und die Dokumentation. Wer nur eine Summe nennt, verbirgt genau die Posten, die sich zwischen zwei Angeboten unterscheiden.',
      'Ein häufiger Irrtum ist, dass eine größere Anlage automatisch teurer pro Kilowatt ist. Das Gegenteil trifft eher zu: Rüstzeit, Anfahrt und Elektroarbeiten fallen unabhängig von der Modulzahl an. Deshalb ist die kleinste Anlage selten die wirtschaftlichste.',
      'Der zweite Irrtum betrifft den Speicher. Er wird oft als Teil des Anlagenpreises verhandelt, ist aber eine eigene Entscheidung mit eigener Rechnung. Wir behandeln ihn deshalb als eigene Position und nicht als Paketbestandteil.',
      'Wenn Sie Angebote vergleichen, achten Sie auf drei Punkte: Ist die Unterkonstruktion zur Ziegelform benannt? Sind Elektroarbeiten und ein möglicher Zählerschrankumbau enthalten? Und steht dort, wer die Anmeldung übernimmt? Diese drei Punkte erklären die meisten Preisunterschiede.',
    ],
    sources: legalSources,
    asOf: LEGAL_AS_OF,
    relatedServices: ['pv-anlage', 'pv-planung'],
  },
  {
    slug: 'speicher-sinnvoll',
    question: 'Lohnt sich ein Stromspeicher?',
    teaser: 'Ein Speicher verschiebt Strom von Mittag in den Abend. Ob das lohnt, hängt an Ihrem Tagesverlauf.',
    answer: [
      'Ein Speicher erzeugt keinen Strom, er verschiebt ihn. Der Nutzen entsteht dort, wo Sie Strom brauchen, wenn die Sonne nicht liefert.',
      'Deshalb ist die erste Frage nicht die Kapazität, sondern Ihr Tagesverlauf. Wer mittags zu Hause ist, wäscht und kocht, verbraucht viel direkt. Wer erst abends kommt, verschiebt fast alles.',
      'Vor dem Speicher lohnt der Blick auf Steuerung: planbare Verbraucher in die Mittagsstunden legen ist günstiger als Kapazität zu kaufen.',
      'Wir sehen uns Ihren Verbrauch an und rechnen beide Varianten. Wenn der Speicher sich nicht trägt, sagen wir das.',
      'Steuerlich gilt: Batterien und Speicher unterliegen dem Nullsteuersatz, wenn sie im konkreten Anwendungsfall dazu bestimmt sind, Strom aus begünstigten Solarmodulen zu speichern.',
      'Für die Auslegung ist nicht die Jahresmenge entscheidend, sondern der Abendverbrauch. Wer abends drei bis fünf Kilowattstunden benötigt, braucht keinen Speicher, der zehn liefert. Ein zu großer Speicher wird selten voll und arbeitet deshalb schlechter, als die Datenblattzahlen vermuten lassen.',
      'Ein Speicher verändert außerdem den Umgang mit Verbrauch. Wer weiß, dass abends Strom aus dem Speicher kommt, verschiebt weniger. Das ist bequem, kostet aber genau die Wirtschaftlichkeit, mit der der Speicher begründet wurde.',
      'Sinnvoll wird ein Speicher meist in drei Fällen: bei hohem Abendverbrauch, bei einer Wärmepumpe mit Pufferbetrieb und bei einem Elektroauto, das abends lädt. In diesen Fällen rechnen wir ihn durch und legen die Kapazität an Ihrem Verlauf aus, nicht an der Modulleistung.',
      'Wer eine Notstromfunktion möchte, sollte sie ausdrücklich benennen. Nicht jeder Speicher kann das, und die Umsetzung verlangt zusätzliche Elektroarbeiten. Das ist keine Kleinigkeit im Angebot, sondern eine eigene Position.',
    ],
    sources: legalSources.slice(0, 2),
    asOf: LEGAL_AS_OF,
    relatedServices: ['stromspeicher', 'energiemanagement'],
  },
  {
    slug: 'dach-vor-pv-pruefen',
    question: 'Was muss am Dach vor einer Photovoltaikanlage geprüft werden?',
    teaser: 'Sieben Punkte, die vor der Belegung geklärt sein sollten, und warum die Reihenfolge über die Kosten entscheidet.',
    answer: [
      'Eine Anlage bleibt Jahrzehnte auf dem Dach. Wer sie auf eine Deckung setzt, die vorher hätte erneuert werden müssen, zahlt die Demontage und die erneute Montage.',
      'Geprüft werden Statik und Sparrenabstand, der Zustand der Deckung, die Unterdeckung als zweite wasserführende Ebene, die Anschlüsse an Kamin und Kehlen, Ausrichtung und Neigung, Verschattung durch Bäume und Nachbargebäude sowie der Weg für Leitungen ins Haus.',
      'Aus der Prüfung ergibt sich die Reihenfolge. Manchmal lautet die Empfehlung: erst sanieren, dann belegen. Manchmal: direkt belegen, die Deckung trägt noch Jahre. Beides ist ein Ergebnis, nicht ein Verkaufsgespräch.',
      'Zur Statik: Eine Anlage bringt zusätzliche Last auf die Sparren, dazu Wind- und Schneelasten. Der Sparrenabstand und der Zustand des Holzes entscheiden, ob und mit welchen Befestigungspunkten belegt werden kann. Das lässt sich im Dachraum beurteilen, nicht von der Straße.',
      'Zur Deckung: Brüchige oder verschobene Ziegel sind nach der Montage schwer erreichbar. Wer eine Anlage auf eine Deckung setzt, die kurz vor dem Ende steht, baut sich eine spätere Demontage ein.',
      'Zur Unterdeckung: Sie ist die zweite wasserführende Ebene und damit die eigentliche Sicherheit des Dachs. Ist sie porös, hilft eine dichte Deckung nur so lange, wie kein Wasser darunter gelangt.',
      'Zu Ausrichtung und Verschattung: Süd ist nicht die einzige gute Richtung. Ost und West liefern über den Tag verteilt und passen häufig besser zum Verbrauch. Entscheidender ist die Verschattung: Ein Kamin oder ein Baum kostet mehr Ertrag als der Unterschied zwischen zwei Modultypen.',
      'Genau dafür gibt es den Dach- und PV-Potenzialcheck. Er ist kostenfrei und unverbindlich.',
    ],
    relatedServices: ['pv-anlage', 'dachsanierung'],
  },
];

export const findGuide = (slug: string): GuideArticle | undefined => guide.find((g) => g.slug === slug);
