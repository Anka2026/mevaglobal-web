import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TrustPillRow({ items }: { items: string[] }) {
  return (
    <section className="bg-white">
      <Container className="py-7 sm:py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {items.map((it) => (
            <div
              key={it}
              className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--brand-accent-soft)] px-4 py-2 text-sm font-semibold tracking-tight text-[color:var(--ink-dark)]/80"
            >
              <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-primary)]" aria-hidden="true" />
              <span>{it}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

