import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  lead?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-medium text-text-primary leading-tight tracking-tight">
        {title}
      </h2>
      {lead && (
        <div className="mt-3 text-sm text-text-secondary leading-relaxed">
          {lead}
        </div>
      )}
    </div>
  )
}
