// app/petsitter/policy/terms/page.tsx
// 利用規約

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | cocoaruco ペットシッター",
  description: "cocoarucoペットシッターサービスの利用規約です。",
};

export default function TermsPage() {
  return (
    <PolicyLayout title="利用規約" subtitle="Terms of Service" lastUpdated="2026年4月1日">
      <Section title="第1条（適用）">
        <p>
          本規約は、合同会社ネコビル（以下「当社」といいます）が提供するペットシッターサービス「cocoaruco」（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
        </p>
      </Section>

      <Section title="第2条（会員登録）">
        <ol>
          <li>本サービスの利用を希望する方は、本規約に同意のうえ、当社所定の方法により会員登録を申請してください。</li>
          <li>会員登録は、初回ご利用時のMeet &amp; Greet（事前面談）予約フォームへの入力をもって申請とみなします。</li>
          <li>当社は、以下に該当する場合、会員登録の申請を承認しないことがあります。
            <ul>
              <li>申請情報に虚偽・誤記・記入漏れがある場合</li>
              <li>過去に本規約に違反したことがある場合</li>
              <li>その他、当社が適当でないと判断した場合</li>
            </ul>
          </li>
          <li>会員登録時に、クレジットカードの登録が必要です。登録時の決済は発生しません。</li>
        </ol>
      </Section>

      <Section title="第3条（サービスエリア）">
        <ol>
          <li>本サービスは、当社が指定するエリア・セクション内においてのみ提供されます。</li>
          <li>お客様のご住所が対象エリア内かどうかは、郵便番号による検索にてご確認ください。</li>
          <li>サービスエリアは当社の判断により変更・縮小される場合があります。変更の際は、事前にメールまたはサービスサイト上でお知らせします。</li>
        </ol>
      </Section>

      <Section title="第4条（サービスメニューと料金）">
        <ol>
          <li>本サービスが提供するメニューおよび料金は、サービスサイトに掲載するとおりとします。</li>
          <li>料金はすべて消費税込みの総額表示です。</li>
          <li>利用方法は定期コース（週3回以上・週2回）、パスポート、スポットの4種類です。各利用方法の詳細はサービスサイトをご確認ください。</li>
          <li>オプションサービスは別途料金が発生します。</li>
        </ol>
      </Section>

      <Section title="第5条（Meet & Greet）">
        <ol>
          <li>初回ご利用時は、ご利用希望日の2週間前までにMeet &amp; Greet（事前面談）を実施します。</li>
          <li>Meet &amp; Greetは原則として対面にて行います。特段の事情がある場合はオンラインでの実施も可能です。</li>
          <li>Meet &amp; Greet料金は3,300円（税込）です。</li>
          <li>Meet &amp; Greet完了後、担当スタッフが予約可能フラグを解除した時点から予約が可能となります。</li>
        </ol>
      </Section>

      <Section title="第6条（予約）">
        <ol>
          <li>予約はマイページから行います。</li>
          <li>カレンダーは毎月1日0時に翌月分が解放され、最大4ヶ月先まで予約できます。</li>
          <li>各時間ブロックの予約枠には上限があります。満枠の場合はご予約いただけません。</li>
          <li>前日18:00までに予約された場合、通常料金が適用されます。当日または前日の当日予約（前日18:00以降）には特急手配料1,100円（税込）が加算されます。</li>
          <li>定期コースの自動予約は毎月1日0時の15分前に完了します。</li>
        </ol>
      </Section>

      <Section title="第7条（決済）">
        <ol>
          <li>決済はクレジットカードにより行います。カード情報はSquareが管理し、当社サーバーには保存されません。</li>
          <li>定期コース・スポット・Meet &amp; Greetの決済は2週間ごとの事後自動決済です（1〜15日利用分は16日に、16日〜末日利用分は翌月1日に決済）。</li>
          <li>パスポートは購入時に即時決済されます。</li>
          <li>決済が失敗した場合、当社よりご連絡のうえ、サービスを一時停止させていただく場合があります。</li>
        </ol>
      </Section>

      <Section title="第8条（禁止事項）">
        <p>ユーザーは以下の行為を行ってはなりません。</p>
        <ul>
          <li>虚偽の情報を登録・申告する行為</li>
          <li>スタッフへのハラスメント・不当な要求・暴言</li>
          <li>サービスの提供に関係のない作業をスタッフへ依頼する行為</li>
          <li>第三者への転貸・転売等、会員資格を不正に利用する行為</li>
          <li>当社システムへの不正アクセス・破壊行為</li>
          <li>法令または公序良俗に違反する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>
      </Section>

      <Section title="第9条（契約解除・退会）">
        <ol>
          <li>ユーザーはいつでも退会申請が可能です。ただし、定期コースの解約は希望日の1週間前までにお申し込みください。</li>
          <li>当社は、ユーザーが本規約に違反した場合、事前通知なく会員資格を停止・削除することができます。</li>
          <li>退会・解約後、振替済みの未消化日程は失効します。</li>
        </ol>
      </Section>

      <Section title="第10条（免責事項）">
        <ol>
          <li>当社は、天災・感染症の流行・公共交通機関の遮断等の不可抗力によるサービス提供の遅延・中止について、責任を負いません。</li>
          <li>ペットの寿命・持病・特異体質等の不可抗力による事故については、責任を負いかねる場合があります。</li>
          <li>当社が責任を負う場合でも、当社の賠償額は加入する賠償責任保険の補償範囲を上限とします。</li>
        </ol>
      </Section>

      <Section title="第11条（個人情報）">
        <p>
          当社は、ユーザーから取得した個人情報を別途定める「個人情報保護方針」に従い適切に取り扱います。
        </p>
      </Section>

      <Section title="第12条（規約の変更）">
        <p>
          当社は、必要と判断した場合、本規約を変更できるものとします。変更後の規約は、サービスサイト上に掲示した時点から効力を生じます。変更内容が重要な場合は、メールにてご連絡します。
        </p>
      </Section>

      <Section title="第13条（準拠法・管轄裁判所）">
        <p>
          本規約の解釈には日本法を適用します。本サービスに関する紛争については、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </Section>
    </PolicyLayout>
  );
}

// ─── 共通レイアウト・コンポーネント ──────────────────────────────────────────

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
      {/* ヘッダー */}
      <div className="bg-[#002E4E] text-white pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#DBB35B] uppercase font-bold mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-sm text-white/60">最終更新日：{lastUpdated}</p>
        </div>
      </div>

      {/* 本文 */}
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
      <div className="text-[#333333] text-sm leading-loose space-y-3 [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_li>ul]:mt-2 [&_li>ul]:list-[circle]">
        {children}
      </div>
    </section>
  );
}
