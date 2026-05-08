"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE_NAME } from "@/shared/i18n/constants";
import { isAppLocale, type AppLocale } from "@/shared/i18n/types";

function setCookie(name: string, value: string) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LanguageSwitcher({ locale }: { locale: AppLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: AppLocale) {
    if (!isAppLocale(next) || next === locale) return;
    setCookie(LOCALE_COOKIE_NAME, next);
    router.refresh();
    router.push(pathname || "/");
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-white/40 p-1 text-xs font-bold text-[#0040A1]">
      <button
        type="button"
        onClick={() => switchTo("vi")}
        className={`rounded px-2 py-1 uppercase ${locale === "vi" ? "bg-white text-[#0040A1]" : "text-[#0040A1]/70 hover:text-[#0040A1]"}`}
        aria-pressed={locale === "vi"}
      >
        VN
      </button>
      <span className="text-[#0040A1]/50">/</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`rounded px-2 py-1 uppercase ${locale === "en" ? "bg-white text-[#0040A1]" : "text-[#0040A1]/70 hover:text-[#0040A1]"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}

