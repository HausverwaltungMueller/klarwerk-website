import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

export type TimelineStep = { label: string; sublabel?: string }

/**
 * A single editorial device threading the founders' story together —
 * origin, meeting place, destination, year — as one restrained
 * horizontal line rather than another paragraph of prose.
 */
export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="relative">
      <motion.div
        initial={reduced ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-2 hidden h-px w-full origin-left bg-charcoal/15 sm:block"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative pt-5 sm:text-center"
          >
            <span
              className="absolute left-0 top-0 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-terracotta sm:left-1/2 sm:block"
              aria-hidden="true"
            />
            <p className="font-serif text-xl text-charcoal sm:text-2xl">{step.label}</p>
            {step.sublabel && (
              <p className="mt-1 text-xs uppercase tracking-widest2 text-charcoal/45">{step.sublabel}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
