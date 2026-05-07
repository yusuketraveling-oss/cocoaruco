'use client'

import { useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

const DAY_LABELS = ['月', '火', '水', '木', '金', '土', '日']

const slots = [
  { label: '時間枠 A', time: '9:00〜12:00' },
  { label: '時間枠 B', time: '12:00〜15:00' },
  { label: '時間枠 C', time: '15:00〜18:00' },
  { label: '時間枠 D', time: '18:00〜21:00' },
]

type Status = 'available' | 'few' | 'full'

function getStatus(weekOffset: number, dayIdx: number, slotIdx: number): Status {
  const val = Math.abs((weekOffset * 41 + dayIdx * 17 + slotIdx * 11) % 10)
  if (val < 5) return 'available'
  if (val < 8) return 'few'
  return 'full'
}

function getMondayOfWeek(offset: number): Date {
  const now = new Date()
  const day = now.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(now)
  monday.setDate(now.getDate() + diff + offset * 7)
  monday.setHours(0, 0, 0, 0)
  return monday
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  available: { label: '空き', className: 'bg-sitter-main/20 text-sitter-main' },
  few:       { label: '残りわずか', className: 'bg-amber/20 text-amber' },
  full:      { label: '満員', className: 'bg-gray-200 text-gray-400' },
}

export default function WeeklyCalendar() {
  const [weekOffset, setWeekOffset] = useState(0)

  const monday = getMondayOfWeek(weekOffset)
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })

  const fmt = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`

  return (
    <div>
      {/* Week nav */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setWeekOffset((w) => w - 1)}
          className="flex items-center gap-1 text-sm font-bold text-sitter-sub hover:text-sitter-main transition-colors px-4 py-2 rounded-full hover:bg-sitter-main/10"
        >
          <CaretLeft size={16} />
          前の週
        </button>
        <span className="text-sm font-bold text-navy">
          {fmt(weekDates[0])}（月）〜 {fmt(weekDates[6])}（日）
        </span>
        <button
          onClick={() => setWeekOffset((w) => w + 1)}
          className="flex items-center gap-1 text-sm font-bold text-sitter-sub hover:text-sitter-main transition-colors px-4 py-2 rounded-full hover:bg-sitter-main/10"
        >
          次の週
          <CaretRight size={16} />
        </button>
      </div>

      {/* Calendar grid */}
      <div className="overflow-x-auto rounded-2xl border border-white/60 bg-[#FDFCF8]/75 shadow-[0_8px_24px_-4px_rgba(0,46,78,0.06)]">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-sitter-sub/10">
              <th className="py-3 px-4 text-xs font-bold text-sitter-sub text-left w-32">時間枠</th>
              {weekDates.map((d, i) => (
                <th key={i} className="py-3 px-2 text-xs font-bold text-center">
                  <span className={`block ${i === 5 ? 'text-sitter-main' : i === 6 ? 'text-sitter-accent' : 'text-navy'}`}>
                    {DAY_LABELS[i]}
                  </span>
                  <span className="text-sitter-sub font-normal">{fmt(d)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, slotIdx) => (
              <tr key={slotIdx} className="border-b border-sitter-sub/10 last:border-0">
                <td className="py-4 px-4">
                  <p className="text-xs font-bold text-navy">{slot.label}</p>
                  <p className="text-xs text-sitter-sub">{slot.time}</p>
                </td>
                {Array.from({ length: 7 }, (_, dayIdx) => {
                  const status = getStatus(weekOffset, dayIdx, slotIdx)
                  const cfg = statusConfig[status]
                  return (
                    <td key={dayIdx} className="py-4 px-2 text-center">
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs font-bold ${cfg.className}`}
                      >
                        {cfg.label}
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-sitter-sub text-center">
        ※ 空き状況はリアルタイムでは更新されません。最新情報はお問い合わせください。
      </p>
    </div>
  )
}
