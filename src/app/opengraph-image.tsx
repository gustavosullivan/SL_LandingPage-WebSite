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
          background: "linear-gradient(145deg, #0d241e 0%, #1a3d32 55%, #2a4f42 100%)",
          color: "#f6f8f6",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c4b48a",
            marginBottom: 18,
          }}
        >
          Passo Fundo · RS
        </div>
        <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1 }}>São Luiz</div>
        <div style={{ fontSize: 32, marginTop: 20, color: "rgba(246,248,246,0.85)" }}>
          Funerária · Atendimento 24 horas
        </div>
      </div>
    ),
    { ...size },
  );
}
