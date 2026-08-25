import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

type PillarWordProps = {
  word: string
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * A chapter marker used at the top of each homepage journey beat.
 * Typography becomes part of the environment here rather than staying
 * static: as the section scrolls into view the word settles from a
 * slightly looser, larger state into its resting size and letter-spacing —
 * a single, restrained motion, not a per-word animation loop.
 */
export default function PillarWord({ word, tone = 'dark', className = '' }: PillarWordProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'start 35%'] })

  const scale = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 1.18, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 0.25, 1])
  const tracking = useTransform(scrollYProgress, [0, 1], [reduced ? '0.02em' : '0.12em', '0.02em'])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.span
        style={{ scale, opacity, letterSpacing: tracking }}
        className={`block origin-left font-serif text-[16vw] leading-[0.85] sm:text-[9vw] lg:text-[7vw] ${
          tone === 'light' ? 'text-limestone-light' : 'text-charcoal'
        }`}
      >
        {word}
      </motion.span>
    </div>
  )
}
