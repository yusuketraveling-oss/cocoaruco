import Image from 'next/image'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTAButton } from '@/components/ui/CTAButton'
import { ServiceBadge } from '@/components/ui/ServiceBadge'
import { SectionCalendar } from '@/components/area/SectionCalendar'
import { PricingTabs } from '@/components/area/PricingTabs'

const staff = [
  {
    name: '田中 みなみ',
    comment: '好奇心旺盛な子も、臆病な子も。その子に合ったペースで接します。',
    pets: '猫・うさぎ',
  },
  {
    name: '山本 あやか',
    comment: '動物たちのちょっとした変化に気づけるよう、いつも丁寧に観察しています。',
    pets: '犬・小動物',
  },
  {
    name: '木村 さとし',
    comment: '動物行動学を学び中。ご家族と一緒に、その子の「好き」を探します。',
    pets: '犬・猫',
  },
]

const steps = [
  {
    num: '01',
    title: 'エリア・空き状況を確認',
    body: '対応エリアのカレンダーで空き状況をご確認ください。',
  },
  {
    num: '02',
    title: 'Meet & Greetのご予約',
    body: '会員登録を兼ねた事前面談をご予約ください。（30分 or 60分）\n※初回サービス日の2週間前までにお申し込みください。',
  },
  {
    num: '03',
    title: '面談・合鍵のお預かり',
    body: '担当スタッフとの対面面談。合鍵またはキーボックス・スマートキーの情報をお預かりします。\n鍵が1本のみの場合は受け渡し手数料（440円/回）が加算されます。',
  },
  {
    num: '04',
    title: '予約・決済',
    body: '面談完了後、マイページから予約・事前決済が可能になります。',
  },
  {
    num: '05',
    title: 'シッティング開始',
    body: '担当スタッフがお伺いします。',
  },
]

const news = [
  { date: '2026/04/15', title: '大阪市エリアのサービスを開始しました' },
  { date: '2026/04/01', title: 'Meet & Greet のご予約受付を開始しました' },
  { date: '2026/03/20', title: 'cocoaruco がサービスをリリースしました' },
]

export default function OsakaPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-screen bg-linen flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32">
          <div className="flex flex-col gap-8">
            <ServiceBadge service="petsitter">大阪市</ServiceBadge>
            <h1
              className="font-black text-navy"
              style={{ fontSize: '56px', lineHeight: '1.1', letterSpacing: '0.02em' }}
            >
              大阪市で、いちばん<br />身近なペットシッターを。
            </h1>
            <p className="text-base leading-loose text-sitter-sub max-w-md">
              担当スタッフがあなたのペットの暮らしに<br />
              そっと寄り添います。
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="#calendar" variant="primary" size="default">
                空き状況を確認する
              </CTAButton>
              <CTAButton href="#mgr" variant="secondary" size="default">
                Meet &amp; Greetを予約する
              </CTAButton>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[560px] rounded-[48px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000"
              alt="大阪エリアのペットシッターイメージ"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Section + Calendar */}
      <section id="section-calendar" className="py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader
            eyebrow="SECTION & CALENDAR"
            title="セクションと空き状況"
            lead="郵便番号で対応セクションを確認できます"
          />
          <SectionCalendar sectionName="大阪市" status="recruiting" />
        </div>
      </section>

      {/* 4. Staff */}
      <section className="py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader eyebrow="OUR STAFF" title="担当スタッフ" />
          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((s, i) => (
              <GlassCard key={i} className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-24 h-24 rounded-full bg-sitter-sub/20 shrink-0" />
                <p className="font-bold text-navy text-lg">{s.name}</p>
                <p className="text-sm text-sitter-sub leading-relaxed">{s.comment}</p>
                <span className="mt-auto text-xs font-medium text-text-secondary">{s.pets}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="py-32 bg-taxi-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader eyebrow="PRICING" title="料金・プラン" />
          <PricingTabs />
        </div>
      </section>

      {/* 6. Flow */}
      <section className="py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader eyebrow="HOW TO START" title="ご利用の流れ" />

          {/* Desktop */}
          <div className="hidden md:flex items-start">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex items-start">
                <div className="flex flex-col items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-sitter-main text-white flex items-center justify-center text-sm font-black shrink-0">
                    {step.num}
                  </div>
                  <div className="flex flex-col gap-2 text-center px-2">
                    <p className="text-sm font-bold text-navy leading-snug">{step.title}</p>
                    <p className="text-xs text-sitter-sub leading-relaxed whitespace-pre-line">{step.body}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-8 h-px bg-sitter-sub/40 mt-6 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-6 md:hidden">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-sitter-main text-white flex items-center justify-center text-xs font-black shrink-0 mt-1">
                  {step.num}
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-bold text-navy">{step.title}</p>
                  <p className="text-sm text-sitter-sub leading-relaxed whitespace-pre-line">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Meet & Greet CTA */}
      <section id="mgr" className="py-32 bg-sitter-main text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 flex flex-col items-center gap-8 text-center">
          <p className="text-sm tracking-widest uppercase text-white/60">はじめての方へ</p>
          <h2 className="text-3xl font-bold">まずはMeet &amp; Greetから</h2>
          <div className="flex flex-col gap-3 text-base leading-loose text-white/80 max-w-lg">
            <p>
              初回のご利用前に、担当スタッフとの事前面談をお願いしています。<br />
              ペットのこと、お世話の内容、鍵のお預かり方法などを<br />
              一緒に確認させていただきます。
            </p>
            <p className="font-bold text-white">
              面談料：¥3,300（初回予約時に合算して決済）<br />
              所要時間：30分 or 60分
            </p>
          </div>
          <a
            href="/petsitter/osaka/mgr"
            className="inline-flex items-center justify-center rounded-full font-bold transition-all px-10 py-4 text-base bg-white text-navy hover:bg-white/90"
          >
            Meet &amp; Greetを予約する →
          </a>
        </div>
      </section>

      {/* 8. News */}
      <section className="py-32 bg-linen">
        <div className="max-w-3xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          <SectionHeader eyebrow="NEWS" title="お知らせ" />
          <ul className="flex flex-col divide-y divide-sitter-sub/20">
            {news.map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 py-5">
                <span className="text-sm text-sitter-sub shrink-0">{item.date}</span>
                <span className="text-sm font-bold text-navy">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
