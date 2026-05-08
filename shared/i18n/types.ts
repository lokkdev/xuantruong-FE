export type AppLocale = "vi" | "en";

export const SUPPORTED_LOCALES: AppLocale[] = ["vi", "en"];

export function isAppLocale(value: string | undefined | null): value is AppLocale {
  return value === "vi" || value === "en";
}

