export type StatementRecord = {
  id: string;
  statementNumber: string;
  companyName: string;
  country: string;
  standard: string;
  schemeType: "verification" | "validation" | "assurance";
  reportingYear: number;
  status: "Active" | "Expired" | "Withdrawn";
  issueDate: string; // YYYY-MM-DD
  validUntil: string; // YYYY-MM-DD
  verifiedValue: number;
  verifiedUnit: string;
  assuranceLevel: "Limited" | "Reasonable";
  scopeSummary: string;
  office: "Türkiye" | "Netherlands";
  publicNote: string;
};

/** Public registry dataset (populated when published records are available). */
export const statements: StatementRecord[] = [];
