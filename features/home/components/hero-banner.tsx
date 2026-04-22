import { TripSearchForm } from './trip-search-form';

export function HeroBanner() {
	return (
		<section className="relative flex h-dvh items-center justify-start bg-[url('/images/home/hero-banner.webp')] bg-cover bg-center bg-no-repeat py-14 md:py-20">
			<span className="absolute inset-0 bg-[linear-gradient(125.74deg,rgba(0,64,161,0.9)_0%,rgba(0,86,210,0.7)_100%)]"></span>
			<div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
				<h2 className="text-[36px] font-extrabold leading-[1.05] text-white sm:text-[48px] md:text-[64px] lg:text-[72px]">
					Hành Trình Sang Trọng <br /> Trải Nghiệm Đẳng Cấp
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
