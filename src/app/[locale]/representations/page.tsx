import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { RepresentationsCards } from "./RepresentationsCards";
import { getRepresentationsPageBundle } from "./representations-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  const dict = await getDictionary(l);

  const languages = {
    en: "/en/representations",
    tr: "/tr/representations",
    nl: "/nl/representations",
  } as const;

  return {
    title: dict.nav.representations,
    description: dict.meta.siteDescription,
    alternates: { canonical: `/${locale}/representations`, languages },
    openGraph: {
      title: dict.nav.representations,
      description: dict.meta.siteDescription,
      url: `/${locale}/representations`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function RepresentationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const bundle = getRepresentationsPageBundle(l);

  return (
    <>
      <PageHeader denseHero eyebrow={dict.nav.process} title={bundle.title} description={bundle.intro} />

      <Container className="py-8 sm:py-9 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <section className="border-b border-[color:var(--border-soft)] pb-8 sm:pb-9">
            <RepresentationsCards
              title={bundle.representationsTitle}
              body={bundle.representationsBody}
              items={bundle.representations}
              ui={bundle.ui}
              layout="twoColumn"
            />
          </section>

          <section className="pt-8 sm:pt-9">
            <RepresentationsCards
              title={bundle.solutionTitle}
              body={bundle.solutionBody}
              items={bundle.partners}
              ui={bundle.ui}
              layout="singleWide"
            />
          </section>
        </div>
      </Container>
    </>
  );
}
