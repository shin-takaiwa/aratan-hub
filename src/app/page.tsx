import { apps, type Accent } from "@/data/apps";

// 絵文字タイルの彩度カラー。teal/pink は白文字、淡色は ink（DESIGN.md の対比則）
const accentTile: Record<Accent, string> = {
  pink: "bg-brand-pink text-white",
  teal: "bg-brand-teal text-white",
  lavender: "bg-brand-lavender text-ink",
  peach: "bg-brand-peach text-ink",
  ochre: "bg-brand-ochre text-ink",
  mint: "bg-brand-mint text-ink",
};

const socials = [
  { label: "GitHub", href: "https://github.com/shin-takaiwa" },
  { label: "X", href: "https://x.com/Aratan45" },
  { label: "Note", href: "https://note.com/aratan45" },
];

export default function Home() {
  const list = [...apps].reverse(); // 新しい #N を先頭に積む
  const shipped = apps.length;
  const year = new Date().getFullYear();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20 sm:py-28">
      {/* ヒーロー */}
      <header className="mb-16">
        <h1 className="text-6xl font-medium tracking-tighter text-ink sm:text-7xl">
          Aratan
        </h1>
        <p className="mt-4 text-lg text-body">毎週1アプリ、作って公開する。</p>
        <p className="mt-1 text-sm text-muted">
          このリストは毎週土曜、1枚ずつ増えていく。
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center rounded-full bg-surface-card px-3 py-1 font-medium text-ink">
            {shipped} shipped
          </span>
          <span className="text-muted-soft">·</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="me noopener noreferrer"
              className="font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </header>

      {/* カード一覧（Marc Lou 型・収益列なし） */}
      <section className="flex flex-col gap-4">
        {list.map((app) => (
          <a
            key={app.n}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-hairline bg-surface-card p-5 transition-colors hover:border-ink/20"
          >
            <div
              aria-hidden
              className={`flex size-14 shrink-0 items-center justify-center rounded-xl text-2xl ${accentTile[app.accent]}`}
            >
              {app.emoji}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-xs font-medium text-muted">
                <span className="text-ink">#{app.n}</span>
                <span className="rounded-full bg-surface-strong px-2 py-0.5">
                  {app.week}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className={`size-2 rounded-full ${
                      app.status === "live" ? "bg-success" : "bg-muted-soft"
                    }`}
                  />
                  {app.status === "live" ? "稼働" : "終了"}
                </span>
              </div>
              <h2 className="mt-1 truncate text-lg font-semibold text-ink">
                {app.name}
              </h2>
              <p className="line-clamp-2 text-sm text-body">{app.pitch}</p>
            </div>

            <span
              aria-hidden
              className="shrink-0 text-xl text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink"
            >
              →
            </span>
          </a>
        ))}
      </section>

      {/* フッター（DESIGN.md: ダークにしない・クリーム throughout） */}
      <footer className="mt-20 border-t border-hairline pt-8 text-sm text-muted">
        <p>© {year} Aratan</p>
        <p className="mt-1 text-xs text-muted-soft">
          アクセス解析に Vercel Analytics を使用しています。
        </p>
      </footer>
    </main>
  );
}
