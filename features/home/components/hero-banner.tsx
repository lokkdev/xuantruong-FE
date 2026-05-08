import { TripSearchForm } from './trip-search-form';
import {
	getMasterDataBannersUrl,
	MASTER_DATA_BANNER_TYPE,
} from '@/shared/config/api';
import type { MasterDataBannerType } from '@/shared/config/api';

interface MasterDataBannerItem {
	image_url?: string | null;
	title?: string | null;
	order?: string | number | null;
	type?: MasterDataBannerType;
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

const defaultHeroBanner = {
	imageUrl: '/images/home/hero-banner.webp',
	title: 'Hành Trình Sang Trọng Trải Nghiệm Đẳng Cấp',
};

function resolveBannerImage(item?: MasterDataBannerItem): string {
	if (!item) {
		return defaultHeroBanner.imageUrl;
	}

	return item.image_url || defaultHeroBanner.imageUrl;
}

async function getHomeHeroBanner() {
	try {
		const response = await fetch(
			getMasterDataBannersUrl(MASTER_DATA_BANNER_TYPE.HOME),
			{ cache: 'no-store' },
		);

		if (!response.ok) {
			return defaultHeroBanner;
		}

		const payload = (await response.json()) as MasterDataBannersResponse;
		const banners =
			payload.banners || payload.data?.banners || payload.resources?.banners || [];
		const orderOneBanner =
			banners.find((banner) => Number(banner.order) === 1) || banners[0];

		return {
			imageUrl: resolveBannerImage(orderOneBanner),
			title: orderOneBanner?.title || defaultHeroBanner.title,
		};
	} catch {
		return defaultHeroBanner;
	}
}

export async function HeroBanner() {
	const banner = await getHomeHeroBanner();

	return (
		<section
			className="relative flex h-dvh items-center justify-start bg-cover bg-center bg-no-repeat py-14 md:py-20"
			style={{
				backgroundImage: `url('${banner.imageUrl}')`,
			}}>
			<span className="absolute inset-0 bg-[linear-gradient(125.74deg,rgba(0,64,161,0.9)_0%,rgba(0,86,210,0.7)_100%)]"></span>
			<div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
				<h2 className="text-[36px] font-extrabold leading-[1.05] text-white sm:text-[48px] md:text-[64px] lg:text-[72px]">
					{banner.title}
				</h2>
				<p className="mb-8 mt-4 w-full text-base text-white sm:mb-10 sm:mt-6 sm:text-lg md:mb-12 md:w-1/2 md:text-xl">
					Khám phá dịch vụ vận tải hàng đầu với Xuân Trường Limousine. Cam kết
					an toàn, tiện nghi và đúng giờ trên mọi nẻo đường.
				</p>
				<div className="w-full max-w-[1024px] rounded-lg bg-white p-4 shadow-[0_24px_48px_0_rgba(0,24,71,0.12)] sm:p-6 lg:p-8">
					<TripSearchForm />
				</div>
			</div>
		</section>
	);
}
