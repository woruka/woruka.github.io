# woruka.github.io

`woruka.github.io` のソースリポジトリです。

実際の Astro サイト本体は [`portfolio/`](./portfolio) にあります。

## Quick Start

```sh
cd portfolio
npm install
npm run dev
```

通常は `http://localhost:4321` で確認できます。

## Learning Entry

このリポジトリは学習にも使えるように整理しています。

- 実装側の入口: `/learn/`
- 開発手順: [`portfolio/README.md`](./portfolio/README.md)
- Astro サイト本体: [`portfolio/src`](./portfolio/src)

## Main Paths

- `portfolio/src/pages/index.astro`
  - トップページ
- `portfolio/src/pages/learn.astro`
  - 学習ガイドページ
- `portfolio/src/data/learningGuide.ts`
  - 学習ガイド用データ
- `portfolio/src/data/techStacks.ts`
  - 技術紹介データ
- `portfolio/src/data/memos.ts`
  - Notes セクションの更新データ
