import Image from 'next/image';

export function LookupHeroSection() {
	return (
		<section className="relative isolate overflow-hidden bg-[#0056D2]">
			<div className="absolute inset-0">
				<Image
					src="/images/figma/f60954fdc361cd8aa8d9e67f3de50409e7b1e19d.png"
					alt="Xe Xuân Trường Limousine"
					fill
					priority
					className="object-cover opacity-50"
					sizes="100vw"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-[#0040A1] to-[#0056D2] opacity-90" />

			<div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-4 pb-[200px] pt-14 md:px-8 md:pb-[220px]">
				<h1 className="text-[36px] font-extrabold leading-10 tracking-[-0.9px] text-white">
					Tra cứu thông tin
				</h1>
				<p className="mt-2 max-w-[560px] text-base font-medium leading-6 text-[#CCD8FF]">
					Dễ dàng quản lý hành trình và kiểm tra trạng thái vé của bạn chỉ với vài thao tác
					đơn giản.
				</p>
			</div>
		</section>
	);
}
