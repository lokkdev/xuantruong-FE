import ContactPage from '@/features/contact/pages/contact-page';
import { getLocale } from '@/shared/i18n/server';

export default async function Contact() {
	const locale = await getLocale();
	return <ContactPage locale={locale} />;
}
