/**
 * Removes `.next` and `node_modules/.cache` to clear stale webpack/turbopack chunk manifests.
 * Use when dev shows errors like "Cannot find module './611.js'" after edits or branch switches.
 */
import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = join(root, ".next");
const nodeCacheDir = join(root, "node_modules", ".cache");

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("[clean-next] Removed .next");
} else {
  console.log("[clean-next] No .next directory (nothing to remove)");
}

if (existsSync(nodeCacheDir)) {
  rmSync(nodeCacheDir, { recursive: true, force: true });
  console.log("[clean-next] Removed node_modules/.cache");
}
