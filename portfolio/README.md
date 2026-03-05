# woruka Portfolio

`woruka.github.io` 用のポートフォリオ兼ブログです。  
モバイル開発（Flutter / Kotlin / Swift）を軸に、セキュリティ・OSS・キャリア設計の発信を継続するためのサイトとして運用します。

## このリポジトリの目的

- 技術スタックと実務視点を一貫して示せるポートフォリオを育てる
- セキュリティやモバイル設計の学びを記事として蓄積する
- OSS やキャリア設計の考えを、検索可能な形で公開する

## 技術構成

- Framework: Astro 5
- Content: Markdown / MDX（`src/content/blog`）
- Hosting: GitHub Pages（`main` push で自動デプロイ）
- CI/CD: GitHub Actions（`.github/workflows/deploy.yml`）

## 主要ディレクトリ

```text
portfolio/
├─ public/                    # 画像などの静的アセット
├─ src/
│  ├─ components/             # 共通コンポーネント
│  ├─ content/blog/           # 記事（Markdown / MDX）
│  ├─ layouts/                # レイアウト
│  ├─ pages/                  # ルーティングされるページ
│  └─ consts.ts               # サイト名・説明
├─ astro.config.mjs           # Astro設定（site URL含む）
└─ package.json
```

## ローカル開発

```sh
npm install
npm run dev
```

- 開発サーバー: `http://localhost:4321`
- 本番ビルド確認:

```sh
npm run build
npm run preview
```

## 記事追加手順

1. `src/content/blog` に `yyyy-mm-dd-title.md` を追加
2. frontmatter に `title`, `description`, `pubDate` を設定
3. 必要なら `heroImage` を指定（`src/assets` 配下）
4. `npm run build` が通ることを確認して `main` へ push

## プロフィール更新ポイント

- サイトタイトル・説明: `src/consts.ts`
- トップページ文言: `src/pages/index.astro`
- Aboutページ: `src/pages/about.astro`

## デプロイ

- `main` ブランチへ push すると、GitHub Actions が `portfolio/dist` を生成
- 生成物を GitHub Pages にデプロイ
- 公開先: `https://woruka.github.io`

## 補足

現在は Astro テンプレート由来のサンプル記事も含まれているため、実運用時は順次置き換えていく想定です。
