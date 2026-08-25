import { useRef } from 'react'
import type { ReactNode, PointerEvent as ReactPointerEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../lib/useReducedMotion'

type LivingVisualProps = {
  children: ReactNode
  className?: string
  tilt?: boolean
}

/**
 * Wraps a Visual panel with two very restrained, physical-feeling motions:
 *
 * 1. An extremely slow ambient breathing scale (~22s cycle) — the kind of
 *    movement you'd almost have to stare at to confirm you saw it.
 * 2. An optional, gentle pointer-driven tilt (a few degrees at most,
 *    spring-damped) standing in for the brief's "object that responds
 *    subtly to pointer movement" — done in CSS transforms rather than a
 *    WebGL scene, since a few degrees of rotateX/rotateY reads the same
 *    to a viewer without the added weight and lifecycle risk of Three.js.
 *
 * Both are skipped entirely under prefers-reduced-motion.
 */
export default function LivingVisual({ children, className = '', tilt = true }: LivingVisualProps) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(rawY, { stiffness: 60, damping: 20 })
  const rotateY = useSpring(rawX, { stiffness: 60, damping: 20 })

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduced || !tilt || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    const px = (event.clientX - bounds.left) / bounds.width - 0.5
    const py = (event.clientY - bounds.top) / bounds.height - 0.5
    rawX.set(px * 6)
    rawY.set(py * -6)
  }

  const handlePointerLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div
      ref={ref}
      className={`[perspective:1200px] ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        style={reduced || !tilt ? undefined : { rotateX, rotateY }}
        animate={reduced ? undefined : { scale: [1, 1.025, 1] }}
        transition={reduced ? undefined : { duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}
