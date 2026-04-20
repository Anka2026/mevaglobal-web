import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
  descriptionVariant = "default",
  visual,
  compactVertical,
  /** Narrower vertical rhythm for compact marketing heroes (e.g. contact). */
  denseHero,
  /** Wider text column for richer intros (e.g. services index). */
  wideIntro,
}: {
  eyebrow?: string;
  title: string;
  description?: string | string[];
  descriptionVariant?: "default" | "lead-support";
  visual?: React.ReactNode;
  /** Tighter hero padding (e.g. dense service index layouts). */
  compactVertical?: boolean;
  denseHero?: boolean;
  wideIntro?: boolean;
}) {
  const heroPadding = denseHero
    ? "py-6 sm:py-7 lg:py-8"
    : compactVertical
      ? "py-10 sm:py-12"
      : "py-14 sm:py-16";
  const heroGap = denseHero ? "gap-6 sm:gap-7" : compactVertical ? "gap-6 lg:gap-8" : "gap-8 lg:gap-10";

  return (
    <section className="border-b border-[color:var(--border-soft)] bg-white">
      <Container className={heroPadding}>
        {visual ? (
          <div
            className={cn(
              "grid items-stretch lg:grid-cols-12",
              heroGap,
            )}
          >
            <div className={cn("flex min-h-0 min-w-0 flex-col", wideIntro ? "lg:col-span-8" : "lg:col-span-7")}>
              <SectionHeading
                titleAs="h1"
                eyebrow={eyebrow}
                title={title}
                description={description}
                descriptionVariant={descriptionVariant}
                className="max-w-none"
              />
            </div>
            <div
              className={cn(
                "flex min-h-0 min-w-0 lg:h-full lg:min-h-0 lg:justify-end",
                wideIntro ? "lg:col-span-4" : "lg:col-span-5",
              )}
            >
              <div
                className={cn(
                  "flex h-full w-full max-w-[520px] min-h-[200px] flex-col sm:min-h-[220px] lg:min-h-0",
                  denseHero
                    ? "max-h-[min(22rem,44vh)] lg:max-h-[min(20rem,40vh)]"
                    : "max-h-[min(28rem,52vh)] sm:min-h-[240px] lg:max-h-[min(26rem,46vh)]",
                )}
              >
                {visual}
              </div>
            </div>
          </div>
        ) : (
          <SectionHeading
            titleAs="h1"
            eyebrow={eyebrow}
            title={title}
            description={description}
            descriptionVariant={descriptionVariant}
          />
        )}
      </Container>
    </section>
  );
}

