import { Section } from '@/design/Section';
import { Lead } from '@/design/Prose';
import { aufbau } from '@/content/home';
import { layers } from '@/content/process';
import { RoofSectionDrawing } from '@/design/drawings/RoofSectionDrawing';

/**
 * Der Dachaufbau als Schnittzeichnung mit scrollgesteuertem Explosionsfaktor.
 * Die Schichtliste steht als Text daneben, damit die Information nicht an der
 * Grafik hängt. docs/06, Abschnitt 15, Punkt 9.
 */
export function Aufbau() {
  return (
    <Section id="dachaufbau" label={aufbau.label} surface="day" bridge="material" rhythm="cesura">
      <div className="mb-7 grid gap-6 md:grid-cols-[5fr_7fr] md:gap-7">
        <h2 className="t-display-l" data-reveal>{aufbau.h2}</h2>
        <div data-reveal><Lead>{aufbau.lead}</Lead></div>
      </div>

      <div className="min-w-0-children grid gap-7 md:grid-cols-[7fr_5fr]">
        <div data-reveal="surface">
          <RoofSectionDrawing />
        </div>
        <ol>
          {layers.map((l) => (
            <li key={l.index} className="grid grid-cols-[44px_1fr] gap-x-4 border-t border-hair py-4" data-reveal="block">
              <span className="t-spec pt-1">{l.index}</span>
              <div>
                <h3 className={`text-base font-medium ${l.domain === 'energie' ? 'text-energie' : 'text-text-0'}`}>
                  {l.name}
                </h3>
                <p className="mt-1 text-s text-text-2">{l.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="t-lead mt-7 max-w-[62ch]" data-reveal>{aufbau.closing}</p>
    </Section>
  );
}
