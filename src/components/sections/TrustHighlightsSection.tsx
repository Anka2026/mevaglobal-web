import { Scale, FileCheck2, GitBranch, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";

const icons = [Scale, FileCheck2, GitBranch, Globe2] as const;

export function TrustHighlightsSection({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="border-b border-[color:var(--border-soft)] bg-white py-12 sm:py-14">
      <Container>
        <div className="mx-auto max-w-[76rem]">
          <SectionHeading
            title={title}
            className="max-w-[40rem]"
            titleClassName="text-[1.65rem] sm:text-[2rem]"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {items.map((item, idx) => {
              const Icon = icons[idx] ?? Globe2;
              return (
                <Card key={item.title} className="h-full p-6 sm:p-7">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-primary)] ring-1 ring-[color:var(--border-soft)]/60">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-[0.9375rem] sm:leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
