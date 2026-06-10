import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-start justify-center px-6 py-20">
      <p className="text-sm font-medium text-muted">404</p>
      <h1 className="mt-2 text-4xl font-medium tracking-tight text-ink">
        ページが見つかりません
      </h1>
      <p className="mt-4 text-body">
        URL が変わったか、削除された可能性があります。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-xl bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-active"
      >
        ホームへ戻る
      </Link>
    </main>
  );
}
