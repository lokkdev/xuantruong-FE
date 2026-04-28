import NewsDetailPage from '@/features/news/pages/news-detail-page';
import { API_BASE_URL } from '@/shared/config/api';
import { getLocale } from '@/shared/i18n/server';
import { t } from '@/shared/i18n/dict';

interface NewsDetailApiItem {
	id: number;
	title: string;
	slug: string;
	summary?: string;
	thumbnail?: string;
	published_at?: string;
	content?: string;
	body?: string;
	description?: string;
}

interface ApiEnvelope<T> {
	data: T;
}

const NEWS_API_ROUTE = '/api/news';
const DEFAULT_RELATED_PER_PAGE = 6;

async function getNewsDetail(slug: string): Promise<NewsDetailApiItem | null> {
	const response = await fetch(`${API_BASE_URL}${NEWS_API_ROUTE}/${slug}`, {
		cache: 'no-store',
	});

	if (!response.ok) {
		return null;
	}

	const payload = (await response.json()) as ApiEnvelope<NewsDetailApiItem>;
	return payload.data;
}

async function getRelatedNews(): Promise<NewsDetailApiItem[]> {
	const response = await fetch(
		`${API_BASE_URL}${NEWS_API_ROUTE}?page=1&per_page=${DEFAULT_RELATED_PER_PAGE}`,
		{ cache: 'no-store' },
	);

	if (!response.ok) {
		return [];
	}

	const payload = (await response.json()) as ApiEnvelope<{ data: NewsDetailApiItem[] }>;
	return payload.data.data;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const locale = await getLocale();
	const { slug } = await params;
	const [article, related] = await Promise.all([getNewsDetail(slug), getRelatedNews()]);

	if (!article) {
		return (
			<main className="bg-white px-4 py-20 text-center text-[#424654]">
				<h1 className="text-2xl font-bold text-[#191C1E]">{t(locale, 'news.notFound.title')}</h1>
				<p className="mt-3">{t(locale, 'news.notFound.desc')}</p>
			</main>
		);
	}

	const content = article.content ?? article.body ?? article.description ?? '';

	return (
		<NewsDetailPage
			article={{
				id: article.id,
				title: article.title,
				slug: article.slug,
				summary: article.summary,
				thumbnail: article.thumbnail,
				published_at: article.published_at,
				content,
			}}
			locale={locale}
			related={related
				.filter((item) => item.slug && item.slug !== article.slug)
				.slice(0, DEFAULT_RELATED_PER_PAGE)
				.map((item) => ({
					id: item.id,
					title: item.title,
					slug: item.slug,
					thumbnail: item.thumbnail,
					published_at: item.published_at,
				}))}
		/>
	);
}

