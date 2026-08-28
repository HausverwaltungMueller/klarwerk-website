/**
 * Eigener Zeichensatz im Stil einer Bauzeichnung, keine Icon-Bibliothek.
 * 1,25px Strich auf 24px Flaeche, keine Fuellung, butt und miter.
 * docs/02, Abschnitt 9.
 */
export type IconName =
  | 'arrow' | 'external' | 'plus' | 'minus' | 'close' | 'check'
  | 'phone' | 'mail' | 'place' | 'clock' | 'document' | 'upload'
  | 'angle' | 'layers';

const paths: Record<IconName, string> = {
  arrow: 'M3 12h16M13 6l6 6-6 6',
  external: 'M8 16 18 6M11 6h7v7',
  plus: 'M12 4v16M4 12h16',
  minus: 'M4 12h16',
  close: 'M5 5l14 14M19 5L5 19',
  check: 'M4 13l5 5L20 7',
  phone: 'M6 3h4l2 5-2.5 1.5a10 10 0 0 0 5 5L16 12l5 2v4h-3A15 15 0 0 1 3 6V3z',
  mail: 'M3 6h18v12H3zM3 6l9 7 9-7',
  place: 'M12 2v4M12 18v4M2 12h4M18 12h4',
  clock: 'M12 7v5l4 2',
  document: 'M6 3h9l3 3v15H6zM15 3v3h3M9 12h6M9 16h6',
  upload: 'M12 17V4M7 9l5-5 5 5M4 20h16',
  angle: 'M3 19h18L3 5z',
  layers: 'M3 8h18M3 12h18M3 16h18M3 20h18',
};

const circles: Partial<Record<IconName, { cx: number; cy: number; r: number }>> = {
  place: { cx: 12, cy: 12, r: 6 },
  clock: { cx: 12, cy: 12, r: 8 },
};

type Props = { name: IconName; size?: number; className?: string };

export function Icon({ name, size = 20, className }: Props) {
  const c = circles[name];
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.25} strokeLinecap="butt" strokeLinejoin="miter"
      aria-hidden="true" focusable="false" className={className}
    >
      {c ? <circle cx={c.cx} cy={c.cy} r={c.r} /> : null}
      <path d={paths[name]} />
    </svg>
  );
}
