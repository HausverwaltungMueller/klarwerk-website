import type { ReactNode } from 'react';

type Rhythm = 'tight' | 'normal' | 'cesura';
type Bridge = 'satz' | 'material' | 'frage' | 'flaeche';

const rhythmClass: Record<Rhythm, string> = {
  tight: 'py-9 md:py-8',
  normal: 'py-9 md:py-10',
  cesura: 'py-10 md:py-11',
};

type Props = {
  id: string;
  children: ReactNode;
  /** Nacht ist der Standard. Der Wechsel laeuft ueber data-surface, nicht ueber Komponentenfarben. */
  surface?: 'night' | 'day';
  /** Sichtbares Label. Inhaltlich, nie ein Aktname. docs/05, W01. */
  label?: string;
  rhythm?: Rhythm;
  /** Naht zur naechsten Sektion, dient der Dokumentation im DOM. docs/05, W02. */
  bridge?: Bridge;
  /** Randspalte mit Label ab md. */
  rail?: boolean;
  className?: string;
  texture?: 'tile' | 'glass' | 'wood';
  as?: 'section' | 'div';
  /** In Sektionen ohne eigene grosse Ueberschrift traegt das Label die h2,
   *  sonst entstuende ein Sprung von h1 auf h3. Im Browsertest aufgefallen. */
  labelAs?: 'p' | 'h2';
};

export function Section({
  id, children, surface = 'night', label, rhythm = 'normal',
  bridge, rail = true, className = '', texture, as = 'section', labelAs = 'p',
}: Props) {
  const Tag = as;
  const LabelTag = labelAs;
  const tex = texture ? `tex-${texture} relative` : '';
  return (
    <Tag
      id={id}
      data-surface={surface === 'day' ? 'day' : undefined}
      data-bridge={bridge}
      className={`${rhythmClass[rhythm]} ${tex} ${surface === 'day' ? 'bg-surface-0 text-text-0' : ''} ${className}`}
    >
      <div className="page">
        {rail ? (
          <div className="md:grid md:grid-cols-[var(--rail)_1fr] md:gap-x-7">
            <div className="mb-5 md:mb-0">
              {label ? <LabelTag className="t-label md:sticky md:top-[104px]">{label}</LabelTag> : null}
            </div>
            <div className="min-w-0-children min-w-0">{children}</div>
          </div>
        ) : (
          <div className="min-w-0-children min-w-0">
            {label ? <LabelTag className="t-label mb-5">{label}</LabelTag> : null}
            {children}
          </div>
        )}
      </div>
    </Tag>
  );
}
