import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import type { AboutBannerData } from '../lib/about-banners';

interface OfficeNetworkSectionProps {
	hanoiBanner: AboutBannerData;
	quangNinhBanner: AboutBannerData;
}

export function OfficeNetworkSection({
	hanoiBanner,
	quangNinhBanner,
}: OfficeNetworkSectionProps) {
	const offices = [
		{
			name: 'Văn Phòng Hà Nội',
			address: 'Số 102 Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
			hotline: '1900 636 765',
			image: hanoiBanner.src,
			alt: hanoiBanner.alt,
		},
		{
			name: 'Văn Phòng Quảng Ninh',
			address: 'Số 55 Lê Thánh Tông, Hồng Gai, Hạ Long, Quảng Ninh',
			hotline: '0912 345 678',
			image: quangNinhBanner.src,
			alt: quangNinhBanner.alt,
		},
	];

	return (
		<section className="bg-[#F2F4F7] py-24">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-4 md:px-8">
				<div className="flex flex-col items-center gap-4 text-center">
					<h2 className="w-full max-w-[400px] text-[36px] font-extrabold leading-[40px] text-[#0040A1]">
						Hệ Thống Văn Phòng
					</h2>
					<p className="w-full max-w-[576px] text-base leading-6 text-[#424654]">
						Chúng tôi có mặt tại các vị trí đắc địa để hỗ trợ quý khách tốt
						nhất.
					</p>
				</div>

				<div className="grid gap-8 xl:grid-cols-2 xl:gap-12">
					{offices.map((office) => (
						<article key={office.name} className="flex flex-col gap-6">
							<div className="relative h-[328.5px] overflow-hidden rounded-[8px]">
								<Image
									src={office.image}
									alt={office.alt}
									fill
									className="object-cover"
									sizes="(min-width: 1280px) 584px, 100vw"
								/>
							</div>
							<div className="flex items-start gap-4">
								<div className="flex h-11 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#D9DFE8]">
									<MapPin className="size-[20px] text-[#0040A1]" />
								</div>
								<div className="flex flex-col">
									<h3 className="text-[24px] font-bold leading-8 text-[#0040A1]">
									{office.name}
									</h3>
									<p className="mt-2 text-base leading-6 text-[#424654]">
										{office.address}
									</p>
									<div className="mt-1 flex items-center gap-2 text-[#8B5000]">
										<Phone className="size-[10.5px]" />
										<span className="text-base font-semibold leading-6">
											Hotline: {office.hotline}
										</span>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
