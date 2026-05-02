import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import {
  SERVICE_CARD_ICON_WELL_CLASSNAME,
  ServiceCard,
} from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { VisualAnchor } from "@/components/visual/VisualAnchor";
import { VerificationServiceIcon } from "@/components/verification/VerificationServiceIcon";
import {
  VerificationServicesHowSection,
  VerificationServicesWhySection,
} from "@/components/verification/VerificationServicesSupportSections";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/locales";
import {
  getVerificationGroupIconKey,
  VERIFICATION_LISTING_GROUP_ANCHOR_IDS,
  type VerificationListingSectionModel,
  type VerificationServicesListingGroupKey,
} from "@/lib/verification/verificationServicesData";
import { VerificationListingRecoverablePanel } from "@/components/verification/VerificationListingRecoverablePanel";
import { resolveHeroWithSharedFallbacks } from "@/lib/resolvePublicImage";
import { cn } from "@/lib/cn";

const groupIconFrame = cn(SERVICE_CARD_ICON_WELL_CLASSNAME, "sm:mt-0.5");

const SERVICE_GROUP_NAV_ORDER: readonly VerificationServicesListingGroupKey[] = [
  "climateAndCarbonAssurance",
  "productAndEnvironmentalClaims",
  "builtEnvironmentAndMaterialHealth",
  "responsibleSupplyChainsAndSectorSchemes",
  "esgAndReportingAssurance",
] as const;

const SERVICE_GROUP_NAV_LABEL_KEY: Record<
  VerificationServicesListingGroupKey,
  keyof Pick<
    Dictionary["pages"]["services"]["serviceGroupNav"],
    "climateCarbon" | "productDeclarations" | "indoorMaterials" | "supplyChain" | "esgReporting"
  >
> = {
  climateAndCarbonAssurance: "climateCarbon",
  productAndEnvironmentalClaims: "productDeclarations",
  builtEnvironmentAndMaterialHealth: "indoorMaterials",
  responsibleSupplyChainsAndSectorSchemes: "supplyChain",
  esgAndReportingAssurance: "esgReporting",
};

/**
 * Deterministic server-rendered shell for `/verification-services` — same layout chain as other premium pages
 * (`[locale]` Header/Footer + PageHeader + Container). All listing UI lives here; the route `page.tsx` only wires data.
 */
export function VerificationServicesListingView({
  locale,
  servicesCopy,
  listingSections,
  contactCta,
}: {
  locale: Locale;
  servicesCopy: Dictionary["pages"]["services"];
  listingSections: VerificationListingSectionModel[];
  contactCta: string;
}) {
  const s = servicesCopy;
  const servicesListingHeroCandidates = [
    "/page-visuals/services-hero-approved.png",
    "/page-visuals/services-hero.png",
    "/page-visuals/verification-services-hero.png",
    "/page-visuals/verification-services.png",
  ] as const;
  const servicesListingHero = resolveHeroWithSharedFallbacks(servicesListingHeroCandidates) ?? "/file.svg";

  return (
    <>
      <PageHeader
        compactVertical
        wideIntro
        eyebrow={s.heroEyebrow}
        title={s.title}
        description={[s.intro, s.introSupport]}
        descriptionVariant="lead-support"
        visual={
          <VisualAnchor
            src={servicesListingHero}
            alt={s.heroImageAlt}
            photoPresentation
          />
        }
      />
      <Container className="py-10 sm:py-11">
        <nav aria-label={s.serviceGroupNav.ariaLabel} className="mb-8 scroll-mt-[4.5rem]">
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {SERVICE_GROUP_NAV_ORDER.map((groupKey) => {
              const labelKey = SERVICE_GROUP_NAV_LABEL_KEY[groupKey];
              const label = s.serviceGroupNav[labelKey];
              const id = VERIFICATION_LISTING_GROUP_ANCHOR_IDS[groupKey];
              return (
                <li key={groupKey}>
                  <a
                    href={`#${id}`}
                    className={cn(
                      "inline-flex items-center rounded-full border border-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))]",
                      "bg-white px-3.5 py-1.5 text-sm font-semibold text-[color:var(--brand-primary)] shadow-[var(--shadow-card)]",
                      "transition-[border-color,background-color] hover:border-[color:color-mix(in_oklab,var(--brand-primary)_26%,var(--border-soft))]",
                      "hover:bg-[color:var(--brand-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
                    )}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <VerificationServicesWhySection servicesCopy={s} />

        {listingSections.length === 0 ? (
          <VerificationListingRecoverablePanel
            locale={locale}
            title={s.listingRecoverableError.title}
            body={s.listingRecoverableError.body}
            contactCta={contactCta}
          />
        ) : (
          <div className="mt-10 grid gap-10 lg:gap-12">
            {listingSections.map((section) => {
              const group = s.groups[section.groupKey];
              if (!group?.title || group.intro == null) {
                console.error(
                  `[verification-services] Missing or invalid copy for services.groups.${section.groupKey} (locale ${locale}).`,
                );
                return null;
              }
              return (
                <section
                  key={section.groupKey}
                  id={VERIFICATION_LISTING_GROUP_ANCHOR_IDS[section.groupKey]}
                  className="scroll-mt-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <SectionHeading
                        title={group.title}
                        description={group.intro}
                        className="max-w-[48rem]"
                        titleClassName="sm:text-[1.65rem] sm:leading-snug"
                      />
                    </div>
                    <div className={groupIconFrame} aria-hidden="true">
                      <VerificationServiceIcon name={getVerificationGroupIconKey(section.groupKey)} />
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                    {section.cards.map((card) => {
                      return (
                        <ServiceCard
                          key={card.slug}
                          title={card.title}
                          description={card.description}
                          icon={<VerificationServiceIcon name={card.iconKey} />}
                          href={`/${locale}/verification-services/${card.slug}`}
                          linkLabel={s.cardCta}
                          listingTone
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <VerificationServicesHowSection servicesCopy={s} />
      </Container>
    </>
  );
}
