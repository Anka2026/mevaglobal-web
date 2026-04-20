/**
 * App icon route (`/icon`). Keep this file free of imports from `@/data/*`, verification registry,
 * or locale dictionaries so favicon/icon generation never shares webpack chunks with service pages.
 */
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#005691",
          color: "white",
          borderRadius: 16,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          fontWeight: 800,
          fontSize: 34,
          letterSpacing: "-0.04em",
        }}
      >
        M
      </div>
    ),
    size,
  );
}

