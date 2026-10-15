import type { Locale } from "@/i18n/locales";
import type { CbamProposalCopy } from "@/components/cbam/CbamProposalForm";

export const EMICERT_CBAM_URL = "https://emicert.com/cbam";
export const EMICERT_SCOPE_PDF = "/docs/emicert-esyd-874-9-annex-v1-20.pdf";
export const VIDEO_SRC = "/videos/emicert-cbam-accreditation.mp4";
export const HERO_SRC = "/assets/page-visuals/cbam-sectors/iron-steel.jpg";

/** Names as printed on Annex V1/20 to ESYD Certificate No. 874-9, 14 September 2026. */
export const CBAM_SCOPE_GROUPS = [
  { no: "I", name: "Calcined clay, cement clinker, cement, aluminous cement" },
  { no: "II", name: "Hydrogen, ammonia" },
  { no: "III", name: "Nitric acid" },
  { no: "IV", name: "Urea, mixed fertilisers" },
  { no: "V", name: "Sintered ore, pig iron, DRI (direct reduced iron), crude steel" },
  { no: "VI", name: "Ferro alloys (FeMn, FeCr, FeNi)" },
  { no: "VII", name: "Unwrought aluminium" },
  { no: "VIII", name: "Iron or steel products, aluminium products" },
  { no: "L", name: "Carbon capture, utilisation and storage (CCUS)" },
  { no: "LI", name: "Electricity imported into the customs territory of the Union" },
  { no: "LII", name: "Indirect emissions" },
] as const;

export type CbamFlagshipCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleSecondary: string;
  identity: string;
  description: string;
  indicators: readonly string[];
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta: string;
  statement: string;
  milestoneEyebrow: string;
  milestoneTitle: string;
  milestoneBody: string;
  facts: readonly { label: string; value: string }[];
  videoLabel: string;
  officialLink: string;
  certificateLink: string;
  scopeLink: string;
  sectorsEyebrow: string;
  sectorsTitle: string;
  sectorsIntro: string;
  sectors: readonly { id: string; title: string; summary: string; detail: string; image: string; imageAlt: string }[];
  assessedEyebrow: string;
  assessedTitle: string;
  assessedNote: string;
  assessed: readonly { title: string; body: string }[];
  processEyebrow: string;
  processTitle: string;
  processNotice: string;
  process: readonly { title: string; body: string }[];
  whyEyebrow: string;
  whyTitle: string;
  why: readonly { title: string; body: string }[];
  docsEyebrow: string;
  docsTitle: string;
  docsNote: string;
  scopeHeading: string;
  scopeSource: string;
  docs: readonly { label: string; value: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faq: readonly { q: string; a: string }[];
  proposal: CbamProposalCopy;
};

const sectorsEn = [
  {
    id: "iron-steel",
    title: "Iron & Steel",
    summary: "Iron and steel goods within the CBAM scope.",
    detail: "",
    image: "/assets/page-visuals/cbam-sectors/iron-steel.jpg",
    imageAlt: "Industrial production context used for iron and steel CBAM verification",
  },
  {
    id: "aluminium",
    title: "Aluminium",
    summary: "Aluminium goods within the CBAM scope.",
    detail: "",
    image: "/assets/page-visuals/cbam-sectors/aluminium.jpg",
    imageAlt: "Technical review context for aluminium CBAM verification",
  },
  {
    id: "cement",
    title: "Cement",
    summary: "Cement goods within the CBAM scope.",
    detail: "",
    image: "/assets/page-visuals/cbam-sectors/cement.jpg",
    imageAlt: "Emissions accounting context for cement CBAM verification",
  },
  {
    id: "fertilisers",
    title: "Fertilisers",
    summary: "Fertiliser goods within the CBAM scope.",
    detail: "",
    image: "/assets/page-visuals/cbam-sectors/fertiliser.jpg",
    imageAlt: "Industrial emissions monitoring context for fertiliser CBAM verification",
  },
  {
    id: "hydrogen",
    title: "Hydrogen",
    summary: "Hydrogen within the CBAM scope.",
    detail: "",
    image: "/assets/page-visuals/cbam-sectors/hydrogen.jpg",
    imageAlt: "Process and energy context for hydrogen CBAM verification",
  },
  {
    id: "electricity",
    title: "Electricity",
    summary: "Electricity within the CBAM scope.",
    detail: "",
    image: "/assets/page-visuals/cbam-sectors/electricity.jpg",
    imageAlt: "Energy and emissions context for electricity CBAM verification",
  },
] as const;

const statement = {
  en: "Accredited CBAM verification activities are performed under the accreditation and responsibility of EmiCert S.A. MEVA Global Certification acts as EmiCert's exclusive representative in Türkiye, facilitating local communication, application coordination and verification arrangements.",
  tr: "Akredite CBAM doğrulama faaliyetleri, EmiCert S.A.'nın akreditasyonu ve sorumluluğu altında gerçekleştirilmektedir. MEVA Global Certification, EmiCert'in Türkiye'deki tek temsilcisi olarak yerel iletişim, başvuru koordinasyonu ve doğrulama süreçlerinin organizasyonunu sağlamaktadır.",
  nl: "Geaccrediteerde CBAM-verificatie wordt uitgevoerd onder de accreditatie en verantwoordelijkheid van EmiCert S.A. MEVA Global Certification treedt op als exclusieve vertegenwoordiger van EmiCert in Türkiye en faciliteert lokale communicatie, aanvraagcoördinatie en verificatieafspraken.",
};

function proposal(locale: Locale): CbamProposalCopy {
  if (locale === "tr") {
    return {
      heading: "Akredite doğrulama talebi",
      intro: "Tesisinizi, mallarınızı ve raporlama döneminizi belirtin. Talep, EmiCert S.A. akreditasyonu altında ele alınır.",
      fields: {
        company: "Şirket adı",
        contact: "İletişim kişisi",
        email: "Kurumsal e-posta",
        telephone: "Telefon",
        country: "Ülke",
        sector: "Sektör / CBAM sektörü",
        installations: "Tesis sayısı",
        products: "Ürün grupları",
        cn: "CN kodları",
        period: "Raporlama dönemi",
        details: "Ek bilgi",
      },
      sectorPlaceholder: "Sektör seçin",
      sectors: ["Demir ve çelik", "Alüminyum", "Çimento", "Gübre", "Hidrojen", "Elektrik", "Birden fazla sektör"],
      optional: "isteğe bağlı",
      consent: "Kişisel verilerimin bu başvuru kapsamında işlenmesini ve kurumsal e-posta ile iletişime geçilmesini kabul ediyorum.",
      privacy: "Başvuru, kurumsal e-posta kanalı üzerinden iletilir. Yalnızca doğrulama kapsamının değerlendirilmesi için gerekli bilgiler istenir.",
      submit: "Doğrulama teklifi talep et",
      mailtoNote: "Gönder, e-posta uygulamanızda hazır bir ileti açar. Başvuru, ileti gönderildiğinde tamamlanır.",
      required: "Şirket, iletişim kişisi ve e-posta zorunludur.",
      invalidEmail: "Geçerli bir kurumsal e-posta girin.",
      consentError: "Devam etmek için onay kutusunu işaretleyin.",
      directEmailLabel: "info@mevaglobalcertification.com",
    };
  }
  if (locale === "nl") {
    return {
      heading: "Aanvraag voor geaccrediteerde verificatie",
      intro: "Vermeld uw installatie, goederen en rapportageperiode. De aanvraag wordt behandeld onder de accreditatie van EmiCert S.A.",
      fields: {
        company: "Bedrijfsnaam",
        contact: "Contactpersoon",
        email: "Zakelijk e-mailadres",
        telephone: "Telefoon",
        country: "Land",
        sector: "Sector / CBAM-sector",
        installations: "Aantal installaties",
        products: "Productgroepen",
        cn: "GN-codes",
        period: "Rapportageperiode",
        details: "Aanvullende informatie",
      },
      sectorPlaceholder: "Kies een sector",
      sectors: ["IJzer en staal", "Aluminium", "Cement", "Meststoffen", "Waterstof", "Elektriciteit", "Meerdere sectoren"],
      optional: "optioneel",
      consent: "Ik ga ermee akkoord dat deze gegevens worden gebruikt om de verificatieaanvraag te beoordelen en dat contact per e-mail mag volgen.",
      privacy: "De aanvraag opent uw e-mailprogramma. Er is geen aparte serveropslag. Alleen informatie die nodig is voor de scopebeoordeling wordt gevraagd.",
      submit: "Verificatievoorstel aanvragen",
      mailtoNote: "Verzenden opent een vooraf ingevuld bericht. De aanvraag is pas gedaan wanneer u dat bericht verstuurt.",
      required: "Bedrijf, contactpersoon en e-mail zijn verplicht.",
      invalidEmail: "Voer een geldig e-mailadres in.",
      consentError: "Vink de toestemming aan om verder te gaan.",
      directEmailLabel: "info@mevaglobalcertification.com",
    };
  }
  return {
    heading: "Accredited verification enquiry",
    intro: "State the installation, the goods and the reporting period. The enquiry is considered under the accreditation of EmiCert S.A.",
    fields: {
      company: "Company name",
      contact: "Contact name",
      email: "Corporate email",
      telephone: "Telephone",
      country: "Country",
      sector: "Industry / CBAM sector",
      installations: "Number of installations",
      products: "Product groups",
      cn: "CN codes",
      period: "Reporting period",
      details: "Additional information",
    },
    sectorPlaceholder: "Select a sector",
    sectors: ["Iron & steel", "Aluminium", "Cement", "Fertilisers", "Hydrogen", "Electricity", "More than one sector"],
    optional: "optional",
    consent: "I acknowledge that this information may be used to assess the verification request and that MEVA may contact me by email.",
    privacy:
      "The form uses the existing corporate email channel. It does not store submissions on a separate server. Only information needed to assess verification scope is requested.",
    submit: "Request CBAM verification proposal",
    mailtoNote: "Submit opens a prefilled message in your email application. The request is complete only when you send that message.",
    required: "Company, contact name and email are required.",
    invalidEmail: "Enter a valid corporate email address.",
    consentError: "Please confirm the acknowledgement to continue.",
    directEmailLabel: "info@mevaglobalcertification.com",
  };
}

export function getCbamFlagshipCopy(locale: Locale): CbamFlagshipCopy {
  if (locale === "tr") {
    return {
      metaTitle: "CBAM Doğrulama | Dünyanın İlk Akredite Kuruluşu",
      metaDescription:
        "EmiCert S.A., ESYD akreditasyonu ile CBAM kapsamının tamamında doğrulama sunar. MEVA Global Certification, Türkiye’deki tek temsilcidir.",
      eyebrow: "Akredite CBAM doğrulaması",
      title: "Dünyanın İlk CBAM Akredite Doğrulama Kuruluşu",
      titleSecondary: "CBAM Kapsamındaki Tüm Sektörlerde Akredite Doğrulama",
      identity: "EmiCert S.A. | Türkiye Tek Temsilcisi MEVA Global Certification",
      description:
        "Hellenic Accreditation System (ESYD) tarafından akredite edilen EmiCert S.A., CBAM kapsamının tamamında bağımsız doğrulama sunar. Türkiye’deki tek temsilcisi MEVA Global Certification aracılığıyla üreticiler ve ihracatçılar uluslararası akredite doğrulama hizmetine erişebilir.",
      indicators: ["DÜNYANIN İLK CBAM AKREDİTASYONU", "TÜM KAPSAMLARDA AKREDİTE", "ESYD AKREDİTASYON NO. 874-9"],
      primaryCta: "CBAM doğrulama teklifi talep et",
      secondaryCta: "Akreditasyon kapsamını incele",
      tertiaryCta: "Doğrulama sürecini öğren",
      statement: statement.tr,
      milestoneEyebrow: "Kurumsal dönüm noktası",
      milestoneTitle: "CBAM doğrulamasında uluslararası bir eşik",
      milestoneBody:
        "EmiCert S.A., ESYD tarafından CBAM doğrulaması için akredite edilmiş dünyadaki ilk doğrulama kuruluşudur. Akreditasyon EmiCert S.A.’ya aittir. MEVA Global Certification bu akreditasyonun sahibi değildir; Türkiye’de tek temsilci olarak iletişim, başvuru koordinasyonu ve doğrulama organizasyonunu yürütür.",
      facts: [
        { label: "Akreditasyon kuruluşu", value: "ESYD — Hellenic Accreditation System" },
        { label: "Akredite kuruluş", value: "EmiCert S.A." },
        { label: "Sertifika no.", value: "874-9" },
        { label: "Akreditasyon kapsamı", value: "Tam CBAM kapsamı" },
        { label: "Türkiye temsili", value: "MEVA Global Certification — tek temsilci" },
      ],
      videoLabel: "EmiCert CBAM akreditasyon duyurusu",
      officialLink: "EmiCert CBAM sayfası",
      certificateLink: "Akreditasyon kapsamını indir",
      scopeLink: "Akreditasyon kaydı",
      sectorsEyebrow: "CBAM doğrulama kapsamı",
      sectorsTitle: "Tam kapsam Tek doğrulama çerçevesi",
      sectorsIntro:
        "Akredite doğrulama, CBAM kapsamının tamamında aynı çerçevede yürütülür. Kapsam, tesisin ve malların niteliğine göre belirlenir.",
      sectors: [
        { ...sectorsEn[0], title: "Demir ve çelik", summary: "CBAM kapsamındaki demir ve çelik malları." },
        { ...sectorsEn[1], title: "Alüminyum", summary: "CBAM kapsamındaki alüminyum malları." },
        { ...sectorsEn[2], title: "Çimento", summary: "CBAM kapsamındaki çimento malları." },
        { ...sectorsEn[3], title: "Gübre", summary: "CBAM kapsamındaki gübre malları." },
        { ...sectorsEn[4], title: "Hidrojen", summary: "CBAM kapsamındaki hidrojen." },
        { ...sectorsEn[5], title: "Elektrik", summary: "CBAM kapsamındaki elektrik." },
      ],
      assessedEyebrow: "Doğrulama çerçevesi",
      assessedTitle: "Akredite doğrulamada ne incelenir?",
      assessedNote:
        "Doğrulama çerçevesi kapsamın tamamında aynıdır. İnceleme; tesis sınırını, izleme metodolojisini, faaliyet verisini, gömülü emisyon hesabını ve bu hesabı destekleyen kanıtı kapsar.",
      assessed: [
        { title: "Tesis sınırları ve üretim süreçleri", body: "Hangi tesislerin, hangi üretim hatlarının ve hangi sistem sınırlarının beyana girdiği netleştirilir. Sınır, izleme planı ve fiilî operasyonla birlikte okunur." },
        { title: "İzleme metodolojisi ve izleme planı", body: "Beyanın dayandığı izleme yöntemi, ölçüm veya hesap seçimleri ve planın uygulamayla uyumu incelenir. Değişmemiş bir plan ile dönem verisi birbirinden ayrılır." },
        { title: "Faaliyet verisi ve enerji tüketimi", body: "Yakıt, doğal gaz ve elektrik tüketimi gibi faaliyet verileri kaynak kayıtlarla eşleştirilir. Hangi enerji akışının ilgili olduğu üretim rotasına bağlıdır." },
        { title: "Doğrudan ve dolaylı emisyonlar", body: "Doğrudan emisyonlar ile metodolojinin kapsadığı dolaylı emisyonlar aynı doğrulama çerçevesinde, ayrı izlerle incelenir." },
        { title: "Öncüller, gömülü emisyonlar ve malzeme akışları", body: "Öncül malzemeler, kütle dengesi ve üretim miktarları, gömülü emisyon hesabına girdikleri ölçüde izlenir. Tedarikçi emisyon verisi bu akışın parçası olabilir." },
        { title: "Veri izlenebilirliği ve raporlama", body: "Hesap dosyaları, izleme kayıtları ve destekleyici belgeler, raporlanan değere kadar izlenebilir olmalıdır." },
      ],
      processEyebrow: "Süreç",
      processTitle: "Doğrulama süreci",
      processNotice: "",
      process: [
        { title: "Başvuru ve kapsam tanımı", body: "Tesisler, ürünler ve raporlama dönemi netleştirilir. Akredite doğrulamanın EmiCert S.A. sorumluluğunda olduğu teyit edilir." },
        { title: "Doğrulama planlaması", body: "Ekip, kanıt beklentisi ve saha ihtiyacı kapsama göre planlanır." },
        { title: "İzleme metodolojisinin değerlendirilmesi", body: "İzleme planı ve seçilen yöntem, faaliyet verisi ve hesap yoluyla birlikte okunur." },
        { title: "Veri ve kanıt doğrulaması", body: "Kaynak kayıtlar, hesap tabloları ve tedarikçi verisi örneklenerek izlenebilirlik test edilir." },
        { title: "Saha ziyareti ve doğrulama faaliyetleri", body: "Kapsam gerektirdiğinde saha faaliyetleri, kayıtların operasyonla uyumunu kontrol eder." },
        { title: "Bağımsız inceleme ve doğrulama raporlaması", body: "Bulgular bağımsız incelemeden geçer. Rapor, kapsam ve kanıta göre düzenlenir." },
      ],
      whyEyebrow: "Kurumsal gerekçe",
      whyTitle: "Uluslararası akreditasyon Yerel uzmanlık",
      why: [
        { title: "Akreditasyon liderliği", body: "Dünyanın ilk CBAM akreditasyonu ve tam kapsam doğrulama yetkisi EmiCert S.A.’ya aittir." },
        { title: "Endüstriyel kapsam", body: "Doğrulama; çimento, demir ve çelik, alüminyum, gübre, elektrik ve hidrojeni aynı akreditasyon kapsamında ele alır." },
        { title: "Türkiye’de tek temsil", body: "MEVA Global Certification, Türk üreticiler ile EmiCert arasındaki yerel koordinasyonu yürütür." },
        { title: "Bağımsızlık ve teknik bütünlük", body: "Kanıta dayalı doğrulama, tarafsızlık ve bağımsız inceleme." },
      ],
      docsEyebrow: "Belgeler",
      docsTitle: "Akreditasyon kaydı",
      docsNote:
        "Akreditasyon EmiCert S.A.’ya aittir. Aşağıdaki CBAM kapsamı, ESYD sertifika no. 874-9’un 14 Eylül 2026 tarihli V1/20 ekinden alınmıştır. Sertifika 9 Haziran 2030’a kadar geçerlidir. MEVA Global Certification bu akreditasyonun sahibi değildir.",
      scopeHeading: "CBAM akreditasyon kapsamı",
      scopeSource: "Ek V1/20, ESYD sertifika no. 874-9. Faaliyet grubu adları ekte yazıldığı biçimiyle verilmiştir. Yetki Tüzüğü (AB) 2025/2551 Ek I.",
      docs: [
        { label: "Akreditasyon kuruluşu", value: "ESYD" },
        { label: "Akredite kuruluş", value: "EmiCert S.A." },
        { label: "Sertifika no.", value: "874-9" },
        { label: "Kapsam eki", value: "V1/20 — 14 Eylül 2026" },
        { label: "Geçerlilik", value: "9 Haziran 2030" },
        { label: "Standart", value: "ELOT EN ISO/IEC 17029:2019" },
      ],
      faqEyebrow: "Sorular",
      faqTitle: "Sık sorulan sorular",
      faq: [
        { q: "CBAM doğrulaması nedir?", a: "Kapsamdaki malların gömülü emisyon beyanının, uygulanabilir doğrulama kurallarına göre bağımsız incelenmesidir." },
        { q: "Akredite CBAM doğrulamasını kim yapabilir?", a: "Akredite doğrulama, ilgili akreditasyon kuruluşu tarafından CBAM kapsamında akredite edilmiş doğrulama kuruluşu tarafından yürütülür. Bu sitede anlatılan akredite faaliyetlerin kuruluşu EmiCert S.A.’dır." },
        { q: "EmiCert CBAM doğrulaması için akredite mi?", a: "EmiCert, ESYD tarafından CBAM doğrulaması için akredite edildiğini kamuoyuna açıklamıştır. Bu, açıklamaya göre dünyadaki ilk CBAM akreditasyonudur. Sertifika numarası 874-9’dur. Akredite kuruluş EmiCert S.A.’dır." },
        { q: "Hangi CBAM sektörleri kapsanır?", a: "ESYD ek V1/20, Yetki Tüzüğü (AB) 2025/2551 Ek I’deki on bir CBAM faaliyet grubunu kapsar. Bu gruplar çimento, demir ve çelik, alüminyum, gübre, elektrik ve hidrojen sektörlerini içerir." },
        { q: "MEVA’nın Türkiye’deki rolü nedir?", a: "MEVA Global Certification, EmiCert’in Türkiye’deki tek temsilcisidir. Akreditasyonun sahibi değildir. Yerel iletişim, başvuru koordinasyonu ve doğrulama organizasyonunu sağlar." },
        { q: "Hangi dokümantasyon gerekir?", a: "Tipik olarak izleme planı, faaliyet verisi, enerji ve üretim kayıtları, hesap dosyaları ve ilgili öncül veya tedarikçi kanıtı istenir. Liste her tesis için aynı değildir." },
        { q: "Birden fazla tesis nasıl ele alınır?", a: "Her tesisin sınırı, süreci ve verisi ayrı değerlendirilir. Teklif, tesis sayısına ve üretim rotalarına göre kapsamlanır." },
        { q: "2026 verisinin doğrulaması ne zaman planlanmalı?", a: "Planlama, yürürlükteki CBAM hükümlerine ve tesis verisinin hazırlık düzeyine göre yapılır." },
        { q: "Doğrulama teklifi nasıl talep edilir?", a: "Sayfanın sonundaki form, kurumsal e-posta adresine önceden doldurulmuş bir ileti açar. Alternatif olarak info@mevaglobalcertification.com adresine doğrudan yazabilirsiniz." },
      ],
      proposal: proposal("tr"),
    };
  }

  if (locale === "nl") {
    return {
      metaTitle: "CBAM-verificatie | Eerste geaccrediteerde instelling",
      metaDescription:
        "EmiCert S.A. levert ESYD-geaccrediteerde CBAM-verificatie over de volledige scope. MEVA Global Certification is de exclusieve vertegenwoordiger in Türkiye.",
      eyebrow: "Geaccrediteerde CBAM-verificatie",
      title: "’s Werelds eerste geaccrediteerde CBAM-verificatie-instelling",
      titleSecondary: "Geaccrediteerde verificatie in alle CBAM-sectoren",
      identity: "EmiCert S.A. | Exclusieve vertegenwoordiging in Türkiye door MEVA Global Certification",
      description:
        "EmiCert S.A., geaccrediteerd door het Hellenic Accreditation System (ESYD), levert onafhankelijke CBAM-verificatie over de volledige CBAM-scope. Via MEVA Global Certification, exclusief vertegenwoordiger in Türkiye, krijgen producenten en exporteurs toegang tot internationaal geaccrediteerde verificatie.",
      indicators: ["WERELDS EERSTE CBAM-ACCREDITATIE", "GEACCREDITEERD OVER DE VOLLEDIGE SCOPE", "ESYD-ACCREDITATIE NR. 874-9"],
      primaryCta: "CBAM-verificatievoorstel aanvragen",
      secondaryCta: "Accreditatiescope bekijken",
      tertiaryCta: "Het verificatieproces",
      statement: statement.nl,
      milestoneEyebrow: "Institutionele mijlpaal",
      milestoneTitle: "Een internationale mijlpaal in CBAM-verificatie",
      milestoneBody:
        "EmiCert S.A. is de eerste verificatie-instelling ter wereld met CBAM-accreditatie van ESYD. De accreditatie berust bij EmiCert S.A. MEVA is niet de geaccrediteerde instelling; MEVA coördineert lokaal in Türkiye.",
      facts: [
        { label: "Accreditatie-instelling", value: "ESYD — Hellenic Accreditation System" },
        { label: "Geaccrediteerde entiteit", value: "EmiCert S.A." },
        { label: "Certificaatnr.", value: "874-9" },
        { label: "Scope", value: "Volledige CBAM-scope" },
        { label: "Vertegenwoordiging Türkiye", value: "MEVA Global Certification — exclusief" },
      ],
      videoLabel: "Aankondiging EmiCert CBAM-accreditatie",
      officialLink: "EmiCert CBAM-pagina",
      certificateLink: "Accreditatiescope downloaden",
      scopeLink: "Accreditatiegegevens",
      sectorsEyebrow: "CBAM-verificatiescope",
      sectorsTitle: "Volledige scope Eén verificatiekader",
      sectorsIntro: "Geaccrediteerde verificatie volgt over de volledige CBAM-scope hetzelfde kader. De opdracht wordt bepaald door de installatie en de goederen.",
      sectors: [
        { ...sectorsEn[0], title: "IJzer en staal", summary: "IJzer- en staalgoederen binnen de CBAM-scope." },
        { ...sectorsEn[1], title: "Aluminium", summary: "Aluminiumgoederen binnen de CBAM-scope." },
        { ...sectorsEn[2], title: "Cement", summary: "Cementgoederen binnen de CBAM-scope." },
        { ...sectorsEn[3], title: "Meststoffen", summary: "Meststoffengoederen binnen de CBAM-scope." },
        { ...sectorsEn[4], title: "Waterstof", summary: "Waterstof binnen de CBAM-scope." },
        { ...sectorsEn[5], title: "Elektriciteit", summary: "Elektriciteit binnen de CBAM-scope." },
      ],
      assessedEyebrow: "Verificatiekader",
      assessedTitle: "Wat wordt bij geaccrediteerde verificatie beoordeeld?",
      assessedNote: "Het verificatiekader is over de volledige scope hetzelfde. De beoordeling omvat de installatiegrens, de monitoringsmethodologie, de activiteitsdata, de berekening van ingebedde emissies en het bewijs dat die berekening draagt.",
      assessed: [
        { title: "Installatiegrenzen en productieprocessen", body: "Welke installaties, lijnen en systeemgrenzen in de verklaring vallen, wordt afgebakend tegen het monitoringsplan en de feitelijke operatie." },
        { title: "Monitoringsmethodologie en monitoringsplan", body: "De gekozen methode en de samenhang tussen plan en uitvoering worden beoordeeld. Een ongewijzigd plan is niet hetzelfde als periodegegevens." },
        { title: "Activiteitsdata en energieverbruik", body: "Brandstof, aardgas en elektriciteit worden gekoppeld aan bronregistraties, voor zover die route ze vereist." },
        { title: "Directe en indirecte emissies", body: "Directe emissies en de indirecte emissies die de methodologie omvat, worden binnen hetzelfde verificatiekader langs afzonderlijke sporen beoordeeld." },
        { title: "Precursoren, ingebedde emissies en materiaalstromen", body: "Precursormaterialen, massabalans en productiehoeveelheden worden gevolgd waar ze de berekening beïnvloeden." },
        { title: "Traceerbaarheid en rapportage", body: "Rekenbestanden, monitoringsrecords en ondersteunende documenten moeten herleidbaar zijn tot de gerapporteerde waarde." },
      ],
      processEyebrow: "Proces",
      processTitle: "Verificatieproces",
      processNotice: "",
      process: [
        { title: "Aanvraag en scopedefinitie", body: "Installaties, goederen en rapportageperiode worden afgebakend. De verantwoordelijkheid blijft bij EmiCert S.A." },
        { title: "Verificatieplanning", body: "Team, bewijsvragen en sitebezoek worden op de scope afgestemd." },
        { title: "Beoordeling van de monitoringsmethodologie", body: "Plan, methode en rekenweg worden samen gelezen." },
        { title: "Verificatie van data en bewijs", body: "Bronnen, spreadsheets en leveranciersdata worden op traceerbaarheid getoetst." },
        { title: "Locatiebezoek en verificatieactiviteiten", body: "Waar de scope dat vereist, wordt de samenhang tussen records en operatie ter plaatse bekeken." },
        { title: "Onafhankelijke review en rapportage", body: "Bevindingen gaan door een onafhankelijke review. Het rapport volgt de scope en het bewijs." },
      ],
      whyEyebrow: "Institutionele reden",
      whyTitle: "Internationale accreditatie Lokale expertise",
      why: [
        { title: "Accreditatieleiderschap", body: "De eerste CBAM-accreditatie ter wereld en de sectordekking berusten bij EmiCert S.A." },
        { title: "Industriële dekking", body: "Verificatie behandelt cement, ijzer en staal, aluminium, meststoffen, elektriciteit en waterstof binnen dezelfde accreditatiescope." },
        { title: "Exclusieve vertegenwoordiging in Türkiye", body: "MEVA coördineert lokaal tussen Turkse producenten en EmiCert." },
        { title: "Onafhankelijkheid", body: "Bewijsgestuurde verificatie, onpartijdigheid en onafhankelijke review." },
      ],
      docsEyebrow: "Documenten",
      docsTitle: "Accreditatiegegevens",
      docsNote:
        "De accreditatie berust bij EmiCert S.A. De CBAM-scope hieronder is overgenomen uit bijlage V1/20 van 14 september 2026 bij ESYD-certificaat nr. 874-9. Het certificaat is geldig tot 9 juni 2030. MEVA Global Certification houdt die accreditatie niet.",
      scopeHeading: "CBAM-accreditatiescope",
      scopeSource: "Bijlage V1/20 bij ESYD-certificaat nr. 874-9. De namen staan zoals op de bijlage. Bijlage I van Gedelegeerde Verordening (EU) 2025/2551.",
      docs: [
        { label: "Accreditatie-instelling", value: "ESYD" },
        { label: "Geaccrediteerde entiteit", value: "EmiCert S.A." },
        { label: "Certificaatnr.", value: "874-9" },
        { label: "Scopebijlage", value: "V1/20 — 14 september 2026" },
        { label: "Geldig tot", value: "9 juni 2030" },
        { label: "Norm", value: "ELOT EN ISO/IEC 17029:2019" },
      ],
      faqEyebrow: "Vragen",
      faqTitle: "Veelgestelde vragen",
      faq: [
        { q: "Wat is CBAM-verificatie?", a: "Een onafhankelijke beoordeling van ingebedde-emissieverklaringen voor CBAM-goederen volgens de toepasselijke verificatieregels." },
        { q: "Wie mag geaccrediteerde CBAM-verificatie uitvoeren?", a: "Een verificatie-instelling die voor CBAM is geaccrediteerd. Op deze site is dat EmiCert S.A." },
        { q: "Is EmiCert geaccrediteerd voor CBAM?", a: "EmiCert heeft publiek gemaakt dat ESYD haar heeft geaccrediteerd voor CBAM-verificatie en dat dit de eerste dergelijke accreditatie is. Het certificaatnummer is 874-9. De geaccrediteerde entiteit is EmiCert S.A." },
        { q: "Welke sectoren vallen eronder?", a: "ESYD-bijlage V1/20 omvat de elf CBAM-activiteitsgroepen van bijlage I bij Gedelegeerde Verordening (EU) 2025/2551. Die groepen bestrijken cement, ijzer en staal, aluminium, meststoffen, elektriciteit en waterstof." },
        { q: "Wat is de rol van MEVA in Türkiye?", a: "MEVA is de exclusieve vertegenwoordiger, niet de geaccrediteerde instelling." },
        { q: "Welke documentatie is nodig?", a: "Doorgaans monitoringsplan, activiteitsdata, energie- en productierecords, rekenbestanden en waar relevant precursor- of leveranciersbewijs." },
        { q: "Hoe worden meerdere installaties behandeld?", a: "Elke installatie krijgt een eigen grens, proces en dataset. De offerte volgt het aantal installaties." },
        { q: "Wanneer moet verificatie van gegevens over 2026 worden gepland?", a: "De planning volgt de geldende CBAM-bepalingen en de gereedheid van de installatiegegevens." },
        { q: "Hoe vraag ik een verificatievoorstel aan?", a: "Het formulier opent een vooraf ingevuld bericht naar info@mevaglobalcertification.com." },
      ],
      proposal: proposal("nl"),
    };
  }

  return {
    metaTitle: "CBAM Verification | World’s First Accredited Body",
    metaDescription:
      "EmiCert S.A., accredited by ESYD, provides CBAM verification across the full scope. MEVA Global Certification is the exclusive representative in Türkiye.",
    eyebrow: "Accredited CBAM verification",
    title: "World's First Accredited CBAM Verification Body",
    titleSecondary: "Accredited Verification Across the Full CBAM Scope",
    identity: "EmiCert S.A. | Exclusive Representation in Türkiye by MEVA Global Certification",
    description:
      "EmiCert S.A., accredited by the Hellenic Accreditation System (ESYD), provides independent CBAM verification across the full scope. Through MEVA Global Certification, its exclusive representative in Türkiye, manufacturers and exporters can access internationally accredited verification services.",
    indicators: ["WORLD'S FIRST CBAM ACCREDITATION", "ACCREDITED ACROSS THE FULL SCOPE", "ESYD ACCREDITATION NO. 874-9"],
    primaryCta: "Request CBAM Verification Proposal",
    secondaryCta: "Explore Accreditation Scope",
    tertiaryCta: "Learn About the Verification Process",
    statement: statement.en,
    milestoneEyebrow: "Institutional milestone",
    milestoneTitle: "An International Milestone in CBAM Verification",
    milestoneBody:
      "EmiCert S.A. is the world's first verification body accredited for CBAM by the Hellenic Accreditation System (ESYD). The accreditation is held by EmiCert S.A. MEVA Global Certification does not hold that accreditation. As exclusive representative in Türkiye, MEVA coordinates local communication, applications and verification arrangements.",
    facts: [
      { label: "Accreditation body", value: "ESYD — Hellenic Accreditation System" },
      { label: "Accredited entity", value: "EmiCert S.A." },
      { label: "Certificate no.", value: "874-9" },
      { label: "Accreditation scope", value: "Full CBAM scope" },
      { label: "Türkiye representation", value: "MEVA Global Certification — exclusive" },
    ],
    videoLabel: "EmiCert CBAM accreditation announcement",
    officialLink: "EmiCert CBAM page",
    certificateLink: "Download the accreditation scope",
    scopeLink: "Accreditation record",
    sectorsEyebrow: "CBAM verification scope",
    sectorsTitle: "Full scope One verification framework",
    sectorsIntro:
      "Accredited verification is conducted under the same framework across the full CBAM scope. The engagement is set by the installation and the goods.",
    sectors: [...sectorsEn],
    assessedEyebrow: "Verification framework",
    assessedTitle: "What accredited verification examines",
    assessedNote:
      "The verification framework is the same across the full scope. The examination covers the installation boundary, the monitoring methodology, activity data, the embedded-emissions calculation and the evidence that supports it.",
    assessed: [
      { title: "Installation Boundaries & Production Processes", body: "The installations, production lines and system boundaries included in the declaration are read against the monitoring plan and the operation actually running." },
      { title: "Monitoring Methodology & Monitoring Plan", body: "The monitoring method, measurement or calculation choices, and the fit between the plan and practice are assessed. An unchanged plan is not the same document as the period data." },
      { title: "Activity Data & Energy Consumption", body: "Fuel consumption, natural gas and electricity are tied back to source records where the production route uses them. Which energy flows matter depends on the process." },
      { title: "Direct and Indirect Emissions", body: "Direct emissions and the indirect emissions covered by the methodology are examined within the same verification framework, on separate evidence trails." },
      { title: "Precursors, Embedded Emissions & Material Flows", body: "Precursor materials, mass balance and production quantities are followed where they enter the embedded-emissions calculation. Supplier emission data may form part of that chain." },
      { title: "Data Traceability and Reporting", body: "Calculation files, monitoring records and supporting documents must be traceable to the reported figure." },
    ],
    processEyebrow: "Process",
    processTitle: "Verification process",
    processNotice: "",
    process: [
      { title: "Application & Scope Definition", body: "Installations, goods and the reporting period are defined. Accredited verification remains under the responsibility of EmiCert S.A." },
      { title: "Verification Planning", body: "Team, evidence expectations and any site activity are planned to the scope." },
      { title: "Monitoring Methodology Assessment", body: "The monitoring plan and selected method are read together with activity data and the calculation path." },
      { title: "Data & Evidence Verification", body: "Source records, spreadsheets and supplier data are tested for traceability, including sampling where appropriate." },
      { title: "Site Visit and Verification Activities", body: "Where the scope requires it, on-site work tests whether records match the operation." },
      { title: "Independent Review & Verification Reporting", body: "Findings pass independent review. The report follows the evidence and the scope." },
    ],
    whyEyebrow: "Institutional case",
    whyTitle: "International accreditation Local expertise",
    why: [
      { title: "Accreditation Leadership", body: "The world's first CBAM accreditation and full-sector verification scope are held by EmiCert S.A." },
      { title: "Industrial coverage", body: "Verification addresses cement, iron and steel, aluminium, fertilisers, electricity and hydrogen within the same accreditation scope." },
      { title: "Exclusive Representation in Türkiye", body: "MEVA Global Certification provides direct local coordination between Turkish manufacturers and EmiCert." },
      { title: "Independence & Technical Integrity", body: "Evidence-based verification, impartiality and independent review." },
    ],
    docsEyebrow: "Documentation",
    docsTitle: "Accreditation record",
    docsNote:
      "The accreditation is held by EmiCert S.A. The CBAM scope below is taken from Annex V1/20 of 14 September 2026 to ESYD Certificate No. 874-9. The certificate is valid until 9 June 2030. MEVA Global Certification does not hold that accreditation.",
    scopeHeading: "CBAM accreditation scope",
    scopeSource:
      "Annex V1/20 to ESYD Certificate No. 874-9. Activity-group names are given as printed on the annex, in accordance with Annex I to Commission Delegated Regulation (EU) 2025/2551.",
    docs: [
      { label: "Accreditation body", value: "ESYD" },
      { label: "Accredited entity", value: "EmiCert S.A." },
      { label: "Certificate no.", value: "874-9" },
      { label: "Scope annex", value: "V1/20 — 14 September 2026" },
      { label: "Valid until", value: "9 June 2030" },
      { label: "Standard", value: "ELOT EN ISO/IEC 17029:2019" },
    ],
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is CBAM verification?", a: "An independent examination of embedded-emissions information for goods covered by the EU Carbon Border Adjustment Mechanism, carried out against the applicable verification requirements." },
      { q: "Who is authorised to perform accredited CBAM verification?", a: "Accredited verification is performed by a verification body accredited for CBAM by the relevant accreditation body. On this website, that accredited body is EmiCert S.A." },
      { q: "Is EmiCert accredited for CBAM verification?", a: "EmiCert states publicly that it is the world's first verification body accredited by ESYD for CBAM, under certificate No. 874-9. The accredited entity is EmiCert S.A." },
      { q: "Which CBAM sectors are covered?", a: "ESYD Annex V1/20 covers the eleven CBAM activity groups in Annex I to Commission Delegated Regulation (EU) 2025/2551. Those groups include cement, iron and steel, aluminium, fertilisers, electricity and hydrogen." },
      { q: "What is MEVA's role in Türkiye?", a: "MEVA Global Certification is EmiCert’s exclusive representative in Türkiye. MEVA does not hold EmiCert’s accreditation. MEVA facilitates local communication, application coordination and verification arrangements." },
      { q: "What documentation is required?", a: "Typically a monitoring plan, activity data, energy and production records, calculation files, and precursor or supplier evidence where the methodology requires them. The list is not identical for every installation." },
      { q: "How are multiple production facilities handled?", a: "Each installation is assessed on its own boundary, process and data. A proposal is scoped to the number of installations and production routes." },
      { q: "When should manufacturers plan verification of 2026 data?", a: "Planning follows the CBAM provisions in force and the readiness of the installation data." },
      { q: "How can a company request a verification proposal?", a: "The form at the end of this page opens a prefilled message to info@mevaglobalcertification.com. You may also write to that address directly." },
    ],
    proposal: proposal("en"),
  };
}
