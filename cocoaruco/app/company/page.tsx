import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '私たちについて | cocoaruco',
  description:
    '株式会社ココアルコは、大阪を拠点に、ペットシッター・ペットタクシーサービスを運営しています。ペットの心の充足感に向き合うサービスをお届けしています。',
}

export default function CompanyPage() {
  return (
    <main>
      {/* ─────────────── ヒーロー ─────────────── */}
      <section className="bg-bg pt-12 pb-8">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-3">
            Company
          </p>
          <h1 className="text-2xl font-medium text-text-primary leading-tight tracking-tight">
            私たちについて
          </h1>
          <p className="mt-5 text-sm text-text-primary leading-relaxed">
            cocoarucoのサービスを運営する、株式会社ココアルコの紹介ページです。
          </p>
        </div>
      </section>

      {/* ─────────────── 私たちのこと（理念表現） ─────────────── */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            About Us
          </p>

          <div className="space-y-4 text-sm text-text-primary leading-relaxed">
            <p>
              株式会社ココアルコは、大阪を拠点に、ペットシッター・ペットタクシーサービスを運営しています。
            </p>
            <p>
              ご家族がお仕事で離れている時間を、その子にとって心地よい時間に。
            </p>
            <p>
              出張のための代行ではなく、ペットの心の充足感に向き合うこと——cocoaruco のサービスは、この一点を大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── 会社情報 ─────────────── */}
      <section className="bg-bg py-12">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            Corporate Info
          </p>

          <div className="rounded-lg border border-border-subtle bg-surface overflow-hidden">
            <dl className="divide-y divide-border-subtle">
              <CompanyItem label="法人名">
                <p>株式会社ココアルコ</p>
              </CompanyItem>

              <CompanyItem label="代表者">
                <p>代表取締役 小野寺 悠介</p>
              </CompanyItem>

              <CompanyItem label="所在地">
                <p>〒544-0033</p>
                <p>大阪府大阪市生野区勝山北 1-20-17</p>
              </CompanyItem>

              <CompanyItem label="設立">
                <p>2022年7月2日</p>
              </CompanyItem>

              <CompanyItem label="資本金">
                <p>300万円</p>
              </CompanyItem>

              <CompanyItem label="事業内容">
                <p>ペットシッター・ペットタクシーサービスの運営</p>
              </CompanyItem>

              <CompanyItem label="電話番号">
                <p>050-5526-1237</p>
                <p className="mt-2 text-xs text-text-muted">
                  受付時間：平日 9:00〜18:00（土日祝休）
                </p>
              </CompanyItem>

              <CompanyItem label="メールアドレス">
                <p className="break-all">hello@cocoaruco.jp</p>
              </CompanyItem>
            </dl>
          </div>
        </div>
      </section>

      {/* ─────────────── 動物取扱業の標識 ─────────────── */}
      <section className="bg-surface py-12 border-y border-border-subtle">
        <div className="max-w-[430px] mx-auto px-4">
          <p className="text-xs font-medium text-text-secondary tracking-wider uppercase mb-4">
            Animal Handling License
          </p>
          <h2 className="text-base font-medium text-text-primary mb-3">
            動物取扱業者標識
          </h2>
          <p className="text-sm text-text-primary leading-relaxed mb-6">
            動物の愛護及び管理に関する法律第18条に基づき、第一種動物取扱業者として大阪府に登録しています。
          </p>

          <div className="space-y-4">
            {/* 保管 */}
            <div className="rounded-lg border border-border-subtle bg-bg p-5">
              <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-3">
                第一種動物取扱業（保管）
              </p>
              <dl className="space-y-2.5 text-sm">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-text-secondary">登録番号</dt>
                  <dd className="text-text-primary">大阪府第200075B号</dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-text-secondary">登録年月日</dt>
                  <dd className="text-text-primary">2022年7月21日</dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-text-secondary">有効期間</dt>
                  <dd className="text-text-primary">5年間</dd>
                </div>
              </dl>
            </div>

            {/* 訓練 */}
            <div className="rounded-lg border border-border-subtle bg-bg p-5">
              <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-3">
                第一種動物取扱業（訓練）
              </p>
              <dl className="space-y-2.5 text-sm">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-text-secondary">登録番号</dt>
                  <dd className="text-text-primary">大阪府第240053D号</dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-text-secondary">登録年月日</dt>
                  <dd className="text-text-primary">2024年7月17日</dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-text-secondary">有効期間</dt>
                  <dd className="text-text-primary">5年間</dd>
                </div>
              </dl>
            </div>

            {/* 動物取扱責任者 */}
            <div className="rounded-lg border border-border-subtle bg-bg p-5">
              <p className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-3">
                動物取扱責任者
              </p>
              <p className="text-sm text-text-primary">小野寺 香織</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─────────────── 共通サブコンポーネント ───────────────

type CompanyItemProps = {
  label: string
  children: React.ReactNode
}

function CompanyItem({ label, children }: CompanyItemProps) {
  return (
    <div className="px-5 py-4">
      <dt className="text-[10px] font-medium text-text-secondary tracking-wider uppercase mb-2">
        {label}
      </dt>
      <dd className="text-sm text-text-primary leading-relaxed">
        {children}
      </dd>
    </div>
  )
}
