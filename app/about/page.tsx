import AboutPage from '@/features/about/pages/about-page';
import { getLocale } from '@/shared/i18n/server';

export default async function About() {
	const locale = await getLocale();
	return <AboutPage locale={locale} />;
}
