/**
 * Generates public favicon.ico (16/32/48), icon.png (512), apple-touch-icon.png (180).
 *
 * - favicon.ico layers: tight crop of the globe/mark region (not full horizontal wordmark)
 *   — horizontal logos → left slice; vertical/stacked → upper slice.
 * - icon.png & apple-touch-icon.png: full trimmed logo contained on white square (OG / manifest).
 *
 * Logo priority: public/signature/meva-logo.png → public/brand/meva-logo.png → public/assets/meva-logo.jpeg
 *
 * Run: npm run generate:icons
 */
import { existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const logoCandidates = [
  join(root, "public", "signature", "meva-logo.png"),
  join(root, "public", "brand", "meva-logo.png"),
  join(root, "public", "assets", "meva-logo.jpeg"),
];

const logoPath = logoCandidates.find((p) => existsSync(p));
if (!logoPath) {
  console.error("No logo found. Expected one of:\n", logoCandidates.join("\n"));
  process.exit(1);
}

/** Trim padding, return PNG buffer. */
async function getTrimmedLogoPng() {
  return sharp(logoPath).trim({ threshold: 22 }).png().toBuffer();
}

/** Region likely containing the globe/mark for small favicon pixels. */
async function getGlobeMarkBuffer(trimmedPng) {
  const meta = await sharp(trimmedPng).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  const horizontal = w / h > 1.15;

  if (horizontal) {
    const cropW = Math.max(32, Math.round(w * 0.42));
    return sharp(trimmedPng).extract({ left: 0, top: 0, width: cropW, height: h }).png().toBuffer();
  }

  const cropH = Math.max(32, Math.round(h * 0.5));
  return sharp(trimmedPng).extract({ left: 0, top: 0, width: w, height: cropH }).png().toBuffer();
}

async function squareMarkPng(sourcePng, size) {
  const padding = Math.max(4, Math.round(size * 0.08));
  const inner = size - 2 * padding;

  const logoPng = await sharp(sourcePng)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  const m = await sharp(logoPng).metadata();
  const lw = m.width ?? inner;
  const lh = m.height ?? inner;
  const left = Math.floor((size - lw) / 2);
  const top = Math.floor((size - lh) / 2);

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: logoPng, left, top }])
    .png()
    .toBuffer();
}

async function main() {
  console.log("Using logo:", logoPath.replace(root + "\\", "").replace(root + "/", ""));

  const trimmed = await getTrimmedLogoPng();
  const globeMark = await getGlobeMarkBuffer(trimmed);

  const icon512 = await squareMarkPng(trimmed, 512);
  writeFileSync(join(root, "public", "icon.png"), icon512);

  const apple180 = await squareMarkPng(trimmed, 180);
  writeFileSync(join(root, "public", "apple-touch-icon.png"), apple180);

  const sizes = [48, 32, 16];
  const buffers = await Promise.all(sizes.map((s) => squareMarkPng(globeMark, s)));
  const ico = await toIco(buffers, { sizes });
  writeFileSync(join(root, "public", "favicon.ico"), ico);

  console.log("Wrote public/icon.png (full logo), public/apple-touch-icon.png (full logo), public/favicon.ico (globe/mark crop)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
