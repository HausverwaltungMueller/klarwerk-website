import type { Dish } from '../lib/content'
import type { MotifName, Tone } from './Visual'
import Visual from './Visual'
import Reveal from './Reveal'
import { ArrowUpRight } from 'lucide-react'

type DishCardProps = {
  dish: Dish
  motif: MotifName
  tone: Tone
  delay?: number
}

export default function DishCard({ dish, motif, tone, delay = 0 }: DishCardProps) {
  return (
    <Reveal delay={delay} className="group">
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-elegant group-hover:scale-[1.06]">
          <Visual tone={tone} motif={motif} className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="transition-transform duration-500 ease-elegant group-hover:translate-x-1">
          <h3 className="font-serif text-2xl text-charcoal">{dish.name}</h3>
          <p className="mt-1.5 text-sm text-charcoal/60">{dish.description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          <span className="font-sans text-sm text-terracotta-dark">€{dish.price}</span>
          <ArrowUpRight
            className="h-4 w-4 text-charcoal/0 transition-all duration-500 ease-elegant group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta-dark"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </Reveal>
  )
}
