/** URL segment for /[locale]/documents/[slug] — matches i18n `pages.documents.resourceArticles` keys. */
export const RESOURCE_ARTICLE_SLUGS = [
  "cbam-reliable-emissions-data",
  "carbon-verification-alignment",
  "epd-lca-critical-weaknesses",
  "sustainability-assurance-levels",
] as const;

export type ResourceArticleSlug = (typeof RESOURCE_ARTICLE_SLUGS)[number];
