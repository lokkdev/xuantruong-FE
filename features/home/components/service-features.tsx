import {
	ArmchairIcon,
	CheckCircle2Icon,
	Clock3Icon,
	ShieldCheckIcon,
} from 'lucide-react';
import type { ComponentType } from 'react';

interface ServiceFeatureItem {
	title: string;
	description: string;
	points: string[];
	icon: ComponentType<{ className?: string }>;
}

const serviceFeatures: ServiceFeatureItem[] = [
	{
		title: 'Tiện nghi cao cấp',
		description:
			'Tận hưởng không gian sang trọng với ghế massage da cao cấp, hệ thống giải trí LCD, nước uống và khăn lạnh miễn phí.',
		points: ['Nội thất cao cấp', 'Nước uống/Wifi miễn phí', 'Vệ sinh sạch sẽ sau mỗi chuyến'],
		icon: ArmchairIcon,
	},
	{
		title: 'Linh hoạt lịch trình',
		description:
			'Với tần suất xe chạy liên tục từ 3h đến 20h hàng ngày, chúng tôi đảm bảo bạn luôn tìm được chuyến đi phù hợp.',
		points: ['Hoạt động từ 3h - 20h', 'Lịch trình đa dạng', 'Nhiều phân khúc giá vé'],
		icon: Clock3Icon,
	},
	{
		title: 'Dịch vụ chuyên nghiệp',
		description:
			'Đội ngũ nhân viên tận tâm, lái xe an toàn, cùng hệ thống đặt vé hiện đại giúp hành trình của bạn trở nên hoàn hảo.',
		points: [
			'Nhân viên nhiệt tình, chuyên nghiệp',
			'Thanh toán/Đặt vé đa kênh',
			'Hỗ trợ khách hàng 24/7',
		],
		icon: ShieldCheckIcon,
	},
];

export function ServiceFeatures() {
	return (
		<section className="bg-[#F7F9FC] px-8 py-24">
			<div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
				{serviceFeatures.map((feature) => {
					const Icon = feature.icon;

					return (
						<article key={feature.title} className="flex flex-col gap-6">
							<div className="flex size-16 items-center justify-center rounded-2xl bg-[#DAE2FF]">
								<Icon className="size-7 text-[#0040A1]" />
							</div>

							<div className="flex flex-col gap-4">
								<h3 className="text-3xl font-extrabold leading-[1.2] tracking-[-0.6px] text-[#191C1E]">
									{feature.title}
								</h3>
								<p className="text-base leading-[26px] text-[#424654]">
									{feature.description}
								</p>
							</div>

							<ul className="flex flex-col gap-3">
								{feature.points.map((point) => (
									<li key={point} className="flex items-center gap-3 text-[#191C1E]">
										<CheckCircle2Icon className="size-4 shrink-0 text-[#0056D2]" />
										<span className="text-sm font-medium leading-5">{point}</span>
									</li>
								))}
							</ul>
						</article>
					);
				})}
			</div>
		</section>
	);
}
