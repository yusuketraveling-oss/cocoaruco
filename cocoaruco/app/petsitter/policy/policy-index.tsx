// app/petsitter/policy/page.tsx
// ポリシー一覧（インデックスページ）

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "各種規約・ポリシー | cocoaruco ペットシッター",
  description: "cocoarucoペットシッターサービスの各種規約・ポリシーの一覧です。",
};

const policies = [
  {
    href: "/petsitter/policy/terms",
    en: "Terms of Service",
    ja: "利用規約",
    desc: "サービスのご利用条件・会員登録・決済・禁止事項などの基本規定です。",
  },
  {
    href: "/petsitter/policy/privacy",
    en: "Privacy Policy",
    ja: "個人情報保護方針",
    desc: "お客様の個人情報・ペット情報の取得目的・管理方法・第三者提供に関する方針です。",
  },
  {
    href: "/petsitter/policy/cancel",
    en: "Cancellation Policy",
    ja: "キャンセル規定",
    desc: "キャンセル・スケジュール変更の手数料テーブルと、利用形態別の振替ルールです。",
  },
  {
    href: "/petsitter/policy/legal",
    en: "Specified Commercial Transaction Act",
    ja: "特定商取引法に基づく表記",
    desc: "事業者情報・サービス料金・支払方法・返金条件等の法定表記です。",
  },
  {
    href: "/petsitter/policy/compensation",
    en: "Accident & Compensation Policy",
    ja: "事故・損害賠償規定",
    desc: "サービス提供中の事故・家財損害・鍵の紛失に対する補償範囲と免責事項です。",
  },
  {
    href: "/petsitter/policy/keys",
    en: "Key Management Policy",
    ja: "合鍵預かり規定",
    desc: "合鍵の受け渡し手数料・長期保管サービス・返却方法・紛失時の対応です。",
  },
  {
    href: "/petsitter/policy/emergency",
    en: "Emergency Response & Medical Consent",
    ja: "緊急時対応・医療同意",
    desc: "シッティング中の緊急時対応フロー・医療同意の委任・かかりつけ病院の登録について。",
  },
];

export default function PolicyIndexPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] pb-32">
      {/* ヘッダー */}
      <div className="bg-[#002E4E] text-white pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#DBB35B] uppercase font-bold mb-4">
            Policy & Terms
          </p>
          <h1 className="text-4xl font-bold">各種規約・ポリシー</h1>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            cocoarucoペットシッターサービスをご利用いただくにあたり、<br className="hidden md:block" />
            以下の規約・ポリシーをご確認ください。
          </p>
        </div>
      </div>

      {/* リスト */}
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="space-y-3">
          {policies.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex items-start justify-between gap-6 bg-white/60 border border-[#002E4E]/08 rounded-[24px] p-6 hover:border-[#436573]/30 hover:bg-white/90 transition-all"
            >
              <div className="space-y-1.5">
                <p className="text-[10px] tracking-[0.15em] text-[#918C7E] uppercase font-bold">
                  {p.en}
                </p>
                <p className="font-bold text-[#002E4E] text-base">{p.ja}</p>
                <p className="text-sm text-[#333333]/70 leading-relaxed">{p.desc}</p>
              </div>
              <div className="shrink-0 mt-1 w-8 h-8 rounded-full border border-[#002E4E]/10 flex items-center justify-center text-[#002E4E]/40 group-hover:bg-[#002E4E] group-hover:text-white group-hover:border-[#002E4E] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69l-58.35-58.34a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-xs text-[#333333]/50 leading-loose">
          各規約・ポリシーの内容はサービスの変更等に伴い改定される場合があります。変更の際は本ページおよびメールにてご案内します。お問い合わせは info@cocoaruco.jp までご連絡ください。
        </p>
      </div>
    </main>
  );
}
