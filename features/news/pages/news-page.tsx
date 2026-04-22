import { Footer } from '@/shared/common/footer';
import { Header } from '@/shared/common/header';
import { NewsGridSection } from '@/features/news/components/news-grid-section';
import { NewsHeroSection } from '@/features/news/components/news-hero-section';
import { NewsSubscribeSection } from '@/features/news/components/news-subscribe-section';

export interface NewsListItem {
	id: number;
	title: string;
	slug: string;
	summary: string;
	thumbnail: string;
	published_at: string;
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
}

export default function NewsPage({
	items,
	categories,
	page,
	perPage,
	total,
}: NewsPageProps) {
	return (
		<main className="bg-white">
			<Header />
			<NewsHeroSection />
			<NewsGridSection
				items={items}
				categories={categories}
				page={page}
				perPage={perPage}
				total={total}
			/>
			<NewsSubscribeSection />
			<Footer />
		</main>
	);
}
