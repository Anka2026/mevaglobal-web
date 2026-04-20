import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { DocumentsHeroFrame } from "@/components/documents/DocumentsHeroFrame";
import { TechnicalResourceCard } from "@/components/documents/TechnicalResourceCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/documents",
    tr: "/tr/documents",
    nl: "/nl/documents",
  } as const;

  const metaDoc = dict.meta?.pages?.documents;
  return {
    title: metaDoc?.title ?? dict.meta?.siteName ?? "Meva Global",
    description: metaDoc?.description ?? dict.meta?.siteDescription ?? "",
    alternates: { canonical: `/${locale}/documents`, languages },
    openGraph: {
      title: metaDoc?.title ?? dict.meta?.siteName ?? "Meva Global",
      description: metaDoc?.description ?? dict.meta?.siteDescription ?? "",
      url: `/${locale}/documents`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const doc = dict.pages?.documents;
  const cards = Array.isArray(doc?.cards) ? doc.cards : [];

  const heroDefaults = {
    eyebrow: "",
    title: "",
    body: "",
    heroImageAlt: "",
  };
  const bottomDefaults = {
    eyebrow: "",
    title: "",
    body: "",
    primary: "",
    secondary: "",
  };
  const hero = { ...heroDefaults, ...(doc?.hero ?? {}) };
  const bottom = { ...bottomDefaults, ...(doc?.bottomCta ?? {}) };
  const sectionLabel = doc?.sectionLabel ?? "";

  return (
    <>
      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-7 sm:py-8 lg:py-9">
          <div className="grid items-center gap-6 sm:gap-7 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
                {hero.eyebrow}
              </p>
              <h1 className="mt-2.5 text-[1.75rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.05rem] lg:text-[2.2rem]">
                {hero.title}
              </h1>
              <p className="mt-3 max-w-[44rem] text-sm leading-[1.75] text-[color:var(--ink-dark)]/90 sm:text-[1.0625rem] sm:leading-[1.74]">
                {hero.body}
              </p>
            </div>
            <div className="min-w-0 lg:col-span-5 lg:pl-1">
              <DocumentsHeroFrame alt={hero.heroImageAlt || hero.title} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_28%,white)]">
        <Container className="py-7 sm:py-8 lg:py-9">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]/95">
              {sectionLabel}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 md:items-stretch lg:gap-7">
              {cards.map((c, index) => {
                const href = typeof c?.href === "string" && c.href.startsWith("/") ? `/${l}${c.href}` : `/${l}/contact`;
                return (
                  <TechnicalResourceCard
                    key={`${c?.title ?? "card"}-${c?.date ?? index}`}
                    category={c?.category ?? ""}
                    date={c?.date ?? ""}
                    dateTime={c?.date ?? ""}
                    title={c?.title ?? ""}
                    body={c?.body ?? ""}
                    cta={c?.cta ?? ""}
                    href={href}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-10 pt-7 sm:pb-11 sm:pt-8">
        <Container>
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_22%,var(--border-soft))]",
              "bg-gradient-to-br from-[color:color-mix(in_oklab,var(--brand-accent-soft)_92%,white)] via-white to-[#f3f8fb]",
              "p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_14px_36px_-18px_rgba(29,37,47,0.12)] sm:p-8 lg:p-9",
              "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_9%,transparent)]",
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,color-mix(in_oklab,var(--brand-accent-soft)_50%,white)_0%,transparent_40%)] opacity-90" />
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]">{bottom.eyebrow}</p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">
                  {bottom.title}
                </h2>
                <p className="mt-2 text-sm leading-[1.75] text-[color:var(--ink-dark)]/88 sm:text-[0.9375rem]">{bottom.body}</p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
                <ButtonLink href={`/${l}/contact`} variant="primary" size="md" className="w-full justify-center sm:w-auto lg:min-w-[10.5rem]">
                  {bottom.primary}
                </ButtonLink>
                <ButtonLink
                  href={`/${l}/verification-services`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center sm:w-auto lg:min-w-[10.5rem]"
                >
                  {bottom.secondary}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
