import { Footer } from '@/shared/common/footer';
import { Header } from '@/shared/common/header';
import { LookupHeroSection } from '@/features/lookup/components/lookup-hero-section';
import { LookupSearchSection } from '@/features/lookup/components/lookup-search-section';
import { LookupSupportSection } from '@/features/lookup/components/lookup-support-section';

function LookupPage() {
	return (
		<main className="bg-[#F7F9FC]">
			<Header />
			<LookupHeroSection />
			<LookupSearchSection />
			<LookupSupportSection />

			<Footer />
		</main>
	);
}

export default LookupPage;
