import Reveal from '../components/Reveal'
import Visual from '../components/Visual'
import VisualBreak from '../components/VisualBreak'
import { founders } from '../lib/content'

const paragraphs = founders.story.split('\n\n')

export default function Story() {
  return (
    <>
      <section className="relative overflow-hidden bg-olive-dark pt-32 pb-20 text-limestone-light sm:pt-44 sm:pb-28">
        <div className="absolute inset-0 opacity-30">
          <Visual tone="olive" motif="olive-branch" className="h-full w-full" grain />
        </div>
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow-light">Our Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline mt-4 text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
              A little piece
              <br />
              of the south.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-edit py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal direction="up" y={40} className="aspect-[3/4] lg:sticky lg:top-32 lg:h-fit">
            <Visual tone="sand" motif="leaf" className="h-full w-full" label={founders.names} sublabel={`Founders, est. ${founders.year}`} />
          </Reveal>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-xl text-lg leading-relaxed text-charcoal/75 sm:text-xl">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VisualBreak tone="terracotta" motif="flame" lines={['SIMPLE INGREDIENTS.', 'FIRE. SEA. OLIVE OIL. TIME.']} />

      <section className="container-edit py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {[
            {
              title: 'Seasonal, always',
              body: 'Menus shift with what the markets and the sea provide, rather than a fixed set of recipes.',
              motif: 'citrus' as const,
              tone: 'sand' as const,
            },
            {
              title: 'Fire over technique',
              body: 'Most dishes pass over charcoal. Simplicity is the discipline, not the shortcut.',
              motif: 'flame' as const,
              tone: 'terracotta' as const,
            },
            {
              title: 'A table for sharing',
              body: 'Plates are built to be passed around — the Mediterranean way of eating together.',
              motif: 'table' as const,
              tone: 'olive' as const,
            },
          ].map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="mb-6 aspect-square w-16">
                <Visual tone={value.tone} motif={value.motif} className="h-full w-full rounded-full" grain={false} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/65">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
