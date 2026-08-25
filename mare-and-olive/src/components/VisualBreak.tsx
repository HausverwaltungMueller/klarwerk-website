import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Visual from './Visual'
import type { MotifName, Tone } from './Visual'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

type VisualBreakProps = {
  tone: Tone
  motif: MotifName
  lines: string[]
}

export default function VisualBreak({ tone, motif, lines }: VisualBreakProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : -60, reduced ? 0 : 60])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute -inset-y-16 inset-x-0">
        <Visual
          tone={tone}
          motif={motif}
          className="h-full w-full"
          motifClassName="h-1/3 w-1/3 -translate-y-20"
          motifOpacity={0.35}
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/45" />
      <div className="container-edit relative flex h-full items-center justify-center text-center">
        <h2 className="headline text-4xl leading-[1.05] text-limestone-light sm:text-6xl lg:text-7xl">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
