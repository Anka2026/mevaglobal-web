import { Card } from "@/components/ui/Card";

export function ProcessStepCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.04] sm:p-8">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-accent-soft)] text-sm font-semibold text-[color:var(--brand-primary)] ring-1 ring-[color:var(--border-soft)]/60">
          {String(index).padStart(2, "0")}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold leading-6 tracking-tight text-[color:var(--ink-dark)]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{description}</p>
        </div>
      </div>
    </Card>
  );
}

