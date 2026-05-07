// app/petsitter/policy/cancel/page.tsx
// キャンセル規定

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "キャンセル規定 | cocoaruco ペットシッター",
  description: "cocoarucoペットシッターサービスのキャンセル・変更規定です。",
};

export default function CancelPage() {
  return (
    <PolicyLayout
      title="キャンセル規定"
      subtitle="Cancellation Policy"
      lastUpdated="2026年4月1日"
    >
      {/* サマリーカード */}
      <div className="bg-[#002E4E] text-white rounded-[32px] p-8 space-y-6">
        <p className="text-xs tracking-[0.2em] text-[#DBB35B] uppercase font-bold">
          Fee Summary
        </p>
        <div className="divide-y divide-white/10">
          <div className="flex justify-between items-center py-4">
            <span className="text-sm">予約日の2日前18:00まで</span>
            <span className="font-bold text-[#DBB35B]">無料</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="text-sm">2日前18:00以降〜前日18:00まで</span>
            <span className="font-bold">料金の50%</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="text-sm">前日18:00以降・当日・無連絡</span>
            <span className="font-bold text-red-300">料金の100%</span>
          </div>
        </div>
      </div>

      <Section title="1. キャンセル・変更手数料（共通）">
        <p>
          キャンセルおよびスケジュール変更に際しては、上記の手数料が適用されます。手数料は予約1回あたりのサービス料金（オプション・追加料金含む）を基準に算定します。
        </p>
        <p>
          なお、当日・前日予約に適用される特急手配料（1,100円）は、予約成立時点で確定した費用となります。キャンセルのタイミングにかかわらず返金対象外です。
        </p>
      </Section>

      <Section title="2. 利用形態別のキャンセル・振替ルール">
        <h3 className="font-bold text-[#002E4E] mt-4 mb-2">■ 定期コース（週3回以上）</h3>
        <ul>
          <li>2週間の締め期間内で最大2回キャンセルできます。キャンセル回数は締め日（16日・翌1日）にリセットされます。</li>
          <li>個別キャンセルによる日割り返金はありません。</li>
          <li>振替は同一締め期間内または翌締め期間内で対応します。振替先の日程が翌締め期間であっても、今回の締め期間中に決済されます。</li>
          <li>振替完了後、振替元の日程は空き枠として解放されます。</li>
          <li>解約後に振替済みの未消化日程が残っている場合、その日程は失効します（払い戻しなし）。</li>
        </ul>

        <h3 className="font-bold text-[#002E4E] mt-6 mb-2">■ 定期コース（週2回）</h3>
        <ul>
          <li>キャンセルはできません。</li>
          <li>振替は可能です。解約後の振替失効ルールは週3回以上と同様です。</li>
        </ul>

        <h3 className="font-bold text-[#002E4E] mt-6 mb-2">■ パスポート</h3>
        <ul>
          <li>予約日の2日前18:00までのキャンセルはクレジット（1回分）が返還されます。</li>
          <li>期限を超えたキャンセルは1回消化扱いとなります。</li>
          <li>有効期限を過ぎたクレジットは自動失効となり、返金・延長はできません。</li>
        </ul>

        <h3 className="font-bold text-[#002E4E] mt-6 mb-2">■ スポット</h3>
        <ul>
          <li>予約日の2日前18:00までのキャンセルは全額返金（手数料なし）です。</li>
          <li>2日前18:00以降のキャンセルは上記の手数料テーブルが適用されます。</li>
        </ul>
      </Section>

      <Section title="3. パスポートの購入キャンセル・返金">
        <ul>
          <li>パスポート購入後7日以内かつ未使用（0回消化）の場合に限り、購入キャンセル・返金を受け付けます。</li>
          <li>1回でも消化した後は、残回数の払い戻し・換金はできません。</li>
          <li>有効期限の異なる別パスポートへの差額変更はできません。一度キャンセル（未使用時のみ）して再購入してください。</li>
          <li>返金時には、Square社の決済手数料を差し引いた金額を返金します。</li>
        </ul>
      </Section>

      <Section title="4. 例外規定（弊社都合によるキャンセル）">
        <p>
          地震・台風・大雪・火災・感染症の流行等の不可抗力、またはスタッフの急病等により当社側からサービスを中止する場合は、キャンセル手数料は発生しません。無償振替または全額返金にて対応します。
        </p>
      </Section>

      <Section title="5. Meet & Greetのキャンセル">
        <p>
          Meet &amp; Greetは予約日の2日前18:00までキャンセルが可能です。以降のキャンセルには上記の手数料テーブルを準用します。なお、Meet &amp; Greet完了後に予約可能フラグが解除されるため、キャンセルされた場合は再度お申し込みが必要です。
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
      <div className="text-[#333333] text-sm leading-loose space-y-3 [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_h3]:mt-4">
        {children}
      </div>
    </section>
  );
}
