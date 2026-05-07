import type { ReactNode } from 'react'

type Service = 'petsitter' | 'pettaxi'

type ServiceBadgeProps = {
  service: Service
  children: ReactNode
}

const SERVICE_STYLES: Record<Service, string> = {
  petsitter: 'bg-cat-3-bg text-cat-3',
  pettaxi: 'bg-cat-9-bg text-cat-9',
}

export function ServiceBadge({ service, children }: ServiceBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-sm
        text-xs font-medium tracking-wide
        ${SERVICE_STYLES[service]}
      `}
    >
      {children}
    </span>
  )
}
