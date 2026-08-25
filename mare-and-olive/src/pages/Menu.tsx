import { useState } from 'react'
import { menu } from '../lib/content'
import Reveal, { RevealStagger, staggerItem } from '../components/Reveal'
import { motion } from 'framer-motion'
import Visual from '../components/Visual'

const dietaryLabels: Record<string, string> = {
  V: 'Vegetarian',
  GF: 'Gluten-free',
}

export default function Menu() {
  const [active, setActive] = useState(menu[0].id)

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-16 text-limestone-light sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 opacity-40">
          <Visual tone="night" motif="table" className="h-full w-full" grain />
        </div>
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow-light">Mare &amp; Olive · Hamburg</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline mt-4 text-5xl sm:text-7xl lg:text-8xl">The Menu</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base text-limestone-light/70 sm:text-lg">
              A seasonal Mediterranean menu built around fire, the sea and honest ingredients. Prices in
              euro, service included.
            </p>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Menu categories"
        className="sticky top-20 z-30 border-b border-charcoal/10 bg-limestone-light/95 backdrop-blur-md sm:top-24"
      >
        <div className="container-edit no-scrollbar flex gap-8 overflow-x-auto py-4">
          {menu.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={() => setActive(category.id)}
              className={`shrink-0 text-xs font-medium uppercase tracking-widest2 transition-colors duration-300 ${
                active === category.id ? 'text-terracotta-dark' : 'text-charcoal/50 hover:text-charcoal'
              }`}
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-edit py-20 sm:py-28">
        <div className="space-y-20 sm:space-y-28">
          {menu.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-40">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-16">
                <Reveal>
                  <h2 className="headline text-3xl text-charcoal sm:text-4xl">{category.title}</h2>
                  {category.subtitle && (
                    <p className="mt-2 text-sm uppercase tracking-widest2 text-charcoal/40">
                      {category.subtitle}
                    </p>
                  )}
                </Reveal>

                <RevealStagger className="divide-y divide-charcoal/10">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={staggerItem}
                      className="flex items-start justify-between gap-6 py-5 first:pt-0"
                    >
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{item.name}</h3>
                          {item.dietary?.map((d) => (
                            <span
                              key={d}
                              title={dietaryLabels[d] ?? d}
                              className="rounded-full border border-olive/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-olive"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                        <p className="mt-1.5 text-sm text-charcoal/60">{item.description}</p>
                      </div>
                      <span className="shrink-0 pt-1 font-sans text-base text-terracotta-dark">
                        €{item.price}
                      </span>
                    </motion.div>
                  ))}
                </RevealStagger>
              </div>
            </section>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-charcoal/10 pt-8 text-sm text-charcoal/50">
          <p>
            Please inform your server of any allergies. V = vegetarian, GF = gluten-free. All dishes are
            subject to seasonal availability.
          </p>
        </Reveal>
      </div>
    </>
  )
}
