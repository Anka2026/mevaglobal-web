import { cn } from "@/lib/cn";
import { premiumCardElevated, premiumGoldTopLine } from "@/lib/premiumUi";

export function ResourceArticleSectionCard({ title, body }: { title: string; body: string }) {
  return (
    <article className={cn("relative p-7 sm:p-8 lg:p-9", premiumCardElevated)}>
      <div className={premiumGoldTopLine} aria-hidden />
      <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink-dark)] sm:text-xl">{title}</h2>
      <p className="mt-4 text-sm leading-[1.82] text-[color:var(--ink-dark)]/82 sm:text-[0.9375rem] sm:leading-[1.78]">
        {body}
      </p>
    </article>
  );
}
