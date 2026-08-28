import type { ReactNode } from 'react';

type Variant = 'plain' | 'image' | 'choice' | 'invert';

const variants: Record<Variant, string> = {
  plain: 'bg-surface-1 border border-hair p-6 hover:bg-surface-2',
  image: 'bg-transparent border-t border-hair pt-4',
  choice: 'bg-surface-1 border-l-2 border-transparent p-6 text-left hover:bg-surface-2 hover:border-l-energie',
  invert: 'bg-text-0 text-surface-0 p-6',
};

/** Flaeche mit Kante, keine Card. Kein Schatten, kein zweiter CTA. */
export function Field({
  variant = 'plain', children, className = '', as = 'div', onClick, selected,
}: {
  variant?: Variant; children: ReactNode; className?: string;
  as?: 'div' | 'button' | 'article'; onClick?: () => void; selected?: boolean;
}) {
  const Tag = as;
  return (
    <Tag
      className={`flex flex-col gap-3 transition-colors duration-1 ease-out ${variants[variant]} ${
        selected ? 'border-l-energie bg-surface-2' : ''
      } ${className}`}
      onClick={onClick}
      {...(as === 'button' ? { type: 'button' as const } : {})}
    >
      {children}
    </Tag>
  );
}
