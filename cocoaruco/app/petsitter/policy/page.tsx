import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サービスポリシー | cocoaruco ペットシッター',
  description:
    'cocoarucoのペットシッターサービスについて、ご利用方法・料金・お支払い・キャンセル・鍵のお預かり・緊急時の対応など、ご利用にあたって知っておいていただきたいことを体系的にまとめています。',
}

export default function PolicyPage() {
  return (
    <main className="bg-white">
      {/* ─────────────── ヒーロー + 目次（linen の連続セクション） ─────────────── */}
      <section className="bg-linen">
        {/* ヒーロー部分 */}
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
          <p className="text-xs tracking-widest text-amber font-bold mb-5 uppercase">
            Service Policy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight tracking-wide">
            サービスポリシー
          </h1>
          <p className="mt-6 text-sm md:text-base text-text-primary leading-loose">
            cocoarucoのペットシッターサービスについて、ご利用方法・料金・お支払い・キャンセル・鍵のお預かり・緊急時の対応など、ご利用にあたって知っておいていただきたいことを体系的にまとめています。
          </p>
          <p className="mt-4 text-sm md:text-base text-text-primary leading-loose">
            ご利用前にお気になる項目から、お読みください。
          </p>

          {/* メタ情報 */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-primary/60">
            <span>最終更新日：2026年4月1日</span>
            <span aria-hidden="true">·</span>
            <span>株式会社ココアルコ</span>
          </div>
        </div>

        {/* 目次部分（白カード、linen 背景の中に浮かべる） */}
        <div className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="rounded-2xl bg-white border border-sitter-main/10 p-6 md:p-8">
            <p className="text-xs tracking-widest text-sitter-accent font-bold mb-5 uppercase">
              目次
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {CHAPTERS.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="flex items-baseline gap-3 py-2 text-sm text-brand-navy hover:text-sitter-main transition-colors"
                  >
                    <span className="text-[10px] tracking-widest text-sitter-accent font-bold shrink-0 pt-0.5">
                      {c.number}
                    </span>
                    <span className="leading-relaxed">{c.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────── 各章 ─────────────── */}
      <article className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* ここに章 01〜14 が次の指示で追加されます */}
        <p className="text-sm text-text-primary/40 italic">
          各章は順次追加されます。
        </p>
      </article>

      {/* ─────────────── 末尾の補足（linen 背景に静かに語りかける） ─────────────── */}
      <section className="bg-linen py-20 md:py-28 border-t border-sitter-main/10">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <p className="text-xs tracking-widest text-sitter-accent font-bold mb-5 uppercase">
            規約について
          </p>
          <p className="text-sm md:text-base text-text-primary leading-loose mb-4">
            本ページは、cocoarucoペットシッターサービスをご利用いただく方に向けて、ご利用方法・料金・運用ルールなどを、わかりやすくまとめたものです。
          </p>
          <p className="text-sm md:text-base text-text-primary leading-loose mb-4">
            具体的な権利義務関係を定めた利用規約は、ご入会フローまたは Meet &amp; Greet の際にお渡しし、ご同意をいただいたうえでサービスを開始します。
          </p>
          <p className="text-sm md:text-base text-text-primary leading-loose">
            ご検討段階で内容を確認されたい場合は、
            <a
              href="/contact"
              className="text-sitter-main underline underline-offset-2 hover:text-sitter-earth"
            >
              お問い合わせフォーム
            </a>
            からご連絡ください。担当よりお送りいたします。
          </p>

          <p className="mt-12 text-xs text-text-primary/50 leading-loose">
            本ポリシーは、サービスの改定に伴い変更される場合があります。最新版はマイページおよび本サービスサイトをご確認ください。
          </p>
        </div>
      </section>
    </main>
  )
}

// ─────────────── 14章の定義（メタ情報） ───────────────

const CHAPTERS = [
  { number: '01', id: 'how-to-use', title: 'ご利用方法について' },
  { number: '02', id: 'pricing', title: '料金について' },
  { number: '03', id: 'payment', title: 'お支払い方法について' },
  { number: '04', id: 'cancellation', title: 'キャンセル・スケジュール変更について' },
  { number: '05', id: 'reservation', title: 'ご予約について' },
  { number: '06', id: 'keys', title: '鍵のお預かりと入退室について' },
  { number: '07', id: 'health', title: 'ペットの健康と安全について' },
  { number: '08', id: 'walking', title: 'お散歩について' },
  { number: '09', id: 'home-environment', title: '訪問時の住居環境について' },
  { number: '10', id: 'emergency', title: '緊急時・もしもの時の対応について' },
  { number: '11', id: 'compensation', title: '賠償の取扱いについて' },
  { number: '12', id: 'mutual-comfort', title: 'ご家族・スタッフ双方の安心のために' },
  { number: '13', id: 'termination', title: 'ご契約の解除について' },
  { number: '14', id: 'privacy', title: '個人情報・プライバシーについて' },
]
