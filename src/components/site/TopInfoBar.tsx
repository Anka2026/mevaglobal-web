import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/ui/Container";

export function TopInfoBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="border-b border-[color:var(--border-soft)] bg-white/70 backdrop-blur">
      <Container className="max-w-6xl py-3 sm:py-[0.875rem]">
        <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--text-muted)]">
          {dict.brand.taglineTopBar}
        </p>
      </Container>
    </div>
  );
}

