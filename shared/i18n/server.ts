import { cookies, headers } from "next/headers";
import { isAppLocale, type AppLocale } from "./types";
import { LOCALE_COOKIE_NAME } from "./constants";

function pickFromAcceptLanguage(raw: string | null): AppLocale | null {
  if (!raw) return null;
  const lower = raw.toLowerCase();
  if (lower.includes("vi")) return "vi";
  if (lower.includes("en")) return "en";
  return null;
}

export async function getLocale(): Promise<AppLocale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (isAppLocale(cookieValue)) return cookieValue;

  const headerStore = await headers();
  const headerValue = headerStore.get("accept-language");
  return pickFromAcceptLanguage(headerValue) ?? "vi";
}

