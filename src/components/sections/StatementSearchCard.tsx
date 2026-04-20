import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FileSearch } from "lucide-react";

export function StatementSearchCard({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Card className="p-7 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)] ring-1 ring-[color:var(--border-soft)]/60">
            <FileSearch className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold leading-6 tracking-tight text-[color:var(--ink-dark)]">
              {dict.home.statementPreviewTitle}
            </p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
              {dict.home.statementPreviewIntro}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-3 lg:items-end">
          <ButtonLink
            href={`/${locale}/statement-search`}
            variant="primary"
            size="sm"
            className="h-auto min-h-10 w-full whitespace-normal px-4 py-2 text-center leading-snug sm:w-auto lg:max-w-[320px] lg:min-w-[220px]"
          >
            {dict.ctas.verifyStatement}
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}

