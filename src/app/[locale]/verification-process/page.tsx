import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { AccreditationProcessCard } from "@/components/cards/AccreditationProcessCard";
import { PremiumVerificationServiceCtaPanel } from "@/components/sections/PremiumVerificationServiceCtaPanel";
import { AccreditationPageNav } from "@/components/accreditation/AccreditationPageNav";
import { CorporateDocumentsSection } from "@/components/accreditation/CorporateDocumentsSection";
import { cn } from "@/lib/cn";
import { resolveHeroWithSharedFallbacks } from "@/lib/resolvePublicImage";
import { editorialPhotoShellClass, heroEditorialMatteBgClass, visualImageInnerClipClass } from "@/lib/visualImage";
import {
  premiumCard,
  premiumHeroBackdrop,
  premiumSectionMuted,
  premiumTrustChip,
} from "@/lib/premiumUi";

const HERO_CANDIDATES = [
  "/assets/page-visuals/verification-process-hero.png",
  "/assets/page-visuals/verification-process-hero.webp",
  "/assets/page-visuals/verification-process-hero.jpg",
  "/assets/page-visuals/verification-process-hero.jpeg",
  "/assets/page-visuals/accreditation-hero.png",
  "/assets/page-visuals/accreditation-hero.webp",
  "/assets/page-visuals/accreditation-hero.jpg",
  "/assets/page-visuals/accreditation-hero.jpeg",
  "/assets/page-visuals/verification-process.png",
  "/assets/page-visuals/accreditation.png",
  "/assets/page-visuals/accreditation-process-hero.png",
] as const;

function resolveHeroSrc(): string {
  return resolveHeroWithSharedFallbacks(HERO_CANDIDATES);
}

type Principle = { title: string; description: string };

type PageCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroAlt: string;
  heroTrustChips: readonly string[];
  assuranceSectionTitle: string;
  assuranceLead: string;
  assurancePrinciples: readonly Principle[];
  processTitle: string;
  processBody: string;
  steps: readonly { title: string; description: string }[];
  governanceTitle: string;
  governanceBody: string;
  governanceBullets: readonly string[];
  isoTitle: string;
  isoBody: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaSecondary: string;
};

type RepresentationLink = { anchorId: string; name: string; blurb: string };

type PartnerSectionCopy = {
  sectionTitle: string;
  sectionBody: string;
  links: readonly RepresentationLink[];
  detailsCta: string;
};

const COPY: Record<Locale, PageCopy> = {
  en: {
    heroEyebrow: "Verification Process • Impartiality • ISO/IEC 17029",
    heroTitle: "Evidence-Based Verification And Technical Review Process",
    heroBody:
      "Meva Global structures verification, validation and certification-readiness work around clear scope, traceable evidence, impartial technical assessment and documented decision discipline. The objective is to establish a consistent and defensible assessment framework for external use.",
    heroAlt: "Technical verification workflow with documented evidence review and structured technical sign-off.",
    heroTrustChips: ["Traceability", "Impartial review", "Documentation discipline"],
    assuranceSectionTitle: "High-Level Technical Principles",
    assuranceLead:
      "Verification and conformity-assessment related activities are organised around impartiality, competence, confidentiality, documented decisions, and traceable evidence. Formal accreditation is assessed independently against scope, programme rules, and the relevant accreditation body; public statements on accreditation scope follow only once formally determined.",
    assurancePrinciples: [
      {
        title: "Impartial technical assessment",
        description:
          "Reviewer pathways reflect independence controls, conflict-awareness and competence-based assignment under structured oversight.",
      },
      {
        title: "Evidence-Based Review Discipline",
        description:
          "Evidence packs, working papers and records are reviewed for completeness, traceability and coherence with stated criteria.",
      },
      {
        title: "Defensible outputs for external use",
        description:
          "Findings, limitations and conclusions are proportionate to scope, risk and how information will be used externally.",
      },
    ],
    processTitle: "Documented Assessment Flow",
    processBody:
      "Each pathway moves from explicit criteria to documented outputs: evidence is organised, tested and recorded so material findings and conclusions remain aligned with scope and intended external scrutiny.",
    steps: [
      {
        title: "Scope And Criteria Clarification",
        description: "Confirm boundaries, criteria, intended use and evidence expectations in writing.",
      },
      {
        title: "Evidence And Documentation Review",
        description: "Assess completeness, traceability and the structure of the evidence pack and working papers.",
      },
      {
        title: "Technical Assessment",
        description: "Examine calculation logic, assumptions and material inputs; apply sampling where appropriate.",
      },
      {
        title: "Findings And Review Management",
        description: "Document findings clearly and manage structured closure on gaps and inconsistencies.",
      },
      {
        title: "Conclusion And Decision Structure",
        description: "Clarify conclusions and decision records, and define proportionate next actions based on scope and evidence status.",
      },
    ],
    governanceTitle: "Impartiality And Governance Controls",
    governanceBody:
      "Reviewer assignment follows competence and oversight rules; records support transparency without compromising confidentiality. Conflict-awareness, independence controls, and structured sign-off reduce arbitrary variation and strengthen repeatability across engagements.",
    governanceBullets: [
      "Impartiality and conflict-of-interest controls",
      "Competence-based reviewer assignment and oversight",
      "Confidential handling of client data and records",
      "Documented decisions and traceable evidence trails",
      "Outputs aligned to intended external use and scope",
    ],
    isoTitle: "ISO/IEC 17029 Accreditation Status",
    isoBody:
      "Meva Global structures its verification and conformity-assessment related processes in line with the ISO/IEC 17029 principles of impartiality, competence, confidentiality, documented decision-making and traceable evidence. Our ISO/IEC 17029 accreditation process is ongoing.",
    ctaEyebrow: "Engagement entry",
    ctaTitle: "Define scope, criteria, and evidence posture",
    ctaBody:
      "Share your reporting context, applicable standards or programme rules, and target timeline. We respond with a proportionate technical pathway and explicit evidence expectations.",
    ctaSecondary: "Explore Services",
  },
  tr: {
    heroEyebrow: "Doğrulama Süreci • Tarafsızlık • ISO/IEC 17029",
    heroTitle: "Kanıta Dayalı Doğrulama ve Teknik İnceleme Süreci",
    heroBody:
      "Meva Global; doğrulama, validasyon ve sertifikasyon hazırlığı çalışmalarını net kapsam, izlenebilir kanıt, tarafsız teknik değerlendirme ve belgelenmiş karar disiplini üzerine yapılandırır. Amaç; dış paydaş incelemesine uygun, tutarlı bir teknik değerlendirme çerçevesidir.",
    heroAlt: "Belgeli kanıt incelemesi ve yapılandırılmış teknik onay bağlamında doğrulama iş akışı.",
    heroTrustChips: ["İzlenebilirlik", "Tarafsız değerlendirme", "Dokümantasyon disiplini"],
    assuranceSectionTitle: "Üst Düzey Teknik İlkeler",
    assuranceLead:
      "Doğrulama ve uygunluk değerlendirmesiyle ilişkili faaliyetler; tarafsızlık, yetkinlik, gizlilik, belgelenmiş kararlar ve izlenebilir kanıt ekseninde düzenlenir. Resmî akreditasyon; kapsam, program kuralları ve yetkili akreditasyon kurumu önünde bağımsız olarak değerlendirilir; kamuya açık akreditasyon beyanı yalnızca kesinleşmiş resmî duruma göre yapılır.",
    assurancePrinciples: [
      {
        title: "Tarafsız teknik değerlendirme",
        description:
          "İnceleme yolu; bağımsızlık kontrolleri, çıkar farkındalığı ve gözetim altında yetkinliğe dayalı atama ile uyumludur.",
      },
      {
        title: "Kanıta dayalı inceleme disiplini",
        description:
          "Kanıt dosyası, çalışma notları ve kayıtlar; tamlık, izlenebilirlik ve tanımlı ölçütlerle tutarlılık açısından değerlendirilir.",
      },
      {
        title: "Dış kullanıma uygun teknik çıktılar",
        description:
          "Bulgular, sınırlamalar ve sonuçlar; kapsam, risk ve bilginin dış kullanım biçimiyle orantılı biçimde netleştirilir.",
      },
    ],
    processTitle: "Belgelendirilmiş Değerlendirme Akışı",
    processBody:
      "Akış; açık ölçütlerden belgelenmiş çıktılara ilerler: kanıt düzenlenir, sınanır ve kayda geçirilir; önemli bulgular ve sonuçlar kapsam ile dış denetim beklentisiyle uyumlu kalır.",
    steps: [
      {
        title: "Kapsam ve Kriterlerin Netleştirilmesi",
        description: "Sınırlar, kriterler, kullanım amacı ve kanıt beklentilerini yazılı olarak teyit ederiz.",
      },
      {
        title: "Kanıt ve Dokümantasyon İncelemesi",
        description: "Kanıt dosyasının, çalışma notlarının ve kayıtların tamlığını ve izlenebilirliğini değerlendiririz.",
      },
      {
        title: "Teknik Değerlendirme",
        description: "Hesaplama mantığı, varsayımlar ve kritik girdiler üzerinde inceleme; uygun olduğunda örnekleme uygularız.",
      },
      {
        title: "Bulgu ve Değerlendirme Yönetimi",
        description: "Bulguları net biçimde belgelendirir; açıkların yapılandırılmış biçimde kapatılmasını yürütürüz.",
      },
      {
        title: "Sonuç ve Karar Yapısının Netleştirilmesi",
        description: "Sonuç ve karar kayıtlarını netleştirir; kapsam ve kanıt durumuna göre orantılı kapanış ve takip çerçevesini tanımlarız.",
      },
    ],
    governanceTitle: "Tarafsızlık ve Yönetişim Kontrolleri",
    governanceBody:
      "Atamalar yetkinlik ve gözetim kurallarına göre yapılır; kayıtlar gizliliği koruyarak şeffaflığı destekler. Çıkar farkındalığı, bağımsızlık kontrolleri ve yapılandırılmış onay; işler arasında keyfi sapmayı azaltır ve tekrarlanabilirliği güçlendirir.",
    governanceBullets: [
      "Tarafsızlık ve çıkar çatışması önlemleri",
      "Yetkinliğe dayalı atama ve teknik gözetim",
      "Müşteri verisi ve kayıtların gizli yönetimi",
      "Belgelenmiş kararlar ve izlenebilir kanıt izi",
      "Kapsam ve dış kullanım amacına uygun çıktı yapısı",
    ],
    isoTitle: "ISO/IEC 17029 Akreditasyon Durumu",
    isoBody:
      "Meva Global, doğrulama ve uygunluk değerlendirme süreçlerini ISO/IEC 17029’un tarafsızlık, yetkinlik, gizlilik, belgelenmiş karar alma ve izlenebilir kanıt ilkeleriyle uyumlu biçimde yapılandırmaktadır. ISO/IEC 17029 akreditasyon çalışmalarımız devam etmektedir.",
    ctaEyebrow: "Ön görüşme",
    ctaTitle: "Kapsam, ölçütler ve kanıt yapısını tanımlayın",
    ctaBody:
      "Raporlama bağlamınızı, uygulanabilir standart veya program kurallarını ve hedef zamanlamayı iletin. Orantılı teknik yol ve açık kanıt beklentileriyle dönüş yaparız.",
    ctaSecondary: "Hizmetleri İncele",
  },
  nl: {
    heroEyebrow: "Verificatieproces • onpartijdigheid • ISO/IEC 17029",
    heroTitle: "Op bewijs gebaseerde verificatie en technische beoordeling",
    heroBody:
      "Meva Global structureert verificatie, validatie en certificeringsvoorbereiding rond een duidelijke scope, traceerbaar bewijs, onpartijdige technische beoordeling en gedocumenteerde besluitvorming. Het doel is een consistent en verdedigbaar beoordelingskader voor extern gebruik.",
    heroAlt: "Verificatieworkflow met gedocumenteerde bewijsbeoordeling en gestructureerde technische vaststelling.",
    heroTrustChips: ["Traceerbaarheid", "Onpartijdige beoordeling", "Procesdiscipline"],
    assuranceSectionTitle: "Technische Principes Op Hoofdlijnen",
    assuranceLead:
      "Activiteiten rond verificatie en conformiteitsbeoordeling worden georganiseerd rond onpartijdigheid, competentie, vertrouwelijkheid, gedocumenteerde besluiten en traceerbaar bewijs. Formele accreditatie wordt onafhankelijk beoordeeld tegen scope, programmaregels en de bevoegde accreditatie-instelling; publieke accreditatie-informatie volgt pas na een vaststaande formele status.",
    assurancePrinciples: [
      {
        title: "Onpartijdige technische beoordeling",
        description:
          "Reviewroutes sluiten aan bij controles voor onafhankelijkheid, belangenbewustzijn en deskundige toewijzing onder toezicht.",
      },
      {
        title: "Op bewijs gebaseerde technische beoordeling",
        description:
          "Bewijsdossiers en werkdocumenten worden beoordeeld op volledigheid, traceerbaarheid en samenhang met de vastgestelde criteria.",
      },
      {
        title: "Verdedigbare output voor extern gebruik",
        description:
          "Bevindingen, beperkingen en conclusies blijven proportioneel aan scope, risico en het beoogde externe gebruik.",
      },
    ],
    processTitle: "Gedocumenteerde beoordelingsstroom",
    processBody:
      "Het traject loopt van expliciete criteria naar gedocumenteerde output: bewijs wordt geordend, getoetst en vastgelegd zodat materiële bevindingen en conclusies aansluiten op scope en beoogde externe toetsing.",
    steps: [
      {
        title: "Verduidelijking van scope en criteria",
        description: "Reikwijdte, criteria, beoogd gebruik en bewijsverwachtingen schriftelijk vastleggen.",
      },
      {
        title: "Beoordeling van bewijs en documentatie",
        description: "Volledigheid, traceerbaarheid en dossierstructuur van bewijs en werkdocumenten toetsen.",
      },
      {
        title: "Technische beoordeling",
        description: "Berekeningslogica, aannames en materiële inputs toetsen; waar passend steekproeven toepassen.",
      },
      {
        title: "Beheer van bevindingen en review",
        description: "Bevindingen helder vastleggen en gestructureerde afronding van hiaten en inconsistenties begeleiden.",
      },
      {
        title: "Conclusie en besluitvormingsstructuur",
        description: "Conclusies en besluitdocumentatie scherp maken en proportionele afrondingsacties afstemmen op scope en bewijsstatus.",
      },
    ],
    governanceTitle: "Onpartijdigheid en governancekaders",
    governanceBody:
      "Toewijzing volgt competentie- en toezichtregels; registraties ondersteunen transparantie zonder vertrouwelijkheid te ondermijnen. Bewustzijn van belangen, onafhankelijkheidscontroles en gestructureerde vaststelling verminderen willekeurige variatie en versterken herhaalbaarheid.",
    governanceBullets: [
      "Onpartijdigheid en maatregelen tegen belangenconflicten",
      "Toewijzing op basis van competentie en technisch toezicht",
      "Vertrouwelijke omgang met klantdata en registraties",
      "Gedocumenteerde besluiten en traceerbare bewijsvoering",
      "Output passend bij scope en beoogd extern gebruik",
    ],
    isoTitle: "ISO/IEC 17029-accreditatiestatus",
    isoBody:
      "Meva Global structureert verificatie- en conformiteitsbeoordelingsprocessen in lijn met de ISO/IEC 17029-principes voor onpartijdigheid, competentie, vertrouwelijkheid, gedocumenteerde besluitvorming en traceerbaar bewijs. Ons ISO/IEC 17029-accreditatietraject loopt.",
    ctaEyebrow: "Vooroverleg",
    ctaTitle: "Deel Scope En Documentatiestatus",
    ctaBody:
      "Stuur uw scope, relevant kader en planning. Wij reageren met een evenredig reviewpad, bewijsverwachtingen en een helder leveringsplan.",
    ctaSecondary: "Bekijk diensten",
  },
};

const PARTNER_SECTION: Record<Locale, PartnerSectionCopy> = {
  en: {
    sectionTitle: "Representations And Cooperation Channels",
    sectionBody:
      "Our representation and cooperation channels support local communication and documentation flow while technical assessment and decision-making remain governed by Meva Global’s defined processes.",
    links: [
      {
        anchorId: "emicert",
        name: "EmiCert",
        blurb: "Cooperation channel for greenhouse gas verification and emissions-reporting coordination.",
      },
      {
        anchorId: "cetizion-verifica",
        name: "Cetizion Verifica",
        blurb: "Cooperation channel aligned with evidence discipline, technical integrity and process consistency.",
      },
      {
        anchorId: "anka-sustainability",
        name: "ANKA Sustainability",
        blurb: "Strategic sustainability advisory and digital solutions aligned with Meva engagement pathways.",
      },
    ],
    detailsCta: "View Representation Details",
  },
  tr: {
    sectionTitle: "Temsilciliklerimiz ve İş Birliği Kanallarımız",
    sectionBody:
      "Yerel iletişim ve dokümantasyon akışını kolaylaştıran temsilcilik ve iş birliği kanallarımız, teknik değerlendirme ve karar süreçlerinden ayrı bir koordinasyon yapısı olarak konumlandırılır.",
    links: [
      {
        anchorId: "emicert",
        name: "EmiCert",
        blurb: "Sera gazı doğrulaması ve emisyon raporlaması süreçlerinde iş birliği ve koordinasyon kanalı.",
      },
      {
        anchorId: "cetizion-verifica",
        name: "Cetizion Verifica",
        blurb: "Kanıt disiplini, teknik bütünlük ve süreç tutumuyla uyumlu temsil ve iş birliği ilişkisi.",
      },
      {
        anchorId: "anka-sustainability",
        name: "ANKA Sustainability",
        blurb: "Meva görev yollarıyla uyumlu sürdürülebilirlik danışmanlığı ve dijital çözüm iş birliği.",
      },
    ],
    detailsCta: "Temsilcilik Detaylarını İncele",
  },
  nl: {
    sectionTitle: "Vertegenwoordigingen en samenwerkingskanalen",
    sectionBody:
      "Onze vertegenwoordigings- en samenwerkingskanalen ondersteunen lokale communicatie en documentatiestroom, terwijl technische beoordeling en besluitvorming binnen de vastgelegde processen van Meva Global blijven.",
    links: [
      {
        anchorId: "emicert",
        name: "EmiCert",
        blurb: "Samenwerkingskanaal voor broeikasgasverificatie en coördinatie rond emissierapportage.",
      },
      {
        anchorId: "cetizion-verifica",
        name: "Cetizion Verifica",
        blurb: "Samenwerking met nadruk op bewijsdiscipline, technische integriteit en procesconsistentie.",
      },
      {
        anchorId: "anka-sustainability",
        name: "ANKA Sustainability",
        blurb: "Strategisch duurzaamheidsadvies en digitale ondersteuning in lijn met Meva-opdrachtroutes.",
      },
    ],
    detailsCta: "Bekijk de vertegenwoordigingsdetails",
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
  const copy = COPY[l];
  const partner = PARTNER_SECTION[l];

  const steps = copy.steps;
  const heroSrc = resolveHeroSrc();
  const heroIsSvgFallback = heroSrc.endsWith(".svg");

  return (
    <>
      <AccreditationPageNav dict={dict} />

      <section
        id="accreditation-hero"
        className={cn("scroll-mt-[4.5rem] border-b border-[color:var(--border-soft)]", premiumHeroBackdrop)}
      >
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-11 xl:gap-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
                {copy.heroEyebrow}
              </p>
              <h1 className="mt-4 text-[2rem] font-semibold leading-[1.06] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.35rem] lg:text-[2.55rem]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-[42rem] text-[0.9375rem] leading-[1.82] text-[color:var(--ink-dark)]/92 sm:text-[1.0625rem] sm:leading-[1.78]">
                {copy.heroBody}
              </p>
              <ul className="mt-7 flex list-none flex-wrap gap-2 p-0 sm:mt-8 sm:gap-2.5">
                {copy.heroTrustChips.map((label) => (
                  <li key={label} className={premiumTrustChip}>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn("min-w-0 lg:col-span-5 lg:pl-2")}>
              <div
                className={cn(
                  editorialPhotoShellClass,
                  "min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]",
                )}
              >
                <div
                  className={cn(
                    visualImageInnerClipClass,
                    heroIsSvgFallback ? heroEditorialMatteBgClass : "bg-transparent",
                  )}
                >
                  <Image
                    src={heroSrc}
                    alt={heroIsSvgFallback ? "" : copy.heroAlt}
                    fill
                    priority
                    unoptimized={heroIsSvgFallback}
                    className={
                      heroIsSvgFallback
                        ? "object-contain object-center p-[min(12%,3rem)] opacity-[0.18]"
                        : "object-cover object-[50%_42%]"
                    }
                    sizes="(max-width: 1023px) 100vw, 520px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="assurance-principles" className="scroll-mt-[4.5rem] border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem] lg:text-[1.875rem]">
              {copy.assuranceSectionTitle}
            </h2>
            <p className="mt-4 max-w-[52rem] text-sm leading-[1.82] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.76]">
              {copy.assuranceLead}
            </p>
            <div className="mt-9 grid gap-6 lg:grid-cols-3 lg:gap-7">
              {copy.assurancePrinciples.map((p) => (
                <article
                  key={p.title}
                  className={cn(
                    premiumCard,
                    "flex min-h-0 flex-col p-7 sm:p-8",
                  )}
                >
                  <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.125rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.74] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                    {p.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="verification-process-section" className={cn("scroll-mt-[4.5rem]", premiumSectionMuted)}>
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem] lg:text-[1.875rem]">
                {copy.processTitle}
              </h2>
              <p className="mt-4 text-sm leading-[1.82] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.76]">
                {copy.processBody}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {steps.map((s, i) => (
                <AccreditationProcessCard key={s.title} index={i + 1} title={s.title} description={s.description} />
              ))}
            </div>

            <div
              className={cn(
                "mt-12 rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-primary)_14%,var(--border-soft))]",
                "bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_6%,transparent)] sm:p-10 lg:p-11",
              )}
            >
              <h3 className="text-[1.35rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.5rem]">
                {copy.governanceTitle}
              </h3>
              <p className="mt-4 max-w-[48rem] text-sm leading-[1.82] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.76]">
                {copy.governanceBody}
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
                {copy.governanceBullets.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-[color:var(--ink-dark)]/88 sm:text-[0.9375rem]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "mt-8 border-l-4 border-[color:var(--brand-primary)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_42%,white)]",
                "px-8 py-8 sm:px-10 sm:py-9",
              )}
            >
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-xl">
                {copy.isoTitle}
              </h3>
              <p className="mt-4 max-w-[52rem] text-sm leading-[1.82] text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-[1.76]">
                {copy.isoBody}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-soft)] bg-white py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tight text-[color:var(--ink-dark)] sm:text-[1.75rem] lg:text-[1.875rem]">
                {partner.sectionTitle}
              </h2>
              <p className="mt-4 text-sm leading-[1.82] text-[color:var(--text-muted)] sm:text-[1.0625rem] sm:leading-[1.76]">
                {partner.sectionBody}
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
              {partner.links.map((item) => (
                <Link
                  key={item.anchorId}
                  href={`/${l}/representations#${item.anchorId}`}
                  className={cn(
                    "group flex min-h-0 flex-col rounded-[1.125rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_22%,var(--border-soft))]",
                    "bg-gradient-to-br from-white via-[#fafcfd] to-[#f4f9fc] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-primary)_8%,transparent)]",
                    "transition-[box-shadow,transform,border-color] duration-200 hover:border-[color:color-mix(in_oklab,var(--brand-primary)_22%,var(--border-soft))]",
                    "hover:shadow-[0_18px_42px_-24px_rgba(29,37,47,0.2)] motion-safe:hover:-translate-y-[1px]",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--text-muted)]">{item.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-primary)]">
                    {partner.detailsCta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CorporateDocumentsSection locale={l} dict={dict} />

      <section className="border-t border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_35%,white)] pb-10 pt-8 sm:pb-12 sm:pt-10">
        <Container>
          <div className={cn("mx-auto max-w-7xl")}>
            <PremiumVerificationServiceCtaPanel
              locale={l}
              ctas={dict.ctas}
              cta={{
                title: copy.ctaTitle,
                body: copy.ctaBody,
                primaryButton: dict.nav.contact,
                secondaryButton: copy.ctaSecondary,
              }}
              eyebrowOverride={copy.ctaEyebrow}
              omitTertiary
              taglineTopBar={dict.brand.taglineTopBar}
              compact={false}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
