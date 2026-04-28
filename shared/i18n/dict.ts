import type { AppLocale } from "./types";

export type I18nKey =
  | "nav.home"
  | "nav.about"
  | "nav.services"
  | "nav.lookup"
  | "nav.news"
  | "nav.contact"
  | "common.menu"
  | "lang.switch"
  | "news.all"
  | "news.category"
  | "news.read"
  | "news.empty"
  | "news.back"
  | "news.notFound.title"
  | "news.notFound.desc"
  | "news.related.title"
  | "news.related.empty"
  | "news.content.pending";

const DICT: Record<AppLocale, Record<I18nKey, string>> = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.services": "Dịch vụ",
    "nav.lookup": "Tra cứu",
    "nav.news": "Tin tức",
    "nav.contact": "Liên hệ",
    "common.menu": "Menu",
    "lang.switch": "VN/EN",
    "news.all": "Tất cả",
    "news.category": "Tin tức",
    "news.read": "Xem bài viết",
    "news.empty": "Chưa có bài viết nào.",
    "news.back": "Quay lại Tin tức",
    "news.notFound.title": "Không tìm thấy bài viết",
    "news.notFound.desc": "Bài viết không tồn tại hoặc đã bị gỡ.",
    "news.related.title": "Bài viết mới",
    "news.related.empty": "Chưa có bài viết liên quan.",
    "news.content.pending": "Nội dung đang được cập nhật.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.lookup": "Lookup",
    "nav.news": "News",
    "nav.contact": "Contact",
    "common.menu": "Menu",
    "lang.switch": "VN/EN",
    "news.all": "All",
    "news.category": "News",
    "news.read": "Read article",
    "news.empty": "No articles yet.",
    "news.back": "Back to News",
    "news.notFound.title": "Article not found",
    "news.notFound.desc": "This article doesn't exist or was removed.",
    "news.related.title": "Latest posts",
    "news.related.empty": "No related articles.",
    "news.content.pending": "Content is being updated.",
  },
};

export function t(locale: AppLocale, key: I18nKey): string {
  return DICT[locale][key];
}

