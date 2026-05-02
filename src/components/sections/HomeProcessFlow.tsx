import { Fragment } from "react";
import { cn } from "@/lib/cn";
import { ProcessStepBadge, ProcessStepCard } from "@/components/cards/ProcessStepCard";
import { Card } from "@/components/ui/Card";

export type HomeProcessStep = {
  title: string;
  description: string;
};

/** Vertical spine colour — ties timeline to brand without loud contrast */
const spineClass =
  "bg-[color:color-mix(in_oklab,var(--brand-primary)_22%,var(--border-soft))]";

/** Subtle horizontal segment between desktop cards */
const connectorClass =
  "h-[2px] w-full rounded-full bg-[color:color-mix(in_oklab,var(--brand-accent)_32%,var(--border-soft))] opacity-[0.92]";

/** Visually “cuts” the spine behind the badge (matches homepage section canvas). */
const badgeSpineCutout = "shadow-[0_0_0_4px_var(--background-main)]";

function MobileProcessTimeline({ steps }: { steps: readonly HomeProcessStep[] }) {
  return (
    <ul className="relative space-y-6 lg:hidden">
      {steps.map((s, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={s.title} className="relative flex gap-4 sm:gap-5">
            <div className="relative flex w-11 shrink-0 flex-col items-center pt-0.5 sm:w-12">
              {!isLast ? (
                <div
                  className={cn(
                    "absolute left-1/2 top-[2.65rem] bottom-[-1.55rem] w-px -translate-x-1/2",
                    spineClass,
                  )}
                  aria-hidden
                />
              ) : null}
              <ProcessStepBadge
                index={i + 1}
                className={cn("relative z-[1]", badgeSpineCutout)}
              />
            </div>
            <Card className="min-w-0 flex-1 border-[color:var(--border-soft)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.04] sm:p-7">
              <h3 className="text-base font-semibold leading-snug tracking-tight text-[color:var(--ink-dark)]">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--text-muted)]">{s.description}</p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopConnectorRail() {
  return (
    <div
      className={cn(
        "hidden shrink-0 items-center self-start pt-12 lg:flex",
        "w-4 xl:w-7",
      )}
      aria-hidden
    >
      <div className={connectorClass} />
    </div>
  );
}

function DesktopProcessRow({
  steps,
  startIndex,
  centered,
}: {
  steps: readonly HomeProcessStep[];
  startIndex: number;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "hidden lg:flex lg:flex-row lg:items-stretch lg:gap-0",
        centered && "mx-auto w-full max-w-[52rem] xl:max-w-[56rem]",
      )}
    >
      {steps.map((s, i) => (
        <Fragment key={s.title}>
          <div className="min-w-0 flex-1">
            <ProcessStepCard index={startIndex + i} title={s.title} description={s.description} />
          </div>
          {i < steps.length - 1 ? <DesktopConnectorRail /> : null}
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Homepage “working model” section: 7 steps as a connected flow — desktop 4+3 with
 * restrained horizontal segments; mobile vertical spine with numbered nodes.
 */
export function HomeProcessFlow({ steps }: { steps: readonly HomeProcessStep[] }) {
  const first = steps.slice(0, 4);
  const second = steps.slice(4, 7);

  return (
    <div className="mt-10">
      <MobileProcessTimeline steps={steps} />

      <div className="hidden flex-col gap-14 lg:flex">
        <DesktopProcessRow steps={first} startIndex={1} />
        <DesktopProcessRow steps={second} startIndex={5} centered />
      </div>
    </div>
  );
}
