import type { ReactNode } from 'react';

/** Kopf einer Unterseite. Kein Pin, keine Sequenz, ruhiger Einstieg. */
export function PageIntro({
  label, h1, lead, children,
}: { label: string; h1: string; lead?: string; children?: ReactNode }) {
  return (
    <header className="page pt-7 pb-8">
      <p className="t-label">{label}</p>
      <h1 className="t-display-l mt-4 max-w-[24ch]">{h1}</h1>
      {lead ? <p className="t-lead mt-5">{lead}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}
