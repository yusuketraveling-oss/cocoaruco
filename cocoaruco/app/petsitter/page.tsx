import type { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  Heart,
  Clock,
  CheckCircle,
  ShieldCheck,
  MapPin,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'ペットシッターサービス | cocoaruco',
  description:
    '大阪を中心に、その子の暮らしをそのまま大切にするペットシッターサービスをお届けしています。お留守番の時間に、ほんの少しのやさしさを。',
}

const PLANS = [
  {
    name: 'オリジナル・ケア',
    duration: '30分・45分',
    description:
      '定期利用の中心となるプラン。健康チェック・お食事・お散歩などの基本ケアと、その子と向き合う時間をバランスよく組み合わせます。',
  },
  {
    name: 'プレミアム・ケア',
    duration: '60〜75分',
    description:
      '多頭飼育、シニア期、持病のあるその子のケアなど、より厚みのあるサポートが必要な場面のためのプランです。',
  },
  {
    name: '寝かしつけプラン',
    duration: '60〜90分',
    description:
      'ご帰宅が遅くなる日に、その子が穏やかに眠りにつくまで寄り添います。一日の終わりの不安な時間を、できるだけ短く。',
  },
  {
    name: 'クイック・ビジット',
    duration: '15分',
    description:
      'トイレチェック、お薬の投与など、ピンポイントのお世話が必要な場面のための短時間プランです。',
  },
]

const STEPS = [
  {
    number: '01',
    title: '会員登録・お問い合わせ',
    description:
      'マイページからご登録いただき、ペットの情報やご希望のサービス内容をお知らせください。',
  },
  {
    number: '02',
    title: 'Meet & Greet（事前面談）',
    description:
      '担当となるスタッフがご自宅を訪問。ペットの性格、住環境、お世話の流れを一つひとつ確認します。',
  },
  {
    number: '03',
    title: 'ご予約・シッティング開始',
    description:
      'マイページから予約カレンダーがご利用可能に。シッティング後は、その日のレポートをお届けします。',
  },
]

const AREAS = [
  '大阪市',
  '北摂（豊中・吹田）',
  '北河内（守口・門真）',
  '阪神南（西宮・芦屋）',
  '奈良市（学園前）',
  '泉北（堺市西区・泉大津・高石）',
]

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: '賠償責任保険完備',
    description:
      'ペット事業者向けの賠償責任保険（三井住友海上火災保険）に加入しています。',
  },
  {
    icon: CheckCircle,
    title: '第一種動物取扱業',
    description:
      '大阪府への登録（保管・訓練）を受けた事業者として、関係法令を遵守しています。',
  },
  {
    icon: Heart,
    title: 'Meet & Greet 必須',
    description:
      '初回ご利用前に必ず事前面談を実施。お互いに納得した上でサービスを開始します。',
  },
  {
    icon: Clock,
    title: 'シッティングレポート',
    description:
      'お世話の様子を写真と短い文章でお届けします。1回のサービスにつき1通。',
  },
]

export default function PetSitterPage() {
  return (
    <main>
      {/* ヒーロー */}
      <section className="bg-bg pt-12 pb-16">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Pet Sitter
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            その子の暮らしを、
            <br />
            そのまま大切に。
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            お留守番のあいだ、その子のテリトリーをそのままに、毎日の暮らしにそっと寄り添う形を選びました。
          </p>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            匂い、音、光、時間の流れやリズム——そのすべてをできるだけ普段どおりに保ちながら、必要なお世話だけを丁寧にお手伝いします。
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="primary" size="block">
              お問い合わせ
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ブランド理念 */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="向き合う時間を、確保する。"
          />
          <div className="mt-5 space-y-4 text-sm text-text-primary leading-relaxed">
            <p>
              訪問時間のなかで、健康チェックやお食事といった基本ケアをきちんと済ませた上で、訪問時間の半分は、その子と向き合う時間にあてています。
            </p>
            <p>
              お散歩、遊び、コミュニケーション、ただ静かに見守る時間——その日のその子に合わせて、向き合い方を柔軟に変えていきます。
            </p>
          </div>
        </div>
      </section>

      {/* プラン紹介 */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Service Plans"
            title="その子に合わせた、4つのプラン。"
            lead="ご家族の暮らしのリズムと、その子の状態に応じて、組み合わせてご利用いただけます。"
          />
          <div className="mt-8 space-y-4">
            {PLANS.map((plan) => (
              <GlassCard key={plan.name}>
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-base font-medium text-text-primary">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-medium text-text-secondary tracking-wide shrink-0">
                    {plan.duration}
                  </span>
                </div>
                <p className="text-sm text-text-primary leading-relaxed">
                  {plan.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="How It Works"
            title="ご利用までの3ステップ。"
          />
          <div className="mt-8 space-y-4">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-4">
                <p className="text-xs font-medium text-text-secondary tracking-wider shrink-0 pt-1">
                  {step.number}
                </p>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-primary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="/petsitter/guide" variant="secondary" size="block">
              ご利用案内を見る
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Service Area"
            title="大阪・関西を中心に。"
            lead="地域に住むスタッフが、その地域に馴染みながらお世話します。"
          />
          <ul className="mt-6 space-y-3">
            {AREAS.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 text-sm text-text-primary"
              >
                <MapPin
                  size={16}
                  weight="regular"
                  className="text-text-secondary shrink-0"
                />
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton href="/petsitter/area" variant="secondary" size="block">
              対応エリアの詳細を見る
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 安心の取り組み */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Our Commitment"
            title="安心していただくために。"
          />
          <div className="mt-8 space-y-4">
            {COMMITMENTS.map((item) => {
              const Icon = item.icon
              return (
                <GlassCard key={item.title}>
                  <div className="flex items-start gap-3">
                    <Icon
                      size={20}
                      weight="regular"
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-text-primary mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-primary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* 末尾CTA */}
      <section className="bg-bg py-16">
        <div className="max-w-[430px] mx-auto px-4 text-center">
          <h2 className="text-xl font-medium text-text-primary leading-tight tracking-tight">
            まずは、お話を
            <br />
            聞かせてください。
          </h2>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            Meet &amp; Greet（事前面談）から始まります。
            <br />
            ペットの個性、ご家族の生活リズム、住環境——
            <br />
            一つひとつ、お話を伺いながら、最適なご利用方法をご提案します。
          </p>
          <div className="mt-8 space-y-3">
            <CTAButton href="/contact" variant="primary" size="block">
              お問い合わせ
            </CTAButton>
            <CTAButton href="/petsitter/faq" variant="ghost" size="block">
              よくあるご質問を見る
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
