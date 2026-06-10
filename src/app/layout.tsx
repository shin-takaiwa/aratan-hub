import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// DESIGN.md: Plain Black は非公開のため Inter weight 500 で代替（display は 500・negative tracking）
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Aratan — 毎週1アプリ、作って公開する";
const description =
  "1週間で1アプリを作って公開する個人開発「1W1A」の母艦。公開したアプリの一覧と入口。";

// metadataBase の aratan.dev は取得・割当後に有効。→ weeks/2026-W24-hub/spec.md
// OGP 画像は公開前チェックで設定（PRELAUNCH.md）。動的OGP は idea01 の専用週で作り後で取り込む。
export const metadata: Metadata = {
  metadataBase: new URL("https://aratan.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://aratan.dev",
    siteName: "Aratan",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
