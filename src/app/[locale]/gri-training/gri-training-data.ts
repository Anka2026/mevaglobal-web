import type { Locale } from "@/i18n/locales";

export const GRI_TRAINING_MARK_SRC = "/partner-logos/gri-certified-training-partner.png";

export const GRI_TRAINING_PDFS = [
  {
    id: "catalog-2026",
    href: "/docs/gri-education-catalog-2026.pdf",
    year: "2026",
    title: {
      en: "GRI Education Catalog 2026",
      tr: "GRI Education Catalog 2026",
      nl: "GRI Education Catalog 2026",
    },
    typeLabel: {
      en: "Course catalog",
      tr: "Eğitim kataloğu",
      nl: "Cursuscatalogus",
    },
    description: {
      en: "Official GRI Education Catalog with the 2026 course offering for GRI certified training.",
      tr: "GRI sertifikalı eğitimlere yönelik 2026 kurs teklifini içeren resmi GRI Education Catalog.",
      nl: "Officiële GRI Education Catalog met het cursusaanbod 2026 voor GRI-gecertificeerde training.",
    },
  },
  {
    id: "leaflet-2025",
    href: "/docs/gri-certification-2025-leaflet.pdf",
    year: "2025",
    title: {
      en: "GRI Certification Leaflet 2025",
      tr: "GRI Certification Leaflet 2025",
      nl: "GRI Certification Leaflet 2025",
    },
    typeLabel: {
      en: "Programme leaflet",
      tr: "Program broşürü",
      nl: "Programmabrochure",
    },
    description: {
      en: "Overview of the GRI Certified Sustainability Professional pathway, including self-paced and trainer-led routes.",
      tr: "GRI Certified Sustainability Professional yolunu; kendi hızında e-öğrenme ve eğitmen liderliğindeki güzergâhlarla özetleyen resmi broşür.",
      nl: "Overzicht van het traject tot GRI Certified Sustainability Professional, inclusief zelfstandig e-learning en trainer-geleide routes.",
    },
  },
] as const;

export type GriTrainingPageCopy = {
  eyebrow: string;
  title: string;
  intro: readonly [string, string];
  materialsHeading: string;
  viewPdf: string;
  markAlt: string;
  contactTitle: string;
  contactBody: string;
};

export const GRI_TRAINING_PAGE_COPY: Record<Locale, GriTrainingPageCopy> = {
  en: {
    eyebrow: "CETIZION Verifica • Global GRI Certified Training Partner",
    title: "GRI Certified Training",
    intro: [
      "CETIZION Verifica is a Global GRI Certified Training Partner, authorized to deliver GRI certified training internationally. Through the strategic partnership between Meva Global Certification and CETIZION Verifica, these programmes are available to organisations in Türkiye and international markets.",
      "Programme content, course options and the certification pathway are set out in the official GRI materials below. Meva Global coordinates client communication and access; GRI certified training is delivered under CETIZION Verifica’s GRI training authorization.",
    ],
    materialsHeading: "Programme materials",
    viewPdf: "View PDF",
    markAlt: "CETIZION Verifica Global GRI Certified Training Partner mark",
    contactTitle: "Request GRI certified training",
    contactBody:
      "For course selection, delivery format and scheduling, contact Meva Global. Enrolment and training delivery follow CETIZION Verifica’s GRI Certified Training Partner authorization.",
  },
  tr: {
    eyebrow: "CETIZION Verifica • Global GRI Certified Training Partner",
    title: "GRI Sertifikalı Eğitimler",
    intro: [
      "CETIZION Verifica, GRI sertifikalı eğitimlerini uluslararası ölçekte sunma yetkisine sahip bir Global GRI Certified Training Partner’dır. Meva Global Certification ile CETIZION Verifica arasındaki stratejik iş birliği kapsamında bu programlar Türkiye’de ve uluslararası pazarlarda kurumlara sunulmaktadır.",
      "Program içeriği, kurs seçenekleri ve sertifikasyon yolu aşağıdaki resmi GRI dokümanlarında yer alır. Meva Global müşteri iletişimi ve erişim koordinasyonunu yürütür; GRI sertifikalı eğitimler CETIZION Verifica’nın GRI eğitim yetkisi kapsamında verilir.",
    ],
    materialsHeading: "Program dokümanları",
    viewPdf: "PDF’i incele",
    markAlt: "CETIZION Verifica Global GRI Certified Training Partner işareti",
    contactTitle: "GRI sertifikalı eğitim talebi",
    contactBody:
      "Kurs seçimi, sunum formatı ve planlama için Meva Global ile iletişime geçebilirsiniz. Kayıt ve eğitim sunumu, CETIZION Verifica’nın GRI Certified Training Partner yetkisi çerçevesinde yürütülür.",
  },
  nl: {
    eyebrow: "CETIZION Verifica • Global GRI Certified Training Partner",
    title: "GRI Certified Training",
    intro: [
      "CETIZION Verifica is een Global GRI Certified Training Partner, bevoegd om GRI-gecertificeerde training internationaal te verzorgen. Via het strategische partnerschap tussen Meva Global Certification en CETIZION Verifica zijn deze programma’s beschikbaar voor organisaties in Türkiye en internationale markten.",
      "Programma-inhoud, cursusopties en het certificeringstraject staan in de officiële GRI-documenten hieronder. Meva Global coördineert klantcommunicatie en toegang; GRI-gecertificeerde training wordt verzorgd onder de GRI-trainingsbevoegdheid van CETIZION Verifica.",
    ],
    materialsHeading: "Programmamateriaal",
    viewPdf: "PDF bekijken",
    markAlt: "Global GRI Certified Training Partner-merk van CETIZION Verifica",
    contactTitle: "GRI-gecertificeerde training aanvragen",
    contactBody:
      "Neem contact op met Meva Global voor cursuskeuze, leveringsvorm en planning. Inschrijving en training verlopen via de GRI Certified Training Partner-bevoegdheid van CETIZION Verifica.",
  },
};
