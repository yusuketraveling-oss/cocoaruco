'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { CTAButton } from '@/components/ui/CTAButton'

// TODO(D-03): 完全再構築予定。元ファイルはエンコーディング破損により消失。
export default function MgrForm() {
  return (
    <div className="flex flex-col gap-6 max-w-[430px] mx-auto px-4 py-12">
      <GlassCard>
        <p className="text-base font-medium text-text-primary mb-2">
          Meet &amp; Greet のご予約
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">
          このページは現在準備中です。お問い合わせよりご連絡ください。
        </p>
      </GlassCard>
      <CTAButton href="/contact" variant="primary" size="block">
        お問い合わせはこちら
      </CTAButton>
    </div>
  )
}
