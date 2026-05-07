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
    '大阪を中心に、お仕事中の平日の日中、定期的にお邪魔して、その子の心地よい時間を届けるペットシッターサービス。お留守番のお世話の代行ではなく、その子の毎日に「向き合う時間」をそっと差し挟みます。',
}

const PLANS = [
  {
    name: 'オリジナル・ケア',
    duration: '30分・45分',
    description:
      '私たちのサービスの中心となる、定期利用のためのプラン。健康チェックやお食事といった基本ケアを丁寧に済ませた上で、訪問時間の半分を、その子と向き合う時間にあてます。お散歩、遊び、コミュニケーション――その日のその子に合わせて、心地よい刺激を届けます。',
  },
  {
    name: 'プレミアム・ケア',
    duration: '60〜75分',
    description:
      'より厚みのあるケアが必要な場面のためのプラン。多頭飼育のご家庭、シニア期や持病のあるその子の介護的なサポート、じっくり時間をかけた関わりをご希望の場合に、ご利用いただけます。',
  },
  {
    name: '寝かしつけプラン',
    duration: '60〜90分',
    description:
      'ご帰宅が遅くなる日のための、特別なプラン。一日の終わりに、その子がひとりで不安そうに過ごしている時間をできるだけ短くするために、その子が穏やかに眠りにつくまで、そばに寄り添います。',
  },
  {
    name: 'クイック・ビジット',
    duration: '15分',
    description:
      'トイレチェック、お薬の投与など、ピンポイントのお世話が必要な場面のための短時間プラン。スポット利用またはパスポート（10回券）でご利用いただけます。',
  },
]

const STEPS = [
  {
    number: '01',
    title: '会員登録・お問い合わせ',
    description:
      'マイページからご登録いただき、その子のことやご希望のサービス内容をお聞かせください。',
  },
  {
    number: '02',
    title: 'Meet & Greet（事前面談）',
    description:
      '担当となるスタッフがご自宅を訪問。その子の性格、住環境、お世話の流れを、一つひとつご一緒に確認します。',
  },
  {
    number: '03',
    title: 'ご予約・シッティング開始',
    description:
      'マイページから定期コースのご予約ができるようになります。シッティング後は、その日のレポートをお届けします。',
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
      '初回ご利用前に必ず事前面談を実施。お互いに納得した上で、サービスを始めます。',
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
            その子の暮らしに、
            <br />
            心地よい時間を、そっと。
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            お仕事中の平日の日中、定期的にお邪魔して、その子の毎日に「向き合う時間」をそっと差し挟みます。
          </p>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            お留守番のお世話の代行ではなく、退屈やストレスを抱えがちなその子の心が、自然体で過ごせる時間を整えるためのサービスです。
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
            title="向き合う時間を、訪問時間の半分に。"
          />
          <div className="mt-5 space-y-4 text-sm text-text-primary leading-relaxed">
            <p>
              訪問時間のなかで、健康チェックやお食事といった基本ケアを丁寧に済ませた上で、訪問時間の半分は、その子と向き合う時間にあてています。
            </p>
            <p>
              お散歩、遊び、コミュニケーション、ただ静かに見守る時間——その日のその子に合わせて、向き合い方を柔軟に変えていきます。
            </p>
            <p>
              神経質な子、そっとしておいてほしい子には、空気のように静かにお世話だけを済ませて帰ることもあります。長く向き合うことが正解の日もあれば、静かに引くことが正解の日もある。一律のルールではなく、その子のリズムに合わせて、関わり方を選びます。
            </p>
          </div>
        </div>
      </section>

      {/* ペットカメラ越しの「ごめんね」への寄り添い */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="For Your Family"
            title="ペットカメラ越しの「ごめんね」に、そっと寄り添います。"
          />
          <div className="mt-5 space-y-4 text-sm text-text-primary leading-relaxed">
            <p>
              お仕事中、お昼休みのカフェ、出張先のホテル——スマートフォンで、お留守番中のその子の様子を見る時間。
            </p>
            <p>
              静かに佇んでいる。ずっと寝ている。何かを待っているように、ドアの方を眺めている。そんな姿を画面越しに見たとき、ご家族の心の中には、たいてい小さな声が浮かびます。「ごめんね」と。
            </p>
            <p>
              私たちのペットシッターは、この「ごめんね」にそっと寄り添うサービスでありたいと考えています。お留守番の長い時間のなかに、ほんの少しだけ「家族以外の誰かと過ごす、心地よい時間」を差し挟むこと。それが、私たちが届けたい価値です。
            </p>
          </div>
        </div>
      </section>

      {/* プラン紹介 */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Service Plans"
            title="プランの全景。"
            lead="週の中心は定期のオリジナル・ケアで支え、特別な日にはプレミアム・ケアや寝かしつけプランを。スポット利用やパスポート（10回券）も、必要に応じてご利用いただけます。"
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
          <p className="mt-6 text-xs text-text-secondary leading-relaxed">
            往復交通費は別立てではなく、料金に含まれています。お仕事中の平日の日中、定期的なご訪問にご満足いただける、月単位での暮らしのリズムを一緒に整えていく設計です。
          </p>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="bg-bg py-12">
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
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Service Area"
            title="大阪・関西を中心に。"
            lead="地域に住むスタッフが、その地域に馴染みながら、その子の毎日にお邪魔します。"
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
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Our Commitment"
            title="安心して、お任せいただくために。"
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
      <section className="bg-surface py-16 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4 text-center">
          <h2 className="text-xl font-medium text-text-primary leading-tight tracking-tight">
            まずは、お話を
            <br />
            聞かせてください。
          </h2>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            cocoarucoのペットシッターは、Meet &amp; Greet（事前面談）から始まります。
            <br />
            その子の個性、ご家族の暮らしのリズム、住環境——
            <br />
            一つひとつ、ご一緒に確認しながら、無理のないご利用方法を考えます。
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
