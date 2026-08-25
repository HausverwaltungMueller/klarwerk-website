import Reveal from '../components/Reveal'
import Visual from '../components/Visual'
import ReservationForm from '../components/ReservationForm'
import { brand, hours } from '../lib/content'

export default function Reservation() {
  return (
    <section className="container-edit pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow">Reservation</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="headline mt-4 text-5xl sm:text-6xl">
              Your table
              <br />
              is waiting.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-charcoal/65">
              Tell us when you would like to join us. We will confirm your table by email or phone
              within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-12 aspect-[4/5] hidden lg:block">
            <Visual tone="terracotta" motif="wine" className="h-full w-full" />
          </Reveal>

          <Reveal delay={0.3} className="mt-10 space-y-4 border-t border-charcoal/10 pt-8 text-sm text-charcoal/60">
            <p>
              For parties larger than 10 guests, please contact us directly at{' '}
              <a href={`tel:${brand.phoneHref}`} className="text-charcoal underline underline-offset-4 hover:text-terracotta">
                {brand.phone}
              </a>
              .
            </p>
            <ul className="space-y-1.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-2">
          <ReservationForm />
        </Reveal>
      </div>
    </section>
  )
}
