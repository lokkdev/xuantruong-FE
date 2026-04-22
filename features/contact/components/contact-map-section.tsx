import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

const offices = ['Hà Nội', 'Nam Định', 'Ninh Bình'];

export function ContactMapSection() {
	return (
		<section className="px-4 pb-0 md:px-8 md:pb-0">
			<div className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-2xl bg-white pt-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
				<div className="flex flex-col gap-4 border-b border-[#ECEEF1] px-8 pb-[33px] pt-8 md:flex-row md:items-center md:justify-between">
					<div className="max-w-[520px]">
						<h2 className="text-2xl font-bold leading-8 text-[#191C1E]">Vị trí văn phòng</h2>
						<p className="mt-0.5 text-sm leading-5 text-[#424654]">
							Dễ dàng tìm thấy chúng tôi tại các điểm trung chuyển chính
						</p>
					</div>
					<div className="flex items-start gap-2">
						{offices.map((city, index) => (
							<Button
								key={city}
								variant="ghost"
								size="sm"
								className={
									index === 0
										? 'h-9 rounded-xl bg-[#0040A1] px-4 text-sm font-medium text-white hover:bg-[#003486] hover:text-white'
										: 'h-9 rounded-xl bg-[#E6E8EB] px-4 text-sm font-medium text-[#424654] hover:bg-[#DCE0E6] hover:text-[#424654]'
								}>
								{city}
							</Button>
						))}
					</div>
				</div>

				<div className="relative h-[320px] md:h-[450px]">
					<Image
						src="/images/figma/6443d9ff6d9887f0b178c9c927ed04557317114d.png"
						alt="Bản đồ văn phòng"
						fill
						className="object-cover opacity-60"
						sizes="(min-width: 1280px) 1232px, 100vw"
					/>
					<div className="absolute inset-0 bg-white/25" />
					<div className="absolute inset-0 flex items-center justify-center px-4">
						<div className="flex max-w-[384px] gap-4 rounded-lg bg-white p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
							<div className="flex size-9 items-center justify-center rounded-md bg-[#EAF0FF]">
								<MapPinIcon className="size-5 text-[#0040A1]" />
							</div>
							<div>
								<p className="text-base font-semibold leading-6 text-[#0040A1]">
									Xuân Trường Office - Hà Nội
								</p>
								<p className="text-xs leading-4 text-[#424654]">
									123 Giải Phóng, Hai Bà Trưng
								</p>
								<button
									type="button"
									className="mt-2 text-xs font-semibold uppercase tracking-[0.6px] text-[#8B5000]">
									Chỉ đường
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
