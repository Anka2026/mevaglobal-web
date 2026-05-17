import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { ContactInquiryHeroPanel } from "@/components/contact/ContactInquiryHeroPanel";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { offices } from "@/data/offices";
import { CompanyRegistryBlock } from "@/components/site/CompanyRegistryBlock";
import type { Office } from "@/data/offices";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { CONTACT_PAGE_COPY } from "@/app/[locale]/contact/contact-page-copy";
import { premiumCard, premiumCardMuted, premiumHeroBackdrop } from "@/lib/premiumUi";

/** Published inbox used across the site; enquiry form opens mailto with prefilled body (no server POST). */
const CONTACT_EMAIL = "info@mevaglobalcertification.com";

function isTurkeyPhone(phone?: string) {
  if (!phone) return false;
  const normalized = phone.replace(/\s+/g, "");
  return normalized.startsWith("+90");
}

function sanitizeOfficeForDisplay(office: Office): Office {
  if (office.id === "nl" && isTurkeyPhone(office.phone)) {
    return { ...office, phone: undefined };
  }
  return office;
}

const primaryCtaClass =
  "inline-flex h-11 items-center justify-center rounded-2xl border border-transparent bg-[color:var(--brand-primary)] px-5 text-sm font-semibold tracking-tight text-white shadow-sm transition-colors hover:bg-[color:var(--brand-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2";

const finalPrimaryCtaClass =
  "inline-flex h-11 items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold tracking-tight !text-[color:var(--brand-primary)] shadow-sm transition-colors hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#005691]";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  const languages = {
    en: "/en/contact",
    tr: "/tr/contact",
    nl: "/nl/contact",
  } as const;

  return {
    title: dict.meta.pages.contact.title,
    description: dict.meta.pages.contact.description,
    alternates: { canonical: `/${locale}/contact`, languages },
    openGraph: {
      title: dict.meta.pages.contact.title,
      description: dict.meta.pages.contact.description,
      url: `/${locale}/contact`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const copy = CONTACT_PAGE_COPY[l];
  const sanitizedOffices = offices.map(sanitizeOfficeForDisplay);
  const nlOffice = sanitizedOffices.find((o) => o.id === "nl");
  const trOffice = sanitizedOffices.find((o) => o.id === "tr");

  return (
    <>
      {/* 1. Hero */}
      <section className={cn("border-b border-[color:var(--border-soft)]", premiumHeroBackdrop)}>
        <Container className="py-12 sm:py-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
                {copy.hero.eyebrow}
              </p>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[2.35rem] sm:leading-[1.12] lg:text-[2.5rem]">
                {copy.hero.title}
              </h1>
              <p className="mt-4 max-w-[44rem] text-base leading-[1.7] text-[color:var(--text-muted)] sm:text-lg sm:leading-relaxed">
                {copy.hero.subtitle}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#enquiry-form" className={primaryCtaClass}>
                  {copy.hero.primaryCta}
                </a>
                <ButtonLink
                  href={`/${l}/verification-services`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center sm:w-auto"
                >
                  {copy.hero.secondaryCta}
                </ButtonLink>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-5 lg:pl-2">
              <ContactInquiryHeroPanel locale={l} />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Company + office information */}
      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-10 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-8">
            <div className={premiumCard}>
              <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">
                {copy.companyCard.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                {copy.companyCard.description}
              </p>
              <CompanyRegistryBlock copy={dict.footer} variant="panel" />
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
                    {copy.companyCard.labels.email}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      className="font-medium text-[color:var(--brand-primary)] underline-offset-4 hover:underline"
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                {nlOffice ? (
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
                      {copy.companyCard.labels.headOffice}
                    </dt>
                    <dd className="mt-1.5 flex gap-2 text-[color:var(--text-muted)]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-accent)]" aria-hidden />
                      <span>
                        {nlOffice.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <div className={premiumCard}>
              <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">
                {copy.officesCard.title}
              </h2>
              <div className="mt-8 space-y-10">
                {nlOffice ? (
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                      {copy.officesCard.nlTitle}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[color:var(--ink-dark)]">{nlOffice.name}</p>
                    <div className="mt-3 flex gap-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-accent)]" aria-hidden />
                      <span>
                        {nlOffice.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </div>
                    {nlOffice.email ? (
                      <p className="mt-4 flex items-center gap-2 text-sm text-[color:var(--ink-dark)]/85">
                        <Mail className="h-4 w-4 text-[color:var(--brand-accent)]" aria-hidden />
                        <a className="hover:underline" href={`mailto:${nlOffice.email}`}>
                          {nlOffice.email}
                        </a>
                      </p>
                    ) : null}
                  </div>
                ) : null}

                {trOffice ? (
                  <div className="border-t border-[color:var(--border-soft)] pt-10">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                      {copy.officesCard.trTitle}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[color:var(--ink-dark)]">{trOffice.name}</p>
                    <div className="mt-3 flex gap-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-accent)]" aria-hidden />
                      <span>
                        {trOffice.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </div>
                    {trOffice.email ? (
                      <p className="mt-4 flex items-center gap-2 text-sm text-[color:var(--ink-dark)]/85">
                        <Mail className="h-4 w-4 text-[color:var(--brand-accent)]" aria-hidden />
                        <a className="hover:underline" href={`mailto:${trOffice.email}`}>
                          {trOffice.email}
                        </a>
                      </p>
                    ) : null}
                    {trOffice.phone ? (
                      <p className="mt-2 flex items-center gap-2 text-sm text-[color:var(--ink-dark)]/85">
                        <Phone className="h-4 w-4 text-[color:var(--brand-accent)]" aria-hidden />
                        <a className="hover:underline" href={`tel:${trOffice.phone.replace(/\s+/g, "")}`}>
                          {trOffice.phone}
                        </a>
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Support pathways */}
      <section className="border-b border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)]">
        <Container className="py-8 sm:py-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">
              {copy.support.eyebrow}
            </p>
            <h2 className="mt-2 text-[1.5rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem]">
              {copy.support.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
              {copy.support.subtitle}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
              {copy.support.cards.map((card) => (
                <div
                  key={card.title}
                  className={cn(premiumCard, "motion-safe:hover:-translate-y-px")}
                >
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4–5. Form + side panel */}
      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-8 sm:py-10 lg:py-11">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">
              {copy.formIntro.eyebrow}
            </p>
            <h2 className="mt-2 text-[1.5rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem]">
              {copy.formIntro.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
              {copy.formIntro.subtitle}
            </p>

            <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <div className={cn(premiumCardMuted, "lg:p-9")}>
                  <ContactEnquiryForm id="enquiry-form" contactEmail={CONTACT_EMAIL} copy={copy.form} />
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:col-span-5">
                <div className="rounded-2xl border border-[color:var(--border-soft)] bg-white p-6 shadow-sm sm:p-7">
                  <h3 className="text-base font-semibold tracking-tight text-[color:var(--ink-dark)]">
                    {copy.sidePanel.topicsTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {copy.sidePanel.topics.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#003A5C] p-6 text-white shadow-sm sm:p-7">
                  <h3 className="text-base font-semibold tracking-tight text-white">{copy.sidePanel.frameworkTitle}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
                    {copy.sidePanel.frameworkBullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. What happens next */}
      <section className="border-b border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)]">
        <Container className="py-10 sm:py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">
              {copy.nextSteps.eyebrow}
            </p>
            <h2 className="mt-2 text-[1.5rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem]">
              {copy.nextSteps.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
              {copy.nextSteps.subtitle}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
              {copy.nextSteps.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[color:var(--border-soft)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
                >
                  <p className="text-[11px] font-semibold tabular-nums text-[color:var(--brand-primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-[color:var(--ink-dark)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Final dark CTA */}
      <section className="border-t border-white/10 bg-[#005691]">
        <Container className="py-11 sm:py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-xl">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{copy.finalCta.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">{copy.finalCta.subtitle}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
              <a href="#enquiry-form" className={cn(finalPrimaryCtaClass, "w-full justify-center sm:w-auto")}>
                {copy.finalCta.primaryCta}
              </a>
              <Link
                href={`/${l}/verification-services`}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-2xl border border-white/35 px-5 text-sm font-semibold tracking-tight !text-white transition-colors hover:border-white/55 hover:bg-white/[0.06]",
                  "w-full justify-center sm:w-auto",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#005691]",
                )}
              >
                {copy.finalCta.secondaryCta}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
