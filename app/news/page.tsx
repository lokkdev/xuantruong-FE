import NewsPage from '@/features/news/pages/news-page';
import { API_BASE_URL } from '@/shared/config/api';
import { getLocale } from '@/shared/i18n/server';

interface NewsApiItem {
	id: number;
	title: string;
	slug: string;
	summary: string;
	thumbnail: string;
	published_at: string;
	category_name?: string;
	category?: {
		id?: number;
		name?: string;
		slug?: string;
	} | null;
	categories?: Array<{
		id?: number;
		name?: string;
		slug?: string;
	}>;
}

interface NewsPaginationData {
	data: NewsApiItem[];
	per_page: number;
	page: number;
	total: number;
}

interface ApiEnvelope<T> {
	data: T;
}

interface NewsCategoryApiItem {
	id: number;
	name: string;
	slug: string;
}

const DEFAULT_PER_PAGE = 10;
const NEWS_API_ROUTE = '/api/news';
const NEWS_CATEGORIES_API_ROUTE = '/api/news-categories';

function buildNewsQuery(page: number, categorySlug?: string): string {
	const params = new URLSearchParams({
		page: String(page),
		per_page: String(DEFAULT_PER_PAGE),
	});

	if (categorySlug) {
		params.append('filters[0][key]', 'slug');
		params.append('filters[0][data]', categorySlug);
	}

	return params.toString();
}

async function getNews(page: number, categorySlug?: string): Promise<NewsPaginationData> {
	const response = await fetch(
		`${API_BASE_URL}${NEWS_API_ROUTE}?${buildNewsQuery(page, categorySlug)}`,
		{ cache: 'no-store' },
	);

	if (!response.ok) {
		throw new Error(`News API failed with status ${response.status}`);
	}

	const payload = (await response.json()) as ApiEnvelope<NewsPaginationData>;
	return payload.data;
}

async function getNewsCategories(): Promise<NewsCategoryApiItem[]> {
	const response = await fetch(`${API_BASE_URL}${NEWS_CATEGORIES_API_ROUTE}`, {
		cache: 'no-store',
	});

	if (!response.ok) {
		throw new Error(`News categories API failed with status ${response.status}`);
	}

	const payload = (await response.json()) as ApiEnvelope<NewsCategoryApiItem[]>;
	return payload.data;
}

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ page?: string; category?: string }>;
}) {
	const locale = await getLocale();
	const params = await searchParams;
	const currentPage = Number(params.page ?? '1');
	const safePage = Number.isFinite(currentPage) && currentPage > 0 ? currentPage : 1;
	const requestedCategorySlug = params.category?.trim() ?? '';
	const categories = await getNewsCategories();
	const selectedCategorySlug = categories.some(
		(item) => item.slug === requestedCategorySlug,
	)
		? requestedCategorySlug
		: undefined;
	const news = await getNews(safePage, selectedCategorySlug);

	return (
		<NewsPage
			items={news.data}
			categories={categories}
			page={news.page}
			perPage={news.per_page}
			total={news.total}
			locale={locale}
			selectedCategorySlug={selectedCategorySlug}
		/>
	);
}
