'use client'

import { useState, Fragment } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

// ── Types ────────────────────────────────────────────────────────────────────

type SlotStatus = 'available' | 'few' | 'full' | 'express'
type SlotMap    = { A: SlotStatus; B: SlotStatus; C: SlotStatus; D: SlotStatus; E: SlotStatus }

const SLOT_KEYS = ['A', 'B', 'C', 'D', 'E'] as const
type SlotKey    = typeof SLOT_KEYS[number]

type CalendarDay = {
  date:     string
  dayLabel: string
  isToday:  boolean
  slots:    SlotMap
}

// ── Constants ────────────────────────────────────────────────────────────────

const SLOT_LABELS_STD: Record<SlotKey, string> = {
  A: '7:00–10:00', B: '10:00–13:00', C: '13:00–16:00', D: '16:00–19:00', E: '19:30–21:00',
}
const SLOT_LABELS_SUM: Record<SlotKey, string> = {
  A: '6:00–9:00', B: '9:00–11:00', C: '15:00–18:00', D: '18:00–21:00', E: '',
}

const DOW_JA = ['日', '月', '火', '水', '木', '金', '土']

// ── Helpers ──────────────────────────────────────────────────────────────────

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function isSummer(d: Date): boolean {
  const m = d.getMonth() + 1, day = d.getDate()
  return (m > 6 || (m === 6 && day >= 21)) && (m < 9 || (m === 9 && day <= 20))
}

function hashNum(dateStr: string, slotKey: string): number {
  let n = 0
  for (let i = 0; i < dateStr.length; i++) n = (n * 31 + dateStr.charCodeAt(i)) & 0x7fffffff
  return (n * 7 + slotKey.charCodeAt(0)) % 100
}

function getSlotStatus(
  dateStr: string, slotKey: SlotKey, dayIdx: number,
  todayStr: string, tomorrowStr: string, selectMode: boolean
): SlotStatus {
  if (!selectMode && (dateStr === todayStr || dateStr === tomorrowStr)) return 'express'
  const n = hashNum(dateStr, slotKey)
  if (dayIdx <= 3) return n < 60 ? 'available' : 'few'
  return n < 65 ? 'available' : 'full'
}

function generateDummyWeek(
  startDate: Date, todayStr: string, tomorrowStr: string, selectMode: boolean
): CalendarDay[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startDate)
    d.setDate(startDate.getDate() + i)
    const dateStr  = toDateStr(d)
    const dayLabel = `${d.getMonth() + 1}/${d.getDate()}（${DOW_JA[d.getDay()]}）`
    const isToday  = dateStr === todayStr
    const slots    = {} as SlotMap
    for (const key of SLOT_KEYS) {
      slots[key] = getSlotStatus(dateStr, key, i, todayStr, tomorrowStr, selectMode)
    }
    return { date: dateStr, dayLabel, isToday, slots }
  })
}

// ── Cell styling ─────────────────────────────────────────────────────────────

type CellMeta = { label: string; extra?: string; bg: string; text: string; border?: string }

function cellMeta(status: SlotStatus): CellMeta {
  switch (status) {
    case 'available': return { label: '空き',      bg: 'bg-sitter-main/20', text: 'text-sitter-main' }
    case 'few':       return { label: '残りわずか', bg: 'bg-amber/20',       text: 'text-amber' }
    case 'full':      return { label: '満員',       bg: 'bg-gray-100',       text: 'text-gray-400' }
    case 'express':   return { label: '空き', extra: '+¥1,100', bg: 'bg-sitter-main/20', text: 'text-sitter-main', border: 'border border-red-200' }
  }
}

// ── Main component ────────────────────────────────────────────────────────────

export default function AvailabilityCalendar({
  mode = 'view',
  onSelect,
  selectedDate,
  selectedSlot,
}: {
  mode?: 'view' | 'select'
  onSelect?: (date: string, slot: string) => void
  selectedDate?: string
  selectedSlot?: string
}) {
  const [weekOffset, setWeekOffset] = useState(0)

  const todayDate = new Date()
  todayDate.setHours(0, 0, 0, 0)
  const todayStr    = toDateStr(todayDate)
  const tomorrow    = new Date(todayDate); tomorrow.setDate(todayDate.getDate() + 1)
  const tomorrowStr = toDateStr(tomorrow)

  // mode="select" starts 2 days ahead (明後日), mode="view" starts from today
  const baseDate = mode === 'select'
    ? new Date(todayDate.getTime() + 2 * 86400000)
    : new Date(todayDate)

  const startDate = new Date(baseDate)
  startDate.setDate(baseDate.getDate() + weekOffset * 7)
  const endDate = new Date(startDate); endDate.setDate(startDate.getDate() + 6)

  const summer      = isSummer(startDate)
  const slotLabels  = summer ? SLOT_LABELS_SUM : SLOT_LABELS_STD
  const visibleSlots: SlotKey[] = summer ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'C', 'D', 'E']
  const days        = generateDummyWeek(startDate, todayStr, tomorrowStr, mode === 'select')

  // Month tabs: current month + 3 ahead
  const monthTabs = Array.from({ length: 4 }, (_, i) => {
    const d = new Date(todayDate.getFullYear(), todayDate.getMonth() + i, 1)
    return { year: d.getFullYear(), month: d.getMonth(), label: `${d.getMonth() + 1}月` }
  })

  // Which tab is active based on startDate's month
  const activeTab = Math.min(3, Math.max(0,
    (startDate.getFullYear() - todayDate.getFullYear()) * 12 + startDate.getMonth() - todayDate.getMonth()
  ))

  function jumpToMonth(tabIdx: number) {
    if (tabIdx === 0) { setWeekOffset(0); return }
    const target   = new Date(todayDate.getFullYear(), todayDate.getMonth() + tabIdx, 1)
    const diffDays = Math.round((target.getTime() - baseDate.getTime()) / 86400000)
    setWeekOffset(Math.max(0, Math.floor(diffDays / 7)))
  }

  function handleCell(date: string, slot: SlotKey, status: SlotStatus) {
    if (mode !== 'select' || status === 'full') return
    onSelect?.(date, slot)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Month tabs */}
      <div className="flex gap-2 flex-wrap">
        {monthTabs.map((tab, i) => (
          <button key={i} onClick={() => jumpToMonth(i)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
              activeTab === i ? 'bg-sitter-main text-white' : 'text-sitter-sub hover:text-navy'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Week navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setWeekOffset(o => o - 1)}
          disabled={weekOffset === 0}
          className="flex items-center gap-1.5 text-sm font-bold text-sitter-main disabled:text-gray-300 disabled:cursor-not-allowed hover:text-sitter-earth transition-colors"
        >
          <CaretLeft size={14} weight="bold" />前の週
        </button>
        <p className="text-sm font-bold text-navy font-numeric">
          {startDate.getFullYear()}.{startDate.getMonth() + 1}.{startDate.getDate()}
          {' – '}
          {endDate.getMonth() + 1}.{endDate.getDate()}
        </p>
        <button
          onClick={() => setWeekOffset(o => o + 1)}
          className="flex items-center gap-1.5 text-sm font-bold text-sitter-main hover:text-sitter-earth transition-colors"
        >
          次の週<CaretRight size={14} weight="bold" />
        </button>
      </div>

      {/* Calendar grid */}
      <div className="overflow-x-auto -mx-1 px-1">
        <div className="min-w-[560px] grid grid-cols-[80px_repeat(7,1fr)] gap-1">
          {/* Header row */}
          <div />
          {days.map(day => (
            <div key={day.date} className="flex items-center justify-center py-1">
              {day.isToday ? (
                <span className="rounded-full bg-sitter-main text-white px-2 py-0.5 text-[11px] font-bold text-center leading-snug whitespace-nowrap">
                  {day.dayLabel}
                </span>
              ) : (
                <span className="text-[11px] font-bold text-navy text-center whitespace-nowrap">
                  {day.dayLabel}
                </span>
              )}
            </div>
          ))}

          {/* Slot rows — each produces 1 label + 7 cells */}
          {visibleSlots.map(slotKey => (
            <Fragment key={slotKey}>
              <div className="flex flex-col justify-center pr-2 py-1">
                <p className="text-xs font-black text-navy">{slotKey}</p>
                <p className="text-[10px] text-sitter-sub leading-snug font-numeric">{slotLabels[slotKey]}</p>
              </div>

              {days.map(day => {
                const status     = day.slots[slotKey]
                const isSelected = mode === 'select' && selectedDate === day.date && selectedSlot === slotKey
                const { label, extra, bg, text, border } = cellMeta(status)
                const clickable  = mode === 'select' && status !== 'full'

                return (
                  <div
                    key={`${day.date}-${slotKey}`}
                    onClick={() => handleCell(day.date, slotKey, status)}
                    className={[
                      'rounded-lg p-2 text-center text-xs font-bold',
                      'transition-all duration-200',
                      'min-h-[60px] flex flex-col items-center justify-center gap-1',
                      isSelected
                        ? 'bg-sitter-main text-white border-2 border-sitter-main'
                        : [bg, text, border ?? ''].join(' '),
                      status === 'full' ? 'cursor-not-allowed' : '',
                      clickable ? 'cursor-pointer' : '',
                      mode === 'select' && !isSelected && status === 'available' ? 'hover:bg-sitter-main/40' : '',
                      mode === 'select' && !isSelected && status === 'few'       ? 'hover:bg-amber/40'       : '',
                    ].join(' ')}
                  >
                    {isSelected ? (
                      <><span>✓</span><span>選択中</span></>
                    ) : (
                      <>
                        <span>{label}</span>
                        {extra && <span className="text-[9px] text-red-400 font-bold leading-none">{extra}</span>}
                      </>
                    )}
                  </div>
                )
              })}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-sitter-sub">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-sitter-main/20 shrink-0" />空き
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-amber/20 shrink-0" />残りわずか
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-gray-100 shrink-0" />満員
        </span>
        {mode === 'view' && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm bg-sitter-main/20 border border-red-200 shrink-0" />直前手配 +¥1,100
          </span>
        )}
      </div>

      {/* Notes */}
      {mode === 'view' && (
        <p className="text-xs text-sitter-sub">※ 予約にはMeet &amp; Greetの完了が必要です。</p>
      )}
      {mode === 'select' && (
        <p className="text-xs text-sitter-sub">ご希望の日時をお選びください（確定後にスタッフよりご連絡します）</p>
      )}
      <p className="text-[11px] text-sitter-sub/50 text-center md:hidden">← 左右にスワイプして日付を移動</p>
    </div>
  )
}
