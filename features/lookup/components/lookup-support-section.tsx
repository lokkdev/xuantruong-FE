import { HeadsetIcon, RefreshCcwDotIcon, ShieldCheckIcon } from 'lucide-react';

const supportCards = [
	{
		title: 'Hỗ trợ 24/7',
		description:
			'Đội ngũ nhân viên luôn sẵn sàng giải đáp mọi thắc mắc của bạn qua hotline hoặc chat trực tuyến.',
		icon: HeadsetIcon,
		iconWrapperClassName: 'bg-[#0056D2]',
	},
	{
		title: 'Đổi trả linh hoạt',
		description:
			'Chính sách thay đổi lịch trình thuận tiện, giúp bạn chủ động hơn trong mọi kế hoạch di chuyển.',
		icon: RefreshCcwDotIcon,
		iconWrapperClassName: 'bg-[#FF9800]',
	},
	{
		title: 'Bảo mật thông tin',
		description:
			'Mọi giao dịch và thông tin cá nhân của khách hàng đều được mã hóa và bảo mật tuyệt đối.',
		icon: ShieldCheckIcon,
		iconWrapperClassName: 'bg-[#3D5E9D]',
	},
];

export function LookupSupportSection() {
	return (
		<section className="px-4 pb-20 pt-14 md:px-8 md:pb-24 md:pt-20">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
				<h3 className="text-center font-['Manrope'] text-[24px] font-bold leading-8 text-[#191C1E]">
					Dịch vụ hỗ trợ hành khách
				</h3>
				<div className="grid w-full gap-6 lg:grid-cols-3">
					{supportCards.map((item) => {
						const Icon = item.icon;
						return (
							<article key={item.title} className="rounded-lg bg-[#F2F4F7] p-8 md:min-h-[232px]">
								<div
									className={`inline-flex size-12 items-center justify-center rounded-xl ${item.iconWrapperClassName}`}>
									<Icon className="size-5 text-white" />
								</div>
								<h4 className="mt-6 font-['Manrope'] text-[18px] font-bold leading-7 text-[#191C1E]">
									{item.title}
								</h4>
								<p className="mt-2 font-['Inter'] text-[14px] leading-5 text-[#424654]">
									{item.description}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
