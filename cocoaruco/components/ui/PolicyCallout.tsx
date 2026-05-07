import type { ReactNode } from 'react'

type Variant = 'info' | 'warning' | 'highlight'

type PolicyCalloutProps = {
  variant?: Variant
  title?: string
  children: ReactNode
}

const VARIANT_STYLES: Record<Variant, string> = {
  info: 'bg-linen border-sitter-main/20',
  warning: 'bg-amber/10 border-amber/40',
  highlight: 'bg-sitter-main/5 border-sitter-main/30',
}

const VARIANT_TITLE_STYLES: Record<Variant, string> = {
  info: 'text-sitter-main',
  warning: 'text-amber',
  highlight: 'text-sitter-main',
}

export function PolicyCallout({
  variant = 'info',
  title,
  children,
}: PolicyCalloutProps) {
  return (
    <div className={`rounded-2xl border p-5 md:p-6 ${VARIANT_STYLES[variant]}`}>
      {title && (
        <p className={`text-xs tracking-widest font-bold mb-3 uppercase ${VARIANT_TITLE_STYLES[variant]}`}>
          {title}
        </p>
      )}
      <div className="text-sm text-text-primary/90 leading-loose">
        {children}
      </div>
    </div>
  )
}
