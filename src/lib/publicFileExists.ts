import { existsSync } from "node:fs";
import { join } from "node:path";

/** True if `src` (e.g. `/page-visuals/foo.png`) exists under `/public`. Server-only. */
export function publicFileExists(src: string): boolean {
  if (!src.startsWith("/")) return false;
  try {
    const relative = src.replace(/^\/+/, "");
    return existsSync(join(process.cwd(), "public", relative));
  } catch {
    return false;
  }
}
