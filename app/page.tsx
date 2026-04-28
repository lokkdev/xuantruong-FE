import HomePage from '@/features/home/pages/home-page';
import { getLocale } from '@/shared/i18n/server';

export default async function Home() {
	const locale = await getLocale();
	return <HomePage locale={locale} />;
}
