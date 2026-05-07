# cocoaruco プロジェクトルール

## 技術スタック
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4（CSS-based config / tailwind.config.ts は使用しない）
- Icons: @phosphor-icons/react
- Font: Noto Sans JP（Google Fonts / 将来 Adobe Fonts 移行予定）

## サイト構成
cocoaruco.jp/                         ← ブランドトップ
cocoaruco.jp/petsitter/               ← ペットシッター共通ページ
cocoaruco.jp/petsitter/osaka/         ← 大阪エリアLP
cocoaruco.jp/petsitter/hokusetsu/     ← 北摂エリアLP
cocoaruco.jp/petsitter/kitakawachi/   ← 北河内エリアLP
cocoaruco.jp/petsitter/hanshinminami/ ← 阪神南エリアLP
cocoaruco.jp/petsitter/nara/          ← 奈良市エリアLP
cocoaruco.jp/petsitter/senboku/       ← 泉北エリアLP
cocoaruco.jp/pettaxi/                 ← ペットタクシー（後回し）

## フォルダ構成
app/
  page.tsx                            ← ブランドトップ
  layout.tsx                          ← ブランド共通レイアウト
  petsitter/
    page.tsx                          ← ペットシッター共通ページ
    layout.tsx                        ← ペットシッター共通レイアウト
    osaka/
      page.tsx
    hokusetsu/
      page.tsx
    kitakawachi/
      page.tsx
    hanshinminami/
      page.tsx
    nara/
      page.tsx
    senboku/
      page.tsx

components/
  brand/                              ← ブランドトップ用コンポーネント
  petsitter/                          ← ペットシッター共通用コンポーネント
  area/                               ← エリアLP用コンポーネント
  ui/                                 ← 共通UIコンポーネント

## ヘッダー・フッターの使い分け
- app/layout.tsx：cocoaruco ブランド共通ヘッダー・フッター
- app/petsitter/layout.tsx：ペットシッター専用ヘッダー・フッター
- 各エリアLP：エリアLP専用ヘッダー・フッター

## デザインシステム — Desert Modern

cocoaruco のデザイン規範は、プロジェクトルート直下の `cocoaruco-design-system.md` を **正本** とします。実装にあたっては必ずこのファイルを参照してください。

### コアコンセプト

**Desert Modern — 都市の中の乾いた洗練**

砂漠を眺める都市のロフト。フラットでクリーン、わずかにウォーム。
ペットを預ける安心感を、湿った優しさではなく **整えられた静かな丁寧さ** で表現します。

### 設計原則

1. **写真・動物が主役、UIは脇役**
2. **彩度を抑える**（HSL 30〜45% 帯）
3. **フラットを徹底**（グラデーション禁止、影は極めて控えめ）
4. **タップターゲット最小 44×44px**
5. **スマホ最優先**（コンテンツコンテナは max-width: 430px）
6. **rounded-full は原則禁止**（アバター以外）
7. **純白 #FFFFFF を背景に使わない**

### カラートークン

トークンの定義は `app/globals.css` の `@theme inline` ブロックにすべて集約されています。Tailwind クラスとして以下のように使えます：

- `bg-bg`, `bg-surface`, `bg-surface-alt`, `bg-surface-sunken`
- `text-text-primary`, `text-text-secondary`, `text-text-muted`, `text-text-inverse`
- `border-border`, `border-border-strong`, `border-border-subtle`
- `bg-primary`, `bg-primary-subtle`, `text-primary`
- `bg-success`, `bg-warning`, `bg-danger`, `bg-info`（および対応する -bg, text-）
- `bg-cat-1` 〜 `bg-cat-10`（および対応する -bg）
- `bg-corporate-navy`, `text-corporate-navy`（局所使用のみ）
- `bg-accent-service`, `text-accent-service`（サービスサブテーマ）

### タイポグラフィ

- **フォント**：Noto Sans JP（英数字も同じフォントで統一）
- **見出しのウェイト**：font-medium (500) を基本。bold は使わない。
- **本文サイズ**：15px が基準
- **使うサイズの種類は1画面で4種類以下**

### スペーシング

- 4px ベース（spacing-1〜spacing-20）
- セクション間の余白は控えめに（過剰な py-24, py-32 は避ける）

### 角丸

- 最大 `rounded-xl`（8px）まで
- カード・モーダル：`rounded-lg`（6px）
- ボタン・入力欄：`rounded-md`（4px）
- バッジ・チップ：`rounded-sm`（2px）
- アバター画像のみ `rounded-full` 例外

### 影

- `shadow-sm`〜`shadow-lg` の範囲のみ
- 強調はボーダーで行う（`border-strong` を使う）

### サービスサブテーマ

- ペットシッター：`<html data-service="petsitter">`（背景：ウォームサンド、アクセント：セージグリーン）
- ペットタクシー：`<html data-service="pettaxi">`（背景：ニュートラル、アクセント：ダスティブルー）

### コンテンツの横幅

- **読みもの系**（ポリシー、採用、会社情報）：max-width: 430px（スマホ幅でセンタリング）
- **予約・フォーム系**：max-width: 430px
- **LP系**：max-width: 430px

すべてのコンテンツが**スマホ幅でセンタリング**される設計です。PC 表示でも、コンテンツ自体はスマホ幅を維持します。

### コーポレートカラー（ナビー #2C3856）の扱い

ナビーは **コーポレート要素のみ局所使用** とします：

- **使ってよい場所**：株式会社ココアルコのロゴ、フッター末尾の社名表示、法的表記
- **使ってはいけない場所**：本文の見出し、CTA ボタン、リンク色、アクセント要素

本文・見出し・CTA は新トークンの `primary`（クレイ）または `accent-service`（サービスごとのアクセント色）を使用します。

### 旧トークンからの移行ルール

旧コード内の以下のクラス名は、新トークンに置き換えてください：

| 旧クラス | 新クラス |
|---|---|
| `bg-linen` | `bg-bg` |
| `bg-white` | `bg-surface` |
| `text-brand-navy` | `text-text-primary`（本文）または `text-corporate-navy`（コーポレート要素のみ） |
| `bg-brand-navy` | `bg-primary`（CTA）または `bg-corporate-navy`（コーポレート要素のみ） |
| `text-amber` | `text-warning` |
| `bg-amber` | `bg-warning` |
| `bg-amber/10`, `bg-amber/25` | `bg-warning-bg` |
| `text-sand` | `text-text-secondary` |
| `text-sitter-main` | `text-accent-service`（または `text-primary`） |
| `bg-sitter-main` | `bg-accent-service`（または `bg-primary`） |
| `bg-sitter-main/10` | `bg-primary-subtle`（または `bg-surface-alt`） |
| `text-sitter-accent` | `text-warning`（または `text-text-secondary`） |
| `text-sitter-earth` | `text-text-secondary` |
| `bg-cream` | `bg-surface` |
| `text-text-primary` | （変更なし、ただし `var(--color-text-primary)` を参照） |
| `font-bold`（見出し） | `font-medium`（読みものページのヒーロー以外） |
| `rounded-2xl`, `rounded-3xl`, `rounded-[40px]` | `rounded-lg`, `rounded-xl` |

## コーディングルール
- shadcn/ui は使用しない
- 独自CSSクラスは作らずTailwindユーティリティのみ使用
- モバイルファースト設計
- コンポーネントはpropsでclassNameを受け取れるように設計

## ブランド情報
- サービス名: cocoaruco
- サービス: ペットシッター・ペットタクシー（Desert Modern 統合コンセプト）
- 対応エリア（ペットシッター）:
  大阪市 / 北摂（豊中市・吹田市）/ 北河内（守口市・門真市）/
  阪神南（西宮市・芦屋市）/ 奈良市（学園前）/ 泉北（堺市西区・泉大津市・高石市）

## 予約システム仕様

### 決済
- 決済手段: Square Payment Links（動的生成）
- 送付手段: LINEメイン、スタッフが手動送信
- 定期コース: Square Card on File APIで月次自動決済
- カード情報: Square側で管理（システムには持たない）

### ポイントシステム
- 1pt = 15分
- 移動時間 = 1pt（固定）
- クイックビジット  15分 = 2pt
- スタンダードケア  30分 = 3pt
- プレミアムケア    45-60分 = 5pt（固定）
- 寝かしつけプラン  60-90分 = 7pt（固定・遅番累計に加算）
- 15分追加オプション = 1pt
- 時間枠上限 = 12pt
- 報酬締め: 末締め10日払い

### 報酬テーブル
- ~6pt   : 料率60% / 実質時給600円
- ~12pt  : 料率55% / 実質時給1,100円
- ~15pt  : 料率53% / 実質時給1,325円
- ~18pt  : 料率51% / 実質時給1,530円
- ~21pt  : 料率49% / 実質時給1,715円
- ~24pt  : 料率47% / 実質時給1,880円

### スタッフダッシュボード（セクション単位）
- 予約一覧の確認
- 代理予約・変更・キャンセル
- 決済リンクのコピー送付
- 予約カードのステータス管理（訪問完了など）
- 簡易メモ欄
- お知らせ投稿（エリアLP向け）
- 累計pt確認（報酬計算用）

### シッティングレポート
- 予約システムには含めない
- 別途構築を検討

### マイページ（/mypage/）
- 会員情報・編集
- ペット情報・編集
- 予約カード一覧（全エリア共通）
- パスポート残クレジット・有効期限
- 定期コース管理
- 予約カードのステータス確認

### LINE連携
- M&G登録完了後にコピーテキストを表示
- テキスト内容：
  お名前・フリガナ・メールアドレス
  M&G予約日時・担当エリア
  ペット情報（名前・品種・性別・体重・年齢）
  シッティング希望日・内容（自由記述）

### ストレージ
- 構造データ: Supabase
- 写真・動画: 予約システムには含めない

### サイト構成
cocoaruco.jp/
  └ ブランドトップ
      ヒーロー / ブランド理念 / サービス2カード（シッター・タクシーComing Soon）
      フッター：運営者情報リンク

cocoaruco.jp/petsitter/
  └ 共通ページ
      ヒーロー / 理念 / エリア一覧
      強み・安心ポイント / ご利用の流れ
      Instagram / FAQ / フッター
      フッター：ポリシー7種リンク

cocoaruco.jp/petsitter/policy/
  ├ terms           利用規約
  ├ privacy         個人情報保護
  ├ cancel          キャンセル規定
  ├ legal           特商法表記
  ├ compensation    賠償規定
  ├ keys            合鍵預かり規定
  └ emergency       緊急時対応・医療同意

cocoaruco.jp/petsitter/[エリア]/
  └ エリアLP
      ヒーロー / 郵便番号検索
      → モーダルでセクション案内
      → セクションページへ遷移

cocoaruco.jp/petsitter/[エリア]/section/[id]/
  └ セクションページ
      カレンダー（空き確認・予約不可）
      スタッフ紹介 / 料金・プラン
      ご利用の流れ / お知らせ
      M&G CTA / フッター
      フッター：ポリシーへのリンクのみ

cocoaruco.jp/mypage/
  └ 共通マイページ（要ログイン）

## 予約カード仕様

### 基本情報
- 日付・時間枠
- メニュー＋オプション
- 担当スタッフ
- ステータス（予約確定／訪問完了／キャンセル）

### 料金
- メニュー基本料金
- オプション料金（買い物代行・送り迎え等）
- 直前手配料（該当する場合）
- 合計金額
- 予約カードの束が15日毎の請求明細を構成する

### カスタマイズ・メモ
- 対象ペット（複数頭いる場合に今日はこの子だけ等）
- その日のリクエスト（予約時入力・後から編集可）
- オプション選択（買い物代行・送り迎え等）
- お客さまメモ（1件・編集可）
- スタッフメモ（1件・編集可）
- 定期コースは前回カスタマイズをデフォルト引き継ぎ
- 全日程への一括反映はモーダルで確認

### レポート
- レポートURL（Cloudflare R2）をボタンで表示
- 訪問完了後にスタッフがURLを添付
- レポート本体は予約システム外（Cloudflare R2）で管理

## カレンダーコンポーネント仕様

### AvailabilityCalendar（エリアLP・M&G共用）
- 横軸：日付（7日分）
- 縦軸：時間枠A・B・C・D（4枠）
- セルの状態：
  空き：bg-sitter-main/20 text-sitter-main
  残りわずか：bg-amber/20 text-amber
  満員：bg-gray-200 text-gray-400
  直前（当日・前日）：bg-red-50 text-red-400 ＋「+¥1,100」表示
- エリアLPでは表示のみ
- M&Gでは空き枠のみ選択可能

### BookingCalendar（マイページ・スタッフダッシュボード用）
- 時間枠A・B・C・D＋寝かしつけ（5枠）
- 各日程に予約カードが紐づく
- カスタマイズ・メモの入力・編集が可能
- 全日程一括反映はモーダルで確認

## 請求明細の構造
- 締め期間：1〜15日 / 16〜末日
- 予約カードを締め期間内で集計
- 締め日に自動決済（Square Card on File API）

## Git運用ルール

### ブランチ戦略
- main: 本番ブランチ（Vercelが自動デプロイ）
- develop: 開発ブランチ（基本的にここで作業）
- feature/xxx: 機能単位のブランチ（大きな機能追加時）

### コミット・プッシュのタイミング
- コンポーネント1つ完成したらコミット
- ページ1ページ完成したらプッシュ
- 作業終了時は必ずプッシュ（翌日の再開地点を明確にする）

### コミットメッセージ規則
- feat: 新機能・新ページ追加
- fix: バグ修正
- style: UIの見た目の変更
- refactor: リファクタリング
- docs: ドキュメント更新

### 例
git add .
git commit -m "feat: add Header and Footer components"
git push origin develop

## Windows環境での日本語ファイル編集時の注意

PowerShell は UTF-8 ファイルの編集時に文字化けを起こすことがあります。日本語を含むファイルを編集する際は、以下を遵守してください。

1. **ファイル全文書き換えは Bash 経由で行う**（PowerShell の `>` リダイレクトは使わない）
2. **コミット前に必ず `git diff` で文字化けがないか確認する**
3. **怪しい場合は `git diff | head -100` で日本語部分を目視チェック**
4. 万が一文字化けが発覚した場合は、即座に `git checkout` で復元する