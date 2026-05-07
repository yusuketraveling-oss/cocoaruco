import Link from 'next/link'

const serviceLinks = [
  { label: 'ペットシッターについて', href: '/petsitter' },
  { label: 'ご利用案内', href: '/petsitter/guide' },
  { label: 'よくあるご質問', href: '/petsitter/faq' },
  { label: '対応エリア', href: '/petsitter/area' },
]

const policyLinks = [
  { label: 'サービスポリシー', href: '/petsitter/policy' },
]

const companyLinks = [
  { label: '会社概要', href: '/company' },
  { label: '採用情報', href: '/recruit' },
  { label: 'お問い合わせ', href: '/contact' },
]

const siteLinks = [
  { label: 'プライバシーポリシー', href: '/policy/privacy' },
  { label: 'サイトポリシー', href: '/policy/site' },
  { label: '特定商取引法に基づく表記', href: '/policy/legal' },
]

type FooterLinkGroup = {
  heading: string
  links: { label: string; href: string }[]
}

const linkGroups: FooterLinkGroup[] = [
  { heading: 'サービス情報', links: serviceLinks },
  { heading: 'サービスポリシー', links: policyLinks },
  { heading: '会社情報', links: companyLinks },
  { heading: 'サイトポリシー', links: siteLinks },
]

export default function SitterFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Brand */}
        <div className="mb-10">
          <span className="text-lg font-bold tracking-widest">cocoaruco</span>
          <p className="mt-1 text-sm text-white/60 leading-relaxed">
            その子の暮らしを、そのまま大切に。
          </p>
        </div>

        {/* Link groups: 2-col on sm, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {linkGroups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
                {group.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-white/40">
          <span>© 2026 cocoaruco All Rights Reserved.</span>
          <span>第一種動物取扱業 大阪府登録（保管・訓練）</span>
        </div>
      </div>
    </footer>
  )
}
