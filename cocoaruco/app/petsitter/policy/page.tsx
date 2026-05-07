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
    <main className="bg-bg">
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Service Policy
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            サービスポリシー
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoarucoのペットシッターサービスについて、ご利用方法・料金・お支払い・キャンセル・鍵のお預かり・緊急時の対応など、ご利用にあたって知っておいていただきたいことを体系的にまとめています。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            ご利用前にお気になる項目から、お読みください。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-text-muted">
            <span>最終更新日：2026年4月1日</span>
            <span aria-hidden="true">·</span>
            <span>株式会社ココアルコ</span>
          </div>
        </div>
      </section>

      {/* ─────────────── 目次 ─────────────── */}
      <div className="max-w-[430px] mx-auto px-4 pb-12">
        <div className="rounded-lg bg-surface border border-border-subtle p-5">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            目次
          </p>
          <ol className="space-y-1">
            {CHAPTERS.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="flex items-baseline gap-3 py-2 text-sm text-text-primary hover:text-primary transition-colors"
                >
                  <span className="text-[10px] font-medium text-text-secondary tracking-wider shrink-0 pt-0.5">
                    {c.number}
                  </span>
                  <span className="leading-relaxed">{c.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ─────────────── 各章 ─────────────── */}
      <article className="max-w-[430px] mx-auto px-4 py-8">

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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              週3回以上の定期コース
            </h4>
            <ul>
              <li>2週間の締め期間内で、2回までキャンセルが可能です（締め日にカウントがリセットされます）</li>
              <li>キャンセルではなく振替をご希望の場合は、何回でも可能です</li>
              <li>振替先は当月＋3ヶ月先までの空き枠からお選びいただけます</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              週2回の定期コース
            </h4>
            <ul>
              <li>キャンセルはお受けしておらず、振替のみのご対応となります</li>
              <li>振替は何回でも可能です（振替先は当月＋3ヶ月先まで）</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              自動予約のしくみ
            </h4>
            <p>
              定期コースをご利用の方は、毎月1日0時に翌月分の予約が自動で確保されます。曜日・時間枠の永続的な変更をご希望の場合は、変更希望日の1週間前までにマイページからお申し出ください。
            </p>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              解約について
            </h4>
            <p>
              定期コースの解約は、いつでもマイページからお手続きいただけます。解約後、振替済みで未消化のご予約がある場合は失効となります。詳しくは
              <a href="#cancellation" className="text-primary underline underline-offset-2">04. キャンセル・スケジュール変更</a>
              をご覧ください。
            </p>
          </PolicySection>

          <PolicySection id="plans-passport" title="パスポート">
            <p>
              お選びいただいたメニュー10回分を一括事前購入いただき、有効期限内であればカレンダーから自由にご予約いただける形態です。曜日や時間が固定できないご家族や、出張・旅行が多い方におすすめです。
            </p>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              消化のルール
            </h4>
            <ul>
              <li>1回のシッティングで1回分が消化されます</li>
              <li>有効期限を過ぎた未消化分は、原則として失効となります</li>
              <li>キャンセルされた場合の取扱いは、利用形態別の規定に従います（詳しくは<a href="#cancellation" className="text-primary underline underline-offset-2">04. キャンセル・スケジュール変更</a>をご覧ください）</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              所要時間と料金
            </h4>
            <ul>
              <li>所要時間：60分前後（ペットの頭数や状況により前後します）</li>
              <li>料金：3,300円（税込）</li>
              <li>原則として対面で実施しますが、ご事情がある場合はオンラインでの実施もご相談ください</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              お申し込みのタイミング
            </h4>
            <p>
              初回サービス日の2週間前までにお申し込みください。Meet &amp; Greet の完了および当社所定の確認を経て、本予約のご利用が可能となります。
            </p>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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

            <div className="my-5 overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border border-border-subtle rounded-lg overflow-hidden">
                <thead className="bg-surface-sunken">
                  <tr>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">メニュー</th>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">時間</th>
                    <th className="text-right px-3 py-2.5 font-medium text-text-primary text-xs">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">クイック・ビジット</td>
                    <td className="px-3 py-2.5 text-text-secondary text-xs">15分</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">3,300円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">オリジナル・ケア 30分</td>
                    <td className="px-3 py-2.5 text-text-secondary text-xs">30分</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">3,300円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">オリジナル・ケア 45分</td>
                    <td className="px-3 py-2.5 text-text-secondary text-xs">45分</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">4,400円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">プレミアム・ケア</td>
                    <td className="px-3 py-2.5 text-text-secondary text-xs">60〜75分</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">5,500円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">寝かしつけプラン</td>
                    <td className="px-3 py-2.5 text-text-secondary text-xs">60〜90分</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">7,700円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">追加 15分</td>
                    <td className="px-3 py-2.5 text-text-secondary text-xs">+15分</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">1,100円</td>
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              定期コース（基準料金）
            </h4>
            <p>上記「基本メニューと料金」の料金そのものでご利用いただけます。</p>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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
              <a href="#keys" className="text-primary underline underline-offset-2">06. 鍵のお預かりと入退室について</a>
              をご覧ください。
            </p>

            <div className="my-5 overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border border-border-subtle rounded-lg overflow-hidden">
                <thead className="bg-surface-sunken">
                  <tr>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">項目</th>
                    <th className="text-right px-3 py-2.5 font-medium text-text-primary text-xs">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">スマートロック・指紋認証でのご入室</td>
                    <td className="px-3 py-2.5 text-right text-text-secondary">加算なし</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">キーボックスのレンタル</td>
                    <td className="px-3 py-2.5 text-right text-text-secondary">無料（送料880円のみ）</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">合鍵を2本以上お預けの場合</td>
                    <td className="px-3 py-2.5 text-right text-text-secondary">加算なし</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">合鍵を1本のみお預けの場合</td>
                    <td className="px-3 py-2.5 text-right font-medium text-text-primary">+440円/回</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">長期保管サービス（年額）</td>
                    <td className="px-3 py-2.5 text-right text-text-secondary">2,200円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">合鍵の郵送返却（普通郵便/クリックポスト）</td>
                    <td className="px-3 py-2.5 text-right text-text-secondary">330円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">合鍵の郵送返却（簡易書留/こねこ便）</td>
                    <td className="px-3 py-2.5 text-right text-text-secondary">660円</td>
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              ご利用いただけるカードブランド
            </h4>
            <p>
              以下7ブランドのカードをご利用いただけます。
            </p>

            <div className="my-5 p-4 rounded-lg bg-surface-sunken border border-border-subtle">
              <div className="grid grid-cols-4 gap-2 items-center">
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
                    className="aspect-[8/5] rounded-md bg-surface border border-border-subtle flex items-center justify-center text-[9px] text-text-secondary text-center px-1.5 leading-tight font-medium"
                  >
                    {brand.label}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[10px] text-text-muted leading-relaxed">
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              定期コース・スポット利用
            </h4>
            <p>
              2週間ごとの締め日に、ご利用済み分を一括して自動決済いたします。
            </p>
            <ul>
              <li>1日〜15日のご利用分 → 16日に自動決済</li>
              <li>16日〜末日のご利用分 → 翌1日に自動決済</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              パスポート
            </h4>
            <p>ご購入時に即時決済いたします。</p>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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
              {/* ラベル行 */}
              <div className="grid grid-cols-3 gap-1.5 mb-2">
                <div className="text-center text-[10px] font-medium tracking-wide text-text-secondary leading-tight">
                  〜 2日前 18:00
                </div>
                <div className="text-center text-[10px] font-medium tracking-wide text-text-secondary leading-tight">
                  〜 前日 18:00
                </div>
                <div className="text-center text-[10px] font-medium tracking-wide text-text-secondary leading-tight">
                  前日 18:00 以降・当日
                </div>
              </div>

              {/* 帯 */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="rounded-md bg-success-bg border border-success/30 py-5 text-center">
                  <p className="text-[10px] text-text-secondary mb-1">キャンセル料</p>
                  <p className="text-base font-medium text-success">無料</p>
                </div>
                <div className="rounded-md bg-warning-bg border border-warning/40 py-5 text-center">
                  <p className="text-[10px] text-text-secondary mb-1">料金の</p>
                  <p className="text-base font-medium text-warning">50%</p>
                </div>
                <div className="rounded-md bg-primary border border-primary py-5 text-center">
                  <p className="text-[10px] text-text-inverse/80 mb-1">料金の</p>
                  <p className="text-base font-medium text-text-inverse">100%</p>
                </div>
              </div>

              {/* 時間経過補助線 */}
              <div className="flex items-center mt-3 px-1">
                <span className="text-[10px] text-text-muted">早め</span>
                <div className="flex-1 mx-2 h-px bg-border" />
                <span className="text-[10px] text-text-muted">直前</span>
              </div>
            </div>

            <PolicyCallout variant="warning">
              ご予約の変更やキャンセルが必要になった場合は、なるべくお早めにご連絡をお願いいたします。
            </PolicyCallout>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              定期コース（週3回以上）
            </h4>
            <ul>
              <li>2週間の締め期間内で、2回までキャンセルが可能（締め日にカウントリセット）</li>
              <li>個別のキャンセルによる日割り返金は行いません</li>
              <li>振替は何回でも可能（振替先は当月＋3ヶ月先まで）</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              定期コース（週2回）
            </h4>
            <ul>
              <li>キャンセルはお受けしておらず、振替のみのご対応となります</li>
              <li>振替は何回でも可能（振替先は当月＋3ヶ月先まで）</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              パスポート
            </h4>
            <ul>
              <li>2日前 18:00 までのキャンセルは、回数のクレジットとして返還されます（消化扱いになりません）</li>
              <li>2日前 18:00 以降のキャンセルは、上記の基本テーブル（50%・100%）に従って消化扱いとなります</li>
              <li>有効期限を超過した未消化分は失効となります</li>
            </ul>

            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
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
              <a href="#pricing" className="text-primary underline underline-offset-2">02. 料金について</a>
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

        {/* ── 章 05：ご予約について ── */}
        <PolicyChapter
          number="05"
          id="reservation"
          title="ご予約について"
          lead="cocoarucoの予約システムは、ご家族の暮らしのリズムに合わせて、長く安定的にご利用いただけるよう設計されています。基本的なしくみと、ご利用にあたって知っておいていただきたいことをまとめています。"
          toc={[
            { id: 'reservation-system', label: '予約システムのしくみ' },
            { id: 'reservation-regular-auto', label: '定期コースの自動予約' },
            { id: 'reservation-changes', label: '日程の変更・振替' },
            { id: 'reservation-rush', label: '当日・前日のご予約' },
            { id: 'reservation-availability', label: 'ご予約状況の確認' },
          ]}
        >
          <PolicySection id="reservation-system" title="予約システムのしくみ">
            <p>
              ご予約は、すべてマイページから行っていただきます。お電話やLINEでのご予約はお受けしておりません。
            </p>
            <p>
              予約カレンダーは、毎月1日午前0時に翌月分が解放され、最大4ヶ月先までご予約いただけます。例えば3月15日時点では6月末までのご予約が可能で、4月1日に7月分が新たに解放されます。
            </p>
            <p>
              各時間帯には予約枠の上限があり、満枠の場合はご予約いただけません。空き状況は、ご予約をされない場合でもカレンダーからご確認いただけますので、計画を立てる際の目安としてご活用ください。
            </p>
            <p>
              なお、本サービスはペットの安全およびスタッフの安全を確保するため、当社が必要と認める場合にご予約をお受けできないことがあります。
            </p>
          </PolicySection>

          <PolicySection id="reservation-regular-auto" title="定期コースの自動予約">
            <p>
              定期コースをご利用の方は、所定のスケジュールに基づいて、当社が翌月分のご予約を自動で確保いたします。毎月1日に翌月分のカレンダーが解放されるタイミングに合わせて、最優先で予約枠を押さえる設計です。
            </p>
            <p>
              曜日・時間枠の永続的な変更をご希望の場合は、変更希望日の <strong>1週間前まで</strong> にマイページからお申し出ください。早めにご連絡いただくことで、担当チームの調整がスムーズに進みます。
            </p>
            <PolicyCallout variant="info" title="サマータイム期間について">
              6月21日〜9月20日のサマータイム期間中は、お散歩を含むサービスの時間枠が変動します。5月に7月以降の定期予約を入れる場合など、時間枠が変わる旨を予約画面でご案内いたします。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="reservation-changes" title="日程の変更・振替">
            <p>
              ご予約の追加・振替は、<strong>前日18時まで</strong> マイページから受け付けております。前日18時以降のキャンセル・振替の取扱いは
              <a href="#cancellation" className="text-primary underline underline-offset-2">04. キャンセル・スケジュール変更</a>
              をご覧ください。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              振替のしくみ
            </h4>
            <p>
              振替は、振替手続き時点で開いている予約カレンダーの範囲内（当月＋3ヶ月先まで）からお選びいただけます。振替が完了すると、振替元の日程は空きとなります。
            </p>
            <p>
              振替先が未来の日付にあたる場合でも、料金は <strong>振替元の日付が属する締め期間</strong> で決済されます。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              定期コースの振替について
            </h4>
            <p>
              定期コースは、利用頻度に応じてキャンセル・振替の取扱いが異なります。
            </p>
            <ul>
              <li><strong>週3回以上</strong>：2週間の締め期間内で2回までキャンセル可能。振替は何回でも可能です。</li>
              <li><strong>週2回</strong>：キャンセルはお受けしておらず、振替でのご対応となります。振替は何回でも可能です。</li>
            </ul>
            <p>
              詳しくは
              <a href="#cancellation" className="text-primary underline underline-offset-2">04. キャンセル・スケジュール変更</a>
              の「ご利用形態別の細則」をご覧ください。
            </p>
          </PolicySection>

          <PolicySection id="reservation-rush" title="当日・前日のご予約">
            <p>
              前日18時以降の新規ご予約には、特急手配のための <strong>前日・当日予約料金（+1,100円・税込）</strong> が加算されます。
            </p>
            <p>
              ご出張や体調不良など、やむを得ないご事情はもちろんございますが、できる限りお早めのご予約をおすすめしています。早めのご予約は、担当チームの準備時間に余裕を持たせるとともに、その子のお世話の質にもつながります。
            </p>
            <PolicyCallout variant="info">
              既存のご予約の時間調整や担当者変更については、当日・前日予約料金は発生しません（キャンセル規定に従います）。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="reservation-availability" title="ご予約状況の確認">
            <p>
              マイページの予約カレンダーから、ご自身のご予約状況およびエリア・セクションごとの空き状況をご確認いただけます。
            </p>
            <p>
              空きのなくなった予約枠は、原則としてご予約をお受けできません。どうしても対応が必要な場合は、当社の判断でセクション横断的な対応をご相談させていただくこともございます。
            </p>
            <p>
              安定的にご利用いただくため、計画的なご予約をおすすめしております。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 06：鍵のお預かりと入退室について ── */}
        <PolicyChapter
          number="06"
          id="keys"
          title="鍵のお預かりと入退室について"
          lead="ご自宅への入退室は、ペットシッターサービスの安全と利便性の根幹に関わる部分です。ご家族の暮らしに合わせて、安心していただける方法をご一緒に決めさせていただきます。"
          toc={[
            { id: 'keys-recommended', label: 'おすすめの入退室方法' },
            { id: 'keys-keybox', label: 'キーボックスの無料レンタル' },
            { id: 'keys-physical', label: '合鍵をお預けいただく場合' },
            { id: 'keys-storage', label: '長期保管サービス' },
            { id: 'keys-return', label: '合鍵の返却' },
            { id: 'keys-loss', label: '紛失時の対応' },
          ]}
        >
          <PolicySection id="keys-recommended" title="おすすめの入退室方法">
            <p>
              cocoarucoでは、合鍵を直接お預かりしない方法を、第一の選択肢としておすすめしています。スマートロック、暗証番号式キーボックス、指紋認証など、合鍵の物理的な受け渡しを伴わない方法であれば、ご家族のご予定変更や急なご依頼にも柔軟に対応できます。
            </p>
            <p>
              また、もしものとき（鍵の紛失、誤操作によるオートロック等）にも、駆け付け対応がしやすくなります。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              主な入退室方法
            </h4>
            <ul>
              <li><strong>スマートロック・指紋認証</strong>：加算なし</li>
              <li><strong>キーボックス（当社レンタル）</strong>：無料貸出（送料880円のみ別途）</li>
              <li><strong>合鍵をお預け（2本以上）</strong>：加算なし</li>
              <li><strong>合鍵をお預け（1本のみ）</strong>：1回あたり +440円</li>
            </ul>
          </PolicySection>

          <PolicySection id="keys-keybox" title="キーボックスの無料レンタル">
            <p>
              暗証番号式のキーボックスを、無料で貸し出しております。送料の880円のみご負担いただくかたちで、お申し込みは担当シッターまたはマイページからお気軽にどうぞ。
            </p>
            <p>
              キーボックスは、玄関ドアのノブや配管などに取り付けていただきます。設置場所のご相談も承っております。
            </p>
          </PolicySection>

          <PolicySection id="keys-physical" title="合鍵をお預けいただく場合">
            <p>
              物理的な合鍵をお預けいただく場合は、以下の点をご確認ください。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              2本以上のお預けを推奨
            </h4>
            <p>
              マスターキーではない合鍵を、<strong>2本以上</strong> お預けいただくことを推奨しております。本店保管用と現場用に分けることで、急な担当変更や、もしもの場合にも柔軟に対応できるためです。
            </p>
            <p>
              1本のみのお預けの場合は、本店⇔現場間の調整に手間が発生するため、<strong>1回あたり +440円</strong> の加算をお願いしております。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              その他の鍵について
            </h4>
            <p>
              ゴミ収集室や郵便受けなど、入室後に施錠・解錠が必要な鍵については、原則としてご自宅内で保管をお願いしております（郵送はいたしません）。
            </p>
            <PolicyCallout variant="info">
              合鍵のお預かり・お返しは、原則として対面で行います。スタッフ自宅での引き渡しは、防犯および担当スタッフの安全確保のため、お受けしておりません。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="keys-storage" title="長期保管サービス">
            <p>
              合鍵をお預けいただいているお客様で、直近のご予約が3ヶ月以上先まで入っていない場合に、長期保管サービスをご案内しております。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              サービスの概要
            </h4>
            <ul>
              <li>料金：<strong>年額 2,200円（税込・自動更新）</strong></li>
              <li>本店の鍵付き保管庫で、1本ずつ専用システムにて個別管理いたします</li>
              <li>本店⇔スタッフ間の往復郵送料は料金に含まれます</li>
              <li>お客様のご要請で、いつでも無料返送いたします（再開時に再度2,200円）</li>
              <li>更新1ヶ月前に、メールおよびマイページでリマインダーをお送りします</li>
            </ul>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              対象外のお客様
            </h4>
            <p>
              定期コースを継続的にご利用中の方、シニア・通院中のその子の場合は、合鍵をご自宅で自己管理いただく方が望ましいため、長期保管サービスの対象外とさせていただいております。
            </p>
          </PolicySection>

          <PolicySection id="keys-return" title="合鍵の返却">
            <p>
              お預かりした合鍵は、ご解約時またはお客様のご要請に応じてお返しいたします。
            </p>
            <div className="my-6 overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border border-border-subtle rounded-lg overflow-hidden">
                <thead className="bg-surface-sunken">
                  <tr>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">
                      返却方法
                    </th>
                    <th className="text-right px-3 py-2.5 font-medium text-text-primary text-xs">
                      料金（税込）
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">
                      現地返却（ドアポスト・郵便受け・キーボックス内・在宅家族等）
                    </td>
                    <td className="px-3 py-2.5 text-right">無料</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">
                      郵送（普通郵便/クリックポスト）
                    </td>
                    <td className="px-3 py-2.5 text-right font-medium">330円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">
                      郵送（簡易書留/こねこ便）
                    </td>
                    <td className="px-3 py-2.5 text-right font-medium">660円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              返却方法は、マイページからいつでも変更いただけます。
            </p>
            <PolicyCallout variant="info">
              スタッフのご自宅での合鍵の引き渡し・お返しは、防犯および担当スタッフの安全確保のため、お受けしておりません。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="keys-loss" title="紛失時の対応">
            <p>
              お預かりした合鍵を当社の責任で紛失した場合、当社の費用負担にて、シリンダー交換、合鍵の新規作製、その他付随する対応を行います。
            </p>
            <p>
              付随して発生した損害については、当社が加入する賠償責任保険の補償範囲内で対応いたします。詳しくは
              <a href="#compensation" className="text-primary underline underline-offset-2">11. 賠償の取扱い</a>
              をご覧ください。
            </p>
            <p>
              なお、ご家族側の事情による合鍵の紛失（例：お預けいただく前の段階での紛失）については、本条の対象外となります。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 07：ペットの健康と安全 ── */}
        <PolicyChapter
          number="07"
          id="health"
          title="ペットの健康と安全"
          lead="その子のお世話を安心してお引き受けするために、ご家族にご協力いただきたいことをまとめています。健康に関わる情報は、その子の暮らしを守るための大切な土台です。"
          toc={[
            { id: 'health-vaccine', label: 'ワクチン・予防接種' },
            { id: 'health-parasite', label: 'ノミ・ダニの予防' },
            { id: 'health-disclosure', label: '健康状態・既往歴のお知らせ' },
            { id: 'health-special', label: 'シニア・子犬・術後の特別配慮' },
            { id: 'health-walking-gear', label: 'リード・ハーネス・首輪の点検' },
            { id: 'health-id', label: '迷子札・マイクロチップ' },
            { id: 'health-insurance', label: 'ペット保険のご案内' },
          ]}
        >
          <PolicySection id="health-vaccine" title="ワクチン・予防接種">
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              狂犬病予防注射（犬の場合）
            </h4>
            <p>
              狂犬病予防注射は、法令で定められた飼い主さまの義務です。一部の例外（獣医師の判断による接種猶予等）を除き、必ず接種証明書のご提出をお願いいたします。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              混合ワクチン
            </h4>
            <p>
              犬・猫の混合ワクチンについても、その子の健康状態を正確に把握し、感染症のリスクを最小限に抑えるため、接種証明書のご提出にご協力ください。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              ご提出方法
            </h4>
            <p>
              初回はMeet &amp; Greetの際にご提示ください。次年度以降の更新分は、マイページへのアップロード、またはLINEで担当シッターまでお気軽にお送りください。
            </p>
          </PolicySection>

          <PolicySection id="health-parasite" title="ノミ・ダニの予防">
            <p>
              特にお散歩や屋外での活動を含むサービスをご利用の場合、ノミ・ダニの予防処置を継続的に行っていただくようお願いしております。
            </p>
            <p>
              ご家族にとっても、その子にとっても、屋外から持ち帰る寄生虫は思わぬ健康被害につながることがあります。動物病院で処方される予防薬の定期投与など、かかりつけ獣医師とご相談のうえ、ご対応いただけますと幸いです。
            </p>
          </PolicySection>

          <PolicySection id="health-disclosure" title="健康状態・既往歴のお知らせ">
            <p>
              Meet &amp; Greetの際に、以下の内容を必ずお聞かせください。その子のことを正しく理解させていただくために、また、お世話の中で何かいつもと違う様子があったときに、適切に判断するために、欠かせない情報です。
            </p>
            <ul>
              <li>過去に人または動物を咬んだ経験、威嚇行動の有無</li>
              <li>アレルギー、既往歴、現在の服薬内容</li>
              <li>皮膚疾患、寄生虫感染、感染症の既往または現在の状態</li>
              <li>獣医師から行動制限・食事制限・安静の指示を受けている場合は、その内容</li>
            </ul>
            <PolicyCallout variant="warning" title="申告内容について">
              申告内容に重大な漏れや虚偽があり、それによってスタッフに被害が生じた場合、当社は責任を負いかねます。咬傷事案などについては、サービスの継続をお断りする場合がありますので、何卒、正直にお聞かせいただけますと幸いです。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="health-special" title="シニア・子犬・術後の特別配慮">
            <p>
              シニア期のその子、子犬・子猫、術後・闘病中のその子など、特別な配慮が必要な場合は、ケアの方法・頻度・避けるべき行動・服薬スケジュール等を詳しくお聞かせください。
            </p>
            <p>
              獣医師からの指示書がある場合は、Meet &amp; Greetの際にあわせてご共有ください。私たちは、その指示を基本としながら、その日のその子の様子に合わせた、無理のないお世話を心がけます。
            </p>
          </PolicySection>

          <PolicySection id="health-walking-gear" title="リード・ハーネス・首輪の点検">
            <p>
              お散歩を含むサービスをご利用の前に、リード・ハーネス・首輪の破損や緩みがないか、ご確認をお願いいたします。
            </p>
            <p>
              サービス開始時に担当シッターも装着状態を確認しますが、消耗による不具合は、事前にお取り替えいただけますと安心です。脱走の予防は、その子の命を守る第一歩です。
            </p>
          </PolicySection>

          <PolicySection id="health-id" title="迷子札・マイクロチップ">
            <p>
              万が一の脱走時の安全確保のため、迷子札の装着とマイクロチップの登録を、強くおすすめしております。
            </p>
            <p>
              マイクロチップは2022年以降、ペットショップやブリーダーから迎え入れた犬・猫には装着が義務付けられていますが、それ以前から暮らしているその子にも、後から装着が可能です。かかりつけ動物病院でご相談いただけます。
            </p>
          </PolicySection>

          <PolicySection id="health-insurance" title="ペット保険のご案内">
            <p>
              緊急時の医療費は、原則として飼い主さまのご負担となります。ご家計の備えとして、ペット保険へのご加入をご検討いただくことをおすすめしております。
            </p>
            <p>
              緊急時の対応の詳細については、
              <a href="#emergency" className="text-primary underline underline-offset-2">10. 緊急時・もしもの時</a>
              をご覧ください。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 08：お散歩について ── */}
        <PolicyChapter
          number="08"
          id="walking"
          title="お散歩について"
          lead="お散歩は、その子の心と体を整える、大切な時間です。安全とその子の体調を最優先にしながら、その日のリズムに合わせたお散歩をお届けしています。"
          toc={[
            { id: 'walking-no-offlead', label: 'オフリードでのお散歩について' },
            { id: 'walking-weather', label: '暑熱・寒冷気象時の運用' },
            { id: 'walking-summertime', label: 'サマータイムの運用' },
            { id: 'walking-risk', label: 'お散歩中のリスク管理' },
          ]}
        >
          <PolicySection id="walking-no-offlead" title="オフリードでのお散歩について">
            <p>
              法令およびその子の安全確保の観点から、cocoarucoのお散歩では、<strong>オフリードでのお散歩は行いません</strong>。たとえご家族からのご希望があっても、当社のシッティング中にリードを離すことはございません。
            </p>
            <p>
              お散歩中は、リードの長さ、テンション、犬具の状態を常に確認し、安全な距離と動線でお散歩を進めます。これは、その子の命を守るための、私たちの揺るがない方針です。
            </p>
          </PolicySection>

          <PolicySection id="walking-weather" title="暑熱・寒冷気象時の運用">
            <p>
              気温・湿度・天候に応じて、お散歩の時間帯、コース、所要時間を調整いたします。肉球の保護、水分補給、休憩のタイミングなど、その子の体調を最優先とした判断をいたします。
            </p>
            <p>
              雨の日、雪の日、強風の日、極端に寒い日など、その日その日の状況に合わせて、無理のない範囲でお散歩をご一緒します。お散歩が難しいと判断した場合は、室内での運動・コミュニケーションに切り替えるなど、訪問時間の中で別の楽しみをお届けします。
            </p>
          </PolicySection>

          <PolicySection id="walking-summertime" title="サマータイムの運用">
            <p>
              夏場の高温期は、その子の体調と安全への配慮から、サービス提供時間帯およびお散歩の運用を調整させていただきます。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              サマータイム期間
            </h4>
            <p>
              <strong>6月21日〜9月20日</strong>
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              時間枠の変更
            </h4>
            <div className="my-5 overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border border-border-subtle rounded-lg overflow-hidden">
                <thead className="bg-surface-sunken">
                  <tr>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">
                      ブロック
                    </th>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">
                      通常期
                    </th>
                    <th className="text-left px-3 py-2.5 font-medium text-text-primary text-xs">
                      サマータイム
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">A（早番）</td>
                    <td className="px-3 py-2.5 text-text-secondary">7:00〜10:00</td>
                    <td className="px-3 py-2.5 text-text-secondary">6:00〜9:00</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">B（早番）</td>
                    <td className="px-3 py-2.5 text-text-secondary">10:00〜13:00</td>
                    <td className="px-3 py-2.5 text-text-secondary">9:00〜12:00</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">C（遅番）</td>
                    <td className="px-3 py-2.5 text-text-secondary">13:00〜16:00</td>
                    <td className="px-3 py-2.5 text-text-secondary">15:00〜18:00</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-text-primary">D（遅番）</td>
                    <td className="px-3 py-2.5 text-text-secondary">16:00〜19:00</td>
                    <td className="px-3 py-2.5 text-text-secondary">18:00〜21:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              猛暑日・路面温度の運用
            </h4>
            <ul>
              <li>
                <strong>猛暑日（気象庁の定義：最高気温35℃以上）</strong>の場合、お散歩は早朝（6:00〜9:00）と夕方以降（18:00〜21:00）の時間帯のみとさせていただきます。曇天や雨天で気温が安定している場合は、その他の時間帯でも対応することがあります。
              </li>
              <li>
                <strong>アスファルト路面温度50℃以上</strong>の場合、お散歩を中止し、室内での運動・コミュニケーションに切り替えます。
              </li>
            </ul>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              その他の暑さ対策
            </h4>
            <p>
              お散歩中も、状況に応じて、時間の短縮、日差しを避けるルートの選択、水分補給の頻度を増やす、公園までペットカート・ペットワゴンで移動するなど、その子の負担を最小限に抑える工夫を行います。
            </p>
          </PolicySection>

          <PolicySection id="walking-risk" title="お散歩中のリスク管理">
            <p>
              お散歩中は、他のその子や通行人だけでなく、車や自転車、路上のガラス片や穴などの危険、拾い食いの可能性など、起こりうるさまざまなリスクに目を配りながらお世話をいたします。
            </p>
            <p>
              ルートの選定、リードコントロール、安全な距離の確保、周囲の状況の観察を通して、その子の安全を守ります。
            </p>
            <p>
              万が一、お散歩中に予期せぬ事態が発生した場合の対応については、
              <a href="#emergency" className="text-primary underline underline-offset-2">10. 緊急時・もしもの時</a>
              をご覧ください。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 09：訪問時の住居環境について ── */}
        <PolicyChapter
          number="09"
          id="home-environment"
          title="訪問時の住居環境について"
          lead="ご自宅にお邪魔してお世話をするからこそ、その子と担当スタッフが安心して過ごせる環境を、ご家族とご一緒に整えさせてください。"
          toc={[
            { id: 'home-supplies', label: '用品のご準備' },
            { id: 'home-flow', label: '安全な動線の確保' },
            { id: 'home-third-party', label: '第三者の在室について' },
            { id: 'home-hygiene', label: '衛生状態について' },
            { id: 'home-security', label: '防犯設備・警備契約のご共有' },
          ]}
        >
          <PolicySection id="home-supplies" title="用品のご準備">
            <p>
              その子のお世話に必要な用品（フード・トイレ用品・投薬器具など）は、ご利用日数分をあらかじめご用意ください。
            </p>
            <p>
              万が一、不足していた場合の対応方法については、Meet &amp; Greetの際にあらかじめご相談させていただきます。
            </p>
          </PolicySection>

          <PolicySection id="home-flow" title="安全な動線の確保">
            <p>
              スタッフが安全にお世話できる動線をご確保ください。その子の行動範囲内に、スタッフまたはその子自身に危害を及ぼす可能性のある物品が置かれていないか、ご確認をお願いいたします。
            </p>
            <p>
              例えば、誤飲しやすい小物、高いところからの落下リスクのある物、毒性のある観葉植物、人間の食品（チョコレート・玉ねぎ・ぶどう等）など、ご家族にとっては当たり前の景色でも、その子にとっては危険となるものがあります。
            </p>
          </PolicySection>

          <PolicySection id="home-third-party" title="第三者の在室について">
            <p>
              サービス時間中に、ご家族以外の方（同居人、訪問業者、ハウスキーパー、家事代行スタッフなど）が在室される予定がある場合は、必ず事前にお知らせください。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              事前のご連絡なく第三者が在室されていた場合
            </h4>
            <p>
              安全確保のため、一旦退室し、飼い主さまにご確認をとったうえでお世話を再開いたします。確認に要した時間分は、その子へのケアを最優先するため、お世話の時間を延長して対応します（延長分は追加料金扱いとなります）。
            </p>
            <p>
              その回のお世話が実施できなかった場合も、キャンセルポリシーに準じた料金が発生いたしますので、あらかじめご了承ください。
            </p>
          </PolicySection>

          <PolicySection id="home-hygiene" title="衛生状態について">
            <p>
              その子の健康またはスタッフの安全を著しく損なうと判断される衛生状態の場合、当該回のお世話を最低限の範囲に留め、環境改善のご相談をさせていただくことがあります。
            </p>
            <p>
              お引越し直後やご家族のご体調不良時など、一時的な状況であれば柔軟に対応させていただきますので、Meet &amp; Greetまたはご予約時にお気軽にご相談ください。改善の見込みがない場合は、サービスの継続をお断りする場合があります。
            </p>
          </PolicySection>

          <PolicySection id="home-security" title="防犯設備・警備契約のご共有">
            <p>
              防犯カメラ、センサー、警備会社との契約などがご自宅にある場合は、Meet &amp; Greetの際にお知らせください。解除コードや操作手順についても、サービス提供に必要な範囲で事前にご共有をお願いいたします。
            </p>
            <p>
              なお、ペットカメラの取扱いについては、
              <a href="#mutual-comfort" className="text-primary underline underline-offset-2">12. ご家族・スタッフ双方の安心</a>
              に詳しくまとめています。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 10：緊急時・もしもの時 ── */}
        <PolicyChapter
          number="10"
          id="emergency"
          title="緊急時・もしもの時"
          lead="その子の体調が突然変化したとき、脱走が起きたとき、災害が発生したとき——「もしものとき」に、私たちがどう動くかを、あらかじめお伝えしておきます。慌てず、誠実に対応するための準備を、Meet & Greetからずっと続けています。"
          toc={[
            { id: 'emergency-flow', label: '体調急変時の対応フロー' },
            { id: 'emergency-medical', label: '治療費等のご負担' },
            { id: 'emergency-contacts', label: '緊急連絡先のご登録' },
            { id: 'emergency-escape', label: '脱走・逃走時の対応' },
            { id: 'emergency-disaster', label: '災害時の対応' },
            { id: 'emergency-other-clients', label: '他のご家族のご予約がある場合' },
          ]}
        >
          <PolicySection id="emergency-flow" title="体調急変時の対応フロー">
            <p>
              お世話中にその子の体調が急変した場合、以下のフローで対応いたします。
            </p>
            <ol>
              <li>
                <strong>状態の確認と応急処置</strong>：呼吸、意識、出血、誤飲、外傷など、状態を確認のうえ、必要な応急処置を行います。
              </li>
              <li>
                <strong>飼い主さまへのご連絡</strong>：電話 → LINE → 緊急連絡先の順でご連絡いたします。Meet &amp; Greetの際にあらかじめ取り決めた方針に基づき、連絡が取れない場合は次のステップに進みます。
              </li>
              <li>
                <strong>かかりつけ動物病院への連絡・搬送</strong>：ご登録のかかりつけ病院に連絡し、必要に応じて担当シッターが搬送いたします。
              </li>
              <li>
                <strong>連絡が取れない場合</strong>：現場の獣医師の判断に委ね、その子の生命・健康を最優先とした医療対応を進めます。
              </li>
              <li>
                <strong>事後のご報告</strong>：状況が落ち着き次第、電話またはLINEで詳細をご報告いたします。
              </li>
            </ol>
            <PolicyCallout variant="info" title="スタッフの応急処置研修について">
              cocoarucoのスタッフは、応急処置の基礎研修を受けています。慌てずに最初の数分を整えられるよう、日々の研鑽を続けています。
            </PolicyCallout>
          </PolicySection>

          <PolicySection id="emergency-medical" title="治療費等のご負担">
            <p>
              緊急時に発生した治療費、搬送費、延長対応費等の実費は、原則として飼い主さまのご負担となります。
            </p>
            <p>
              当社の過失に基づくと認められる場合は、
              <a href="#compensation" className="text-primary underline underline-offset-2">11. 賠償の取扱い</a>
              の規定に従って対応いたします。
            </p>
            <p>
              ペット保険のご加入は、こうした緊急時の備えとしてもご検討いただけますと安心です。詳しくは
              <a href="#health" className="text-primary underline underline-offset-2">07. ペットの健康と安全</a>
              の「ペット保険のご案内」をご覧ください。
            </p>
          </PolicySection>

          <PolicySection id="emergency-contacts" title="緊急連絡先のご登録">
            <p>
              ご家族や信頼できるご友人など、なるべく <strong>複数のご連絡先</strong> のご登録をお願いしております。マイページからいつでも更新いただけます。
            </p>
            <p>
              ご旅行やご出張など、飼い主さまご自身がすぐにご連絡を受けられない状況になりうる場合は、特にこの備えが重要です。
            </p>
          </PolicySection>

          <PolicySection id="emergency-escape" title="脱走・逃走時の対応">
            <p>
              サービス提供中の脱走、または訪問時にすでに脱走されているケースについては、飼い主さまと連絡を取り合いながら、責任を持って捜索および可能な対応を行います。状況に応じて、警察および動物愛護管理センターへの連絡もあわせて行います。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              未然防止のための取り組み
            </h4>
            <p>
              扉や窓の開閉手順の確認、住環境のリスクの事前確認、お世話中の動線管理など、Meet &amp; Greetの段階から、最大限の配慮と工夫を徹底しています。
            </p>
            <p>
              迷子札・マイクロチップの装着については、
              <a href="#health" className="text-primary underline underline-offset-2">07. ペットの健康と安全</a>
              でも触れていますが、万が一の脱走時の安全確保のために、ぜひご準備をお願いしております。
            </p>
          </PolicySection>

          <PolicySection id="emergency-disaster" title="災害時の対応">
            <p>
              地震、台風、大雪、火災等の災害発生時は、スタッフの安全確保を最優先としつつ、可能な範囲でその子の対応を行います。状況に応じて、サービス提供を中止する場合があります。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              サービス中止時の取扱い
            </h4>
            <p>
              災害等の不可抗力によりサービスを中止する場合、キャンセル料は発生せず、無償振替または料金返還にて対応いたします。詳しくは
              <a href="#cancellation" className="text-primary underline underline-offset-2">04. キャンセル・スケジュール変更</a>
              の例外規定をご覧ください。
            </p>
            <h4 className="text-sm font-medium text-text-primary mt-5 mb-2">
              緊急避難について
            </h4>
            <p>
              火災・地震等が発生した場合、担当スタッフは自身の安全を最優先としつつ、可能な範囲でその子も連れ出します。状況によっては連れ出せない場合があり、そのような状況での結果について当社は責任を負いかねます。あらかじめご了承ください。
            </p>
            <p>
              緊急避難に備えて、避難用キャリーの所在、避難先として想定される場所、災害時の連絡先等を、Meet &amp; Greetの際にご共有ください。
            </p>
          </PolicySection>

          <PolicySection id="emergency-other-clients" title="他のご家族のご予約がある場合">
            <p>
              その子の容態が落ち着くまで、担当シッターはできる限り現場に残ります。
            </p>
            <p>
              ただし、他のご家族のお世話があり、お待ちのその子たちがいる場合は、別のスタッフと交代して対応を引き継ぐことがあります。私たちは、すべてのその子に等しく真剣に向き合うために、こうしたチーム体制を取っております。
            </p>
          </PolicySection>
        </PolicyChapter>

        {/* ── 章 11〜14 は順次追加されます ── */}

      </article>

      {/* ─────────────── 末尾補足 ─────────────── */}
      <section className="bg-surface py-12 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            規約について
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-3">
            本ページは、cocoarucoペットシッターサービスをご利用いただく方に向けて、ご利用方法・料金・運用ルールなどを、わかりやすくまとめたものです。
          </p>
          <p className="text-sm text-text-primary leading-relaxed mb-3">
            具体的な権利義務関係を定めた利用規約は、ご入会フローまたは Meet &amp; Greet の際にお渡しし、ご同意をいただいたうえでサービスを開始します。
          </p>
          <p className="text-sm text-text-primary leading-relaxed">
            ご検討段階で内容を確認されたい場合は、
            <a
              href="/contact"
              className="text-primary underline underline-offset-2 hover:text-primary-hover"
            >
              お問い合わせフォーム
            </a>
            からご連絡ください。担当よりお送りいたします。
          </p>
          <p className="mt-8 text-[10px] text-text-muted leading-relaxed">
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
