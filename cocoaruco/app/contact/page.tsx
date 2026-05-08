import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | cocoaruco',
  description:
    'cocoarucoサービスへのお問い合わせフォームです。サービス利用のご相談、取材・メディア対応、業務提携のご相談など、お気軽にお寄せください。',
}

export default function ContactPage() {
  return (
    <main>
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Contact
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            お問い合わせ
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoarucoのサービスについてのご質問、取材・メディア対応、業務提携のご相談など、お気軽にお寄せください。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            内容を確認のうえ、通常3営業日以内にご返信いたします。
          </p>
        </div>
      </section>

      {/* ─────────────── 別ページへの誘導 ─────────────── */}
      <section className="bg-surface py-8 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Looking For
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-4">
            お探しの内容によっては、以下のページもご活用ください。
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/petsitter/faq"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">よくあるご質問</span>
              </Link>
            </li>
            <li>
              <Link
                href="/petsitter/osaka/mgr"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">Meet &amp; Greet（事前面談）のお申し込み</span>
              </Link>
            </li>
            <li>
              <Link
                href="/petsitter/policy"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">サービスポリシー</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ─────────────── フォーム本体 ─────────────── */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            Inquiry Form
          </p>
          <h2 className="text-lg font-medium text-text-primary leading-tight mb-6">
            フォームに入力する
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* ─────────────── 補足情報 ─────────────── */}
      <section className="bg-surface py-12 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            About Inquiry
          </p>

          <div className="space-y-6 text-sm text-text-primary leading-relaxed">
            <div>
              <h3 className="text-base font-medium text-text-primary mb-2">
                ご返信のタイミング
              </h3>
              <p>
                通常3営業日以内にご返信いたします。お急ぎの内容は、お電話でお問い合わせください。
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-text-primary mb-2">
                電話でのお問い合わせ
              </h3>
              <p>050-5526-1237</p>
              <p className="text-xs text-text-muted mt-1">
                受付時間：平日 9:00〜18:00（土日祝休）
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-text-primary mb-2">
                メールアドレス
              </h3>
              <p className="break-all">hello@cocoaruco.jp</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
