import { memo } from 'react';
import { Header } from '@/shared/common/header';
import { Footer } from '@/shared/common/footer';
import { AboutMeBanner } from '../components/about-me-banner';
import { BrandValuesSection } from '../components/brand-values-section';
import { FleetShowcaseSection } from '../components/fleet-showcase-section';
import { OfficeNetworkSection } from '../components/office-network-section';
import { AboutCtaSection } from '../components/about-cta-section';
import type { AppLocale } from '@/shared/i18n/types';
import { getAboutBannersByOrder } from '../lib/about-banners';

async function AboutPage({ locale }: { locale: AppLocale }) {
	const banners = await getAboutBannersByOrder();

	return (
		<main>
			<Header locale={locale} />
			<AboutMeBanner banner={banners[1]} />
			<BrandValuesSection />
			<FleetShowcaseSection
				mainBanner={banners[2]}
				sideBanner={banners[3]}
				highlightBanner={banners[6]}
			/>
			<OfficeNetworkSection
				hanoiBanner={banners[4]}
				quangNinhBanner={banners[5]}
			/>
			<AboutCtaSection banner={banners[7]} />
			<Footer />
		</main>
	);
}

export default memo(AboutPage);
