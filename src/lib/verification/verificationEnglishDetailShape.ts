import { PREMIUM_FIVE_CARD_SLUGS } from "@/lib/verification/registry";

function bulletBlockOk(v: unknown, name: string, minBullets: number): string | null {
  if (!v || typeof v !== "object") return `${name}: missing or not object`;
  const b = v as { title?: unknown; bullets?: unknown };
  if (typeof b.title !== "string" || !b.title.trim()) return `${name}.title missing`;
  if (!Array.isArray(b.bullets) || b.bullets.length < minBullets) return `${name}.bullets invalid (need ≥${minBullets})`;
  for (let i = 0; i < b.bullets.length; i++) {
    const item = b.bullets[i];
    if (typeof item !== "string" || !item.trim()) return `${name}.bullets[${i}] empty`;
  }
  return null;
}

/**
 * Structural validation of English `pages.serviceDetails[slug]` for bootstrap diagnostics.
 * Does not throw — returns messages for `console.error` / `[verification-services][shape]`.
 */
export function validateEnglishServiceDetailBlock(slug: string, block: unknown): string[] {
  const errors: string[] = [];
  if (block == null) {
    errors.push("block is null/undefined");
    return errors;
  }
  if (typeof block !== "object") {
    errors.push("block is not an object");
    return errors;
  }

  const b = block as Record<string, unknown>;

  if (b.variant === "editorial") {
    if (typeof b.title !== "string" || !b.title.trim()) errors.push("editorial: title missing");
    if (typeof b.intro !== "string" || !b.intro.trim()) errors.push("editorial: intro missing");
    if (!Array.isArray(b.sections) || b.sections.length === 0) errors.push("editorial: sections missing/empty");
    return errors;
  }

  if (typeof b.title !== "string" || !b.title.trim()) errors.push("title missing");
  if (typeof b.intro !== "string" || !b.intro.trim()) errors.push("intro missing");

  const cta = b.cta as { body?: unknown } | undefined;
  if (!cta || typeof cta.body !== "string" || !cta.body.trim()) errors.push("cta.body missing or empty");

  const cCov = bulletBlockOk(b.covers, "covers", 1);
  if (cCov) errors.push(cCov);

  const isPremiumFive = (PREMIUM_FIVE_CARD_SLUGS as readonly string[]).includes(slug);
  if (isPremiumFive) {
    for (const [key, min] of [
      ["forWho", 1],
      ["typicalScope", 1],
      ["whyMatters", 1],
      ["approach", 1],
    ] as const) {
      const err = bulletBlockOk(b[key], key, min);
      if (err) errors.push(err);
    }
  } else {
    for (const key of ["typicalScope", "whyMatters", "approach"] as const) {
      const err = bulletBlockOk(b[key], key, 1);
      if (err) errors.push(err);
    }
    if (b.forWho) {
      const err = bulletBlockOk(b.forWho, "forWho", 1);
      if (err) errors.push(err);
    }
  }

  return errors;
}
