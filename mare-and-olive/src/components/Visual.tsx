import {
  Octopus,
  OliveBranch,
  Wave,
  Flame,
  Citrus,
  Fish,
  WineGlass,
  Coastline,
  PastaSwirl,
  Candle,
  Leaf,
  TableSetting,
} from './motifs'

export type MotifName =
  | 'octopus'
  | 'olive-branch'
  | 'wave'
  | 'flame'
  | 'citrus'
  | 'fish'
  | 'wine'
  | 'coastline'
  | 'pasta'
  | 'candle'
  | 'leaf'
  | 'table'

export type Tone = 'olive' | 'terracotta' | 'stone' | 'night' | 'sand' | 'sea'

const motifs: Record<MotifName, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  octopus: Octopus,
  'olive-branch': OliveBranch,
  wave: Wave,
  flame: Flame,
  citrus: Citrus,
  fish: Fish,
  wine: WineGlass,
  coastline: Coastline,
  pasta: PastaSwirl,
  candle: Candle,
  leaf: Leaf,
  table: TableSetting,
}

// A small, pre-baked noise tile reused across every panel. Baking the
// turbulence into a tiny (96x96) data URI once — instead of asking each
// panel to recompute an SVG feTurbulence filter across its own full
// bounding box — keeps grain cheap to paint even on a long, image-dense
// page.
const NOISE_TILE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const gradients: Record<Tone, { from: string; to: string; motif: string; wash: string }> = {
  olive: { from: '#3A4531', to: '#1E241A', motif: '#EFE9D8', wash: '#252D1D' },
  terracotta: { from: '#C1592B', to: '#7C381A', motif: '#F7ECDD', wash: '#93411D' },
  stone: { from: '#E9E1D2', to: '#D8CBAA', motif: '#3A4531', wash: '#C1592B' },
  night: { from: '#211E1A', to: '#12100D', motif: '#DED0B6', wash: '#2E4A52' },
  sand: { from: '#EFE7D6', to: '#DED0B6', motif: '#93411D', wash: '#3A4531' },
  sea: { from: '#2E4A52', to: '#17262B', motif: '#F4EFE6', wash: '#C1592B' },
}

// The darker "to" anchor of each tone's gradient, exposed so pages can
// build a SectionBridge that melts into a Visual panel's actual edge
// color rather than an approximated one.
export const toneEdgeColor: Record<Tone, string> = Object.fromEntries(
  Object.entries(gradients).map(([tone, g]) => [tone, g.to]),
) as Record<Tone, string>

type VisualProps = {
  tone: Tone
  motif: MotifName
  label?: string
  sublabel?: string
  className?: string
  motifClassName?: string
  motifOpacity?: number
  grain?: boolean
  /** A soft diagonal highlight standing in for a fluid/glass/ceramic sheen — used sparingly, for materiality (olive oil, glass, wet ceramic), never as a default. */
  sheen?: boolean
}

/**
 * Visual — an art-directed generated panel standing in for photography.
 * The site avoids external image dependencies entirely (no third-party
 * photo CDNs) so nothing can ever render as a broken image; instead each
 * "photograph" is a tonal gradient with a single-line editorial motif,
 * consistent with the restrained Mediterranean palette.
 */
export default function Visual({
  tone,
  motif,
  label,
  sublabel,
  className = '',
  motifClassName = '',
  motifOpacity = 0.85,
  grain = true,
  sheen = false,
}: VisualProps) {
  const Motif = motifs[motif]
  const g = gradients[tone]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: g.from,
        backgroundImage: `radial-gradient(ellipse 90% 90% at 30% 20%, ${g.from} 0%, ${g.to} 100%)`,
      }}
      role="img"
      aria-label={label ? `${label}${sublabel ? ' — ' + sublabel : ''}` : 'Decorative Mediterranean motif'}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${g.wash}33 0%, transparent 55%)`,
        }}
      />

      {grain && (
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{ backgroundImage: NOISE_TILE, backgroundRepeat: 'repeat', backgroundSize: '96px 96px' }}
          aria-hidden="true"
        />
      )}

      {sheen && (
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{ background: 'linear-gradient(115deg, transparent 28%, #FFFFFF 46%, transparent 62%)' }}
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <Motif
          className={`h-1/2 w-1/2 ${motifClassName}`}
          style={{ color: g.motif, opacity: motifOpacity }}
        />
      </div>

      {(label || sublabel) && (
        <div className="absolute bottom-0 left-0 p-5 sm:p-7">
          {label && (
            <p
              className="font-serif text-lg sm:text-xl tracking-wide"
              style={{ color: g.motif }}
            >
              {label}
            </p>
          )}
          {sublabel && (
            <p
              className="mt-1 text-[11px] uppercase tracking-widest2 font-medium opacity-70"
              style={{ color: g.motif }}
            >
              {sublabel}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
