import { BilingualString } from "@/types/product";

/**
 * Ensures a safe fallback to English if the requested language string is missing or empty.
 */
export function bLang(bilingualString: BilingualString | undefined, lang: "en" | "hi"): string {
  if (!bilingualString) return "";
  return bilingualString[lang] || bilingualString.en || "";
}
