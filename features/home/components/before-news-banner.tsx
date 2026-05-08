import Image from 'next/image';
import {
	getMasterDataBannersUrl,
	MASTER_DATA_BANNER_TYPE,
} from '@/shared/config/api';

interface BannerData {
	src: string;
	alt: string;
}

interface BeforeNewsBannerProps {
	banner?: BannerData;
}

const defaultBanner: BannerData = {
	src: '/images/home/Section - Banner Before News → Thông tin lộ trình và chính sách.svg',
	alt: 'Thông tin lộ trình và chính sách',
};

interface MasterDataBannerItem {
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

function resolveBannerImage(item?: MasterDataBannerItem): string {
	if (!item) {
		return defaultBanner.src;
	}

	return item.image_url || defaultBanner.src;
}

async function getBeforeNewsBanner(): Promise<BannerData> {
	try {
		const response = await fetch(
			getMasterDataBannersUrl(MASTER_DATA_BANNER_TYPE.HOME),
			{ cache: 'no-store' },
		);

		if (!response.ok) {
			return defaultBanner;
		}

		const payload = (await response.json()) as MasterDataBannersResponse;
		const banners =
			payload.banners || payload.data?.banners || payload.resources?.banners || [];
		const orderThreeBanner =
			banners.find((banner) => Number(banner.order) === 3) || banners[2];

		return {
			src: resolveBannerImage(orderThreeBanner),
			alt: orderThreeBanner?.title || defaultBanner.alt,
		};
	} catch {
		return defaultBanner;
	}
}

export async function BeforeNewsBanner({ banner }: BeforeNewsBannerProps) {
	const resolvedBanner = banner || (await getBeforeNewsBanner());

	return (
		<section className="bg-[#F2F4F7] px-8 pb-24">
			<div className="relative mx-auto aspect-[1280/320] w-full max-w-[1280px] overflow-hidden rounded-xl">
				<Image
					src={resolvedBanner.src}
					alt={resolvedBanner.alt}
					fill
					className="object-cover"
					sizes="(min-width: 1280px) 1280px, 100vw"
				/>
			</div>
		</section>
	);
}
