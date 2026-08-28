import { Icon } from '@/design/Icon';
import { presets, presetLabel } from './steps';
import type { CtaPreset } from '@/types';

/**
 * Schritt 1 der Projektanfrage: Mehrfachauswahl des Anliegens.
 * Eigene Datei, damit `ProjectInquiry` unter der Zeilengrenze aus docs/06, Abschnitt 21 bleibt.
 */
export function AnliegenChoice({
  gewaehlt,
  toggle,
}: {
  gewaehlt: CtaPreset[];
  toggle: (p: CtaPreset) => void;
}) {
  return (
    <div className="grid gap-px bg-hair sm:grid-cols-2">
      {presets.map((p) => {
        const on = gewaehlt.includes(p);
        return (
          <button
            key={p} type="button" onClick={() => toggle(p)} aria-pressed={on}
            className={`flex min-h-[64px] items-center justify-between gap-3 border-l-2 bg-surface-1 px-4 text-left transition-colors duration-1 ease-out hover:bg-surface-2 ${
              on ? 'border-l-energie bg-surface-2' : 'border-l-transparent'
            }`}
          >
            <span className="text-base">{presetLabel(p)}</span>
            {on ? <Icon name="check" size={18} className="text-energie-text" /> : null}
          </button>
        );
      })}
    </div>
  );
}
