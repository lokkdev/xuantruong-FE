import { Footer } from '@/shared/common/footer';
import { Header } from '@/shared/common/header';
import { ContactHeroSection } from '@/features/contact/components/contact-hero-section';
import { ContactSupportSection } from '@/features/contact/components/contact-support-section';
import { ContactMapSection } from '@/features/contact/components/contact-map-section';
import type { AppLocale } from '@/shared/i18n/types';

export default function ContactPage({ locale }: { locale: AppLocale }) {
	return (
		<main className="bg-[#F7F9FC]">
			<Header locale={locale} />
			<ContactHeroSection />
			<ContactSupportSection />
			<ContactMapSection />
			<Footer />
		</main>
	);
}
