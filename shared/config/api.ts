export const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000';

export const MASTER_DATA_BANNER_TYPE = {
	HOME: 1,
	ABOUT: 2,
	SERVICE: 3,
	LOOKUP: 4,
	NEWS: 5,
	CONTACT: 6,
} as const;

export type MasterDataBannerType =
	(typeof MASTER_DATA_BANNER_TYPE)[keyof typeof MASTER_DATA_BANNER_TYPE];

const MASTER_DATA_API_ROUTE = '/api/master-data';

export function getMasterDataBannersUrl(type: MasterDataBannerType): string {
	const resources = encodeURIComponent(JSON.stringify({ type }));
	return `${API_BASE_URL}${MASTER_DATA_API_ROUTE}?resources[banners]=${resources}`;
}

