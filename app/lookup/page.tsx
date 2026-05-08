import LookupPage from '@/features/lookup/pages/lookup-page';
import { getLocale } from '@/shared/i18n/server';

export default async function Page() {
	const locale = await getLocale();
	return <LookupPage locale={locale} />;
}
