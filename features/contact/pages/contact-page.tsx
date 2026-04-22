import { Footer } from '@/shared/common/footer';
import { Header } from '@/shared/common/header';
import { ContactHeroSection } from '@/features/contact/components/contact-hero-section';
import { ContactSupportSection } from '@/features/contact/components/contact-support-section';
import { ContactMapSection } from '@/features/contact/components/contact-map-section';

export default function ContactPage() {
	return (
		<main className="bg-[#F7F9FC]">
			<Header />
			<ContactHeroSection />
			<ContactSupportSection />
			<ContactMapSection />
			<Footer />
		</main>
	);
}
