import type { Metadata } from 'next'
import Link from 'next/link'
import { RecruitForm } from '@/components/recruit/RecruitForm'

export const metadata: Metadata = {
  title: '採用情報 | cocoaruco',
  description:
    '株式会社ココアルコでは、ペットシッター・ペット送迎ドライバー・リーダー候補を募集しています。地域に住むスタッフのチームで、ご家族とその子の暮らしを支えるお仕事です。',
}

const POSITIONS = [
  {
    id: 'leader',
    title: 'リーダー候補',
    employmentType: '正社員',
    salary: '月給 28万円〜',
    workStyle: 'スーパーフレックス制（週40時間）',
    location: '大阪市・豊中市・吹田市 在住',
    requirement: '運転免許 必須',
    description:
      'cocoarucoの運営を、現場とマネジメントの両面から支えるポジション。担当チームの編成、シッター・ドライバーのサポート、お客様との関係づくりなど、サービス全体に関わる仕事です。',
  },
  {
    id: 'sitter',
    title: 'ペットシッター',
    employmentType: '業務委託',
    salary: 'レベニューシェア',
    workStyle: 'ご自身のペースで',
    location: '対象セクション（北区・中之島、中央区、西区、天王寺区、福島区）在住の方を歓迎',
    requirement: '愛玩動物看護師・トリマー・ドッグトレーナー経験者は優遇いたします',
    description:
      'ご家族のお宅にお邪魔して、その子にお世話をお届けするお仕事。地域に住むスタッフだからこそできる、暮らしのリズムに馴染む関わり方を大切にしています。',
  },
  {
    id: 'driver',
    title: 'ペット送迎ドライバー',
    employmentType: 'アルバイト・正社員',
    salary: '時給 1,400円 / 月給 25万円〜',
    workStyle: '土日祝を除く週4-5日勤務（残業あり）',
    location: '大阪市内が中心',
    requirement: '運転免許 必須',
    description:
      'ペットタクシーサービスのドライバーとして、ご家族とその子の移動をサポートするお仕事。動物病院、トリミングサロン、お引越しの送迎など、ご家族の心配をひとつ減らす役割です。',
  },
]

const FAQS = [
  {
    question: '未経験でも応募できますか？',
    answer:
      'もちろんご応募いただけます。ペットシッターは、その子と向き合う気持ちと、ご家族との丁寧なコミュニケーションが大切なお仕事です。動物関連のご経験がある方は優遇いたしますが、未経験の方も研修制度を整えてお迎えします。',
  },
  {
    question: '業務委託のレベニューシェアの仕組みを教えてください',
    answer:
      'ご担当いただいたシッティング件数に応じて、報酬をお支払いする仕組みです。ご自身のペースで働きながら、頑張りが収入に直結します。詳しい計算式や支払いタイミングは、面談の際にご説明いたします。',
  },
  {
    question: '車を持っていなくても応募できますか？',
    answer:
      'ペットシッターは、徒歩・自転車・公共交通機関での訪問が基本です。お住まいの地域内での担当となるため、車をお持ちでない方も応募いただけます。ドライバー職とリーダー候補は運転免許が必須です。',
  },
  {
    question: '副業として働けますか？',
    answer:
      '業務委託のペットシッター職は、副業としてのご応募も歓迎しております。担当できるシフト・件数は、ご相談のうえで決めさせていただきます。',
  },
  {
    question: '採用までの期間はどれくらいですか？',
    answer:
      'ご応募いただいてから、書類選考・面談を経て、通常2〜3週間ほどでご連絡いたします。お急ぎの場合はお問い合わせフォームでもご相談いただけます。',
  },
]

export default function RecruitPage() {
  return (
    <main className="bg-recruit-base">
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-recruit-base pt-12 pb-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-3">
            Recruit
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            私たちと、一緒に。
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoarucoのチームに加わってくださる方を募集しています。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            地域に住むスタッフが、地域のお宅にお邪魔して、ご家族とその子の暮らしを支える——そんな新しい形のペットサービスを、ご一緒に育てていけたら。
          </p>
        </div>
      </section>

      {/* ─────────────── 私たちのチーム ─────────────── */}
      <section className="bg-recruit-surface py-12 border-y border-recruit">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-4">
            About Our Team
          </p>
          <h2 className="text-lg font-medium text-text-primary leading-tight mb-4">
            cocoarucoの働き方
          </h2>

          <div className="space-y-4 text-sm text-text-primary leading-relaxed">
            <p>
              cocoarucoは、大阪市内を5つのセクションに分け、各エリアの担当チームでサービスを運営しています。地域に住むスタッフだからこそ、その地域の暮らしのリズムに馴染んだお世話ができる——これが、私たちの運営の核です。
            </p>
            <p>
              一人で抱え込むのではなく、チームで支え合う。お互いに納得した働き方を、一緒に育てていきたいと考えています。
            </p>
            <p>
              ペットシッターというお仕事は、その子と向き合う時間と、ご家族からの信頼の上に成り立つもの。だからこそ、丁寧な研修と、長く続く関係を大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── 募集職種 ─────────────── */}
      <section className="bg-recruit-base py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-4">
            Open Positions
          </p>
          <h2 className="text-lg font-medium text-text-primary leading-tight mb-2">
            募集職種
          </h2>
          <p className="text-sm text-text-primary leading-relaxed mb-8">
            3つの職種で、ご応募をお待ちしております。
          </p>

          <div className="space-y-5">
            {POSITIONS.map((pos) => (
              <article
                key={pos.id}
                id={pos.id}
                className="rounded-lg bg-recruit-base border border-recruit p-6 scroll-mt-8"
              >
                <p className="text-[10px] font-medium text-recruit-accent tracking-wider uppercase mb-2">
                  {pos.employmentType}
                </p>
                <h3 className="text-xl font-medium text-text-primary leading-tight mb-3">
                  {pos.title}
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-5">
                  {pos.description}
                </p>

                <dl className="space-y-2.5 text-sm">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-xs text-text-secondary">給与</dt>
                    <dd className="text-text-primary">{pos.salary}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-xs text-text-secondary">勤務形態</dt>
                    <dd className="text-text-primary">{pos.workStyle}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-xs text-text-secondary">勤務地</dt>
                    <dd className="text-text-primary">{pos.location}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-xs text-text-secondary">応募条件</dt>
                    <dd className="text-text-primary">{pos.requirement}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 採用までの流れ ─────────────── */}
      <section className="bg-recruit-surface py-12 border-y border-recruit">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-4">
            Hiring Process
          </p>
          <h2 className="text-lg font-medium text-text-primary leading-tight mb-6">
            採用までの流れ
          </h2>

          <div className="space-y-3">
            {[
              {
                step: '01',
                title: '応募',
                description: '本ページのフォームよりご応募ください。経歴・自己紹介をお聞かせください。',
              },
              {
                step: '02',
                title: '書類選考',
                description: '応募内容を確認のうえ、結果をご連絡いたします。',
              },
              {
                step: '03',
                title: '面談',
                description: 'cocoarucoの考え方や、お仕事の進め方について、対面でご一緒にお話します。',
              },
              {
                step: '04',
                title: '採用',
                description: 'お互いに納得できれば、採用の運びとなります。研修からスタートしていただきます。',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-lg bg-recruit-base border border-recruit p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-medium text-recruit-accent tracking-wider shrink-0 pt-1">
                    STEP {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-text-primary">{item.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 採用FAQ ─────────────── */}
      <section className="bg-recruit-base py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-lg font-medium text-text-primary leading-tight mb-6">
            よくあるご質問
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-recruit-surface border border-recruit p-5"
              >
                <h3 className="text-base font-medium text-text-primary mb-3 leading-relaxed">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-primary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 応募フォーム ─────────────── */}
      <section className="bg-recruit-surface py-12 border-y border-recruit">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-4">
            Application Form
          </p>
          <h2 className="text-lg font-medium text-text-primary leading-tight mb-3">
            応募フォーム
          </h2>
          <p className="text-sm text-text-primary leading-relaxed mb-6">
            必要事項をご記入のうえ、ご応募ください。1週間以内に、採用担当よりご連絡いたします。
          </p>
          <RecruitForm />
        </div>
      </section>

      {/* ─────────────── 末尾補足 ─────────────── */}
      <section className="bg-recruit-base py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-recruit-accent tracking-wider uppercase mb-4">
            Other Inquiries
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-5">
            ご質問・ご相談など、応募以外のお問い合わせは下記からお寄せください。
          </p>
          <Link
            href="/contact"
            className="flex items-baseline gap-3 py-2.5 text-sm text-text-primary hover:text-recruit-accent transition-colors"
          >
            <span className="text-text-muted shrink-0" aria-hidden="true">→</span>
            <span className="leading-relaxed">お問い合わせフォーム</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
