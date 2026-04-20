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
    return locales.flatMap((locale) => [
      {
        source: `/${locale}/services`,
        destination: `/${locale}/verification-services`,
        permanent: true,
      },
      {
        source: `/${locale}/resources`,
        destination: `/${locale}/documents`,
        permanent: true,
      },
    ]);
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