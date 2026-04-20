import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { OfficeCard } from "@/components/cards/OfficeCard";
import { ContactHeroFrame } from "@/components/contact/ContactHeroFrame";
import { offices } from "@/data/offices";

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

  return (
    <>
      <PageHeader
        denseHero
        eyebrow={dict.nav.contact}
        title={dict.pages.contact.title}
        description={dict.pages.contact.intro}
        visual={<ContactHeroFrame alt={dict.pages.contact.heroImageAlt} />}
      />

      <section className="border-t border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_30%,white)]">
        <Container className="py-8 sm:py-9">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)]">
              {dict.pages.contact.officesTitle}
            </h2>
            <div className="mt-5 grid gap-5 sm:gap-6 md:grid-cols-2">
              {offices.map((o) => (
                <OfficeCard
                  key={o.id}
                  office={o}
                  label={o.id === "tr" ? dict.shared.offices.turkey : dict.shared.offices.netherlands}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
