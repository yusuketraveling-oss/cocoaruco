import type { ReactNode } from 'react'

type Variant = 'default' | 'sunken' | 'highlighted'

type GlassCardProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

const VARIANT_STYLES: Record<Variant, string> = {
  default: 'bg-surface border border-border',
  sunken: 'bg-surface-sunken border border-border-subtle',
  highlighted: 'bg-primary-subtle border border-primary/30',
}

export function GlassCard({
  variant = 'default',
  className = '',
  children,
}: GlassCardProps) {
  return (
    <div className={`rounded-lg p-5 ${VARIANT_STYLES[variant]} ${className}`}>
      {children}
    </div>
  )
}
