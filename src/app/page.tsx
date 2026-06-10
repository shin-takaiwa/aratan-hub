import { apps, works, type Accent } from "@/data/apps";

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

function StatusDot({ status }: { status: "live" | "ended" }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden
        className={`size-2 rounded-full ${
          status === "live" ? "bg-success" : "bg-muted-soft"
        }`}
      />
      {status === "live" ? "稼働" : "終了"}
    </span>
  );
}

function Card({
  href,
  emoji,
  accent,
  name,
  pitch,
  meta,
}: {
  href: string;
  emoji: string;
  accent: Accent;
  name: string;
  pitch: string;
  meta: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-hairline bg-surface-card p-5 transition-colors hover:border-ink/20"
    >
      <div
        aria-hidden
        className={`flex size-14 shrink-0 items-center justify-center rounded-xl text-2xl ${accentTile[accent]}`}
      >
        {emoji}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-xs font-medium text-muted">
          {meta}
        </div>
        <h3 className="mt-1 truncate text-lg font-semibold text-ink">{name}</h3>
        <p className="line-clamp-2 text-sm text-body">{pitch}</p>
      </div>

      <span
        aria-hidden
        className="shrink-0 text-xl text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink"
      >
        →
      </span>
    </a>
  );
}

export default function Home() {
  const weekly = [...apps].reverse(); // 新しい #N を先頭に積む
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

      {/* 1W1A 週アプリ（Marc Lou 型・収益列なし） */}
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
          毎週の1アプリ
        </h2>
        <div className="flex flex-col gap-4">
          {weekly.map((app) => (
            <Card
              key={app.n}
              href={app.url}
              emoji={app.emoji}
              accent={app.accent}
              name={app.name}
              pitch={app.pitch}
              meta={
                <>
                  <span className="text-ink">#{app.n}</span>
                  <span className="rounded-full bg-surface-strong px-2 py-0.5">
                    {app.week}
                  </span>
                  <StatusDot status={app.status} />
                </>
              }
            />
          ))}
        </div>
      </section>

      {/* 1W1A 以前に作ったもの（連番なし・別枠） */}
      <section className="mt-12">
        <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">
          1W1A をはじめる前に
        </h2>
        <p className="mb-4 text-sm text-muted-soft">
          週次の連番には含めない、これまでの個人開発。
        </p>
        <div className="flex flex-col gap-4">
          {works.map((work) => (
            <Card
              key={work.url}
              href={work.url}
              emoji={work.emoji}
              accent={work.accent}
              name={work.name}
              pitch={work.pitch}
              meta={<StatusDot status={work.status} />}
            />
          ))}
        </div>
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
