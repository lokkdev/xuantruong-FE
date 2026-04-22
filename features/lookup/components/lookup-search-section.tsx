'use client';

import { CircleHelpIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { cn } from '@/shared/lib/utils';

type LookupTab = 'ticket' | 'order';

export function LookupSearchSection() {
	const [activeTab, setActiveTab] = useState<LookupTab>('ticket');

	return (
		<section className="relative z-20 px-4 md:px-8">
			<div className="mx-auto -mt-[156px] w-full max-w-[848px] overflow-hidden rounded-lg bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] md:min-h-[440px]">
				<div className="flex items-center gap-2 bg-[#F2F4F7] p-2">
					<LookupTabButton
						label="Tra cứu vé"
						isActive={activeTab === 'ticket'}
						onClick={() => setActiveTab('ticket')}
					/>
					<LookupTabButton
						label="Tra cứu đơn hàng"
						isActive={activeTab === 'order'}
						onClick={() => setActiveTab('order')}
					/>
				</div>

				<div className="p-6 md:px-12 md:pb-[70px] md:pt-[48px]">
					<div className="mx-auto w-full max-w-[520px]">
						{activeTab === 'ticket' ? <TicketLookupForm /> : <OrderLookupForm />}
						<LookupGuide activeTab={activeTab} />
					</div>
				</div>
			</div>
		</section>
	);
}

interface LookupTabButtonProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

function LookupTabButton({ label, isActive, onClick }: LookupTabButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				'h-12 flex-1 cursor-pointer rounded text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040A1]/30',
				isActive
					? 'bg-white font-bold text-[#0040A1]'
					: 'font-semibold text-[#424654] hover:bg-white/70 hover:text-[#0040A1]',
			)}>
			{label}
		</button>
	);
}

function TicketLookupForm() {
	return (
		<form className="mb-6 flex w-full max-w-[520px] flex-col gap-3">
			<Input
				name="ticketCode"
				placeholder="Nhập mã vé"
				className="h-12 border-[#D9DEE8] bg-white px-4 text-sm text-[#191C1E] placeholder:text-[#8A90A2]"
			/>
			<Input
				name="ticketPhone"
				placeholder="Nhập số điện thoại đặt vé"
				className="h-12 border-[#D9DEE8] bg-white px-4 text-sm text-[#191C1E] placeholder:text-[#8A90A2]"
			/>
			<Button className="h-12 rounded-md bg-[#0040A1] px-6 text-sm font-semibold text-white hover:bg-[#00327F]">
				Tra cứu
			</Button>
		</form>
	);
}

function OrderLookupForm() {
	return (
		<form className="mb-6 flex w-full max-w-[520px] flex-col gap-3">
			<Input
				name="orderCode"
				placeholder="Nhập mã đơn hàng"
				className="h-12 border-[#D9DEE8] bg-white px-4 text-sm text-[#191C1E] placeholder:text-[#8A90A2]"
			/>
			<Input
				name="orderPhone"
				placeholder="Nhập số điện thoại người gửi"
				className="h-12 border-[#D9DEE8] bg-white px-4 text-sm text-[#191C1E] placeholder:text-[#8A90A2]"
			/>
			<Button className="h-12 rounded-md bg-[#0040A1] px-6 text-sm font-semibold text-white hover:bg-[#00327F]">
				Tra cứu đơn hàng
			</Button>
		</form>
	);
}

interface LookupGuideProps {
	activeTab: LookupTab;
}

function LookupGuide({ activeTab }: LookupGuideProps) {
	return (
		<div className="flex flex-col gap-3">
			<h2 className="font-['Manrope'] text-[20px] font-bold leading-7 text-[#0040A1]">
				{activeTab === 'ticket' ? 'Hướng dẫn tra cứu' : 'Hướng dẫn tra cứu đơn hàng'}
			</h2>
			{activeTab === 'ticket' ? (
				<p className="font-['Inter'] text-[14px] leading-[22.75px] text-[#424654]">
					Quý khách vui lòng nhập chính xác <strong>Mã vé</strong> (được gửi qua SMS/Email) và{' '}
					<strong>Số điện thoại</strong> đã dùng khi đặt vé để xem chi tiết hành trình.
				</p>
			) : (
				<p className="font-['Inter'] text-[14px] leading-[22.75px] text-[#424654]">
					Quý khách vui lòng nhập chính xác <strong>Mã đơn hàng</strong> và{' '}
					<strong>Số điện thoại người gửi</strong> để theo dõi trạng thái giao nhận, thời gian dự
					kiến và thông tin người nhận.
				</p>
			)}
			<div className="flex items-start gap-3 rounded-lg bg-[rgba(178,197,255,0.2)] p-4">
				<CircleHelpIcon className="mt-0.5 size-5 shrink-0 text-[#0040A1]" />
				{activeTab === 'ticket' ? (
					<p className="font-['Inter'] text-[12px] leading-[15px] text-[#0040A1]">
						Nếu không tìm thấy mã vé, vui lòng liên hệ tổng đài 1900 xxxx để được hỗ trợ trực
						tiếp từ nhân viên chăm sóc khách hàng.
					</p>
				) : (
					<p className="font-['Inter'] text-[12px] leading-[15px] text-[#0040A1]">
						Nếu không tra cứu được đơn hàng, vui lòng chuẩn bị thông tin mã vận đơn và liên hệ
						tổng đài 1900 xxxx để được kiểm tra nhanh nhất.
					</p>
				)}
			</div>
		</div>
	);
}
