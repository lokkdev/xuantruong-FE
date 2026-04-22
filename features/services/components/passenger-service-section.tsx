import Image from 'next/image';
import Link from 'next/link';
import { AccessibilityIcon, BusIcon, Clock3Icon } from 'lucide-react';

const passengerHighlights = [
	{
		title: 'Linh hoạt',
		description: 'Chuyến khởi hành mỗi 30 phút',
		icon: Clock3Icon,
	},
	{
		title: 'Tiện nghi',
		description: 'Ghế massage thương gia cao cấp',
		icon: AccessibilityIcon,
	},
];

const passengerGallery = [
	{
		src: '/images/figma/2afc4d63abc034cdabba9c8e6ff0ae0b1bef60d7.png',
		alt: 'Khoang xe limousine',
	},
	{
		src: '/images/figma/14f607a402d6d0838b8e9e246d86e2446bfe7159.png',
		alt: 'Tài xế chuyên nghiệp',
	},
	{
		src: '/images/figma/c091e0d86c4f593fbb868bf5e4d1989b1f84004d.png',
		alt: 'Hành khách thư giãn trên xe',
	},
	{
		src: '/images/figma/fea8fdfeac5a9763354b91e7e0e9721102ea36e6.png',
		alt: 'Xe khách trên cung đường',
	},
];

export function PassengerServiceSection() {
	return (
		<div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
			<div className="flex flex-col gap-6">
				<span className="inline-flex w-fit items-center gap-2 rounded-[12px] bg-[#D8E2FF] px-4 py-1.5 text-xs font-semibold leading-4 uppercase tracking-[0.6px] text-[#001847]">
					<BusIcon className="size-4" />
					HÀNH TRÌNH DI CHUYỂN
				</span>
				<h2 className="text-[36px] font-bold leading-[40px] tracking-[-0.6px] text-[#191C1E]">
					Dịch vụ vận tải hành khách
				</h2>
				<p className="text-lg leading-[29.25px] text-[#424654]">
					Hệ thống xe Limousine đời mới với nội thất bọc da cao cấp, tích hợp massage,
					sạc USB và Wifi tốc độ cao. Cam kết không bắt khách dọc đường, đúng giờ, an
					toàn tuyệt đối.
				</p>

				<div className="grid gap-4 pt-4 sm:grid-cols-2">
					{passengerHighlights.map((item) => {
						const Icon = item.icon;
						return (
							<article
								key={item.title}
								className="rounded-[8px] bg-white px-4 py-[18px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
								<Icon className="size-5 text-[#0056D2]" />
								<h3 className="mt-[10px] text-base font-semibold leading-6 text-[#191C1E]">
									{item.title}
								</h3>
								<p className="mt-1 text-sm leading-5 text-[#424654]">{item.description}</p>
							</article>
						);
					})}
				</div>

				<Link
					href="/contact"
					className="inline-flex h-12 w-fit items-center justify-center rounded-[6px] bg-gradient-to-r from-[#0040A1] to-[#0056D2] px-8 text-base font-semibold leading-6 text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
					Đặt vé ngay
				</Link>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{passengerGallery.map((item) => (
					<div key={item.alt} className="relative h-[256px] overflow-hidden rounded-2xl">
						<Image
							src={item.src}
							alt={item.alt}
							fill
							className="object-cover"
							sizes="(min-width: 1024px) 284px, 45vw"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
