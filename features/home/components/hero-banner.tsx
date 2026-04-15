import { TripSearchForm } from './trip-search-form';

export function HeroBanner() {
	return (
		<section className=" h-dvh bg-[url('/images/home/hero-banner.webp')] bg-cover bg-center bg-no-repeat relative flex items-center justify-start ">
			<span className="absolute inset-0 bg-[linear-gradient(125.74deg,rgba(0,64,161,0.9)_0%,rgba(0,86,210,0.7)_100%)]"></span>
			<div className="relative px-8 max-w-[1280px] mx-auto w-full">
				<h2 className="font-extrabold text-white text-[4.5rem] leading-18">
					Hành Trình Sang Trọng <br /> Trải Nghiệm Đẳng Cấp
				</h2>
				<p className="text-white text-xl mt-6 mb-12 md:w-1/2 w-full">
					Khám phá dịch vụ vận tải hàng đầu với Xuân Trường Limousine. Cam kết
					an toàn, tiện nghi và đúng giờ trên mọi nẻo đường.
				</p>
				<div className="bg-white rounded-md p-8 max-w-[1024px] w-full">
					<TripSearchForm />
				</div>
			</div>
		</section>
	);
}
