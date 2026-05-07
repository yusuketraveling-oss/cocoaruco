import Image from 'next/image'
import { SitterHeader } from '@/components/layout/SitterHeader'
import { SitterFooter } from '@/components/layout/SitterFooter'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import CTAButton from '@/components/ui/CTAButton'
import FAQAccordion from '@/components/petsitter/FAQAccordion'

const areas = [
  { name: '大阪市', cities: '大阪市全域', href: '/petsitter/osaka' },
  { name: '北摂', cities: '豊中市・吹田市', href: '/petsitter/hokusetsu' },
  { name: '北河内', cities: '守口市・門真市', href: '/petsitter/kitakawachi' },
  { name: '阪神南', cities: '西宮市・芦屋市', href: '/petsitter/hanshinminami' },
  { name: '奈良市', cities: '奈良市（学園前）', href: '/petsitter/nara' },
  { name: '泉北', cities: '堺市西区・泉大津市・高石市', href: '/petsitter/senboku' },
]

const reasons = [
  {
    title: '動物福祉に基づくケア',
    body: '最新のエンリッチメントの知識を持つスタッフが対応。その子の個性に合わせたお世話をご提供します。',
  },
  {
    title: '法人ならではの安心感',
    body: '個人シッターとは異なり、法人として賠償責任保険に加入。万が一の際もしっかりサポートします。',
  },
  {
    title: '定期利用で深まる信頼',
    body: '週3回以上の定期コースが中心。通い続けることで、ペットとの信頼関係を育みます。',
  },
  {
    title: 'プレミアムなシッティングレポート',
    body: 'お世話の様子を丁寧にご報告。離れていても安心できる情報をお届けします。',
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
    body: '担当スタッフとの対面面談。合鍵またはキーボックス・スマートキーの情報をお預かりします。',
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

export default function PetsitterPage() {
  return (
    <>
      <SitterHeader />

      {/* 1. Hero */}
      <section className="relative min-h-screen bg-linen flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32">
          <div className="flex flex-col gap-8">
            <h1
              className="font-black text-navy"
              style={{ fontSize: '56px', lineHeight: '1.1', letterSpacing: '0.02em' }}
            >
              「楽しい」を、<br />毎日のなかに。
            </h1>
            <p className="text-base leading-loose text-sitter-sub max-w-md">
              構ってほしい子には、たくさんの遊びを。<br />
              そっとしてほしい子には、いつもの平穏を。<br />
              日常にそっと寄り添う丁寧なシッティング。<br />
              匂い、音、光、時間の流れやリズムまで含めて、<br />
              「いつもの暮らし」を守ります。<br />
              離れている間も、変わらない安心を。
            </p>
            <div>
              <CTAButton href="#area" variant="primary" size="lg">
                対応エリアを確認する
              </CTAButton>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[560px] rounded-[48px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=1000"
              alt="猫のシッティングイメージ"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader label="OUR PHILOSOPHY" title="私たちの想い" />
          <GlassCard className="p-8 md:p-14">
            <div className="flex flex-col gap-6 max-w-3xl">
              <p className="text-xl font-bold text-navy">暮らしのリズムに、遊び心を</p>
              <div className="flex flex-col gap-4 text-base leading-loose text-ink">
                <p>
                  お仕事の間、大好きな家族の帰りを、静かなお家で待っているペットたち。<br />
                  「ずっとひとりで、退屈させてしまっていないだろうか」<br />
                  「寂しい思いをさせて、無理をさせていないだろうか」<br />
                  そんな飼い主さまの切実な「想い」から生まれた、<br />
                  定期利用ベースの新しいペットシッターサービスです。
                </p>
                <p>
                  近年の動物福祉において、鼻を使い、頭を使い、五感を満たす<br />
                  「心地よい刺激（エンリッチメント）」を取り入れることは、<br />
                  動物たちの健やかな暮らしに欠かせないと考えられています。
                </p>
                <p>
                  退屈を感じている子にはワクワクする楽しい時間を。<br />
                  繊細な子には、その子らしく自然体で過ごせる時間を。<br />
                  大切な家族の毎日を、私たちが心を込めてサポートします。
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 3. Area */}
      <section id="area" className="py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader
            label="SERVICE AREA"
            title="対応エリア"
            subtitle="お住まいのエリアを選択してください"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <a key={area.href} href={area.href} className="group block">
                <GlassCard className="h-full p-6 md:p-8 flex flex-col gap-3 transition-all ring-2 ring-transparent group-hover:ring-sitter-main">
                  <p className="text-xl font-bold text-navy">{area.name}</p>
                  <p className="text-sm text-sitter-sub leading-relaxed">{area.cities}</p>
                  <p className="mt-auto pt-4 text-sm font-bold text-sitter-main">空き状況を見る →</p>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why */}
      <section className="py-32 bg-taxi-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader label="WHY COCOARUCO" title="選ばれる理由" />
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <GlassCard key={i} className="p-8 flex flex-col gap-4">
                <p className="text-3xl font-black text-sitter-main/30 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-lg font-bold text-navy">{r.title}</h3>
                <p className="text-base text-ink leading-relaxed">{r.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Flow */}
      <section className="py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader label="HOW TO START" title="ご利用の流れ" />
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
                {i < steps.length - 1 && <div className="w-8 h-px bg-sitter-sub/40 mt-6 shrink-0" />}
              </div>
            ))}
          </div>
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

      {/* 6. FAQ */}
      <section className="py-32 bg-linen">
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          <SectionHeader label="FAQ" title="よくある質問" />
          <FAQAccordion />
        </div>
      </section>

      {/* 7. Instagram CTA */}
      <section className="py-32 bg-sitter-main text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6 text-center">
          <p className="text-sm tracking-widest uppercase text-white/60">Follow Us</p>
          <h2 className="text-3xl font-bold">Instagramで日々の様子を発信中</h2>
          <p className="text-lg font-bold tracking-wider text-white/80">@cocoaruco</p>
          <a
            href="https://www.instagram.com/cocoaruco/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full font-bold transition-all px-10 py-4 text-base bg-white text-sitter-main hover:bg-white/90"
          >
            Instagramを見る →
          </a>
        </div>
      </section>

      <SitterFooter />
    </>
  )
}
