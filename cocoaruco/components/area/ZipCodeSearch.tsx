'use client'

import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export function ZipCodeSearch() {
  const [zip, setZip] = useState('')
  const [result, setResult] = useState<'idle' | 'pending'>('idle')

  const handleSearch = () => {
    setResult('pending')
  }

  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-5">
      <h3 className="text-base font-medium text-text-primary mb-2">
        郵便番号から確認
      </h3>
      <p className="text-xs text-text-secondary leading-relaxed mb-4">
        ご自宅の郵便番号を入力してください。対応エリアかどうかをご確認いただけます。
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/[^0-9-]/g, ''))}
          onKeyDown={(e) => e.key === 'Enter' && zip.length >= 7 && handleSearch()}
          placeholder="123-4567"
          maxLength={8}
          className="
            flex-1 px-4 py-3
            bg-surface
            border-[1.5px] border-border
            rounded-md
            text-base text-text-primary
            placeholder:text-text-muted
            focus:outline-none focus:border-primary
            transition-colors duration-150
          "
        />
        <button
          type="button"
          onClick={handleSearch}
          disabled={zip.length < 7}
          className="
            inline-flex items-center justify-center gap-2
            px-5 py-3
            bg-primary text-text-inverse
            rounded-md
            text-sm font-medium tracking-wide
            transition-colors duration-150
            hover:bg-primary-hover
            disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          <MagnifyingGlass size={16} weight="regular" />
          確認
        </button>
      </div>

      {result === 'pending' && (
        <p className="mt-3 text-xs text-text-muted">
          ※ 検索機能は準備中です。お電話・お問い合わせフォームよりお気軽にお問い合わせください。
        </p>
      )}
    </div>
  )
}
