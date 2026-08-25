import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, brand } from '../lib/content'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant ${
          scrolled || menuOpen
            ? 'border-b border-charcoal/10 bg-limestone-light/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-edit flex h-20 items-center justify-between sm:h-24">
          <Link
            to="/"
            className={`font-serif text-xl tracking-wide sm:text-2xl transition-colors duration-500 ${
              scrolled || menuOpen ? 'text-charcoal' : 'text-limestone-light'
            }`}
          >
            MARE <span className="text-terracotta">&amp;</span> OLIVE
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-xs font-medium uppercase tracking-widest2 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-400 after:ease-elegant hover:after:scale-x-100 ${
                    scrolled ? 'text-charcoal' : 'text-limestone-light'
                  } ${isActive ? 'after:scale-x-100' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/reservation" size="md" icon={false}>
              Reservation
            </Button>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${
              scrolled || menuOpen ? 'text-charcoal' : 'text-limestone-light'
            }`}
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-olive-dark lg:hidden"
          >
            <div className="container-edit flex h-20 items-center justify-end sm:h-24" />
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.to}
                    className="block py-3 font-serif text-4xl text-limestone-light transition-colors hover:text-terracotta sm:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + navLinks.length * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="pt-8"
              >
                <Button to="/reservation" variant="primary" size="lg">
                  Reserve a Table
                </Button>
              </motion.div>
            </nav>
            <div className="container-edit flex flex-wrap gap-x-8 gap-y-2 pb-10 text-sm text-limestone-light/70">
              <span>{brand.phone}</span>
              <span>{brand.email}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
