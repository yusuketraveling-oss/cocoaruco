import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | cocoaruco',
  description:
    '株式会社ココアルコの特定商取引法に基づく表記です。販売事業者、お支払い、お申し込み、ご解約等についてお伝えしています。',
}

export default function LegalPage() {
  return (
    <main>
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Legal Notice
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            特定商取引法に
            <br />
            基づく表記
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            特定商取引に関する法律第11条に基づき、株式会社ココアルコの販売事業者情報、お支払い、ご解約等についてお伝えします。
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-text-muted">
            <span>最終更新日：2026年4月1日</span>
            <span aria-hidden="true">·</span>
            <span>株式会社ココアルコ</span>
          </div>
        </div>
      </section>

      {/* ─────────────── 表記項目 ─────────────── */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <div className="rounded-lg border border-border-subtle bg-bg overflow-hidden">
            <dl className="divide-y divide-border-subtle">
              {/* ─── 販売事業者 ─── */}
              <Item label="販売事業者">
                <p>株式会社ココアルコ</p>
              </Item>

              {/* ─── 代表者 ─── */}
              <Item label="代表者">
                <p>小野寺 悠介</p>
              </Item>

              {/* ─── 所在地 ─── */}
              <Item label="所在地">
                <p>〒544-0033</p>
                <p>大阪府大阪市生野区勝山北 1-20-17</p>
              </Item>

              {/* ─── 電話番号 ─── */}
              <Item label="電話番号">
                <p>050-5526-1237</p>
                <p className="mt-3 text-xs text-text-muted">
                  受付時間:平日 9:00〜18:00(土日祝休)
                </p>
              </Item>

              {/* ─── メールアドレス ─── */}
              <Item label="メールアドレス">
                <p className="break-all">hello@cocoaruco.jp</p>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  お問い合わせは下記フォームよりお寄せください。
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover"
                >
                  お問い合わせフォーム
                  <span aria-hidden="true">→</span>
                </Link>
              </Item>

              {/* ─── 販売価格 ─── */}
              <Item label="販売価格">
                <SubBlock title="ペットシッターサービス">
                  <p>各サービス紹介ページおよびマイページ予約画面に表示しております。</p>
                  <ItemLink href="/petsitter/policy#pricing">
                    料金の詳細を見る
                  </ItemLink>
                </SubBlock>

                <SubBlock title="ペットタクシーサービス" className="mt-5">
                  <p>ご利用区間・サイズ等に応じた料金体系です。詳細はお問い合わせください。</p>
                </SubBlock>
              </Item>

              {/* ─── 商品代金以外の必要料金 ─── */}
              <Item label="商品代金以外の必要料金">
                <p>サービス料金に加えて、ご利用形態やオプションに応じて、所定の追加料金が発生する場合があります。</p>
                <ItemLink href="/petsitter/policy">
                  サービスポリシーを見る
                </ItemLink>
              </Item>

              {/* ─── お支払い方法 ─── */}
              <Item label="お支払い方法">
                <SubBlock title="ペットシッターサービス">
                  <p>クレジットカード</p>
                  <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
                    VISA / Mastercard / JCB / American Express / Diners Club / Discover / 銀聯
                  </p>
                </SubBlock>

                <SubBlock title="ペットタクシーサービス" className="mt-5">
                  <p className="text-sm">対面でのご利用</p>
                  <p className="mt-1 text-xs text-text-secondary">現金 または クレジットカード(POSレジ決済)</p>

                  <p className="mt-3 text-sm">ネット予約でのご利用</p>
                  <p className="mt-1 text-xs text-text-secondary">クレジットカード</p>
                </SubBlock>

                <p className="mt-5 text-xs text-text-muted leading-relaxed border-t border-border-subtle pt-4">
                  オンラインでの決済処理は Square Inc. のシステムを利用しています。クレジットカード情報は決済代行事業者が管理し、当社サーバーには保存されません。
                </p>
              </Item>

              {/* ─── お支払い時期 ─── */}
              <Item label="お支払い時期">
                <SubBlock title="ペットシッターサービス">
                  <p>ご利用形態に応じて、以下のとおりです。</p>
                  <ul className="mt-2.5 space-y-2 text-sm text-text-primary">
                    <li>
                      <span className="font-medium">定期コース</span>
                      <span className="block mt-0.5 text-xs text-text-secondary leading-relaxed">
                        所定の締め日(毎月2回)に、ご登録のクレジットカードから自動決済
                      </span>
                    </li>
                    <li>
                      <span className="font-medium">パスポート(10回券)</span>
                      <span className="block mt-0.5 text-xs text-text-secondary leading-relaxed">
                        お申し込み時に一括決済
                      </span>
                    </li>
                    <li>
                      <span className="font-medium">スポット利用</span>
                      <span className="block mt-0.5 text-xs text-text-secondary leading-relaxed">
                        所定の締め日(毎月2回)に、ご登録のクレジットカードから自動決済
                      </span>
                    </li>
                  </ul>
                  <ItemLink href="/petsitter/policy#payment">
                    お支払いの詳細を見る
                  </ItemLink>
                </SubBlock>

                <SubBlock title="ペットタクシーサービス" className="mt-5">
                  <p className="text-sm">対面でのご利用</p>
                  <p className="mt-1 text-xs text-text-secondary">サービス提供時にお支払い</p>

                  <p className="mt-3 text-sm">ネット予約でのご利用</p>
                  <p className="mt-1 text-xs text-text-secondary">ご予約確定時または所定の方法で決済</p>
                </SubBlock>
              </Item>

              {/* ─── 役務の提供時期 ─── */}
              <Item label="役務の提供時期">
                <p>ご予約時にご指定いただいた日時に、サービスを提供いたします。</p>
              </Item>

              {/* ─── 返品・キャンセルについて ─── */}
              <Item label="返品・キャンセルについて">
                <p>本サービスは役務提供契約のため、商品の返品はございません。</p>

                <SubBlock title="ペットシッターサービス" className="mt-5">
                  <p>ご予約のキャンセルおよびスケジュール変更については、ご利用形態ごとに規定があります。</p>
                  <ItemLink href="/petsitter/policy#cancellation">
                    キャンセル規定を見る
                  </ItemLink>
                </SubBlock>

                <SubBlock title="ペットタクシーサービス" className="mt-5">
                  <p>ご予約のキャンセル等については、ご予約時にご案内するご利用条件をご確認ください。</p>
                </SubBlock>
              </Item>

              {/* ─── ご利用環境 ─── */}
              <Item label="ご利用環境">
                <p>本サービスのご予約・ご利用にあたっては、以下の連絡手段が必要となります。</p>
                <ul className="mt-3 space-y-1.5 text-sm text-text-primary">
                  <li className="flex gap-2">
                    <span className="text-text-muted shrink-0">•</span>
                    <span>LINE または Instagram アカウント</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-text-muted shrink-0">•</span>
                    <span>ご連絡可能な電話番号</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-text-muted shrink-0">•</span>
                    <span>メールアドレス</span>
                  </li>
                </ul>
              </Item>
            </dl>
          </div>
        </div>
      </section>

      {/* ─────────────── 末尾補足 ─────────────── */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            関連情報
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-5">
            販売事業者情報の詳細、運営方針、運営体制については、関連ページにてご確認いただけます。
          </p>

          <ul className="mt-5 space-y-1">
            <li>
              <Link
                href="/company"
                className="flex items-baseline gap-3 py-2.5 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">会社概要</span>
              </Link>
            </li>
            <li>
              <Link
                href="/petsitter/policy"
                className="flex items-baseline gap-3 py-2.5 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">ペットシッター サービスポリシー</span>
              </Link>
            </li>
            <li>
              <Link
                href="/policy/privacy"
                className="flex items-baseline gap-3 py-2.5 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">プライバシーポリシー</span>
              </Link>
            </li>
            <li>
              <Link
                href="/policy/site"
                className="flex items-baseline gap-3 py-2.5 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">サイトポリシー</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-baseline gap-3 py-2.5 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
                <span className="leading-relaxed">お問い合わせフォーム</span>
              </Link>
            </li>
          </ul>

          <p className="mt-8 text-[10px] text-text-muted leading-relaxed">
            本表記は、関連法令の改正、サービス内容の変更等に伴い、変更されることがあります。最新の内容は本ページにてご確認ください。
          </p>
        </div>
      </section>
    </main>
  )
}

// ─────────────── 共通サブコンポーネント ───────────────

type ItemProps = {
  label: string
  children: React.ReactNode
}

function Item({ label, children }: ItemProps) {
  return (
    <div className="px-5 py-5">
      <dt className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-3">
        {label}
      </dt>
      <dd className="text-sm text-text-primary leading-relaxed">
        {children}
      </dd>
    </div>
  )
}

type SubBlockProps = {
  title: string
  className?: string
  children: React.ReactNode
}

function SubBlock({ title, className = '', children }: SubBlockProps) {
  return (
    <div className={className}>
      <p className="text-[11px] font-medium text-text-secondary tracking-wide mb-2">
        {title}
      </p>
      <div>{children}</div>
    </div>
  )
}

type ItemLinkProps = {
  href: string
  children: React.ReactNode
}

function ItemLink({ href, children }: ItemLinkProps) {
  return (
    <Link
      href={href}
      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
