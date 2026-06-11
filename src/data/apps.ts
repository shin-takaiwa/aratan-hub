// 公開した週アプリのリンク集データ（静的・DBなし）。
// 古い順（#1…）で持ち、表示側で reverse して新しい #N を先頭に積む。
// 週公開のたびに末尾へ1要素を追記する（自動収集はしない）。

export type Accent = "pink" | "teal" | "lavender" | "peach" | "ochre" | "mint";

// 全カード共通のフィールド。
// 見た目は icon（実アイコン画像・public配下のパス）があればそれを優先。
// なければ emoji + accent の彩度タイルにフォールバックする。
type Base = {
  name: string;
  pitch: string; // 一言（15〜30字）
  emoji: string; // カテゴリ絵文字（icon 未指定時のタイル中身）
  status: "live" | "ended";
  url: string;
  accent: Accent; // 絵文字タイルの彩度カラー（DESIGN.md の brand 6色を循環）
  icon?: string; // 実アイコン画像（例: "/popipopit.svg"）。あれば emoji/accent より優先
};

// 1W1A の週アプリ。連番 #N と週IDを持つ＝「毎週1枚ずつ増える」系列。
export type App = Base & {
  n: number; // 通し番号 #N（= N週目）
  week: string; // "2026-W24"
};

// 1W1A 以前に作った個人開発。連番・週IDを持たない（系列を薄めないため別枠）。
export type Work = Base;

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

// 1W1A をはじめる前に作ったもの。静的・更新は手動。連番は振らない。
export const works: Work[] = [
  {
    name: "ポピット",
    pitch: "アイデアからSNS各社向けの投稿文をAIが下書き",
    emoji: "✍️",
    status: "live",
    url: "https://popipopit.app/",
    accent: "pink",
    icon: "/popipopit.svg",
  },
  {
    name: "こどもミニゲーム",
    pitch: "1〜8歳向けの知育ミニゲーム集。数字・クイズなど6種",
    emoji: "🎮",
    status: "live",
    url: "https://kids-mini-game.web.app/",
    accent: "peach",
    icon: "/kids-mini-game.png",
  },
];
