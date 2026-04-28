import Link from 'next/link';
import { Ticket } from 'lucide-react';
import type { AboutBannerData } from '../lib/about-banners';

interface AboutCtaSectionProps {
	banner: AboutBannerData;
}

export function AboutCtaSection({ banner }: AboutCtaSectionProps) {
	return (
		<section className="bg-[#F2F4F7] pb-24">
			<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
				<div
					className="relative overflow-hidden rounded-[16px] bg-[#0056D2] bg-cover bg-center px-4 py-10 md:px-12 md:py-12"
					aria-label={banner.alt}
					style={{
						backgroundImage: `linear-gradient(0deg, rgba(0, 86, 210, 0.88), rgba(0, 86, 210, 0.88)), url('${banner.src}')`,
					}}>
					<div className="pointer-events-none absolute -right-32 -top-32 size-64 rounded-[12px] bg-white/5" />

					<div className="relative flex flex-col items-center gap-6">
						<h2 className="text-center text-[30px] font-bold leading-10 text-white md:text-[36px]">
							Sẵn sàng cho chuyến đi tuyệt vời nhất?
						</h2>

						<div className="flex flex-wrap items-center justify-center gap-4">
							<Link
								href="/"
								className="inline-flex h-[61px] items-center justify-center gap-2 rounded-[6px] bg-[#8B5000] px-8 text-[18px] font-semibold leading-7 text-white">
								<Ticket className="size-5" />
								Đặt vé ngay
							</Link>

							<Link
								href="/"
								className="inline-flex h-[62px] items-center justify-center rounded-[6px] border border-white/20 bg-white/10 px-[33px] text-[18px] font-semibold leading-7 text-white">
								Liên hệ tư vấn
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
