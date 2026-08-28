import type { ReactNode } from 'react';

/** Zeile im Raster. Die Nummer erscheint nur, wenn sie echte Reihenfolge traegt. */
export function Row({
  index, title, children, accent,
}: { index?: string; title: string; children?: ReactNode; accent?: 'dach' | 'energie' }) {
  return (
    <div className="grid grid-cols-[44px_1fr] gap-x-4 border-t border-hair py-4 transition-colors duration-1 ease-out hover:bg-surface-2 md:grid-cols-[56px_1fr]">
      <span className="t-spec pt-1">{index ?? ''}</span>
      <div className="min-w-0">
        <h3
          className={`text-base font-medium ${
            accent === 'dach' ? 'text-dach-text' : accent === 'energie' ? 'text-energie-text' : 'text-text-0'
          }`}
        >
          {title}
        </h3>
        {children ? <div className="mt-1 text-s text-text-2 prose-col">{children}</div> : null}
      </div>
    </div>
  );
}
