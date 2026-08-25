import Reveal from '../components/Reveal'
import { brand } from '../lib/content'

type LegalProps = {
  page: 'imprint' | 'privacy'
}

export default function Legal({ page }: LegalProps) {
  const isImprint = page === 'imprint'

  return (
    <section className="container-edit py-32 sm:py-40">
      <div className="max-w-2xl">
        <Reveal>
          <p className="eyebrow">{isImprint ? 'Imprint' : 'Privacy Policy'}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="headline mt-4 text-4xl sm:text-5xl">
            {isImprint ? 'Imprint' : 'Privacy Policy'}
          </h1>
        </Reveal>

        {isImprint ? (
          <Reveal delay={0.16} className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/70">
            <p>
              MARE &amp; OLIVE is a fictional restaurant created for demonstration purposes only. No
              legally binding imprint information is provided here.
            </p>
            <div>
              <p className="font-serif text-xl text-charcoal">{brand.name}</p>
              <p>{brand.address.line1}</p>
              <p>{brand.address.line2}</p>
              <p className="mt-2">{brand.phone}</p>
              <p>{brand.email}</p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.16} className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/70">
            <p>
              This website is a fictional demonstration project. The reservation form does not transmit
              any data to a live server — submissions are handled entirely in your browser and are
              discarded when you leave the page.
            </p>
            <p>
              No analytics, tracking cookies or third-party scripts are used on this site.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
