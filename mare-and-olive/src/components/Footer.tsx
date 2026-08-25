import { Link } from 'react-router-dom'
import { InstagramGlyph } from './icons'
import { brand, hours, navLinks } from '../lib/content'
import Reveal from './Reveal'

export default function Footer() {
  const year = 2026

  return (
    <footer className="bg-olive-dark text-limestone-light">
      <div className="container-edit py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl">
              MARE <span className="text-terracotta">&amp;</span> OLIVE
            </p>
            <p className="mt-3 text-sm text-limestone-light/60">{brand.tagline}</p>
            <a
              href={`https://instagram.com/${brand.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-limestone-light/80 transition-colors hover:text-terracotta"
              aria-label="MARE & OLIVE on Instagram"
            >
              <InstagramGlyph className="h-4 w-4" />
              {brand.instagram}
            </a>
          </div>

          <div>
            <p className="eyebrow-light">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-sm text-limestone-light/80">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-terracotta">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/reservation" className="transition-colors hover:text-terracotta">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Opening Hours</p>
            <ul className="mt-4 space-y-2.5 text-sm text-limestone-light/80">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-limestone-light/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Visit</p>
            <address className="mt-4 space-y-1 text-sm not-italic text-limestone-light/80">
              <p>{brand.address.line1}</p>
              <p>{brand.address.line2}</p>
              <p className="pt-3">
                <a href={`tel:${brand.phoneHref}`} className="transition-colors hover:text-terracotta">
                  {brand.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-terracotta">
                  {brand.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <Reveal className="mt-20 sm:mt-28">
          <Link to="/reservation" className="block">
            <h3 className="headline text-[13vw] leading-[0.95] text-limestone-light transition-colors duration-500 hover:text-terracotta sm:text-6xl lg:text-8xl">
              See you by the sea.
            </h3>
          </Link>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4 border-t border-limestone-light/15 pt-8 text-xs text-limestone-light/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} MARE &amp; OLIVE, Hamburg. A fictional restaurant created for demonstration purposes.
          </p>
          <div className="flex gap-6">
            <Link to="/imprint" className="transition-colors hover:text-terracotta">
              Imprint
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-terracotta">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
