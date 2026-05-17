import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { PremiumHeroCoverImage } from "@/components/visual/PremiumHeroCoverImage";
import { premiumEditorialHeroSurface, premiumSectionStatement } from "@/lib/premiumUi";
import { cn } from "@/lib/cn";
import { StatementSearchClient } from "./StatementSearchClient";

const statementHeroTitleClass =
  "mt-3.5 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-dark)] sm:mt-4 sm:text-[2.125rem] lg:text-[2.375rem]";
const statementHeroDescriptionClass =
  "mt-4 max-w-[36rem] text-[0.9375rem] leading-[1.75] text-[color:var(--ink-dark)]/90 sm:mt-5 sm:text-[1.0625rem] sm:leading-[1.72]";

const STATEMENT_SEARCH_VISUAL_WRAP =
  "w-full max-w-full flex-col min-h-[260px] max-h-[min(58vh,24rem)] sm:min-h-[300px] sm:max-h-[min(56vh,25rem)] lg:min-h-[340px] lg:max-h-[420px]";

const STATEMENT_SEARCH_HERO_SRC = "/assets/page-visuals/statement-search-hero.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/statement-search",
    tr: "/tr/statement-search",
    nl: "/nl/statement-search",
  } as const;

  return {
    title: dict.meta.pages.statementSearch.title,
    description: dict.meta.pages.statementSearch.description,
    alternates: { canonical: `/${locale}/statement-search`, languages },
    openGraph: {
      title: dict.meta.pages.statementSearch.title,
      description: dict.meta.pages.statementSearch.description,
      url: `/${locale}/statement-search`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function StatementSearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      <PageHeader
        denseHero
        prominentVisual
        visualWrapperClassName={STATEMENT_SEARCH_VISUAL_WRAP}
        sectionSurfaceClassName={premiumEditorialHeroSurface}
        headingTitleClassName={statementHeroTitleClass}
        headingDescriptionClassName={statementHeroDescriptionClass}
        eyebrow={dict.pages.statementSearch.heroEyebrow}
        title={dict.pages.statementSearch.title}
        description={dict.pages.statementSearch.intro}
        visual={
          <PremiumHeroCoverImage
            src={STATEMENT_SEARCH_HERO_SRC}
            alt={dict.pages.statementSearch.heroImageAlt}
            priority
            imageClassName="object-[50%_16%]"
            className="h-full w-full flex-1 min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]"
          />
        }
      />
      <section className={cn("border-b border-[color:var(--border-soft)]", premiumSectionStatement)}>
        <Container className="py-8 sm:py-9 lg:py-10">
          <StatementSearchClient dict={dict} />
        </Container>
      </section>
    </>
  );
}
