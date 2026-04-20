import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import type { Service } from "@/data/services";
import type { ServiceHeroVisual } from "@/lib/verification/serviceHeroVisuals";
import { Container } from "@/components/ui/Container";
import { ServiceDetailPremiumBulletCard } from "@/components/sections/ServiceDetailPremiumBulletCard";
import { VerificationServiceDetailHero } from "@/components/sections/VerificationServiceDetailHero";
import { PremiumVerificationServiceCtaPanel } from "@/components/sections/PremiumVerificationServiceCtaPanel";

/** Four premium bullet cards (2×2) + CTA; no “for who” section. */
export type PremiumFourCardServiceDetailContent = Omit<
  Extract<Dictionary["pages"]["serviceDetails"][Service["slug"]], { covers: unknown }>,
  "forWho"
>;

export function PremiumFourCardServiceDetail({
  l,
  content,
  visual,
  backLabel,
  eyebrowFallback,
  ctas,
  taglineTopBar,
}: {
  l: Locale;
  content: PremiumFourCardServiceDetailContent;
  visual: ServiceHeroVisual;
  backLabel: string;
  eyebrowFallback: string;
  ctas: Dictionary["ctas"];
  taglineTopBar: string;
}) {
  const eyebrow = content.heroEyebrow?.trim() ? content.heroEyebrow : eyebrowFallback;

  return (
    <>
      <VerificationServiceDetailHero
        locale={l}
        backLabel={backLabel}
        eyebrow={eyebrow}
        title={content.title}
        intro={content.intro}
        visual={visual}
      />

      <Container className="py-8 sm:py-9 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-6 lg:[&>*]:min-h-0">
            <ServiceDetailPremiumBulletCard
              className="lg:col-span-6"
              title={content.covers.title}
              items={content.covers.bullets}
            />
            <ServiceDetailPremiumBulletCard
              className="lg:col-span-6"
              title={content.typicalScope.title}
              items={content.typicalScope.bullets}
            />
            <ServiceDetailPremiumBulletCard
              className="lg:col-span-6"
              title={content.whyMatters.title}
              items={content.whyMatters.bullets}
            />
            <ServiceDetailPremiumBulletCard
              className="lg:col-span-6"
              title={content.approach.title}
              items={content.approach.bullets}
            />
          </div>

          <PremiumVerificationServiceCtaPanel locale={l} cta={content.cta} ctas={ctas} taglineTopBar={taglineTopBar} />
        </div>
      </Container>
    </>
  );
}
