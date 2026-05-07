'use client'

type SectionStatus = 'recruiting' | 'few' | 'full' | 'preparing'

type SectionCalendarProps = {
  sectionName: string
  status: SectionStatus
  description?: string
}

const STATUS_STYLES: Record<SectionStatus, { bg: string; label: string }> = {
  recruiting: {
    bg: 'bg-success-bg text-success border-success/30',
    label: 'お申し込み受付中',
  },
  few: {
    bg: 'bg-warning-bg text-warning border-warning/30',
    label: '残りわずか',
  },
  full: {
    bg: 'bg-surface-sunken text-text-muted border-border',
    label: '満枠（順番待ち）',
  },
  preparing: {
    bg: 'bg-info-bg text-info border-info/30',
    label: '準備中',
  },
}

export function SectionCalendar({
  sectionName,
  status,
  description,
}: SectionCalendarProps) {
  const styles = STATUS_STYLES[status]

  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-4">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-base font-medium text-text-primary">
          {sectionName}
        </h3>
        <span
          className={`
            inline-flex items-center
            px-2.5 py-0.5
            rounded-sm
            text-[10px] font-medium tracking-wide
            border
            ${styles.bg}
          `}
        >
          {styles.label}
        </span>
      </div>
      {description && (
        <p className="text-xs text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
