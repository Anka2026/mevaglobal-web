import { MEVA_KVK_NUMBER } from "@/data/companyRegistry";
import { cn } from "@/lib/cn";

export type CompanyRegistryCopy = {
  registryCompanyName: string;
  registryLocations: readonly string[];
  registryKvKLabel: string;
};

type Props = {
  copy: CompanyRegistryCopy;
  variant?: "footer" | "panel";
  className?: string;
};

/**
 * Corporate registration lines: legal entity, jurisdiction, KvK number.
 * Kept separate from office address blocks.
 */
export function CompanyRegistryBlock({ copy, variant = "footer", className }: Props) {
  const isFooter = variant === "footer";

  return (
    <div
      className={cn(
        isFooter
          ? "mt-5 space-y-1 border-t border-white/10 pt-4"
          : "mt-5 space-y-1 rounded-xl border border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--brand-accent-soft)_30%,white)] px-4 py-3.5 sm:px-5 sm:py-4",
        className,
      )}
    >
      <p
        className={cn(
          "font-medium leading-[1.55]",
          isFooter ? "text-xs text-white/72" : "text-sm text-[color:var(--ink-dark)]",
        )}
      >
        {copy.registryCompanyName}
      </p>
      {copy.registryLocations.map((line) => (
        <p
          key={line}
          className={cn("leading-[1.55]", isFooter ? "text-xs text-white/58" : "text-sm text-[color:var(--text-muted)]")}
        >
          {line}
        </p>
      ))}
      <p className={cn("leading-[1.55]", isFooter ? "text-xs text-white/58" : "text-sm text-[color:var(--text-muted)]")}>
        {copy.registryKvKLabel}: {MEVA_KVK_NUMBER}
      </p>
    </div>
  );
}
