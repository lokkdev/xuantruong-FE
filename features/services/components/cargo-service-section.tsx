import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2Icon, PackageIcon } from 'lucide-react';

const cargoBenefits = [
	'Nhận và giao hàng tại nhà (Door-to-door)',
	'Vận chuyển linh kiện điện tử, thực phẩm tươi sống',
	'Bảo hiểm 100% giá trị hàng hóa',
];

export function CargoServiceSection() {
	return (
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
						Giải pháp vận chuyển hàng hóa siêu tốc nội tỉnh và liên tỉnh. Chúng tôi
						đảm bảo hàng hóa được đóng gói cẩn thận, theo dõi lộ trình thời gian thực
						và giao tận tay người nhận chỉ trong vòng 4-12 giờ.
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
	);
}
