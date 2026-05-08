import {
	API_BASE_URL,
	getMasterDataBannersUrl,
	MASTER_DATA_BANNER_TYPE,
} from '@/shared/config/api';

export interface AboutBannerData {
	src: string;
	alt: string;
}

interface MasterDataBannerItem {
	id?: number | null;
	image_url?: string | null;
	title?: string | null;
	order?: string | number | null;
}

interface MasterDataBannersResponse {
	banners?: MasterDataBannerItem[];
	data?: {
		banners?: MasterDataBannerItem[];
	};
	resources?: {
		banners?: MasterDataBannerItem[];
	};
}

export const ABOUT_BANNER_FALLBACKS: Record<number, AboutBannerData> = {
	1: {
		src: '/images/about/about-me-banner-bg-6b600a.png',
		alt: 'Hành trình đẳng cấp',
	},
	2: {
		src: '/images/about/2afc4d63abc034cdabba9c8e6ff0ae0b1bef60d7.png',
		alt: 'Limousine 9 chỗ VIP',
	},
	3: {
		src: '/images/about/14f607a402d6d0838b8e9e246d86e2446bfe7159.png',
		alt: 'Đội xe đa dạng',
	},
	4: {
		src: '/images/about/c091e0d86c4f593fbb868bf5e4d1989b1f84004d.png',
		alt: 'Văn phòng Hà Nội',
	},
	5: {
		src: '/images/about/fea8fdfeac5a9763354b91e7e0e9721102ea36e6.png',
		alt: 'Văn phòng Quảng Ninh',
	},
	6: {
		src: '/images/about/about-me-banner-bg-6b600a.png',
		alt: 'Nền thương hiệu Xuân Trường',
	},
	7: {
		src: '/images/about/about-me-banner-bg-6b600a.png',
		alt: 'Khuyến mãi dịch vụ vận tải',
	},
};

function resolveBannerImage(item?: MasterDataBannerItem): string | null {
	if (!item) {
		return null;
	}

	if (!item.image_url) {
		return null;
	}

	if (/^https?:\/\//i.test(item.image_url)) {
		return item.image_url;
	}

	if (item.image_url.startsWith('/')) {
		return `${API_BASE_URL}${item.image_url}`;
	}

	return `${API_BASE_URL}/${item.image_url}`;
}

export async function getAboutBannersByOrder(): Promise<
	Record<number, AboutBannerData>
> {
	try {
		const response = await fetch(
			getMasterDataBannersUrl(MASTER_DATA_BANNER_TYPE.ABOUT),
			{ cache: 'no-store' },
		);

		if (!response.ok) {
			return ABOUT_BANNER_FALLBACKS;
		}

		const payload = (await response.json()) as MasterDataBannersResponse;
		const banners =
			payload.banners || payload.data?.banners || payload.resources?.banners || [];

		const resolved: Record<number, AboutBannerData> = { ...ABOUT_BANNER_FALLBACKS };
		for (const [index, banner] of banners.entries()) {
			const normalizedOrder = Number(banner.order);
			const order =
				Number.isInteger(normalizedOrder) && normalizedOrder >= 1 && normalizedOrder <= 7
					? normalizedOrder
					: index + 1;
			if (order < 1 || order > 7) {
				continue;
			}

			const image = resolveBannerImage(banner);
			if (!image) {
				continue;
			}

			resolved[order] = {
				src: image,
				alt: banner.title || ABOUT_BANNER_FALLBACKS[order].alt,
			};
		}

		return resolved;
	} catch {
		return ABOUT_BANNER_FALLBACKS;
	}
}
