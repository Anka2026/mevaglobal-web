import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { VisualAnchor } from "@/components/visual/VisualAnchor";
import { cn } from "@/lib/cn";
import { premiumHeroBackdrop, premiumSectionMuted } from "@/lib/premiumUi";

/** Canonical CBAM solutions hero (deterministic URL for static hosting). */
const CBAM_HERO_SRC = "/assets/page-visuals/cbam-solutions-hero.png";

function resolveCbamHeroSrc(): string {
  return CBAM_HERO_SRC;
}

type CbamCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  chips: readonly [string, string, string];
  legalNote: string;
  whyTitle: string;
  whyBody: string;
  whatTitle: string;
  whatCards: readonly { title: string; body: string }[];
  flowTitle: string;
  flowSteps: readonly { title: string; body: string }[];
  audienceTitle: string;
  audience: readonly { title: string; body: string }[];
  ctaTitle: string;
  ctaIntro: string;
};

const CBAM_COPY: Record<Locale, CbamCopy> = {
  en: {
    heroEyebrow: "CBAM readiness • Embedded emissions • Supplier data",
    heroTitle: "CBAM Technical Readiness And Pre-Verification Review",
    heroSubtitle:
      "CBAM reporting requires disciplined scope, plant-level data, supplier evidence and reporting files—not a single headline figure. Meva Global delivers structured technical review so importers, producers and suppliers can align embedded-emissions files and calculation logic with EU expectations before statutory verification.",
    chips: ["Embedded emissions", "Supplier evidence", "Pre-verification readiness"],
    legalNote:
      "Final outcomes sit with competent authorities and applicable rules. Meva Global provides independent technical review and readiness work—not statutory acceptance decisions.",
    whyTitle: "Why This Matters for Trade and Disclosure",
    whyBody:
      "CBAM-facing reporting requires embedded emissions of covered goods with traceable evidence. Buyers and reviewers expect consistent calculation logic, plant and supplier records that can be retraced, and a consolidated reporting file—not an isolated figure.",
    whatTitle: "What We Support",
    whatCards: [
      {
        title: "CBAM Monitoring Plan Support",
        body: "Clarify scope, goods mapping and monitoring design against your reporting context so data requests and control points are coherent with your operations.",
      },
      {
        title: "Embedded Emissions Data Review",
        body: "Structured technical review of emissions logic, data boundaries and the evidence trail for plant- and good-level figures used in your CBAM file.",
      },
      {
        title: "Supplier Data Collection Structure",
        body: "Practical templates, request discipline and triage to improve supplier response quality and reduce gaps before reporting deadlines.",
      },
      {
        title: "Calculation Logic & Evidence Alignment",
        body: "Cross-checks between source data, factors, allocation choices and working papers so the explanation matches the numbers you intend to disclose.",
      },
      {
        title: "Pre-Verification Readiness Review",
        body: "A focused pass on documentation completeness, traceability and obvious inconsistencies before third-party verification or independent technical review.",
      },
    ],
    flowTitle: "Practical Workflow",
    flowSteps: [
      { title: "Scope & Product Mapping", body: "Confirm goods, sites and the reporting boundary; align the monitoring approach with the product mix you export." },
      { title: "Data Request & Supplier Evidence", body: "Collect and structure supplier inputs, evidence files and communications so gaps are visible early." },
      { title: "Calculation Review & Documentation", body: "Align calculation steps, factors and working papers; tighten narrative to match the evidence on file." },
      { title: "Readiness File And Follow-Through", body: "Assemble a consolidated pack, highlight residual risks, and set realistic follow-up for verification or independent review cycles." },
    ],
    audienceTitle: "Who This Is For",
    audience: [
      { title: "Importers", body: "EU-facing teams coordinating CBAM returns and internal governance." },
      { title: "Exporters / Producers", body: "Manufacturers aligning plant data, allocation rules and good-level outputs for EU buyers." },
      { title: "Suppliers to EU Buyers", body: "Upstream partners asked to provide embedded emissions and supporting records on short timelines." },
      { title: "Third-Party Review Preparation", body: "Organisations that want a disciplined evidence set before external verification or independent technical review." },
    ],
    ctaTitle: "Discuss Your CBAM File",
    ctaIntro: "Share your goods scope, data maturity and target timeline. We respond with a proportionate workplan—structured, technical and disclosure-focused.",
  },
  tr: {
    heroEyebrow: "CBAM hazırlığı • Gömülü emisyonlar • Tedarikçi verisi",
    heroTitle: "SKDM (CBAM) Teknik Hazırlık ve Ön Doğrulama İncelemesi",
    heroSubtitle:
      "SKDM raporlaması; kapsam, tesis verisi, tedarikçi kanıtları ve raporlama dosyasının birlikte yürütüldüğü teknik bir hazırlıktır. Meva Global; AB raporlama beklentileri doğrultusunda gömülü emisyon dosyası, tedarikçi kanıtları ve hesaplama mantığı için yapılandırılmış bağımsız teknik inceleme sunar; zorunlu doğrulama öncesinde dosya tutarlılığını güçlendirmeyi hedefler.",
    chips: ["Gömülü emisyonlar", "Tedarikçi kanıtları", "Ön doğrulama hazırlığı"],
    legalNote:
      "Nihai sonuçlar yetkili makam ve yürürlükteki kurallara bağlıdır. Meva Global bağımsız teknik inceleme ve hazırlık çalışması yürütür; resmî kabul veya garanti vermez.",
    whyTitle: "Ticaret ve Açıklama İçin Neden Önemli",
    whyBody:
      "SKDM odaklı raporlama; kapsamdaki ürünler için gömülü emisyonların izlenebilir kanıt yapısıyla birlikte sunulmasını gerektirir. Alıcılar ve inceleme tarafları tutarlı hesaplama mantığı, tesis ve tedarikçi kayıtları ile yeniden izlenebilir dokümantasyon bekler. Amaç tek bir rakam değil; bütünleşik teknik raporlama dosyasıdır.",
    whatTitle: "Neleri Destekliyoruz",
    whatCards: [
      {
        title: "CBAM İzleme Planı Desteği",
        body: "Kapsam, ürün eşlemesi ve faaliyetinize uyumlu izleme tasarımını netleştirerek veri isteklerinin ve kontrol noktalarının tutarlı olmasını sağlarız.",
      },
      {
        title: "Gömülü Emisyon Veri İncelemesi",
        body: "Tesis ve ürün düzeyi rakamlarınızın dayandığı emisyon mantığı, veri sınırları ve kanıt izi üzerine yapılandırılmış teknik inceleme.",
      },
      {
        title: "Tedarikçi Veri Toplama Yapısı",
        body: "Şablonlar, disiplinli talep ve önceliklendirme ile tedarikçi cevap kalitesini artırır, son vadiler öncesinde açıkları görünür kılarız.",
      },
      {
        title: "Hesaplama Mantığı ve Kanıt Hizalaması",
        body: "Kaynak veri, faktörler, paylaştırma tercihleri ve çalışma kağıtları arasında çapraz kontrol; açıklamanın kullandığınız rakamlarla örtüştüğünü teyit eder.",
      },
      {
        title: "Ön Doğrulama Hazırlık İncelemesi",
        body: "Üçüncü taraf doğrulama veya bağımsız inceleme öncesi dokümantasyon tamlığı, izlenebilirlik ve belirgin tutarsızlıklar üzerine odaklı geçiş.",
      },
    ],
    flowTitle: "Pratik İş Akışı",
    flowSteps: [
      { title: "Kapsam ve Ürün Eşlemesi", body: "Ürünleri, tesisleri ve raporlama sınırını netleştirir; izleme yaklaşımını ihraç ettiğiniz ürün karışımıyla hizalarız." },
      { title: "Veri İstemi ve Tedarikçi Kanıtı", body: "Tedarikçi girdileri, dosyalar ve iletişimleri erken aşamada boşlukları görünecek şekilde toplar ve yapılandırırız." },
      { title: "Hesaplama İncelemesi ve Dokümantasyon", body: "Hesaplama adımlarını, faktörleri ve çalışma notlarını hizalar; açıklamayı dosyadaki kanıtla eşleştiririz." },
      { title: "Hazırlık Dosyası ve Takvim", body: "Bütünleşik bir paket oluşturur, kalan riskleri vurgular; doğrulama veya bağımsız inceleme döngüleri için gerçekçi takvim ve iş akışı tanımlarız." },
    ],
    audienceTitle: "Kimler İçin",
    audience: [
      { title: "İthalatçılar", body: "CBAM beyanlarını ve iç yönetişimi koordine eden AB odaklı ekipler." },
      { title: "İhracatçılar / Üreticiler", body: "Tesis verisini, paylaştırma kurallarını ve alıcılara yönelik ürün çıktılarını hizalayan üreticiler." },
      { title: "AB Alıcılarına Tedarik Eden Taraflar", body: "Gömülü emisyon ve destekleyici kayıtlar için kısa sürede talep alan tedarik zinciri ortakları." },
      { title: "Üçüncü Taraf İncelemesine Hazırlık", body: "Dış doğrulama veya teknik inceleme öncesinde disiplinli bir kanıt seti hedefleyen kuruluşlar." },
    ],
    ctaTitle: "CBAM Dosyanızı Konuşalım",
    ctaIntro: "Ürün kapsamınızı, veri olgunluğunuzu ve hedef zamanı paylaşın; orantılı, teknik ve açıklama odaklı bir yol haritası ile yanıt veririz.",
  },
  nl: {
    heroEyebrow: "CBAM-gereedheid • Ingebedde emissies • Leveranciersdata",
    heroTitle: "Technische gereedheid voor CBAM en voorbereiding op verificatie",
    heroSubtitle:
      "CBAM-rapportage vereist scope, fabrieksdata, leveranciersbewijs en samenhangende dossiers—niet één kale uitkomst. Meva Global voert gestructureerde technische beoordeling uit zodat importeurs, producenten en toeleveranciers dossiers voor ingebedde emissies en rekenlogica kunnen afstemmen op EU-verwachtingen vóór formele verificatie.",
    chips: ["Ingebedde emissies", "Leveranciersbewijs", "Gereedheid vóór verificatie"],
    legalNote:
      "Definitieve uitkomsten liggen bij bevoegde autoriteiten en de van toepassing zijnde regels. Meva Global levert onafhankelijke technische beoordeling en voorbereiding—geen wettelijke aanvaardingsbeslissing.",
    whyTitle: "Waarom dit relevant is voor inkoop en disclosure",
    whyBody:
      "CBAM-gerichte rapportage vereist ingebedde emissies van gedekte goederen met traceerbaar bewijs. Inkopers en reviewers verwachten consistente rekenlogica, fabrieks- en leveranciersgegevens die terug te voeren zijn en een samenhangend rapportagedossier—niet een los cijfer.",
    whatTitle: "Waar wij bij ondersteunen",
    whatCards: [
      {
        title: "Ondersteuning bij het CBAM-monitoringsplan",
        body: "Verduidelijking van reikwijdte, goederenmapping en monitoringontwerp, passend bij uw activiteiten, zodat dataverzoeken en controlepunten logisch aansluiten.",
      },
      {
        title: "Beoordeling van ingebedde emissiedata",
        body: "Gestructureerde technische beoordeling van emissielogica, datagrenzen en de bewijsstructuur voor cijfers op fabrieks- en goederenniveau.",
      },
      {
        title: "Structuur voor leveranciersinwinning",
        body: "Sjablonen, een consequente verzoopvolging en triage om de kwaliteit van leveranciersinformatie te verbeteren vóór rapportagedeadlines.",
      },
      {
        title: "Rekenlogica en bewijsmatching",
        body: "Kruiscontrole tussen brongegevens, emissiefactoren, toerekening en werkdocumenten, zodat toelichting en cijfers elkaar dekken.",
      },
      {
        title: "Voorbereidende review vóór verificatie",
        body: "Een gerichte controle op volledigheid, traceerbaarheid en duidelijke inconsistenties vóór onafhankelijke verificatie of externe technische review.",
      },
    ],
    flowTitle: "Praktische werkwijze",
    flowSteps: [
      { title: "Reikwijdte en goederenmapping", body: "Goederen, vestigingen en de rapportagegrens afgrenzen; de monitoring afstemmen op uw productmix." },
      { title: "Dataverzoek en leveranciersbewijs", body: "Leveranciersinformatie en bewijsbestanden zo structureren dat hiaten vroeg zichtbaar zijn." },
      { title: "Berekeningsbeoordeling en documentatie", body: "Stappen, factoren en werkdocumenten op elkaar afstemmen; toelichting verbinden met de onderliggende bewijsstukken." },
      { title: "Gereedheidsdossier en vervolg", body: "Een samenhangend pakket, explicitering van resterende risico’s, en realistische opvolging voor verificatie of herhaalde cycli." },
    ],
    audienceTitle: "Voor wie",
    audience: [
      { title: "Importeurs", body: "Teams die CBAM-returns en interne beheersing coördineren." },
      { title: "Exporteurs en producenten", body: "Fabrieksgegevens, toerekening en goederenoutput op één lijn met EU-inkoop." },
      { title: "Toeleveranciers van EU-inkoop", body: "Ketenpartijen met korte termijnen voor emissies en bewijsmaterialen." },
      { title: "Voorbereiding op externe beoordeling", body: "Organisaties die een geregisseerd, technisch bewijsdossier wensen vóór onafhankelijke review." },
    ],
    ctaTitle: "Uw CBAM-dossier bespreken",
    ctaIntro: "Deel reikwijdte, datavolwassenheid en planning. Wij reageren met een evenwichtige, technische werkplannen—zonder aanspraken buiten afgesproken scope.",
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
    en: "/en/cbam-solutions",
    tr: "/tr/cbam-solutions",
    nl: "/nl/cbam-solutions",
  } as const;

  return {
    title: dict.meta.pages.cbam.title,
    description: dict.meta.pages.cbam.description,
    alternates: { canonical: `/${locale}/cbam-solutions`, languages },
    openGraph: {
      title: dict.meta.pages.cbam.title,
      description: dict.meta.pages.cbam.description,
      url: `/${locale}/cbam-solutions`,
      locale,
      siteName: dict.meta.siteName,
      type: "website",
    },
  };
}

export default async function CbamSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const copy = CBAM_COPY[l];
  const heroSrc = resolveCbamHeroSrc();
  const heroAlt = dict.pages.cbam.heroImageAlt;

  return (
    <>
      <section className={cn("border-b border-[color:var(--border-soft)]", premiumHeroBackdrop)}>
        <Container className="py-9 sm:py-10 lg:py-11">
          <div className="mx-auto grid max-w-7xl items-stretch gap-7 lg:grid-cols-12 lg:gap-9">
            <div className="flex min-w-0 flex-col justify-center lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[color:var(--brand-primary)] sm:text-xs">
                {copy.heroEyebrow}
              </p>
              <h1 className="mt-3 text-balance text-[1.75rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--ink-dark)] sm:text-[2.125rem] lg:text-[2.35rem]">
                {copy.heroTitle}
              </h1>
              <p className="mt-3 max-w-[46rem] text-sm leading-[1.72] text-[color:var(--ink-dark)]/88 sm:text-[1.0625rem] sm:leading-[1.74]">
                {copy.heroSubtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5" role="presentation">
                {copy.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)] px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[color:var(--brand-primary)] sm:text-xs"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[260px] w-full min-w-0 sm:min-h-[300px] lg:col-span-5 lg:min-h-0">
              <VisualAnchor
                src={heroSrc}
                alt={heroAlt}
                imageClassName="object-contain object-center sm:object-[66%_46%] lg:object-[64%_45%]"
                detailEditorial
                detailEditorialFit="contain"
                className="h-full w-full min-h-0 min-w-0"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)] py-9 sm:py-10", premiumSectionMuted)}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-[color:var(--brand-primary)]">{copy.whyTitle}</h2>
            <p className="mt-3 text-sm leading-[1.78] text-[color:var(--ink-dark)]/88 sm:text-[0.9375rem] sm:leading-relaxed">
              {copy.whyBody}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--border-soft)] bg-white py-9 sm:py-10">
        <Container>
          <h2 className="mx-auto max-w-5xl text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">{copy.whatTitle}</h2>
          <div className="mx-auto mt-5 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {copy.whatCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-2xl border border-[color:var(--border-soft)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6"
              >
                <h3 className="text-[0.9375rem] font-semibold leading-snug text-[color:var(--ink-dark)] sm:text-base">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-[color:var(--border-soft)] py-9 sm:py-10", premiumSectionMuted)}>
        <Container>
          <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">{copy.flowTitle}</h2>
          <ol className="mt-5 grid max-w-5xl gap-4 sm:grid-cols-2">
            {copy.flowSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_32%,white)] p-4 sm:p-5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-semibold text-[color:var(--brand-primary)] ring-1 ring-[color:var(--border-soft)]">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[0.9375rem] font-semibold text-[color:var(--ink-dark)]">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--text-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-[color:var(--border-soft)] bg-white py-9 sm:py-10">
        <Container>
          <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">{copy.audienceTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {copy.audience.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-[color:var(--border-soft)] bg-white/90 p-4 shadow-sm sm:p-5"
              >
                <h3 className="text-sm font-semibold text-[color:var(--ink-dark)] sm:text-base">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--text-muted)]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-soft)] bg-white py-6 sm:py-7">
        <Container>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--text-muted)] sm:text-[0.8125rem]">{copy.legalNote}</p>
        </Container>
      </section>

      <section className={cn("py-9 sm:py-10", premiumSectionMuted)}>
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">{copy.ctaTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem]">{copy.ctaIntro}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <ButtonLink href={`/${l}/contact`} variant="primary" size="sm" className="w-full justify-center sm:w-auto">
                {dict.nav.contact}
              </ButtonLink>
              <ButtonLink
                href={`/${l}/verification-services`}
                variant="secondary"
                size="sm"
                className="w-full justify-center sm:w-auto"
              >
                {dict.ctas.exploreServices}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
