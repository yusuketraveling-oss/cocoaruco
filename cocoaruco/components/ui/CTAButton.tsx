import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'default' | 'block'

type CTAButtonProps = {
  href: string
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-active border-primary',
  secondary:
    'bg-transparent text-primary hover:bg-primary-subtle border-primary',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-alt border-transparent',
}

const SIZE_STYLES: Record<Size, string> = {
  default: 'min-h-[48px] px-6',
  block: 'w-full min-h-[52px] px-6',
}

export function CTAButton({
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  children,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-md border-[1.5px]
        text-base font-medium tracking-wide
        transition-colors duration-150
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${className}
      `}
    >
      {children}
    </Link>
  )
}
