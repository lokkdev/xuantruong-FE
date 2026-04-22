import { Clock3, Gem, ShieldCheck } from 'lucide-react';

const brandValues = [
	{
		title: 'An Toàn Tuyệt Đối',
		description:
			'Đội ngũ tài xế chuyên nghiệp, giàu kinh nghiệm được đào tạo bài bản về dịch vụ khách hàng cao cấp.',
		icon: ShieldCheck,
	},
	{
		title: 'Đúng Giờ & Tận Tâm',
		description:
			'Cam kết khởi hành đúng lịch trình, không bắt khách dọc đường, tôn trọng thời gian quý báu của bạn.',
		icon: Clock3,
	},
	{
		title: 'Trải Nghiệm 5 Sao',
		description:
			'Không gian nội thất sang trọng, trang thiết bị hiện đại mang lại cảm giác thư giãn như ở nhà.',
		icon: Gem,
	},
];

export function BrandValuesSection() {
	return (
		<section className="bg-[#F2F4F7] py-24">
			<div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-3">
				{brandValues.map((value) => {
					const Icon = value.icon;
					return (
						<article
							key={value.title}
							className="h-[238px] rounded-[8px] bg-white px-8 py-[34px]">
							<Icon className="mb-[22px] size-[30px] text-[#8B5000]" />
							<h3 className="mb-3 text-[20px] font-bold leading-7 text-[#0040A1]">
								{value.title}
							</h3>
							<p className="text-base leading-[26px] text-[#424654]">
								{value.description}
							</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}
