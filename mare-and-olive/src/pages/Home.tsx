import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import Visual, { toneEdgeColor } from '../components/Visual'
import type { MotifName, Tone } from '../components/Visual'
import PillarBeat from '../components/PillarBeat'
import PillarWord from '../components/PillarWord'
import SectionBridge from '../components/SectionBridge'
import LivingVisual from '../components/LivingVisual'
import Button from '../components/Button'
import { pillars, signatureDishes, brand, menu } from '../lib/content'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

const [sea, fire, olive, table, night] = pillars

const DISH_VISUAL: Record<string, { tone: Tone; motif: MotifName }> = {
  octopus: { tone: 'terracotta', motif: 'octopus' },
  pasta: { tone: 'sand', motif: 'citrus' },
  seabass: { tone: 'sea', motif: 'fish' },
  burrata: { tone: 'olive', motif: 'leaf' },
}

// Rendered edge colors driving the SectionBridge melts between beats.
// Approximate rather than exact — the goal is a felt mood-shift between
// sections, not a pixel-perfect photographic stitch.
const EDGE = {
  charcoal: '#211E1A',
  sea: toneEdgeColor.sea,
  fire: toneEdgeColor.terracotta,
  olive: toneEdgeColor.olive,
  stone: '#E9E1D2',
  limestone: '#FAF7F1',
  night: toneEdgeColor.night,
  oliveDark: '#252D1D',
}

export default function Home() {
  return (
    <>
      <Hero />

      <SectionBridge from={EDGE.charcoal} to={EDGE.sea} />
      <PillarBeat pillar={sea} />

      <SectionBridge from={EDGE.sea} to={EDGE.fire} />
      <PillarBeat pillar={fire} />

      <SectionBridge from={EDGE.fire} to={EDGE.olive} />
      <OliveMoment />

      <SectionBridge from={EDGE.olive} to={EDGE.stone} height="h-20 sm:h-32" />
      <TableMoment />

      <SectionBridge from={EDGE.stone} to={EDGE.limestone} />
      <FoodMoment />

      <SectionBridge from={EDGE.limestone} to={EDGE.night} height="h-20 sm:h-32" />
      <PillarBeat pillar={night} />

      <SectionBridge from={EDGE.night} to={EDGE.oliveDark} />
      <MenuPreview />

      <FinalCTA />
    </>
  )
}

/** Signature Moment 04 — Olive. A single interactive feature panel rather than a static photo. */
function OliveMoment() {
  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: EDGE.olive }}>
      <div className="container-edit grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <LivingVisual className="order-1 aspect-[4/5] lg:order-1">
          <Visual tone="olive" motif="olive-branch" className="h-full w-full" sheen label="Cold-Pressed, Split" />
        </LivingVisual>
        <div className="order-2 lg:order-2">
          <PillarWord word={olive.word} tone="light" className="max-w-full" />
          <Reveal>
            <p className="eyebrow-light mt-2">{olive.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline mt-4 text-3xl text-limestone-light sm:text-4xl">{olive.headline}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-limestone-light/75 sm:text-lg">
              {olive.body}
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8">
            <Button to="/story" variant="ghost-light">
              Our Story
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Signature Moment 06 — The Table. A layered, parallaxed still life instead of a flat photo. */
function TableMoment() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yBack = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -20, reduced ? 0 : 20])
  const yMid = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -55, reduced ? 0 : 55])
  const yFront = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -95, reduced ? 0 : 95])

  return (
    <section ref={ref} className="py-24 sm:py-32" style={{ backgroundColor: EDGE.stone }}>
      <div className="container-edit">
        <PillarWord word={table.word} className="max-w-full" />
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] lg:order-2">
            <motion.div style={{ y: yBack }} className="absolute inset-0">
              <Visual tone="stone" motif="table" className="h-full w-full" motifOpacity={0.6} />
            </motion.div>
            <motion.div style={{ y: yMid }} className="absolute -left-6 top-10 h-28 w-28 shadow-xl sm:h-36 sm:w-36">
              <Visual tone="night" motif="candle" className="h-full w-full" grain={false} />
            </motion.div>
            <motion.div
              style={{ y: yFront }}
              className="absolute -bottom-8 -right-6 h-32 w-32 shadow-2xl sm:h-44 sm:w-44"
            >
              <Visual tone="terracotta" motif="wine" className="h-full w-full" sheen grain={false} />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center lg:order-1">
            <Reveal>
              <p className="eyebrow">{table.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="headline mt-4 text-3xl text-charcoal sm:text-4xl">{table.headline}</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
                {table.body}
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8">
              <Button to="/restaurant" variant="ghost">
                Discover the Space
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Signature Moment 07 — Food. Editorial composition, not a four-card grid. */
function FoodMoment() {
  const [feature, ...rest] = signatureDishes

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: EDGE.limestone }}>
      <div className="container-edit">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">From the Kitchen</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="headline mt-4 text-4xl text-charcoal sm:text-5xl">A table made for sharing.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button to="/menu" variant="ghost">
              View Full Menu
            </Button>
          </Reveal>
        </div>

        {/* Feature dish: large image with overlapping typography, unusual crop. */}
        <Reveal className="relative mt-16 aspect-[16/10] sm:aspect-[16/8]">
          <Visual tone={DISH_VISUAL[feature.image].tone} motif={DISH_VISUAL[feature.image].motif} className="h-full w-full" label={feature.name} />
          <div className="absolute -bottom-6 left-4 max-w-xs bg-limestone-light p-5 shadow-xl sm:left-10 sm:p-7">
            <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">{feature.name}</h3>
            <p className="mt-2 text-sm text-charcoal/60">{feature.description}</p>
            <span className="mt-2 block font-sans text-sm text-terracotta-dark">€{feature.price}</span>
          </div>
        </Reveal>

        {/* Remaining dishes: asymmetric pairing, not a uniform grid. */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-8">
          <Reveal delay={0.06} className="sm:col-span-3">
            <div className="aspect-[16/11]">
              <Visual tone={DISH_VISUAL[rest[0].image].tone} motif={DISH_VISUAL[rest[0].image].motif} className="h-full w-full" />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl text-charcoal">{rest[0].name}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{rest[0].description}</p>
              </div>
              <span className="shrink-0 font-sans text-sm text-terracotta-dark">€{rest[0].price}</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-8 sm:col-span-2">
            {rest.slice(1).map((dish) => (
              <div key={dish.name} className="flex items-start gap-4">
                <div className="aspect-square w-20 shrink-0 sm:w-24">
                  <Visual
                    tone={DISH_VISUAL[dish.image].tone}
                    motif={DISH_VISUAL[dish.image].motif}
                    className="h-full w-full"
                    grain={false}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal">{dish.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/60">{dish.description}</p>
                  <span className="mt-1 block font-sans text-sm text-terracotta-dark">€{dish.price}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function MenuPreview() {
  return (
    <section className="py-24 text-limestone-light sm:py-32" style={{ backgroundColor: EDGE.oliveDark }}>
      <div className="container-edit">
        <Reveal>
          <p className="eyebrow-light">On the Menu</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="headline mt-4 text-4xl sm:text-5xl">
            The menu changes
            <br />
            with the season.
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {['antipasti', 'pasta', 'pesce', 'carne'].map((id) => {
            const category = menu.find((c) => c.id === id)
            if (!category) return null
            const item = category.items[0]
            return (
              <div key={category.id}>
                <h3 className="eyebrow-light">{category.title}</h3>
                <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-limestone-light/15 pb-4">
                  <div>
                    <p className="font-serif text-xl">{item.name}</p>
                    <p className="mt-1 text-sm text-limestone-light/55">{item.description}</p>
                  </div>
                  <span className="shrink-0 font-sans text-sm text-terracotta-light">€{item.price}</span>
                </div>
              </div>
            )
          })}
        </Reveal>

        <Reveal delay={0.24} className="mt-14">
          <Button to="/menu" variant="ghost-light" size="lg">
            View Full Menu
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

/** Signature Moment 09 — Final CTA. The closing frame: no unnecessary content. */
function FinalCTA() {
  return (
    <section className="py-28 text-center text-limestone-light sm:py-40" style={{ backgroundColor: EDGE.charcoal }}>
      <div className="container-edit">
        <Reveal>
          <p className="font-serif text-lg tracking-wide text-limestone-light/70">{brand.name}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="headline mt-6 text-5xl leading-[0.96] sm:text-7xl lg:text-8xl">
            COME FOR
            <br />
            DINNER.
          </h2>
        </Reveal>
        <Reveal delay={0.18} className="mt-10 flex justify-center">
          <Button to="/reservation" size="lg">
            Reserve a Table
          </Button>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mt-10 text-sm uppercase tracking-widest2 text-limestone-light/45">
            {brand.city} — {brand.address.line1}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
