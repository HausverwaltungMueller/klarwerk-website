import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { routes, findRoute } from '@/routes';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { StickyActions } from '@/layout/StickyActions';
import { Seo } from '@/layout/Seo';
import { Breadcrumbs } from '@/layout/Breadcrumbs';
import { Home } from '@/pages/Home';
import { DomainPage } from '@/pages/DomainPage';
import { ServicePage } from '@/pages/ServicePage';
import { BridgePage } from '@/pages/BridgePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { RegionPage } from '@/pages/RegionPage';
import { GuideIndexPage } from '@/pages/GuideIndexPage';
import { GuidePage } from '@/pages/GuidePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { LegalPage } from '@/pages/LegalPage';
import { NotFound } from '@/pages/NotFound';
import type { RouteMeta } from '@/routes';

/** Mapping key -> Seitenkomponente. routes.ts bleibt frei von JSX,
 *  damit die Build-Skripte sie lesen koennen. */
function element(meta: RouteMeta) {
  switch (meta.key) {
    case 'home': return <Home meta={meta} />;
    case 'domain-dach': return <DomainPage meta={meta} domain="dach" />;
    case 'domain-energie': return <DomainPage meta={meta} domain="energie" />;
    case 'service': return <ServicePage meta={meta} slug={meta.param ?? ''} />;
    case 'bridge': return <BridgePage meta={meta} />;
    case 'projects': return <ProjectsPage meta={meta} />;
    case 'region': return <RegionPage meta={meta} slug={meta.param ?? ''} />;
    case 'guide-index': return <GuideIndexPage meta={meta} />;
    case 'guide': return <GuidePage meta={meta} slug={meta.param ?? ''} />;
    case 'about': return <AboutPage meta={meta} />;
    case 'contact': return <ContactPage meta={meta} />;
    case 'imprint': return <LegalPage meta={meta} kind="imprint" />;
    case 'privacy': return <LegalPage meta={meta} kind="privacy" />;
    default: return <NotFound />;
  }
}

function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const meta = findRoute(pathname);
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) window.scrollTo(0, 0);
  }, [pathname, isHome]);

  return (
    <>
      <a href="#inhalt" className="skip-link">Zum Inhalt springen</a>
      <Header />
      {meta ? <Seo meta={meta} /> : null}
      <main id="inhalt" className={isHome ? '' : 'pt-[57px]'}>
        {meta && !isHome ? <Breadcrumbs path={meta.path} /> : null}
        {children}
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}

export function App() {
  return (
    <Routes>
      {routes.map((meta) => (
        <Route key={meta.path} path={meta.path} element={<Shell>{element(meta)}</Shell>} />
      ))}
      <Route path="*" element={<Shell><NotFound /></Shell>} />
    </Routes>
  );
}
