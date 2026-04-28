import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CalendarDaysIcon } from 'lucide-react';
import { buttonVariants } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import type { AppLocale } from '@/shared/i18n/types';
import { t } from '@/shared/i18n/dict';
import { toDateLocale } from '@/shared/i18n/locale';
import type {
	NewsCategoryItem,
	NewsListItem,
} from '@/features/news/pages/news-page';

interface NewsItem {
	id: string;
	slug: string;
	title: string;
	description: string;
	category: string;
	date: string;
	image: string;
}

const classes = {
	categoryBadge:
		'absolute left-4 top-4 rounded-sm bg-[#8B5000] px-3 py-1 text-xs font-semibold uppercase tracking-[1.2px] text-[#FFDCBE]',
	card: 'overflow-hidden rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]',
	cardMedia: 'relative h-56',
	cardBody: 'flex flex-col gap-3 p-6',
	cardDate: 'inline-flex items-center gap-1 text-xs text-[#424654]',
	cardTitle: 'text-[32px] font-bold leading-10 tracking-[-0.64px] text-[#191C1E]',
	cardDescription: 'line-clamp-3 text-sm leading-5 text-[#424654]',
	readMoreLink:
		'inline-flex w-fit items-center gap-1 pt-2 text-sm font-semibold text-[#0040A1]',
	filterButtonBase: 'h-9 rounded-xl px-6 text-sm',
	filterButtonActive:
		'bg-[#0040A1] font-semibold text-white hover:bg-[#003486] hover:text-white',
	filterButtonInactive:
		'bg-white font-medium text-[#424654] hover:bg-[#F2F4F7] hover:text-[#191C1E]',
	paginationButtonMuted:
		'size-10 rounded bg-[#F2F4F7] text-[#6D7280] hover:bg-[#E5E7EB]',
	paginationButtonBase: 'size-10 rounded text-base',
	paginationButtonActive: 'bg-[#0040A1] font-semibold text-white hover:bg-[#003486]',
	paginationButtonInactive: 'bg-white font-medium text-[#191C1E] hover:bg-[#F2F4F7]',
};

const fallbackImages = [
	'/images/figma-temp/4d904cbd6fadf43dea7ff9282bde2bf144418d58.png',
	'/images/figma-temp/b5b8e47ad8af30e6f25b8efcaefafbcf2e06886e.png',
	'/images/figma-temp/7b4bd083026b1ce0b397b6bdbd805314f8247636.png',
	'/images/figma-temp/fa6aaa66adbd76c8f607a2419a22855b9abb6a57.png',
	'/images/figma-temp/d2c33aa6e81dcf2527e6f1030936b83996c2b991.png',
	'/images/figma-temp/ada5f553edb43dcf8e799c86d47c06354fe30264.png',
];

interface NewsGridSectionProps {
	items: NewsListItem[];
	categories: NewsCategoryItem[];
	page: number;
	perPage: number;
	total: number;
	locale: AppLocale;
	selectedCategorySlug?: string;
}

function normalizeImage(url: string, index: number) {
	if (!url || url.endsWith('/')) {
		return fallbackImages[index % fallbackImages.length];
	}
	return url;
}

function formatDate(value: string, locale: AppLocale) {
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

function resolveCategoryName(item: NewsListItem, locale: AppLocale): string {
	if (item.category?.name) {
		return item.category.name;
	}

	if (item.category_name) {
		return item.category_name;
	}

	return t(locale, 'news.category');
}

function mapNewsItem(item: NewsListItem, index: number, locale: AppLocale): NewsItem {
	return {
		id: String(item.id),
		slug: item.slug,
		title: item.title,
		description: item.summary,
		category: resolveCategoryName(item, locale),
		date: formatDate(item.published_at, locale),
		image: normalizeImage(item.thumbnail, index),
	};
}

function buildPageNumbers(currentPage: number, totalPages: number): string[] {
	if (totalPages <= 3) {
		return Array.from({ length: totalPages }, (_, i) => String(i + 1));
	}

	if (currentPage <= 2) {
		return ['1', '2', '3'];
	}

	if (currentPage >= totalPages - 1) {
		return [String(totalPages - 2), String(totalPages - 1), String(totalPages)];
	}

	return [String(currentPage - 1), String(currentPage), String(currentPage + 1)];
}

export function NewsGridSection({
	items,
	categories,
	page,
	perPage,
	total,
	locale,
	selectedCategorySlug,
}: NewsGridSectionProps) {
	const mappedItems = items.map((item, index) => mapNewsItem(item, index, locale));
	const featuredNews = mappedItems[0];
	const latestNews = mappedItems.slice(1);
	const categoryFilters = [
		{ slug: '', label: t(locale, 'news.all') },
		...categories.map((item) => ({ slug: item.slug, label: item.name })),
	];
	const totalPages = Math.max(1, Math.ceil(total / Math.max(1, perPage)));
	const pageNumbers = buildPageNumbers(page, totalPages);
	const showTrailing = totalPages > 3 && pageNumbers[pageNumbers.length - 1] !== String(totalPages);
	const activeCategorySlug = selectedCategorySlug ?? '';

	function buildNewsListHref(targetPage: number, categorySlug?: string) {
		const params = new URLSearchParams({ page: String(targetPage) });
		if (categorySlug) {
			params.set('category', categorySlug);
		}
		return `/news?${params.toString()}`;
	}

	function renderNewsCard(item: NewsItem) {
		return (
			<article key={item.id} className={classes.card}>
				<div className={classes.cardMedia}>
					<Image
						src={item.image}
						alt={item.title}
						fill
						className="object-cover"
						sizes="(min-width: 1024px) 384px, 100vw"
					/>
					<span className={classes.categoryBadge}>{item.category}</span>
				</div>
				<div className={classes.cardBody}>
					<div className={classes.cardDate}>
						<CalendarDaysIcon className="size-3.5" />
						{item.date}
					</div>
					<h3 className={classes.cardTitle}>{item.title}</h3>
					<p className={classes.cardDescription}>{item.description}</p>
					<Link href={`/news/${item.slug}`} className={classes.readMoreLink}>
						{t(locale, 'news.read')}
						<ArrowRightIcon className="size-3.5" />
					</Link>
				</div>
			</article>
		);
	}

	return (
		<section className="px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
			<div className="mx-auto flex w-full max-w-[1216px] flex-col gap-10">
				<div className="flex flex-wrap items-center gap-3 border-b border-[#C3C6D633] pb-2">
					{categoryFilters.map((category) => {
						const isActive = category.slug === activeCategorySlug;
						return (
							<Link
								key={category.slug || 'all'}
								href={buildNewsListHref(1, category.slug)}
								className={cn(
									buttonVariants({ variant: 'ghost', size: 'sm' }),
									classes.filterButtonBase,
									isActive ? classes.filterButtonActive : classes.filterButtonInactive,
								)}>
								{category.label}
							</Link>
						);
					})}
				</div>

				{featuredNews ? (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{renderNewsCard(featuredNews)}
						{latestNews.map(renderNewsCard)}
					</div>
				) : (
					<div className="rounded-lg bg-[#F2F4F7] p-8 text-center text-[#424654]">
						{t(locale, 'news.empty')}
					</div>
				)}

				<div className="flex items-center justify-center gap-2 pt-4">
					{page > 1 ? (
						<Link
							href={buildNewsListHref(Math.max(1, page - 1), activeCategorySlug)}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'icon' }),
								classes.paginationButtonMuted,
							)}>
							&lt;
						</Link>
					) : (
						<span
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'icon' }),
								classes.paginationButtonMuted,
								'pointer-events-none',
							)}>
							&lt;
						</span>
					)}
					{pageNumbers.map((pageNumber) => {
						const isActive = Number(pageNumber) === Number(page);
						return (
							<Link
								key={pageNumber}
								href={buildNewsListHref(Number(pageNumber), activeCategorySlug)}
								className={cn(
									buttonVariants({ variant: 'ghost', size: 'icon' }),
									classes.paginationButtonBase,
									isActive
										? classes.paginationButtonActive
										: classes.paginationButtonInactive,
								)}>
								{pageNumber}
							</Link>
						);
					})}
					{showTrailing ? <span className="px-2 text-base text-[#424654]">...</span> : null}
					{showTrailing ? (
						<Link
							href={buildNewsListHref(totalPages, activeCategorySlug)}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'icon' }),
								classes.paginationButtonBase,
								classes.paginationButtonInactive,
							)}>
							{totalPages}
						</Link>
					) : null}
					{page < totalPages ? (
						<Link
							href={buildNewsListHref(Math.min(totalPages, page + 1), activeCategorySlug)}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'icon' }),
								classes.paginationButtonMuted,
							)}>
							&gt;
						</Link>
					) : (
						<span
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'icon' }),
								classes.paginationButtonMuted,
								'pointer-events-none',
							)}>
							&gt;
						</span>
					)}
				</div>
			</div>
		</section>
	);
}
