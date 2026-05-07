'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

type SlotStatus = 'available' | 'few' | 'full' | 'closed'

type Slot = {
  date: string
  block: 'A' | 'B' | 'C' | 'D'
  status: SlotStatus
}

type WeeklyCalendarProps = {
  startDate: string
  slots: Slot[]
  onWeekChange?: (direction: 'prev' | 'next') => void
}

const BLOCK_LABELS: Record<'A' | 'B' | 'C' | 'D', string> = {
  A: '早番A',
  B: '早番B',
  C: '遅番C',
  D: '遅番D',
}

const BLOCK_TIMES: Record<'A' | 'B' | 'C' | 'D', string> = {
  A: '7:00〜10:00',
  B: '10:00〜13:00',
  C: '13:00〜16:00',
  D: '16:00〜19:00',
}

const STATUS_STYLES: Record<SlotStatus, string> = {
  available: 'bg-success-bg text-success border-success/30',
  few: 'bg-warning-bg text-warning border-warning/30',
  full: 'bg-surface-sunken text-text-muted border-border',
  closed: 'bg-bg text-text-muted/50 border-border-subtle',
}

const STATUS_LABELS: Record<SlotStatus, string> = {
  available: '◯',
  few: '△',
  full: '×',
  closed: '−',
}

export function WeeklyCalendar({
  startDate,
  slots,
  onWeekChange,
}: WeeklyCalendarProps) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    return date
  })

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const weekday = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]
    return { md: `${month}/${day}`, weekday }
  }

  const getSlot = (date: Date, block: 'A' | 'B' | 'C' | 'D'): Slot | undefined => {
    const dateStr = date.toISOString().split('T')[0]
    return slots.find((s) => s.date === dateStr && s.block === block)
  }

  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => onWeekChange?.('prev')}
          aria-label="前の週"
          className="w-9 h-9 flex items-center justify-center text-text-secondary hover:text-text-primary"
        >
          <CaretLeft size={18} weight="regular" />
        </button>
        <p className="text-xs font-medium text-text-secondary tracking-wide">
          {formatDate(days[0]).md} 〜 {formatDate(days[6]).md}
        </p>
        <button
          type="button"
          onClick={() => onWeekChange?.('next')}
          aria-label="次の週"
          className="w-9 h-9 flex items-center justify-center text-text-secondary hover:text-text-primary"
        >
          <CaretRight size={18} weight="regular" />
        </button>
      </div>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-xs border-separate border-spacing-1">
          <thead>
            <tr>
              <th className="text-left text-text-muted font-medium pb-2"></th>
              {days.map((date, i) => {
                const { md, weekday } = formatDate(date)
                return (
                  <th
                    key={i}
                    className="text-center font-medium pb-2 min-w-[36px]"
                  >
                    <div className="text-[10px] text-text-muted">{weekday}</div>
                    <div className="text-text-primary">{md.split('/')[1]}</div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {(['A', 'B', 'C', 'D'] as const).map((block) => (
              <tr key={block}>
                <th className="text-left pr-2 pt-1 align-top">
                  <div className="text-[10px] font-medium text-text-secondary tracking-wide">
                    {BLOCK_LABELS[block]}
                  </div>
                  <div className="text-[10px] text-text-muted">
                    {BLOCK_TIMES[block]}
                  </div>
                </th>
                {days.map((date, i) => {
                  const slot = getSlot(date, block)
                  const status: SlotStatus = slot?.status ?? 'closed'
                  return (
                    <td key={i} className="p-0 text-center">
                      <div
                        className={`
                          w-full aspect-square min-h-[36px]
                          rounded-md border
                          flex items-center justify-center
                          font-medium
                          ${STATUS_STYLES[status]}
                        `}
                      >
                        {STATUS_LABELS[status]}
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-text-secondary">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-success-bg border border-success/30" />
          空きあり
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-warning-bg border border-warning/30" />
          残りわずか
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-surface-sunken border border-border" />
          満枠
        </span>
      </div>
    </div>
  )
}
