import { SearchIcon, TicketIcon } from 'lucide-react';

const ticketLookupSteps = [
	{
		title: 'Bước 1: Nhập mã vé',
		description: 'Điền chính xác mã vé được gửi qua SMS hoặc email sau khi đặt chỗ.',
	},
	{
		title: 'Bước 2: Xác thực thông tin',
		description: 'Kiểm tra số điện thoại hoặc email tương ứng để đảm bảo đúng hành khách.',
	},
	{
		title: 'Bước 3: Xem kết quả',
		description: 'Theo dõi trạng thái vé, giờ khởi hành và điểm đón trong một màn hình.',
	},
];

export function TicketLookupSection() {
	return (
		<div className="overflow-hidden rounded-[24px] border border-[#DFE4EA] bg-white shadow-[0_12px_24px_-12px_rgba(16,24,40,0.24)] md:rounded-[28px]">
			<div className="border-b border-[#E7EAF0] bg-[#F8FAFC] px-6 py-5 md:px-8">
				<p className="inline-flex items-center gap-2 rounded-full bg-[#D8E2FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.5px] text-[#0B3B8F]">
					<TicketIcon className="size-4" />
					Tra cứu vé nhanh
				</p>
				<h2 className="mt-3 text-2xl font-bold leading-8 tracking-[-0.4px] text-[#191C1E] md:text-[30px] md:leading-[38px]">
					Nhập mã vé để xem thông tin hành trình
				</h2>
			</div>
			<div className="px-6 py-6 md:px-8 md:py-8">
				<form className="flex flex-col gap-3 md:flex-row md:items-center">
					<label htmlFor="ticket-code" className="sr-only">
						Mã vé
					</label>
					<input
						id="ticket-code"
						name="ticket-code"
						type="text"
						placeholder="VD: XT20260423-123456"
						className="h-12 flex-1 rounded-md border border-[#C4CDD7] px-4 text-base text-[#191C1E] outline-none transition focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D226]"
					/>
					<button
						type="submit"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#0040A1] to-[#0056D2] px-6 text-base font-semibold text-white">
						<SearchIcon className="size-4" />
						Tra cứu ngay
					</button>
				</form>

				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{ticketLookupSteps.map((step) => (
						<article key={step.title} className="rounded-xl border border-[#E7EAF0] bg-white p-4">
							<h3 className="text-base font-semibold leading-6 text-[#191C1E]">
								{step.title}
							</h3>
							<p className="mt-1.5 text-sm leading-6 text-[#59606F]">{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
