import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import Visual from './Visual'
import Button from './Button'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7])

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-olive-dark">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Visual tone="sea" motif="coastline" className="h-full w-full" grain />
      </motion.div>
      <motion.div className="absolute inset-0 bg-charcoal" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />

      <div className="container-edit relative flex h-full flex-col justify-center pt-20">
        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow-light"
        >
          Hamburg · Mediterranean Cuisine
        </motion.p>

        <motion.h1
          initial={reduced ? undefined : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="headline mt-5 text-[15vw] leading-[0.98] text-limestone-light sm:text-[9vw] lg:text-[7.5vw]"
        >
          THE SEA
          <br />
          MEETS
          <br />
          THE TABLE.
        </motion.h1>

        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-md text-base text-limestone-light/80 sm:text-lg"
        >
          Seasonal Mediterranean cuisine, open fire and the spirit of the southern coast.
        </motion.p>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/reservation" variant="primary" size="lg">
            Reserve a Table
          </Button>
          <Button to="/menu" variant="ghost-light" size="lg">
            Explore the Menu
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={reduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-limestone-light/70"
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
