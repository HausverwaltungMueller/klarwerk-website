import { Link } from 'react-router-dom';
import { Section } from '@/design/Section';
import { arbeitsgebiet } from '@/content/home';
import { regions, otherPlaces } from '@/content/regions';
import { RegionMap } from '@/design/drawings/RegionMap';
import { track } from '@/lib/track';

/** Stilisierte Karte als Zeichnung, keine Karteneinbettung als Hauptvisual. */
export function Arbeitsgebiet() {
  return (
    <Section id="arbeitsgebiet" label={arbeitsgebiet.label} bridge="frage">
      <div className="mb-7 grid gap-6 md:grid-cols-[5fr_7fr] md:gap-7">
        <h2 className="t-display-l" data-reveal>{arbeitsgebiet.h2}</h2>
        <div data-reveal>
          <p className="t-lead">{arbeitsgebiet.lead}</p>
          <p className="mt-4 max-w-measure text-text-1">{arbeitsgebiet.text}</p>
        </div>
      </div>
      <div data-reveal="surface"><RegionMap /></div>
      <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2" data-reveal>
        {regions.map((r) => (
          <Link key={r.slug} to={`/region/${r.slug}/`} className="text-s text-text-1 hover:text-text-0"
            onClick={() => track('region_place_click', { ort: r.slug })}>
            {r.name}
          </Link>
        ))}
        {otherPlaces.map((p) => <span key={p} className="text-s text-text-2">{p}</span>)}
      </p>
    </Section>
  );
}
