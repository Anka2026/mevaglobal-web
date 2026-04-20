import type { Locale } from "@/i18n/locales";

export type InsightPost = {
  slug: string;
  date: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  tag: Record<Locale, string>;
};

export const insights: InsightPost[] = [
  {
    slug: "cbam-readiness-essentials",
    date: "2026-04-19",
    tag: { en: "CBAM", tr: "SKDM", nl: "CBAM" },
    title: {
      en: "CBAM readiness: what “credible emissions data” really means",
      tr: "SKDM hazırlığı: “güvenilir emisyon verisi” gerçekte ne demek",
      nl: "CBAM readiness: wat “credible emissions data” écht betekent",
    },
    excerpt: {
      en: "A short checklist for boundaries, evidence and data quality before CBAM disclosures.",
      tr: "SKDM açıklamaları öncesi sınırlar, kanıt ve veri kalitesi için kısa kontrol listesi.",
      nl: "Een korte checklist voor boundaries, bewijs en datakwaliteit vóór CBAM disclosures.",
    },
  },
  {
    slug: "carbon-verification-for-stakeholders",
    date: "2026-04-19",
    tag: { en: "Carbon", tr: "Karbon", nl: "Carbon" },
    title: {
      en: "Carbon verification: aligning scope, methodology and stakeholder expectations",
      tr: "Karbon doğrulama: kapsam, metodoloji ve paydaş beklentilerinin hizalanması",
      nl: "Carbonverificatie: scope, methodiek en stakeholderverwachtingen afstemmen",
    },
    excerpt: {
      en: "How to keep reporting defensible with traceable assumptions and controls.",
      tr: "İzlenebilir varsayımlar ve kontrollerle raporlamayı savunulabilir tutmak.",
      nl: "Hoe je reporting verdedigbaar houdt met traceerbare aannames en controls.",
    },
  },
  {
    slug: "epd-and-lca-critical-review",
    date: "2026-04-19",
    tag: { en: "EPD / LCA", tr: "EPD / LCA", nl: "EPD / LCA" },
    title: {
      en: "EPD and LCA critical review: common pitfalls to avoid",
      tr: "EPD ve LCA kritik inceleme: kaçınılması gereken yaygın hatalar",
      nl: "EPD en LCA critical review: veelvoorkomende valkuilen",
    },
    excerpt: {
      en: "Practical notes on PCR alignment, data quality, allocation and transparency.",
      tr: "PCR uyumu, veri kalitesi, tahsis ve şeffaflık üzerine pratik notlar.",
      nl: "Praktische notities over PCR-afstemming, datakwaliteit, allocatie en transparantie.",
    },
  },
  {
    slug: "assurance-for-sustainability-claims",
    date: "2026-04-19",
    tag: { en: "Assurance", tr: "Güvence", nl: "Assurance" },
    title: {
      en: "Assurance for sustainability claims: when limited assurance is not enough",
      tr: "Sürdürülebilirlik iddiaları için güvence: sınırlı güvence ne zaman yetmez",
      nl: "Assurance voor duurzaamheidsclaims: wanneer limited assurance niet volstaat",
    },
    excerpt: {
      en: "A pragmatic view of assurance levels, decision risk and public disclosure.",
      tr: "Güvence seviyeleri, karar riski ve kamu açıklaması üzerine pragmatik bir bakış.",
      nl: "Een pragmatische blik op assurance levels, decisierisico en publieke disclosure.",
    },
  },
];

