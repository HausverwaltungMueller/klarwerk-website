import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Restaurant from './pages/Restaurant'
import Story from './pages/Story'
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-terracotta focus:px-4 focus:py-2 focus:text-limestone-light"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <div id="main-content" className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/menu"
              element={
                <PageTransition>
                  <Menu />
                </PageTransition>
              }
            />
            <Route
              path="/restaurant"
              element={
                <PageTransition>
                  <Restaurant />
                </PageTransition>
              }
            />
            <Route
              path="/story"
              element={
                <PageTransition>
                  <Story />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/reservation"
              element={
                <PageTransition>
                  <Reservation />
                </PageTransition>
              }
            />
            <Route
              path="/imprint"
              element={
                <PageTransition>
                  <Legal page="imprint" />
                </PageTransition>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageTransition>
                  <Legal page="privacy" />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
