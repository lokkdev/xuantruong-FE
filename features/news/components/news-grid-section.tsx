import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CalendarDaysIcon } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import type {
	NewsCategoryItem,
	NewsListItem,
} from '@/features/news/pages/news-page';

interface NewsItem {
	id: string;
	slug: string;
	title: string;
	description: string;
	category: string;
	date: string;
	image: string;
}

const fallbackImages = [
	'/images/figma-temp/4d904cbd6fadf43dea7ff9282bde2bf144418d58.png',
	'/images/figma-temp/b5b8e47ad8af30e6f25b8efcaefafbcf2e06886e.png',
	'/images/figma-temp/7b4bd083026b1ce0b397b6bdbd805314f8247636.png',
	'/images/figma-temp/fa6aaa66adbd76c8f607a2419a22855b9abb6a57.png',
	'/images/figma-temp/d2c33aa6e81dcf2527e6f1030936b83996c2b991.png',
	'/images/figma-temp/ada5f553edb43dcf8e799c86d47c06354fe30264.png',
];

interface NewsGridSectionProps {
	items: NewsListItem[];
	categories: NewsCategoryItem[];
	page: number;
	perPage: number;
	total: number;
}

function normalizeImage(url: string, index: number) {
	if (!url || url.endsWith('/')) {
		return fallbackImages[index % fallbackImages.length];
	}
	return url;
}

function formatDate(value: string) {
	const parsedDate = new Date(value);
	if (Number.isNaN(parsedDate.getTime())) {
		return value;
	}
	return parsedDate.toLocaleDateString('vi-VN', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}

function mapNewsItem(item: NewsListItem, index: number): NewsItem {
	return {
		id: String(item.id),
		slug: item.slug,
		title: item.title,
		description: item.summary,
		category: 'Tin tức',
		date: formatDate(item.published_at),
		image: normalizeImage(item.thumbnail, index),
	};
}

function buildPageNumbers(currentPage: number, totalPages: number): string[] {
	if (totalPages <= 3) {
		return Array.from({ length: totalPages }, (_, i) => String(i + 1));
	}

	if (currentPage <= 2) {
		return ['1', '2', '3'];
	}

	if (currentPage >= totalPages - 1) {
		return [String(totalPages - 2), String(totalPages - 1), String(totalPages)];
	}

	return [String(currentPage - 1), String(currentPage), String(currentPage + 1)];
}

export function NewsGridSection({
	items,
	categories,
	page,
	perPage,
	total,
}: NewsGridSectionProps) {
	const mappedItems = items.map(mapNewsItem);
	const featuredNews = mappedItems[0];
	const latestNews = mappedItems.slice(1);
	const categoryLabels = ['Tất cả', ...categories.map((item) => item.name)];
	const totalPages = Math.max(1, Math.ceil(total / Math.max(1, perPage)));
	const pageNumbers = buildPageNumbers(page, totalPages);
	const showTrailing = totalPages > 3 && pageNumbers[pageNumbers.length - 1] !== String(totalPages);

	return (
		<section className="px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
			<div className="mx-auto flex w-full max-w-[1216px] flex-col gap-10">
				<div className="flex flex-wrap items-center gap-3 border-b border-[#C3C6D633] pb-2">
					{categoryLabels.map((category, index) => (
						<Button
							key={category}
							variant="ghost"
							size="sm"
							className={
								index === 0
									? 'h-9 rounded-xl bg-[#0040A1] px-6 text-sm font-semibold text-white hover:bg-[#003486] hover:text-white'
									: 'h-9 rounded-xl bg-white px-6 text-sm font-medium text-[#424654] hover:bg-[#F2F4F7] hover:text-[#191C1E]'
							}>
							{category}
						</Button>
					))}
				</div>

				{featuredNews ? (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<article
							key={featuredNews.id}
							className="overflow-hidden rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
							<div className="relative h-56">
								<Image
									src={featuredNews.image}
									alt={featuredNews.title}
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 384px, 100vw"
								/>
								<span className="absolute left-4 top-4 rounded-sm bg-[#8B5000] px-3 py-1 text-xs font-semibold uppercase tracking-[1.2px] text-white">
									{featuredNews.category}
								</span>
							</div>
							<div className="flex flex-col gap-3 p-6">
								<div className="inline-flex items-center gap-1 text-xs text-[#424654]">
									<CalendarDaysIcon className="size-3.5" />
									{featuredNews.date}
								</div>
								<h3 className="text-[32px] font-bold leading-10 tracking-[-0.64px] text-[#191C1E]">
									{featuredNews.title}
								</h3>
								<p className="line-clamp-3 text-sm leading-5 text-[#424654]">
									{featuredNews.description}
								</p>
								<Link
									href="/news"
									className="inline-flex w-fit items-center gap-1 pt-2 text-sm font-semibold text-[#0040A1]">
									Xem bài viết
									<ArrowRightIcon className="size-3.5" />
								</Link>
							</div>
						</article>

						{latestNews.map((item) => (
							<article
								key={item.id}
								className="overflow-hidden rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
								<div className="relative h-56">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 384px, 100vw"
									/>
									<span className="absolute left-4 top-4 rounded-sm bg-[#0040A1] px-3 py-1 text-xs font-semibold uppercase tracking-[1.2px] text-white">
										{item.category}
									</span>
								</div>
								<div className="flex flex-col gap-3 p-6">
									<div className="inline-flex items-center gap-1 text-xs text-[#424654]">
										<CalendarDaysIcon className="size-3.5" />
										{item.date}
									</div>
									<h3 className="text-[32px] font-bold leading-10 tracking-[-0.64px] text-[#191C1E]">
										{item.title}
									</h3>
									<p className="line-clamp-3 text-sm leading-5 text-[#424654]">
										{item.description}
									</p>
									<Link
										href="/news"
										className="inline-flex w-fit items-center gap-1 pt-2 text-sm font-semibold text-[#0040A1]">
										Xem bài viết
										<ArrowRightIcon className="size-3.5" />
									</Link>
								</div>
							</article>
						))}
					</div>
				) : (
					<div className="rounded-lg bg-[#F2F4F7] p-8 text-center text-[#424654]">
						Chưa có bài viết nào.
					</div>
				)}

				<div className="flex items-center justify-center gap-2 pt-4">
					<Link href={`/news?page=${Math.max(1, page - 1)}`}>
						<Button
							variant="ghost"
							size="icon"
							disabled={page <= 1}
							className="size-10 rounded bg-[#F2F4F7] text-[#6D7280] hover:bg-[#E5E7EB]">
							&lt;
						</Button>
					</Link>
					{pageNumbers.map((pageNumber) => {
						const isActive = Number(pageNumber) === Number(page);
						return (
							<Link
								key={pageNumber}
								href={`/news?page=${pageNumber}`}>
								<Button
									variant="ghost"
									size="icon"
									className={
										isActive
											? 'size-10 rounded bg-[#0040A1] text-base font-semibold text-white hover:bg-[#003486]'
											: 'size-10 rounded bg-white text-base font-medium text-[#191C1E] hover:bg-[#F2F4F7]'
									}>
									{pageNumber}
								</Button>
							</Link>
						);
					})}
					{showTrailing ? <span className="px-2 text-base text-[#424654]">...</span> : null}
					{showTrailing ? (
						<Link href={`/news?page=${totalPages}`}>
							<Button
								variant="ghost"
								size="icon"
								className="size-10 rounded bg-white text-base font-medium text-[#191C1E] hover:bg-[#F2F4F7]">
								{totalPages}
							</Button>
						</Link>
					) : null}
					<Link href={`/news?page=${Math.min(totalPages, page + 1)}`}>
						<Button
							variant="ghost"
							size="icon"
							disabled={page >= totalPages}
							className="size-10 rounded bg-[#F2F4F7] text-[#6D7280] hover:bg-[#E5E7EB]">
							&gt;
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
