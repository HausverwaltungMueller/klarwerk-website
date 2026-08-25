// Hand-drawn-style single-line motifs used across decorative Visual panels.
// Kept intentionally simple and editorial rather than literal photography.

type MotifProps = {
  className?: string
  style?: React.CSSProperties
}

const base = {
  viewBox: '0 0 200 200',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function Octopus({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M100 55c-22 0-34 16-34 34 0 12 6 20 14 26" />
      <path d="M66 115c-10 14-9 34 4 46" />
      <path d="M70 118c-2 16 4 32 18 40" />
      <path d="M80 122c3 15 12 26 24 30" />
      <path d="M100 115c22 0 34 16 34 34 0 12-6 20-14 26" />
      <path d="M134 115c10 14 9 34-4 46" />
      <path d="M130 118c2 16-4 32-18 40" />
      <path d="M120 122c-3 15-12 26-24 30" />
      <circle cx="88" cy="80" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="112" cy="80" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function OliveBranch({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M30 150c40-60 90-95 145-115" />
      <ellipse cx="75" cy="118" rx="14" ry="7" transform="rotate(-35 75 118)" />
      <ellipse cx="95" cy="100" rx="14" ry="7" transform="rotate(-32 95 100)" />
      <ellipse cx="115" cy="83" rx="14" ry="7" transform="rotate(-30 115 83)" />
      <ellipse cx="135" cy="67" rx="13" ry="6.5" transform="rotate(-28 135 67)" />
      <circle cx="60" cy="132" r="6" />
      <circle cx="70" cy="140" r="5" />
      <circle cx="52" cy="142" r="4.5" />
    </svg>
  )
}

export function Wave({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M10 90c20-18 40-18 60 0s40 18 60 0 40-18 60 0" />
      <path d="M10 120c20-18 40-18 60 0s40 18 60 0 40-18 60 0" />
      <path d="M10 150c20-18 40-18 60 0s40 18 60 0 40-18 60 0" />
    </svg>
  )
}

export function Flame({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M100 30c14 24 30 40 30 66a30 30 0 0 1-60 0c0-10 4-16 8-22-1 10 4 16 10 16 8 0 10-8 8-16-4-14-2-30 4-44Z" />
      <path d="M70 150h60" />
      <path d="M60 168h80" />
    </svg>
  )
}

export function Citrus({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <circle cx="100" cy="100" r="62" />
      <path d="M100 38v124M45 70l110 60M45 130l110-60" />
      <circle cx="100" cy="100" r="20" />
    </svg>
  )
}

export function Fish({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M25 110c30-40 90-52 140-30-14 8-22 18-22 30s8 22 22 30c-50 22-110 10-140-30Z" />
      <path d="M120 88c8-10 20-16 35-18-4 12-4 24 0 40-15-2-27-8-35-18Z" />
      <circle cx="55" cy="102" r="2.6" fill="currentColor" stroke="none" />
      <path d="M45 110c14 4 28 4 42 0" />
    </svg>
  )
}

export function WineGlass({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M72 35h56l-6 46a22 22 0 0 1-44 0Z" />
      <path d="M100 103v50" />
      <path d="M76 168h48" />
      <path d="M74 45h52" />
    </svg>
  )
}

export function Coastline({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M10 130c30-10 45-40 70-42s34 22 60 18 30-26 50-20" />
      <path d="M10 150h180" />
      <circle cx="150" cy="55" r="16" />
    </svg>
  )
}

export function PastaSwirl({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M100 170c-30 0-45-20-45-42a35 35 0 0 1 70 0c0 14-10 26-24 26a17 17 0 0 1-17-17c0-6 4-11 10-11" />
      <ellipse cx="100" cy="172" rx="66" ry="10" />
    </svg>
  )
}

export function Candle({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M100 40c6 10 10 16 10 24a10 10 0 0 1-20 0c0-8 4-14 10-24Z" />
      <path d="M80 78h40l-4 96h-32Z" />
      <path d="M60 174h80" />
    </svg>
  )
}

export function Leaf({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <path d="M40 160c0-70 40-110 110-120-10 70-40 110-110 120Z" />
      <path d="M50 155c30-30 55-55 90-100" />
    </svg>
  )
}

export function TableSetting({ className, style }: MotifProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden="true">
      <circle cx="100" cy="100" r="46" />
      <path d="M35 60v80M35 60c-7 0-11 6-11 12M35 100c-7 0-11-6-11-12" />
      <path d="M165 60v100M165 60c8 0 12 8 12 18s-4 18-12 18" />
    </svg>
  )
}
