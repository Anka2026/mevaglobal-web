import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PremiumHeroCoverImage } from "@/components/visual/PremiumHeroCoverImage";
import { RepresentationsCards } from "./RepresentationsCards";
import { getRepresentationsPageBundle } from "./representations-data";
import { cn } from "@/lib/cn";

const REPRESENTATIONS_HERO_SRC = "/assets/page-visuals/representations-hero.png";

function resolveLogoSrc(stated: string): string {
  return stated.startsWith("/") ? stated : REPRESENTATIONS_HERO_SRC;
}

type PageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImageAlt: string;
  roleTitle: string;
  repsCanTitle: string;
  repsCan: readonly string[];
  mevaControlsTitle: string;
  mevaControls: readonly string[];
  workflowTitle: string;
  workflow: readonly { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
};

const COPY: Record<Locale, PageCopy> = {
  en: {
    eyebrow: "Representations • Cooperation network • Technical coordination",
    title: "Local Representation, International Technical Coordination",
    intro:
      "Our representation structure supports local communication, documentation coordination and market access. Technical assessment, decision discipline and formal review pathways sit with Meva Global’s central organisation—not with advisory-style front offices.",
    heroImageAlt:
      "Corporate desk illustrating international representation, local access pins on a world map and coordinated technical engagement.",
    roleTitle: "Roles and responsibilities",
    repsCanTitle: "Role of the representation channel",
    repsCan: [
      "First contact and preliminary routing",
      "Local coordination and scheduling support",
      "Document transmission and follow-through",
      "Market and communication facilitation",
    ],
    mevaControlsTitle: "Meva Global’s central role",
    mevaControls: [
      "Technical scope assessment",
      "Clarity of methodology and criteria",
      "Decision logic and outputs",
      "Impartiality, independence and conflict-of-interest controls",
      "Formal outputs and sign-off pathways where applicable",
    ],
    workflowTitle: "Representation model",
    workflow: [
      {
        title: "Initial contact",
        body: "The local representative receives the first enquiry and clarifies the framing of the request.",
      },
      {
        title: "Scope and suitability",
        body: "Meva Global assesses technical scope, the applicable framework and the expected outputs.",
      },
      {
        title: "Documentation coordination",
        body: "Document flow, information completion and local coordination proceed in a planned manner.",
      },
      {
        title: "Central technical assessment",
        body: "Technical review, decision logic and outputs are managed under Meva Global’s central processes.",
      },
    ],
    ctaTitle: "Further information on our representation network",
    ctaBody:
      "Contact us for more detail on local access, the coordination model and how cooperation is structured.",
    ctaPrimary: "Contact",
  },
  tr: {
    eyebrow: "Temsilcilik • Yerel koordinasyon • Merkezi teknik inceleme",
    title: "Yerel Temsil, Uluslararası Teknik Koordinasyon",
    intro:
      "Meva Global’in temsilcilik yapısı; yerel iletişimi, dokümantasyon koordinasyonunu ve pazar erişimini destekler. Teknik değerlendirme, karar disiplini ve resmi inceleme yaklaşımı ise Meva Global’in merkez yapısı altında yürütülür.",
    heroImageAlt:
      "Temsilcilik ağı ve yerel-ulusal koordinasyon temalı kurumsal görsel; dünya haritası ve teknik koordinasyon vurgusu.",
    roleTitle: "Rol ve Sorumluluk Çerçevesi",
    repsCanTitle: "Temsilcilik Kanalının Rolü",
    repsCan: [
      "İlk iletişim ve ön yönlendirme",
      "Yerel koordinasyon ve planlama desteği",
      "Doküman iletimi ve takip akışı",
      "Pazar ve iletişim kolaylaştırıcılığı",
    ],
    mevaControlsTitle: "Meva Global’in Merkezi Rolü",
    mevaControls: [
      "Teknik kapsam değerlendirmesi",
      "Yöntem ve kriter seti netliği",
      "Karar mantığı ve çıktılar",
      "Tarafsızlık, bağımsızlık ve çıkar çatışması kontrolleri",
      "Uygulanabilir olduğunda resmi çıktı ve imza süreçleri",
    ],
    workflowTitle: "Temsilcilik Modelimiz",
    workflow: [
      {
        title: "İlk Temas",
        body: "Yerel temsilci ilk iletişimi alır ve talebin çerçevesini netleştirir.",
      },
      {
        title: "Kapsam ve Uygunluk",
        body: "Meva Global teknik kapsamı, uygulanabilir çerçeveyi ve beklenen çıktıyı değerlendirir.",
      },
      {
        title: "Dokümantasyon Koordinasyonu",
        body: "Doküman akışı, bilgi tamamlama ve yerel koordinasyon planlı biçimde yürütülür.",
      },
      {
        title: "Merkezi Teknik Değerlendirme",
        body: "Teknik inceleme, karar mantığı ve çıktılar Meva Global’in merkezi süreçleri altında yönetilir.",
      },
    ],
    ctaTitle: "Temsilcilik Ağımız Hakkında Bilgi Alın",
    ctaBody:
      "Yerel erişim, koordinasyon modeli ve iş birliği yapımız hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz.",
    ctaPrimary: "İletişim",
  },
  nl: {
    eyebrow: "Vertegenwoordigingen • Samenwerkingsnetwerk • Technische coördinatie",
    title: "Lokale vertegenwoordiging, internationale technische coördinatie",
    intro:
      "Onze vertegenwoordigingsstructuur ondersteunt lokale communicatie, documentatiecoördinatie en markttoegang. Technische beoordeling, besluitdiscipline en formele review zijn geborgd in het centrale organisatieonderdeel van Meva Global.",
    heroImageAlt:
      "Professioneel kantoorbeeld met wereldkaart en nadruk op vertegenwoordigingsnetwerk en lokale coördinatie.",
    roleTitle: "Rollen en verantwoordelijkheden",
    repsCanTitle: "Rol van het vertegenwoordigingskanaal",
    repsCan: [
      "Eerste contact en voorafgaande routing",
      "Lokale coördinatie en planningsondersteuning",
      "Documentoverdracht en vervolg",
      "Facilitatie van markt en communicatie",
    ],
    mevaControlsTitle: "Centrale rol van Meva Global",
    mevaControls: [
      "Technische scopebeoordeling",
      "Heldere methodiek en criteria",
      "Beslislogica en outputs",
      "Onpartijdigheid, onafhankelijkheid en conflictbeheersing",
      "Formele outputs en vaststellingsroutes waar van toepassing",
    ],
    workflowTitle: "Model voor vertegenwoordiging",
    workflow: [
      {
        title: "Eerste contact",
        body: "De lokale vertegenwoordiger ontvangt de eerste aanvraag en scherpt het kader aan.",
      },
      {
        title: "Scope en geschiktheid",
        body: "Meva Global beoordeelt technische scope, het toepasselijke kader en de verwachte outputs.",
      },
      {
        title: "Documentatiecoördinatie",
        body: "Documentstromen, aanvullende informatie en lokale afstemming worden gepland uitgevoerd.",
      },
      {
        title: "Centrale technische beoordeling",
        body: "Technische review, beslislogica en outputs worden centraal onder de processen van Meva Global beheerd.",
      },
    ],
    ctaTitle: "Meer weten over ons vertegenwoordigingsnetwerk",
    ctaBody:
      "Vraag toelichting over lokaal contact, coördinatiemodel en technische aansluiting op de centrale beoordelingsstructuur.",
    ctaPrimary: "Contact",
  },
};

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
  const copy = COPY[l];

  const safeBundle = {
    ...bundle,
    representations: bundle.representations.map((e) => {
      const logoSrc = resolveLogoSrc(e.logoSrc);
      return { ...e, logoSrc, logoIsPlaceholder: !e.logoSrc.startsWith("/") };
    }),
    partners: bundle.partners.map((e) => {
      const logoSrc = resolveLogoSrc(e.logoSrc);
      return { ...e, logoSrc, logoIsPlaceholder: !e.logoSrc.startsWith("/") };
    }),
  };

  const networkItems = [...safeBundle.representations, ...safeBundle.partners];

  const sectionHeadingClass =
    "text-[1.45rem] font-semibold leading-[1.18] tracking-tight text-[color:var(--ink-dark)] sm:text-[1.6rem] lg:text-[1.65rem]";

  return (
    <>
      <PageHeader
        denseHero
        prominentVisual
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.intro}
        visual={
          <PremiumHeroCoverImage src={REPRESENTATIONS_HERO_SRC} alt={copy.heroImageAlt} priority className="w-full" />
        }
      />

      <Container className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <section className="border-b border-[color:var(--border-soft)] pb-12 sm:pb-14 lg:pb-16">
            <RepresentationsCards
              title={safeBundle.representationsTitle}
              body={safeBundle.representationsBody}
              items={networkItems}
              ui={safeBundle.ui}
            />
          </section>

          <section className="border-b border-[color:var(--border-soft)] py-12 sm:py-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-4">
                <h2 className={sectionHeadingClass}>{copy.workflowTitle}</h2>
              </div>
              <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:gap-6">
                {copy.workflow.map((s, i) => (
                  <li
                    key={s.title}
                    className="flex gap-4 rounded-2xl border border-[color:var(--border-soft)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_55%,white)] text-sm font-semibold text-[color:var(--brand-primary)] ring-1 ring-[color:var(--border-soft)]">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.9375rem] font-semibold text-[color:var(--ink-dark)] sm:text-base">{s.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-b border-[color:var(--border-soft)] py-12 sm:py-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-4">
                <h2 className={sectionHeadingClass}>{copy.roleTitle}</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:gap-7">
                <div className="rounded-2xl border border-[color:var(--border-soft)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-7 lg:p-8">
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                    {copy.repsCanTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                    {copy.repsCan.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[color:var(--border-soft)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-7 lg:p-8">
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                    {copy.mevaControlsTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                    {copy.mevaControls.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-12 sm:pt-14 lg:pt-16">
            <div
              className={cn(
                "rounded-[1.0625rem] border border-[color:var(--border-soft)] bg-white p-7 shadow-[var(--shadow-card)] sm:p-8 lg:p-9",
                "ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_6%,transparent)]",
              )}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="min-w-0 max-w-2xl">
                  <h2 className="text-[1.0625rem] font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-lg">{copy.ctaTitle}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-relaxed">
                    {copy.ctaBody}
                  </p>
                </div>
                <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
                  <ButtonLink href={`/${l}/contact`} variant="primary" size="md" className="w-full justify-center sm:w-auto lg:min-w-[10.5rem]">
                    {copy.ctaPrimary}
                  </ButtonLink>
                  <ButtonLink
                    href={`/${l}/verification-services`}
                    variant="secondary"
                    size="md"
                    className="w-full justify-center sm:w-auto lg:min-w-[10.5rem]"
                  >
                    {dict.ctas.exploreServices}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
