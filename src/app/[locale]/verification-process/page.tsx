import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { AccreditationProcessCard } from "@/components/cards/AccreditationProcessCard";
import { PremiumVerificationServiceCtaPanel } from "@/components/sections/PremiumVerificationServiceCtaPanel";
import { AccreditationHeroFrame } from "@/components/accreditation/AccreditationHeroFrame";
import { AccreditationPageNav } from "@/components/accreditation/AccreditationPageNav";
import { CorporateDocumentsSection } from "@/components/accreditation/CorporateDocumentsSection";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/verification-process",
    tr: "/tr/verification-process",
    nl: "/nl/verification-process",
  } as const;

  return {
    title: dict.meta.pages.process.title,
    description: dict.meta.pages.process.description,
    alternates: { canonical: `/${locale}/verification-process`, languages },
    openGraph: {
      title: dict.meta.pages.process.title,
      description: dict.meta.pages.process.description,
      url: `/${locale}/verification-process`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function VerificationProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const acc = dict.pages.process.accreditation;
  const ver = dict.pages.process.verification;
  const cta = dict.pages.process.cta;

  const partnerCopy = {
    tr: {
      representationsTitle: "Temsilciliklerimiz",
      representationsBody:
        "Uluslararası doğrulama, belgelendirme ve teknik değerlendirme ekosistemindeki iş birliklerimizi ve temsil ağımızı yansıtır.",
      solutionPartnersTitle: "Çözüm Ortaklarımız",
      solutionPartnersBody:
        "Tamamlayıcı uzmanlık alanlarıyla müşterilerimize daha bütüncül ve güçlü hizmet yapısı sunmamıza katkı sağlayan iş ortaklarımızı içerir.",
      reps: [
        {
          name: "Emicert",
          blurb: "Bağımsız değerlendirme ve uygunluk süreçlerinde tamamlayıcı iş birliği modeli.",
        },
        {
          name: "Cetizion Verifica",
          blurb: "Teknik disiplin, kanıt yapısı ve süreç uyumu odağında temsil ilişkisi.",
        },
      ],
      solutions: [
        {
          name: "ANKA Sustainability",
          blurb: "Sürdürülebilirlik verisi, metodoloji ve açıklama yönetişimi alanlarında tamamlayıcı uzmanlık.",
        },
      ],
    },
    en: {
      representationsTitle: "Our Representations",
      representationsBody:
        "Reflects our representation network and collaborations across the international verification, certification, and technical review ecosystem.",
      solutionPartnersTitle: "Solution Partners",
      solutionPartnersBody:
        "Partners whose complementary expertise helps us deliver a more integrated and robust service structure for clients.",
      reps: [
        {
          name: "Emicert",
          blurb: "A complementary collaboration model supporting independent evaluation and conformity workflows.",
        },
        {
          name: "Cetizion Verifica",
          blurb: "Representation aligned with evidence discipline, technical integrity, and process consistency.",
        },
      ],
      solutions: [
        {
          name: "ANKA Sustainability",
          blurb: "Complementary expertise across sustainability data, methodology, and disclosure governance.",
        },
      ],
    },
    nl: {
      representationsTitle: "Onze Vertegenwoordigingen",
      representationsBody:
        "Weerspiegelt ons netwerk van vertegenwoordigingen en samenwerkingen binnen het internationale verificatie-, certificatie- en technische review-ecosysteem.",
      solutionPartnersTitle: "Oplossingspartners",
      solutionPartnersBody:
        "Partners met aanvullende expertise die ons helpen een meer geïntegreerde en robuuste dienstverlening voor klanten te leveren.",
      reps: [
        {
          name: "Emicert",
          blurb: "Aanvullend samenwerkingsmodel ter ondersteuning van onafhankelijke beoordeling en conformiteitsprocessen.",
        },
        {
          name: "Cetizion Verifica",
          blurb: "Vertegenwoordiging met focus op bewijsdiscipline, technische integriteit en procesconsistentie.",
        },
      ],
      solutions: [
        {
          name: "ANKA Sustainability",
          blurb: "Aanvullende expertise rond duurzaamheidsdata, methodologie en governance van openbaarmaking.",
        },
      ],
    },
  } as const;

  const pc = partnerCopy[l];
  const miniCardClass = cn(
    "relative flex min-h-0 flex-col overflow-hidden rounded-[1.0625rem]",
    "border border-[color:color-mix(in_oklab,var(--brand-accent)_18%,var(--border-soft))]",
    "bg-gradient-to-br from-white via-[#fafcfd] to-[#f4f9fc]",
    "p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_7%,transparent)]",
    "sm:p-7",
  );

  return (
    <>
      <AccreditationPageNav dict={dict} />

      <section id="accreditation-hero" className="scroll-mt-[4.5rem] border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-6 sm:py-7 lg:py-8">
          <div className="grid items-center gap-6 sm:gap-7 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
                {acc.eyebrow}
              </p>
              <h1 className="mt-3 text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.25rem] lg:text-[2.45rem]">
                {acc.title}
              </h1>
              <p className="mt-3 text-sm font-semibold leading-snug tracking-tight text-[color:var(--brand-primary)] sm:text-base">
                {acc.status}
              </p>
              <p className="mt-4 max-w-[40rem] text-sm leading-[1.82] text-[color:var(--ink-dark)]/90 sm:text-[1.0625rem] sm:leading-[1.78]">
                {acc.body}
              </p>
            </div>
            <div className={cn("min-w-0 lg:col-span-5 lg:pl-2")}>
              <AccreditationHeroFrame alt={acc.heroImageAlt} />
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-7xl border-t border-[color:var(--border-soft)] pt-7 sm:mt-8 sm:pt-8">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
              <div className="min-w-0 lg:col-span-4">
                <h2 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
                  {pc.representationsTitle}
                </h2>
                <p className="mt-2 text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                  {pc.representationsBody}
                </p>
              </div>
              <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:col-span-8 lg:gap-6">
                {pc.reps.map((r) => (
                  <article key={r.name} className={miniCardClass}>
                    <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{r.blurb}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="verification-process-section"
        className="scroll-mt-[4.5rem] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_35%,white)]"
      >
        <Container className="py-8 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem]">
              {ver.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[48rem] text-sm leading-[1.78] text-[color:var(--text-muted)] sm:mt-4 sm:text-[1.0625rem] sm:leading-[1.74]">
              {ver.body}
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-7xl grid-cols-1 gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {dict.pages.process.steps.map((s, i) => (
              <AccreditationProcessCard key={s.title} index={i + 1} title={s.title} description={s.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-soft)] bg-white py-8 sm:py-9 lg:py-10">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
              <div className="min-w-0 lg:col-span-4">
                <h2 className="text-[1.35rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.5rem]">
                  {pc.solutionPartnersTitle}
                </h2>
                <p className="mt-3 text-sm leading-[1.78] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.74]">
                  {pc.solutionPartnersBody}
                </p>
              </div>
              <div className="min-w-0 lg:col-span-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
                  {pc.solutions.map((p) => (
                    <article key={p.name} className={miniCardClass}>
                      <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{p.blurb}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CorporateDocumentsSection locale={l} dict={dict} />

      <section className="border-t border-[color:var(--border-soft)] bg-white pb-8 pt-6 sm:pb-9 sm:pt-7">
        <Container>
          <div className={cn("mx-auto max-w-7xl")}>
            <PremiumVerificationServiceCtaPanel
              locale={l}
              ctas={dict.ctas}
              cta={{
                title: cta.title,
                body: cta.body,
                primaryButton: cta.primaryLabel,
                secondaryButton: cta.secondaryLabel,
              }}
              eyebrowOverride={cta.eyebrow}
              omitTertiary
              taglineTopBar={dict.brand.taglineTopBar}
              compact
            />
          </div>
        </Container>
      </section>
    </>
  );
}
