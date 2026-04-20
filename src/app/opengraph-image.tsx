import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#f4f8fc",
          color: "#1d252f",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.28em",
              fontWeight: 700,
              color: "#005691",
              textTransform: "uppercase",
            }}
          >
            Independent Verification • Validation • Assurance
          </div>
          <div style={{ fontSize: 48, lineHeight: 1.1, fontWeight: 700 }}>
            Meva Global Certification B.V.
          </div>
          <div style={{ fontSize: 22, lineHeight: 1.35, color: "#6f8799", maxWidth: 960 }}>
            Structured technical review for credible carbon, environmental and CBAM-related reporting contexts.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(215,227,236,1)",
            paddingTop: 24,
            fontSize: 16,
            color: "#6f8799",
          }}
        >
          <div>mevaglobalcertification.com</div>
          <div style={{ fontWeight: 700, color: "#0293d5" }}>Evidence-led • Internationally aligned</div>
        </div>
      </div>
    ),
    size,
  );
}

