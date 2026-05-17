import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FileSearch, Scale, Shield } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { AccreditationProcessCard } from "@/components/cards/AccreditationProcessCard";
import { PremiumVerificationServiceCtaPanel } from "@/components/sections/PremiumVerificationServiceCtaPanel";
import { AccreditationPageNav } from "@/components/accreditation/AccreditationPageNav";
import { CorporateDocumentsSection } from "@/components/accreditation/CorporateDocumentsSection";
import { VerificationProcessHeroVisual } from "@/components/verification/VerificationProcessHeroVisual";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import {
  premiumCardInteractive,
  premiumEditorialHeroSurface,
  premiumEyebrowRow,
  premiumEyebrowRule,
  premiumGoldTopLine,
  premiumHeroVisualPanel,
  premiumIconWellSoft,
  premiumInstitutionalPanel,
  premiumSectionMuted,
  premiumTrustChip,
} from "@/lib/premiumUi";

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

const COPY: Record<Locale, PageCopy> = {
  en: {
    heroEyebrow: "Verification Process • Impartiality • ISO/IEC 17029",
    heroTitle: "Evidence-Based Verification And Technical Review Process",
    heroBody:
      "Meva Global structures verification, validation and certification-readiness work around clear scope definition, traceable evidence, impartial technical review and documented decision discipline. The objective is to establish a consistent and technically defensible review framework suitable for external stakeholder examination.",
    heroAlt: "Technical verification workflow with documented evidence review and structured technical sign-off.",
    heroTrustChips: ["Traceability", "Impartial review", "Documentation discipline"],
    assuranceSectionTitle: "Technical Review Principles",
    assuranceLead:
      "Verification and conformity-assessment related activities are organised around impartiality, competence, confidentiality, documented decisions, and traceable evidence. Formal accreditation is assessed independently against scope, programme rules, and the relevant accreditation body; public statements on accreditation scope follow only once formally determined.",
    assurancePrinciples: [
      {
        title: "Impartial technical assessment",
        description:
          "Reviewer assignment reflects independence controls, conflict-awareness and competence-based allocation under structured oversight. Roles are documented before evidence review begins so accountability and impartiality remain traceable.",
      },
      {
        title: "Evidence-Based Review Discipline",
        description:
          "Evidence packs, working papers and records are reviewed for completeness, traceability and coherence with stated criteria. Material gaps, unsupported assumptions and weak documentation links are identified before conclusions are formed.",
      },
      {
        title: "Defensible outputs for external use",
        description:
          "Findings, limitations and conclusions are proportionate to scope, risk and how information will be used externally.",
      },
    ],
    processTitle: "Documented Review Flow",
    processBody:
      "Each pathway moves from explicit criteria to documented outputs: evidence is organised, tested and recorded so material findings and conclusions remain aligned with scope and intended external scrutiny.",
    steps: [
      {
        title: "Review Assignment",
        description:
          "After impartiality, conflict-of-interest and competence checks, reviewers and responsibilities are assigned in writing; roles misaligned with scope are excluded from the engagement.",
      },
      {
        title: "Scope And Criteria Clarification",
        description:
          "Confirm boundaries, criteria, intended use and evidence expectations in writing so the evidence pack and working papers can be structured against a defensible baseline.",
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
    governanceTitle: "Impartiality, Competence And Decision Process",
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
    ctaEyebrow: "Technical engagement",
    ctaTitle: "Clarify scope, criteria and evidence expectations",
    ctaBody:
      "Share your reporting context, applicable standards or programme rules, and target timeline. We respond with a proportionate documented review approach and explicit evidence expectations.",
    ctaSecondary: "Review Services",
  },
  tr: {
    heroEyebrow: "Doğrulama Süreci • Tarafsızlık • ISO/IEC 17029",
    heroTitle: "Kanıta Dayalı Doğrulama ve Teknik İnceleme Süreci",
    heroBody:
      "Meva Global; doğrulama, validasyon ve belgelendirme hazırlığı çalışmalarını net kapsam, izlenebilir kanıt, tarafsız teknik değerlendirme ve belgelenmiş karar disiplini üzerine yapılandırır. Amaç; dış paydaş incelemesine uygun, tutarlı ve teknik olarak savunulabilir bir değerlendirme çerçevesi oluşturmaktır.",
    heroAlt: "Belgeli kanıt incelemesi ve yapılandırılmış teknik onay bağlamında doğrulama iş akışı.",
    heroTrustChips: ["İzlenebilirlik", "Tarafsız değerlendirme", "Dokümantasyon disiplini"],
    assuranceSectionTitle: "Teknik Değerlendirme İlkeleri",
    assuranceLead:
      "Doğrulama ve uygunluk değerlendirmesiyle ilişkili faaliyetler; tarafsızlık, yetkinlik, gizlilik, belgelenmiş kararlar ve izlenebilir kanıt ekseninde düzenlenir. Resmî akreditasyon; kapsam, program kuralları ve yetkili akreditasyon kurumu önünde bağımsız olarak değerlendirilir; kamuya açık akreditasyon beyanı yalnızca kesinleşmiş resmî duruma göre yapılır.",
    assurancePrinciples: [
      {
        title: "Tarafsız teknik değerlendirme",
        description:
          "İnceleme ataması; bağımsızlık kontrolleri, çıkar farkındalığı ve gözetim altında yetkinliğe dayalı dağıtım ile uyumludur. Sorumluluklar kanıt incelemesi başlamadan yazılı hale getirilir; tarafsızlık izi süreç boyunca korunur.",
      },
      {
        title: "Kanıta dayalı inceleme disiplini",
        description:
          "Kanıt dosyası, çalışma notları ve kayıtlar; tamlık, izlenebilirlik ve tanımlı ölçütlerle tutarlılık açısından değerlendirilir. Önemli boşluklar, desteksiz varsayımlar ve zayıf belge bağlantıları sonuç oluşmadan önce görünür kılınır.",
      },
      {
        title: "Dış kullanıma uygun teknik çıktılar",
        description:
          "Bulgular, sınırlamalar ve sonuçlar; kapsam, risk ve bilginin dış kullanım biçimiyle orantılı biçimde netleştirilir.",
      },
    ],
    processTitle: "Belgelenmiş İnceleme Akışı",
    processBody:
      "Akış; açık ölçütlerden belgelenmiş çıktılara ilerler: kanıt düzenlenir, sınanır ve kayda geçirilir; önemli bulgular ve sonuçlar kapsam ile dış denetim beklentisiyle uyumlu kalır.",
    steps: [
      {
        title: "İnceleme Ataması",
        description:
          "Tarafsızlık, çıkar çatışması ve yetkinlik kontrolleri tamamlandıktan sonra inceleme ekibi ve sorumluluklar yazılı olarak atanır; kapsamla uyumsuz roller devreden çıkarılır.",
      },
      {
        title: "Kapsam ve Kriterlerin Netleştirilmesi",
        description:
          "Sınırlar, kriterler, kullanım amacı ve kanıt beklentilerini yazılı olarak teyit ederiz; kanıt dosyası ve çalışma notları bu çerçeveye göre yapılandırılır.",
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
    governanceTitle: "Tarafsızlık, Yetkinlik ve Karar Süreci",
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
    ctaEyebrow: "Teknik değerlendirme",
    ctaTitle: "Kapsam, ölçütler ve kanıt beklentilerini netleştirelim",
    ctaBody:
      "Raporlama bağlamınızı, uygulanabilir standart veya program kurallarını ve hedef zamanlamayı iletin. Orantılı belgelenmiş inceleme yaklaşımı ve açık kanıt beklentileriyle yanıt veririz.",
    ctaSecondary: "Hizmetleri İncele",
  },
  nl: {
    heroEyebrow: "Verificatieproces • onpartijdigheid • ISO/IEC 17029",
    heroTitle: "Op bewijs gebaseerde verificatie en technische beoordeling",
    heroBody:
      "Meva Global structureert verificatie-, validatie- en certificeringsvoorbereiding rond duidelijke scopebepaling, traceerbaar bewijs, onpartijdige technische beoordeling en gedocumenteerde besluitvorming. Het doel is een consistent en technisch verdedigbaar beoordelingskader te creëren dat geschikt is voor beoordeling door externe belanghebbenden.",
    heroAlt: "Verificatieworkflow met gedocumenteerde bewijsbeoordeling en gestructureerde technische vaststelling.",
    heroTrustChips: ["Traceerbaarheid", "Onpartijdige beoordeling", "Procesdiscipline"],
    assuranceSectionTitle: "Principes voor technische beoordeling",
    assuranceLead:
      "Activiteiten rond verificatie en conformiteitsbeoordeling worden georganiseerd rond onpartijdigheid, competentie, vertrouwelijkheid, gedocumenteerde besluiten en traceerbaar bewijs. Formele accreditatie wordt onafhankelijk beoordeeld tegen scope, programmaregels en de bevoegde accreditatie-instelling; publieke accreditatie-informatie volgt pas na een vaststaande formele status.",
    assurancePrinciples: [
      {
        title: "Onpartijdige technische beoordeling",
        description:
          "Beoordelingstoewijzing volgt onafhankelijkheidscontroles, belangenbewustzijn en competentiegebaseerde toewijzing onder gestructureerd toezicht.",
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
        title: "Beoordelingstoewijzing",
        description:
          "Na controles op onafhankelijkheid, belangenconflicten en competentie worden beoordelaars en verantwoordelijkheden schriftelijk toegewezen; rollen die niet passen bij de scope worden uitgesloten.",
      },
      {
        title: "Verduidelijking van scope en criteria",
        description:
          "Reikwijdte, criteria, beoogd gebruik en bewijsverwachtingen schriftelijk vastleggen zodat het bewijsdossier en werkdocumenten tegen een verdedigbare basis worden opgebouwd.",
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
    governanceTitle: "Onpartijdigheid, competentie en besluitvorming",
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
    ctaEyebrow: "Technische beoordeling",
    ctaTitle: "Scope, criteria en bewijsverwachtingen verduidelijken",
    ctaBody:
      "Deel uw scope, relevant kader en planning. Wij reageren met een evenredige gedocumenteerde beoordelingsaanpak en expliciete bewijsverwachtingen.",
    ctaSecondary: "Diensten bekijken",
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

  const steps = copy.steps;
  const principleIcons = [Scale, FileSearch, Shield] as const;

  return (
    <>
      <AccreditationPageNav dict={dict} />

      <section
        id="accreditation-hero"
        className={cn("scroll-mt-[4.5rem] border-b border-[color:var(--border-soft)]", premiumEditorialHeroSurface)}
      >
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto grid max-w-[76rem] items-center gap-8 sm:gap-9 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-10 xl:gap-11">
            <div className="min-w-0 max-w-[38.75rem]">
              <div className={premiumEyebrowRow}>
                <span className={premiumEyebrowRule} aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--brand-primary)] sm:text-[0.8125rem]">
                  {copy.heroEyebrow}
                </p>
              </div>
              <h1 className="mt-4 text-[2rem] font-semibold leading-[1.06] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.35rem] lg:text-[2.55rem]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-[38.75rem] text-[0.9375rem] leading-[1.82] text-[color:var(--ink-dark)]/92 sm:text-[1.0625rem] sm:leading-[1.78]">
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
            <div className="min-w-0 w-full lg:justify-self-end lg:pl-2">
              <div
                className={cn(
                  premiumHeroVisualPanel,
                  "relative mx-auto w-full max-w-[min(100%,680px)] p-3 sm:p-4 lg:mx-0 lg:ml-auto",
                )}
              >
                <div className={premiumGoldTopLine} aria-hidden />
                <VerificationProcessHeroVisual alt={copy.heroAlt} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="assurance-principles" className="scroll-mt-[4.5rem] border-b border-[color:var(--border-soft)] bg-white">
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[76rem]">
            <SectionHeading
              title={copy.assuranceSectionTitle}
              description={copy.assuranceLead}
              titleClassName="text-[1.5rem] sm:text-[1.75rem] lg:text-[1.875rem]"
              withTitleAccent
            />
            <div className="mt-9 grid gap-6 lg:grid-cols-3 lg:gap-7">
              {copy.assurancePrinciples.map((p, index) => {
                const Icon = principleIcons[index] ?? Shield;
                return (
                  <article key={p.title} className={cn(premiumCardInteractive, "flex min-h-0 flex-col p-7 sm:p-8")}>
                    <div className={premiumGoldTopLine} aria-hidden />
                    <div className={premiumIconWellSoft}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.125rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.74] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                      {p.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="verification-process-section" className={cn("scroll-mt-[4.5rem]", premiumSectionMuted)}>
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[76rem]">
            <SectionHeading
              title={copy.processTitle}
              description={copy.processBody}
              titleClassName="text-[1.5rem] sm:text-[1.75rem] lg:text-[1.875rem]"
              withTitleAccent
              className="max-w-3xl"
            />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {steps.map((s, i) => (
                <AccreditationProcessCard key={s.title} index={i + 1} title={s.title} description={s.description} />
              ))}
            </div>

            <div className={cn("relative mt-12", premiumInstitutionalPanel)}>
              <div className={premiumGoldTopLine} aria-hidden />
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

            <div className={cn("relative mt-8", premiumInstitutionalPanel)}>
              <div className={premiumGoldTopLine} aria-hidden />
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
