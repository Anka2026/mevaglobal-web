import type { ReactNode } from "react";

/**
 * Segment layout: verification-services stays under `[locale]` (Header/Footer + globals.css) like all locale routes.
 */
export default function VerificationServicesSegmentLayout({ children }: { children: ReactNode }) {
  return children;
}
