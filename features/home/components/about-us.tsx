import {
	BanknoteIcon,
	BusFrontIcon,
	CarTaxiFrontIcon,
	MapIcon,
	ShipIcon,
	PackageIcon,
} from 'lucide-react';
import Image from 'next/image';

interface ServiceItem {
	title: string;
	icon: React.ReactNode;
}

const services: ServiceItem[] = [
	{
		title: 'Xe Limousine',
		icon: <BusFrontIcon className="size-6 text-[#0040A1]" />,
	},
	{
		title: 'Hàng hóa',
		icon: <PackageIcon className="size-6 text-[#0040A1]" />,
	},
	{
		title: 'Chuyển tiền',
		icon: <BanknoteIcon className="size-6 text-[#0040A1]" />,
	},
	{
		title: 'Vé tàu',
		icon: <ShipIcon className="size-6 text-[#0040A1]" />,
	},
	{
		title: 'Tour lữ hành',
		icon: <MapIcon className="size-6 text-[#0040A1]" />,
	},
	{
		title: 'Thuê xe HĐ',
		icon: <CarTaxiFrontIcon className="size-6 text-[#0040A1]" />,
	},
];

export function AboutUs() {
	return (
		<section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
			<div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
				<div className="flex flex-col">
					<p className="text-sm font-extrabold uppercase tracking-[1.4px] text-[#8B5000]">
						VỀ CHÚNG TÔI
					</p>
					<h2 className="my-4 text-[36px] font-extrabold uppercase leading-[40px] tracking-[-1.8px] text-[#191C1E] sm:text-[40px] sm:leading-[42px] lg:text-[48px] lg:leading-[48px] lg:tracking-[-2.4px]">
						XUÂN TRƯỜNG LIMOUSINE
					</h2>
					<p className="max-w-[560px] text-base leading-[28px] text-[#424654] sm:text-lg sm:leading-[29px]">
						Xuân Trường mang đến sự đa dạng trong các dịch vụ vận tải cao cấp,
						không chỉ là phương tiện di chuyển mà còn là giải pháp toàn diện cho
						mọi nhu cầu hành trình của bạn. Với phương châm &quot;Hành khách là
						trọng tâm&quot;, chúng tôi không ngừng cải tiến để mang lại giá trị
						tốt nhất.
					</p>
					<ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
						{services.map((service) => (
							<li
								key={service.title}
								className="flex min-h-[108px] flex-col gap-4 rounded-lg bg-[#F2F4F7] p-5 sm:p-6">
								{service.icon}
								<span className="font-bold text-sm text-[#191C1E]">
									{service.title}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="relative">
					<div className="relative aspect-[23/29] w-full overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
						<Image
							src="/images/figma/3f3b1e1cabb59189bb487cbd52a29ce5b2dd3de0.png"
							alt="Đội xe Xuân Trường Limousine"
							fill
							className="object-cover"
							sizes="(min-width: 1024px) 50vw, 100vw"
						/>
					</div>
					<div className="mt-4 w-fit rounded-lg bg-white p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0 lg:p-8">
						<p className="text-[36px] font-semibold leading-10 text-[#0040A1]">10+</p>
						<p className="text-sm font-semibold uppercase tracking-[1.4px] text-[#424654]">
							Năm Kinh Nghiệm
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
