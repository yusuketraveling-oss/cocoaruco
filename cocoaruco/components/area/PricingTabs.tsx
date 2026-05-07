'use client'

import { useState } from 'react'

type Tab = 'regular' | 'passport' | 'spot'

const regularMenu = [
  { name: 'オリジナル・ケア', duration: '30分 / 45分', price: '¥3,300 / ¥4,400' },
  { name: 'プレミアム・ケア', duration: '60〜75分',   price: '¥5,500' },
  { name: '寝かしつけプラン', duration: '60〜90分',   price: '¥7,700' },
  { name: '追加 15分',       duration: '—',          price: '¥1,100' },
]

const passportPlans = [
  {
    name: '30 days',
    desc: '30日間有効のプリペイドパス',
    price: '¥22,000',
    note: '定期コース5回分相当',
  },
  {
    name: '60 days',
    desc: '60日間有効のプリペイドパス',
    price: '¥40,000',
    note: '定期コース10回分相当',
  },
  {
    name: 'シーズンパス',
    desc: '90日間有効のプリペイドパス',
    price: '¥55,000',
    note: '定期コース15回分相当',
  },
]

const spotMenu = [
  { name: 'クイック・ビジット', duration: '15分',      price: '¥3,300' },
  { name: 'オリジナル・ケア',   duration: '30分 / 45分', price: '¥4,400 / ¥5,500' },
  { name: 'プレミアム・ケア',   duration: '60〜75分',   price: '¥6,600' },
  { name: '寝かしつけプラン',   duration: '60〜90分',   price: '¥8,800' },
]

const tabs: { key: Tab; label: string }[] = [
  { key: 'regular', label: '定期コース' },
  { key: 'passport', label: 'パスポート' },
  { key: 'spot', label: 'スポット' },
]

export default function PricingTabs() {
  const [active, setActive] = useState<Tab>('regular')

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-2 mb-10 border-b border-sitter-sub/20">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 -mb-px ${
              active === tab.key
                ? 'border-sitter-main text-sitter-main'
                : 'border-transparent text-sitter-sub hover:text-navy'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Regular */}
      {active === 'regular' && (
        <div className="overflow-hidden rounded-2xl border border-white/60 bg-[#FDFCF8]/75 shadow-[0_8px_24px_-4px_rgba(0,46,78,0.06)]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sitter-sub/10 bg-sitter-main/5">
                <th className="py-3 px-6 text-xs font-bold text-sitter-sub text-left">メニュー</th>
                <th className="py-3 px-6 text-xs font-bold text-sitter-sub text-center">時間</th>
                <th className="py-3 px-6 text-xs font-bold text-sitter-sub text-right">料金（税込）</th>
              </tr>
            </thead>
            <tbody>
              {regularMenu.map((item, i) => (
                <tr key={i} className="border-b border-sitter-sub/10 last:border-0">
                  <td className="py-4 px-6 font-bold text-navy">{item.name}</td>
                  <td className="py-4 px-6 text-sm text-sitter-sub text-center">{item.duration}</td>
                  <td className="py-4 px-6 font-bold text-navy text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-6 py-4 text-xs text-sitter-sub border-t border-sitter-sub/10">
            ※ 移動費（¥550/回）が別途加算されます。合鍵の受け渡しが必要な場合は +¥440/回。
          </p>
        </div>
      )}

      {/* Passport */}
      {active === 'passport' && (
        <div className="grid md:grid-cols-3 gap-6">
          {passportPlans.map((plan, i) => (
            <div
              key={i}
              className="rounded-[40px] border border-white/60 bg-[#FDFCF8]/75 backdrop-blur-md shadow-[0_12px_40px_-8px_rgba(0,46,78,0.08)] p-8 flex flex-col gap-3"
            >
              <p className="text-lg font-black text-navy">{plan.name}</p>
              <p className="text-sm text-sitter-sub">{plan.desc}</p>
              <p className="text-2xl font-black text-sitter-main mt-2">{plan.price}</p>
              <p className="text-xs text-sitter-sub">{plan.note}</p>
            </div>
          ))}
        </div>
      )}

      {/* Spot */}
      {active === 'spot' && (
        <div className="overflow-hidden rounded-2xl border border-white/60 bg-[#FDFCF8]/75 shadow-[0_8px_24px_-4px_rgba(0,46,78,0.06)]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sitter-sub/10 bg-sitter-main/5">
                <th className="py-3 px-6 text-xs font-bold text-sitter-sub text-left">メニュー</th>
                <th className="py-3 px-6 text-xs font-bold text-sitter-sub text-center">時間</th>
                <th className="py-3 px-6 text-xs font-bold text-sitter-sub text-right">料金（税込）</th>
              </tr>
            </thead>
            <tbody>
              {spotMenu.map((item, i) => (
                <tr key={i} className="border-b border-sitter-sub/10 last:border-0">
                  <td className="py-4 px-6 font-bold text-navy">{item.name}</td>
                  <td className="py-4 px-6 text-sm text-sitter-sub text-center">{item.duration}</td>
                  <td className="py-4 px-6 text-sm text-navy text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-6 py-4 text-xs text-sitter-sub border-t border-sitter-sub/10">
            ※ スポット料金は定期コース料金に+¥1,100が加算されます。ご利用には事前のMeet &amp; Greetが必要です。
          </p>
        </div>
      )}
    </div>
  )
}
