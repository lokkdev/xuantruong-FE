import NewsPage from '@/features/news/pages/news-page';
import { API_BASE_URL } from '@/shared/config/api';

interface NewsApiItem {
	id: number;
	title: string;
	slug: string;
	summary: string;
	thumbnail: string;
	published_at: string;
}

interface NewsApiResponse {
	data: {
		data: NewsApiItem[];
		per_page: number;
		page: number;
		total: number;
	};
}

interface ApiEnvelope {
	data?: NewsApiResponse['data'];
}

interface NewsCategoryApiItem {
	id: number;
	name: string;
	slug: string;
}

interface NewsCategoryApiEnvelope {
	data?: NewsCategoryApiItem[];
}

const DEFAULT_PER_PAGE = 10;
const NEWS_API_ROUTE = '/api/news';
const NEWS_CATEGORIES_API_ROUTE = '/api/news-categories';

async function getNews(page: number): Promise<NewsApiResponse['data']> {
	try {
		const response = await fetch(
			`${API_BASE_URL}${NEWS_API_ROUTE}?page=${page}&per_page=${DEFAULT_PER_PAGE}`,
			{ cache: 'no-store' },
		);

		if (!response.ok) {
			throw new Error(`News API failed with status ${response.status}`);
		}

		const payload = (await response.json()) as ApiEnvelope;
		if (!payload.data) {
			throw new Error('News API returned empty data');
		}

		return payload.data;
	} catch {
		return {
			data: [],
			per_page: DEFAULT_PER_PAGE,
			page,
			total: 0,
		};
	}
}

async function getNewsCategories(): Promise<NewsCategoryApiItem[]> {
	try {
		const response = await fetch(`${API_BASE_URL}${NEWS_CATEGORIES_API_ROUTE}`, {
			cache: 'no-store',
		});

		if (!response.ok) {
			throw new Error(`News categories API failed with status ${response.status}`);
		}

		const payload = (await response.json()) as NewsCategoryApiEnvelope;
		return payload.data ?? [];
	} catch {
		return [];
	}
}

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const params = await searchParams;
	const currentPage = Number(params.page ?? '1');
	const safePage = Number.isFinite(currentPage) && currentPage > 0 ? currentPage : 1;
	const [news, categories] = await Promise.all([
		getNews(safePage),
		getNewsCategories(),
	]);

	return (
		<NewsPage
			items={news.data}
			categories={categories}
			page={news.page}
			perPage={news.per_page}
			total={news.total}
		/>
	);
}
