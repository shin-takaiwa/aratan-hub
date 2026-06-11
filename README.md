# Aratan Hub

**https://aratan.dev**

「1週間で1アプリを作って公開する」個人開発 **1W1A** の母艦。公開したアプリのカード型リンク集です。リストは毎週土曜、1枚ずつ増えていきます。

## これは何

- 公開した週アプリの**入口とメタ情報**（通し番号 `#N`・週ID・一言ピッチ・状態）
- 週アプリは使い捨て前提・このハブだけが唯一「育てる」アプリ
- 静的サイト（**DBなし**）。データは TypeScript の配列で持ち、週公開のたびに手で1要素追記する

## スタック

Next.js 16 / TypeScript / Tailwind CSS v4 / Vercel（Analytics 含む）

## データの持ち方

すべて [`src/data/apps.ts`](src/data/apps.ts):

- `apps` … 1W1A の週アプリ。`n`（通し番号）と `week`（`2026-W24` 形式）を持ち、表示は新しい順
- `works` … 1W1A 以前に作った個人開発。連番なしの別枠
- `icon` を指定すると実アプリのアイコン画像、なければ絵文字＋ブランドカラーのタイルで表示

週の公開フロー: `apps` 末尾に1要素追記 → コミット → Vercel が自動デプロイ。

## 開発

```bash
npm install
npm run dev      # 開発サーバ
npm run build    # 本番ビルド
npm run lint
```

## 構成の要点

- `src/app/page.tsx` … 1ページ完結（ヒーロー＋カード2セクション）
- `src/app/opengraph-image.tsx` … OGP 画像（ビルド時に静的生成）
- `src/app/icon.svg` / `not-found.tsx` / `robots.ts` / `sitemap.ts` … 公開前メタ一式
- `DESIGN.md` … デザイントークン（クリーム基調＋彩度6色のカードパレット）
- `PRELAUNCH.md` … 公開前チェックリスト

## 作者

Aratan — [X](https://x.com/Aratan45) / [Note](https://note.com/aratan45) / [GitHub](https://github.com/shin-takaiwa)
