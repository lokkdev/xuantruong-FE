import type { AppLocale } from "./types";

export function toDateLocale(locale: AppLocale): string {
  return locale === "vi" ? "vi-VN" : "en-US";
}

