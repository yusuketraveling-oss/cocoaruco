import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'よくあるご質問 | cocoaruco ペットシッター',
  description:
    'cocoarucoペットシッターサービスについて、よくいただくご質問にお答えしています。サービスの内容、ご利用方法、料金、その子のこと、緊急時の対応まで。',
}

const CATEGORIES = [
  { id: 'service', number: '01', title: 'サービスについて' },
  { id: 'usage', number: '02', title: 'ご利用について' },
  { id: 'pricing', number: '03', title: '料金・お支払い' },
  { id: 'pet', number: '04', title: 'その子のこと' },
  { id: 'home', number: '05', title: '住居・鍵について' },
  { id: 'emergency', number: '06', title: '緊急時・万が一について' },
]

export default function FaqPage() {
  return (
    <main>
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            よくあるご質問
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            ご利用前のご不安、一つひとつにお答えします。
          </p>
          <p className="mt-3 text-sm text-text-primary leading-relaxed">
            より詳しい運用ルールや具体例は、サービスポリシーをあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* ─────────────── 全体目次 ─────────────── */}
      <div className="max-w-[430px] mx-auto px-4 pb-12">
        <div className="rounded-lg bg-surface border border-border-subtle p-5">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            目次
          </p>
          <ol className="space-y-1">
            {CATEGORIES.map((c) => (
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

      {/* ─────────────── Q&A 本体 ─────────────── */}
      <article className="max-w-[430px] mx-auto px-4 py-8">

        {/* ─── 01. サービスについて ─── */}
        <FaqCategory id="service" number="01" title="サービスについて">
          <FaqItem question="一般的なお留守番代行と何が違うのですか？">
            <p>
              cocoarucoのペットシッターは、お留守番中の食事や排泄のお世話を代行するだけのサービスではありません。お仕事中の平日の日中、定期的にお邪魔して、その子の毎日に「向き合う時間」をそっと差し挟むサービスです。
            </p>
            <p>
              訪問時間の半分は、お散歩・遊び・コミュニケーションなど、その子と向き合う時間にあてています。退屈やストレスを抱えがちなその子の心の充足感を整えること——それが、私たちの中心にある考え方です。
            </p>
          </FaqItem>

          <FaqItem question="平日の日中以外、休日や夜間も利用できますか？">
            <p>
              cocoarucoは、お仕事中の平日の日中の定期訪問を中心に設計しています。週末や夜間のご利用は、スポット利用のかたちでお受けすることがありますが、基本は平日定期コースが軸となります。
            </p>
            <p>
              ご家庭ごとのご事情があると思いますので、Meet &amp; Greetの際にご相談ください。
            </p>
          </FaqItem>

          <FaqItem question="スポット利用だけでも可能ですか？">
            <p>
              スポット利用も承っております。ただし、Meet &amp; Greet（事前面談）は必須です。お互いに納得した上でサービスを始めるという考え方は、定期コースもスポット利用も同じです。
            </p>
            <p>
              週単位で利用したい場合はパスポート(10回券)、定期的に利用したい場合は定期コースと、ご利用のリズムに合わせてお選びいただけます。
            </p>
          </FaqItem>

          <FaqItem question="担当スタッフは毎回同じですか？">
            <p>
              cocoarucoは「担当チーム制」で運営しています。Meet &amp; Greetを実施したスタッフが中心になりつつ、同じセクション内のスタッフが、その子のお世話を担当することがあります。
            </p>
            <p>
              チーム全員が、Meet &amp; Greetで共有された情報をもとに、一貫したお世話をお届けします。
            </p>
          </FaqItem>
        </FaqCategory>

        {/* ─── 02. ご利用について ─── */}
        <FaqCategory id="usage" number="02" title="ご利用について">
          <FaqItem question="初めて利用するとき、どんな流れになりますか？">
            <p>
              ご利用までは3つのステップです。
            </p>
            <ol>
              <li>マイページからご登録・お問い合わせ</li>
              <li>Meet &amp; Greet（事前面談）の実施</li>
              <li>ご予約・シッティング開始</li>
            </ol>
            <FaqLink href="/petsitter">サービスの流れを見る</FaqLink>
          </FaqItem>

          <FaqItem question="Meet & Greet（事前面談）は必ず必要ですか？">
            <p>
              はい、初回ご利用前のMeet &amp; Greetは必須です。その子の性格、暮らしのリズム、ご家族のご希望を、ご一緒に確認させていただくための大切な時間です。
            </p>
            <p>
              料金は3,300円（税込）、所要時間は60分前後。原則対面で実施しますが、ご事情によりオンラインでもご相談いただけます。
            </p>
            <FaqLink href="/petsitter/osaka/mgr">Meet &amp; Greetの詳細を見る</FaqLink>
          </FaqItem>

          <FaqItem question="予約はいつまでに入れる必要がありますか？">
            <p>
              ご予約・スケジュール変更は、前日18時までマイページから受け付けております。前日18時以降の新規ご予約には、特急手配のための前日・当日予約料金（+1,100円・税込）が加算されます。
            </p>
            <p>
              定期コースは、所定のスケジュールに基づいて翌月分のご予約を当社が自動で確保いたします。
            </p>
            <FaqLink href="/petsitter/policy#reservation">ご予約の詳細を見る</FaqLink>
          </FaqItem>

          <FaqItem question="当日、急に利用したくなった場合は対応できますか？">
            <p>
              担当スタッフのスケジュールに余裕があれば、対応できる場合があります。前日18時以降のご予約は、特急手配料金（+1,100円・税込）が加算されます。
            </p>
            <p>
              ただし、満枠の場合はご対応できないことがあります。安定したご利用のためには、早めのご予約をおすすめしています。
            </p>
          </FaqItem>
        </FaqCategory>

        {/* ─── 03. 料金・お支払い ─── */}
        <FaqCategory id="pricing" number="03" title="料金・お支払い">
          <FaqItem question="料金体系がわかりにくいのですが、どう選べばいいですか？">
            <p>
              ご家族の暮らしのリズムに合わせて、3つのご利用形態からお選びいただけます。
            </p>
            <ul>
              <li><strong>定期コース</strong>：週の中心となる定期利用（最も低い単価）</li>
              <li><strong>パスポート</strong>：10回分の回数券。有効期限内に自由にご利用</li>
              <li><strong>スポット利用</strong>：1日程ずつ、必要なときに単発でご利用</li>
            </ul>
            <p>
              プランは「オリジナル・ケア」「プレミアム・ケア」「寝かしつけ」「クイック・ビジット」の4種類。Meet &amp; Greetの際にご相談しながら、最適な組み合わせを考えます。
            </p>
            <FaqLink href="/petsitter/policy#pricing">料金の詳細を見る</FaqLink>
          </FaqItem>

          <FaqItem question="お支払い方法は何が使えますか？">
            <p>
              ご登録のクレジットカードからの自動決済となります。VISA / Mastercard / JCB / American Express / Diners Club / Discover / 銀聯がご利用いただけます。
            </p>
            <p>
              決済処理はSquare Inc.のシステムを利用しており、カード情報は決済代行事業者が管理。当社サーバーには保存されません。
            </p>
          </FaqItem>

          <FaqItem question="キャンセル料はかかりますか？">
            <p>
              キャンセルのタイミングによって、以下のとおりです。
            </p>
            <ul>
              <li>2日前 18:00まで：無料</li>
              <li>前日 18:00まで：料金の50%</li>
              <li>前日 18:00以降・当日：料金の100%</li>
            </ul>
            <p>
              定期コース・パスポート・スポット利用で細則が異なります。
            </p>
            <FaqLink href="/petsitter/policy#cancellation">キャンセル規定を見る</FaqLink>
          </FaqItem>
        </FaqCategory>

        {/* ─── 04. その子のこと ─── */}
        <FaqCategory id="pet" number="04" title="その子のこと">
          <FaqItem question="多頭飼いでも対応してもらえますか？">
            <p>
              多頭飼いのご家庭にもご利用いただけます。頭数や、その子たちの関係性に応じて、プレミアム・ケア（60〜75分）など、より厚みのあるプランをご提案させていただくことがあります。
            </p>
            <p>
              Meet &amp; Greetの際に、それぞれの子の性格や関わり方を詳しくお聞かせください。
            </p>
          </FaqItem>

          <FaqItem question="シニアの子や持病がある子でも大丈夫ですか？">
            <p>
              シニア期、子犬・子猫、術後・闘病中のその子など、特別な配慮が必要な場合も、ご相談いただけます。獣医師からの指示書がある場合は、Meet &amp; Greetの際にご共有ください。
            </p>
            <p>
              その指示を基本としながら、その日のその子の様子に合わせた、無理のないお世話を心がけます。
            </p>
            <FaqLink href="/petsitter/policy#health">健康に関する詳細を見る</FaqLink>
          </FaqItem>

          <FaqItem question="人見知りが激しい子なのですが、大丈夫でしょうか？">
            <p>
              はい、神経質な子・そっとしておいてほしい子も、もちろんお受けしております。空気のように静かにお世話だけを済ませて帰ることもできます。
            </p>
            <p>
              長く向き合うことが正解の日もあれば、静かに引くことが正解の日もある——一律のルールではなく、その子のリズムに合わせて関わり方を選びます。
            </p>
          </FaqItem>

          <FaqItem question="うちの子の犬種や猫種に対応していますか？">
            <p>
              犬・猫を中心に、小動物（うさぎ・ハムスター等）、鳥類、観賞魚なども、ご相談いただけます。種類や性格、ご家庭の環境を踏まえて、対応可能かをMeet &amp; Greetの際にご一緒に確認します。
            </p>
            <p>
              特殊な飼育環境（爬虫類など）の場合は、事前にお問い合わせください。
            </p>
          </FaqItem>
        </FaqCategory>

        {/* ─── 05. 住居・鍵について ─── */}
        <FaqCategory id="home" number="05" title="住居・鍵について">
          <FaqItem question="鍵を預けるのが少し心配です。">
            <p>
              cocoarucoでは、合鍵を直接お預かりしない方法を、第一の選択肢としておすすめしています。スマートロック、暗証番号式キーボックス、指紋認証など、合鍵の物理的な受け渡しを伴わない方法であれば、ご安心いただけます。
            </p>
            <p>
              キーボックスは無料で貸し出しております（送料880円のみご負担）。物理的に合鍵をお預けいただく場合も、本店の鍵付き保管庫で1本ずつ専用システムにて個別管理いたします。
            </p>
            <FaqLink href="/petsitter/policy#keys">鍵のお預かりの詳細を見る</FaqLink>
          </FaqItem>

          <FaqItem question="スマートロックでも対応可能ですか？">
            <p>
              はい、対応可能です。むしろ、合鍵の物理的な受け渡しを伴わないスマートロックは、cocoarucoが推奨している入退室方法です。Meet &amp; Greetの際に、操作手順や開錠コードのご共有方法を、ご一緒に決めさせていただきます。
            </p>
          </FaqItem>

          <FaqItem question="訪問時に家族が在宅していても利用できますか？">
            <p>
              はい、ご家族の在宅・不在を問わず、ご利用いただけます。在宅でリモートワーク中、外出のたびにシッティングをご希望のときなど、ご都合に合わせてご活用ください。
            </p>
            <p>
              ご家族以外の方（同居人、訪問業者等）が在室される予定がある場合は、必ず事前にお知らせください。
            </p>
          </FaqItem>
        </FaqCategory>

        {/* ─── 06. 緊急時・万が一について ─── */}
        <FaqCategory id="emergency" number="06" title="緊急時・万が一について">
          <FaqItem question="お世話中にその子の体調が急変したら、どうなりますか？">
            <p>
              担当スタッフが応急処置を行いつつ、電話 → LINE → 緊急連絡先の順でご連絡いたします。同時に、Meet &amp; Greetの際にご共有いただいたかかりつけ動物病院に連絡し、必要に応じて搬送いたします。
            </p>
            <p>
              緊急時の対応の詳細は、サービスポリシーで詳しくご説明しています。
            </p>
            <FaqLink href="/petsitter/policy#emergency">緊急時の対応を見る</FaqLink>
          </FaqItem>

          <FaqItem question="脱走しないか心配です。予防策はありますか？">
            <p>
              扉や窓の開閉手順の確認、住環境のリスクの事前確認、お世話中の動線管理など、Meet &amp; Greetの段階から、最大限の配慮を徹底しています。
            </p>
            <p>
              また、迷子札の装着とマイクロチップの登録もぜひご準備ください。万が一の脱走時の安全確保のために重要です。
            </p>
          </FaqItem>

          <FaqItem question="サービス中に災害が起きた場合は？">
            <p>
              地震、台風、火災等の災害発生時は、スタッフの安全確保を最優先としつつ、可能な範囲でその子の対応を行います。状況に応じて、サービス提供を中止する場合があります。
            </p>
            <p>
              緊急避難に備えて、避難用キャリーの所在、避難先として想定される場所、災害時の連絡先等を、Meet &amp; Greetの際にご共有ください。
            </p>
          </FaqItem>
        </FaqCategory>

      </article>

      {/* ─────────────── 末尾CTA ─────────────── */}
      <section className="bg-surface py-16 border-t border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4 text-center">
          <h2 className="text-xl font-medium text-text-primary leading-tight tracking-tight">
            ご不明な点があれば、
            <br />
            お気軽にお問い合わせください
          </h2>
          <p className="mt-4 text-sm text-text-primary leading-relaxed">
            このページにない疑問・ご相談がございましたら、
            <br />
            お問い合わせフォームから、お気軽にどうぞ。
          </p>
          <div className="mt-8 space-y-3">
            <Link
              href="/contact"
              className="block w-full px-6 py-3.5 rounded-md bg-primary text-text-inverse text-sm font-medium tracking-wide hover:bg-primary-hover transition-colors"
            >
              お問い合わせフォーム
            </Link>
            <Link
              href="/petsitter/policy"
              className="block w-full px-6 py-3.5 rounded-md text-sm font-medium tracking-wide text-text-primary hover:text-primary transition-colors"
            >
              サービスポリシーをくわしく見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─────────────── 共通サブコンポーネント ───────────────

type FaqCategoryProps = {
  id: string
  number: string
  title: string
  children: React.ReactNode
}

function FaqCategory({ id, number, title, children }: FaqCategoryProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <div className="mb-6">
        <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-1.5">
          Chapter {number}
        </p>
        <h2 className="text-xl font-medium text-text-primary leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  )
}

type FaqItemProps = {
  question: string
  children: React.ReactNode
}

function FaqItem({ question, children }: FaqItemProps) {
  return (
    <div className="rounded-lg bg-surface border border-border-subtle p-5">
      <h3 className="text-base font-medium text-text-primary mb-3 leading-relaxed">
        {question}
      </h3>
      <div className="space-y-3 text-sm text-text-primary leading-relaxed [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1">
        {children}
      </div>
    </div>
  )
}

type FaqLinkProps = {
  href: string
  children: React.ReactNode
}

function FaqLink({ href, children }: FaqLinkProps) {
  return (
    <Link
      href={href}
      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
