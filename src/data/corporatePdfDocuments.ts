import type { Locale } from "@/i18n/locales";

export type CorporatePdfId =
  | "f-vv-026"
  | "p-vv-006"
  | "p-vv-010"
  | "p-vv-011"
  | "t-vv-003";

type Localized = Record<Locale, string>;

export type CorporatePdfDocument = {
  id: CorporatePdfId;
  code: string;
  /** Public URL under `/public/docs`. */
  file: `/${string}`;
  title: Localized;
  typeLabel: Localized;
  shortDescription: Localized;
  /** ISO date yyyy-mm-dd for consistent formatting. */
  firstPublished: string;
};

/** Central registry for corporate PDFs shown on the accreditation page. Filenames must exist under `public/docs/`. */
export const CORPORATE_PDF_DOCUMENTS: readonly CorporatePdfDocument[] = [
  {
    id: "f-vv-026",
    code: "F.VV.026",
    file: "/docs/F-VV-026-general-terms.pdf",
    title: {
      tr: "Genel Şartlar Ve Koşullar",
      en: "General Terms And Conditions",
      nl: "Algemene Voorwaarden",
    },
    typeLabel: {
      tr: "Genel Şartlar",
      en: "General Terms",
      nl: "Algemene Voorwaarden",
    },
    shortDescription: {
      tr: "Doğrulama ve geçerli kılma hizmet sözleşmelerine eşlik eden genel şartlar ve temel uygulama hükümleri.",
      en: "General terms governing validation and verification engagements and core contractual conditions.",
      nl: "Algemene voorwaarden voor validatie- en verificatieopdrachten en de bijbehorende contractuele basisvoorwaarden.",
    },
    firstPublished: "2026-04-18",
  },
  {
    id: "p-vv-006",
    code: "P.VV.006",
    file: "/docs/P-VV-006-complaint-appeal.pdf",
    title: {
      tr: "Şikâyet Ve İtiraz Prosedürü",
      en: "Complaint And Appeal Procedure",
      nl: "Klachten- En Beroepsprocedure",
    },
    typeLabel: {
      tr: "Prosedür",
      en: "Procedure",
      nl: "Procedure",
    },
    shortDescription: {
      tr: "Şikâyet ve itirazların alınması, incelenmesi ve sonuçlandırılmasına ilişkin süreç kuralları.",
      en: "Procedure defining how complaints and appeals are received, reviewed, and concluded.",
      nl: "Procedure voor de ontvangst, beoordeling en afhandeling van klachten en beroepen.",
    },
    firstPublished: "2026-04-18",
  },
  {
    id: "p-vv-010",
    code: "P.VV.010",
    file: "/docs/P-VV-010-impartiality.pdf",
    title: {
      tr: "Tarafsızlık Prosedürü",
      en: "Impartiality Procedure",
      nl: "Onpartijdigheidsprocedure",
    },
    typeLabel: {
      tr: "Prosedür",
      en: "Procedure",
      nl: "Procedure",
    },
    shortDescription: {
      tr: "Tarafsızlığın korunması, çıkar çatışmalarının yönetimi ve bağımsız karar yapısına ilişkin kurallar.",
      en: "Procedure describing safeguards for impartiality, conflict-of-interest management, and objective decision-making.",
      nl: "Procedure voor het waarborgen van onpartijdigheid, het beheersen van belangenconflicten en objectieve besluitvorming.",
    },
    firstPublished: "2026-04-18",
  },
  {
    id: "p-vv-011",
    code: "P.VV.011",
    file: "/docs/P-VV-011-confidentiality.pdf",
    title: {
      tr: "Gizlilik Prosedürü",
      en: "Confidentiality Procedure",
      nl: "Vertrouwelijkheidsprocedure",
    },
    typeLabel: {
      tr: "Prosedür",
      en: "Procedure",
      nl: "Procedure",
    },
    shortDescription: {
      tr: "Doğrulama ve geçerli kılma faaliyetlerinde elde edilen bilgilerin gizliliğinin korunmasına ilişkin esaslar.",
      en: "Procedure setting out how confidentiality is protected for information obtained through validation and verification activities.",
      nl: "Procedure voor de bescherming van vertrouwelijkheid van informatie die wordt verkregen tijdens validatie- en verificatieactiviteiten.",
    },
    firstPublished: "2026-04-18",
  },
  {
    id: "t-vv-003",
    code: "T.VV.003",
    file: "/docs/T-VV-003-logo-statement-usage.pdf",
    title: {
      tr: "Logo Ve Beyan Kullanım Talimatı",
      en: "Logo And Statement Usage Instruction",
      nl: "Instructie Voor Het Gebruik Van Logo En Verklaring",
    },
    typeLabel: {
      tr: "Talimat",
      en: "Instruction",
      nl: "Instructie",
    },
    shortDescription: {
      tr: "MEVA logosu, doğrulama/geçerli kılma beyanı ve ilgili atıfların doğru kullanım kuralları.",
      en: "Instruction defining correct use of the MEVA logo, statements, and related public references.",
      nl: "Instructie voor het correcte gebruik van het MEVA-logo, verklaringen en gerelateerde verwijzingen.",
    },
    firstPublished: "2026-04-18",
  },
] as const;

export function formatDocDate(iso: string, locale: Locale): string {
  try {
    const d = new Date(iso + "T12:00:00");
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : locale === "nl" ? "nl-NL" : "en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(d);
  } catch {
    return iso;
  }
}
