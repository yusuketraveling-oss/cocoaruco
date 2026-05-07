import type { Metadata } from 'next'
import { PolicyChapter } from '@/components/ui/PolicyChapter'
import { PolicySection } from '@/components/ui/PolicySection'
import { PolicyCallout } from '@/components/ui/PolicyCallout'

export const metadata: Metadata = {
  title: 'サービスポリシー | cocoaruco ペットシッター',
  description:
    'cocoarucoのペットシッターサービスについて、ご利用方法・料金・お支払い・キャンセル・鍵のお預かり・緊急時の対応など、ご利用にあたって知っておいていただきたいことを体系的にまとめています。',
}

export default function PolicyPage() {
  return (
    <main className="bg-white">
      {/* ─────────────── ヒーロー + 目次（linen の連続セクション） ─────────────── */}
      <section className="bg-linen">
        {/* ヒーロー部分 */}
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
          <p className="text-xs tracking-widest text-amber font-bold mb-5 uppercase">
            Service Policy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight tracking-wide">
            サービスポリシー
          </h1>
          <p className="mt-6 text-sm md:text-base text-text-primary leading-loose">
            cocoarucoのペットシッターサービスについて、ご利用方法・料金・お支払い・キャンセル・鍵のお預かり・緊急時の対応など、ご利用にあたって知っておいていただきたいことを体系的にまとめています。
          </p>
          <p className="mt-4 text-sm md:text-base text-text-primary leading-loose">
            ご利用前にお気になる項目から、お読みください。
          </p>

          {/* メタ情報 */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-primary/60">
            <span>最終更新日：2026年4月1日</span>
            <span aria-hidden="true">·</span>
            <span>株式会社ココアルコ</span>
          </div>
        </div>

        {/* 目次部分（白カード、linen 背景の中に浮かべる） */}
        <div className="max-w-3xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="rounded-2xl bg-white border border-sitter-main/10 p-6 md:p-8">
            <p className="text-xs tracking-widest text-sitter-accent font-bold mb-5 uppercase">
              目次
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {CHAPTERS.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="flex items-baseline gap-3 py-2 text-sm text-brand-navy hover:text-sitter-main transition-colors"
                  >
                    <span className="text-[10px] tracking-widest text-sitter-accent font-bold shrink-0 pt-0.5">
                      {c.number}
                    </span>
                    <span className="leading-relaxed">{c.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────── 各章 ─────────────── */}
      <article className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">

        {/* ── 章 01：ご利用方法について ── */}
        <PolicyChapter
          number="01"
          id="how-to-use"
          title="ご利用方法について"
          lead="cocoarucoのペットシッターサービスは、ご家族の暮らしのリズムに合わせて、3つのご利用方法からお選びいただけます。それぞれの特徴と、ご利用にあたって知っておいていただきたいことをまとめています。"
          toc={[
            { id: 'plans-regular', label: '定期コース' },
            { id: 'plans-passport', label: 'パスポート' },
            { id: 'plans-spot', label: 'スポット利用' },
            { id: 'plans-meet-and-greet', label: 'Meet & Greet（事前面談）' },
          ]}
        >
          <PolicySection id="plans-regular" title="定期コース">
            <p>
              決まった曜日・時間枠で継続的にご利用いただく形態です。私たちが最も大切にしている、いちばんの中心となるご利用方法です。同じ担当チームが繰り返しお伺いするため、その子の暮らしや変化を継続的に見守ることができます。
            </p>
            <p>
              定期コースには、ご利用頻度によって <strong>週3回以上</strong> と <strong>週2回</strong> の2つの区分があります。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              週3回以上の定期コース
            </h4>
            <ul>
              <li>2週間の締め期間内で、2回までキャンセルが可能です（締め日にカウントがリセットされます）</li>
              <li>キャンセルではなく振替をご希望の場合は、何回でも可能です</li>
              <li>振替先は当月＋3ヶ月先までの空き枠からお選びいただけます</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              週2回の定期コース
            </h4>
            <ul>
              <li>キャンセルはお受けしておらず、振替のみのご対応となります</li>
              <li>振替は何回でも可能です（振替先は当月＋3ヶ月先まで）</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              自動予約のしくみ
            </h4>
            <p>
              定期コースをご利用の方は、毎月1日0時に翌月分の予約が自動で確保されます。曜日・時間枠の永続的な変更をご希望の場合は、変更希望日の1週間前までにマイページからお申し出ください。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              解約について
            </h4>
            <p>
              定期コースの解約は、いつでもマイページからお手続きいただけます。解約後、振替済みで未消化のご予約がある場合は失効となります。詳しくは
              <a href="#cancellation">04. キャンセル・スケジュール変更</a>
              をご覧ください。
            </p>
          </PolicySection>

          <PolicySection id="plans-passport" title="パスポート">
            <p>
              お選びいただいたメニュー10回分を一括事前購入いただき、有効期限内であればカレンダーから自由にご予約いただける形態です。曜日や時間が固定できないご家族や、出張・旅行が多い方におすすめです。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              パスの種類
            </h4>
            <p>有効期限の長さに応じて、3種類のパスをご用意しています。</p>
            <ul>
              <li><strong>30 Days パス</strong>：購入から30日間有効</li>
              <li><strong>60 Days パス</strong>：購入から60日間有効</li>
              <li><strong>シーズン パス</strong>：購入から90日間有効</li>
            </ul>
            <p>
              有効期限が長いほど、1回あたりの単価は少しずつ高くなります。具体的な料金は各エリアの料金ページをご覧ください。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              消化のルール
            </h4>
            <ul>
              <li>1回のシッティングで1回分が消化されます</li>
              <li>有効期限を過ぎた未消化分は、原則として失効となります</li>
              <li>キャンセルされた場合の取扱いは、利用形態別の規定に従います（詳しくは<a href="#cancellation">04. キャンセル・スケジュール変更</a>をご覧ください）</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              購入後のキャンセル・返金
            </h4>
            <p>
              パスポートご購入後7日以内かつ未使用の場合に限り、ご購入のキャンセルおよびご返金が可能です。それ以降のご返金はお受けしておりません。
            </p>
          </PolicySection>

          <PolicySection id="plans-spot" title="スポット利用">
            <p>
              1日程ずつ単発でご利用いただく形態です。お試しでのご利用や、定期的なご依頼が難しい場合のご対応として承っています。
            </p>
            <p>
              スポット利用の料金は、定期コース基準の料金に <strong>1,100円（税込）</strong> を加算した金額となります。継続的なご利用が見込める場合は、定期コースまたはパスポートのほうがお得にご利用いただけます。
            </p>

            <PolicyCallout variant="info">
              スポット利用であっても、初回ご利用前には Meet &amp; Greet（事前面談）が必要です。お申し込みの際は、初回サービス日の2週間前までにお申し込みください。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="plans-meet-and-greet" title="Meet & Greet（事前面談）">
            <p>
              初回のご利用に先立ち、担当となるスタッフがご自宅を訪問する事前面談です。ペットの性格、住環境、お世話の流れ、入退室の方法、緊急時の取り決めを、一つひとつていねいに確認させていただきます。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              所要時間と料金
            </h4>
            <ul>
              <li>所要時間：60分前後（ペットの頭数や状況により前後します）</li>
              <li>料金：3,300円（税込）</li>
              <li>原則として対面で実施しますが、ご事情がある場合はオンラインでの実施もご相談ください</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              お申し込みのタイミング
            </h4>
            <p>
              初回サービス日の2週間前までにお申し込みください。Meet &amp; Greet の完了および当社所定の確認を経て、本予約のご利用が可能となります。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              Meet &amp; Greet で確認させていただくこと
            </h4>
            <ul>
              <li>ペットの性格、健康状態、お食事やお散歩の好み</li>
              <li>ご自宅への入退室方法（合鍵・キーボックス・スマートロック）</li>
              <li>緊急時のご連絡先と、かかりつけ動物病院</li>
              <li>お世話に必要な用品の場所、動線、家電の使い方</li>
              <li>その他、その子のお世話に大切な情報</li>
            </ul>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 02：料金について ── */}
        <PolicyChapter
          number="02"
          id="pricing"
          title="料金について"
          lead="cocoarucoのペットシッターサービスの料金体系をご案内します。料金はすべて消費税込みの総額表示で、定期コース基準の料金を中心にご案内しています。"
          toc={[
            { id: 'pricing-base', label: '基本メニューと料金' },
            { id: 'pricing-by-plan', label: 'ご利用形態による料金差' },
            { id: 'pricing-rush', label: '当日・前日予約料金' },
            { id: 'pricing-keys', label: '鍵に関わる費用' },
            { id: 'pricing-options', label: 'オプション料金' },
            { id: 'pricing-tax', label: '消費税の取扱い' },
          ]}
        >
          <PolicySection id="pricing-base" title="基本メニューと料金">
            <p>
              cocoarucoのペットシッターサービスには、お世話の内容と時間に応じた4つの基本メニューがあります。下記は <strong>定期コース基準</strong> の料金です。
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm border border-sitter-main/15 rounded-2xl overflow-hidden">
                <thead className="bg-linen">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-brand-navy">メニュー</th>
                    <th className="text-left px-4 py-3 font-bold text-brand-navy">時間</th>
                    <th className="text-right px-4 py-3 font-bold text-brand-navy">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sitter-main/10">
                  <tr>
                    <td className="px-4 py-3">クイック・ビジット</td>
                    <td className="px-4 py-3 text-text-primary/70">15分</td>
                    <td className="px-4 py-3 text-right font-bold">3,300円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">オリジナル・ケア 30分</td>
                    <td className="px-4 py-3 text-text-primary/70">30分</td>
                    <td className="px-4 py-3 text-right font-bold">3,300円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">オリジナル・ケア 45分</td>
                    <td className="px-4 py-3 text-text-primary/70">45分</td>
                    <td className="px-4 py-3 text-right font-bold">4,400円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">プレミアム・ケア</td>
                    <td className="px-4 py-3 text-text-primary/70">60〜75分</td>
                    <td className="px-4 py-3 text-right font-bold">5,500円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">寝かしつけプラン</td>
                    <td className="px-4 py-3 text-text-primary/70">60〜90分</td>
                    <td className="px-4 py-3 text-right font-bold">7,700円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">追加 15分</td>
                    <td className="px-4 py-3 text-text-primary/70">+15分</td>
                    <td className="px-4 py-3 text-right font-bold">1,100円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              各メニューの内容（健康チェック、お食事、お散歩、コミュニケーション等）は、ご利用案内ページにて詳しくご紹介しています。
            </p>
          </PolicySection>

          <PolicySection id="pricing-by-plan" title="ご利用形態による料金差">
            <p>
              同じメニューでも、ご利用形態によって料金が異なります。継続的にご利用いただく方ほど、低い単価でご利用いただける設計です。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              定期コース（基準料金）
            </h4>
            <p>上記「基本メニューと料金」の料金そのものでご利用いただけます。</p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              パスポート（10回一括購入）
            </h4>
            <p>
              パスの有効期限により、1回あたりの単価が変わります。具体的な料金は各エリアの料金ページにてご確認ください。
            </p>
            <ul>
              <li>30 Days パス：定期コース料金 + 約220円/回</li>
              <li>60 Days パス：定期コース料金 + 約330円/回</li>
              <li>シーズン パス（90日）：定期コース料金 + 約550円/回</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              スポット利用（単発）
            </h4>
            <p>
              定期コース基準料金に <strong>+1,100円</strong> が加算されます。
            </p>
          </PolicySection>

          <PolicySection id="pricing-rush" title="当日・前日予約料金">
            <p>
              前日18時以降の新規ご予約には、特急手配のための追加料金として <strong>+1,100円（税込）</strong> が加算されます。
            </p>
            <p>
              急なご出張や体調不良など、やむを得ないご事情はもちろんございますが、できる限りお早めのご予約をおすすめしています。
            </p>

            <PolicyCallout variant="info">
              既存ご予約の時間調整や担当者変更については、追加料金は発生しません（キャンセル規定に従います）。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="pricing-keys" title="鍵に関わる費用">
            <p>
              ご自宅への入退室方法（スマートロック・キーボックス・合鍵）によって、加算される費用が異なります。詳しい運用は
              <a href="#keys">06. 鍵のお預かりと入退室について</a>
              をご覧ください。
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm border border-sitter-main/15 rounded-2xl overflow-hidden">
                <thead className="bg-linen">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-brand-navy">項目</th>
                    <th className="text-right px-4 py-3 font-bold text-brand-navy">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sitter-main/10">
                  <tr>
                    <td className="px-4 py-3">スマートロック・指紋認証でのご入室</td>
                    <td className="px-4 py-3 text-right">加算なし</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">キーボックスのレンタル</td>
                    <td className="px-4 py-3 text-right">無料（送料880円のみ）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">合鍵を2本以上お預けの場合</td>
                    <td className="px-4 py-3 text-right">加算なし</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">合鍵を1本のみお預けの場合</td>
                    <td className="px-4 py-3 text-right font-bold">+440円/回</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">長期保管サービス（年額）</td>
                    <td className="px-4 py-3 text-right">2,200円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">合鍵の郵送返却（普通郵便/クリックポスト）</td>
                    <td className="px-4 py-3 text-right">330円</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">合鍵の郵送返却（簡易書留/こねこ便）</td>
                    <td className="px-4 py-3 text-right">660円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PolicySection>

          <PolicySection id="pricing-options" title="オプション料金">
            <p>
              ご利用の目的に応じて、各種オプションサービスをご用意しています。
            </p>

            <ul>
              <li><strong>お買物代行</strong>：1,100円（税込）/ 回 ※フード・トイレ用品等が不足した場合にご利用いただけます</li>
              <li><strong>追加ペットケア</strong>：植物の水やり、観賞魚のお世話、郵便物の取り込み等のご相談</li>
              <li><strong>そのほか</strong>：個別のご相談はお問い合わせください</li>
            </ul>

            <p>
              オプション料金の詳細は、各エリアの料金ページにてご確認いただけます。
            </p>
          </PolicySection>

          <PolicySection id="pricing-tax" title="消費税の取扱い">
            <p>
              本サービスサイトに表示している料金は、すべて消費税込みの総額表示です。
            </p>
            <p>
              インボイス制度に対応した適格請求書として、領収書をマイページからダウンロードいただけます。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 03：お支払い方法について ── */}
        <PolicyChapter
          number="03"
          id="payment"
          title="お支払い方法について"
          lead="cocoarucoのペットシッターサービスのお支払いは、クレジットカード・デビットカードによるオンライン自動決済を採用しています。安全で、お手間のかからないご利用を目指しています。"
          toc={[
            { id: 'payment-method', label: 'ご利用いただける決済方法' },
            { id: 'payment-timing', label: '決済のタイミング' },
            { id: 'payment-card-info', label: 'カード情報の管理' },
            { id: 'payment-failure', label: '決済が失敗した場合の取扱い' },
          ]}
        >
          <PolicySection id="payment-method" title="ご利用いただける決済方法">
            <p>
              クレジットカード・デビットカードによるオンライン自動決済のみをご用意しています。会員登録時にご登録いただいたカードで、サービスご利用時に自動で決済が行われます。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              ご利用いただけるカードブランド
            </h4>
            <p>
              以下7ブランドのカードをご利用いただけます。
            </p>

            <div className="my-6 p-6 rounded-2xl bg-linen border border-sitter-main/15">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center">
                {[
                  { name: 'VISA', label: 'VISA' },
                  { name: 'Mastercard', label: 'Mastercard' },
                  { name: 'JCB', label: 'JCB' },
                  { name: 'AMEX', label: 'American Express' },
                  { name: 'Diners', label: 'Diners Club' },
                  { name: 'Discover', label: 'Discover' },
                  { name: 'UnionPay', label: '銀聯' },
                ].map((brand) => (
                  <div
                    key={brand.name}
                    className="aspect-[8/5] rounded-xl bg-white border border-sitter-main/10 flex items-center justify-center text-[10px] md:text-xs text-text-primary/70 text-center px-2 leading-tight font-bold"
                  >
                    {brand.label}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-text-primary/50 leading-relaxed">
                ※ 各カードブランドの公式ロゴ画像は、Square ガイドラインに従い後日差し替え予定。
              </p>
            </div>

            <PolicyCallout variant="info">
              銀聯（UnionPay）カードもご利用いただけます。在住の中国系のお客様にもご安心してご利用いただけます。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="payment-timing" title="決済のタイミング">
            <p>
              ご利用形態によって、決済が行われるタイミングが異なります。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              定期コース・スポット利用
            </h4>
            <p>
              2週間ごとの締め日に、ご利用済み分を一括して自動決済いたします。
            </p>
            <ul>
              <li>1日〜15日のご利用分 → 16日に自動決済</li>
              <li>16日〜末日のご利用分 → 翌1日に自動決済</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              パスポート
            </h4>
            <p>ご購入時に即時決済いたします。</p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              Meet &amp; Greet
            </h4>
            <p>
              他のご利用料金と同じ締め日に決済いたします（Meet &amp; Greet 単独で即時決済は行いません）。
            </p>

            <PolicyCallout variant="info" title="領収書のご発行">
              決済完了後、マイページから領収書をダウンロードいただけます。インボイス制度に対応した適格請求書としても発行可能です。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="payment-card-info" title="カード情報の管理">
            <p>
              ご登録いただいたクレジットカード情報は、当社が利用する決済代行事業者である <strong>Square</strong> が PCI DSS（カード業界のセキュリティ基準）に準拠した環境で管理しています。当社のサーバーには、カード情報そのものは保存されません。
            </p>
            <p>
              カード情報の変更・削除は、いつでもマイページからお手続きいただけます。
            </p>
          </PolicySection>

          <PolicySection id="payment-failure" title="決済が失敗した場合の取扱い">
            <p>
              自動決済が失敗した場合（カード有効期限切れ・限度額超過等）、当社からマイページのメッセージおよび登録メールアドレスへ、決済失敗のご通知をお送りします。
            </p>
            <p>
              速やかにマイページからカード情報の更新、または別のカードへの変更をお願いいたします。決済が完了しない期間が続く場合、当社の判断でサービスのご提供を一時的に停止させていただくことがあります。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 04：キャンセル・スケジュール変更について ── */}
        <PolicyChapter
          number="04"
          id="cancellation"
          title="キャンセル・スケジュール変更について"
          lead="ご予約のキャンセル・変更が必要になった際の取扱いをご案内します。早めのご連絡ほど、ご負担なくご対応いただけます。"
          toc={[
            { id: 'cancel-timeline', label: 'キャンセル料の基本' },
            { id: 'cancel-by-plan', label: 'ご利用形態別の細則' },
            { id: 'cancel-no-show', label: '無連絡キャンセルについて' },
            { id: 'cancel-rush-fee', label: '当日・前日予約料金との関係' },
            { id: 'cancel-by-us', label: '当社からサービスを中止する場合' },
          ]}
        >
          <PolicySection id="cancel-timeline" title="キャンセル料の基本">
            <p>
              ご予約日の <strong>2日前 18:00</strong> 以降のキャンセルから、所定のキャンセル料が発生します。下図は基本のキャンセル料の段階です。
            </p>

            {/* 三段階タイムライン帯 */}
            <div className="my-8">
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="text-center text-[10px] md:text-xs font-bold tracking-wider text-text-primary/70">
                  〜 2日前 18:00
                </div>
                <div className="text-center text-[10px] md:text-xs font-bold tracking-wider text-text-primary/70">
                  〜 前日 18:00
                </div>
                <div className="text-center text-[10px] md:text-xs font-bold tracking-wider text-text-primary/70">
                  前日 18:00 以降・当日
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden border border-sitter-main/15">
                <div className="bg-linen py-6 md:py-8 text-center">
                  <p className="text-xs md:text-sm text-text-primary/70 mb-1">
                    キャンセル料
                  </p>
                  <p className="text-base md:text-xl font-bold text-brand-navy">
                    無料
                  </p>
                </div>
                <div className="bg-amber/25 py-6 md:py-8 text-center">
                  <p className="text-xs md:text-sm text-text-primary/80 mb-1">
                    サービス料金の
                  </p>
                  <p className="text-base md:text-xl font-bold text-brand-navy">
                    50%
                  </p>
                </div>
                <div className="bg-brand-navy py-6 md:py-8 text-center">
                  <p className="text-xs md:text-sm text-white/80 mb-1">
                    サービス料金の
                  </p>
                  <p className="text-base md:text-xl font-bold text-white">
                    100%
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-3 px-2">
                <div className="text-[10px] text-text-primary/50">早め</div>
                <div className="flex-1 mx-3 h-px bg-gradient-to-r from-sitter-main/30 via-amber/50 to-brand-navy/50" />
                <div className="text-[10px] text-text-primary/50">直前</div>
              </div>
            </div>

            <PolicyCallout variant="warning">
              ご予約の変更やキャンセルが必要になった場合は、なるべくお早めにご連絡をお願いいたします。
            </PolicyCallout>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              なぜ「2日前 18:00」を区切りにしているか
            </h4>
            <p>
              cocoaruco では、ご予約の確定後、担当チームのスケジュール、他のご家庭との時間配分、お散歩ルートの調整、車両の手配など、複数の準備を進めています。直前のキャンセルが発生すると、これらの準備がそのまま空きとなり、当日の体制全体に影響が及ぶことがあります。
            </p>
            <p>
              早めのご連絡をいただければ、別のお客様のキャンセル待ちの方にお声がけしたり、スタッフのシフトを柔軟に組み替えたりすることができます。「2日前 18:00」という区切りは、こうした調整に必要な時間として設定しています。
            </p>
          </PolicySection>

          <PolicySection id="cancel-by-plan" title="ご利用形態別の細則">
            <p>
              上記の基本に加えて、ご利用形態によって個別の取扱いがあります。
            </p>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              定期コース（週3回以上）
            </h4>
            <ul>
              <li>2週間の締め期間内で、2回までキャンセルが可能（締め日にカウントリセット）</li>
              <li>個別のキャンセルによる日割り返金は行いません</li>
              <li>振替は何回でも可能（振替先は当月＋3ヶ月先まで）</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              定期コース（週2回）
            </h4>
            <ul>
              <li>キャンセルはお受けしておらず、振替のみのご対応となります</li>
              <li>振替は何回でも可能（振替先は当月＋3ヶ月先まで）</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              パスポート
            </h4>
            <ul>
              <li>2日前 18:00 までのキャンセルは、回数のクレジットとして返還されます（消化扱いになりません）</li>
              <li>2日前 18:00 以降のキャンセルは、上記の基本テーブル（50%・100%）に従って消化扱いとなります</li>
              <li>有効期限を超過した未消化分は失効となります</li>
            </ul>

            <h4 className="text-sm md:text-base font-bold text-brand-navy mt-6 mb-3">
              スポット利用
            </h4>
            <p>上記「キャンセル料の基本」がそのまま適用されます。</p>
          </PolicySection>

          <PolicySection id="cancel-no-show" title="無連絡キャンセルについて">
            <p>
              事前のご連絡がないままサービスを行えなかった場合（玄関でお待ちしてもご連絡が取れない、入室方法の変更が共有されておらず入れない等）、サービス料金の <strong>100%</strong> を申し受けます。
            </p>
            <p>
              また、当日訪問したスタッフの出張費、および各種キャンペーンや割引サービスの適用除外となる場合があります。
            </p>

            <PolicyCallout variant="warning">
              無連絡キャンセルが続いた場合、当社の判断によりサービスのご提供を見合わせていただくことがあります。やむを得ないご事情があった場合も、必ず事後にお知らせください。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="cancel-rush-fee" title="当日・前日予約料金との関係">
            <p>
              前日 18:00 以降に新規ご予約をいただいた場合、特急手配のための当日・前日予約料金（+1,100円・税込）が加算されます。詳しくは
              <a href="#pricing">02. 料金について</a>
              の「当日・前日予約料金」をご覧ください。
            </p>
            <p>
              この当日・前日予約料金については、ご予約後にキャンセルされた場合もご返金の対象外となります。特急手配のためのスタッフ調整がすでに行われているためです。
            </p>
          </PolicySection>

          <PolicySection id="cancel-by-us" title="当社からサービスを中止する場合">
            <p>
              以下のような不可抗力に該当する事情により、当社からサービスのご提供を中止させていただく場合があります。この場合、キャンセル料は発生せず、無償振替または料金のご返金にて対応いたします。
            </p>
            <ul>
              <li>地震・台風・大雪・火災等の天災</li>
              <li>感染症の流行による行政指導</li>
              <li>公共交通機関の長時間の遮断</li>
              <li>担当スタッフの急病等で、代替対応も困難な場合</li>
              <li>その他、当社の業務遂行に支障をきたす事情</li>
            </ul>
            <p>
              やむを得ずサービスを中止する場合、当社からただちにご連絡し、振替日程または返金についてご相談させていただきます。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 05〜14 は順次追加されます ── */}

      </article>

      {/* ─────────────── 末尾の補足（linen 背景に静かに語りかける） ─────────────── */}
      <section className="bg-linen py-20 md:py-28 border-t border-sitter-main/10">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <p className="text-xs tracking-widest text-sitter-accent font-bold mb-5 uppercase">
            規約について
          </p>
          <p className="text-sm md:text-base text-text-primary leading-loose mb-4">
            本ページは、cocoarucoペットシッターサービスをご利用いただく方に向けて、ご利用方法・料金・運用ルールなどを、わかりやすくまとめたものです。
          </p>
          <p className="text-sm md:text-base text-text-primary leading-loose mb-4">
            具体的な権利義務関係を定めた利用規約は、ご入会フローまたは Meet &amp; Greet の際にお渡しし、ご同意をいただいたうえでサービスを開始します。
          </p>
          <p className="text-sm md:text-base text-text-primary leading-loose">
            ご検討段階で内容を確認されたい場合は、
            <a
              href="/contact"
              className="text-sitter-main underline underline-offset-2 hover:text-sitter-earth"
            >
              お問い合わせフォーム
            </a>
            からご連絡ください。担当よりお送りいたします。
          </p>

          <p className="mt-12 text-xs text-text-primary/50 leading-loose">
            本ポリシーは、サービスの改定に伴い変更される場合があります。最新版はマイページおよび本サービスサイトをご確認ください。
          </p>
        </div>
      </section>
    </main>
  )
}

// ─────────────── 14章の定義（メタ情報） ───────────────

const CHAPTERS = [
  { number: '01', id: 'how-to-use', title: 'ご利用方法について' },
  { number: '02', id: 'pricing', title: '料金について' },
  { number: '03', id: 'payment', title: 'お支払い方法について' },
  { number: '04', id: 'cancellation', title: 'キャンセル・スケジュール変更について' },
  { number: '05', id: 'reservation', title: 'ご予約について' },
  { number: '06', id: 'keys', title: '鍵のお預かりと入退室について' },
  { number: '07', id: 'health', title: 'ペットの健康と安全について' },
  { number: '08', id: 'walking', title: 'お散歩について' },
  { number: '09', id: 'home-environment', title: '訪問時の住居環境について' },
  { number: '10', id: 'emergency', title: '緊急時・もしもの時の対応について' },
  { number: '11', id: 'compensation', title: '賠償の取扱いについて' },
  { number: '12', id: 'mutual-comfort', title: 'ご家族・スタッフ双方の安心のために' },
  { number: '13', id: 'termination', title: 'ご契約の解除について' },
  { number: '14', id: 'privacy', title: '個人情報・プライバシーについて' },
]
