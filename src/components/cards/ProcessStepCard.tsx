import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { premiumStepBadge } from "@/lib/premiumUi";

export function ProcessStepBadge({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  return (
    <div className={cn(premiumStepBadge, className)}>
      {String(index).padStart(2, "0")}
    </div>
  );
}

export function ProcessStepCard({
  index,
  title,
  description,
  className,
}: {
  index: number;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={cn("group relative h-full p-6 sm:p-7", className)}>
      <div className="flex items-start gap-4">
        <ProcessStepBadge index={index} />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-[1.0625rem] sm:leading-6">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)]">{description}</p>
        </div>
      </div>
    </Card>
  );
}
