import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  premiumCard,
  premiumHeroBackdrop,
  premiumInstitutionalPanel,
  premiumSectionMuted,
} from "@/lib/premiumUi";
import { DocumentsHeroFrame } from "@/components/documents/DocumentsHeroFrame";
import { TechnicalResourceCard } from "@/components/documents/TechnicalResourceCard";
import { resolveLocalizedPublicHref } from "@/lib/resolveLocalizedPublicHref";

const DOCUMENTS_HERO_SRC = "/assets/page-visuals/documents-hero.png";

function resolveHeroSrc(): string {
  return DOCUMENTS_HERO_SRC;
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
    heroTitle: "Knowledge Hub For Verification And Regulatory Readiness",
    heroBody:
      "We publish regular insights on evidence discipline, documentation quality and technical readiness across verification, validation, CBAM, product declarations and sustainability reporting.",
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
    heroTitle: "Doğrulama ve Regülasyon Hazırlığı İçin Bilgi Merkezi",
    heroBody:
      "Doğrulama, validasyon, SKDM, ürün beyanları ve sürdürülebilirlik raporlaması alanlarında kanıt disiplini, dokümantasyon kalitesi ve teknik hazırlık üzerine düzenli içerikler paylaşıyoruz.",
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
    heroTitle: "Kennisbank voor verificatie en regelgevingsvoorbereiding",
    heroBody:
      "We delen regelmatig inhoud over bewijsdiscipline, documentatiekwaliteit en technische gereedheid rond verificatie, validatie, CBAM, productverklaringen en duurzaamheidsrapportage.",
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

  return (
    <>
      <section className={cn("border-b border-[color:var(--border-soft)]", premiumHeroBackdrop)}>
        <Container className="py-8 sm:py-9 lg:py-10">
          <div className="grid items-center gap-7 sm:gap-8 lg:grid-cols-12 lg:gap-9 xl:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
                {copy.heroEyebrow || hero.eyebrow}
              </p>
              <h1 className="mt-2.5 text-[1.75rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.05rem] lg:text-[2.2rem]">
                {copy.heroTitle || hero.title}
              </h1>
              <p className="mt-3 max-w-[44rem] text-sm leading-[1.75] text-[color:var(--ink-dark)]/90 sm:text-[1.0625rem] sm:leading-[1.74]">
                {copy.heroBody || hero.body}
              </p>
            </div>
            <div className="min-w-0 lg:col-span-5 lg:pl-1">
              <DocumentsHeroFrame alt={hero.heroImageAlt || copy.heroTitle || hero.title} src={heroSrc} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-8 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-[1.35rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.5rem]">
              {copy.categoriesTitle}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {copy.categories.map((c) => (
                <div key={c.title} className={premiumCard}>
                  <p className="text-[0.9375rem] font-semibold leading-snug text-[color:var(--ink-dark)]">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)]", premiumSectionMuted)}>
        <Container className="py-8 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]/95">
              {sectionLabel}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 md:items-stretch lg:gap-7">
              {cards.map((c, index) => {
                const href = resolveLocalizedPublicHref(c?.href, l, `/${l}/contact`);
                return (
                  <TechnicalResourceCard
                    key={`${c?.title ?? "card"}-${c?.date ?? index}`}
                    category={c?.category ?? ""}
                    date={c?.date ?? ""}
                    dateTime={c?.date ?? ""}
                    title={c?.title ?? ""}
                    body={c?.body ?? ""}
                    cta={c?.cta ?? dict.ctas.learnMore}
                    href={href}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className={cn(premiumSectionMuted)}>
        <Container className="py-8 sm:py-9 lg:py-10">
          <div className={cn("mx-auto max-w-7xl", premiumInstitutionalPanel)}>
            <h2 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
              {copy.availabilityTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-relaxed">
              {copy.availabilityBody}
            </p>
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
                  {bottom.primary?.trim() ? bottom.primary : dict.ctas.contact}
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
