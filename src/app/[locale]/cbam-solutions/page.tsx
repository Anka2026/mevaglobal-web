import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { VerificationServiceDetailHero } from "@/components/sections/VerificationServiceDetailHero";
import { ServiceDetailPremiumBulletCard } from "@/components/sections/ServiceDetailPremiumBulletCard";
import { PremiumVerificationServiceCtaPanel } from "@/components/sections/PremiumVerificationServiceCtaPanel";
import type { ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";

const CBAM_SOLUTIONS_HERO_VISUAL: ServiceHeroVisual = {
  iconKey: "badgeCheck",
  src: "/page-visuals/cbam-solutions-hero.png",
  editorialFit: "contain",
  imageClassName: "object-contain object-[70%_48%] sm:object-[68%_46%] lg:object-[66%_45%]",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/cbam-solutions",
    tr: "/tr/cbam-solutions",
    nl: "/nl/cbam-solutions",
  } as const;

  return {
    title: dict.meta.pages.cbam.title,
    description: dict.meta.pages.cbam.description,
    alternates: { canonical: `/${locale}/cbam-solutions`, languages },
    openGraph: {
      title: dict.meta.pages.cbam.title,
      description: dict.meta.pages.cbam.description,
      url: `/${locale}/cbam-solutions`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function CbamSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const p = dict.pages.cbam;
  const top = p.sections.slice(0, 3);
  const bottom = p.sections.slice(3, 5);

  return (
    <>
      <VerificationServiceDetailHero
        locale={l}
        backLabel={dict.serviceDetail.backToServices}
        eyebrow={p.heroEyebrow}
        title={p.title}
        intro={p.intro}
        visual={CBAM_SOLUTIONS_HERO_VISUAL}
        omitBackLink
        imageAlt={p.heroImageAlt}
      />

      <Container className="py-8 sm:py-9 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-6 lg:[&>*]:min-h-0">
            {top.map((s) => (
              <ServiceDetailPremiumBulletCard key={s.title} className="lg:col-span-4" title={s.title} items={s.bullets} />
            ))}
            {bottom.map((s) => (
              <ServiceDetailPremiumBulletCard key={s.title} className="lg:col-span-6" title={s.title} items={s.bullets} />
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <PremiumVerificationServiceCtaPanel
              locale={l}
              ctas={dict.ctas}
              compact
              cta={{
                title: p.cta.title,
                body: p.cta.body,
                primaryButton: p.cta.primaryLabel,
                secondaryButton: p.cta.secondaryLabel,
                detailLink: p.cta.tertiaryLabel,
              }}
              hrefOverrides={{
                primary: `/${l}/contact`,
                secondary: `/${l}/verification-services`,
                tertiary: `/${l}/verification-services/cbam-verification-support`,
              }}
              taglineTopBar={dict.brand.taglineTopBar}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
