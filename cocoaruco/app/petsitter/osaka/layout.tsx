import { CTAButton } from '@/components/ui/CTAButton'

const policies = [
  { label: '利用規約', href: '/petsitter/policy/terms' },
  { label: '個人情報保護', href: '/petsitter/policy/privacy' },
  { label: 'キャンセル規定', href: '/petsitter/policy/cancel' },
  { label: '特商法表記', href: '/petsitter/policy/legal' },
  { label: '賠償規定', href: '/petsitter/policy/compensation' },
  { label: '合鍵預かり規定', href: '/petsitter/policy/keys' },
  { label: '緊急時対応', href: '/petsitter/policy/emergency' },
]

function AreaHeader() {
  return (
    <header className="fixed z-40 w-full bg-[#FDFCF8]/80 backdrop-blur-md border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex flex-col leading-tight">
          <span className="font-bold tracking-widest text-navy text-base">cocoaruco</span>
          <span className="text-xs text-sitter-main font-bold tracking-wider">ペットシッター｜大阪市</span>
        </a>
        <CTAButton href="#mgr" variant="primary" size="default" className="hidden sm:inline-flex">
          Meet &amp; Greet を予約する
        </CTAButton>
        <CTAButton href="#mgr" variant="primary" size="default" className="sm:hidden text-xs px-4 py-2">
          予約する
        </CTAButton>
      </div>
    </header>
  )
}

function AreaFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-wrap gap-x-6 gap-y-3 justify-center">
        {policies.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            {p.label}
          </a>
        ))}
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © 2026 cocoaruco All Rights Reserved.
      </div>
    </footer>
  )
}

export default function OsakaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-linen">
      <AreaHeader />
      <div className="flex-1">{children}</div>
      <AreaFooter />
    </div>
  )
}
