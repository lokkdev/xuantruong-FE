import { memo } from 'react';
import { Header } from '@/shared/common/header';
import { Footer } from '@/shared/common/footer';
import { AboutMeBanner } from '../components/about-me-banner';
import { BrandValuesSection } from '../components/brand-values-section';
import { FleetShowcaseSection } from '../components/fleet-showcase-section';
import { OfficeNetworkSection } from '../components/office-network-section';
import { AboutCtaSection } from '../components/about-cta-section';

function AboutPage() {
	return (
		<main>
			<Header />
			<AboutMeBanner />
			<BrandValuesSection />
			<FleetShowcaseSection />
			<OfficeNetworkSection />
			<AboutCtaSection />
			<Footer />
		</main>
	);
}

export default memo(AboutPage);
