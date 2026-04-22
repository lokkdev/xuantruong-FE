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

export function BeforeNewsBanner({ banner = defaultBanner }: BeforeNewsBannerProps) {
	return (
		<section className="bg-[#F2F4F7] px-8 pb-24">
			<div className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-xl">
				<img src={banner.src} alt={banner.alt} className="h-auto w-full object-cover" />
			</div>
		</section>
	);
}
