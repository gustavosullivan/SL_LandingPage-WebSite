import { ImageResponse } from "next/og";

export const alt = "Funerária São Luiz — Passo Fundo/RS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: "linear-gradient(145deg, #002547 0%, #003764 55%, #c98141 140%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f0d2b0",
            marginBottom: 18,
          }}
        >
          Passo Fundo · RS · Desde 1999
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1 }}>São Luiz</div>
        <div style={{ fontSize: 36, marginTop: 18, color: "rgba(255,255,255,0.92)" }}>
          Homenageando Vidas
        </div>
      </div>
    ),
    { ...size },
  );
}
