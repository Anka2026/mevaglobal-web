import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BRAND_POSITIONING_LINE } from "@/i18n/brandPositioning";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { AboutCorporateSection } from "@/components/about/AboutCorporateSection";
import { AboutDifferentiatorsSection } from "@/components/about/AboutDifferentiatorsSection";
import { AboutLeadershipSection } from "@/components/about/AboutLeadershipSection";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { resolveHeroWithSharedFallbacks } from "@/lib/resolvePublicImage";
import { visualImageClipClass } from "@/lib/visualImage";
import {
  premiumAboutMotif,
  premiumEditorialHeroSurface,
  premiumEyebrowRow,
  premiumEyebrowRule,
  premiumGoldTopLine,
  premiumHeroVisualPanel,
  premiumTrustChip,
} from "@/lib/premiumUi";

/** Candidate order for deployment; first path is the canonical marketing asset. */
const ABOUT_RASTER_CANDIDATES = [
  "/assets/page-visuals/about-hero.png",
  "/assets/page-visuals/about-hero.webp",
  "/assets/page-visuals/about-hero.jpg",
  "/assets/page-visuals/about-hero.jpeg",
  "/assets/page-visuals/about.png",
  "/assets/page-visuals/about.webp",
  "/assets/page-visuals/about.jpg",
  "/assets/page-visuals/about.jpeg",
] as const;

function resolveAboutHeroRasterSrc(): string {
  return resolveHeroWithSharedFallbacks(ABOUT_RASTER_CANDIDATES);
}

type AboutCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  trust: readonly [string, string, string];
  whyExistsTitle: string;
  whyExistsBody: string;
  positioningTitle: string;
  positioningBody: string;
  missionTitle: string;
  missionBody: string;
  whoTitle: string;
  whoBody: string;
  howTitle: string;
  howBody: string;
  assuranceHeading: string;
  assuranceBody: string;
  founderPerspectiveTitle: string;
  founderPerspectiveBody: string;
  corporateEyebrow: string;
  corporateTitle: string;
  differentiatorsTitle: string;
  valuesEyebrow: string;
  values: readonly [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];
  ctaTitle: string;
  ctaIntro: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const ABOUT_COPY: Record<Locale, AboutCopy> = {
  en: {
    heroEyebrow: BRAND_POSITIONING_LINE.en,
    heroTitle: "Independent Technical Review For Declarations And Technical Files",
    heroSubtitle:
      "Meva Global Certification B.V. provides independent technical review support for verification-related work, certification readiness, and technical file evaluation processes. Based in the Netherlands, we operate with a disciplined service approach built on traceability, impartiality, and clear technical scope.",
    trust: ["Netherlands Based", "Independent Technical Review", "International Regulatory Focus"],
    corporateEyebrow: "Corporate structure",
    corporateTitle: "Independent verification and technical review",
    differentiatorsTitle: "What defines our work",
    whyExistsTitle: "Why Meva Global",
    whyExistsBody:
      "Organisations do not only need calculations for sustainability, product and regulatory disclosures; they need information that is traceable, auditable and defensible in front of external stakeholders. Meva Global was structured to respond through impartial technical review, documentation discipline and validation aligned with commonly referenced standards.",
    positioningTitle: "How We Position Ourselves",
    positioningBody:
      "Meva Global operates as an independent verification organisation based in the Netherlands, with an internationally oriented delivery posture. Engagements are built around disciplined technical review, traceable evidence and impartial judgement—aligned with commonly referenced standards and disclosure contexts, without claiming statutory determinations or approvals the organisation does not hold.",
    missionTitle: "Our Working Philosophy",
    missionBody:
      "Our mission is to strengthen the traceability and defensibility of sustainability, product and regulatory disclosures through impartial technical review and disciplined documentation. Based in the Netherlands, we maintain an internationally oriented service posture suited to cross-border reporting and multi-stakeholder scrutiny.",
    whoTitle: "International Structure",
    whoBody:
      "We are a Netherlands-based organisation delivering independent verification and technical assessment services for organisations operating under evolving EU and international reporting expectations. Our remit spans greenhouse gas and environmental data, product-level declarations, supply-chain evidence structures and broader sustainability disclosure quality—always with disciplined scope, documented reasoning and impartial review discipline.",
    howTitle: "Technical Approach",
    howBody:
      "Engagements are structured around clear criteria, traceable evidence, sampling logic where applicable, and documentation that can withstand scrutiny from regulators, buyers and verification stakeholders. We emphasise methodological clarity, audit-ready records and proportionate depth—without promising outcomes that sit outside an agreed scope.",
    assuranceHeading: "Evidence Discipline And Independent Technical Review",
    assuranceBody:
      "Meva Global combines independent technical review discipline, regulatory interpretation where relevant to the engagement, and structured documentation practices so organisations can prepare verification files and certification-oriented dossiers that withstand scrutiny. Evidence quality, consistency of calculation logic and disclosure language aligned to intended use come before cosmetic narrative polish.",
    founderPerspectiveTitle: "Founder-Led Perspective",
    founderPerspectiveBody:
      "Meva Global’s approach is based on the view that technical accuracy creates value only when supported by documented evidence, clear scope, independent judgement and consistent process. For this reason, we focus not only on the outcome, but also on how that outcome is produced and how it can stand up to external use.",
    valuesEyebrow: "Operating Principles",
    values: [
      {
        title: "Impartiality And Professional Judgement",
        body: "Independence controls, conflict awareness and documented technical decisions—proportionate to scope and intended external use.",
      },
      {
        title: "Documentation Discipline",
        body: "Evidence trails, disciplined records and repeatable review steps that support transparency and audit readiness.",
      },
      {
        title: "Regulatory Readiness",
        body: "Structured alignment with commonly referenced frameworks and disclosure contexts—without overstating accreditation status or approvals.",
      },
    ],
    ctaTitle: "Discuss Scope And Timing",
    ctaIntro:
      "Share your standards context, programme boundaries and reporting objectives. We respond with a structured view of evidence expectations and a proportionate delivery timeline.",
    ctaPrimary: "Request a Technical Meeting",
    ctaSecondary: "Explore Services",
  },
  tr: {
    heroEyebrow: BRAND_POSITIONING_LINE.tr,
    heroTitle: "Beyanlar Ve Teknik Dosyalar İçin Bağımsız Teknik İnceleme",
    heroSubtitle:
      "Meva Global Certification B.V.; disiplinli doğrulama çalışmaları, sertifikasyon hazırlığı ve teknik dosya değerlendirme süreçlerinde kuruluşlara bağımsız teknik inceleme desteği sunar. Hollanda merkezli yapımızla; izlenebilirlik, tarafsızlık ve net teknik kapsam ilkeleriyle uluslararası beklentilere uyumlu bir hizmet yaklaşımı yürütürüz.",
    trust: ["Hollanda Merkezi", "Bağımsız Teknik İnceleme", "Uluslararası Düzenleyici Odak"],
    corporateEyebrow: "Kurumsal yapı",
    corporateTitle: "Bağımsız doğrulama ve teknik inceleme modeli",
    differentiatorsTitle: "Meva Global'i ayıran ilkeler",
    whyExistsTitle: "Neden Meva Global?",
    whyExistsBody:
      "Kuruluşların sürdürülebilirlik, ürün beyanı ve regülasyon raporlamasında temel ihtiyaç yalnızca hesaplama yapmak değildir; teknik dosya ve beyanların izlenebilir, denetlenebilir ve dış denetime dayanıklı olması gerekir. Meva Global; tarafsız teknik inceleme, dokümantasyon disiplini ve uluslararası çerçevelere uyumlu bağımsız değerlendirme ile bu yapılandırmayı sürdürür.",
    positioningTitle: "Nasıl konumlanıyoruz?",
    positioningBody:
      "Meva Global; Hollanda merkezli, uluslararası teslim duruşuna sahip bağımsız bir doğrulama ve teknik inceleme kuruluşudur. Görevler; disiplinli teknik inceleme, izlenebilir kanıt ve tarafsız muhakeme ekseninde yapılandırılır—yaygın başvuru standartları ve açıklama bağlamlarıyla uyumlu biçimde, kuruluşun kontrolü dışındaki mevzuî kesinlik veya onay iddiasında bulunmadan.",
    missionTitle: "Çalışma felsefemiz",
    missionBody:
      "Misyonumuz; sürdürülebilirlik, ürün ve regülasyon raporlamasında izlenebilir kanıt yapısı ve teknik dosya tutarlılığını tarafsız teknik inceleme ve dokümantasyon disiplini ile güçlendirmektir. Hollanda merkezli yapımızla sınır ötesi raporlama ve çok paydaşlı teknik incelemeye uygun uluslararası bir teslim modeli yürütürüz.",
    whoTitle: "Uluslararası yapı",
    whoBody:
      "Avrupa Birliği ve uluslararası raporlama beklentileri altında faaliyet gösteren kuruluşlara bağımsız doğrulama ve teknik inceleme sunan Hollanda merkezli bir kuruluşuz. Çalışma alanımız sera gazı ve çevresel veriler, ürün düzeyinde beyanlar, tedarik zinciri kanıt yapıları ve sürdürülebilirlik açıklama kalitesini kapsar; ölçülü kapsam, belgeli gerekçe ve tarafsız inceleme disiplini ile.",
    howTitle: "Nasıl çalışırız",
    howBody:
      "Görevler; net ölçütler, izlenebilir kanıt, gerektiğinde örnekleme mantığı ve düzenleyici, alıcı ve teknik inceleme kullanıcıları tarafından sorgulanabilecek kayıtlar üzerinden yapılandırılır. Metodolojik netlik, denetime hazır dokümantasyon ve ölçülü derinlik önceliklidir; kapsamın dışında sonuç vaadi verilmez.",
    assuranceHeading: "Kanıt Disiplinine Dayalı Bağımsız Teknik İnceleme",
    assuranceBody:
      "Meva Global; güvenilir doğrulama süreçleri ve sertifikasyon hazırlığı için teknik inceleme disiplini, göreve bağlı regülasyon yorumu ve yapılandırılmış dokümantasyon pratiklerini bir araya getirir. Kanıt kalitesi, hesaplama mantığında tutarlılık ve kullanım amacına uygun beyan dili önceliklidir.",
    founderPerspectiveTitle: "Kurucu Bakış Açısı",
    founderPerspectiveBody:
      "Meva Global’in yaklaşımı, teknik doğruluğun ancak belgelenmiş kanıt, açık kapsam, bağımsız muhakeme ve tutarlı süreçlerle değer kazandığı anlayışına dayanır. Bu nedenle her çalışmada yalnızca sonuca değil, sonucun nasıl üretildiğine ve dış kullanımda nasıl savunulacağına odaklanırız.",
    valuesEyebrow: "Çalışma ilkelerimiz",
    values: [
      {
        title: "Tarafsızlık ve mesleki muhakeme",
        body: "Bağımsızlık önlemleri, çıkar farkındalığı ve belgelenmiş teknik kararlar—kapsam ve amaçlanan dış kullanıma orantılı.",
      },
      {
        title: "Dokümantasyon disiplini",
        body: "Şeffaflığı ve denetim hazırlığını güçlendiren kanıt izleri, düzenli kayıtlar ve tekrarlanabilir inceleme adımları.",
      },
      {
        title: "Regülasyon hazırlığı",
        body: "Yaygın başvuru çerçeveleri ve açıklama bağlamlarıyla yapılandırılmış uyum—akreditasyon statüsü veya onay iddiasını abartmadan.",
      },
    ],
    ctaTitle: "Kapsam ve zamanlamayı görüşün",
    ctaIntro:
      "Standart bağlamınızı, program sınırlarınızı ve raporlama hedeflerinizi paylaşın; kanıt beklentileri ve gerçekçi zaman çizelgesi için yapılandırılmış bir görüş sunarız.",
    ctaPrimary: "Teknik Görüşme Talep Et",
    ctaSecondary: "Hizmetleri İncele",
  },
  nl: {
    heroEyebrow: BRAND_POSITIONING_LINE.nl,
    heroTitle: "Onafhankelijke Technische Beoordeling Voor Verklaringen En Technische Dossiers",
    heroSubtitle:
      "Meva Global Certification B.V. biedt onafhankelijke technische beoordelingsondersteuning voor verificatiegerelateerde werkzaamheden, certificeringsvoorbereiding en de beoordeling van technische dossiers. Vanuit Nederland werken wij met een gedisciplineerde aanpak, gebaseerd op traceerbaarheid, onpartijdigheid en een heldere technische scope.",
    trust: ["Gevestigd In Nederland", "Onafhankelijke Technische Beoordeling", "Internationale Regelgevende Focus"],
    corporateEyebrow: "Organisatiestructuur",
    corporateTitle: "Onafhankelijke verificatie en technische beoordeling",
    differentiatorsTitle: "Wat ons werk definieert",
    whyExistsTitle: "Waarom Meva Global",
    whyExistsBody:
      "Organisaties hebben voor duurzaamheids-, product- en regelgevingsinformatie niet alleen berekeningen nodig; zij hebben informatie nodig die traceerbaar, controleerbaar en verdedigbaar is voor externe stakeholders. Meva Global is opgezet om daaraan te voldoen met onpartijdige technische beoordeling, documentatiediscipline en validatie in lijn met veelgebruikte internationale normen.",
    positioningTitle: "Hoe wij ons positioneren",
    positioningBody:
      "Meva Global werkt als een onafhankelijke verificatieorganisatie, gevestigd in Nederland, met een internationaal georiënteerde leveringsinstelling. Opdrachten worden opgebouwd rond gedisciplineerde technische beoordeling, traceerbaar bewijs en onpartijdig oordeel—in lijn met veelgebruikte normen en disclosure-contexten, zonder aanspraak op wettelijke vaststellingen of goedkeuringen die niet aanwezig zijn.",
    missionTitle: "Onze werkfilosofie",
    missionBody:
      "Onze missie is om de traceerbaarheid en verdedigbaarheid van duurzaamheids-, product- en regelgevingsdisclosure te versterken via onpartijdige technische beoordeling en gedisciplineerde documentatie. Vanuit Nederland hanteren we een internationaal georiënteerde dienstverlening die past bij grensoverschrijdende rapportage en toetsing door meerdere stakeholders.",
    whoTitle: "Internationale structuur",
    whoBody:
      "Wij zijn een in Nederland gevestigde organisatie die onafhankelijke verificatie en technische beoordeling levert aan organisaties die te maken hebben met EU- en internationale rapportageverwachtingen. Onze scope omvat broeikasgas- en milieugegevens, productgerichte verklaringen, ketenbewijsstructuren en de kwaliteit van bredere duurzaamheidsdisclosure—steeds met gedisciplineerde scope, gedocumenteerde onderbouwing en onpartijdige reviewediscipline.",
    howTitle: "Technische aanpak",
    howBody:
      "Opdrachten worden opgebouwd rond heldere criteria, traceerbaar bewijs, waar passend steekproeflogica en documentatie die standhoudt onder toezicht van toezichthouders, afnemers en verificatiestakeholders. We benadrukken methodologische helderheid, audit-gereed dossiers en proportionele diepte—zonder uitkomsten te beloven die buiten de overeengekomen scope liggen.",
    assuranceHeading: "Bewijsdiscipline en onafhankelijke technische beoordeling",
    assuranceBody:
      "Meva Global combineert onafhankelijke reviewediscipline, waar relevant regelgevingsinterpretatie in de opdracht, en gestructureerde documentatiepraktijken zodat organisaties verificatiedossiers en certificatiegerichte trajecten kunnen voorbereiden die onder externe toetsing standhouden. Bewijskwaliteit, consistente rekenlogica en disclosure-taal die past bij het beoogde gebruik gaan voor narratieve opsmuk.",
    founderPerspectiveTitle: "Perspectief vanuit de oprichting",
    founderPerspectiveBody:
      "De aanpak van Meva Global is gebaseerd op het inzicht dat technische juistheid pas waarde krijgt wanneer deze wordt ondersteund door gedocumenteerd bewijs, een heldere scope, onafhankelijke oordeelsvorming en een consistent proces. Daarom richten we ons niet alleen op de uitkomst, maar ook op hoe die uitkomst tot stand komt en extern kan worden verdedigd.",
    valuesEyebrow: "Onze principes",
    values: [
      {
        title: "Onpartijdigheid en professioneel oordeel",
        body: "Onafhankelijkheidscontroles, belangenbewustzijn en gedocumenteerde technische besluiten—evenredig aan scope en beoogd extern gebruik.",
      },
      {
        title: "Documentatiediscipline",
        body: "Bewijsstromen, gedisciplineerde registraties en herhaalbare review-stappen die transparantie en auditgereedheid ondersteunen.",
      },
      {
        title: "Regelgevingsgereedheid",
        body: "Gestructureerde aansluiting op veelgebruikte kaders en disclosure-contexten—zonder accreditatiestatus of goedkeuringen te overdrijven.",
      },
    ],
    ctaTitle: "Scope en timing bespreken",
    ctaIntro:
      "Deel uw normenkader, programmagrenzen en rapportagedoelen. We reageren met een gestructureerd beeld van bewijsverwachtingen en een proportioneel leveringsplan.",
    ctaPrimary: "Vraag een technisch gesprek aan",
    ctaSecondary: "Bekijk diensten",
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
    en: "/en/about",
    tr: "/tr/about",
    nl: "/nl/about",
  } as const;

  const metaAbout = dict.meta?.pages?.about;
  return {
    title: metaAbout?.title ?? dict.meta?.siteName ?? "Meva Global",
    description: metaAbout?.description ?? dict.meta?.siteDescription ?? "",
    alternates: { canonical: `/${locale}/about`, languages },
    openGraph: {
      title: metaAbout?.title ?? dict.meta?.siteName ?? "Meva Global",
      description: metaAbout?.description ?? dict.meta?.siteDescription ?? "",
      url: `/${locale}/about`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const metaAbout = dict.meta?.pages?.about;
  const copy = ABOUT_COPY[l];

  const aboutHeroSrc = resolveAboutHeroRasterSrc();
  const aboutHeroIsSvgFallback = aboutHeroSrc.endsWith(".svg");
  const heroAlt = metaAbout?.title ?? copy.heroTitle ?? dict.brand?.legalName ?? "";

  return (
    <>
      <section className={cn("relative border-b border-[color:var(--border-soft)]", premiumEditorialHeroSurface)}>
        <div className={premiumAboutMotif} aria-hidden />
        <Container className="relative py-12 sm:py-14 lg:py-[4.5rem]">
          <div className="mx-auto grid max-w-[76rem] items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex min-w-0 flex-col justify-center lg:col-span-5">
              <div className={premiumEyebrowRow}>
                <span className={premiumEyebrowRule} aria-hidden />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
                  {copy.heroEyebrow}
                </p>
              </div>
              <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-[2.35rem] sm:leading-[1.07] lg:text-[2.55rem] lg:leading-[1.05]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-[44rem] text-[0.9375rem] leading-[1.78] text-[color:var(--ink-dark)]/90 sm:text-lg sm:leading-[1.7]">
                {copy.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {copy.trust.map((line) => (
                  <span key={line} className={premiumTrustChip}>
                    {line}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex min-h-0 min-w-0 self-stretch lg:col-span-7 lg:items-center">
              <div
                className={cn(
                  premiumHeroVisualPanel,
                  visualImageClipClass,
                  "relative w-full",
                  "aspect-[5/4] min-h-[14.5rem] max-h-[min(28rem,50vh)] sm:min-h-[16rem] sm:max-h-[min(30rem,52vh)] lg:min-h-[16.5rem] lg:max-h-[min(32rem,54vh)]",
                )}
              >
                <div className={premiumGoldTopLine} aria-hidden />
                <Image
                  src={aboutHeroSrc}
                  alt={aboutHeroIsSvgFallback ? "" : heroAlt}
                  fill
                  unoptimized={aboutHeroIsSvgFallback}
                  className={
                    aboutHeroIsSvgFallback
                      ? "object-contain object-center opacity-[0.2]"
                      : "object-cover object-[50%_46%]"
                  }
                  sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 58vw, 720px"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <AboutCorporateSection
        copy={{
          eyebrow: copy.corporateEyebrow,
          title: copy.corporateTitle,
          narrativeTitle: copy.whyExistsTitle,
          narrativeLead: copy.whyExistsBody,
          narrativeSupport: copy.positioningBody,
          pillars: [
            { title: copy.missionTitle, body: copy.missionBody },
            { title: copy.howTitle, body: copy.howBody },
          ],
        }}
      />

      <AboutLeadershipSection leadership={dict.aboutLeadership} />

      <AboutDifferentiatorsSection
        copy={{
          eyebrow: copy.valuesEyebrow,
          title: copy.differentiatorsTitle,
          statementTitle: copy.assuranceHeading,
          statementBody: copy.assuranceBody,
          statementNote: copy.founderPerspectiveBody,
          principles: copy.values,
        }}
      />

      <section className="border-t border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-primary)_92%,#0a1628)] py-10 text-white sm:py-12">
        <Container>
          <div className="mx-auto flex max-w-[76rem] flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="min-w-0 max-w-xl">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{copy.ctaTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">{copy.ctaIntro}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink
                href={`/${l}/contact`}
                variant="secondary"
                size="sm"
                className="w-full justify-center border-transparent bg-white !text-[color:var(--brand-primary)] shadow-sm hover:bg-white/95 sm:w-auto"
              >
                {copy.ctaPrimary}
              </ButtonLink>
              <ButtonLink
                href={`/${l}/verification-services`}
                variant="secondary"
                size="sm"
                className="w-full justify-center border-white/35 bg-transparent !text-white shadow-none hover:bg-white/10 sm:w-auto"
              >
                {copy.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
