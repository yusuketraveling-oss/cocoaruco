'use client'

import { useState } from 'react'

type Plan = 'regular' | 'passport' | 'spot'

const PLAN_LABELS: Record<Plan, string> = {
  regular: '定期コース',
  passport: 'パスポート',
  spot: 'スポット利用',
}

const PLAN_DESCRIPTIONS: Record<Plan, string> = {
  regular:
    '決まった曜日・時間枠で継続的にご利用いただく形態。最も低い単価でご利用いただけます。',
  passport:
    '10回分を一括事前購入。有効期限内に自由にご予約いただけます。',
  spot: '1日程ずつ単発でご利用いただけます。',
}

const PRICING: Record<Plan, Array<{ name: string; duration: string; price: string }>> = {
  regular: [
    { name: 'クイック・ビジット', duration: '15分', price: '3,300円' },
    { name: 'オリジナル・ケア 30分', duration: '30分', price: '3,300円' },
    { name: 'オリジナル・ケア 45分', duration: '45分', price: '4,400円' },
    { name: 'プレミアム・ケア', duration: '60〜75分', price: '5,500円' },
    { name: '寝かしつけプラン', duration: '60〜90分', price: '7,700円' },
  ],
  passport: [
    { name: '30 Days パス（10回分）', duration: 'オリジナル30分', price: '35,200円' },
    { name: '60 Days パス（10回分）', duration: 'オリジナル30分', price: '36,300円' },
    { name: 'シーズン パス（10回分）', duration: 'オリジナル30分', price: '38,500円' },
  ],
  spot: [
    { name: 'クイック・ビジット', duration: '15分', price: '3,300円' },
    { name: 'オリジナル・ケア 30分', duration: '30分', price: '4,400円' },
    { name: 'オリジナル・ケア 45分', duration: '45分', price: '5,500円' },
    { name: 'プレミアム・ケア', duration: '60〜75分', price: '6,600円' },
    { name: '寝かしつけプラン', duration: '60〜90分', price: '8,800円' },
  ],
}

export function PricingTabs() {
  const [activeTab, setActiveTab] = useState<Plan>('regular')

  return (
    <div>
      <div className="flex gap-1 mb-4 p-1 bg-surface-sunken rounded-md">
        {(Object.keys(PLAN_LABELS) as Plan[]).map((plan) => (
          <button
            key={plan}
            type="button"
            onClick={() => setActiveTab(plan)}
            className={`
              flex-1 py-2 px-3
              text-xs font-medium tracking-wide
              rounded-sm
              transition-colors duration-150
              ${
                activeTab === plan
                  ? 'bg-surface text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }
            `}
          >
            {PLAN_LABELS[plan]}
          </button>
        ))}
      </div>

      <p className="text-xs text-text-secondary leading-relaxed mb-4">
        {PLAN_DESCRIPTIONS[activeTab]}
      </p>

      <div className="rounded-lg border border-border-subtle overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {PRICING[activeTab].map((item, i) => (
              <tr
                key={i}
                className={
                  i !== PRICING[activeTab].length - 1
                    ? 'border-b border-border-subtle'
                    : ''
                }
              >
                <td className="px-4 py-3">
                  <div className="text-text-primary">{item.name}</div>
                  <div className="text-[10px] text-text-muted">{item.duration}</div>
                </td>
                <td className="px-4 py-3 text-right font-medium text-text-primary">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[10px] text-text-muted leading-relaxed">
        ※ 料金はすべて消費税込みの総額表示です。
        <br />※ 詳細は{' '}
        <a
          href="/petsitter/policy#pricing"
          className="text-primary underline underline-offset-2 hover:text-primary-hover"
        >
          サービスポリシー「料金について」
        </a>
        をご覧ください。
      </p>
    </div>
  )
}
