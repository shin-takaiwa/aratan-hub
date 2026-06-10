// 公開した週アプリのリンク集データ（静的・DBなし）。
// 古い順（#1…）で持ち、表示側で reverse して新しい #N を先頭に積む。
// 週公開のたびに末尾へ1要素を追記する（自動収集はしない）。

export type Accent = "pink" | "teal" | "lavender" | "peach" | "ochre" | "mint";

export type App = {
  n: number; // 通し番号 #N（= N週目）
  week: string; // "2026-W24"
  name: string;
  pitch: string; // 一言（15〜30字）
  emoji: string; // カテゴリ絵文字
  status: "live" | "ended";
  url: string;
  accent: Accent; // 絵文字タイルの彩度カラー（DESIGN.md の brand 6色を循環）
};

export const apps: App[] = [
  {
    n: 1,
    week: "2026-W24",
    name: "Aratan Hub",
    pitch: "自分の1W1A資産がハブで一覧できる入口",
    emoji: "🧭",
    status: "live",
    url: "https://aratan.dev",
    accent: "teal",
  },
];
