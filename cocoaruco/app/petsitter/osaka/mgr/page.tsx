import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { PolicyCallout } from '@/components/ui/PolicyCallout'
import { MgrForm } from '@/components/area/MgrForm'
import {
  Heart,
  House,
  ShieldCheck,
  Clock,
  PhoneCall,
  CheckCircle,
} from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Meet & Greet（事前面談）のお申し込み | cocoaruco ペットシッター',
  description:
    'cocoarucoのペットシッターは、Meet & Greet（事前面談）から始まります。担当となるスタッフがご自宅を訪問し、その子の性格、住環境、お世話の流れを、一つひとつご一緒に確認させていただきます。',
}

const CHECKLIST = [
  {
    icon: Heart,
    title: 'その子の性格・暮らしのリズム',
    description:
      'お食事の好み、苦手なこと、一日のリズム、既往歴やお薬。その子のことを、できるだけ詳しくお聞かせください。',
  },
  {
    icon: House,
    title: 'ご自宅への入退室の方法',
    description:
      'スマートロック、キーボックス、合鍵——ご家族のご都合に合わせた、安心できる方法をご一緒に決めます。',
  },
  {
    icon: PhoneCall,
    title: '緊急時のご連絡先',
    description:
      'ご家族や信頼できる方の連絡先、かかりつけ動物病院。万が一のときの連絡フローを、あらかじめ取り決めておきます。',
  },
  {
    icon: CheckCircle,
    title: 'お世話に必要な情報',
    description:
      '用品の場所、家電の使い方、動線。「いつも通り」のお世話を再現するために、必要な情報を共有させてください。',
  },
  {
    icon: ShieldCheck,
    title: 'ご家族のご希望',
    description:
      'お世話の頻度、内容、特別な配慮事項。私たちにお任せいただきたいこと、こうしてほしいこと——遠慮なくお聞かせください。',
  },
  {
    icon: Clock,
    title: '今後のスケジュール',
    description:
      'ご利用方法、初回シッティング日のお打ち合わせ。無理のないスタートが切れるよう、ご一緒に考えます。',
  },
]

export default function MeetAndGreetPage() {
  return (
    <main>
      {/* ヒーロー */}
      <section className="bg-bg pt-12 pb-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Meet &amp; Greet
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            最初の一歩は、
            <br />
            お互いを知ることから。
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoarucoのペットシッターは、Meet &amp; Greet（事前面談）から始まります。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            その子の性格、暮らしのリズム、ご家族のご希望——一つひとつ、ご一緒に確認させてください。お互いに納得した上で、サービスを始めます。
          </p>
        </div>
      </section>

      {/* Meet & Greet とは */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader eyebrow="About" title="Meet &amp; Greet とは" />
          <div className="mt-5 space-y-4 text-sm text-text-primary leading-relaxed">
            <p>
              初回ご利用に先立ち、担当となるスタッフがご自宅を訪問する事前面談です。その子の性格、住環境、お世話の流れ、入退室の方法を、一つひとつご一緒に確認させていただきます。
            </p>
            <p>
              お預かりするその子のことを、私たちが正しく理解させていただくために。そして、ご家族にも、私たちの仕事の進め方を知っていただくために。
            </p>
            <p>
              cocoarucoのペットシッターは、定期的なご訪問を通じて、その子の毎日に寄り添うサービスです。だからこそ、最初の一歩で、お互いに納得しておくことを大切にしています。
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <GlassCard className="text-center">
              <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-1">
                所要時間
              </p>
              <p className="text-base font-medium text-text-primary">60分前後</p>
            </GlassCard>
            <GlassCard className="text-center">
              <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-1">
                料金（税込）
              </p>
              <p className="text-base font-medium text-text-primary">3,300円</p>
            </GlassCard>
          </div>
          <p className="mt-5 text-xs text-text-secondary leading-relaxed">
            原則として対面で実施いたしますが、距離・体調等のご事情がある場合はオンラインでの実施もご相談いただけます。
          </p>
        </div>
      </section>

      {/* 当日確認させていただくこと */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Checklist"
            title="当日、ご一緒に確認させていただくこと"
            lead="次の項目を、ていねいにお伺いします。所要時間60分前後の中で、お話ししながら、一つずつ。「いつも通り」のお世話を、私たちが正しく引き継げるように。"
          />
          <div className="mt-8 space-y-4">
            {CHECKLIST.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <Icon
                    size={20}
                    weight="regular"
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* プレオープン期間のお知らせ */}
      <section className="bg-surface py-8 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <PolicyCallout variant="service" title="プレオープン期間中">
            現在、各セクションで担当チームを編成中です。お申し込みは随時お受けしており、サービス開始準備が整い次第、Meet
            &amp; Greet の日程について担当よりご連絡いたします。
          </PolicyCallout>
        </div>
      </section>

      {/* お申し込みフォーム */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader
            eyebrow="Application"
            title="お申し込みフォーム"
            lead="下記フォームにご記入のうえ、お申し込みください。担当よりご連絡いたします。お気軽にどうぞ。"
          />
          <div className="mt-8">
            <MgrForm />
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="bg-surface py-12 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <SectionHeader eyebrow="Notes" title="ご確認ください" />
          <div className="mt-6 space-y-4 text-sm text-text-primary leading-relaxed">
            <div>
              <p className="font-medium text-text-primary mb-1">
                お申し込みのタイミング
              </p>
              <p>
                Meet &amp; Greet は、初回サービス日の2週間前までにお申し込みください。お申し込みから実施日まで、お時間をいただく場合があります。
              </p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">
                料金のお支払い
              </p>
              <p>
                Meet &amp; Greet の料金（3,300円・税込）は、他のサービスご利用料金と同じ締め日にまとめて自動決済いたします。お申し込みの段階での課金は発生しません。
              </p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">
                対象エリア外の場合
              </p>
              <p>
                担当スタッフのエリア外で実施する場合は、別途、所定の往復交通費をお願いすることがあります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
