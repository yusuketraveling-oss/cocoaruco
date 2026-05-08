import type { Metadata } from 'next'
import { PolicyChapter } from '@/components/ui/PolicyChapter'
import { PolicySection } from '@/components/ui/PolicySection'

export const metadata: Metadata = {
  title: 'サイトポリシー | cocoaruco',
  description:
    'cocoarucoウェブサイトのご利用にあたっての注意事項、著作権・禁止事項・免責事項・外部リンクについてご説明します。',
}

const CHAPTERS = [
  { number: '01', id: 'about', title: 'サイトについて' },
  { number: '02', id: 'copyright', title: '著作権について' },
  { number: '03', id: 'prohibited', title: '禁止事項について' },
  { number: '04', id: 'disclaimer', title: '免責事項について' },
  { number: '05', id: 'links', title: 'リンクについて' },
]

export default function SitePolicyPage() {
  return (
    <main className="bg-bg">
      {/* ヒーロー */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Site Policy
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            サイトポリシー
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoaruco（cocoaruco.jp）のウェブサイト（以下「本サイト」）をご利用いただくにあたっての注意事項をまとめています。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            本サイトをご利用いただく場合、本ポリシーにご同意いただいたものとみなします。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-text-muted">
            <span>最終更新日：2026年4月1日</span>
            <span aria-hidden="true">·</span>
            <span>株式会社ココアルコ</span>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <div className="max-w-[430px] mx-auto px-4 pb-12">
        <div className="rounded-lg bg-surface border border-border-subtle p-5">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            目次
          </p>
          <ol className="space-y-1">
            {CHAPTERS.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
                >
                  <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0 pt-0.5">
                    {c.number}
                  </span>
                  <span className="leading-relaxed">{c.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 各章 */}
      <article className="max-w-[430px] mx-auto px-4 py-8">

        {/* ── 章 01：サイトについて ── */}
        <PolicyChapter
          number="01"
          id="about"
          title="サイトについて"
        >
          <PolicySection id="about-operator" title="運営者">
            <p>本サイトは、株式会社ココアルコ（以下「当社」）が運営するウェブサイトです。</p>
            <ul>
              <li>運営者：株式会社ココアルコ</li>
              <li>所在地：大阪府大阪市</li>
              <li>サービス名：cocoaruco（ペットシッター・ペットタクシー）</li>
            </ul>
          </PolicySection>

          <PolicySection id="about-change" title="サイト内容の変更・停止">
            <p>
              当社は、予告なく本サイトのコンテンツを変更・追加・削除することがあります。また、システムメンテナンスやその他の理由により、本サイトを一時的に停止することがあります。これらによってお客さまに損害が生じた場合、当社は責任を負いません。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 02：著作権 ── */}
        <PolicyChapter
          number="02"
          id="copyright"
          title="著作権について"
        >
          <PolicySection id="copyright-ownership" title="著作権の帰属">
            <p>
              本サイトに掲載されている文章・画像・動画・ロゴ・デザインその他のコンテンツに関する著作権は、当社または正当な権利を有する第三者に帰属します。著作権法で認められた範囲を超える複製・転載・改変・商業利用等は、当社の書面による事前許可なく行うことができません。
            </p>
          </PolicySection>

          <PolicySection id="copyright-use" title="ご利用いただける範囲">
            <p>
              個人的な閲覧・学習目的での利用は、著作権法の範囲内で認められます。SNS等でのシェア（URLの共有）は歓迎します。ただし、コンテンツのスクリーンショットや転載は、事前に
              <a href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-hover">
                お問い合わせ
              </a>
              ください。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 03：禁止事項 ── */}
        <PolicyChapter
          number="03"
          id="prohibited"
          title="禁止事項について"
        >
          <PolicySection id="prohibited-acts" title="禁止される行為">
            <p>本サイトのご利用にあたり、以下の行為を禁止します。</p>
            <ul>
              <li>本サイトまたは当社のサービスを妨害・破壊する行為</li>
              <li>他のお客さまや第三者に損害を与える行為</li>
              <li>不正アクセス・不正なデータ収集（スクレイピング等）</li>
              <li>当社または第三者の著作権・商標権・プライバシー等の権利を侵害する行為</li>
              <li>法令または公序良俗に反する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </PolicySection>

          <PolicySection id="prohibited-consequence" title="違反した場合の対応">
            <p>
              上記の禁止行為を行ったと当社が判断した場合、当該お客さまのご利用を停止するとともに、必要に応じて法的措置を取ることがあります。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 04：免責事項 ── */}
        <PolicyChapter
          number="04"
          id="disclaimer"
          title="免責事項について"
          toc={[
            { id: 'disclaimer-accuracy', label: 'コンテンツの正確性' },
            { id: 'disclaimer-damage', label: '損害について' },
            { id: 'disclaimer-environment', label: '閲覧環境について' },
          ]}
        >
          <PolicySection id="disclaimer-accuracy" title="コンテンツの正確性">
            <p>
              本サイトに掲載する情報は、正確性・最新性を保つよう努めていますが、その完全性・正確性を保証するものではありません。掲載情報に基づいてお客さまが行動した結果について、当社は責任を負いません。
            </p>
            <p>
              料金・サービス内容・対応エリアなどの情報は、予告なく変更されることがあります。最新情報は各ページをご確認ください。
            </p>
          </PolicySection>

          <PolicySection id="disclaimer-damage" title="損害について">
            <p>
              本サイトのご利用またはご利用できなかったことにより生じた損害について、当社の故意または重大な過失による場合を除き、当社は責任を負いません。
            </p>
          </PolicySection>

          <PolicySection id="disclaimer-environment" title="閲覧環境について">
            <p>
              本サイトは、主にスマートフォンでの閲覧を想定して設計されています。お使いのブラウザやデバイスによっては、一部の機能が正しく動作しない場合があります。常に最新のブラウザでのご利用を推奨します。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 05：リンクについて ── */}
        <PolicyChapter
          number="05"
          id="links"
          title="リンクについて"
        >
          <PolicySection id="links-outbound" title="外部サイトへのリンク">
            <p>
              本サイトには、当社が運営していない外部ウェブサイトへのリンクが含まれていることがあります。リンク先のサイトの内容・プライバシーポリシー・セキュリティについて、当社は責任を負いません。外部サイトのご利用は、お客さまご自身の判断と責任においてお願いします。
            </p>
          </PolicySection>

          <PolicySection id="links-inbound" title="本サイトへのリンク">
            <p>
              本サイトへのリンクは、原則として自由です。ただし、以下の場合はリンクをお断りします。
            </p>
            <ul>
              <li>フレーム内に本サイトを表示するリンク</li>
              <li>当社・本サイトを誤解させる表現を伴うリンク</li>
              <li>違法・公序良俗に反するサイトからのリンク</li>
            </ul>
            <p>
              ご不明な場合は、
              <a href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-hover">
                お問い合わせフォーム
              </a>
              からご連絡ください。個人情報の取扱いについては、
              <a href="/policy/privacy" className="text-primary underline underline-offset-2 hover:text-primary-hover">
                プライバシーポリシー
              </a>
              を別途ご確認ください。
            </p>
          </PolicySection>
        </PolicyChapter>

      </article>

      {/* 末尾補足 */}
      <section className="bg-surface py-12 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            準拠法と管轄
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-3">
            本ポリシーは日本法に準拠し、解釈されます。本サイトのご利用に関して紛争が生じた場合、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
          <p className="mt-8 text-[10px] text-text-muted leading-relaxed">
            制定日：2026年4月1日　株式会社ココアルコ
          </p>
        </div>
      </section>
    </main>
  )
}
