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
        denseHero
        prominentVisual
        wideIntro
        sectionSurfaceClassName="border-b border-[color:var(--border-soft)] bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_72%,var(--background-main))] via-[color:color-mix(in_oklab,var(--brand-accent-soft)_44%,var(--background-main))] to-[color:color-mix(in_oklab,var(--brand-primary)_7%,var(--background-main))]"
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

          <article className="relative mb-10 grid gap-6 overflow-hidden border border-[color:color-mix(in_oklab,var(--brand-gold)_40%,var(--border-soft))] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-center">
            <div className="executive-glow pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_50%,transparent)] blur-2xl" aria-hidden />
            <div>
              <p className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                <span className="executive-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand-gold)]" aria-hidden />
                {locale === "tr" ? "Öne çıkan hizmet" : locale === "nl" ? "Uitgelichte dienst" : "Featured service"}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-2xl">
                {locale === "tr"
                  ? "Akredite CBAM doğrulaması — EmiCert S.A. aracılığıyla"
                  : locale === "nl"
                    ? "Geaccrediteerde CBAM-verificatie — via EmiCert S.A."
                    : "Accredited CBAM Verification — Through EmiCert S.A."}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-[1.75] text-[color:var(--text-muted)]">
                {locale === "tr"
                  ? "Akredite CBAM doğrulaması EmiCert S.A.’nın akreditasyonu ve sorumluluğu altındadır. MEVA Global Certification, Türkiye’deki tek temsilci olarak başvuruyu koordine eder."
                  : locale === "nl"
                    ? "Geaccrediteerde CBAM-verificatie valt onder de accreditatie en verantwoordelijkheid van EmiCert S.A. MEVA coördineert de aanvraag als exclusieve vertegenwoordiger in Türkiye."
                    : "Accredited CBAM verification is performed under the accreditation and responsibility of EmiCert S.A. MEVA Global Certification, exclusive representative in Türkiye, coordinates the application."}
              </p>
            </div>
            <a
              href={`/${locale}/cbam-solutions`}
              className="relative inline-flex h-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-5 text-sm font-semibold text-white shadow-[0_0_0_1px_color-mix(in_oklab,var(--brand-gold)_40%,transparent)] hover:bg-[color:var(--brand-primary-hover)]"
            >
              {locale === "tr" ? "CBAM sayfası" : locale === "nl" ? "Naar CBAM" : "Open CBAM"}
            </a>
          </article>

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
