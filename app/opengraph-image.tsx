import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Azan Ahmed Khan portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #050816 0%, #0b1120 30%, #111827 100%)",
        color: "white",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(124,58,237,0.28), transparent 28%), radial-gradient(circle at bottom left, rgba(59,130,246,0.18), transparent 30%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "88%",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 999,
            padding: "10px 18px",
            fontSize: 18,
            letterSpacing: 1.8,
            color: "#cbd5e1",
            background: "rgba(15,23,42,0.7)",
            width: "fit-content",
          }}
        >
          AZAN AHMED KHAN
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Full Stack</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Developer</div>
        </div>

        <div style={{ fontSize: 30, color: "#cbd5e1", maxWidth: 760, lineHeight: 1.35 }}>
          Building scalable web products, SaaS platforms, and modern digital experiences with Next.js, React, TypeScript, and Node.js.
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 16,
            flexWrap: "wrap",
            fontSize: 20,
            color: "#e2e8f0",
          }}
        >
          <span style={{ padding: "8px 14px", borderRadius: 999, background: "rgba(124,58,237,0.2)", border: "1px solid rgba(167,139,250,0.4)" }}>
            Next.js
          </span>
          <span style={{ padding: "8px 14px", borderRadius: 999, background: "rgba(59,130,246,0.18)", border: "1px solid rgba(96,165,250,0.35)" }}>
            React
          </span>
          <span style={{ padding: "8px 14px", borderRadius: 999, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(52,211,153,0.35)" }}>
            TypeScript
          </span>
          <span style={{ padding: "8px 14px", borderRadius: 999, background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.35)" }}>
            Node.js
          </span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
