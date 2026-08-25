import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Visual from '../components/Visual'
import VisualBreak from '../components/VisualBreak'
import DishCard from '../components/DishCard'
import Button from '../components/Button'
import { signatureDishes, philosophy, menu } from '../lib/content'
import type { MotifName, Tone } from '../components/Visual'

const dishMotifs: { motif: MotifName; tone: Tone }[] = [
  { motif: 'octopus', tone: 'terracotta' },
  { motif: 'citrus', tone: 'sand' },
  { motif: 'fish', tone: 'sea' },
  { motif: 'leaf', tone: 'olive' },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Philosophy */}
      <section className="container-edit py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading eyebrow={philosophy.eyebrow} headline={philosophy.headline} />
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg">
                {philosophy.body}
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8">
              <Button to="/story" variant="ghost">
                Our Story
              </Button>
            </Reveal>
          </div>
          <Reveal direction="up" y={40} className="order-1 aspect-[4/5] lg:order-2">
            <Visual tone="olive" motif="olive-branch" className="h-full w-full" label="Olive Grove" />
          </Reveal>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="bg-limestone-dark/40 py-24 sm:py-32">
        <div className="container-edit">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="From the Kitchen" headline="A table made for sharing." />
            <Reveal delay={0.1}>
              <Button to="/menu" variant="ghost">
                View Full Menu
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((dish, i) => (
              <DishCard
                key={dish.name}
                dish={dish}
                motif={dishMotifs[i].motif}
                tone={dishMotifs[i].tone}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <VisualBreak tone="sea" motif="wave" lines={['FROM THE MEDITERRANEAN', 'TO HAMBURG.']} />

      {/* Restaurant teaser */}
      <section className="container-edit py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="up" y={40} className="aspect-[4/5]">
            <Visual tone="night" motif="candle" className="h-full w-full" label="The Dining Room" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The Restaurant"
              headline="An evening by the sea — without leaving the city."
              headlineClassName="text-4xl sm:text-5xl"
            />
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg">
                Warm limestone, dark oak, handmade ceramics and candlelight create a space that feels
                somewhere between a coastal trattoria and a modern Mediterranean home.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8">
              <Button to="/restaurant" variant="ghost">
                Discover the Space
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section className="bg-olive-dark py-24 text-limestone-light sm:py-32">
        <div className="container-edit">
          <SectionHeading
            eyebrow="On the Menu"
            headline={
              <>
                The menu changes
                <br />
                with the season.
              </>
            }
            tone="light"
          />

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {menu
              .filter((c) => c.id !== 'vini')
              .map((category, i) => (
                <Reveal key={category.id} delay={i * 0.06}>
                  <h3 className="eyebrow-light">{category.title}</h3>
                  <ul className="mt-4 space-y-4">
                    {category.items.slice(0, 1).map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-limestone-light/15 pb-4">
                        <div>
                          <p className="font-serif text-xl">{item.name}</p>
                          <p className="mt-1 text-sm text-limestone-light/55">{item.description}</p>
                        </div>
                        <span className="shrink-0 font-sans text-sm text-terracotta-light">€{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
          </div>

          <Reveal delay={0.3} className="mt-14">
            <Button to="/menu" variant="ghost-light" size="lg">
              View Full Menu
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative overflow-hidden bg-olive py-28 text-center text-limestone-light sm:py-36">
        <div className="container-edit relative">
          <Reveal>
            <h2 className="headline text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
              YOUR TABLE
              <br />
              IS WAITING.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-md text-base text-limestone-light/75 sm:text-lg">
              Join us for dinner, drinks and a little taste of the Mediterranean.
            </p>
          </Reveal>
          <Reveal delay={0.22} className="mt-10 flex justify-center">
            <Button to="/reservation" size="lg">
              Reserve a Table
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
