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

## デザインコンセプト
Desert Modern。ペットシッター・ペットタクシーを統合した1コンセプト。
乾いた大地のAmberと清廉なLinenを組み合わせたオーガニックでモダンなデザイン。

## カラーシステム

### Brand Core
- linen:            #FDFCF8  ← ベース背景色
- brand-navy:       #002E4E  ← 基調色
- brand-navy-hover: #001f35  ← ホバー時
- amber:            #DBB35B  ← セカンダリ1
- sand:             #BFA575  ← セカンダリ2
- text-primary:     #333333  ← 本文テキスト
- text-white:       #FFFFFF  ← 白テキスト

### Service Colors（統合Desert Modernパレット）
- sitter-main:    #436573  ← Steel
- sitter-sub:     #918C7E  ← Khaki
- sitter-accent:  #A47864  ← Copper
- sitter-earth:   #695650  ← Umber
- taxi-base:      #59695F  ← Sage
- taxi-sub:       #E8C7B6  ← Blush
- cream:          #FBF3E6  ← Cream
- taupe:          #9D8877  ← Taupe

## シェイプシステム
- radius-lg:  24px  → rounded-2xl
- radius-xl:  40px  → rounded-[40px]
- radius-2xl: 48px  → rounded-[48px]
- ボタン・バッジ: rounded-full

## タイポグラフィ
- H1: font-black(W900) / 56px / line-height 1.1 / tracking 0.02em
- H2: font-bold(W700) / 36px / line-height 1.3 / tracking 0.05em
- H3: font-bold(W700) / 24px / line-height 1.4 / tracking 0.05em
- Body: font-normal(W400) / 16px / line-height 1.8 / tracking 0.05em
- font-feature-settings: "palt"

## テクスチャ・エフェクト
- GlassCard: bg-[#FDFCF8]/75 backdrop-blur-md border border-white/60
  shadow-[0_12px_40px_-8px_rgba(0,46,78,0.08)] rounded-[40px]
- texture-sand: SVGノイズテクスチャ、opacity 0.08、mix-blend-mode: multiply
- desert-tint: radial-gradient amber、背景に薄く敷く

## レイアウトリズム
- セクション間余白: py-24 または py-32
- コンテナ最大幅: max-w-7xl mx-auto
- モバイルpadding: px-4 / デスクトップ: px-8

## ボタン
- Primary: bg-brand-navy text-white hover:bg-brand-navy-hover
  border-2 border-transparent hover:border-amber
  hover:shadow-[0_8px_20px_rgba(219,179,91,0.3)]
  transition-all rounded-full font-bold
- Secondary: bg-sitter-main text-white hover:opacity-90 rounded-full font-bold

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

## フォント設計（3変数化）

CSS変数で3つの役割に分けて管理しています。将来 Adobe Fonts などへの差し替えは `app/globals.css` の `:root` ブロック内の3変数の値を書き換えるだけで全ページに反映されます。

- `--font-body-family`：本文（body, p, span など）→ 現状 Noto Sans JP
- `--font-display-family`：見出し（h1/h2/h3）→ 現状 Noto Sans JP（将来 Adobe Fonts 和文ディスプレイ書体予定）
- `--font-en-family`：英字ラベル（eyebrow, SINCE 2013 等）→ 現状 Noto Sans JP（将来 Adobe Fonts 欧文書体予定）

`@theme inline` で Tailwind クラスに対応：
- `font-sans`：本文（デフォルト、body に適用済み）
- `font-display`：見出しを意図的にディスプレイ書体にしたい時
- `font-en`：英字ラベル

注意：Tailwind v4 では `tailwind.config.ts` でのテーマ定義は不可。全トークンは `app/globals.css` の `@theme inline` で一元管理。

## カラートークン

すべて `app/globals.css` の `@theme inline` で定義。Tailwind ユーティリティとして自動生成されます（例: `--color-linen` → `bg-linen`, `text-linen`, `border-linen`）。

色の追加・変更は `globals.css` の1箇所で完結します。

コンポーネント実装時の注意：
- `brand-navy` と `navy` は同値（#002E4E）。既存コンポーネントは `navy` を使用
- `text-primary` と `ink` は同値（#333333）。既存コンポーネントは `ink` を使用

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