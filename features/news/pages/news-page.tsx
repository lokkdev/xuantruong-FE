import { Footer } from '@/shared/common/footer';
import { Header } from '@/shared/common/header';
import { NewsGridSection } from '@/features/news/components/news-grid-section';
import { NewsHeroSection } from '@/features/news/components/news-hero-section';
import { NewsSubscribeSection } from '@/features/news/components/news-subscribe-section';
import type { AppLocale } from '@/shared/i18n/types';

export interface NewsListItem {
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

export interface NewsCategoryItem {
	id: number;
	name: string;
	slug: string;
}

interface NewsPageProps {
	items: NewsListItem[];
	categories: NewsCategoryItem[];
	page: number;
	perPage: number;
	total: number;
	locale: AppLocale;
	selectedCategorySlug?: string;
}

export default function NewsPage({
	items,
	categories,
	page,
	perPage,
	total,
	locale,
	selectedCategorySlug,
}: NewsPageProps) {
	return (
		<main className="bg-white">
			<Header locale={locale} />
			<NewsHeroSection />
			<NewsGridSection
				items={items}
				categories={categories}
				page={page}
				perPage={perPage}
				total={total}
				locale={locale}
				selectedCategorySlug={selectedCategorySlug}
			/>
			<NewsSubscribeSection />
			<Footer />
		</main>
	);
}
