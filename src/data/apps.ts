// 公開した週アプリのリンク集データ（静的・DBなし）。
// 古い順（#1…）で持ち、表示側で reverse して新しい #N を先頭に積む。
// 週公開のたびに末尾へ1要素を追記する（自動収集はしない）。

export type Accent = "pink" | "teal" | "lavender" | "peach" | "ochre" | "mint";

// 全カード共通のフィールド。
// 見た目は icon（実アイコン画像・public配下のパス）があればそれを優先。
// なければ emoji + accent の彩度タイルにフォールバックする。
// ルール: 登録時は必ず icon を設定する（アプリの favicon を public/ にコピー）。
// emoji タイルは暫定表示であり、公開状態のまま放置しない。
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
  n: number; // 通し番号 #N（同週に複数本あり得るため「N週目」とは限らない）
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
    icon: "/aratan-hub.svg",
  },
  {
    n: 2,
    week: "2026-W24",
    name: "コードロースト",
    pitch: "コードを辛口AIが採点、カードでXに晒せる",
    emoji: "🔥",
    status: "live",
    url: "https://code-roast.aratan.dev",
    accent: "pink",
    icon: "/code-roast.svg",
  },
  {
    n: 3,
    week: "2026-W25",
    name: "ogtto",
    pitch: "タイトルを入れると記事に貼れるOGP画像URLを発行",
    emoji: "🖼️",
    status: "live",
    url: "https://ogtto.aratan.dev",
    accent: "lavender",
    icon: "/2026-W25-ogp.svg",
  },
  {
    n: 4,
    week: "2026-W26",
    name: "コンプいくら？",
    pitch: "全何種・1回いくらでコンプ完走の期待回数と総額を出す",
    emoji: "🎰",
    status: "live",
    url: "https://gacha-cost.aratan.dev",
    accent: "peach",
    icon: "/gacha-cost.svg",
  },
  {
    n: 5,
    week: "2026-W27",
    name: "WhyTree",
    pitch: "「なぜ？」を繰り返すだけで根本原因が1枚のツリーに",
    emoji: "🌳",
    status: "live",
    url: "https://why-tree.aratan.dev",
    accent: "mint",
    icon: "/why-tree.svg",
  },
  {
    n: 6,
    week: "2026-W28",
    name: "あなたの模様",
    pitch: "名前や記念日から、世界にひとつの模様が生まれる",
    emoji: "🌀",
    status: "live",
    url: "https://seed-art.aratan.dev",
    accent: "ochre",
    icon: "/seed-art.svg",
  },
  {
    n: 7,
    week: "2026-W29",
    name: "で賞メーカー",
    pitch: "名前とネタ賞を入れると、ふざけた表彰状を作って贈れる",
    emoji: "🏆",
    status: "live",
    url: "https://desho-maker.aratan.dev",
    accent: "peach",
    icon: "/desho-maker.svg",
  },
];

// 1W1A の連番に含めない個人開発（以前に作ったもの・並行して運用中のもの）。
// 静的・更新は手動。表示は配列順のまま＝新しいものは先頭に追加する。
export const works: Work[] = [
  {
    name: "補助金みっけ",
    pitch: "事業に使える補助金・助成金が検索と締切アラートで見つかる",
    emoji: "🔎",
    status: "live",
    url: "https://hojokin-mikke.com",
    accent: "mint",
    icon: "/hojokin-mikke.svg",
  },
  {
    name: "ポピット",
    pitch: "アイデアからSNS各社向けの投稿文をAIが下書き",
    emoji: "✍️",
    status: "ended",
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
