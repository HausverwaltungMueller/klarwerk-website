import { useMotion } from '@/motion/useMotion';
import { heroScene } from '@/motion/scenes/hero';
import { splitScene } from '@/motion/scenes/split';
import { processScene } from '@/motion/scenes/process';
import { layersScene } from '@/motion/scenes/layers';
import { arcScene } from '@/motion/scenes/arc';
import { mapScene } from '@/motion/scenes/map';
import { Hero } from '@/sections/Hero';
import { HeroMobileStates } from '@/sections/HeroMobileStates';
import { Haltung } from '@/sections/Haltung';
import { Entscheidung } from '@/sections/Entscheidung';
import { Split } from '@/sections/Split';
import { Anliegen } from '@/sections/Anliegen';
import { Leistungen } from '@/sections/Leistungen';
import { LightArc } from '@/sections/LightArc';
import { Aufbau } from '@/sections/Aufbau';
import { Ablauf } from '@/sections/Ablauf';
import { Projekte } from '@/sections/Projekte';
import { Qualitaet } from '@/sections/Qualitaet';
import { Statement } from '@/sections/Statement';
import { Arbeitsgebiet } from '@/sections/Arbeitsgebiet';
import { Kontakt } from '@/sections/Kontakt';
import type { RouteMeta } from '@/routes';

/**
 * Startseite. Acht Akte, vierzehn Sektionen, drei Pins.
 * Die Akt-Struktur ist Regie und erscheint nicht im Interface, docs/05, W01.
 */
export function Home({ meta }: { meta: RouteMeta }) {
  useMotion([heroScene, splitScene, arcScene, layersScene, processScene, mapScene]);
  void meta;

  return (
    <>
      {/* Akt 01, Aufmerksamkeit */}
      <Hero />
      <HeroMobileStates />
      {/* Akt 02, Problem */}
      <Haltung />
      <Entscheidung />
      {/* Akt 03, Erkenntnis */}
      <Split />
      {/* Akt 04, Kompetenz */}
      <Anliegen />
      <Leistungen />
      {/* Akt 05, Prozess, Tagfläche */}
      <LightArc to="day" />
      <div data-surface="day" className="bg-surface-0 text-text-0">
        <Aufbau />
        <Ablauf />
        {/* Akt 06, Beweis */}
        <Projekte />
      </div>
      <LightArc to="night" />
      <Qualitaet />
      {/* Akt 07, Entscheidung */}
      <Statement />
      <Arbeitsgebiet />
      {/* Akt 08, Conversion */}
      <Kontakt />
    </>
  );
}
