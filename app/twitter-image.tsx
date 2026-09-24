import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Azan Ahmed Khan portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0f1f 0%, #111827 42%, #1f2937 100%)",
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
            "radial-gradient(circle at 85% 15%, rgba(124,58,237,0.3), transparent 25%), radial-gradient(circle at 15% 80%, rgba(59,130,246,0.2), transparent 24%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "88%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 28,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 700 }}>
          <div style={{ fontSize: 28, letterSpacing: 1.8, color: "#cbd5e1", fontWeight: 600 }}>AZAN AHMED KHAN</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.03, letterSpacing: -2 }}>
            Full Stack
            <br />
            Developer
          </div>
          <div style={{ fontSize: 28, color: "#e2e8f0", lineHeight: 1.35 }}>Building robust web apps, APIs, and product experiences.</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            height: 220,
            borderRadius: 36,
            background: "linear-gradient(135deg, rgba(124,58,237,0.22), rgba(59,130,246,0.22))",
            border: "1px solid rgba(255,255,255,0.14)",
            fontSize: 86,
            fontWeight: 900,
            color: "#f8fafc",
          }}
        >
          AK
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
