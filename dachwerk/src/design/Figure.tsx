import { slot as getSlot } from '@/content/slots';
import type { SlotId } from '@/types';

/**
 * Bildslot. Rendert die echte Datei, sobald sie in der Registry eingetragen ist,
 * sonst die gestaltete Materialflaeche mit sichtbarer Slot-Kennung.
 * Seitenverhaeltnis, Ladeverhalten und Bewegung sind in beiden Faellen identisch,
 * deshalb aendert der spaetere Bildeintritt nichts am Layout. docs/05, W12.
 */
type Props = {
  id: SlotId;
  /** Ueberschreibt das Seitenverhaeltnis der Registry, wenn eine Sektion es braucht. */
  ratio?: string;
  className?: string;
  /** Zeigt Kennung und Motiv. Im Musterprojekt Standard. */
  showMeta?: boolean;
  /** Fuellt den Container statt ein Seitenverhaeltnis zu setzen. */
  fill?: boolean;
};

/** Breiten der Ableitungen, gleich wie in scripts/build-images.ts. */
const WIDTHS = { desktop: [1280, 1920, 2560], mobile: [828, 1200] } as const;

const srcset = (base: string, variant: 'd' | 'm', widths: readonly number[], format: 'avif' | 'webp'): string =>
  widths.map((w) => `${base}-${variant}-${w}.${format} ${w}w`).join(', ');

const parallaxAttr = (motion: string): string | undefined => {
  if (motion.startsWith('parallax-')) return motion.replace('parallax-', '');
  return undefined;
};

export function Figure({ id, ratio, className = '', showMeta = true, fill = false }: Props) {
  const s = getSlot(id);
  const ar = ratio ?? s.ratio.desktop;
  const px = parallaxAttr(s.motion);

  return (
    <figure
      className={`mat mat-${s.material} ${fill ? 'h-full w-full' : 'border border-hair'} ${className}`}
      style={fill ? undefined : { aspectRatio: ar }}
      data-parallax={px}
      data-slot={s.id}
    >
      {s.file ? (
        <picture>
          {/* Reihenfolge und Dateinamen entsprechen der Ausgabe von scripts/build-images.ts */}
          <source media="(max-width: 899px)" type="image/avif" srcSet={srcset(s.file, 'm', WIDTHS.mobile, 'avif')} sizes="100vw" />
          <source media="(max-width: 899px)" type="image/webp" srcSet={srcset(s.file, 'm', WIDTHS.mobile, 'webp')} sizes="100vw" />
          <source type="image/avif" srcSet={srcset(s.file, 'd', WIDTHS.desktop, 'avif')} sizes="(min-width: 1200px) 60vw, 100vw" />
          <source type="image/webp" srcSet={srcset(s.file, 'd', WIDTHS.desktop, 'webp')} sizes="(min-width: 1200px) 60vw, 100vw" />
          <img
            src={`${s.file}-d-1280.webp`}
            alt={s.alt}
            loading={s.priority === 'eager' ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={s.priority === 'eager' ? 'high' : 'auto'}
            className="h-full w-full object-cover"
          />
        </picture>
      ) : (
        <>
          <span className="mat-fill" aria-hidden="true" />
          {showMeta ? (
            <figcaption className="absolute bottom-3 left-4 right-4 z-[2] flex flex-col gap-1">
              <span className="text-label font-semibold uppercase tracking-[0.2em] text-energie">
                Bildplatz {s.id}
              </span>
              <span className="text-spec line-clamp-2 max-w-[38ch] text-text-1">{s.motiv}</span>
            </figcaption>
          ) : null}
        </>
      )}
    </figure>
  );
}
