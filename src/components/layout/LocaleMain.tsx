import type { ReactNode } from "react";

/**
 * Single marketing `<main>` shell for all `[locale]/*` routes.
 * Establishes flex column stacking, width bounds, and consistent text/anti-alias context
 * so page sections (Hero / PageHeader / Container) inherit one premium page architecture.
 */
export function LocaleMain({ children }: { children: ReactNode }) {
  return (
    <main className="relative isolate flex min-h-0 w-full min-w-0 flex-1 flex-col text-[color:var(--foreground)] antialiased">
      {children}
    </main>
  );
}
