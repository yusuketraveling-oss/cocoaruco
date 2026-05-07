import Link from 'next/link'

const FOOTER_LINKS = {
  service: {
    title: 'サービス',
    links: [
      { label: 'ペットシッター', href: '/petsitter' },
      // 将来追加：{ label: 'ペットタクシー', href: '/pettaxi' },
    ],
  },
  company: {
    title: '会社情報',
    links: [
      { label: '会社概要', href: '/company' },
      { label: '採用情報', href: '/recruit' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
  site: {
    title: 'サイトポリシー',
    links: [
      { label: 'プライバシーポリシー', href: '/policy/privacy' },
      { label: 'サイトポリシー', href: '/policy/site' },
      { label: '特定商取引法に基づく表記', href: '/policy/legal' },
    ],
  },
}

export function BrandFooter() {
  return (
    <footer className="bg-surface-sunken border-t border-border-subtle mt-16">
      <div className="max-w-[430px] mx-auto px-4 py-12">
        <div className="space-y-8">
          {Object.values(FOOTER_LINKS).map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-primary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle">
          <p className="text-xs text-text-muted leading-relaxed">
            第一種動物取扱業 大阪府登録（保管・訓練）
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-corporate-navy font-medium tracking-wide">
            cocoaruco
          </p>
          <p className="mt-1 text-xs text-text-muted">
            運営：株式会社ココアルコ
          </p>
          <p className="mt-3 text-xs text-text-muted">
            © {new Date().getFullYear()} COCOARUCO Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
