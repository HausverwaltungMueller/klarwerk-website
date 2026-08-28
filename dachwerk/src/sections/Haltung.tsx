import { Section } from '@/design/Section';
import { Lead } from '@/design/Prose';
import { haltung } from '@/content/home';

export function Haltung() {
  return (
    <Section id="haltung" label={haltung.label} bridge="satz" texture="wood" rhythm="cesura">
      <div className="grid gap-6 md:grid-cols-[5fr_7fr] md:gap-7">
        <h2 className="t-display-l" data-reveal>{haltung.h2}</h2>
        <div data-reveal>
          <Lead>{haltung.text}</Lead>
        </div>
      </div>
    </Section>
  );
}
