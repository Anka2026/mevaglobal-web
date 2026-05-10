/**
 * Trims excess whitespace from public/signature/meva-logo.png → meva-logo-signature.png
 * Run: node scripts/trim-meva-signature-logo.mjs
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const input = join(root, "public", "signature", "meva-logo.png");
const output = join(root, "public", "signature", "meva-logo-signature.png");

const threshold = Number(process.argv[2]) || 28;

const pipeline = sharp(input).trim({ threshold });

const metaIn = await sharp(input).metadata();
const trimmedBuf = await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
const metaOut = await sharp(trimmedBuf).metadata();

await sharp(trimmedBuf).toFile(output);

console.log(`Trimmed ${input}`);
console.log(`  ${metaIn.width}×${metaIn.height} → ${metaOut.width}×${metaOut.height} (threshold=${threshold})`);
console.log(`Wrote ${output}`);
