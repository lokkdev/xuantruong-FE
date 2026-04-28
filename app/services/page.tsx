import ServicesPage from '@/features/services/pages/services-page';
import { getLocale } from '@/shared/i18n/server';

export default async function Services() {
	const locale = await getLocale();
	return <ServicesPage locale={locale} />;
}
