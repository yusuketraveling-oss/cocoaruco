import type { ReactNode } from 'react'

type Variant = 'info' | 'warning' | 'highlight' | 'service'

type PolicyCalloutProps = {
  variant?: Variant
  title?: string
  children: ReactNode
}

const VARIANT_STYLES: Record<Variant, string> = {
  info: 'bg-info-bg border-info/30',
  warning: 'bg-warning-bg border-warning/40',
  highlight: 'bg-primary-subtle border-primary/30',
  service: 'bg-accent-service/10 border-accent-service/30',
}

const VARIANT_TITLE_STYLES: Record<Variant, string> = {
  info: 'text-info',
  warning: 'text-warning',
  highlight: 'text-primary',
  service: 'text-accent-service',
}

export function PolicyCallout({
  variant = 'info',
  title,
  children,
}: PolicyCalloutProps) {
  return (
    <div className={`rounded-lg border p-4 ${VARIANT_STYLES[variant]}`}>
      {title && (
        <p
          className={`text-xs font-medium tracking-wider uppercase mb-2 ${VARIANT_TITLE_STYLES[variant]}`}
        >
          {title}
        </p>
      )}
      <div className="text-sm text-text-primary leading-relaxed">
        {children}
      </div>
    </div>
  )
}
