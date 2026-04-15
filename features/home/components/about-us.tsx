import { BanknoteIcon, BoxIcon, CarFrontIcon, TicketIcon } from 'lucide-react';
import Image from 'next/image';

interface ServiceItem {
	title: string;
	icon: React.ReactNode;
}

const services: ServiceItem[] = [
	{
		title: 'Xe Limousine',
		icon: <CarFrontIcon />,
	},
	{
		title: 'Hàng hóa',
		icon: <BoxIcon />,
	},
	{
		title: 'Chuyển tiền',
		icon: <BanknoteIcon />,
	},
	{
		title: 'Vé tàu',
		icon: <TicketIcon />,
	},
	{
		title: 'Tour lữ hành',
		icon: <TicketIcon />,
	},
	{
		title: 'Thuê xe HĐ',
		icon: <TicketIcon />,
	},
];

export function AboutUs() {
	return (
		<section className="py-[96px] h-dvh px-8">
			<div className="max-w-[1280px] mx-auto w-full grid grid-cols-2 gap-16 h-full">
				<div>
					<p className="text-sm text-[#8B5000] font-bold uppercase">
						VỀ CHÚNG TÔI
					</p>
					<h2 className="font-extrabold text-[48px] text-black leading-[48px] my-4">
						XUÂN TRƯỜNG LIMOUSINE
					</h2>
					<p className="text-lg text-[#424654] leading-7 mb-4">
						Xuân Trường mang đến sự đa dạng trong các dịch vụ vận tải cao cấp,
						không chỉ là phương tiện di chuyển mà còn là giải pháp toàn diện cho
						mọi nhu cầu hành trình của bạn. Với phương châm &quot;Hành khách là
						trọng tâm&quot;, chúng tôi không ngừng cải tiến để mang lại giá trị
						tốt nhất.
					</p>
					<ul className="grid md:grid-cols-3 grid-cols-1 gap-6">
						{services.map((service) => (
							<li
								key={service.title}
								className="bg-[#F2F4F7] h-[108px] p-6 rounded-md grid grid-cols-1 gap-4">
								{service.icon}
								<span className="font-bold text-sm text-[#191C1E]">
									{service.title}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1676107746494-61af7d8673ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="About Us"
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
			</div>
		</section>
	);
}
