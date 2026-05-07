// app/petsitter/policy/privacy/page.tsx
// 個人情報保護方針

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "個人情報保護方針 | cocoaruco ペットシッター",
  description: "cocoarucoペットシッターサービスの個人情報保護方針です。",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="個人情報保護方針"
      subtitle="Privacy Policy"
      lastUpdated="2026年4月1日"
    >
      <Section title="1. 事業者情報">
        <p>
          合同会社ネコビル（以下「当社」といいます）は、お客様の個人情報の保護を重要な社会的責務と認識し、以下の方針に基づき適切に取り扱います。
        </p>
      </Section>

      <Section title="2. 取得する個人情報">
        <p>当社は、以下の情報をご提供いただく場合があります。</p>
        <ul>
          <li>
            <strong>会員情報：</strong>
            氏名・フリガナ・メールアドレス・電話番号・住所・郵便番号
          </li>
          <li>
            <strong>ペット情報：</strong>
            ペットの名前・種別・品種・性別・体重・生年月日・健康状態・既往歴
          </li>
          <li>
            <strong>決済情報：</strong>
            クレジットカード情報（カード番号は当社サーバーに保存せず、Square社が管理します）
          </li>
          <li>
            <strong>鍵・入室に関する情報：</strong>
            合鍵の預かり状況・キーボックスの番号・遠隔解錠の方法等
          </li>
          <li>
            <strong>サービス利用情報：</strong>
            予約履歴・決済履歴・シッティングレポートの内容
          </li>
          <li>
            <strong>通信情報：</strong>
            お問い合わせ内容・LINEメッセージ・アクセスログ
          </li>
        </ul>
      </Section>

      <Section title="3. 個人情報の利用目的">
        <p>取得した個人情報は、以下の目的のために利用します。</p>
        <ol>
          <li>本サービスの提供・予約管理・決済処理</li>
          <li>サービスに関するご連絡（リマインダー・レポート・重要事項の通知）</li>
          <li>スタッフへのシッティング指示書・引き継ぎ情報の共有</li>
          <li>万が一の事故・緊急時における動物病院等への情報提供</li>
          <li>サービス改善・新サービスの開発のための統計分析（個人を特定しない形式）</li>
          <li>法令に基づく対応</li>
        </ol>
      </Section>

      <Section title="4. 第三者への提供">
        <p>
          当社は、以下の場合を除き、お客様の個人情報を第三者に提供しません。
        </p>
        <ul>
          <li>お客様ご本人の同意がある場合</li>
          <li>法令に基づく場合（警察・行政機関等からの正式な照会等）</li>
          <li>
            ペットの緊急時・生命に関わる事態において、動物病院等への情報提供が必要と判断した場合
          </li>
          <li>
            業務委託先（決済システム会社・システム開発会社等）への提供（秘密保持契約を締結した範囲内）
          </li>
        </ul>
      </Section>

      <Section title="5. 個人情報の管理">
        <ol>
          <li>
            当社は、個人情報への不正アクセス・紛失・破壊・改ざんを防止するため、適切なセキュリティ対策を実施します。
          </li>
          <li>
            クレジットカード情報はSquare社のセキュアな環境で管理され、当社サーバーには保存されません。
          </li>
          <li>
            合鍵等の鍵情報は、外部スプレッドシートにより厳重に管理し、担当スタッフ以外からのアクセスを制限します。
          </li>
          <li>
            退会後は、法令上の保存義務がある情報を除き、速やかに個人情報を削除します。
          </li>
        </ol>
      </Section>

      <Section title="6. 保有個人データの開示・訂正・削除">
        <p>
          お客様は、当社が保有するご自身の個人情報について、開示・訂正・利用停止・削除を請求する権利を有します。請求の際は、本人確認のうえ対応します。ご希望の場合は、下記お問い合わせ窓口までご連絡ください。
        </p>
      </Section>

      <Section title="7. Cookieおよびアクセス解析">
        <p>
          当社のウェブサイトでは、サービス改善のためにCookieおよびアクセス解析ツールを使用する場合があります。Cookieは個人を直接特定するものではありません。ブラウザの設定でCookieを無効にすることができますが、一部機能がご利用いただけなくなる場合があります。
        </p>
      </Section>

      <Section title="8. プライバシーポリシーの変更">
        <p>
          本方針は、法令の改正またはサービス内容の変更に応じて改定することがあります。変更後は本ページにて公表します。
        </p>
      </Section>

      <Section title="9. お問い合わせ窓口">
        <p>個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
        <div className="mt-4 p-5 bg-[#FDFCF8] border border-[#002E4E]/10 rounded-2xl text-sm space-y-1">
          <p>
            <strong>合同会社ネコビル</strong>
          </p>
          <p>個人情報保護担当窓口</p>
          <p>メール：privacy@cocoaruco.jp</p>
          <p>受付時間：平日 9:00〜17:00（土日祝休み）</p>
        </div>
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
