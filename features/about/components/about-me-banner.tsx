import type { AboutBannerData } from '../lib/about-banners';

interface AboutMeBannerProps {
	banner: AboutBannerData;
}

export function AboutMeBanner({ banner }: AboutMeBannerProps) {
	return (
		<section className="w-full">
			<div
				className="relative flex h-[360px] items-center justify-center overflow-hidden bg-[#274B84] bg-cover bg-center bg-no-repeat sm:h-[460px] lg:h-[614px]"
				aria-label={banner.alt}
				style={{
					backgroundImage:
						`linear-gradient(180deg, rgba(6,16,34,0.35) 0%, rgba(6,16,34,0.6) 100%), url('${banner.src}')`,
				}}>
				<div className="flex max-w-[900px] flex-col items-center gap-6 px-4 text-center">
					<h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-6xl lg:text-[72px] lg:leading-[78px]">
						Hành Trình Đẳng Cấp
					</h1>
					<p className="max-w-[694px] text-base font-medium leading-7 text-[#B2C5FF] sm:text-[20px] sm:leading-7">
						Kiến tạo những chuyến đi an toàn, sang trọng và tiện nghi bậc nhất
						cho mọi hành khách trên tuyến Hà Nội - Quảng Ninh.
					</p>
				</div>
			</div>
		</section>
	);
}
