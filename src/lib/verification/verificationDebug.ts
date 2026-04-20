/**
 * Dev-only diagnostics for verification-services. Enable with VERIFICATION_DEBUG=1 in any NODE_ENV.
 */
export function verificationDebug(event: string, payload?: Record<string, unknown>): void {
  if (process.env.NODE_ENV !== "development" && process.env.VERIFICATION_DEBUG !== "1") {
    return;
  }
  const line = payload ? `${event} ${JSON.stringify(payload)}` : event;
  console.warn(`[verification-services][debug] ${line}`);
}
