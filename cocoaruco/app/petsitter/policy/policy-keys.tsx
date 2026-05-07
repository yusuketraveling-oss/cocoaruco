// app/petsitter/policy/keys/page.tsx
// 合鍵預かり規定

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "合鍵預かり規定 | cocoaruco ペットシッター",
  description:
    "cocoarucoペットシッターサービスの合鍵の受け渡し・保管・返却に関する規定です。",
};

export default function KeysPage() {
  return (
    <PolicyLayout
      title="合鍵預かり規定"
      subtitle="Key Management Policy"
      lastUpdated="2026年4月1日"
    >
      <Section title="1. 合鍵の受け渡し">
        <ol>
          <li>
            合鍵のご提供は、ご自宅への入室方法として選択できる手段のひとつです。キーボックスや遠隔解錠デバイスをご利用の場合は、合鍵のご提供は不要です。
          </li>
          <li>
            合鍵の受け渡しは、担当スタッフが直接対面にて行います。郵送等での受け渡しが必要な場合は別途ご相談ください。
          </li>
          <li>
            合鍵の受け渡しが発生する場合、1回あたり440円（税込）の合鍵受け渡し手数料が自動的に加算されます。合鍵を2本以上お預けいただいている場合、またはキーボックス・遠隔解錠をご利用の場合は手数料は発生しません。
          </li>
        </ol>
      </Section>

      <Section title="2. 合鍵の管理">
        <ol>
          <li>
            お預かりした合鍵は、担当スタッフが責任をもって管理します。鍵の管理状況は社内の専用管理シートにて記録します。
          </li>
          <li>
            合鍵は、シッティングの目的以外には使用しません。担当スタッフ本人以外の第三者への貸し出し・複製は行いません。
          </li>
          <li>
            サービス提供中は、鍵を常に身につけて管理します。車上放置等のリスクを伴う管理はしません。
          </li>
        </ol>
      </Section>

      <Section title="3. 長期保管サービス">
        <ol>
          <li>
            シッティングスケジュール完了後も引き続き合鍵をお預けいただける長期保管サービスをご用意しています（2,200円/年・自動更新）。
          </li>
          <li>
            長期保管サービスをご利用の場合、次回ご利用時に合鍵を再送付いただく手間が省け、事務所からスタッフへの送付費用も当社負担となります。
          </li>
          <li>
            更新の1ヶ月前に、メールおよびシステム上でリマインダーをお送りします。
          </li>
          <li>
            定期コースご利用中は、シッティングスケジュールが継続中のため長期保管サービスの対象外です。
          </li>
        </ol>
      </Section>

      <Section title="4. 合鍵の返却">
        <ol>
          <li>
            合鍵の返却方法はマイページからいつでも変更できます。返却方法および費用は以下のとおりです。
            <div className="mt-4 bg-[#FDFCF8] border border-[#002E4E]/10 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#002E4E]/5">
                  <tr>
                    <th className="text-left px-5 py-3 font-bold text-[#002E4E]">返却方法</th>
                    <th className="text-right px-5 py-3 font-bold text-[#002E4E]">費用</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#002E4E]/08">
                  <tr>
                    <td className="px-5 py-3">普通郵便またはクリックポスト</td>
                    <td className="px-5 py-3 text-right">330円（税込）</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">簡易書留またはこねこ便</td>
                    <td className="px-5 py-3 text-right">660円（税込）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            返却費用は、退会・解約処理時の精算に含まれます。
          </li>
        </ol>
      </Section>

      <Section title="5. 紛失時の対応">
        <p>
          万が一、当社スタッフが合鍵を紛失した場合の対応については、「事故・損害賠償規定 第3条」に定めるとおりです。速やかにお客様へ報告のうえ、当社負担でシリンダー交換および鍵の新規作製を行います。
        </p>
      </Section>

      <Section title="6. お客様へのお願い">
        <ul>
          <li>合鍵は必ず複製品をお渡しください。マスターキー（唯一の原本）のご提供はご遠慮ください。</li>
          <li>入室に関する情報（キーボックスの番号・遠隔解錠の方法等）は、マイページのペット情報欄にご登録ください。</li>
          <li>入室方法に変更が生じた場合は、サービス実施日の前日18:00までにご連絡ください。</li>
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
