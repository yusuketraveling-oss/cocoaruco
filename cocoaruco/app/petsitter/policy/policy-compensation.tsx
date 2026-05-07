// app/petsitter/policy/compensation/page.tsx
// 事故・損害賠償規定

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事故・損害賠償規定 | cocoaruco ペットシッター",
  description:
    "cocoarucoペットシッターサービスの事故・損害賠償規定および免責事項です。",
};

export default function CompensationPage() {
  return (
    <PolicyLayout
      title="事故・損害賠償規定"
      subtitle="Accident & Compensation Policy"
      lastUpdated="2026年4月1日"
    >
      {/* リード */}
      <div className="bg-[#436573]/10 border border-[#436573]/20 rounded-2xl p-6 text-sm text-[#333333] leading-loose">
        <p>
          当社は、施設所有者賠償責任保険に加入しており、サービス提供中に発生した当社の過失による事故・損害については、保険の範囲内で補償します。ただし、不可抗力や免責事項に該当する場合を除きます。
        </p>
      </div>

      <Section title="1. ペットの事故・怪我が発生した場合">
        <ol>
          <li>
            サービス提供中、当社の過失によりペットに怪我や事故が発生した場合は、速やかにお客様へ連絡し、指示に従い動物病院への搬送等の応急処置を行います。
          </li>
          <li>
            当該回のサービス料金は全額免責（返金）とします。
          </li>
          <li>
            治療費については、当社が加入する施設所有者賠償責任保険の範囲内において補償します。
          </li>
          <li>
            以下の不可抗力に起因する場合は、責任を負いかねる場合があります。
            <ul>
              <li>ペットの寿命・持病・特異体質による事故</li>
              <li>地震等の災害によるパニック行動に起因する事故</li>
              <li>ペット自身の習性・行動に起因する事故</li>
            </ul>
          </li>
        </ol>
      </Section>

      <Section title="2. 家財・建物への損害">
        <ol>
          <li>
            サービス提供中、当社スタッフの過失により、お客様の家財（家具・電化製品等）や建物に損害を与えた場合は、速やかに報告のうえ、修理費用または時価相当額を賠償します。
          </li>
          <li>
            賠償額の算定は、当社加入の賠償責任保険の規定に基づき、保険会社の査定を経て行われます。
          </li>
          <li>
            以下については、賠償の対象外または補償に制限があります。
            <ul>
              <li>
                骨董品・貴金属・現金・有価証券・美術品等の高価な貴重品（サービス中は鍵のかかる場所へ保管するか、動線外への移動をお願いします）
              </li>
              <li>ペットの習性による破壊行為（家具を噛む・爪で傷つける等）</li>
              <li>
                経年劣化による設備の故障（ドアノブの脱落・網戸の外れ・家電の自然故障等）
              </li>
              <li>植物の枯死（通常のお世話を履行している場合）</li>
            </ul>
          </li>
        </ol>
      </Section>

      <Section title="3. 鍵の紛失">
        <ol>
          <li>
            万が一、当社スタッフがお預かりした鍵を紛失した場合は、直ちにお客様へ報告します。
          </li>
          <li>
            当社の費用負担により、速やかに以下の対応を行います。
            <ul>
              <li>建物入り口および居宅のシリンダー交換</li>
              <li>鍵の新規作製</li>
            </ul>
          </li>
          <li>
            鍵の紛失に起因して発生した損害については、当社加入の賠償責任保険の範囲内において補償します。
          </li>
        </ol>
      </Section>

      <Section title="4. 弊社都合による契約解除">
        <p>
          スタッフの著しいマナー違反・鍵の紛失・お世話内容の明白なミスなど、当社側に非がある場合で、お客様が今後の利用継続を希望されない場合は、直ちに契約を解除できます。
        </p>
        <p>この場合の返金対応は以下のとおりです。</p>
        <ol>
          <li>
            <strong>定期コース：</strong>未消化分の日割額を全額返金（手数料当社負担）
          </li>
          <li>
            <strong>パスポート：</strong>残りの未消化回数分を単価計算し全額返金（手数料当社負担）
          </li>
          <li>
            <strong>スポット：</strong>当該回および予約済みの未消化分を全額返金
          </li>
        </ol>
      </Section>

      <Section title="5. 災害・不可抗力によるサービス中止">
        <p>
          地震・台風・大雪・火災・感染症の流行等の不可抗力により、スタッフの安全確保が困難な場合、または移動手段が遮断された場合は、サービスを中止させていただくことがあります。
        </p>
        <p>
          当社の判断による中止の場合、当該回数分は「無償振替」または「全額返金」にて対応します。キャンセル手数料は発生しません。
        </p>
      </Section>

      <Section title="6. 緊急時のお世話内容">
        <p>
          ペットの体調不良による緊急対応を行った場合、それにより予定されていたお世話内容の一部が履行できなかったとしても、最善を尽くした結果である場合は、原則として料金の返金は行いません。
        </p>
      </Section>

      <Section title="7. 補償の上限">
        <p>
          本規定に基づくすべての賠償は、当社が加入する賠償責任保険が認める範囲を上限とします。保険の補償範囲を超える損害については、当社が故意または重大な過失による場合を除き、追加の賠償責任を負わないものとします。
        </p>
      </Section>
    </PolicyLayout>
  );
}

function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#FDFCF8] pb-32">
      <div className="bg-[#002E4E] text-white pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#DBB35B] uppercase font-bold mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-sm text-white/60">最終更新日：{lastUpdated}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="space-y-12">{children}</div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-[#002E4E] mb-4 pb-3 border-b border-[#002E4E]/10">
        {title}
      </h2>
      <div className="text-[#333333] text-sm leading-loose space-y-3 [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_li>ul]:mt-2">
        {children}
      </div>
    </section>
  );
}
