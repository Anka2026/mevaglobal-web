import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { VisualAnchor } from "@/components/visual/VisualAnchor";
import { VerificationServiceIcon } from "@/components/verification/VerificationServiceIcon";
import { VerificationListingSectionHeader } from "@/components/verification/VerificationListingSectionHeader";
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
import { premiumNavPill, premiumSectionSlate } from "@/lib/premiumUi";

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
    "/assets/page-visuals/services-hero-approved.png",
    "/assets/page-visuals/services-hero.png",
    "/assets/page-visuals/verification-services-hero.png",
    "/assets/page-visuals/verification-services.png",
  ] as const;
  const servicesListingHero = resolveHeroWithSharedFallbacks(servicesListingHeroCandidates);

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
      <section className={cn(premiumSectionSlate, "border-b border-[color:var(--border-soft)]")}>
        <Container className="py-10 sm:py-12">
          <nav aria-label={s.serviceGroupNav.ariaLabel} className="mb-9 scroll-mt-[4.5rem]">
            <ul className="flex list-none flex-wrap gap-2 p-0">
              {SERVICE_GROUP_NAV_ORDER.map((groupKey) => {
                const labelKey = SERVICE_GROUP_NAV_LABEL_KEY[groupKey];
                const label = s.serviceGroupNav[labelKey];
                const id = VERIFICATION_LISTING_GROUP_ANCHOR_IDS[groupKey];
                return (
                  <li key={groupKey}>
                    <a href={`#${id}`} className={premiumNavPill}>
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
            <div className="mt-11 grid gap-12 lg:gap-14">
              {listingSections.map((section, sectionIdx) => {
                const group = s.groups[section.groupKey];
                if (!group?.title || group.intro == null) {
                  console.error(
                    `[verification-services] Missing or invalid copy for services.groups.${section.groupKey} (locale ${locale}).`,
                  );
                  return null;
                }
                const navLabelKey = SERVICE_GROUP_NAV_LABEL_KEY[section.groupKey];
                const badgeLabel = s.serviceGroupNav[navLabelKey];
                const bandMuted =
                  sectionIdx % 2 === 1
                    ? "rounded-[1.0625rem] border border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_35%,white)] p-5 sm:p-6 lg:p-7"
                    : "";

                return (
                  <section
                    key={section.groupKey}
                    id={VERIFICATION_LISTING_GROUP_ANCHOR_IDS[section.groupKey]}
                    className={cn("scroll-mt-8", bandMuted)}
                  >
                    <VerificationListingSectionHeader
                      title={group.title}
                      description={group.intro}
                      badgeLabel={badgeLabel}
                      icon={
                        <VerificationServiceIcon name={getVerificationGroupIconKey(section.groupKey)} />
                      }
                    />
                    <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                      {section.cards.map((card) => (
                        <ServiceCard
                          key={card.slug}
                          title={card.title}
                          description={card.description}
                          icon={<VerificationServiceIcon name={card.iconKey} />}
                          href={`/${locale}/verification-services/${card.slug}`}
                          linkLabel={s.cardCta}
                          listingTone
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          <VerificationServicesHowSection servicesCopy={s} />
        </Container>
      </section>
    </>
  );
}
