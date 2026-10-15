import type { Locale } from "@/i18n/locales";

export type SectionMenuItem = { label: string; href: string };

export type SectionMenus = {
  services: SectionMenuItem[];
  cbam: SectionMenuItem[];
  process: SectionMenuItem[];
};

export const sectionMenus: Record<Locale, SectionMenus> = {
  en: {
    services: [
      { label: "Verification & Validation", href: "/verification-services" },
      { label: "Greenhouse Gas Verification", href: "/verification-services#services-climate-carbon" },
      { label: "ISO 14064-1 Verification", href: "/verification-services/iso-14064-1" },
      { label: "CBAM Verification", href: "/cbam-solutions" },
      { label: "Independent Technical Review", href: "/verification-services/iso-14064-3-review-support" },
      { label: "Other Services", href: "/verification-services" },
    ],
    cbam: [
      { label: "CBAM Verification Overview", href: "/cbam-solutions#overview" },
      { label: "EmiCert Accreditation", href: "/cbam-solutions#emicert" },
      { label: "CBAM Sectors", href: "/cbam-solutions#sectors" },
      { label: "Verification Methodology", href: "/cbam-solutions#assessed" },
      { label: "Verification Process", href: "/cbam-solutions#process" },
      { title: "Required Documentation", href: "/cbam-solutions#documentation" },
      { label: "Request a Verification Proposal", href: "/cbam-solutions#proposal" },
    ],
    process: [
      { label: "Accreditation Overview", href: "/verification-process#accreditation-hero" },
      { label: "EmiCert CBAM Accreditation", href: "/verification-process#emicert-cbam" },
      { label: "Certificates & Scope Documents", href: "/verification-process#corporate-documents" },
      { label: "Accreditation Verification", href: "/verification-process#verification-process-section" },
      { label: "Representation & Responsibilities", href: "/verification-process#representation" },
    ],
  },
  tr: {
    services: [
      { label: "Doğrulama ve Validasyon", href: "/verification-services" },
      { label: "Sera Gazı Doğrulaması", href: "/verification-services#services-climate-carbon" },
      { label: "ISO 14064-1 Doğrulaması", href: "/verification-services/iso-14064-1" },
      { label: "CBAM Doğrulaması", href: "/cbam-solutions" },
      { label: "Bağımsız Teknik İnceleme", href: "/verification-services/iso-14064-3-review-support" },
      { label: "Diğer Hizmetler", href: "/verification-services" },
    ],
    cbam: [
      { label: "CBAM Doğrulama Genel Bakış", href: "/cbam-solutions#overview" },
      { label: "EmiCert Akreditasyonu", href: "/cbam-solutions#emicert" },
      { label: "CBAM Sektörleri", href: "/cbam-solutions#sectors" },
      { label: "Doğrulama Metodolojisi", href: "/cbam-solutions#assessed" },
      { label: "Doğrulama Süreci", href: "/cbam-solutions#process" },
      { label: "Gerekli Dokümantasyon", href: "/cbam-solutions#documentation" },
      { label: "Doğrulama Teklifi Talep Et", href: "/cbam-solutions#proposal" },
    ],
    process: [
      { label: "Akreditasyon Genel Bakış", href: "/verification-process#accreditation-hero" },
      { label: "EmiCert CBAM Akreditasyonu", href: "/verification-process#emicert-cbam" },
      { label: "Sertifikalar ve Kapsam Belgeleri", href: "/verification-process#corporate-documents" },
      { label: "Akreditasyon Doğrulaması", href: "/verification-process#verification-process-section" },
      { label: "Temsil ve Sorumluluklar", href: "/verification-process#representation" },
    ],
  },
  nl: {
    services: [
      { label: "Verificatie en validatie", href: "/verification-services" },
      { label: "Broeikasgasverificatie", href: "/verification-services#services-climate-carbon" },
      { label: "ISO 14064-1-verificatie", href: "/verification-services/iso-14064-1" },
      { label: "CBAM-verificatie", href: "/cbam-solutions" },
      { label: "Onafhankelijke technische beoordeling", href: "/verification-services/iso-14064-3-review-support" },
      { label: "Overige diensten", href: "/verification-services" },
    ],
    cbam: [
      { label: "Overzicht CBAM-verificatie", href: "/cbam-solutions#overview" },
      { label: "EmiCert-accreditatie", href: "/cbam-solutions#emicert" },
      { label: "CBAM-sectoren", href: "/cbam-solutions#sectors" },
      { label: "Verificatiemethodologie", href: "/cbam-solutions#assessed" },
      { label: "Verificatieproces", href: "/cbam-solutions#process" },
      { label: "Vereiste documentatie", href: "/cbam-solutions#documentation" },
      { label: "Verificatievoorstel aanvragen", href: "/cbam-solutions#proposal" },
    ],
    process: [
      { label: "Accreditatieoverzicht", href: "/verification-process#accreditation-hero" },
      { label: "EmiCert CBAM-accreditatie", href: "/verification-process#emicert-cbam" },
      { label: "Certificaten en scope", href: "/verification-process#corporate-documents" },
      { label: "Accreditatieverificatie", href: "/verification-process#verification-process-section" },
      { label: "Vertegenwoordiging en verantwoordelijkheden", href: "/verification-process#representation" },
    ],
  },
};
