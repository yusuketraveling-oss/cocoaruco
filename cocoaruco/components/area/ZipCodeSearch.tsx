'use client'

import { useState } from 'react'
import { X } from '@phosphor-icons/react'

const sections = [
  { name: '梅田・北区', href: '/petsitter/osaka/section/kita' },
  { name: '天王寺・阿倍野', href: '/petsitter/osaka/section/tennoji' },
  { name: 'なんば・中央区', href: '/petsitter/osaka/section/namba' },
  { name: '住吉・住之江', href: '/petsitter/osaka/section/sumiyoshi' },
  { name: '鶴見・城東', href: '/petsitter/osaka/section/tsurumi' },
]

type Result = 'matched' | 'unmatched' | null

export default function ZipCodeSearch() {
  const [zip, setZip] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [result, setResult] = useState<Result>(null)

  const handleSearch = () => {
    if (!zip.trim()) return
    // ダミー：常に非対応
    setResult('unmatched')
    setModalOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div>
      {/* Input row */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="例：530-0001"
          maxLength={8}
          className="flex-1 rounded-full px-6 py-3 border border-sitter-sub/30 bg-white text-ink placeholder:text-sitter-sub/40 focus:outline-none focus:ring-2 focus:ring-sitter-main/40"
        />
        <button
          onClick={handleSearch}
          className="rounded-full font-bold px-8 py-3 text-sm bg-navy text-white hover:bg-[#001f35] transition-all shrink-0"
        >
          確認する
        </button>
      </div>

      {/* Section cards */}
      <div className="mt-10">
        <p className="text-sm font-bold text-sitter-sub mb-4 tracking-wider uppercase">大阪市内のセクション</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group block rounded-2xl border border-white/60 bg-[#FDFCF8]/75 backdrop-blur-md p-5 transition-all ring-2 ring-transparent hover:ring-sitter-main shadow-[0_4px_16px_-4px_rgba(0,46,78,0.06)]"
            >
              <p className="font-bold text-navy group-hover:text-sitter-main transition-colors">
                {s.name}
              </p>
              <p className="text-xs text-sitter-sub mt-1">空き状況を見る →</p>
            </a>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 backdrop-blur-sm px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-[40px] p-10 max-w-sm w-full shadow-[0_24px_60px_-12px_rgba(0,46,78,0.2)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-sitter-sub hover:text-navy transition-colors"
              aria-label="閉じる"
            >
              <X size={20} />
            </button>

            {result === 'matched' && (
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold text-sitter-main">◎ ご利用いただけます！</p>
              </div>
            )}

            {result === 'unmatched' && (
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold text-sitter-accent">
                  現在このエリアは対応しておりません
                </p>
                <p className="text-sm text-sitter-sub leading-relaxed">
                  サービスエリアは順次拡大しています。<br />
                  Instagramをフォローして最新情報をお受け取りください。
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-2 rounded-full font-bold px-6 py-2 text-sm bg-linen text-navy hover:bg-sitter-sub/10 transition-all"
                >
                  閉じる
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
