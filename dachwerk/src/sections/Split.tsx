import { Button } from '@/design/Button';
import { Figure } from '@/design/Figure';
import { split } from '@/content/home';
import { cta, potenzialcheckNote } from '@/content/cta';

/**
 * Zwei getrennte Welten werden physisch getrennt gezeigt, damit ihre Zusammenführung
 * eine Bedeutung hat. Gepinnt auf dem Desktop, gestapelt auf Mobil.
 */
export function Split() {
  return (
    <section id="dach-und-energie" aria-label={split.label} className="relative md:h-[240vh]" data-bridge="flaeche">
      <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:items-center md:justify-center md:overflow-hidden">
        {/* Materialhälften */}
        <div className="grid md:absolute md:inset-0 md:block">
          <div className="relative h-[220px] overflow-hidden md:absolute md:inset-y-0 md:left-0 md:h-full md:w-[50.4%]"
            data-split="left">
            <Figure id="mat-01" fill showMeta={false} />
            <span aria-hidden="true" className="absolute inset-y-0 right-0 w-[2px]"
              style={{ background: 'linear-gradient(180deg, rgba(184,188,192,0.05), rgba(184,188,192,0.55), rgba(184,188,192,0.05))' }} />
            <div className="absolute bottom-8 left-[12%] z-[3] flex flex-col gap-2">
              <p className="t-label">Domäne A</p>
              <p className="t-display-m text-dach-text">{split.dach.title}</p>
              <p className="text-s text-text-1">{split.dach.lines}</p>
            </div>
          </div>
          <div className="relative h-[220px] overflow-hidden md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[50.4%]"
            data-split="right">
            <Figure id="mat-02" fill showMeta={false} />
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[2px]"
              style={{ background: 'linear-gradient(180deg, rgba(184,188,192,0.05), rgba(184,188,192,0.55), rgba(184,188,192,0.05))' }} />
            <div className="absolute bottom-8 right-[12%] z-[3] flex flex-col gap-2 text-right">
              <p className="t-label">Domäne B</p>
              <p className="t-display-m text-energie-text">{split.energie.title}</p>
              <p className="text-s text-text-1">{split.energie.lines}</p>
            </div>
          </div>
        </div>

        {/* Brückenwort. Der einzige Ort, an dem beide Domänenfarben aufeinandertreffen. */}
        <div className="page relative z-[5] py-9 text-center md:py-0 md:opacity-0" data-bridge-word>
          <p className="t-display-l mx-auto"
            style={{
              background: 'linear-gradient(96deg, var(--dach), var(--energie))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>
            {split.word}
          </p>
          <h2 className="t-display-s mt-4">{split.h2}</h2>
          <p className="mx-auto mt-4 max-w-[56ch] text-text-1">{split.text}</p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Button to="/kontakt/?anliegen=dach-und-pv" variant="quiet" arrow event="bridge_potenzialcheck_click">
              {cta.potenzialcheck}
            </Button>
            <p className="t-spec mx-auto max-w-[52ch]">{potenzialcheckNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
