import { MapPin, Phone, Mail, Car, TrainFront } from 'lucide-react'
import { InstagramGlyph } from '../components/icons'
import Reveal from '../components/Reveal'
import Visual from '../components/Visual'
import Button from '../components/Button'
import { brand, hours } from '../lib/content'

export default function Contact() {
  return (
    <>
      <section className="container-edit pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="headline mt-4 text-5xl sm:text-7xl">Find us.</h1>
        </Reveal>
      </section>

      <section className="container-edit pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="up" y={40} className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <Visual tone="sea" motif="coastline" className="h-full w-full" label="Am Kaiserkai 18" sublabel="20457 Hamburg" />
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow">Address</p>
                  <address className="mt-2 text-lg not-italic text-charcoal/80">
                    {brand.address.line1}
                    <br />
                    {brand.address.line2}
                  </address>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow">Phone</p>
                  <a href={`tel:${brand.phoneHref}`} className="mt-2 block text-lg text-charcoal/80 transition-colors hover:text-terracotta">
                    {brand.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow">Email</p>
                  <a href={`mailto:${brand.email}`} className="mt-2 block text-lg text-charcoal/80 transition-colors hover:text-terracotta">
                    {brand.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex items-start gap-4">
                <InstagramGlyph className="mt-1 h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="eyebrow">Instagram</p>
                  <a
                    href={`https://instagram.com/${brand.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg text-charcoal/80 transition-colors hover:text-terracotta"
                  >
                    {brand.instagram}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <p className="eyebrow">Opening Hours</p>
                <ul className="mt-3 space-y-1.5 text-base text-charcoal/70">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 border-b border-charcoal/10 py-2">
                      <span>{h.day}</span>
                      <span className="text-charcoal/50">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <Button to="/reservation" size="lg">
                Reserve a Table
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-limestone-dark/40 py-20 sm:py-24">
        <div className="container-edit grid grid-cols-1 gap-12 sm:grid-cols-2">
          <Reveal>
            <div className="flex items-start gap-4">
              <Car className="mt-1 h-5 w-5 shrink-0 text-olive" strokeWidth={1.5} />
              <div>
                <h2 className="font-serif text-2xl text-charcoal">Parking</h2>
                <p className="mt-2 max-w-md text-base leading-relaxed text-charcoal/65">
                  Public parking is available at the Kaiserkai and Am Sandtorpark garages, both a short
                  walk from the restaurant. Valet parking is offered on Friday and Saturday evenings.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-start gap-4">
              <TrainFront className="mt-1 h-5 w-5 shrink-0 text-olive" strokeWidth={1.5} />
              <div>
                <h2 className="font-serif text-2xl text-charcoal">Public Transport</h2>
                <p className="mt-2 max-w-md text-base leading-relaxed text-charcoal/65">
                  U4 Überseequartier is a five-minute walk away. Bus lines 6 and 111 stop nearby at
                  Am Kaiserkai.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
