import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

const rentalServices = [
	{
		tag: 'SỰ KIỆN & CƯỚI HỎI',
		title: 'Xe Cưới Sang Trọng',
		description: 'Trang trí theo yêu cầu, tài xế lịch thiệp, đón đưa đúng giờ trong ngày trọng đại.',
		image: '/images/figma/86fe0c2a07509a9ecd05b77e7b3a1fc02deaa5d6.png',
	},
	{
		tag: 'TOUR DU LỊCH',
		title: 'Tour Hành Hương & Du Lịch',
		description: 'Lộ trình linh hoạt theo ý muốn, hỗ trợ đặt phòng khách sạn và nhà hàng.',
		image: '/images/figma/4470ed49efc59d1ee8930141f05d4231c1096781.png',
	},
	{
		tag: 'DOANH NGHIỆP',
		title: 'Đưa Đón Nhân Viên',
		description: 'Hợp đồng dài hạn cho công ty, trường học với chi phí tối ưu nhất.',
		image: '/images/figma/683db36291d70e563832eb2a0d9e8902f16716a0.png',
	},
];

export function RentalServicesSection() {
	return (
		<div className="flex flex-col gap-12">
			<div className="mx-auto flex max-w-[768px] flex-col items-center text-center">
				<span className="rounded-xl bg-[#D8E2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.6px] text-[#001A42]">
					Dịch vụ theo yêu cầu
				</span>
				<h2 className="mt-4 text-[36px] font-bold leading-[40px] tracking-[-0.6px] text-[#191C1E]">
					Thuê xe hợp đồng & Du lịch
				</h2>
				<p className="mt-4 text-base leading-[26px] text-[#424654]">
					Cung cấp giải pháp cho thuê xe du lịch, xe cưới, sự kiện doanh nghiệp với đa
					dạng dòng xe từ 9 chỗ đến 45 chỗ. Tài xế giàu kinh nghiệm, am hiểu địa hình và
					phục vụ tận tâm.
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{rentalServices.map((item) => (
					<article
						key={item.title}
						className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]">
						<div className="relative h-56">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 384px, 100vw"
							/>
							<span className="absolute left-4 top-4 rounded-xl bg-white/90 px-3 py-1 text-xs font-semibold text-[#0040A1] backdrop-blur-sm">
								{item.tag}
							</span>
						</div>
						<div className="flex flex-col gap-3 p-6">
							<h3 className="text-xl font-semibold leading-7 text-[#191C1E]">{item.title}</h3>
							<p className="text-sm leading-[1.6] text-[#424654]">{item.description}</p>
							<Link
								href="/contact"
								className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-[#0040A1]">
								Xem chi tiết
								<ArrowRightIcon className="size-4" />
							</Link>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
