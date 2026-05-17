import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FileStack, Package, Scale, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import {
  premiumAboutMotif,
  premiumEditorialHeroSurface,
  premiumEyebrowRow,
  premiumEyebrowRule,
  premiumGoldDivider,
  premiumGoldTopLine,
  premiumInstitutionalPanel,
  premiumNavyStatement,
  premiumSectionMuted,
  premiumSectionWhite,
} from "@/lib/premiumUi";
import { DocumentsCategoryCard } from "@/components/documents/DocumentsCategoryCard";
import { DocumentsHeroFrame } from "@/components/documents/DocumentsHeroFrame";
import { TechnicalResourceCard } from "@/components/documents/TechnicalResourceCard";
import { resolveLocalizedPublicHref } from "@/lib/resolveLocalizedPublicHref";

const DOCUMENTS_HERO_SRC = "/assets/page-visuals/documents-hero.png";

const CATEGORY_ICONS = [ShieldCheck, FileStack, Package, Scale] as const;

function resolveHeroSrc(): string {
  return DOCUMENTS_HERO_SRC;
}

function estimateCardReadingMinutes(title: string, body: string): number {
  const words = `${title} ${body}`.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.min(9, Math.ceil(words / 180)));
}

type Copy = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  sectionLabel: string;
  categoriesTitle: string;
  categories: readonly { title: string; body: string }[];
  availabilityTitle: string;
  availabilityBody: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    heroEyebrow: "Resources • Guidance • Technical Notes",
    heroTitle: "Technical Publication Hub For Verification And Regulatory Readiness",
    heroBody:
      "Structured technical notes on evidence discipline, documentation quality and verification readiness—covering independent review, validation, CBAM, product declarations and regulatory reporting contexts.",
    sectionLabel: "Featured Content",
    categoriesTitle: "Resource Categories",
    categories: [
      {
        title: "Verification And Technical Review Guidance",
        body: "How scope, criteria, sampling and documented judgement shape credible outcomes.",
      },
      {
        title: "Sustainability Documentation",
        body: "What strong evidence packs look like and how to reduce gaps before review cycles.",
      },
      {
        title: "Product & Environmental Declarations",
        body: "Orientation on EPD/PCF-style documentation quality, traceability and publication readiness.",
      },
      {
        title: "Regulatory Readiness",
        body: "Structured preparation for EU-facing reporting expectations and third‑party scrutiny.",
      },
    ],
    availabilityTitle: "Access Note",
    availabilityBody:
      "Public resources and templates may be shared selectively—depending on scope, confidentiality constraints and the intended external use. If you need a structured pack, contact us and share your context.",
  },
  tr: {
    heroEyebrow: "Kaynaklar • Rehberlik • Teknik Notlar",
    heroTitle: "Doğrulama ve Regülasyon Hazırlığı İçin Teknik Yayın Merkezi",
    heroBody:
      "Bağımsız doğrulama, validasyon, SKDM, ürün beyanları ve regülasyon hazırlığı bağlamlarında kanıt disiplini, dokümantasyon kalitesi ve teknik inceleme beklentilerine ilişkin yapılandırılmış teknik notlar.",
    sectionLabel: "Öne Çıkan İçerikler",
    categoriesTitle: "Kaynak Kategorileri",
    categories: [
      {
        title: "Bağımsız Doğrulama ve Teknik İnceleme Rehberi",
        body: "Kapsam, kriter, örnekleme ve belgelenmiş teknik muhakemenin güvenilir çıktıları nasıl desteklediği.",
      },
      {
        title: "Sürdürülebilirlik Dokümantasyonu",
        body: "Güçlü kanıt dosyası yapısı ve inceleme döngüsü öncesi boşlukların azaltılması.",
      },
      {
        title: "Ürün ve Çevresel Beyanlar",
        body: "EPD/PCF benzeri çıktılarda dokümantasyon kalitesi, izlenebilirlik ve yayıma hazırlık.",
      },
      {
        title: "Regülasyon Hazırlığı",
        body: "AB odaklı raporlama beklentileri ve üçüncü taraf incelemesine yapılandırılmış hazırlık.",
      },
    ],
    availabilityTitle: "Erişilebilirlik Notu",
    availabilityBody:
      "Kamuya açık kaynaklar ve şablonlar, kapsam ve gizlilik koşullarına ve çıktının dış kullanım amacına bağlı olarak seçici biçimde paylaşılabilir. Yapılandırılmış bir teknik dosya gerekiyorsa bağlamınızı paylaşarak iletişime geçebilirsiniz.",
  },
  nl: {
    heroEyebrow: "Kennisbronnen • Richtlijnen • Technische Notities",
    heroTitle: "Technisch publicatiecentrum voor verificatie en regelgevingsvoorbereiding",
    heroBody:
      "Gestructureerde technische notities over bewijsdiscipline, documentatiekwaliteit en verificatiegereedheid—in onafhankelijke beoordeling, validatie, CBAM, productverklaringen en regelgevingscontexten.",
    sectionLabel: "Uitgelichte inhoud",
    categoriesTitle: "Kenniscategorieën",
    categories: [
      {
        title: "Richtlijnen voor verificatie en technische beoordeling",
        body: "Hoe scope, criteria, steekproeven en gedocumenteerd oordeel geloofwaardige uitkomsten ondersteunen.",
      },
      {
        title: "Duurzaamheidsdocumentatie",
        body: "Wat een sterk bewijsdossier inhoudt en hoe hiaten vóór reviewcycli worden beperkt.",
      },
      {
        title: "Product- en milieudeclaraties",
        body: "Oriëntatie op EPD/PCF-documentatiekwaliteit, traceerbaarheid en publicatiegereedheid.",
      },
      {
        title: "Regelgevingsgereedheid",
        body: "Gestructureerde voorbereiding op EU-rapportageverwachtingen en externe toetsing.",
      },
    ],
    availabilityTitle: "Toegankelijkheidsnotitie",
    availabilityBody:
      "Publieke resources en templates kunnen selectief worden gedeeld—afhankelijk van scope, vertrouwelijkheid en beoogd extern gebruik. Voor een gestructureerd dossier: neem contact op via het contactformulier en deel uw context.",
  },
};

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
  const copy = COPY[l];
  const ui = doc?.ui;
  const heroSrc = resolveHeroSrc();

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
  const sectionLabel = copy.sectionLabel || doc?.sectionLabel || "";
  const reviewCta = ui?.reviewTechnicalNote ?? doc?.cards?.[0]?.cta ?? dict.ctas.learnMore;

  return (
    <>
      <section className={cn("relative border-b border-[color:var(--border-soft)]", premiumEditorialHeroSurface)}>
        <div className={premiumAboutMotif} aria-hidden />
        <Container className="relative py-10 sm:py-12 lg:py-14">
          <div className="mx-auto grid max-w-[76rem] items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <div className={premiumEyebrowRow}>
                <span className={premiumEyebrowRule} aria-hidden />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                  {copy.heroEyebrow || hero.eyebrow}
                </p>
              </div>
              <h1 className="mt-4 text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.2rem] lg:text-[2.4rem]">
                {copy.heroTitle || hero.title}
              </h1>
              <p className="mt-4 max-w-[44rem] text-[0.9375rem] leading-[1.76] text-[color:var(--ink-dark)]/90 sm:text-lg sm:leading-[1.72]">
                {copy.heroBody || hero.body}
              </p>
            </div>
            <div className="min-w-0 lg:col-span-5 lg:pl-2">
              <DocumentsHeroFrame alt={hero.heroImageAlt || copy.heroTitle || hero.title} src={heroSrc} />
            </div>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)]", premiumSectionWhite)}>
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[76rem]">
            <SectionHeading
              title={copy.categoriesTitle}
              className="max-w-[40rem]"
              titleClassName="text-[1.5rem] sm:text-[1.65rem]"
              withTitleAccent
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {copy.categories.map((c, index) => {
                const Icon = CATEGORY_ICONS[index] ?? ShieldCheck;
                return <DocumentsCategoryCard key={c.title} icon={Icon} title={c.title} body={c.body} />;
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)]", premiumSectionMuted)}>
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[76rem]">
            <SectionHeading
              eyebrow={sectionLabel}
              title={doc?.title ?? copy.heroTitle}
              className="max-w-[44rem]"
              titleClassName="text-[1.5rem] sm:text-[1.65rem]"
              withTitleAccent
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch lg:gap-7">
              {cards.map((c, index) => {
                const href = resolveLocalizedPublicHref(c?.href, l, `/${l}/contact`);
                const minutes = estimateCardReadingMinutes(c?.title ?? "", c?.body ?? "");
                const readingTime = ui?.readingTime?.replace("{minutes}", String(minutes));
                return (
                  <TechnicalResourceCard
                    key={`${c?.title ?? "card"}-${c?.date ?? index}`}
                    category={c?.category ?? ""}
                    date={c?.date ?? ""}
                    dateTime={c?.date ?? ""}
                    readingTime={readingTime}
                    title={c?.title ?? ""}
                    body={c?.body ?? ""}
                    cta={c?.cta?.trim() ? c.cta : reviewCta}
                    href={href}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)]", premiumSectionMuted)}>
        <Container className="py-8 sm:py-10">
          <div className={cn("mx-auto max-w-[76rem]", premiumInstitutionalPanel)}>
            <div className={premiumGoldTopLine} aria-hidden />
            <h2 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
              {copy.availabilityTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-relaxed">
              {copy.availabilityBody}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-12 pt-8 sm:pb-14 sm:pt-10">
        <Container>
          <div className={cn(premiumNavyStatement, "relative mx-auto max-w-[76rem]")}>
            <div className={premiumGoldDivider} aria-hidden />
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">{bottom.eyebrow}</p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{bottom.title}</h2>
                <p className="mt-2 text-sm leading-[1.75] text-white/78 sm:text-[0.9375rem]">{bottom.body}</p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
                <ButtonLink
                  href={`/${l}/contact`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center border-transparent bg-white !text-[color:var(--brand-primary)] shadow-sm hover:bg-white/95 sm:w-auto lg:min-w-[11rem]"
                >
                  {bottom.primary?.trim() ? bottom.primary : dict.ctas.contact}
                </ButtonLink>
                <ButtonLink
                  href={`/${l}/verification-services`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center border-white/35 bg-transparent !text-white shadow-none hover:bg-white/10 sm:w-auto lg:min-w-[11rem]"
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
