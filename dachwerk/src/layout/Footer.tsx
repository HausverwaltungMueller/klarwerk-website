import { Link } from 'react-router-dom';
import { byDomain } from '@/content/services';
import { company } from '@/content/company';
import { regions, otherPlaces } from '@/content/regions';
import { demoNote } from '@/content/legal';
import { telHref } from '@/lib/format';
import { IS_DEMO } from '@/config';

export function Footer() {
  return (
    <footer className="border-t border-hair pt-9 pb-9">
      <div className="page grid gap-7 md:grid-cols-4">
        <div>
          <p className="t-label mb-4">Dach</p>
          <ul className="flex flex-col gap-2">
            {byDomain('dach').map((s) => (
              <li key={s.slug}>
                <Link to={s.page ?? '/dach/'} className="text-s text-text-1 hover:text-text-0">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="t-label mb-4">Energie</p>
          <ul className="flex flex-col gap-2">
            {byDomain('energie').map((s) => (
              <li key={s.slug}>
                <Link to={s.page ?? '/photovoltaik/'} className="text-s text-text-1 hover:text-text-0">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="t-label mb-4">Unternehmen</p>
          <ul className="flex flex-col gap-2">
            <li><Link to="/dach-und-pv/" className="text-s text-text-1 hover:text-text-0">Dach und PV</Link></li>
            <li><Link to="/projekte/" className="text-s text-text-1 hover:text-text-0">Beispielprojekte</Link></li>
            <li><Link to="/ratgeber/" className="text-s text-text-1 hover:text-text-0">Ratgeber</Link></li>
            <li><Link to="/ueber-uns/" className="text-s text-text-1 hover:text-text-0">Über uns</Link></li>
            <li><Link to="/kontakt/" className="text-s text-text-1 hover:text-text-0">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <p className="t-label mb-4">Kontakt</p>
          <p className="text-s text-text-1">{company.name}</p>
          <p className="text-s text-text-2">{company.street.value}</p>
          <p className="text-s text-text-2">{company.zip.value} {company.city.value}</p>
          <p className="mt-3">
            <a href={telHref(company.phone.value)} className="text-s text-text-1 tabular-nums hover:text-text-0">
              {company.phone.value}
            </a>
          </p>
          <p>
            <a href={`mailto:${company.email.value}`} className="text-s text-text-1 hover:text-text-0">
              {company.email.value}
            </a>
          </p>
          <p className="mt-4 flex gap-4">
            <Link to="/impressum/" className="text-s text-text-2 hover:text-text-0">Impressum</Link>
            <Link to="/datenschutz/" className="text-s text-text-2 hover:text-text-0">Datenschutz</Link>
          </p>
        </div>
      </div>

      <div className="page mt-8">
        <div className="hairline mb-5" />
        <p className="t-label mb-3">Arbeitsgebiet</p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          {regions.map((r) => (
            <Link key={r.slug} to={`/region/${r.slug}/`} className="text-s text-text-1 hover:text-text-0">
              {r.name}
            </Link>
          ))}
          {otherPlaces.map((p) => (
            <span key={p} className="text-s text-text-2">{p}</span>
          ))}
        </p>
        <p className="t-spec mt-5">{company.areaLabel}</p>
        {IS_DEMO ? <p className="t-spec mt-5 max-w-[80ch] leading-relaxed">{demoNote}</p> : null}
      </div>
    </footer>
  );
}
