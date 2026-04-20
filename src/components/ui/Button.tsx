import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold tracking-tight transition-[background-color,border-color,box-shadow,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "border-transparent bg-[color:var(--brand-primary)] text-white shadow-sm hover:bg-[color:var(--brand-primary-hover)] hover:shadow-[var(--shadow-soft)]",
  secondary:
    "border-[color:var(--border-soft)] bg-white text-[color:var(--ink-dark)] shadow-[var(--shadow-card)] hover:border-[color:var(--brand-accent)]/35 hover:bg-[color:var(--brand-accent-soft)]",
  ghost:
    "border-transparent bg-transparent text-[color:var(--ink-dark)] hover:bg-[color:var(--brand-accent-soft)]",
};

const sizes: Record<Size, string> = {
  sm: "h-10",
  md: "h-11 px-5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

