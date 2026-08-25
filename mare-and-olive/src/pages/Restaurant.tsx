import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Visual from '../components/Visual'
import Gallery from '../components/Gallery'
import type { GalleryTile } from '../components/Gallery'
import type { MotifName, Tone } from '../components/Visual'

type Chapter = {
  eyebrow: string
  title: string
  body: string
  tone: Tone
  motif: MotifName
  reverse?: boolean
}

const chapters: Chapter[] = [
  {
    eyebrow: 'Interior',
    title: 'A room built from warm materials.',
    body: 'Limestone walls, dark oak tables and hand-thrown ceramics set a tone that is quiet rather than loud. Low, warm lighting carries the room into evening.',
    tone: 'sand',
    motif: 'table',
  },
  {
    eyebrow: 'Terrace',
    title: 'Dinner in the open air.',
    body: 'On warmer evenings, the terrace opens onto the harbour. Olive trees in terracotta pots and linen-draped tables bring a little of the south to HafenCity.',
    tone: 'olive',
    motif: 'olive-branch',
    reverse: true,
  },
  {
    eyebrow: 'Bar',
    title: 'Aperitivo, done properly.',
    body: 'A marble bar anchors the front room, pouring natural wines, classic aperitivi and a short list of house cocktails built around Mediterranean citrus and herbs.',
    tone: 'terracotta',
    motif: 'wine',
  },
  {
    eyebrow: 'Kitchen & Chef',
    title: 'Cooking over an open flame.',
    body: 'At the heart of the kitchen sits a charcoal grill, tended through service by our head chef. Little is fried; almost everything passes over fire.',
    tone: 'night',
    motif: 'flame',
    reverse: true,
  },
  {
    eyebrow: 'Private Dining',
    title: 'A table for your own occasion.',
    body: 'A smaller room off the main dining area seats up to twelve guests for celebrations, tastings and long dinners that run late.',
    tone: 'stone',
    motif: 'candle',
  },
  {
    eyebrow: 'Wine Cellar',
    title: 'Natural wines from the coast.',
    body: 'Our cellar favours small, low-intervention producers from Italy, Greece, Croatia and southern France — wines chosen to sit alongside the food, not compete with it.',
    tone: 'sea',
    motif: 'wave',
    reverse: true,
  },
]

const detailTiles: GalleryTile[] = [
  { tone: 'terracotta', motif: 'citrus', label: 'Citrus & Herbs', span: 'md' },
  { tone: 'sand', motif: 'leaf', label: 'Table Details', span: 'sm' },
  { tone: 'olive', motif: 'olive-branch', label: 'Olive Grove Terrace', span: 'sm' },
  { tone: 'night', motif: 'candle', label: 'Evening Light', span: 'md' },
]

export default function Restaurant() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-20 text-limestone-light sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 opacity-35">
          <Visual tone="stone" motif="table" className="h-full w-full" grain />
        </div>
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow-light">The Restaurant</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline mt-4 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">
              An evening by the sea — without leaving the city.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="container-edit divide-y divide-charcoal/10 py-4">
        {chapters.map((chapter) => (
          <section key={chapter.eyebrow} className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
            <Reveal
              direction="up"
              y={40}
              className={`aspect-[4/5] ${chapter.reverse ? 'lg:order-2' : ''}`}
            >
              <Visual tone={chapter.tone} motif={chapter.motif} className="h-full w-full" label={chapter.eyebrow} />
            </Reveal>
            <div className={`flex flex-col justify-center ${chapter.reverse ? 'lg:order-1' : ''}`}>
              <Reveal>
                <p className="eyebrow">{chapter.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="headline mt-4 text-3xl text-charcoal sm:text-4xl">{chapter.title}</h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70">{chapter.body}</p>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-limestone-dark/40 py-24 sm:py-32">
        <div className="container-edit">
          <SectionHeading eyebrow="In Detail" headline="Small things, noticed." className="mb-14" />
          <Gallery tiles={detailTiles} />
        </div>
      </section>
    </>
  )
}
