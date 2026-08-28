import { Section } from '@/design/Section';
import { Button } from '@/design/Button';
import { statement } from '@/content/home';
import { cta } from '@/content/cta';

/** Fast leere Fläche. Nach elf Sektionen ist Leere das stärkste Mittel. */
export function Statement() {
  return (
    <Section id="haltung-statement" label={statement.label} rhythm="cesura" bridge="satz">
      <div className="flex min-h-[70svh] flex-col justify-center">
        <h2 className="t-display-xl">
          <span className="block" data-mask><span>{statement.lineA}</span></span>
          <span className="block" data-mask><span>{statement.lineB}</span></span>
        </h2>
        <p className="t-lead mt-7" data-reveal>{statement.text}</p>
        <div className="mt-7" data-reveal>
          <Button to="/kontakt/?anliegen=beratung" variant="secondary" arrow event="statement_beratung_click">
            {cta.beratung}
          </Button>
        </div>
      </div>
    </Section>
  );
}
