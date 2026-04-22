import { Button } from '@/shared/components/ui/button';

export function NewsSubscribeSection() {
	return (
		<section className="px-4 pb-14 md:px-8 md:pb-20">
			<div className="mx-auto flex w-full max-w-[960px] flex-col items-center rounded-2xl bg-[#F2F4F7] px-6 pb-12 pt-10 text-center md:px-12">
				<h2 className="text-[30px] font-bold leading-9 text-[#191C1E]">
					Đừng bỏ lỡ bất kỳ tin tức nào!
				</h2>
				<p className="mt-4 max-w-[512px] text-base leading-[26px] text-[#424654]">
					Đăng ký nhận bản tin để nhận những thông báo khuyến mãi và cẩm nang du lịch
					mới nhất trực tiếp qua email của bạn.
				</p>
				<div className="mt-6 flex w-full max-w-[448px] flex-col gap-3 sm:flex-row">
					<input
						type="email"
						placeholder="Email của bạn"
						className="h-12 flex-1 rounded border-0 bg-white px-6 text-base text-[#191C1E] placeholder:text-[#6B7280] focus:outline-none"
					/>
					<Button className="h-12 rounded bg-[#0040A1] px-8 text-base font-semibold text-white hover:bg-[#003486]">
						Đăng ký
					</Button>
				</div>
			</div>
		</section>
	);
}
