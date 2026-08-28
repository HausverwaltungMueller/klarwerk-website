import type { ReactNode } from 'react';

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`prose-col text-text-1 ${className}`}>{children}</div>;
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`t-lead ${className}`}>{children}</p>;
}
