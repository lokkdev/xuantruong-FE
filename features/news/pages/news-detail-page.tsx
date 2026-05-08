import Image from 'next/image';
import Link from 'next/link';
import { CalendarDaysIcon, ChevronLeftIcon } from 'lucide-react';
import { Header } from '@/shared/common/header';
import { Footer } from '@/shared/common/footer';
import { API_BASE_URL } from '@/shared/config/api';
import type { AppLocale } from '@/shared/i18n/types';
import { t } from '@/shared/i18n/dict';
import { toDateLocale } from '@/shared/i18n/locale';

export interface NewsDetailData {
	id: number;
	title: string;
	slug: string;
	summary?: string;
	thumbnail?: string;
	published_at?: string;
	content?: string;
}

export interface NewsRelatedItem {
	id: number;
	title: string;
	slug: string;
	thumbnail?: string;
	published_at?: string;
}

function formatDate(value: string | undefined, locale: AppLocale) {
	if (!value) return '';
	const parsedDate = new Date(value);
	if (Number.isNaN(parsedDate.getTime())) {
		return value;
	}
	return parsedDate.toLocaleDateString(toDateLocale(locale), {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}

function normalizeImage(url?: string) {
	if (!url || url.endsWith('/')) {
		return '/images/figma-temp/a86f5d800eefc7ecef6110a846b3109a049e65c5.png';
	}
	return url;
}

function normalizeContentHtml(content?: string) {
	const value = (content ?? '').trim();
	if (!value) return '';

	return value.replace(/src=(['"])(\/storage\/[^'"]+)\1/gi, (_match, quote, path) => {
		return `src=${quote}${API_BASE_URL}${path}${quote}`;
	});
}

interface NewsDetailPageProps {
	article: NewsDetailData;
	related: NewsRelatedItem[];
	locale: AppLocale;
}

export default function NewsDetailPage({ article, related, locale }: NewsDetailPageProps) {
	const publishedLabel = formatDate(article.published_at, locale);
	const cover = normalizeImage(article.thumbnail);
	const contentHtml = normalizeContentHtml(article.content);

	return (
		<main className="bg-white">
			<Header locale={locale} />
			<section className="px-4 pb-10 pt-8 md:px-8 md:pb-14">
				<div className="mx-auto w-full max-w-[1216px]">
					<nav className="flex flex-wrap items-center gap-2 text-sm text-[#424654]">
						<Link
							href="/news"
							className="inline-flex items-center gap-1 font-medium text-[#0040A1] hover:underline">
							<ChevronLeftIcon className="size-4" />
							{t(locale, 'news.back')}
						</Link>
						<span className="text-[#C3C6D6]">/</span>
						<span className="line-clamp-1 max-w-full text-[#191C1E]">
							{article.title}
						</span>
					</nav>

					<div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
						<article className="overflow-hidden rounded-2xl border border-[#C3C6D633] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
							<div className="relative aspect-[16/9] w-full bg-[#F2F4F7]">
								<Image
									src={cover}
									alt={article.title}
									fill
									priority
									className="object-cover"
									sizes="(min-width: 1024px) 816px, 100vw"
								/>
							</div>

							<div className="flex flex-col gap-4 p-6 md:p-10">
								{publishedLabel ? (
									<div className="inline-flex items-center gap-2 text-xs font-medium text-[#424654]">
										<CalendarDaysIcon className="size-4 text-[#0040A1]" />
										<span>{publishedLabel}</span>
									</div>
								) : null}

								<h1 className="text-[32px] font-extrabold leading-10 tracking-[-0.64px] text-[#191C1E] md:text-[40px] md:leading-[46px] md:tracking-[-0.8px]">
									{article.title}
								</h1>

								{article.summary ? (
									<p className="text-base leading-7 text-[#424654] md:text-lg md:leading-8">
										{article.summary}
									</p>
								) : null}

								<div className="mt-2 text-[15px] leading-7 text-[#191C1E]">
									{contentHtml ? (
										<div
											className="prose prose-neutral max-w-none prose-img:rounded-lg prose-img:object-cover"
											dangerouslySetInnerHTML={{ __html: contentHtml }}
										/>
									) : (
										<p className="text-[#424654]">{t(locale, 'news.content.pending')}</p>
									)}
								</div>
							</div>
						</article>

						<aside className="flex flex-col gap-4">
							<div className="rounded-2xl border border-[#C3C6D633] bg-white p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
								<h2 className="text-base font-bold uppercase tracking-[0.8px] text-[#191C1E]">
									{t(locale, 'news.related.title')}
								</h2>
								<div className="mt-4 flex flex-col gap-4">
									{related.length ? (
										related.map((item) => (
											<Link
												key={item.id}
												href={`/news/${item.slug}`}
												className="group flex gap-3">
												<div className="relative h-[72px] w-[96px] shrink-0 overflow-hidden rounded-lg bg-[#F2F4F7]">
													<Image
														src={normalizeImage(item.thumbnail)}
														alt={item.title}
														fill
														className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
														sizes="96px"
													/>
												</div>
												<div className="flex min-w-0 flex-1 flex-col gap-1">
													<p className="line-clamp-2 text-sm font-semibold leading-5 text-[#191C1E] group-hover:text-[#0040A1]">
														{item.title}
													</p>
													{item.published_at ? (
														<span className="text-xs text-[#6D7280]">
															{formatDate(item.published_at, locale)}
														</span>
													) : null}
												</div>
											</Link>
										))
									) : (
										<p className="text-sm text-[#424654]">{t(locale, 'news.related.empty')}</p>
									)}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}

