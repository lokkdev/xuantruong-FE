import Image from 'next/image';
import Link from 'next/link';
import {
	AccessibilityIcon,
	CheckCircle2Icon,
	Clock3Icon,
	PackageIcon,
	BusIcon,
} from 'lucide-react';
import { memo } from 'react';
import { Header } from '@/shared/common/header';
import { Footer } from '@/shared/common/footer';
import type { AppLocale } from '@/shared/i18n/types';

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

const cargoBenefits = [
	'Nhận và giao hàng tại nhà (Door-to-door)',
	'Vận chuyển linh kiện điện tử, thực phẩm tươi sống',
	'Bảo hiểm 100% giá trị hàng hóa',
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

function ServicesPage({ locale }: { locale: AppLocale }) {
	return (
		<main className="bg-white">
			<Header locale={locale} />

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
									Đồng hành cùng bạn trên mọi nẻo đường với tiêu chuẩn 5 sao, từ vận
									tải hành khách, hàng hóa đến thuê xe hợp đồng chuyên nghiệp.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 pb-12 md:px-8 md:pb-16">
				<div className="mx-auto flex w-full max-w-[1216px] flex-col gap-16">
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
								Hệ thống xe Limousine đời mới với nội thất bọc da cao cấp, tích hợp
								massage, sạc USB và Wifi tốc độ cao. Cam kết không bắt khách dọc
								đường, đúng giờ, an toàn tuyệt đối.
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
											<p className="mt-1 text-sm leading-5 text-[#424654]">
												{item.description}
											</p>
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

					<div className="relative overflow-hidden rounded-[32px] bg-[#F2F4F7] p-6 md:p-12">
						<div className="pointer-events-none absolute left-3/4 top-0 -translate-x-1/2 opacity-10">
							<Image
								src="/box.svg"
								alt=""
								width={240}
								height={263}
								aria-hidden
								className="h-[263px] w-[240px]"
							/>
						</div>
						<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
							<div className="relative h-[320px] overflow-hidden rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] sm:h-[420px] md:h-[500px]">
								<Image
									src="/images/figma/eca5aea50a4548c1cd99ac0ce20b9dcd0485a5a5.png"
									alt="Dịch vụ vận tải hàng hóa"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 560px, 100vw"
								/>
							</div>

							<div className="flex flex-col gap-6">
								<span className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#FFDCBE] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.6px] text-[#693C00]">
									<PackageIcon className="size-3.5" />
									Chuyển phát nhanh
								</span>
								<h2 className="text-[36px] font-bold leading-[40px] tracking-[-0.6px] text-[#191C1E]">
									Dịch vụ vận tải hàng hóa
								</h2>
								<p className="text-lg leading-[29.25px] text-[#424654]">
									Giải pháp vận chuyển hàng hóa siêu tốc nội tỉnh và liên tỉnh.
									Chúng tôi đảm bảo hàng hóa được đóng gói cẩn thận, theo dõi lộ
									trình thời gian thực và giao tận tay người nhận chỉ trong vòng 4-12
									giờ.
								</p>

								<ul className="flex flex-col gap-4 pt-2">
									{cargoBenefits.map((benefit) => (
										<li key={benefit} className="flex items-center gap-3">
											<CheckCircle2Icon className="size-5 shrink-0 text-[#8B5000]" />
											<span className="text-base font-medium leading-6 text-[#191C1E]">
												{benefit}
											</span>
										</li>
									))}
								</ul>

								<Link
									href="/contact"
									className="inline-flex w-fit items-center justify-center rounded-md bg-[#8B5000] px-8 py-3 text-base font-semibold text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
									Gửi hàng ngay
								</Link>
							</div>
						</div>
					</div>

				</div>
			</section>

			<section className="px-4 pb-16 md:px-8 md:pb-24">
				<div className="mx-auto w-full max-w-[1216px] rounded-[24px] bg-gradient-to-r from-[#0040A1] to-[#0056D2] px-6 py-12 text-center md:rounded-[40px] md:px-16 md:py-16">
					<h2 className="text-4xl font-extrabold leading-[1.1] tracking-[-1px] text-white md:text-5xl">
						Sẵn sàng cho hành trình mới?
					</h2>
					<p className="mx-auto mt-4 max-w-[672px] text-base leading-7 text-[#DAE2FF] md:text-lg">
						Liên hệ với chúng tôi ngay hôm nay để nhận báo giá tốt nhất cho các
						dịch vụ vận tải.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link
							href="tel:1900xxxx"
							className="inline-flex min-h-14 items-center justify-center rounded-md bg-white px-8 text-lg font-semibold text-[#0040A1]">
							Gọi Tổng Đài: 1900 xxxx
						</Link>
						<Link
							href="/contact"
							className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-white/30 px-8 text-lg font-semibold text-white">
							Yêu Cầu Tư Vấn
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}

export default memo(ServicesPage);
