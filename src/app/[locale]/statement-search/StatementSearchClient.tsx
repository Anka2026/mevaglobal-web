"use client";

import { useMemo, useState } from "react";
import { FileText, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { statements, type StatementRecord } from "@/data/statements";
import { Button } from "@/components/ui/Button";
import { Input, Label, Select } from "@/components/ui/Field";
import { cn } from "@/lib/cn";
import {
  premiumCardElevated,
  premiumGoldTopLine,
  premiumInstitutionalPanel,
} from "@/lib/premiumUi";

type Filters = {
  statementNumber: string;
  companyName: string;
  standard: string;
  reportingYear: string;
};

function includesInsensitive(haystack: string | undefined | null, needle: string) {
  return (haystack ?? "").toLowerCase().includes(needle.toLowerCase());
}

const formShell = cn(
  premiumCardElevated,
  "relative p-6 sm:p-8",
);

const trustPanelClass = cn(
  premiumInstitutionalPanel,
  "relative p-6 sm:p-7",
);

const resultCardClass = cn(
  premiumCardElevated,
  "relative p-6 sm:p-7",
);

export function StatementSearchClient({ dict }: { dict: Dictionary }) {
  const ss = dict.pages.statementSearch;
  const fields = ss?.fields ?? {
    statementNumber: "",
    companyName: "",
    standard: "",
    reportingYear: "",
  };
  const placeholders = ss?.placeholders ?? { statementNumber: "", companyName: "" };
  const labels = ss?.labels ?? {
    status: "",
    verifiedValue: "",
    office: "",
    schemeType: "",
    clear: "",
    resultsCount: "",
    issuedBy: "",
  };
  const emptyState = ss?.emptyState ?? { line1: "", line2: "" };
  const noResultsText = ss?.noResults ?? "";
  const panelTitle = ss?.panelTitle ?? "";

  const [filters, setFilters] = useState<Filters>({
    statementNumber: "",
    companyName: "",
    standard: "",
    reportingYear: "",
  });

  const safeStatements = useMemo(() => (Array.isArray(statements) ? statements : []), []);

  const standards = useMemo(() => {
    const set = new Set(safeStatements.map((s) => s.standard).filter(Boolean));
    return Array.from(set).sort();
  }, [safeStatements]);

  const years = useMemo(() => {
    const set = new Set(safeStatements.map((s) => s.reportingYear).filter((y) => y != null));
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [safeStatements]);

  const results = useMemo(() => {
    const year = filters.reportingYear.trim();
    return safeStatements.filter((s) => {
      if (filters.statementNumber.trim() && !includesInsensitive(s.statementNumber, filters.statementNumber.trim()))
        return false;
      if (filters.companyName.trim() && !includesInsensitive(s.companyName, filters.companyName.trim())) return false;
      if (filters.standard && s.standard !== filters.standard) return false;
      if (year && String(s.reportingYear) !== year) return false;
      return true;
    });
  }, [filters, safeStatements]);

  const hasActiveFilters = Boolean(
    filters.statementNumber.trim() ||
      filters.companyName.trim() ||
      filters.standard ||
      filters.reportingYear.trim(),
  );

  const hasRegistryData = safeStatements.length > 0;

  return (
    <div className="mx-auto grid max-w-[76rem] gap-6 sm:gap-7">
      <div className={formShell}>
        <div className={premiumGoldTopLine} aria-hidden />
        {panelTitle ? (
          <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
            {panelTitle}
          </h2>
        ) : null}
        <div className={cn("grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4", panelTitle && "mt-5")}>
          <div className="min-w-0">
            <Label htmlFor="f-statementNumber">{fields.statementNumber}</Label>
            <Input
              id="f-statementNumber"
              value={filters.statementNumber}
              onChange={(e) => setFilters((p) => ({ ...p, statementNumber: e.target.value }))}
              placeholder={placeholders.statementNumber}
            />
          </div>
          <div className="min-w-0">
            <Label htmlFor="f-companyName">{fields.companyName}</Label>
            <Input
              id="f-companyName"
              value={filters.companyName}
              onChange={(e) => setFilters((p) => ({ ...p, companyName: e.target.value }))}
              placeholder={placeholders.companyName}
            />
          </div>
          <div className="min-w-0">
            <Label htmlFor="f-standard">{fields.standard}</Label>
            <Select
              id="f-standard"
              value={filters.standard}
              onChange={(e) => setFilters((p) => ({ ...p, standard: e.target.value }))}
            >
              <option value="">—</option>
              {standards.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </div>
          <div className="min-w-0">
            <Label htmlFor="f-reportingYear">{fields.reportingYear}</Label>
            <Select
              id="f-reportingYear"
              value={filters.reportingYear}
              onChange={(e) => setFilters((p) => ({ ...p, reportingYear: e.target.value }))}
            >
              <option value="">—</option>
              {years.map((y) => (
                <option key={String(y)} value={String(y)}>
                  {y}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-[color:color-mix(in_oklab,var(--brand-gold)_18%,var(--border-soft))] pt-5 sm:flex-row sm:items-center sm:justify-between">
          {hasRegistryData ? (
            <p className="text-xs tracking-[0.06em] text-[color:var(--text-muted)]">
              {labels.resultsCount}:{" "}
              <span className="font-semibold tabular-nums text-[color:var(--ink-dark)]">{results.length}</span>
            </p>
          ) : (
            <span />
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!hasRegistryData && !hasActiveFilters}
            className="h-9 self-start rounded-xl border border-transparent px-3.5 text-[color:var(--brand-primary)] hover:border-[color:color-mix(in_oklab,var(--brand-gold)_22%,var(--border-soft))] hover:bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_55%,white)] sm:self-auto"
            onClick={() => setFilters({ statementNumber: "", companyName: "", standard: "", reportingYear: "" })}
          >
            {labels.clear}
          </Button>
        </div>

        {ss?.note ? (
          <p className="mt-5 border-t border-[color:var(--border-soft)] pt-5 text-xs leading-relaxed text-[color:var(--text-muted)] sm:text-[0.8125rem]">
            {ss.note}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:gap-6">
        {results.length === 0 ? (
          <div className={trustPanelClass} role="status">
            <div className={premiumGoldTopLine} aria-hidden />
            <div className="flex gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_75%,white)] text-[color:var(--brand-primary)] ring-1 ring-[color:color-mix(in_oklab,var(--brand-gold)_22%,var(--border-soft))]">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-[1.75] text-[color:var(--ink-dark)] sm:text-[0.9375rem]">
                  {emptyState.line1}
                </p>
                <p className="mt-3 text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]">
                  {emptyState.line2}
                </p>
                {hasRegistryData && hasActiveFilters && noResultsText ? (
                  <p className="mt-4 text-xs font-medium leading-relaxed text-[color:var(--text-muted)]">{noResultsText}</p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          results.map((r) => <ResultCard key={r.id} record={r} dict={dict} />)
        )}
      </div>
    </div>
  );
}

function ResultCard({ record, dict }: { record: StatementRecord; dict: Dictionary }) {
  const ss = dict.pages.statementSearch;
  const v = ss?.values;
  const statusLabel = v?.status?.[record.status] ?? String(record.status);
  const officeLabel = v?.office?.[record.office] ?? String(record.office);
  const schemeTypeLabel = v?.schemeType?.[record.schemeType] ?? String(record.schemeType);
  const fld = ss?.fields ?? {
    statementNumber: "",
    companyName: "",
    standard: "",
    reportingYear: "",
  };
  const lab = ss?.labels ?? {
    status: "",
    verifiedValue: "",
    office: "",
    schemeType: "",
    clear: "",
    resultsCount: "",
    issuedBy: "",
  };

  return (
    <article className={resultCardClass}>
      <div className={premiumGoldTopLine} aria-hidden />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem]">
            {record.companyName}
          </h3>
          <p className="mt-2.5 text-sm leading-[1.72] text-[color:var(--text-muted)] sm:text-[0.9375rem]">{record.scopeSummary}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <KV label={fld.statementNumber} value={record.statementNumber} />
            <KV label={fld.standard} value={record.standard} />
            <KV label={fld.reportingYear} value={String(record.reportingYear)} />
            <KV label={lab.status} value={statusLabel} />
            <KV label={lab.verifiedValue} value={`${record.verifiedValue} ${record.verifiedUnit}`} />
            <KV label={lab.office} value={officeLabel} />
          </div>
        </div>
        <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-[color:color-mix(in_oklab,var(--brand-gold)_28%,var(--border-soft))] bg-[color:color-mix(in_oklab,var(--brand-gold-soft)_65%,white)] px-3.5 py-2 text-sm font-semibold text-[color:var(--brand-primary)] shadow-[var(--shadow-card)] lg:self-center">
          <FileText className="h-4 w-4 shrink-0" aria-hidden />
          <span>
            {lab.schemeType}: {schemeTypeLabel}
          </span>
        </div>
      </div>
    </article>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--brand-primary)]">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold text-[color:var(--ink-dark)]">{value}</p>
    </div>
  );
}
