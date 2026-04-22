import { MailIcon, MapPinIcon, PackageIcon, PhoneCallIcon, SendIcon } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/select';

const supportCards = [
	{
		title: 'Tổng đài hỗ trợ đặt vé',
		description: 'Phục vụ 24/7 cho mọi nhu cầu di chuyển của quý khách.',
		value: '1900 1234',
		icon: PhoneCallIcon,
		accent: 'border-[#8B5000]',
		valueColor: 'text-[#8B5000]',
		bg: 'bg-[#FFF3E8]',
	},
	{
		title: 'Dịch vụ gửi hàng hóa',
		description: 'Giao nhận siêu tốc, an toàn, bảo hiểm hàng hóa 100%.',
		value: '0988 777 666',
		icon: PackageIcon,
		accent: 'border-[#0040A1]',
		valueColor: 'text-[#0040A1]',
		bg: 'bg-[#EAF0FF]',
	},
];

export function ContactSupportSection() {
	return (
		<section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 lg:px-8">
			<div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-12 lg:gap-12">
				<div className="flex flex-col gap-8 lg:col-span-5">
					<div className="flex flex-col gap-2">
						<p className="text-xs font-semibold uppercase tracking-[1.2px] text-[#8B5000]">
							Thông tin liên lạc
						</p>
						<h2 className="text-[30px] font-bold leading-9 text-[#0040A1]">
							Các kênh hỗ trợ trực tiếp
						</h2>
					</div>

					{supportCards.map((card) => {
						const Icon = card.icon;
						return (
							<article
								key={card.title}
								className={`rounded-[8px] border-l-4 bg-white px-8 py-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${card.accent}`}>
								<div className="flex gap-4">
									<div
										className={`flex size-[42px] items-center justify-center rounded-[4px] ${card.bg}`}>
										<Icon className="size-5 text-[#0040A1]" />
									</div>
									<div className="flex flex-col gap-2">
										<h3 className="text-xl font-bold leading-7 text-[#191C1E]">
											{card.title}
										</h3>
										<p className="max-w-[330px] text-sm leading-5 text-[#424654]">
											{card.description}
										</p>
										<p className={`text-2xl font-semibold tracking-[-1.2px] ${card.valueColor}`}>
											{card.value}
										</p>
									</div>
								</div>
							</article>
						);
					})}

					<div className="rounded-[8px] bg-[#F2F4F7] p-8">
						<div className="flex items-start gap-4">
							<MapPinIcon className="mt-0.5 size-4 text-[#0040A1]" />
							<div>
								<h4 className="text-base font-semibold text-[#191C1E]">Văn phòng chính</h4>
								<p className="text-sm text-[#424654]">
									Số 123 Giải Phóng, Hai Bà Trưng, Hà Nội
								</p>
							</div>
						</div>
						<div className="mt-5 flex items-start gap-4">
							<MailIcon className="mt-0.5 size-4 text-[#0040A1]" />
							<div>
								<h4 className="text-base font-semibold text-[#191C1E]">Email hỗ trợ</h4>
								<p className="text-sm text-[#424654]">support@xuantruonglimo.vn</p>
							</div>
						</div>
					</div>
				</div>

				<div className="lg:col-span-7">
					<div className="rounded-[8px] border border-[#C3C6D61A] bg-white px-6 pb-10 pt-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] md:px-10 md:pb-14 md:pt-10">
						<h2 className="text-2xl font-bold leading-8 text-[#191C1E]">
							Phản ánh chất lượng dịch vụ
						</h2>
						<p className="mt-2 text-base leading-6 text-[#424654]">
							Ý kiến của quý khách giúp chúng tôi hoàn thiện hơn mỗi ngày.
						</p>

						<form className="mt-8 grid gap-6">
							<FieldGroup className="grid gap-6 md:grid-cols-2">
								<Field className="gap-2">
									<FieldLabel className="text-xs font-semibold uppercase tracking-[0.6px] text-[#424654]">
										Họ và tên
									</FieldLabel>
									<Input
										placeholder="Nguyễn Văn A"
										className="h-12 rounded-[6px] border-0 bg-[#E0E3E6] px-4 text-base placeholder:text-[#737785]"
									/>
								</Field>
								<Field className="gap-2">
									<FieldLabel className="text-xs font-semibold uppercase tracking-[0.6px] text-[#424654]">
										Số điện thoại
									</FieldLabel>
									<Input
										placeholder="090 123 4567"
										className="h-12 rounded-[6px] border-0 bg-[#E0E3E6] px-4 text-base placeholder:text-[#737785]"
									/>
								</Field>
							</FieldGroup>

							<Field className="gap-2">
								<FieldLabel className="text-xs font-semibold uppercase tracking-[0.6px] text-[#424654]">
									Loại dịch vụ phản ánh
								</FieldLabel>
								<Select defaultValue="booking">
									<SelectTrigger className="h-12 w-full rounded-[6px] border-0 bg-[#E0E3E6] px-4 text-base text-[#424654]">
										<SelectValue placeholder="Chọn loại dịch vụ" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="booking">Đặt vé & Chuyến đi</SelectItem>
											<SelectItem value="cargo">Dịch vụ gửi hàng hóa</SelectItem>
											<SelectItem value="support">Hỗ trợ khách hàng</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>

							<Field className="gap-2">
								<FieldLabel className="text-xs font-semibold uppercase tracking-[0.6px] text-[#424654]">
									Nội dung chi tiết
								</FieldLabel>
								<textarea
									placeholder="Vui lòng mô tả chi tiết trải nghiệm của bạn..."
									className="h-[140px] w-full resize-none rounded-[6px] border-0 bg-[#E0E3E6] px-4 py-3 text-base text-[#191C1E] outline-none placeholder:text-[#737785]"
								/>
							</Field>

							<Button
								type="submit"
								className="mt-4 h-[56px] rounded-[6px] bg-gradient-to-r from-[#0040A1] to-[#0056D2] text-base font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,64,161,0.2),0px_4px_6px_-4px_rgba(0,64,161,0.2)] hover:opacity-95">
								<SendIcon data-icon="inline-start" />
								Gửi phản hồi ngay
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
