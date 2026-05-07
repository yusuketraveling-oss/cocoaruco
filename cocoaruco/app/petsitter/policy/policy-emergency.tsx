// app/petsitter/policy/emergency/page.tsx
// 緊急時対応・医療同意

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "緊急時対応・医療同意 | cocoaruco ペットシッター",
  description:
    "cocoarucoペットシッターサービスの緊急時対応フローおよび医療同意に関する規定です。",
};

export default function EmergencyPage() {
  return (
    <PolicyLayout
      title="緊急時対応・医療同意"
      subtitle="Emergency Response & Medical Consent"
      lastUpdated="2026年4月1日"
    >
      {/* リード */}
      <div className="bg-[#A47864]/10 border border-[#A47864]/20 rounded-2xl p-6 text-sm text-[#333333] leading-loose">
        <p>
          ペットの命を最優先に考え、緊急時にも迅速かつ適切に対応できるよう、以下の規定を設けています。サービスのご利用にあたり、本規定の内容にご同意いただいたものとみなします。
        </p>
      </div>

      <Section title="1. 緊急時の対応フロー">
        <p>担当スタッフがシッティング中にペットの異常を発見した場合、以下の順で対応します。</p>
        <div className="mt-6 space-y-3">
          {[
            {
              step: "Step 1",
              title: "お客様への即時連絡",
              desc: "電話・LINEでお客様に状況を報告します。連絡が取れない場合は次のステップに進みます。",
            },
            {
              step: "Step 2",
              title: "緊急連絡先への連絡",
              desc: "ご登録いただいた緊急連絡先（ご家族・知人等）に連絡します。",
            },
            {
              step: "Step 3",
              title: "かかりつけ動物病院への連絡・搬送",
              desc: "ご登録のかかりつけ病院に連絡のうえ、速やかに搬送します。かかりつけ病院が休診の場合は、最寄りの対応可能な動物病院に搬送します。",
            },
            {
              step: "Step 4",
              title: "処置の判断",
              desc: "お客様またはご家族の指示を優先します。連絡が取れない緊急の場合は、担当スタッフが獣医師の判断に委ねます（次条の医療同意を根拠とします）。",
            },
            {
              step: "Step 5",
              title: "事後報告",
              desc: "処置内容・費用・状況をお客様に書面またはシッティングレポートで報告します。",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 bg-white/60 border border-[#002E4E]/08 rounded-2xl p-5"
            >
              <div className="shrink-0 w-16 text-center">
                <span className="text-[10px] font-bold tracking-widest text-[#436573] uppercase">
                  {item.step}
                </span>
              </div>
              <div>
                <p className="font-bold text-[#002E4E] text-sm mb-1">{item.title}</p>
                <p className="text-sm text-[#333333] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="2. 医療行為への同意">
        <ol>
          <li>
            シッティング中に連絡が取れない状況でペットの生命・健康に危険が及ぶと判断された場合、担当スタッフは獣医師の判断に従った緊急医療処置に同意する権限を持つものとします。本サービスのご利用をもって、この権限の委任にご同意いただいたものとみなします。
          </li>
          <li>
            緊急医療処置の費用は、お客様のご負担となります。ただし、当社の過失に起因すると認められる場合は、当社加入の賠償責任保険の範囲内で補償します。
          </li>
          <li>
            緊急医療処置が必要でなかったと事後的に判明した場合でも、担当スタッフが合理的な判断に基づいて行った場合には、当社はその判断の結果について責任を負いません。
          </li>
        </ol>
      </Section>

      <Section title="3. かかりつけ動物病院の登録">
        <ol>
          <li>
            緊急時の迅速な対応のため、かかりつけ動物病院（病院名・住所・電話番号）をマイページのペット情報欄にご登録ください。
          </li>
          <li>
            かかりつけ病院の登録がない場合は、スタッフの判断により最寄りの対応可能な動物病院に搬送します。
          </li>
          <li>
            夜間・救急対応が可能な動物病院の情報もあわせてご登録いただくことを推奨します。
          </li>
        </ol>
      </Section>

      <Section title="4. 緊急連絡先の登録">
        <p>
          シッティング中にお客様への連絡が取れない事態に備え、緊急連絡先（ご家族・信頼できる知人等）をマイページにご登録ください。緊急連絡先は最低1名のご登録をお願いします。
        </p>
      </Section>

      <Section title="5. ペットの健康状態・既往歴の申告">
        <ol>
          <li>
            ペット登録時に、既往歴・持病・アレルギー・服用中の薬・かかりつけ病院の情報を正確にご申告ください。
          </li>
          <li>
            申告内容に変更があった場合は、速やかにマイページを更新するか、担当スタッフへご連絡ください。
          </li>
          <li>
            申告内容の虚偽・未申告により発生した損害について、当社は責任を負いかねます。
          </li>
        </ol>
      </Section>

      <Section title="6. 免責事項">
        <ul>
          <li>
            ペットの持病・特異体質・加齢等の内在的要因による体調変化・死亡については、当社は責任を負いません。
          </li>
          <li>
            緊急搬送先の動物病院での医療行為の結果については、当社は関与できないため責任を負いません。
          </li>
          <li>
            天災・感染症等の不可抗力により緊急対応が遅延した場合は、当社は責任を負いません。
          </li>
        </ul>
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
      <div className="text-[#333333] text-sm leading-loose space-y-3 [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc">
        {children}
      </div>
    </section>
  );
}
