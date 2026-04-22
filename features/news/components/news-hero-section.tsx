import Image from 'next/image';

export function NewsHeroSection() {
	return (
		<section className="relative isolate overflow-hidden bg-[#0056D2]">
			<div className="absolute inset-0">
				<Image
					src="/images/figma-temp/a86f5d800eefc7ecef6110a846b3109a049e65c5.png"
					alt="Tin tức và sự kiện Xuân Trường Limousine"
					fill
					priority
					className="object-cover opacity-50"
					sizes="100vw"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-[#0040A1] to-[#0056D2] opacity-90" />

			<div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-4 pb-16 pt-14 md:px-8 md:pb-20">
				<h1 className="text-[36px] font-extrabold leading-10 tracking-[-0.9px] text-white">
					Tin tức &amp; Sự kiện
				</h1>
				<p className="mt-2 max-w-[560px] text-base font-medium leading-6 text-[#CCD8FF]">
					Cập nhật những thông báo mới nhất, chương trình khuyến mãi hấp dẫn và cẩm
					nang du lịch hữu ích.
				</p>
				</div>
		</section>
	);
}
