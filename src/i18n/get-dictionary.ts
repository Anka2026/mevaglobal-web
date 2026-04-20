import { cache } from "react";
import type { Dictionary } from "./types";
import type { Locale } from "./locales";
import { en } from "./messages/en";
import { nl } from "./messages/nl";
import { tr } from "./messages/tr";

/**
 * Static imports keep locale bundles in the main module graph instead of separate
 * webpack async chunks (`import("./messages/tr")`, etc.). That reduces dev-server
 * chunk churn and “Cannot find module './NNN.js'” drift after HMR edits.
 */
function loadDictionary(locale: Locale): Dictionary {
  switch (locale) {
    case "tr":
      return tr;
    case "nl":
      return nl;
    case "en":
    default:
      return en;
  }
}

/** Per-request memoized locale bundles (safe to call multiple times in RSC trees). */
export const getDictionary = cache(loadDictionary);

