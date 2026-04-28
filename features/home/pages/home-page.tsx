import { Header } from '@/shared/common/header';
import { Footer } from '@/shared/common/footer';
import { memo } from 'react';
import { HeroBanner } from '../components/hero-banner';
import { AboutUs } from '../components/about-us';
import { PopularRoutes } from '../components/popular-routes';
import { ServiceFeatures } from '../components/service-features';
import { BeforeNewsBanner } from '../components/before-news-banner';
import { NewsSection } from '../components/news-section';
import type { AppLocale } from '@/shared/i18n/types';

function HomePage({ locale }: { locale: AppLocale }) {
	return (
		<main>
			<Header locale={locale} />
			<HeroBanner />
			<AboutUs />
			<PopularRoutes />
			<ServiceFeatures />
			<BeforeNewsBanner />
			<NewsSection />
			<Footer />
		</main>
	);
}

export default memo(HomePage);
