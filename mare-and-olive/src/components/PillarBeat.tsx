import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Visual from './Visual'
import PillarWord from './PillarWord'
import Reveal from './Reveal'
import type { Pillar } from '../lib/content'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

/**
 * One full-bleed beat in the homepage's Sea / Fire / Night arc: a slow
 * parallax background, a chapter word, a short headline and a single
 * line of body copy — editorial, left-aligned, restrained. Used only for
 * dark-toned pillars (Sea, Fire, Night); Olive and Table get bespoke
 * treatment elsewhere on the page because the brief asks for those two
 * moments to feel structurally different, not more of the same pattern.
 */
export default function PillarBeat({ pillar }: { pillar: Pillar }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -70, reduced ? 0 : 70])

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute -inset-y-20 inset-x-0">
        <Visual
          tone={pillar.tone === 'stone' || pillar.tone === 'olive' ? 'olive' : pillar.tone}
          motif={pillar.motif}
          className="h-full w-full"
          motifClassName="h-2/5 w-2/5 translate-x-16 -translate-y-8"
          motifOpacity={0.3}
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/50" />
      {/* Darken the top/bottom edges so this beat always lands on the dark
          value its SectionBridge promised, regardless of where the
          Visual's own bright spot happens to fall. */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-transparent to-charcoal/70" />

      <div className="container-edit relative flex min-h-[90vh] flex-col justify-center py-24">
        <PillarWord word={pillar.word} tone="light" className="mb-6 max-w-full" />
        <Reveal>
          <p className="eyebrow-light">{pillar.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="headline mt-4 max-w-2xl text-3xl text-limestone-light sm:text-5xl">
            {pillar.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-md text-base leading-relaxed text-limestone-light/75 sm:text-lg">
            {pillar.body}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
