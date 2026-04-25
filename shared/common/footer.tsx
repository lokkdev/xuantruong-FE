import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp, MailIcon, PhoneIcon } from 'lucide-react';

const officeLinks = [
	{
		label: 'Tại Hà Nội',
		detail:
			'Trụ sở: Số 33 đường Lê Trọng Tấn, Phường La Khê, Quận Hà Đông',
	},
	{
		label: 'Tại Quảng Ninh',
		detail: 'VP Vân Đồn: Đường Đông Sơn, Huyện Vân Đồn',
	},
];

const policyLinks = [
	'Kiểm tra HĐ',
	'Tra cứu đơn hàng',
	'Quy định đặt dịch vụ',
	'Chính sách hủy / đổi trả',
	'Chính sách vận chuyển hàng hóa',
	'Hình thức thanh toán',
];

const companyLinks = [
	'Giới thiệu',
	'Văn phòng',
	'Dịch vụ',
	'Tin tức',
	'Lộ trình',
	'Điều khoản & Quy định chung',
];

export function Footer() {
	return (
		<footer className="border-t border-[#C3C6D626] bg-[#F2F4F7] pb-16 pt-[65px] 2xl:pb-20">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:px-8 2xl:max-w-[1600px] 2xl:gap-14 2xl:px-12">
				<div className="grid gap-12 md:grid-cols-2 xl:grid-cols-6">
					<div className="flex flex-col gap-4">
						<Image
							src="/images/home/logo-xuan-truong2-Photoroom.png"
							alt="Xuân Trường"
							width={512}
							height={512}
							className="w-[9.9rem] h-[6.45rem] max-w-[512px] max-h-[512px] aspect-[98.09/64] object-contain"
						/>
						<div className="flex flex-col gap-2 text-[#191C1E]">
							<p className="max-w-[147px] text-[12px] font-semibold uppercase leading-4 2xl:max-w-[190px] 2xl:text-[14px] 2xl:leading-5">
								CÔNG TY TNHH DỊCH VỤ
								<br />
								VẬN TẢI XUÂN TRƯỜNG
							</p>
							<p className="max-w-[190px] text-[11px] leading-[17.88px] text-[#424654] 2xl:max-w-[240px] 2xl:text-[13px] 2xl:leading-5">
								GPKD số 0107872074 do Sở KH và ĐT Hà Nội cấp ngày 02/06/2017
							</p>
						</div>
						<Image
							src="/images/figma/2d3344b09ef77c3a7588437871276b0b204b1142.png"
							alt="Đã thông báo Bộ Công Thương"
							width={106}
							height={40}
							className="h-[2.5rem] w-[6.5975rem] aspect-[105.56/40] object-contain"
						/>
					</div>

					<div className="flex flex-col gap-6">
						<h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.7px] text-[#191C1E] 2xl:text-[16px]">
							Hệ thống văn phòng
						</h3>
						<ul className="flex flex-col gap-4">
							{officeLinks.map((item) => (
								<li key={item.label} className="flex max-w-[190px] flex-col gap-1 2xl:max-w-[240px]">
									<Link href="/" className="text-[12px] font-semibold leading-4 text-[#0040A1] hover:underline 2xl:text-[14px] 2xl:leading-5">
										{item.label}
									</Link>
									<p className="text-[12px] leading-4 text-[#424654] 2xl:text-[14px] 2xl:leading-5">{item.detail}</p>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.7px] text-[#191C1E] 2xl:text-[16px]">
							Liên hệ
						</h3>
						<ul className="flex flex-col gap-3 text-[12px] font-medium leading-4 text-[#424654] 2xl:text-[14px] 2xl:leading-5">
							<li className="flex items-center gap-2">
								<PhoneIcon className="size-[10.5px] shrink-0 text-[#0040A1]" />
								<span>Hotline đặt xe: 0915 268 555</span>
							</li>
							<li className="flex items-center gap-2">
								<MailIcon className="size-[10.5px] shrink-0 text-[#0040A1]" />
								<span>CSKH: 0962 635 888</span>
							</li>
							<li className="flex items-center gap-2">
								<MailIcon className="size-[10.5px] shrink-0 text-[#0040A1]" />
								<span>CSKH: 0965 102 899</span>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.7px] text-[#191C1E] 2xl:text-[16px]">
							Chính sách dịch vụ
						</h3>
						<ul className="flex flex-col gap-3 text-[12px] leading-4 text-[#424654] 2xl:text-[14px] 2xl:leading-5">
						{policyLinks.map((item) => (
							<li key={item}>
								<Link href="/" className="hover:text-[#0040A1]">
									{item}
								</Link>
							</li>
						))}
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.7px] text-[#191C1E] 2xl:text-[16px]">
							Công ty
						</h3>
						<ul className="flex flex-col gap-3 text-[12px] leading-4 text-[#424654] 2xl:text-[14px] 2xl:leading-5">
						{companyLinks.map((item) => (
							<li key={item}>
								<Link href="/" className="hover:text-[#0040A1]">
									{item}
								</Link>
							</li>
						))}
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.7px] text-[#191C1E] 2xl:text-[16px]">
							Theo dõi chúng tôi
						</h3>
						<p className="max-w-[160px] text-[12px] leading-[19.5px] text-[#424654] 2xl:max-w-[220px] 2xl:text-[14px] 2xl:leading-6">
							Theo dõi trang Facebook của nhà xe XUÂN TRƯỜNG LIMOUSINE để nhận
							khuyến mãi và tin tức mới nhất.
						</p>
						<Link
							href="/"
							className="inline-flex w-fit items-center gap-2 text-[12px] font-semibold leading-4 text-[#0040A1] 2xl:text-[14px] 2xl:leading-5">
							<span className="inline-flex size-6 items-center justify-center bg-[#0040A1] text-white">
								f
							</span>
							Facebook
						</Link>
					</div>
				</div>

				<div className="flex items-center justify-between border-t border-[#C3C6D61A] pt-[33px] 2xl:pt-10">
					<p className="text-sm leading-5 text-[#424654]">
						© 2024 Xuân Trường Limousine. All rights reserved.
					</p>
					<button
						type="button"
						aria-label="Lên đầu trang"
						className="inline-flex size-6 items-center justify-center bg-[#A5A7AD] text-white/80">
						<ChevronUp className="size-3" />
					</button>
				</div>
			</div>
		</footer>
	);
}
