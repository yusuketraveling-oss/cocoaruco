'use client'

import { useState } from 'react'
import { GlassCard } from '@/components/ui/GlassCard'
import { CTAButton } from '@/components/ui/CTAButton'
import AvailabilityCalendar from '@/components/ui/AvailabilityCalendar'

const SECTIONS = [
  '梅田・北区',
  '天王寺・阿倍野',
  'なんば・中央区',
  '住吉・住之江',
  '鶴見・城東',
]

export default function SectionCalendar() {
  const [zip, setZip] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [selected, setSelected] = useState(0)

  function handleSearch() {
    const z = zip.replace(/-/g, '')
    if (!z) return
    setResult('梅田・北区セクション')
    setSelected(0)
  }

  return (
    <div className="flex flex-col gap-12">
      <GlassCard className="p-6 flex flex-col gap-4">
        <p className="text-sm font-medium text-text-primary">郵便番号でセクションを確認する</p>
        <div className="flex gap-3">
          <input
            type="text"
            value={zip}
            onChange={(ev) => setZip(ev.target.value)}
            onKeyDown={(ev) => ev.key === 'Enter' && handleSearch()}
            placeholder="例：530-0001"
            maxLength={8}
            className="flex-1 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary bg-surface text-text-primary transition-colors text-sm"
          />
          <button
            onClick={handleSearch}
            className="shrink-0 rounded-md bg-primary text-text-inverse font-medium text-sm px-6 py-3 hover:bg-primary-hover transition-colors"
          >
            確認する
          </button>
        </div>
        {result && (
          <p className="text-sm font-medium text-accent-service">
            ✓ 対応セクション：{result}
          </p>
        )}
      </GlassCard>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SECTIONS.map((name, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className={[
              'cursor-pointer rounded-lg p-5 flex flex-col gap-2 transition-all border',
              selected === i
                ? 'bg-primary-subtle border-primary'
                : 'bg-surface border-border hover:border-border-strong',
            ].join(' ')}
          >
            <p className={`font-medium ${selected === i ? 'text-primary' : 'text-text-primary'}`}>
              {name}
            </p>
            <p className="text-xs text-text-secondary">空き状況を確認↓</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium text-text-primary">{SECTIONS[selected]}の空き状況</p>
        <AvailabilityCalendar mode="view" />
        <div className="flex flex-col items-start gap-4 pt-4 border-t border-border-subtle">
          <p className="text-sm text-text-secondary">
            ※ 予約はMeet &amp; Greetの完了後に可能です。
          </p>
          <CTAButton href="/petsitter/osaka/mgr" variant="primary" size="default">
            はじめての方はMeet &amp; Greetへ →
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
