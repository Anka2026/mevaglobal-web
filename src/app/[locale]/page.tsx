import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Leaf, Factory, BadgeCheck, ClipboardList, Shield } from "lucide-react";
import { BRAND_POSITIONING_LINE } from "@/i18n/brandPositioning";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeTrustStatsBand } from "@/components/sections/HomeTrustStatsBand";
import { HomePublicStatementCta } from "@/components/sections/HomePublicStatementCta";
import { TrustHighlightsSection } from "@/components/sections/TrustHighlightsSection";
import { WhyMevaGlobalSection } from "@/components/sections/WhyMevaGlobalSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { HomeProcessFlow } from "@/components/sections/HomeProcessFlow";
import { HOME_TRUST_BAND_METRICS } from "@/data/homeTrustBandMetrics";

const serviceIcons = [Leaf, Factory, BadgeCheck, ClipboardList, Shield] as const;

const HOME_HERO_COPY: Record<
  Locale,
  { title: string; subtitle: string; primaryCta: string; secondaryCta: string }
> = {
  tr: {
    title: "Güvenilir Beyanlar İçin Bağımsız Teknik İnceleme",
    subtitle:
      "Meva Global; sera gazı verileri, ürün beyanları, CBAM raporlaması ve sürdürülebilirlik raporlamasında izlenebilir kanıt, net kapsam ve teknik dosya tutarlılığı ekseninde bağımsız teknik inceleme ile doğrulama ve validasyon hazırlığı sunar.",
    primaryCta: "Teklif Talep Et",
    secondaryCta: "Hizmetleri İncele",
  },
  en: {
    title: "Independent Technical Review For Defensible Reporting",
    subtitle:
      "Meva Global provides independent technical review and verification-readiness support for greenhouse gas data, product declarations, CBAM reporting and sustainability disclosures—with traceable evidence, disciplined scope and defensible outputs.",
    primaryCta: "Request a Proposal",
    secondaryCta: "Explore Services",
  },
  nl: {
    title: "Onafhankelijke Technische Beoordeling Voor Verdedigbare Rapportage",
    subtitle:
      "Meva Global ondersteunt broeikasgasgegevens, productverklaringen, CBAM-rapportage en duurzaamheidsinformatie met onafhankelijke technische beoordeling en voorbereiding op verificatie — gericht op traceerbaar bewijs, duidelijke scope en verdedigbare uitkomsten.",
    primaryCta: "Offerte aanvragen",
    secondaryCta: "Bekijk diensten",
  },
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
    en: "/en",
    tr: "/tr",
    nl: "/nl",
  } as const;

  return {
    title: dict.meta.pages.home.title,
    description: dict.meta.pages.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.pages.home.title,
      description: dict.meta.pages.home.description,
      url: `/${locale}`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const heroOverride = HOME_HERO_COPY[l];
  const trustBandMetrics = HOME_TRUST_BAND_METRICS[l];

  // Keep dictionaries untouched and apply page-local homepage copy overrides.
  const effectiveDict =
    l === "nl"
      ? {
          ...dict,
          home: {
            ...dict.home,
            hero: {
              ...dict.home.hero,
              eyebrow: BRAND_POSITIONING_LINE.nl,
              title: heroOverride.title,
              subtitle: heroOverride.subtitle,
              primaryCta: heroOverride.primaryCta,
              secondaryCta: heroOverride.secondaryCta,
            },
            serviceAreas: dict.home.serviceAreas.map((s, idx) => {
              if (idx === 0) {
                return {
                  ...s,
                  description:
                    "Verificatie verankerd in methodologie en bewijs—voor organisatie- en projectgebonden broeikasgasverklaringen, productkoolstofdata, ingebedde emissies en net-zero-gereedheid.",
                };
              }
              if (idx === 2) {
                return {
                  ...s,
                  description:
                    "Verificatiegerichte technische beoordeling van binnenluchtkwaliteit en VOC-data, HPD’s, materiaalsamenstelling en green-building documentatie—met nadruk op emissieprofielen en extern bruikbaar bewijs.",
                };
              }
              if (idx === 3) {
                return {
                  ...s,
                  description:
                    "Traceerbaarheid, herkomstclaims en technische gereedheidsbeoordelingen in lijn met ASI, FSC, PEFC, EUDR en vergelijkbare sectorexpectaties.",
                };
              }
              return s;
            }),
            processSteps: dict.home.processSteps.map((s, i) => {
              if (i === 0) {
                return {
                  ...s,
                  description:
                    "Wij leggen de aanvraag, het beoogde gebruik en de context vast en beoordelen op hoofdlijnen de geschiktheid en planning.",
                };
              }
              if (i === 6) {
                return {
                  ...s,
                  description:
                    "Verklaringen, opinies, bevindingen of andere afgesproken uitkomsten worden volgens afgesproken reviewediscipline afgerond.",
                };
              }
              return s;
            }),
          },
        }
      : {
          ...dict,
          home: {
            ...dict.home,
            hero: {
              ...dict.home.hero,
              title: heroOverride.title,
              subtitle: heroOverride.subtitle,
              primaryCta: heroOverride.primaryCta,
              secondaryCta: heroOverride.secondaryCta,
            },
          },
        };

  return (
    <>
      <HeroSection locale={l} dict={effectiveDict} />
      <HomeTrustStatsBand items={trustBandMetrics} />
      <HomePublicStatementCta
        locale={l}
        copy={effectiveDict.home.publicStatementLookup}
        ctaLabel={effectiveDict.home.publicStatementLookup.cta}
      />
      <TrustHighlightsSection
        title={effectiveDict.home.trustHighlightsTitle}
        items={effectiveDict.home.trustHighlights}
      />

      <section className="py-11 sm:py-12">
        <Container>
          <div className="mx-auto w-full max-w-[76rem]">
            <SectionHeading
              title={effectiveDict.home.serviceAreasTitle}
              description={effectiveDict.home.serviceAreasIntro}
              className="max-w-[40rem]"
              titleClassName="text-[1.65rem] sm:text-[2rem]"
              descriptionClassName="mt-4 text-[0.9375rem] leading-relaxed text-[color:var(--text-muted)] sm:text-base sm:leading-relaxed"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {effectiveDict.home.serviceAreas.slice(0, 3).map((s, idx) => {
                const Icon = serviceIcons[idx] ?? Leaf;
                return (
                  <ServiceCard
                    key={s.title}
                    variant="featured"
                    title={s.title}
                    description={s.description}
                    icon={<Icon aria-hidden="true" />}
                    href={`/${l}/verification-services`}
                    linkLabel={effectiveDict.ctas.learnMore}
                  />
                );
              })}
            </div>
            <div className="mx-auto mt-6 grid max-w-[52rem] grid-cols-1 gap-5 sm:mt-7 sm:grid-cols-2 sm:gap-6 lg:max-w-[54rem]">
              {effectiveDict.home.serviceAreas.slice(3, 5).map((s, idx) => {
                const Icon = serviceIcons[idx + 3] ?? Leaf;
                return (
                  <ServiceCard
                    key={s.title}
                    variant="featured"
                    title={s.title}
                    description={s.description}
                    icon={<Icon aria-hidden="true" />}
                    href={`/${l}/verification-services`}
                    linkLabel={effectiveDict.ctas.learnMore}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <WhyMevaGlobalSection title={effectiveDict.home.whyTitle} items={effectiveDict.home.whyItems} />

      <section className="border-t border-[color:var(--border-soft)] bg-white py-11 pb-12 sm:py-12">
        <Container>
          <div className="mx-auto w-full max-w-[76rem]">
            <SectionHeading
              title={effectiveDict.home.processTitle}
              description={effectiveDict.home.processIntro}
              className="max-w-[40rem]"
              titleClassName="text-[1.65rem] sm:text-[2rem]"
              descriptionClassName="mt-4 text-[0.9375rem] leading-relaxed text-[color:var(--text-muted)] sm:text-base sm:leading-relaxed"
            />
            <HomeProcessFlow steps={effectiveDict.home.processSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-[#003A5C] py-7 sm:py-8">
        <Container>
          <div className="mx-auto grid w-full max-w-[76rem] gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
            <div className="flex flex-col lg:col-span-7">
              <SectionHeading
                eyebrow={effectiveDict.home.cbamEyebrow}
                eyebrowClassName="text-[11px] font-semibold tracking-[0.14em] text-white/72 sm:text-xs sm:tracking-[0.16em]"
                title={effectiveDict.home.cbamTitle}
                description={effectiveDict.home.cbamIntro}
                className="max-w-[36rem]"
                titleClassName="mt-3 text-[1.65rem] font-semibold leading-[1.18] text-white sm:mt-3.5 sm:text-[2rem] sm:leading-[1.14]"
                descriptionClassName="mt-4 text-[0.9375rem] font-medium leading-[1.68] text-white/78 sm:text-[1rem] sm:leading-[1.7]"
              />
              <div className="mt-4 rounded-[var(--visual-image-radius)] border border-white/14 bg-white/[0.07] p-4 backdrop-blur-[2px] sm:mt-5 sm:p-5">
                <ul className="space-y-3 text-[0.9375rem] font-semibold leading-snug text-white/90 sm:text-[0.96875rem] sm:leading-relaxed">
                  {effectiveDict.home.cbamBullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/85" aria-hidden />
                      <span className="min-w-0 flex-1">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:col-span-5">
              <div className="rounded-[var(--visual-image-radius)] border border-white/14 bg-white/[0.08] p-4 backdrop-blur-[2px] sm:p-5">
                <p className="text-base font-semibold leading-snug tracking-tight text-white">
                  {effectiveDict.home.cbamCardTitle}
                </p>
                <p className="mt-3 max-w-[34ch] text-sm font-medium leading-[1.68] text-white/80 sm:mt-4 sm:max-w-none sm:text-[0.9375rem] sm:leading-[1.72]">
                  {effectiveDict.home.cbamCardText}
                </p>
                <div className="mt-5 border-t border-white/12 pt-5">
                  <Link
                    className="inline-flex h-11 w-fit min-w-[11rem] items-center justify-center rounded-[var(--visual-image-radius)] bg-white px-5 text-sm font-semibold tracking-tight text-[#003A5C] shadow-md transition-[background-color,transform] hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003A5C] sm:min-w-[12rem] sm:px-6"
                    href={`/${l}/cbam-solutions`}
                  >
                    {effectiveDict.ctas.exploreCbam}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Offices are presented in the footer to avoid repetition. */}
    </>
  );
}

