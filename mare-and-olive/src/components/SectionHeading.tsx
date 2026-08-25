import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  headline: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
  headlineClassName?: string
}

export default function SectionHeading({
  eyebrow,
  headline,
  align = 'left',
  tone = 'dark',
  className = '',
  headlineClassName = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <Reveal>
        <p className={tone === 'dark' ? 'eyebrow' : 'eyebrow-light'}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`headline mt-4 text-4xl sm:text-5xl lg:text-6xl ${
            tone === 'dark' ? 'text-charcoal' : 'text-limestone-light'
          } ${headlineClassName}`}
        >
          {headline}
        </h2>
      </Reveal>
    </div>
  )
}
