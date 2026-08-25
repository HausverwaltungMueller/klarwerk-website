import Visual from './Visual'
import type { MotifName, Tone } from './Visual'
import Reveal from './Reveal'

export type GalleryTile = {
  tone: Tone
  motif: MotifName
  label: string
  sublabel?: string
  span: 'lg' | 'md' | 'sm'
}

const spanClasses: Record<GalleryTile['span'], string> = {
  lg: 'sm:col-span-4 aspect-[4/5] sm:aspect-[16/11]',
  md: 'sm:col-span-3 aspect-[4/5]',
  sm: 'sm:col-span-2 aspect-[4/5]',
}

export default function Gallery({ tiles }: { tiles: GalleryTile[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
      {tiles.map((tile, i) => (
        <Reveal key={tile.label} delay={i * 0.06} className={spanClasses[tile.span]}>
          <div className="group h-full w-full overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 ease-elegant group-hover:scale-[1.04]">
              <Visual
                tone={tile.tone}
                motif={tile.motif}
                label={tile.label}
                sublabel={tile.sublabel}
                className="h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
