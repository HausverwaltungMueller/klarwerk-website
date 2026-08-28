import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import { track, type TrackEvent } from '@/lib/track';

type Variant = 'primary' | 'secondary' | 'quiet' | 'on-light';
type Size = 'md' | 'lg' | 'sm';

const base =
  'inline-flex items-center gap-3 font-medium tracking-[0.01em] rounded transition-colors duration-1 ease-out';

const variants: Record<Variant, string> = {
  primary: 'bg-energie text-surface-0 hover:brightness-[1.06] active:brightness-[0.96]',
  secondary: 'border border-hair-1 text-text-0 hover:border-text-1 hover:bg-surface-2',
  quiet: 'text-text-0 border-b border-hair-1 hover:border-text-0 rounded-none',
  'on-light': 'bg-text-0 text-surface-0 hover:brightness-110',
};

const sizes: Record<Size, string> = {
  sm: 'h-[40px] px-4 text-s',
  md: 'h-[48px] px-5',
  lg: 'h-[56px] px-6',
};

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  event?: TrackEvent;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
};

export function Button({
  children, to, href, variant = 'primary', size = 'md',
  arrow = false, event, onClick, type = 'button', disabled, className = '',
}: Props) {
  const cls = [
    base,
    variants[variant],
    variant === 'quiet' ? 'px-0 h-auto pb-px' : sizes[size],
    disabled ? 'opacity-40 cursor-not-allowed' : '',
    className,
  ].join(' ');

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <Icon name="arrow" size={size === 'sm' ? 16 : 18} className="transition-transform duration-1 ease-out group-hover:translate-x-[3px]" /> : null}
    </>
  );

  const handle = () => {
    if (event) track(event);
    onClick?.();
  };

  if (to) return <Link to={to} className={`group ${cls}`} onClick={handle}>{inner}</Link>;
  if (href) return <a href={href} className={`group ${cls}`} onClick={handle}>{inner}</a>;
  return (
    <button type={type} className={`group ${cls}`} onClick={handle} disabled={disabled}>
      {inner}
    </button>
  );
}
