/**
 * A thin color-melt between two homepage journey beats, replacing a hard
 * rectangular cut with a short gradient bleed from the section above into
 * the tone of the section below — visual continuity instead of
 * section / whitespace / section.
 */
export default function SectionBridge({
  from,
  to,
  height = 'h-16 sm:h-24',
}: {
  from: string
  to: string
  height?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${height}`}
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  )
}
