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
          background: "linear-gradient(145deg, #071f38 0%, #0c3a66 55%, #2f6f9f 100%)",
          color: "#f7fafc",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d4bc7a",
            marginBottom: 18,
          }}
        >
          Passo Fundo · RS · Aberto 24h
        </div>
        <div style={{ fontSize: 92, fontWeight: 600, lineHeight: 1 }}>São Luiz</div>
        <div style={{ fontSize: 30, marginTop: 20, color: "rgba(247,250,252,0.88)" }}>
          Planos · Cremação · Cremação Pet
        </div>
      </div>
    ),
    { ...size },
  );
}
