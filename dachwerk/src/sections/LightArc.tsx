/**
 * Flächenwechsel über die 38-Grad-Kante mit Lichtlinie.
 * Einer der genau vier Orte, an denen der Winkel auf der Startseite erscheint. docs/04, A.3.
 *
 * Die Kante behält ihren Winkel in jedem Zustand. Bewegt wird die Kante entlang
 * ihrer Richtung, nie ihr Winkel, docs/04, Szene `arcToDay`.
 * `--arc-run` ist der waagerechte Weg, den die Kante über die Bandhöhe zurücklegt,
 * `--arc-edge` die Länge der Kante selbst. Beide Werte stehen in `base.css`,
 * weil sie aus der Bandhöhe je Breakpoint folgen.
 */
export function LightArc({ to }: { to: 'day' | 'night' }) {
  const clip = to === 'day'
    ? 'polygon(100% 100%, 0% 100%, 0% 100%, var(--arc-run) 0%, 100% 0%)'
    : 'polygon(100% 0%, 0% 0%, 0% 0%, var(--arc-run) 100%, 100% 100%)';
  return (
    <div
      className="arc relative h-[120px] overflow-hidden md:h-[190px]"
      aria-hidden="true"
      data-arc={to}
      /* Grundfläche ist die abgebende Fläche, darüber wird die ankommende Fläche beschnitten. */
      style={{ background: to === 'day' ? '#111211' : 'var(--surface-l0, #F3F0E9)' }}
    >
      <div
        className="absolute inset-0"
        style={{ background: to === 'day' ? 'var(--surface-l0, #F3F0E9)' : '#111211', clipPath: clip }}
        data-arc-surface
      />
      <div
        className="light-edge absolute left-0 w-[var(--arc-edge)] origin-left"
        style={{ top: to === 'day' ? '100%' : '0%', transform: `rotate(${to === 'day' ? '-38deg' : '38deg'})` }}
        data-arc-edge
      />
    </div>
  );
}
