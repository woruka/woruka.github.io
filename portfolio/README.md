# woruka Portfolio

`woruka.github.io` 用の Astro サイトです。

ポートフォリオとして使いながら、Astro 学習にも使えるように `learn` ページと対応ドキュメントを入れています。

## 何をどこで学ぶか

- トップページの構成を読む
  - `src/pages/index.astro`
- 学習ガイドを見る
  - `src/pages/learn.astro`
- 学習手順の元データを見る
  - `src/data/learningGuide.ts`
- 技術紹介のデータを変える
  - `src/data/techStacks.ts`
- 更新メモを追加する
  - `src/data/memos.ts`
- 共通デザインを変える
  - `src/styles/global.css`

## 開発コマンド

```sh
npm install
npm run dev
```

- 開発サーバー: `http://localhost:4321`

本番確認:

```sh
npm run build
npm run preview
```

## 学習の進め方

### Step 1. Home を変える

最初は `src/pages/index.astro` の hero セクションだけを編集してください。
最初の差分が小さいので、Astro のテンプレート構造を掴みやすいです。

### Step 2. Learn ページを読む

`/learn/` には、どのファイルを触ると何が変わるかを整理しています。
実装側は `src/pages/learn.astro` と `src/data/learningGuide.ts` です。

### Step 3. データ駆動の変更を試す

次に次のファイルを触ると、ページ構成を崩さずに表示を変えられます。

1. `src/data/techStacks.ts`
2. `src/data/memos.ts`
3. `src/data/learningGuide.ts`

## 実装方針

- Astro の標準的な `src/pages`, `src/components`, `src/data` 構成を維持する
- 文章や一覧データは `src/data` へ寄せる
- 学習導線は `/learn/` に集約する
- トップページから学習導線へすぐ行けるようにする

## 主な構成

```text
portfolio/
├─ public/
├─ src/
│  ├─ components/
│  ├─ content/blog/
│  ├─ data/
│  │  ├─ learningGuide.ts
│  │  ├─ memos.ts
│  │  └─ techStacks.ts
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ learn.astro
│  │  ├─ about.astro
│  │  └─ intro/
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
└─ package.json
```

## 公開

- Hosting: GitHub Pages
- 公開先: `https://woruka.github.io`
- `main` への push を基点にデプロイする想定です
