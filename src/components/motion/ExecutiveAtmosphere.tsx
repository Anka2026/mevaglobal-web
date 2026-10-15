/** Soft gold and navy light behind a page hero. Decorative only. */
export function ExecutiveHeroGlow() {
  return (
    <>
      <div
        className="executive-glow pointer-events-none absolute -left-16 top-4 h-56 w-56 rounded-full bg-[color:color-mix(in_oklab,var(--brand-gold)_50%,transparent)] blur-3xl"
        aria-hidden
      />
      <div
        className="executive-glow pointer-events-none absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--brand-accent)_38%,transparent)] blur-3xl"
        aria-hidden
      />
    </>
  );
}
