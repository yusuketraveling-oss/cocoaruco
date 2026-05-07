// app/petsitter/policy/legal/page.tsx
// 特定商取引法に基づく表記

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | cocoaruco ペットシッター",
  description: "cocoarucoペットシッターサービスの特定商取引法に基づく表記です。",
};

const items: { label: string; value: string | React.ReactNode }[] = [
  {
    label: "事業者名",
    value: "合同会社ネコビル",
  },
  {
    label: "代表者",
    value: "（代表者氏名）",
  },
  {
    label: "所在地",
    value: "〒〇〇〇-〇〇〇〇\n大阪府大阪市〇〇区〇〇〇〇〇-〇-〇\n※請求があれば遅滞なく開示します",
  },
  {
    label: "電話番号",
    value: "〇〇〇-〇〇〇〇-〇〇〇〇\n受付：平日 9:00〜17:00（土日祝休み）\n※まずはメールにてお問い合わせください",
  },
  {
    label: "メールアドレス",
    value: "info@cocoaruco.jp",
  },
  {
    label: "サービスの価格",
    value:
      "各サービスページに記載のとおり（消費税込・総額表示）\nオリジナル・ケア30分：3,300円〜\nその他メニューはサービスページをご確認ください",
  },
  {
    label: "サービス提供時期",
    value:
      "Meet & Greet（事前面談）完了後、担当スタッフが予約可能フラグを解除した時点からご利用いただけます",
  },
  {
    label: "支払方法",
    value:
      "クレジットカード（Visa・Mastercard・American Express・JCB）\nパスポートは購入時に即時決済。その他は2週間ごとの事後自動決済",
  },
  {
    label: "支払時期",
    value:
      "・定期コース／スポット／Meet & Greet：2週間ごとの事後自動決済\n  （1〜15日分は16日に、16日〜末日分は翌月1日に決済）\n・パスポート：購入時に即時決済",
  },
  {
    label: "キャンセル・返金",
    value:
      "予約日の2日前18:00までは無料キャンセル可能。\n以降のキャンセルには手数料が発生します。\n詳細はキャンセル規定をご参照ください",
  },
  {
    label: "サービス提供エリア",
    value:
      "大阪市・芦屋市・西宮市・守口市・門真市ほか当社指定エリア\n（郵便番号検索にてご確認ください）",
  },
  {
    label: "動作環境",
    value:
      "予約システムの利用には、最新バージョンのウェブブラウザと安定したインターネット接続環境が必要です",
  },
];

export default function LegalPage() {
  return (
    <PolicyLayout
      title="特定商取引法に基づく表記"
      subtitle="Specified Commercial Transaction Act"
      lastUpdated="2026年4月1日"
    >
      <div className="divide-y divide-[#002E4E]/08">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[10rem_1fr] gap-6 py-6 text-sm"
          >
            <dt className="font-bold text-[#002E4E] pt-0.5">{item.label}</dt>
            <dd className="text-[#333333] leading-loose whitespace-pre-line">
              {item.value}
            </dd>
          </div>
        ))}
      </div>

      <div className="bg-[#FDFCF8] border border-[#002E4E]/10 rounded-2xl p-6 text-sm text-[#333333] leading-loose">
        <p className="font-bold text-[#002E4E] mb-2">ご注意</p>
        <p>
          本表記は特定商取引法（特商法）の規定に基づく表示です。サービスの詳細については、利用規約およびサービスサイトの各ページをご確認ください。表記内容は変更になる場合があります。変更の際は本ページにて告知します。
        </p>
      </div>
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
