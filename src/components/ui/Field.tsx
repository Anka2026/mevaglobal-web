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
  "mt-2 w-full rounded-2xl border border-[color:var(--border-soft)] bg-white px-4 py-3 text-sm text-[color:var(--ink-dark)] shadow-[var(--shadow-card)] outline-none transition-[border-color,box-shadow] placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--brand-accent)]/70 focus:shadow-[var(--shadow-soft)] focus:ring-2 focus:ring-[color:var(--ring)]";

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

