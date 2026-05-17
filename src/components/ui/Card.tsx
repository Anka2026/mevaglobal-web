import { cn } from "@/lib/cn";
import { premiumCardInteractive } from "@/lib/premiumUi";

export function Card({
  className,
  children,
  interactive = true,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  /** When false, card is static (no hover lift). */
  interactive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        interactive
          ? premiumCardInteractive
          : "rounded-[1.0625rem] border border-[color:color-mix(in_oklab,var(--brand-accent)_14%,var(--border-soft))] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.035]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
