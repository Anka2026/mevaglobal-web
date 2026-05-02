import type { MetadataRoute } from "next";
import { RESOURCE_ARTICLE_SLUGS } from "@/data/resourceArticleSlugs";
import { getAllVerificationServiceSlugs } from "@/lib/verification/verificationServicesData";

const baseUrl = "https://mevaglobalcertification.com";
const locales = ["en", "tr", "nl"] as const;

const paths = [
  "",
  "/about",
  "/verification-services",
  "/cbam-solutions",
  "/verification-process",
  "/statement-search",
  "/documents",
  "/insights",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseEntries = locales.flatMap((l) =>
    paths.map((p) => ({
      url: `${baseUrl}/${l}${p}`,
      lastModified: now,
      changeFrequency: p === "" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "" ? 1 : 0.7,
    })),
  );

  const serviceEntries = locales.flatMap((l) =>
    getAllVerificationServiceSlugs().map((slug) => ({
      url: `${baseUrl}/${l}/verification-services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  const resourceArticleEntries = locales.flatMap((l) =>
    RESOURCE_ARTICLE_SLUGS.map((slug) => ({
      url: `${baseUrl}/${l}/documents/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  return [...baseEntries, ...serviceEntries, ...resourceArticleEntries];
}

