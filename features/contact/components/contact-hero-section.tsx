import Image from 'next/image';

export function ContactHeroSection() {
	return (
		<section className="relative isolate h-[300px] overflow-hidden">
			<div className="absolute inset-0">
				<Image
					src="/images/figma/4c569a5aeca785b4c50ff9a655c40f72c7f67a8a.png"
					alt="Liên hệ Xuân Trường Limousine"
					fill
					priority
					className="object-cover"
					sizes="100vw"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-[#0040A1] to-[#0056D2] opacity-90" />
			<div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col items-center justify-center px-4 text-center md:px-8">
				<h1 className="text-[36px] font-extrabold leading-10 tracking-[-0.9px] text-white md:text-[48px] md:leading-[48px] md:tracking-[-1.2px]">
					Kết nối với chúng tôi
				</h1>
				<p className="mt-4 max-w-[519px] text-base font-medium leading-6 text-[#CCD8FF]">
					Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ mọi hành trình của bạn.
				</p>
			</div>
		</section>
	);
}
