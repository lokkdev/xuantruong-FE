import Link from 'next/link';

export function ServicesCtaSection() {
	return (
		<section className="px-4 pb-16 md:px-8 md:pb-24">
			<div className="mx-auto w-full max-w-[1216px] rounded-[24px] bg-gradient-to-r from-[#0040A1] to-[#0056D2] px-6 py-12 text-center md:rounded-[40px] md:px-16 md:py-16">
				<h2 className="text-4xl font-extrabold leading-[1.1] tracking-[-1px] text-white md:text-5xl">
					Sẵn sàng cho hành trình mới?
				</h2>
				<p className="mx-auto mt-4 max-w-[672px] text-base leading-7 text-[#DAE2FF] md:text-lg">
					Liên hệ với chúng tôi ngay hôm nay để nhận báo giá tốt nhất cho các dịch vụ
					vận tải.
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link
						href="tel:1900xxxx"
						className="inline-flex min-h-14 items-center justify-center rounded-md bg-white px-8 text-lg font-semibold text-[#0040A1]">
						Gọi Tổng Đài: 1900 xxxx
					</Link>
					<Link
						href="/contact"
						className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-white/30 px-8 text-lg font-semibold text-white">
						Yêu Cầu Tư Vấn
					</Link>
				</div>
			</div>
		</section>
	);
}
