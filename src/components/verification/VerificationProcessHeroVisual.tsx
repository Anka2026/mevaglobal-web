import { Fragment, useId } from "react";
import type { Dictionary } from "@/i18n/types";
import { cn } from "@/lib/cn";
import { editorialPhotoShellClass } from "@/lib/visualImage";

type Props = {
  visual: Dictionary["pages"]["process"]["verificationProcessHeroVisual"];
};

function FlowArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-6 shrink-0 text-[#005691]/55", className)}
      viewBox="0 0 24 14"
      fill="none"
      aria-hidden
    >
      <path d="M2 7h16m-5-5 6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ConnectorGraphic({ className }: { className?: string }) {
  return (
    <svg className={cn("w-full max-w-[6.25rem] text-[#005691]", className)} viewBox="0 0 100 120" fill="none" aria-hidden>
      <circle cx="50" cy="18" r="5" fill="currentColor" opacity="0.9" />
      <path d="M50 23v28" stroke="currentColor" strokeWidth="1.5" opacity="0.45" strokeDasharray="4 4" />
      <circle cx="50" cy="58" r="5" fill="currentColor" opacity="0.75" />
      <path d="M50 63v28" stroke="currentColor" strokeWidth="1.5" opacity="0.45" strokeDasharray="4 4" />
      <circle cx="50" cy="98" r="5" fill="currentColor" opacity="0.55" />
      <path d="M55 58h34M55 98h34" stroke="currentColor" strokeWidth="1.25" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}

function DecorativePie({ className }: { className?: string }) {
  return (
    <svg className={cn(className)} viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="28" stroke="#005691" strokeOpacity="0.08" strokeWidth="8" />
      <path
        d="M40 40 L40 14 A26 26 0 0 1 62 52 Z"
        fill="#005691"
        fillOpacity="0.07"
      />
      <path
        d="M40 40 L62 52 A26 26 0 0 1 28 64 Z"
        fill="#003f73"
        fillOpacity="0.06"
      />
    </svg>
  );
}

/**
 * Premium locale-driven infographic for Verification Process hero (no raster).
 */
export function VerificationProcessHeroVisual({ visual }: Props) {
  const uid = useId().replace(/:/g, "");
  const tabs = visual.tabs;
  const flow = visual.flowBoxes;
  const checklist = visual.checklistRows;
  const ev = visual.evidenceCard;

  return (
    <div
      className={cn(editorialPhotoShellClass, "min-h-[252px] sm:min-h-[328px] lg:min-h-[360px]")}
      role="img"
      aria-label={visual.ariaLabel}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border border-[#d9e6f2]",
          "bg-gradient-to-br from-[#f4f8fc] via-[#eef5fb] to-white",
          "shadow-[0_22px_56px_-30px_rgba(0,63,115,0.22)] ring-1 ring-[#005691]/[0.07]",
        )}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 520 340" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <linearGradient id={`${uid}-arc`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#005691" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#003f73" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#005691" stopOpacity="0" />
            </linearGradient>
            <pattern id={`${uid}-dots`} width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#005691" fillOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="520" height="340" fill={`url(#${uid}-dots)`} opacity="0.85" />
          <path
            d="M 520 0 C 400 10 320 48 290 0 L 520 0 Z"
            fill={`url(#${uid}-arc)`}
            opacity="0.65"
          />
          <ellipse cx="455" cy="36" rx="140" ry="95" fill={`url(#${uid}-arc)`} opacity="0.5" />
        </svg>

        <div
          className="pointer-events-none absolute left-3 top-[38%] hidden w-[32%] max-w-[9rem] -translate-y-1/2 sm:block lg:left-5 lg:top-[40%]"
          aria-hidden
        >
          <div
            className="absolute left-0 top-0 h-28 w-[5.25rem] rotate-[-10deg] rounded-xl border border-[#d9e6f2]/80 bg-white/35 shadow-[0_10px_28px_-16px_rgba(15,23,42,0.15)]"
          />
          <div
            className="absolute left-5 top-4 h-28 w-[5.25rem] rotate-[4deg] rounded-xl border border-[#d9e6f2]/70 bg-white/45 shadow-[0_12px_30px_-14px_rgba(0,86,145,0.12)]"
          />
          <DecorativePie className="absolute -left-1 bottom-[-18%] h-16 w-16 opacity-90" />
          <div className="absolute left-12 top-16 flex gap-0.5 opacity-[0.14]" aria-hidden>
            {[12, 18, 10, 14].map((h, i) => (
              <div key={i} className="w-1 rounded-full bg-[#005691]" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>

        <div className="relative z-[2] flex min-h-0 w-full flex-col gap-4 px-6 pb-6 pt-5 sm:gap-5 sm:px-8 sm:pb-8 sm:pt-7 lg:gap-5 lg:px-8 lg:pb-8 lg:pt-7 xl:gap-6 xl:px-9 xl:pb-9 xl:pt-8">
          <header className="min-w-0">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[#005691] sm:text-xs">
              {visual.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-3 sm:gap-2.5">
              {tabs.map((label, i) => (
                <span
                  key={label}
                  className={cn(
                    "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[0.6875rem] font-semibold leading-none sm:text-[0.75rem]",
                    i === 0
                      ? "border-[#005691] bg-[#005691] text-white shadow-[0_6px_18px_-10px_rgba(0,86,145,0.55)]"
                      : "border-[#d9e6f2] bg-white/90 text-[#334155]",
                  )}
                >
                  {label}
                </span>
              ))}
            </div>
          </header>

          <div className="min-w-0 w-full rounded-2xl border border-[#d9e6f2] bg-white p-5 shadow-[0_14px_42px_-26px_rgba(15,23,42,0.18)] sm:p-6 lg:p-6 xl:p-7">
            <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-5 xl:gap-x-7 lg:gap-y-0">
              <div className="min-w-0 rounded-xl border border-[#d9e6f2] bg-[#f8fbfe] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:p-5">
                <p className="text-[0.8125rem] font-bold text-[#005691] sm:text-sm">{ev.title}</p>
                <p className="mt-2 text-[0.8125rem] font-semibold leading-snug text-[#0f172a] sm:text-sm">{ev.line1}</p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-[#334155] sm:text-xs">{ev.line2}</p>
                <div className="mt-4 space-y-2 border-t border-[#d9e6f2]/90 pt-4">
                  <div className="h-2 rounded-full bg-[#005691]/15 sm:h-2.5" />
                  <div className="h-2 w-[88%] rounded-full bg-[#334155]/10 sm:h-2.5" />
                  <div className="h-2 w-[62%] rounded-full bg-[#334155]/8 sm:h-2.5" />
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex lg:px-2">
                <ConnectorGraphic />
              </div>

              <div className="flex justify-center py-1 lg:hidden" aria-hidden>
                <div className="flex items-center gap-2 text-[#005691]/40">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#005691]/35" />
                  <div className="h-2 w-2 rounded-full bg-[#005691]/50" />
                  <FlowArrowRight />
                  <div className="h-2 w-2 rounded-full bg-[#005691]/35" />
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#005691]/35" />
                </div>
              </div>

              <div className="min-w-0 rounded-xl border border-[#d9e6f2] bg-white p-4 shadow-[0_8px_26px_-18px_rgba(15,23,42,0.12)] sm:p-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#005691] sm:text-xs">
                  {visual.checklistTitle}
                </p>
                <ul className="mt-3 list-none space-y-2.5 p-0">
                  {checklist.map((row) => (
                    <li key={row} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-[#005691] text-[0.5625rem] font-bold leading-none text-white shadow-[0_2px_6px_-2px_rgba(0,86,145,0.45)] sm:h-5 sm:w-5 sm:text-[0.625rem]"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className="text-[0.6875rem] font-medium leading-snug text-[#334155] sm:text-[0.75rem]">{row}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-[#d9e6f2] pt-5 sm:mt-7 sm:flex-row sm:items-center sm:gap-4 sm:pt-6">
              <span className="shrink-0 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#005691] sm:text-[0.6875rem]">
                {visual.reviewFlowStrip}
              </span>
              <div className="flex min-w-0 flex-1 items-center gap-1.5">
                <div className="h-px flex-1 bg-gradient-to-r from-[#005691]/25 via-[#005691]/45 to-[#005691]/25" aria-hidden />
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 shrink-0 rounded-full bg-[#005691]"
                    style={{ opacity: 0.35 + i * 0.18 }}
                    aria-hidden
                  />
                ))}
                <FlowArrowRight className="text-[#005691]/70" />
              </div>
            </div>
          </div>

          <footer className="min-w-0">
            <div className="hidden items-stretch justify-between gap-2 sm:flex lg:gap-2.5">
              {flow.map((label, i) => (
                <Fragment key={`f-${label}`}>
                  <div className="flex min-h-[2.75rem] min-w-0 flex-1 items-center justify-center rounded-xl border border-[#d9e6f2] bg-white/95 px-3 py-2 text-center text-[0.6875rem] font-semibold leading-snug text-[#0f172a] shadow-[0_8px_22px_-16px_rgba(15,23,42,0.14)] sm:text-[0.75rem]">
                    {label}
                  </div>
                  {i < flow.length - 1 ? <FlowArrowRight className="mx-0.5 shrink-0 self-center text-[#005691]/45" /> : null}
                </Fragment>
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:hidden">
              {flow.map((label, i) => (
                <Fragment key={`fm-${label}`}>
                  <div className="flex min-h-[2.75rem] items-center justify-center rounded-xl border border-[#d9e6f2] bg-white/95 px-3 py-2.5 text-center text-[0.6875rem] font-semibold text-[#0f172a] shadow-[0_8px_22px_-16px_rgba(15,23,42,0.12)]">
                    {label}
                  </div>
                  {i < flow.length - 1 ? (
                    <div className="flex justify-center py-0.5" aria-hidden>
                      <FlowArrowRight className="rotate-90 text-[#005691]/40" />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
