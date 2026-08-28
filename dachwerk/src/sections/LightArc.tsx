/**
 * Flächenwechsel über die 38-Grad-Kante mit Lichtlinie.
 * Einer der genau vier Orte, an denen der Winkel auf der Startseite erscheint. docs/04, A.3.
 */
export function LightArc({ to }: { to: 'day' | 'night' }) {
  const clip = to === 'day'
    ? 'polygon(0% 100%, 0% 38%, 190px 0%, 100% 0%, 100% 100%)'
    : 'polygon(0% 0%, 100% 0%, 100% 62%, 190px 100%, 0% 100%)';
  return (
    <div className="relative h-[120px] overflow-hidden md:h-[190px]" aria-hidden="true" data-arc={to}>
      <div
        className="absolute inset-0"
        style={{ background: to === 'day' ? 'var(--surface-l0, #F3F0E9)' : '#111211', clipPath: clip }}
        data-arc-surface
      />
      <div
        className="light-edge absolute left-0 w-[210px] origin-left"
        style={{ top: to === 'day' ? '38%' : '62%', transform: 'rotate(-38deg)' }}
        data-arc-edge
      />
    </div>
  );
}
