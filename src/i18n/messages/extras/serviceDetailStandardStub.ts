import type { Dictionary } from "../../types";

export type StandardServiceDetail = Extract<
  Dictionary["pages"]["serviceDetails"][keyof Dictionary["pages"]["serviceDetails"]],
  { covers: { title: string; bullets: string[] } }
>;

export function standardServiceDetail(
  title: string,
  intro: string,
  labels: {
    covers: string;
    forWho: string;
    typicalScope: string;
    whyMatters: string;
    approach: string;
    ctaTitle: string;
  },
  bullets: {
    covers: readonly [string, string, string];
    forWho: readonly [string, string, string];
    typicalScope: readonly [string, string, string];
    whyMatters: readonly [string, string, string];
    approach: readonly [string, string, string];
  },
  ctaBody: string,
): StandardServiceDetail {
  return {
    title,
    intro,
    covers: { title: labels.covers, bullets: [...bullets.covers] },
    forWho: { title: labels.forWho, bullets: [...bullets.forWho] },
    typicalScope: { title: labels.typicalScope, bullets: [...bullets.typicalScope] },
    whyMatters: { title: labels.whyMatters, bullets: [...bullets.whyMatters] },
    approach: { title: labels.approach, bullets: [...bullets.approach] },
    cta: { title: labels.ctaTitle, body: ctaBody },
  };
}
