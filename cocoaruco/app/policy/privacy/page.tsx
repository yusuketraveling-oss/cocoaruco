import type { Metadata } from 'next'
import { PolicyChapter } from '@/components/ui/PolicyChapter'
import { PolicySection } from '@/components/ui/PolicySection'
import { PolicyCallout } from '@/components/ui/PolicyCallout'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | cocoaruco',
  description:
    '株式会社ココアルコが運営するcocoarucoにおける個人情報の定義・利用目的・第三者提供・Cookie・お客さまの権利についてご説明します。',
}

const CHAPTERS = [
  { number: '01', id: 'definition', title: '個人情報の定義と収集について' },
  { number: '02', id: 'purpose', title: '情報の利用目的について' },
  { number: '03', id: 'sharing', title: '第三者への情報提供について' },
  { number: '04', id: 'cookie', title: 'Cookie・アクセス解析について' },
  { number: '05', id: 'rights', title: 'お客さまの権利について' },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg">
      {/* ヒーロー */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Privacy Policy
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            プライバシーポリシー
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            株式会社ココアルコ（以下「当社」）は、cocoarucoのウェブサイトおよびサービスにおいて、お客さまの個人情報を適切に取り扱うことが事業の根幹であると考えています。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            本ポリシーは、当社がどのような情報を収集し、どのように利用・管理するかをご説明するものです。
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

        {/* ── 章 01：個人情報の定義と収集 ── */}
        <PolicyChapter
          number="01"
          id="definition"
          title="個人情報の定義と収集について"
          lead="当社が「個人情報」として取り扱う情報の範囲と、収集する情報の種類についてご説明します。"
        >
          <PolicySection id="definition-what" title="個人情報とは">
            <p>
              本ポリシーにおける「個人情報」とは、氏名・住所・電話番号・メールアドレスなど、特定の個人を識別できる情報、またはほかの情報と組み合わせることで特定の個人を識別できる情報をいいます。個人情報の保護に関する法律（個人情報保護法）の定義に準じます。
            </p>
          </PolicySection>

          <PolicySection id="definition-collect" title="収集する情報の種類">
            <p>当社は、以下の場面で個人情報を収集することがあります。</p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              お問い合わせ・会員登録時
            </h4>
            <ul>
              <li>お名前、メールアドレス、電話番号</li>
              <li>ご住所（ペットシッターサービスご利用時）</li>
              <li>ペットに関する情報（種類、年齢、健康状態など）</li>
            </ul>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              サービス利用時
            </h4>
            <ul>
              <li>ご予約情報・ご利用履歴</li>
              <li>お支払い情報（カード情報は決済代行事業者が管理します）</li>
              <li>ご自宅の入退室に関する情報</li>
            </ul>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              ウェブサイト閲覧時
            </h4>
            <ul>
              <li>IPアドレス、ブラウザの種類、参照元URL</li>
              <li>Cookie・類似技術によるアクセス情報（04章に詳述）</li>
            </ul>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 02：情報の利用目的 ── */}
        <PolicyChapter
          number="02"
          id="purpose"
          title="情報の利用目的について"
          lead="収集した情報は、以下の目的のためにのみ使用します。目的外での利用は行いません。"
          toc={[
            { id: 'purpose-service', label: 'サービスの提供・運営' },
            { id: 'purpose-contact', label: 'ご連絡・ご案内' },
            { id: 'purpose-improvement', label: 'サービスの改善' },
            { id: 'purpose-legal', label: '法令に基づく対応' },
          ]}
        >
          <PolicySection id="purpose-service" title="サービスの提供・運営">
            <p>
              お問い合わせへの対応、ペットシッターサービスの予約管理・実施、お支払いの処理、マイページの運営など、cocoarucoのサービスをご提供するために利用します。
            </p>
          </PolicySection>

          <PolicySection id="purpose-contact" title="ご連絡・ご案内">
            <p>
              サービスに関する重要なお知らせ、ご予約の確認・変更、緊急時のご連絡など、お客さまとのコミュニケーションに利用します。
            </p>
            <p>
              メールマガジンやキャンペーン情報のご案内を希望される場合は、別途ご同意をいただいた上で送付します。ご同意いただいていないお客さまへの販促メールは送信しません。
            </p>
          </PolicySection>

          <PolicySection id="purpose-improvement" title="サービスの改善">
            <p>
              ご利用状況の分析、アンケートへのご協力などを通じて、サービスの品質向上・新機能の開発に役立てます。この場合、個人を特定できない形に加工（統計化・匿名化）した上で分析します。
            </p>
          </PolicySection>

          <PolicySection id="purpose-legal" title="法令に基づく対応">
            <p>
              法令・規制・行政機関の要請に基づき、適切な対応を行うために利用することがあります。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 03：第三者への情報提供 ── */}
        <PolicyChapter
          number="03"
          id="sharing"
          title="第三者への情報提供について"
          lead="当社は、お客さまの個人情報を、原則として第三者に提供しません。ただし、以下の場合には、必要な範囲で情報を提供することがあります。"
          toc={[
            { id: 'sharing-exception', label: '提供する場合の例外' },
            { id: 'sharing-partner', label: '業務委託先への提供' },
            { id: 'sharing-payment', label: '決済代行事業者との連携' },
          ]}
        >
          <PolicySection id="sharing-exception" title="提供する場合の例外">
            <p>以下の場合に限り、個人情報を第三者に提供することがあります。</p>
            <ul>
              <li>お客さまご本人から事前にご同意をいただいた場合</li>
              <li>法令に基づき開示が求められた場合</li>
              <li>人の生命・身体・財産の保護のために必要で、ご本人の同意を得ることが困難な場合</li>
              <li>国の機関や地方公共団体、またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </PolicySection>

          <PolicySection id="sharing-partner" title="業務委託先への提供">
            <p>
              サービスの運営・改善のために、業務を委託する企業（システム開発会社・サーバー管理会社など）に情報を提供することがあります。その際は、委託先との間で秘密保持契約を締結し、適切な管理を求めます。
            </p>
            <p>
              委託先においても、提供された情報を委託業務の目的以外には使用させません。
            </p>
          </PolicySection>

          <PolicySection id="sharing-payment" title="決済代行事業者との連携">
            <PolicyCallout variant="info" title="Square について">
              当社は、決済処理に Square, Inc.（米国）のサービスを利用しています。お支払い時に入力されたカード情報は、当社サーバーを経由せず、Square のシステムで直接処理・管理されます。Square のプライバシーポリシーについては、Square の公式サイトをご確認ください。
            </PolicyCallout>
            <p>
              当社が保持するお支払い情報は、「どの決済方法でいつ決済されたか」という記録のみです。カード番号・セキュリティコードなどの機密情報は当社では保持しません。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 04：Cookie・アクセス解析 ── */}
        <PolicyChapter
          number="04"
          id="cookie"
          title="Cookie・アクセス解析について"
          lead="当サイトでは、利便性の向上とアクセス解析のためにCookieおよび類似技術を使用しています。"
          toc={[
            { id: 'cookie-what', label: 'Cookieとは' },
            { id: 'cookie-use', label: '当サイトでの利用内容' },
            { id: 'cookie-opt-out', label: 'Cookieの無効化' },
          ]}
        >
          <PolicySection id="cookie-what" title="Cookieとは">
            <p>
              Cookieとは、ウェブサイトがお客さまのブラウザに保存する小さなテキストファイルです。次回以降の訪問時にウェブサイトがそのファイルを読み取ることで、お客さまの設定や状態を記憶し、利便性を高めることができます。
            </p>
          </PolicySection>

          <PolicySection id="cookie-use" title="当サイトでの利用内容">
            <p>当サイトでは、以下の目的でCookieおよびアクセス解析ツールを使用しています。</p>
            <ul>
              <li>ログイン状態の保持、マイページの動作</li>
              <li>ページビューや流入経路などのアクセス解析（Google Analytics等）</li>
              <li>お客さまに合わせた表示・設定の保持</li>
            </ul>
            <p>
              アクセス解析データは、個人を特定しない形で収集・分析されます。
            </p>
          </PolicySection>

          <PolicySection id="cookie-opt-out" title="Cookieの無効化">
            <p>
              ブラウザの設定からCookieを無効化することができます。ただし、Cookieを無効にすると、ログイン機能など一部の機能がご利用いただけなくなる場合があります。
            </p>
            <p>
              Google Analyticsのデータ収集を無効にしたい場合は、Google が提供するGoogle アナリティクス オプトアウトアドオンをご利用ください。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 05：お客さまの権利 ── */}
        <PolicyChapter
          number="05"
          id="rights"
          title="お客さまの権利について"
          lead="お客さまは、ご自身の個人情報について、以下の権利をお持ちです。"
          toc={[
            { id: 'rights-disclosure', label: '開示・訂正・削除の請求' },
            { id: 'rights-security', label: '安全管理について' },
            { id: 'rights-contact', label: 'お問い合わせ窓口' },
          ]}
        >
          <PolicySection id="rights-disclosure" title="開示・訂正・削除の請求">
            <p>お客さまは、当社が保有するご自身の個人情報について、以下の請求を行う権利をお持ちです。</p>
            <ul>
              <li><strong>開示</strong>：保有する個人情報の内容を確認したい</li>
              <li><strong>訂正・追加</strong>：保有する情報に誤りがある</li>
              <li><strong>削除</strong>：保有する情報を削除してほしい</li>
              <li><strong>利用停止</strong>：情報の利用を停止してほしい</li>
            </ul>
            <p>
              ご請求いただいた場合、本人確認を行った上で、法令の定める範囲内で速やかに対応いたします。
            </p>
          </PolicySection>

          <PolicySection id="rights-security" title="安全管理について">
            <p>
              当社は、お預かりした個人情報への不正アクセス・紛失・破壊・改ざん・漏洩を防止するため、適切な安全管理措置を講じています。また、個人情報を取り扱うスタッフに対して、適切な監督を行います。
            </p>
            <p>
              本ポリシーは、法令・社会情勢の変化、サービス内容の変更等に応じて見直し、必要な場合は改定いたします。改定した場合は、本ページ上でお知らせします。
            </p>
          </PolicySection>

          <PolicySection id="rights-contact" title="お問い合わせ窓口">
            <p>
              個人情報に関するご質問・ご請求・苦情は、下記の窓口までご連絡ください。
            </p>
            <div className="mt-4 rounded-lg bg-surface-sunken border border-border-subtle p-4 space-y-1.5">
              <p className="font-medium text-text-primary">株式会社ココアルコ</p>
              <p className="text-text-secondary">個人情報取扱責任者</p>
              <p className="text-text-secondary">大阪府大阪市</p>
              <a
                href="/contact"
                className="text-primary underline underline-offset-2 hover:text-primary-hover inline-block mt-1"
              >
                お問い合わせフォームへ
              </a>
            </div>
            <p>
              ご請求の内容によっては、対応までにお時間をいただく場合があります。また、法令上の例外に該当する場合、一部のご要望にお応えできないことがあります。あらかじめご了承ください。
            </p>
          </PolicySection>
        </PolicyChapter>

      </article>

      {/* 末尾補足 */}
      <section className="bg-surface py-12 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            改定について
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-3">
            本プライバシーポリシーは、法令の改正やサービス内容の変更に伴い、予告なく変更されることがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じるものとします。
          </p>
          <p className="text-sm text-text-primary leading-relaxed">
            ご不明な点は、
            <a
              href="/contact"
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              お問い合わせフォーム
            </a>
            からお気軽にご連絡ください。
          </p>
          <p className="mt-8 text-[10px] text-text-muted leading-relaxed">
            制定日：2026年4月1日　株式会社ココアルコ
          </p>
        </div>
      </section>
    </main>
  )
}
