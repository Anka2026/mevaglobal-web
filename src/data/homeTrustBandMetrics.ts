import type { Locale } from "@/i18n/locales";

/** Numeric targets and suffixes — locale-agnostic; labels are translated separately. */
export const HOME_TRUST_BAND_ROW_DEFS = [
  { target: 100, suffix: "+" as const },
  { target: 10, suffix: "+" as const },
  { target: 42, suffix: "" as const },
] as const;

/** Stable display strings for reference / non-animated contexts. */
export const HOME_TRUST_BAND_VALUES = {
  completedAssignments: `${HOME_TRUST_BAND_ROW_DEFS[0]!.target}${HOME_TRUST_BAND_ROW_DEFS[0]!.suffix}`,
  sectorExpertise: `${HOME_TRUST_BAND_ROW_DEFS[1]!.target}${HOME_TRUST_BAND_ROW_DEFS[1]!.suffix}`,
  serviceAreas: `${HOME_TRUST_BAND_ROW_DEFS[2]!.target}${HOME_TRUST_BAND_ROW_DEFS[2]!.suffix}`,
} as const;

export type HomeTrustBandMetric = {
  target: number;
  suffix: "" | "+";
  label: string;
};

export const HOME_TRUST_BAND_METRICS: Record<Locale, readonly HomeTrustBandMetric[]> = {
  tr: [
    { ...HOME_TRUST_BAND_ROW_DEFS[0], label: "Tamamlanan Teknik Çalışma" },
    { ...HOME_TRUST_BAND_ROW_DEFS[1], label: "Sektörel Uzmanlık Alanı" },
    { ...HOME_TRUST_BAND_ROW_DEFS[2], label: "Hizmet Grubu" },
  ],
  en: [
    { ...HOME_TRUST_BAND_ROW_DEFS[0], label: "Completed Technical Engagements" },
    { ...HOME_TRUST_BAND_ROW_DEFS[1], label: "Sector Expertise Areas" },
    { ...HOME_TRUST_BAND_ROW_DEFS[2], label: "Structured Service Lines" },
  ],
  nl: [
    { ...HOME_TRUST_BAND_ROW_DEFS[0], label: "Afgeronde Technische Opdrachten" },
    { ...HOME_TRUST_BAND_ROW_DEFS[1], label: "Sectorale Expertisegebieden" },
    { ...HOME_TRUST_BAND_ROW_DEFS[2], label: "Gestructureerde Dienstlijnen" },
  ],
};
