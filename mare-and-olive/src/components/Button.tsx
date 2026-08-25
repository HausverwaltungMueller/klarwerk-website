import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light'
type Size = 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: boolean
  className?: string
}

type ButtonAsLink = CommonProps & {
  to: string
  href?: undefined
  onClick?: undefined
  type?: undefined
}

type ButtonAsAnchor = CommonProps & {
  href: string
  to?: undefined
  onClick?: undefined
  type?: undefined
}

type ButtonAsButton = CommonProps & {
  to?: undefined
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-terracotta text-limestone-light border border-terracotta hover:bg-terracotta-dark hover:border-terracotta-dark',
  secondary:
    'bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal hover:text-limestone-light',
  ghost: 'bg-transparent text-charcoal border-b border-charcoal/40 hover:border-terracotta rounded-none px-0',
  'ghost-light': 'bg-transparent text-limestone-light border-b border-limestone-light/50 hover:border-terracotta rounded-none px-0',
}

const sizeClasses: Record<Size, string> = {
  md: 'text-xs sm:text-sm px-6 py-3',
  lg: 'text-sm px-8 py-4',
}

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', icon = true, className = '' } = props
  const isGhost = variant === 'ghost' || variant === 'ghost-light'

  const classes = `group relative inline-flex items-center gap-2 font-sans font-medium uppercase tracking-widest2 transition-all duration-500 ease-elegant ${
    isGhost ? '' : 'rounded-sm'
  } ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      <span className="relative">{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-500 ease-elegant group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target={props.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    )
  }

  const btnProps = props as ButtonAsButton
  return (
    <button
      type={btnProps.type ?? 'button'}
      onClick={btnProps.onClick}
      disabled={btnProps.disabled}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {content}
    </button>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, { onClick?: () => void; label: string; children: ReactNode; className?: string }>(
  ({ onClick, label, children, className = '' }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  ),
)
IconButton.displayName = 'IconButton'
