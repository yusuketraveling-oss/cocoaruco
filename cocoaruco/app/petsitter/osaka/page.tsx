import type { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PolicyCallout } from '@/components/ui/PolicyCallout'
import { SectionCalendar } from '@/components/area/SectionCalendar'
import { ZipCodeSearch } from '@/components/area/ZipCodeSearch'
import { PricingTabs } from '@/components/area/PricingTabs'
import { WeeklyCalendar } from '@/components/area/WeeklyCalendar'
import { User } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: '大阪エリア | cocoaruco ペットシッター',
  description:
    '大阪市内の北区・中之島、中央区、西区、天王寺区、福島区の各セクションで、地域に住むスタッフが担当チームを組んでいます。',
}

const SECTIONS = [
  {
    name: '北区・中之島セクション',
    description: '中津・中之島〜茶屋町',
    status: 'preparing' as const,
  },
  {
    name: '中央区セクション',
    description: '谷町六丁目〜上本町',
    status: 'preparing' as const,
  },
  {
    name: '西区セクション',
    description: '堀江・新町〜靭公園',
    status: 'preparing' as const,
  },
  {
    name: '天王寺区セクション',
    description: '真田山・夕陽丘',
    status: 'preparing' as const,
  },
  {
    name: '福島区セクション',
    description: '福島・海老江',
    status: 'preparing' as const,
  },
]

function getThisMondayString(): string {
  const today = new Date()
  const day = today.getDay()
  const monday = new Date(today)
  monday.setDate(today.getDate() - ((day + 6) % 7))
  return monday.toISOString().split('T')[0]
}

export default function OsakaPage() {
  return (
    <main>
      {/* ヒーロー */}
      <section className="bg-bg pt-12 pb-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Osaka
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            大阪エリア
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            大阪市内の各セクションで、地域に住むスタッフが担当チームを組んでいます。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            ご家族のいつもの暮らしのリズムを大切にしながら、その子と向き合う時間をていねいに重ねていきます。
          </p>
        </div>
      </section>

      {/* プレオープンお知らせ */}
      <section className="bg-surface pb-8 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4 pt-8">
          <PolicyCallout variant="service" title="プレオープン期間中">
            グランドオープンに向けて、各セクションで担当チームを整えています。お申し込みのご相談は随時お受けしておりますので、お気軽にお問い合わせください。
          </PolicyCallout>
        </div>
      </section>

      {/* 対応セクション一覧 */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Sections"
            title="大阪市内の対応セクション"
            lead="3〜5km圏内を担当チームが面で守る、cocoarucoのセクション制を採用しています。"
          />
          <div className="mt-8 space-y-3">
            {SECTIONS.map((section) => (
              <SectionCalendar
                key={section.name}
                sectionName={section.name}
                status={section.status}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 郵便番号検索 */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Area Check"
            title="郵便番号からご確認ください"
            lead="ご自宅がどのセクションに含まれるかを、郵便番号からお調べいただけます。"
          />
          <div className="mt-6">
            <ZipCodeSearch />
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Pricing"
            title="料金について"
            lead="ご家族の暮らしに合わせて、3つのご利用形態からお選びいただけます。"
          />
          <div className="mt-6">
            <PricingTabs />
          </div>
        </div>
      </section>

      {/* 今週の空き状況（プレビュー） */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Availability"
            title="今週の空き状況"
            lead="サービス開始後、マイページからリアルタイムでご確認・ご予約いただけます。"
          />
          <div className="mt-6 relative">
            <div className="opacity-50 pointer-events-none">
              <WeeklyCalendar
                startDate={getThisMondayString()}
                slots={[]}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-md bg-surface border border-border px-4 py-2 text-xs font-medium text-text-secondary tracking-wide">
                データ連携予定
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-muted leading-relaxed text-center">
            ※ 本機能はサービス開始後にご利用いただけます。
          </p>
        </div>
      </section>

      {/* スタッフ紹介（プレースホルダー） */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Our Team"
            title="私たちのチーム"
            lead="現在、大阪の各セクションで担当チームを編成中です。スタッフ紹介は順次公開してまいります。"
          />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-surface border border-border-subtle p-5 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-surface-sunken flex items-center justify-center mb-2">
                  <User size={20} weight="regular" className="text-text-muted" />
                </div>
                <p className="text-[10px] font-medium text-text-muted tracking-wider uppercase">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet & Greet 導線 */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="First Step"
            title="ご利用までの、最初の一歩"
            lead="cocoarucoのペットシッターは、Meet & Greet（事前面談）から始まります。担当となるスタッフがご自宅を訪問し、ペットの性格や住環境、お世話の流れを一つひとつ確認させていただきます。"
          />
          <div className="mt-8">
            <CTAButton href="/petsitter/osaka/mgr" variant="primary" size="block">
              Meet &amp; Greet を申し込む
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 末尾CTA */}
      <section className="bg-bg py-16">
        <div className="max-w-[430px] mx-auto px-4 text-center">
          <h2 className="text-xl font-medium text-text-primary leading-tight tracking-tight">
            お気軽にお問い合わせください
          </h2>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            プレオープン期間中も、ご相談・ご質問を随時お受けしております。
            <br />
            グランドオープンに向けたご案内も、こちらから。
          </p>
          <div className="mt-8 space-y-3">
            <CTAButton href="/contact" variant="primary" size="block">
              お問い合わせ
            </CTAButton>
            <CTAButton href="/petsitter/policy" variant="ghost" size="block">
              サービスポリシーを見る
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
