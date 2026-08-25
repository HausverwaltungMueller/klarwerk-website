import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Visual from './Visual'
import { opening, brand } from '../lib/content'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

/**
 * Signature Moment 01 — The Opening.
 *
 * Deliberately quiet: a dark field, a small coordinate line, the
 * wordmark, and nothing else fighting for attention. The brief is
 * explicit that this first screen should not be overwhelmed with
 * animation — so beyond a single gentle fade-in there is no scroll
 * choreography here. That drama is saved for the Sea beat that follows.
 */
export default function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative flex h-[100vh] min-h-[560px] w-full items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 opacity-[0.18]">
        <Visual tone="night" motif="coastline" className="h-full w-full" motifOpacity={0.4} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/10 to-charcoal" />

      <div className="container-edit relative">
        <motion.p
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow-light"
        >
          {opening.coordinates}
        </motion.p>

        <motion.h1
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="headline mt-6 text-[16vw] leading-[0.92] text-limestone-light sm:text-[9vw] lg:text-[7.5vw]"
        >
          MARE
          <br />
          <span className="text-terracotta-light">&amp;</span> OLIVE
        </motion.h1>

        <motion.p
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-7 text-sm uppercase tracking-widest2 text-limestone-light/50"
        >
          {brand.tagline}
        </motion.p>
      </div>

      <motion.div
        initial={reduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-limestone-light/60"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </motion.div>
    </section>
  )
}
