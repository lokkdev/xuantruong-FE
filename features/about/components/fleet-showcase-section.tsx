import Image from 'next/image';
import { Accessibility, Clock3, Ticket } from 'lucide-react';

type ServiceFeatureIconKey = 'clock' | 'accessibility';

export interface ServiceFeature {
	title: string;
	description: string;
	icon: ServiceFeatureIconKey;
}

export interface FleetShowcaseData {
	eyebrow: string;
	title: string;
	description: string;
	ctaLabel: string;
	features: ServiceFeature[];
	gallery: {
		topLeft: string;
		topRight: string;
		bottomLeft: string;
		bottomRight: string;
	};
}

const iconMap = {
	clock: Clock3,
	accessibility: Accessibility,
} as const;

export const defaultFleetShowcaseData: FleetShowcaseData = {
	eyebrow: 'Hành trình di chuyển',
	title: 'Dịch vụ vận tải hành khách',
	description:
		'Hệ thống xe Limousine đời mới với nội thất bọc da cao cấp, tích hợp massage, sạc USB và Wifi tốc độ cao. Cam kết không bắt khách dọc đường, đúng giờ, an toàn tuyệt đối.',
	ctaLabel: 'Đặt vé ngay',
	features: [
		{
			title: 'Linh hoạt',
			description: 'Chuyến khởi hành mỗi 30 phút',
			icon: 'clock',
		},
		{
			title: 'Tiện nghi',
			description: 'Ghế massage thương gia cao cấp',
			icon: 'accessibility',
		},
	],
	gallery: {
		topLeft: '/images/about/2afc4d63abc034cdabba9c8e6ff0ae0b1bef60d7.png',
		topRight: '/images/about/14f607a402d6d0838b8e9e246d86e2446bfe7159.png',
		bottomLeft: '/images/about/c091e0d86c4f593fbb868bf5e4d1989b1f84004d.png',
		bottomRight: '/images/about/fea8fdfeac5a9763354b91e7e0e9721102ea36e6.png',
	},
};

export function FleetShowcaseSection({
	data = defaultFleetShowcaseData,
}: {
	data?: FleetShowcaseData;
}) {
	return (
		<section className="bg-[#F2F4F7] py-24">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:px-8 xl:flex-row xl:items-center xl:gap-12">
				<div className="w-full xl:max-w-[584px]">
					<div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-[#DAE2FF] px-4 py-1.5">
						<Ticket className="size-3 text-[#001847]" />
						<p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#001847]">
							{data.eyebrow}
						</p>
					</div>
					<h2 className="text-[36px] font-bold leading-[40px] text-[#191C1E]">
						{data.title}
					</h2>
					<p className="mt-6 text-[18px] leading-[29px] text-[#424654]">
						{data.description}
					</p>
					<div className="mt-8 grid gap-4 md:grid-cols-2">
						{data.features.map((feature) => {
							const Icon = iconMap[feature.icon];
							return (
								<article
									key={feature.title}
									className="rounded-[8px] bg-white px-4 py-[18px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
									<Icon className="mb-3 size-5 text-[#0040A1]" />
									<p className="text-base font-semibold leading-6 text-[#191C1E]">
										{feature.title}
									</p>
									<p className="text-sm leading-5 text-[#424654]">
										{feature.description}
									</p>
								</article>
							);
						})}
					</div>
					<button
						type="button"
						className="mt-5 inline-flex h-[49px] items-center justify-center rounded-[6px] bg-gradient-to-br from-[#0040A1] to-[#0056D2] px-8 text-base font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
						{data.ctaLabel}
					</button>
				</div>
				<div className="w-full xl:max-w-[584px]">
					<div className="grid gap-4 md:grid-cols-2">
						<div className="relative h-[256px] overflow-hidden rounded-2xl">
							<Image
								src={data.gallery.topLeft}
								alt="Nội thất xe limousine cao cấp"
								fill
								className="object-cover"
								sizes="(min-width: 1280px) 284px, 100vw"
							/>
						</div>
						<div className="relative h-[288px] overflow-hidden rounded-2xl md:-mt-8">
							<Image
								src={data.gallery.topRight}
								alt="Tài xế chuyên nghiệp"
								fill
								className="object-cover"
								sizes="(min-width: 1280px) 284px, 100vw"
							/>
						</div>
						<div className="relative h-[256px] overflow-hidden rounded-2xl">
							<Image
								src={data.gallery.bottomLeft}
								alt="Trải nghiệm hành khách trên xe"
								fill
								className="object-cover"
								sizes="(min-width: 1280px) 284px, 100vw"
							/>
						</div>
						<div className="relative h-[96px] overflow-hidden rounded-2xl md:-mt-24 md:h-[192px]">
							<Image
								src={data.gallery.bottomRight}
								alt="Xe chạy trên cung đường"
								fill
								className="object-cover"
								sizes="(min-width: 1280px) 284px, 100vw"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
