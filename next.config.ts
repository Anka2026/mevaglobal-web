import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

/** Pin the app root when another lockfile exists higher in the directory tree (avoids wrong tracing / chunk resolution). */
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,

  /** Add permanent redirects here when a verification service slug is renamed (avoid stale bookmarks). */
  async redirects() {
    const locales = ["en", "tr", "nl"] as const;
    /** Corporate PDFs: stable public names under `public/docs/` (P-VV-*, not PV-006 typos). */
    const corporatePdfTypos: { source: string; destination: string }[] = [
      { source: "/docs/P-VV-006-compliant-appeal.pdf", destination: "/docs/P-VV-006-complaint-appeal.pdf" },
      { source: "/docs/PV-006-complaint-appeal.pdf", destination: "/docs/P-VV-006-complaint-appeal.pdf" },
      { source: "/docs/PV-006-compliant-appeal.pdf", destination: "/docs/P-VV-006-complaint-appeal.pdf" },
      { source: "/docs/P-VV.006-complaint-appeal.pdf", destination: "/docs/P-VV-006-complaint-appeal.pdf" },
      { source: "/docs/P.VV.006-complaint-appeal.pdf", destination: "/docs/P-VV-006-complaint-appeal.pdf" },
      /** Legacy double-extension filenames (if previously deployed). */
      { source: "/docs/F-VV-026-general-terms.pdf.pdf", destination: "/docs/F-VV-026-general-terms.pdf" },
      { source: "/docs/P-VV-006-complaint-appeal.pdf.pdf", destination: "/docs/P-VV-006-complaint-appeal.pdf" },
      { source: "/docs/P-VV-010-impartiality.pdf.pdf", destination: "/docs/P-VV-010-impartiality.pdf" },
      { source: "/docs/P-VV-011-confidentiality.pdf.pdf", destination: "/docs/P-VV-011-confidentiality.pdf" },
      { source: "/docs/T-VV-003-logo-statement-usage.pdf.pdf", destination: "/docs/T-VV-003-logo-statement-usage.pdf" },
    ];
    return [
      ...corporatePdfTypos.map((r) => ({ ...r, permanent: true as const })),
      ...locales.flatMap((locale) => [
      {
        source: `/${locale}/services`,
        destination: `/${locale}/verification-services`,
        permanent: true,
      },
      {
        source: `/${locale}/services/:slug`,
        destination: `/${locale}/verification-services/:slug`,
        permanent: true,
      },
      {
        source: `/${locale}/resources`,
        destination: `/${locale}/documents`,
        permanent: true,
      },
    ]),
    ];
  },

  async rewrites() {
    return [{ source: "/tr/gri-egitimleri", destination: "/tr/gri-training" }];
  },

  /**
   * Dev-only: webpack keeps more compiled route entries alive longer. A tiny buffer + short TTL
   * evicts chunks aggressively; the browser then requests hashed files the dev server no longer has
   * → `Cannot find module './NNN.js'` and cascading failed CSS/JS loads (unstyled or broken pages).
   * Production builds are unaffected (`NODE_ENV !== "development"`).
   */
  ...(process.env.NODE_ENV === "development"
    ? {
        onDemandEntries: {
          maxInactiveAge: 10 * 60 * 1000,
          pagesBufferLength: 60,
        },
      }
    : {}),

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;