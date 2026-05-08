import type { Metadata } from 'next'
import type { Icon } from '@phosphor-icons/react'
import Link from 'next/link'
import {
  ChatCircle,
  Phone,
  EnvelopeSimple,
  ChatTeardropDots,
  Camera,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'ご利用案内 | cocoaruco ペットシッター',
  description:
    'cocoarucoペットシッターサービスを快適にご利用いただくための運用ガイドです。窓口の使い分け、予約のしくみ、合鍵の管理、お支払い、シッティングレポートまで、実用的にまとめています。',
}

const SECTIONS = [
  { id: 'channels', number: '01', title: '窓口の使い分け' },
  { id: 'reservation', number: '02', title: 'ご予約のしくみ' },
  { id: 'report', number: '03', title: 'シッティングレポート' },
  { id: 'keys', number: '04', title: '合鍵の管理' },
  { id: 'payment', number: '05', title: 'お支払いの流れ' },
  { id: 'cancellation', number: '06', title: 'キャンセル・スケジュール変更' },
  { id: 'preparation', number: '07', title: 'ご利用前のご準備' },
  { id: 'flow', number: '08', title: 'ご利用までの流れ' },
]

export default function GuidePage() {
  return (
    <main>
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Guide
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            ご利用案内
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoarucoペットシッターサービスを、快適にご利用いただくための実用ガイドです。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            ふだんのやりとりや、予約・お支払い・合鍵の取扱いなど、運用面のポイントを、かゆいところに手が届く形でまとめています。
          </p>
        </div>
      </section>

      {/* ─────────────── 全体目次 ─────────────── */}
      <div className="max-w-[430px] mx-auto px-4 pb-12">
        <div className="rounded-lg bg-surface border border-border-subtle p-5">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            目次
          </p>
          <ol className="space-y-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
                >
                  <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0 pt-0.5">
                    {s.number}
                  </span>
                  <span className="leading-relaxed">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ─────────────── セクション本体 ─────────────── */}
      <article className="max-w-[430px] mx-auto px-4 py-8 space-y-16">

        {/* ─── 01. 窓口の使い分け ─── */}
        <GuideSection id="channels" number="01" title="窓口の使い分け">
          <p>
            cocoarucoでは、ご家族との連絡手段が複数ございます。シーンに合わせて、最適な窓口をお使いください。
          </p>

          <div className="my-6 space-y-3">
            <ChannelCard
              icon={ChatTeardropDots}
              name="マイページ"
              role="予約・履歴・支払い"
              description="ご予約の追加・変更、ご利用履歴、お支払い情報の確認は、すべてマイページから。"
            />
            <ChannelCard
              icon={ChatCircle}
              name="LINE公式アカウント"
              role="ふだんのやりとり"
              description="シッティングレポートの受け取り、担当チームへの日常的なご相談はLINEで。"
            />
            <ChannelCard
              icon={Phone}
              name="電話"
              role="緊急時"
              description="サービス中の急変やトラブル時は、お電話で直接ご連絡ください。"
            />
            <ChannelCard
              icon={EnvelopeSimple}
              name="メール / お問い合わせフォーム"
              role="新規問い合わせ"
              description="ご利用前のご相談やご質問は、メールまたはフォームからお気軽に。"
            />
          </div>

          <p className="text-xs text-text-muted leading-relaxed">
            スタッフの個人連絡先（個人の電話番号やSNS）の取得・接触はご遠慮ください。当社のシステムを介したやり取りに統一することで、ご家族にもスタッフにも、健全な距離感の中で長く続くサービスをお届けできます。
          </p>
          <Annotation>
            健全な距離感を保ったまま、長くお付き合いするための運用です。
          </Annotation>
        </GuideSection>

        {/* ─── 02. ご予約のしくみ ─── */}
        <GuideSection id="reservation" number="02" title="ご予約のしくみ">
          <p>
            ご予約はマイページから。毎月1日に翌月分のカレンダーが解放され、<span className="deco-text-olive">当月+3ヶ月先まで</span>ご予約いただけます。
          </p>

          <div className="my-6 rounded-lg border border-border-subtle bg-surface p-5">
            <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-4">
              カレンダー開放のしくみ（例：3月時点）
            </p>
            <div className="space-y-2.5">
              {[
                { month: '3月', range: '今月', state: 'ご予約済み・利用中', soon: false },
                { month: '4月', range: '+1ヶ月', state: 'ご予約可能', soon: false },
                { month: '5月', range: '+2ヶ月', state: 'ご予約可能', soon: false },
                { month: '6月', range: '+3ヶ月', state: 'ご予約可能', soon: false },
                { month: '7月', range: '+4ヶ月', state: '4/1解放予定', soon: true },
              ].map((row) => (
                <div
                  key={row.month}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-md text-sm ${
                    row.soon
                      ? 'bg-bg text-text-secondary border border-dashed border-border-subtle'
                      : 'bg-bg text-text-primary'
                  }`}
                >
                  <span className="font-medium w-12 shrink-0">{row.month}</span>
                  <span className="text-xs text-text-muted shrink-0 w-16">
                    {row.range}
                  </span>
                  <span className="text-xs">{row.state}</span>
                </div>
              ))}
            </div>
          </div>

          <p>
            <span className="deco-underline">定期コース</span>をご利用の方は、所定のスケジュールで翌月分の予約枠を当社が自動で確保します。
          </p>
          <Annotation>
            毎月の予約手続きの手間を、ご家族から取り除くため。
          </Annotation>

          <p>
            前日18時以降の新規ご予約には、特急手配のための前日・当日予約料金 <span className="deco-pill">+1,100円</span> が加算されます。早めのご予約がおすすめです。
          </p>

          <GuideLink href="/petsitter/policy#reservation">
            ご予約の詳細を見る
          </GuideLink>
        </GuideSection>

        {/* ─── 03. シッティングレポート ─── */}
        <GuideSection id="report" number="03" title="シッティングレポート">
          <p>
            お世話の様子を、写真と短い文章にまとめてお届けします。<span className="deco-fluorescent">1回のサービスにつき、サービス終了後に1通</span>お届けします。
          </p>

          <div className="my-6 rounded-lg border border-border-subtle bg-surface p-5">
            <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-4">
              レポートのイメージ
            </p>
            <div className="rounded-md bg-bg border border-border-subtle p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Camera size={16} className="text-text-secondary" />
                <p className="text-xs text-text-muted">○月○日（○）13:30 訪問</p>
              </div>
              <div className="aspect-[4/3] bg-surface-sunken rounded-sm flex items-center justify-center">
                <p className="text-[10px] text-text-muted">写真</p>
              </div>
              <p className="text-xs text-text-primary leading-relaxed">
                今日もとっても元気でした。お散歩中はリスを発見して、しばらく観察モード。
                ごはんもいつもどおり完食。お留守番中も穏やかに過ごせていました。
              </p>
            </div>
          </div>

          <p className="text-xs text-text-muted leading-relaxed">
            お世話中のご家族とのやり取りは、ご遠慮いただけますと幸いです。緊急のご用件のみ、お電話でご連絡ください。
          </p>
          <Annotation>
            その子と向き合う時間を大切にしたいので、ご報告はサービス終了後にまとめてお届けします。
          </Annotation>
        </GuideSection>

        {/* ─── 04. 合鍵の管理 ─── */}
        <GuideSection id="keys" number="04" title="合鍵の管理">
          <p>
            cocoarucoでは、<span className="deco-underline">合鍵を直接お預かりしない方法（スマートロック・キーボックス等）</span>を第一の選択肢としておすすめしています。
          </p>

          <div className="my-6 rounded-lg border border-border-subtle bg-surface p-5">
            <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-4">
              合鍵をお預けいただく場合の流れ
            </p>
            <ol className="space-y-3">
              {[
                { step: '01', label: 'お預け', detail: 'Meet & Greet時に2本以上をお預けいただきます' },
                { step: '02', label: '保管', detail: '本店の鍵付き保管庫で、専用システムにて個別管理' },
                { step: '03', label: 'サービス時に使用', detail: '担当スタッフが現場で使用、本店⇔現場で郵送' },
                { step: '04', label: '返却', detail: 'ご解約時、または郵送返送のご要請があれば' },
              ].map((item) => (
                <li key={item.step} className="flex gap-3">
                  <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0 pt-1 w-7">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-muted leading-relaxed mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p>
            ご予約が3ヶ月以上空く期間がある場合、長期保管サービス <span className="deco-pill">年額2,200円</span> もご用意しています。
          </p>
          <Annotation>
            本店⇔スタッフ間の往復郵送料も含まれます。
          </Annotation>

          <p className="text-xs text-text-muted leading-relaxed">
            合鍵のお預かり・お返しは、原則として対面で行います。スタッフの自宅での引き渡しは、防犯および担当スタッフの安全確保のため、お受けしておりません。
          </p>

          <GuideLink href="/petsitter/policy#keys">
            鍵のお預かりの詳細を見る
          </GuideLink>
        </GuideSection>

        {/* ─── 05. お支払いの流れ ─── */}
        <GuideSection id="payment" number="05" title="お支払いの流れ">
          <p>
            お支払いは、ご登録のクレジットカードからの自動決済。<span className="deco-bold-emphasis">月2回の締め日</span>で、ご家族のお手間を最小限にしています。
          </p>

          <div className="my-6 rounded-lg border border-border-subtle bg-surface p-5">
            <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-4">
              月次決済のタイムライン
            </p>
            <div className="space-y-3">
              <div className="rounded-md bg-bg p-4">
                <p className="text-xs text-text-secondary mb-1.5">前半利用分</p>
                <p className="text-sm">
                  <span className="font-medium">1日〜15日</span> のご利用 →{' '}
                  <span className="deco-pill ml-1">翌16日に自動決済</span>
                </p>
              </div>
              <div className="rounded-md bg-bg p-4">
                <p className="text-xs text-text-secondary mb-1.5">後半利用分</p>
                <p className="text-sm">
                  <span className="font-medium">16日〜末日</span> のご利用 →{' '}
                  <span className="deco-pill ml-1">翌1日に自動決済</span>
                </p>
              </div>
            </div>
          </div>

          <p>
            ご利用形態ごとに、お支払い時期が異なります：
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-text-muted shrink-0">•</span>
              <span><strong>定期コース・スポット利用</strong>：上記の締め日決済（後払い）</span>
            </li>
            <li className="flex gap-2">
              <span className="text-text-muted shrink-0">•</span>
              <span><strong>パスポート（10回券）</strong>：お申し込み時に一括決済（前払い）</span>
            </li>
          </ul>

          <Annotation>
            決済が失敗した場合は、メールでご連絡いたします。カードの有効期限切れや残高不足の場合は、マイページから情報の更新をお願いいたします。
          </Annotation>

          <GuideLink href="/petsitter/policy#payment">
            お支払いの詳細を見る
          </GuideLink>
        </GuideSection>

        {/* ─── 06. キャンセル・スケジュール変更 ─── */}
        <GuideSection id="cancellation" number="06" title="キャンセル・スケジュール変更">
          <p>
            ご予約のキャンセル・スケジュール変更は、<span className="deco-bold-emphasis">前日18時まで</span>マイページから受け付けております。
          </p>

          <div className="my-6 rounded-lg border border-border-subtle bg-surface p-5">
            <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-4">
              キャンセル料の発生タイミング
            </p>
            <div className="space-y-2.5">
              <CancelRow tier="無料" timing="2日前 18:00まで" free />
              <CancelRow tier="50%" timing="前日 18:00まで" />
              <CancelRow tier="100%" timing="前日 18:00以降・当日" />
            </div>
          </div>

          <p>
            キャンセルではなく<span className="deco-underline">他の日への振替</span>であれば、振替元の日付が属する締め期間の料金として処理されます。
          </p>

          <p className="text-xs text-text-muted leading-relaxed">
            定期コース・パスポート・スポット利用で細則が異なります。詳しくは下記をご覧ください。
          </p>

          <GuideLink href="/petsitter/policy#cancellation">
            キャンセル規定の詳細を見る
          </GuideLink>
        </GuideSection>

        {/* ─── 07. ご利用前のご準備 ─── */}
        <GuideSection id="preparation" number="07" title="ご利用前のご準備">
          <p>
            ご利用日までに、ご家族の中で整理しておいていただきたいことをまとめました。
          </p>
          <Annotation>
            Meet &amp; Greet がスムーズに進みます。
          </Annotation>

          <div className="my-6 rounded-lg border border-border-subtle bg-surface p-5">
            <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-4">
              事前にご準備いただきたいこと
            </p>
            <ul className="space-y-3">
              {[
                'その子の性格、好み、苦手なこと',
                '一日の暮らしのリズム（食事・睡眠・お散歩の時間帯）',
                '健康状態、既往歴、お薬の有無',
                'ご利用予定期間中のフード・トイレ用品',
                'かかりつけ動物病院の情報',
                '緊急連絡先（ご家族や信頼できる方）',
                'ご自宅への入退室方法のご検討',
                'ワクチン接種証明書（犬・猫）',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={16}
                    weight="regular"
                    className="text-text-secondary shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Annotation>
            一度にすべてを完璧に整えていただく必要はありません。Meet &amp; Greet でご一緒に確認させていただきますので、わかる範囲でご準備ください。
          </Annotation>

          <GuideLink href="/petsitter/osaka/mgr">
            Meet &amp; Greetの詳細を見る
          </GuideLink>
        </GuideSection>

        {/* ─── 08. ご利用までの流れ ─── */}
        <GuideSection id="flow" number="08" title="ご利用までの流れ">
          <p>
            ご利用を始めるまでは、3つのステップです。
          </p>
          <Annotation>
            お互いに納得した上で、サービスを始めます。
          </Annotation>

          <div className="my-6 space-y-3">
            <FlowStep
              step="01"
              title="マイページのご登録"
              description="お名前、ご連絡先、その子の情報をご登録ください。"
            />
            <FlowStep
              step="02"
              title="Meet & Greet（事前面談）"
              description="担当スタッフがご自宅を訪問し、その子の性格や住環境、お世話の流れをご一緒に確認します。"
            />
            <FlowStep
              step="03"
              title="シッティング開始"
              description="Meet & Greetでお互いに納得した内容にもとづき、ご予約・サービスを開始します。"
            />
          </div>

          <p className="text-xs text-text-muted leading-relaxed">
            <span className="deco-underline">Meet &amp; Greetは初回ご利用前の必須ステップ</span>です。所要時間60分前後、料金 <span className="deco-pill">3,300円</span>。
          </p>
        </GuideSection>
      </article>

      {/* ─────────────── 末尾CTA ─────────────── */}
      <section className="bg-surface py-16 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4 text-center">
          <h2 className="text-xl font-medium text-text-primary leading-tight tracking-tight">
            ご利用を始めましょう
          </h2>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            ご不明な点があれば、お気軽にお問い合わせください。
            <br />
            ご利用前のご相談も歓迎しております。
          </p>
          <div className="mt-8 space-y-3">
            <Link
              href="/petsitter/osaka/mgr"
              className="block w-full px-6 py-3.5 rounded-md bg-primary text-text-inverse text-sm font-medium tracking-wide hover:bg-primary-hover transition-colors"
            >
              Meet &amp; Greetを申し込む
            </Link>
            <Link
              href="/petsitter/faq"
              className="block w-full px-6 py-3.5 rounded-md text-sm font-medium tracking-wide text-text-primary hover:text-primary transition-colors"
            >
              よくあるご質問を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─────────────── 共通サブコンポーネント ───────────────

type GuideSectionProps = {
  id: string
  number: string
  title: string
  children: React.ReactNode
}

function GuideSection({ id, number, title, children }: GuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="mb-5">
        <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-1.5">
          Section {number}
        </p>
        <h2 className="text-xl font-medium text-text-primary leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-sm text-text-primary leading-relaxed">
        {children}
      </div>
    </section>
  )
}

type ChannelCardProps = {
  icon: Icon
  name: string
  role: string
  description: string
}

function ChannelCard({ icon: Icon, name, role, description }: ChannelCardProps) {
  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-4">
      <div className="flex items-start gap-3">
        <Icon size={18} weight="regular" className="text-text-secondary shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-medium text-text-primary">{name}</p>
            <p className="text-[10px] text-text-secondary tracking-wide uppercase">
              {role}
            </p>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mt-1.5">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

type CancelRowProps = {
  tier: string
  timing: string
  free?: boolean
}

function CancelRow({ tier, timing, free = false }: CancelRowProps) {
  return (
    <div className="flex items-center gap-3 py-2.5 px-3 rounded-md bg-bg">
      {free ? (
        <span className="deco-text-olive text-sm font-medium w-16 shrink-0">
          {tier}
        </span>
      ) : (
        <span className="deco-pill w-16 text-center shrink-0">
          {tier}
        </span>
      )}
      <span className="text-xs text-text-secondary">{timing}</span>
    </div>
  )
}

type FlowStepProps = {
  step: string
  title: string
  description: string
}

function FlowStep({ step, title, description }: FlowStepProps) {
  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-5">
      <div className="flex items-start gap-4">
        <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0 pt-1">
          STEP {step}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-text-primary">{title}</h3>
          <p className="text-xs text-text-muted leading-relaxed mt-2">{description}</p>
        </div>
      </div>
    </div>
  )
}

type GuideLinkProps = {
  href: string
  children: React.ReactNode
}

function GuideLink({ href, children }: GuideLinkProps) {
  return (
    <Link
      href={href}
      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover"
    >
      {children}
      <ArrowRight size={12} weight="regular" />
    </Link>
  )
}

type AnnotationProps = {
  children: React.ReactNode
}

function Annotation({ children }: AnnotationProps) {
  return (
    <div className="mt-3 flex items-start gap-2 pl-3 border-l border-border-subtle">
      <span
        className="text-xs text-text-secondary shrink-0 select-none mt-px"
        aria-hidden="true"
      >
        ✎
      </span>
      <p className="text-xs text-text-muted leading-relaxed italic">
        {children}
      </p>
    </div>
  )
}
