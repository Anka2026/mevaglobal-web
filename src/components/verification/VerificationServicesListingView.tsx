import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
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
  type VerificationListingSectionModel,
} from "@/lib/verification/verificationServicesData";
import { VerificationListingRecoverablePanel } from "@/components/verification/VerificationListingRecoverablePanel";

const groupIconFrame =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-[color:var(--border-soft)]/70 bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)] shadow-[0_1px_2px_rgba(37,99,235,0.06)] sm:mt-0.5";

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
            src="/page-visuals/services-hero-approved.png"
            alt={s.heroImageAlt}
            photoPresentation
          />
        }
      />
      <Container className="py-10 sm:py-11">
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
                <section key={section.groupKey} className="scroll-mt-8">
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
                      <VerificationServiceIcon name={getVerificationGroupIconKey(section.groupKey)} className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                    {section.cards.map((card) => {
                      return (
                        <ServiceCard
                          key={card.slug}
                          title={card.title}
                          description={card.description}
                          icon={<VerificationServiceIcon name={card.iconKey} className="h-5 w-5" />}
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
