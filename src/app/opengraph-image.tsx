import { ImageResponse } from "next/og";

// 静的ルートなのでビルド時に1枚生成される（動的OGPではない）。
// satori の既定フォントは Latin のみのため、画像内テキストは英語で固定。
export const alt = "Aratan — 毎週1アプリ、作って公開する";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  canvas: "#fffaf0",
  ink: "#0a0a0a",
  body: "#3a3a3a",
  muted: "#6a6a6a",
  teal: "#1a3a3a",
  white: "#ffffff",
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: colors.canvas,
          color: colors.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: colors.teal,
              color: colors.white,
              fontSize: 40,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 30, color: colors.muted }}>aratan.dev</div>
        </div>
        <div style={{ marginTop: 56, fontSize: 120, letterSpacing: "-5px" }}>
          Aratan
        </div>
        <div style={{ marginTop: 12, fontSize: 44, color: colors.body }}>
          One app shipped every week.
        </div>
      </div>
    ),
    { ...size },
  );
}
