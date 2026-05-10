/**
 * Builds email-signature portrait from public/signature/dilan-arslan-original.jpg (or custom input path).
 *
 * This pipeline only crops and encodes PNG — it does not retouch faces or alter expressions.
 * A natural smile or any facial expression must already be present in the source photograph
 * (or supplied via an edited original you place at dilan-arslan-original.jpg).
 *
 * Pipeline:
 * 1. Trim excess ceiling + laptop/desk band (ratios below — tuned for upright office portraits).
 * 2. Slight horizontal reframing: trim more from the left than the right when the subject sits slightly
 *    right of centre (common on staged desk shots).
 * 3. Crop to exact 300:390 aspect, top-weighted (upper body / face).
 * 4. Resize to 300×390 PNG (lossless compression level tuned for email file size).
 *
 * Usage:
 *   node scripts/create-signature-photo.mjs
 *   node scripts/create-signature-photo.mjs path/to/source.jpg
 *
 * Run: npm run signature:photo
 */
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sigDir = join(root, "public", "signature");
const defaultInput = join(sigDir, "dilan-arslan-original.jpg");
const outputPath = join(sigDir, "dilan-arslan.png");

const TARGET_W = 300;
const TARGET_H = 390;

/** Remove some cabinet headroom (fraction of source height). */
const TOP_TRIM_RATIO = 0.065;
/** Drop laptop / desk clutter (fraction of source height, from bottom). */
const BOTTOM_TRIM_RATIO = 0.39;
/** Trim more left than right so a slightly right-shifted subject centres better (fractions of width). */
const SLICE_LEFT_RATIO = 0.025;
const SLICE_RIGHT_RATIO = 0.012;

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function computeAspectCrop(w, h, targetW, targetH) {
  const ar = targetW / targetH;
  const srcAr = w / h;

  if (srcAr >= ar) {
    const ch = h;
    const cw = Math.round(ch * ar);
    const left = clamp(Math.round((w - cw) / 2), 0, w - cw);
    return { left, top: 0, width: cw, height: ch };
  }

  const cw = w;
  const ch = Math.round(cw / ar);
  if (ch > h) {
    return { left: 0, top: 0, width: w, height: h };
  }
  return { left: 0, top: 0, width: cw, height: ch };
}

async function main() {
  mkdirSync(sigDir, { recursive: true });

  const inputPath = process.argv[2] || defaultInput;
  if (!existsSync(inputPath)) {
    console.error(
      [
        `Missing source image: ${inputPath}`,
        "",
        "Place the raw portrait at:",
        `  ${defaultInput}`,
        "",
        "Or pass an explicit path:",
        "  node scripts/create-signature-photo.mjs path/to/source.jpg",
      ].join("\n"),
    );
    process.exit(1);
  }

  const meta = await sharp(inputPath).metadata();
  const w = meta.width;
  const h = meta.height;
  if (!w || !h) throw new Error("Could not read image dimensions.");

  const topPx = Math.round(h * TOP_TRIM_RATIO);
  const bottomPx = Math.round(h * BOTTOM_TRIM_RATIO);
  const extractH = h - topPx - bottomPx;
  if (extractH < 64) throw new Error("Vertical trim too aggressive for this image.");

  let pipeline = sharp(inputPath).extract({ left: 0, top: topPx, width: w, height: extractH });

  const sliceL = Math.round(w * SLICE_LEFT_RATIO);
  const sliceR = Math.round(w * SLICE_RIGHT_RATIO);
  const innerW = w - sliceL - sliceR;
  if (innerW > 32) {
    pipeline = pipeline.extract({ left: sliceL, top: 0, width: innerW, height: extractH });
  }

  const trimmed = await pipeline.toBuffer();

  const m2 = await sharp(trimmed).metadata();
  const tw = m2.width ?? innerW;
  const th = m2.height ?? extractH;

  const crop = computeAspectCrop(tw, th, TARGET_W, TARGET_H);

  await sharp(trimmed)
    .extract(crop)
    .resize(TARGET_W, TARGET_H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);

  const outMeta = await sharp(outputPath).metadata();
  console.log(`Wrote ${outputPath} (${outMeta.width}×${outMeta.height}, png)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
