import Image from 'next/image';

export function ServicesHeroSection() {
	return (
		<section className="px-4 pb-12 pt-8 md:px-8 md:pt-12">
			<div className="mx-auto flex w-full max-w-[1216px] overflow-hidden rounded-xl">
				<div className="relative isolate w-full">
					<div className="relative min-h-[300px] sm:min-h-[360px] md:min-h-[400px]">
						<Image
							src="/images/figma/8da72fa2fd6ad264a6c71210dc3783c75cc86c84.png"
							alt="Dịch vụ vận tải cao cấp"
							fill
							priority
							className="object-cover"
							sizes="(min-width: 1280px) 1216px, 100vw"
						/>
					</div>
					<div className="absolute inset-0 bg-gradient-to-r from-[#0040A1E6] via-[#0040A1A8] to-transparent" />
					<div className="absolute inset-0 flex items-center p-6 md:p-12">
						<div className="max-w-[672px] text-white">
							<h1 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.8px] md:text-5xl md:tracking-[-1.2px]">
								Dịch vụ vận tải cao cấp
							</h1>
							<p className="mt-4 text-base leading-[1.65] text-[#DAE2FF] md:text-lg">
								Đồng hành cùng bạn trên mọi nẻo đường với tiêu chuẩn 5 sao, từ vận tải
								hành khách, hàng hóa đến thuê xe hợp đồng chuyên nghiệp.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
