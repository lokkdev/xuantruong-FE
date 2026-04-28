import Image from 'next/image';
import {
	API_BASE_URL,
	getMasterDataBannersUrl,
	MASTER_DATA_BANNER_TYPE,
	type MasterDataBannerType,
} from '@/shared/config/api';

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

const defaultLookupHeroBannerImage =
	'/images/figma/f60954fdc361cd8aa8d9e67f3de50409e7b1e19d.png';
const defaultLookupHeroTitle = 'Tra cứu thông tin';

function resolveBannerImage(item?: MasterDataBannerItem): string {
	if (!item?.image_url) {
		return defaultLookupHeroBannerImage;
	}

	if (/^https?:\/\//i.test(item.image_url)) {
		return item.image_url;
	}

	if (item.image_url.startsWith('/')) {
		return `${API_BASE_URL}${item.image_url}`;
	}

	return `${API_BASE_URL}/${item.image_url}`;
}

async function getLookupHeroBannerData(): Promise<{ image: string; title: string }> {
	try {
		const response = await fetch(
			getMasterDataBannersUrl(MASTER_DATA_BANNER_TYPE.LOOKUP),
			{ cache: 'no-store' },
		);

		if (!response.ok) {
			return {
				image: defaultLookupHeroBannerImage,
				title: defaultLookupHeroTitle,
			};
		}

		const payload = (await response.json()) as MasterDataBannersResponse;
		const banners =
			payload.banners || payload.data?.banners || payload.resources?.banners || [];
		const orderOneBanner =
			banners.find((banner) => Number(banner.order) === 1) || banners[0];

		return {
			image: resolveBannerImage(orderOneBanner),
			title: orderOneBanner?.title || defaultLookupHeroTitle,
		};
	} catch {
		return {
			image: defaultLookupHeroBannerImage,
			title: defaultLookupHeroTitle,
		};
	}
}

export async function LookupHeroSection() {
	const bannerData = await getLookupHeroBannerData();

	return (
		<section className="relative isolate overflow-hidden bg-[#0056D2]">
			<div className="absolute inset-0">
				<Image
					src={bannerData.image}
					alt={bannerData.title}
					fill
					priority
					className="object-cover opacity-50"
					sizes="100vw"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-[#0040A1] to-[#0056D2] opacity-90" />

			<div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-4 pb-[200px] pt-14 md:px-8 md:pb-[220px]">
				<h1 className="text-[36px] font-extrabold leading-10 tracking-[-0.9px] text-white">
					{bannerData.title}
				</h1>
				<p className="mt-2 max-w-[560px] text-base font-medium leading-6 text-[#CCD8FF]">
					Dễ dàng quản lý hành trình và kiểm tra trạng thái vé của bạn chỉ với vài thao tác
					đơn giản.
				</p>
			</div>
		</section>
	);
}
