import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Leaf, Factory, BadgeCheck, ClipboardList, Shield } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustHighlightsSection } from "@/components/sections/TrustHighlightsSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProcessStepCard } from "@/components/cards/ProcessStepCard";

const serviceIcons = [Leaf, Factory, BadgeCheck, ClipboardList, Shield] as const;

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

  return (
    <>
      <HeroSection locale={l} dict={dict} />
      <TrustHighlightsSection title={dict.home.trustHighlightsTitle} items={dict.home.trustHighlights} />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto w-full max-w-[76rem]">
            <SectionHeading
              title={dict.home.serviceAreasTitle}
              description={dict.home.serviceAreasIntro}
              className="max-w-3xl"
              titleClassName="text-[1.75rem] sm:text-[2.125rem]"
              descriptionClassName="text-[0.9375rem] text-[color:var(--ink-dark)]/80 sm:text-base leading-relaxed"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {dict.home.serviceAreas.slice(0, 3).map((s, idx) => {
                const Icon = serviceIcons[idx] ?? Leaf;
                return (
                  <ServiceCard
                    key={s.title}
                    variant="featured"
                    title={s.title}
                    description={s.description}
                    icon={<Icon className="h-6 w-6" aria-hidden="true" />}
                    href={`/${l}/verification-services`}
                    linkLabel={dict.ctas.learnMore}
                  />
                );
              })}
            </div>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-8">
              {dict.home.serviceAreas.slice(3, 5).map((s, idx) => {
                const Icon = serviceIcons[idx + 3] ?? Leaf;
                return (
                  <ServiceCard
                    key={s.title}
                    variant="featured"
                    title={s.title}
                    description={s.description}
                    icon={<Icon className="h-6 w-6" aria-hidden="true" />}
                    href={`/${l}/verification-services`}
                    linkLabel={dict.ctas.learnMore}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--brand-accent-soft)] py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              title={dict.home.whyTitle}
              className="max-w-2xl"
              titleClassName="text-[1.75rem] sm:text-[2.125rem]"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
              {dict.home.whyItems.map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-[color:var(--border-soft)] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] sm:p-8"
                >
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-7 text-[color:var(--text-muted)]">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto w-full max-w-[76rem]">
            <SectionHeading
              title={dict.home.processTitle}
              description={dict.home.processIntro}
              className="max-w-3xl"
              titleClassName="text-[1.75rem] sm:text-[2.125rem]"
              descriptionClassName="text-[0.9375rem] sm:text-base leading-relaxed"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {dict.home.processSteps.map((s, i) => (
                <ProcessStepCard
                  key={s.title}
                  index={i + 1}
                  title={s.title}
                  description={s.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--brand-accent-soft)] py-14 pb-16 sm:py-16">
        <Container>
          <div className="mx-auto w-full max-w-[76rem]">
            <SectionHeading
              title={dict.home.cbamTitle}
              description={dict.home.cbamIntro}
              className="max-w-3xl"
              titleClassName="text-[1.85rem] sm:text-[2.2rem]"
              descriptionClassName="mt-4 text-[0.9375rem] font-medium leading-relaxed text-[color:var(--ink-dark)]/85 sm:text-[1.0625rem]"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
              <div className="flex min-h-0 flex-col lg:col-span-8">
                <div className="flex h-full min-h-[min(100%,22rem)] flex-col rounded-2xl border border-[color:var(--border-soft)] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.04] sm:p-9">
                  <ul className="space-y-4 text-[0.9375rem] font-medium leading-relaxed text-[color:var(--ink-dark)]/92 sm:text-base sm:leading-relaxed">
                    {dict.home.cbamBullets.map((b) => (
                      <li key={b} className="flex gap-4 pl-0.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
                        <span className="min-w-0 flex-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex min-h-0 flex-col lg:col-span-4">
                <div className="flex h-full min-h-[min(100%,22rem)] flex-col rounded-2xl border border-[color:var(--border-soft)] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.06] sm:p-9">
                  <p className="text-xs font-semibold tracking-[0.16em] text-[color:var(--brand-primary)]">
                    {dict.home.cbamCardTitle}
                  </p>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                    {dict.home.cbamCardText}
                  </p>
                  <div className="mt-8 flex flex-1 flex-col justify-end border-t border-[color:var(--border-soft)] pt-6 sm:mt-6 sm:pt-7">
                    <a
                      className="inline-flex text-sm font-semibold text-[color:var(--brand-primary)] transition-colors hover:underline"
                      href={`/${l}/cbam-solutions`}
                    >
                      {dict.ctas.learnMore} →
                    </a>
                  </div>
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

