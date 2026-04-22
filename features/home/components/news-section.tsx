interface NewsItem {
	id: string;
	title: string;
	image: string;
	imageAlt: string;
}

interface NewsSectionProps {
	items?: NewsItem[];
}

const defaultNewsItems: NewsItem[] = [
	{
		id: '1',
		title: 'Xuân Trường Limousine khai trương tuyến mới Hà Nội - Vân Đồn',
		image: '/images/home/hero-banner.webp',
		imageAlt: 'Tin mới số 1',
	},
	{
		id: '2',
		title: 'Ưu đãi giảm giá 20% khi đặt vé qua App trong tháng 12',
		image: '/images/home/hero-banner.webp',
		imageAlt: 'Tin mới số 2',
	},
	{
		id: '3',
		title: 'Hướng dẫn quy trình vận chuyển hàng hóa siêu tốc',
		image: '/images/home/hero-banner.webp',
		imageAlt: 'Tin mới số 3',
	},
	{
		id: '4',
		title: 'Đào tạo nghiệp vụ lái xe chuẩn 5 sao định kỳ quý IV',
		image: '/images/home/hero-banner.webp',
		imageAlt: 'Tin mới số 4',
	},
];

export function NewsSection({ items = defaultNewsItems }: NewsSectionProps) {
	return (
		<section className="bg-[#F7F9FC] px-8 py-24">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16">
				<header className="flex justify-center">
					<h2 className="text-center text-4xl font-extrabold uppercase tracking-[-1.8px] text-[#191C1E]">
						Tin tức mới nhất
					</h2>
				</header>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
					{items.map((item) => (
						<article key={item.id} className="flex flex-col gap-4">
							<div className="overflow-hidden rounded-lg bg-[#E6E8EB]">
								<img
									src={item.image}
									alt={item.imageAlt}
									className="aspect-[16/10] w-full object-cover"
									loading="lazy"
								/>
							</div>
							<h3 className="text-base font-bold leading-6 text-[#191C1E]">{item.title}</h3>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
