import { Footer } from '@/shared/common/footer';
import { Header } from '@/shared/common/header';
import { LookupHeroSection } from '@/features/lookup/components/lookup-hero-section';
import { LookupSearchSection } from '@/features/lookup/components/lookup-search-section';
import { LookupSupportSection } from '@/features/lookup/components/lookup-support-section';
import type { AppLocale } from '@/shared/i18n/types';

function LookupPage({ locale }: { locale: AppLocale }) {
	return (
		<main className="bg-[#F7F9FC]">
			<Header locale={locale} />
			<LookupHeroSection />
			<LookupSearchSection />
			<LookupSupportSection />

			<Footer />
		</main>
	);
}

export default LookupPage;
