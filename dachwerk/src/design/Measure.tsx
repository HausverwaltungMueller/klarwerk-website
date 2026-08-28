/** Technische Beschriftung mit Maßlinie. Teil der Zeichnungssprache. */
export function Measure({ value, align = 'left' }: { value: string; align?: 'left' | 'right' }) {
  return (
    <p className={`t-spec flex items-center gap-3 ${align === 'right' ? 'justify-end' : ''}`}>
      {align === 'left' ? <span aria-hidden="true" className="block h-px w-[48px] bg-text-2" /> : null}
      <span>{value}</span>
      {align === 'right' ? <span aria-hidden="true" className="block h-px w-[48px] bg-text-2" /> : null}
    </p>
  );
}
