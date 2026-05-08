import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | cocoaruco',
  description:
    '株式会社ココアルコの特定商取引法に基づく表記です。販売事業者、所在地、お支払い方法、サービス提供時期、返品・キャンセル等についてお伝えしています。',
}

const ITEMS = [
  {
    label: '販売事業者',
    content: '株式会社ココアルコ',
  },
  {
    label: '代表者',
    content: '小野寺 悠介',
  },
  {
    label: '所在地',
    content: '〒544-0033 大阪府大阪市生野区勝山北 1-20-17',
  },
  {
    label: '電話番号',
    content: '050-5526-1237',
    note: '電話受付時間：平日 9:00〜18:00（土日祝休）',
  },
  {
    label: 'メールアドレス',
    content: 'hello@cocoaruco.jp',
    note: 'お問い合わせは原則として、お問い合わせフォームよりお願いいたします。',
    contactLink: true,
  },
  {
    label: '設立',
    content: '2022年7月2日',
  },
  {
    label: '資本金',
    content: '300万円',
  },
  {
    label: '事業内容',
    content: 'ペットシッター・ペットタクシーをはじめとする総合ペットケアサービスの提供',
  },
  {
    label: '動物取扱業登録',
    contentBlock: 'animal-license',
  },
  {
    label: '動物取扱責任者',
    content: '小野寺 香織',
  },
  {
    label: '販売価格',
    contentBlock: 'pricing',
  },
  {
    label: '商品代金以外の必要料金',
    contentBlock: 'extra-fees',
  },
  {
    label: 'お支払い方法',
    contentBlock: 'payment-methods',
  },
  {
    label: 'お支払い時期',
    contentBlock: 'payment-timing',
  },
  {
    label: '役務の提供時期',
    content:
      'ご予約時にご指定いただいた日時に、サービスを提供いたします。Meet & Greet（事前面談）はご利用前に別途実施します。',
  },
  {
    label: '返品・キャンセルについて',
    contentBlock: 'cancellation',
  },
  {
    label: 'ご利用環境',
    content:
      '本サービスのご予約・ご利用にあたっては、インターネット接続環境および電子メールアドレスが必要となります。',
  },
] as const

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
            特定商取引に関する法律第11条に基づき、株式会社ココアルコの事業者情報、お支払い、お申し込み、ご解約等についてお伝えします。
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-text-muted">
            <span>最終更新日：2026年4月1日</span>
            <span aria-hidden="true">·</span>
            <span>株式会社ココアルコ</span>
          </div>
        </div>
      </section>

      {/* ─────────────── 表記テーブル ─────────────── */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <div className="rounded-lg border border-border-subtle bg-surface overflow-hidden">
            <dl className="divide-y divide-border-subtle">
              {ITEMS.map((item) => (
                <div key={item.label} className="px-4 py-4">
                  <dt className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-text-primary leading-relaxed">
                    <ItemContent item={item} />
                  </dd>
                </div>
              ))}
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
          <p className="text-sm text-text-primary leading-relaxed mb-3">
            本表記の各項目について、より詳しい運用ルールや具体例は、サービスポリシーにてご確認いただけます。
          </p>

          <ul className="mt-5 space-y-2.5">
            <li>
              <a
                href="/petsitter/policy"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0">
                  →
                </span>
                <span className="leading-relaxed">
                  ペットシッター サービスポリシー（全14章）
                </span>
              </a>
            </li>
            <li>
              <a
                href="/policy/privacy"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0">
                  →
                </span>
                <span className="leading-relaxed">プライバシーポリシー</span>
              </a>
            </li>
            <li>
              <a
                href="/policy/site"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0">
                  →
                </span>
                <span className="leading-relaxed">サイトポリシー</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0">
                  →
                </span>
                <span className="leading-relaxed">お問い合わせフォーム</span>
              </a>
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

// ─────────────── 各項目の内容を出し分けるサブコンポーネント ───────────────

type Item = (typeof ITEMS)[number]

function ItemContent({ item }: { item: Item }) {
  // contentBlock を持つ項目はカスタムレンダリング
  if ('contentBlock' in item) {
    switch (item.contentBlock) {
      case 'animal-license':
        return (
          <ul className="space-y-1.5">
            <li>
              第一種動物取扱業（保管）　大阪府第200075B号
              <br />
              <span className="text-text-secondary text-xs">登録日：2022年7月21日</span>
            </li>
            <li>
              第一種動物取扱業（訓練）　大阪府第240053D号
              <br />
              <span className="text-text-secondary text-xs">登録日：2024年7月17日</span>
            </li>
          </ul>
        )

      case 'pricing':
        return (
          <>
            <p>
              各サービスの料金は、本サイトの各サービスご紹介ページ、およびマイページの予約画面に表示しております。
            </p>
            <p className="mt-2">
              詳しくは{' '}
              <a
                href="/petsitter/policy#pricing"
                className="text-primary underline underline-offset-2 hover:text-primary-hover"
              >
                サービスポリシー 02. 料金について
              </a>
              {' '}をご覧ください。
            </p>
          </>
        )

      case 'extra-fees':
        return (
          <>
            <p>サービス料金に加えて、以下の料金が発生する場合があります。</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>当日・前日予約料金（+1,100円・税込）</li>
              <li>合鍵1本のみお預けの場合の加算（+440円/回・税込）</li>
              <li>キーボックスの送料（880円・税込）</li>
              <li>合鍵長期保管サービス（年額2,200円・税込）</li>
              <li>合鍵郵送返却料（330円〜660円・税込）</li>
              <li>買物代行オプション（+1,100円・税込）</li>
              <li>担当エリア外でのMeet &amp; Greet実施時の往復交通費（実費）</li>
              <li>キャンセル料（規定に応じて発生）</li>
            </ul>
            <p className="mt-2">
              詳しくは{' '}
              <a
                href="/petsitter/policy"
                className="text-primary underline underline-offset-2 hover:text-primary-hover"
              >
                サービスポリシー
              </a>
              {' '}の各章をご覧ください。
            </p>
          </>
        )

      case 'payment-methods':
        return (
          <>
            <p>クレジットカード（VISA / Mastercard / JCB / American Express / Diners Club / Discover / 銀聯）。</p>
            <p className="mt-2 text-xs text-text-secondary">
              決済処理は Square Inc. のシステムを利用しています。クレジットカード情報は決済代行事業者が管理し、当社サーバーには保存されません。
            </p>
          </>
        )

      case 'payment-timing':
        return (
          <>
            <p>毎月、以下の締め期間ごとに、ご登録のクレジットカードから自動決済いたします。</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <strong>1日〜15日</strong>のご利用分　→　翌16日に決済
              </li>
              <li>
                <strong>16日〜末日</strong>のご利用分　→　翌1日に決済
              </li>
            </ul>
            <p className="mt-2">
              Meet &amp; Greet（事前面談）の料金は、その他のサービスご利用料金と同じ締め日にまとめて決済されます。
            </p>
            <p className="mt-2">
              詳しくは{' '}
              <a
                href="/petsitter/policy#payment"
                className="text-primary underline underline-offset-2 hover:text-primary-hover"
              >
                サービスポリシー 03. お支払いについて
              </a>
              {' '}をご覧ください。
            </p>
          </>
        )

      case 'cancellation':
        return (
          <>
            <p>本サービスは役務提供契約のため、商品の返品はございません。</p>
            <p className="mt-2">
              ご予約のキャンセル・スケジュール変更については、ご利用形態（定期コース・パスポート・スポット利用）ごとに規定が異なります。
            </p>
            <p className="mt-2">
              詳しくは{' '}
              <a
                href="/petsitter/policy#cancellation"
                className="text-primary underline underline-offset-2 hover:text-primary-hover"
              >
                サービスポリシー 04. キャンセル・スケジュール変更
              </a>
              {' '}をご覧ください。
            </p>
          </>
        )

      default:
        return null
    }
  }

  // 通常の content + note 項目
  return (
    <>
      {'content' in item && item.content && (
        <p className="break-all">{item.content}</p>
      )}
      {'note' in item && item.note && (
        <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
          {item.note}
        </p>
      )}
      {'contactLink' in item && item.contactLink && (
        <p className="mt-1.5 text-xs">
          <a
            href="/contact"
            className="text-primary underline underline-offset-2 hover:text-primary-hover"
          >
            お問い合わせフォームはこちら
          </a>
        </p>
      )}
    </>
  )
}
