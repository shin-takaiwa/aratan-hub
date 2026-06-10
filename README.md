# template — 週アプリの雛形

毎週コピーして使う実装の起点。中身は生成済み: **Next.js 16 + TypeScript + Tailwind v4 + App Router（src/ 構成・import alias `@/*`）**。Supabase クライアントは**オプトイン**（使う週だけ配線）、Vercel Analytics は**配線済み**。

> `node_modules` は雛形に含めない。コピー後に `npm install` で復元する。

## 使い方

```bash
# 1. 週フォルダの app/ としてコピー
cp -r template "weeks/2026-W24-quicknote/app"
cd "weeks/2026-W24-quicknote/app"

# 2. 独立リポにする（以降このリポは基盤[1A1W]から切り離す）
git init

# 3. 依存を復元して起動
npm install
npm run dev
```

## 同梱しているもの

- `src/app/layout.tsx` … `<Analytics />` 配線済み・`lang="ja"`・metadata は週ごとに上書き
- `src/lib/supabase/client.ts` … ブラウザ用（`createBrowserClient`）
- `src/lib/supabase/server.ts` … サーバー用（`createServerClient` + async `cookies()`）
- `.env.example` … Supabase / 解析の env サンプル
- `PRELAUNCH.md` … [公開前チェック](../docs/checklist-launch.md)のコピー（公開前に消化）
- `CLAUDE.md` / `AGENTS.md` … Next 16 同梱のエージェント向けガイド（破壊的変更の注意書き）

## Supabase を使う週だけ

1. `.env.local` に `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` を設定
2. 共有プロジェクト規約（[../docs/supabase-shared.md](../docs/supabase-shared.md)）に従いスキーマを切る（RLS 必須）
3. `import { createClient } from "@/lib/supabase/client"`（or `/server"`）で使う

DB不要の週は `src/lib/supabase/` を触らなくてよい。
