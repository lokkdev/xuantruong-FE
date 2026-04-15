import { Header } from '@/shared/common/header';
import { memo } from 'react';
import { HeroBanner } from '../components/hero-banner';
import { AboutUs } from '../components/about-us';

function HomePage() {
	return (
		<main>
			<Header />
			<HeroBanner />
			<AboutUs />
		</main>
	);
}

export default memo(HomePage);
