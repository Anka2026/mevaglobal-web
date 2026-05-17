import { cn } from "@/lib/cn";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { className?: string }) {
  return (
    <label
      className={cn(
        "text-xs font-semibold tracking-[0.12em] text-[color:var(--text-muted)]",
        className,
      )}
      {...props}
    />
  );
}

const inputBase =
  "mt-2 w-full rounded-xl border border-[color:color-mix(in_oklab,var(--brand-accent)_12%,var(--border-soft))] bg-white px-4 py-3 text-sm text-[color:var(--ink-dark)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition-[border-color,box-shadow,ring-color] duration-200 placeholder:text-[color:var(--text-muted)] focus:border-[color:color-mix(in_oklab,var(--brand-gold)_42%,var(--border-soft))] focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--brand-gold)_25%,transparent),var(--shadow-card)] focus:ring-2 focus:ring-[color:color-mix(in_oklab,var(--brand-gold)_22%,var(--ring))] focus:ring-offset-1";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return <input className={cn(inputBase, className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { className?: string }) {
  return (
    <select className={cn(inputBase, className)} {...props}>
      {children}
    </select>
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) {
  return <textarea className={cn(inputBase, "min-h-32 resize-y", className)} {...props} />;
}

export function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-[color:var(--text-muted)]">{children}</p>;
}

