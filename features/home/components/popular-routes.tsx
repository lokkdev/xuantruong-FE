import { Button } from '@/shared/components/ui/button';
import { API_BASE_URL } from '@/shared/config/api';
import { ArrowRightIcon, Clock3Icon, MapPinIcon } from 'lucide-react';

interface PopularRouteItem {
	from: string;
	to: string;
	distance: string;
	duration: string;
	price: string;
	vehicleName: string;
	imageUrl: string;
	hot?: boolean;
}

interface PopularRouteApiItem {
	from: string;
	to: string;
	distance: string | number | null;
	travel_time: string | number | null;
	vehicle_name: string | null;
	min_price: string | number | null;
	min_price_text?: string | null;
	image?: string | null;
	image_url?: string | null;
	thumbnail?: string | null;
}

interface PopularRouteApiEnvelope {
	data?: PopularRouteApiItem[];
}
type PopularRouteApiResponse = PopularRouteApiItem[] | PopularRouteApiEnvelope;

const POPULAR_ROUTES_API_ROUTE = '/api/popular-routes';

const fallbackRoutes: PopularRouteItem[] = [
	{
		from: 'Hà Nội',
		to: 'Hạ Long',
		distance: '160km',
		duration: '2hr 30m',
		price: '260.000đ',
		vehicleName: 'Limousine 9 chỗ',
		imageUrl:
			'https://www.figma.com/api/mcp/asset/3960482d-7454-4bd0-9a56-0e2035b0bb7b',
		hot: true,
	},
	{
		from: 'Hà Nội',
		to: 'Hải Phòng',
		distance: '100km',
		duration: '1hr 30m',
		price: '200.000đ',
		vehicleName: 'Limousine 9 chỗ',
		imageUrl:
			'https://www.figma.com/api/mcp/asset/5d68916a-d30f-4ef1-b290-be49a8cfd7ae',
	},
	{
		from: 'Hà Nội',
		to: 'Vân Đồn',
		distance: '210km',
		duration: '3hr 00m',
		price: '300.000đ',
		vehicleName: 'Limousine 9 chỗ',
		imageUrl:
			'https://www.figma.com/api/mcp/asset/a5a6c831-e51d-4745-a955-32a64f3ad4b1',
	},
	{
		from: 'Hà Nội',
		to: 'Cái Rồng',
		distance: '220km',
		duration: '3hr 15m',
		price: '320.000đ',
		vehicleName: 'Limousine 9 chỗ',
		imageUrl:
			'https://www.figma.com/api/mcp/asset/8d3423bf-5552-4499-922d-942bede370fa',
	},
];

function formatVndPrice(value: string | number | null): string {
	if (value === null || value === undefined || value === '') {
		return 'Liên hệ';
	}

	const normalized = String(value).replace(/[^\d]/g, '');
	const amount = Number(normalized);
	if (!Number.isFinite(amount) || amount <= 0) {
		return 'Liên hệ';
	}

	return `${new Intl.NumberFormat('vi-VN').format(amount)}đ`;
}

function formatDistance(value: string | number | null): string {
	if (value === null || value === undefined || value === '') {
		return '---';
	}

	const normalized = String(value).trim();
	const numericValue = Number(normalized);
	if (Number.isFinite(numericValue)) {
		const formatted =
			Number.isInteger(numericValue) || normalized.endsWith('.00')
				? `${Math.trunc(numericValue)}`
				: numericValue.toString();
		return `${formatted}km`;
	}

	return /km$/i.test(normalized) ? normalized : `${normalized}km`;
}

function formatTravelTime(value: string | number | null): string {
	if (value === null || value === undefined || value === '') {
		return '---';
	}

	if (typeof value === 'number' && Number.isFinite(value)) {
		const hours = Math.floor(value / 60);
		const minutes = value % 60;
		return `${hours}hr ${minutes.toString().padStart(2, '0')}m`;
	}

	const numericValue = Number(String(value).trim());
	if (Number.isFinite(numericValue) && String(value).trim() !== '') {
		const hours = Math.floor(numericValue / 60);
		const minutes = numericValue % 60;
		return `${hours}hr ${minutes.toString().padStart(2, '0')}m`;
	}

	return String(value);
}

function resolveRouteImageUrl(route: PopularRouteApiItem, fallbackUrl: string): string {
	const apiImage = route.image_url || route.image || route.thumbnail;
	if (!apiImage) {
		return fallbackUrl;
	}

	if (/^https?:\/\//i.test(apiImage)) {
		return apiImage;
	}

	if (apiImage.startsWith('/')) {
		return `${API_BASE_URL}${apiImage}`;
	}

	return `${API_BASE_URL}/${apiImage}`;
}

async function getPopularRoutes(): Promise<PopularRouteItem[]> {
	try {
		const response = await fetch(
			`${API_BASE_URL}${POPULAR_ROUTES_API_ROUTE}`,
			{ cache: 'no-store' },
		);

		if (!response.ok) {
			throw new Error(`Popular routes API failed: ${response.status}`);
		}

		const payload = (await response.json()) as PopularRouteApiResponse;
		const routes = Array.isArray(payload) ? payload : payload.data;
		if (!routes || routes.length === 0) {
			return fallbackRoutes;
		}

		return routes.map((route, index) => {
			const fallback = fallbackRoutes[index % fallbackRoutes.length];

			return {
				from: route.from || fallback.from,
				to: route.to || fallback.to,
				distance: formatDistance(route.distance),
				duration: formatTravelTime(route.travel_time) || fallback.duration,
				vehicleName: route.vehicle_name || 'Limousine 9 chỗ',
				price: route.min_price_text || formatVndPrice(route.min_price),
				imageUrl: resolveRouteImageUrl(route, fallback.imageUrl),
				hot: index === 0,
			};
		});
	} catch {
		return fallbackRoutes;
	}
}

export async function PopularRoutes() {
	const popularRoutes = await getPopularRoutes();

	return (
		<section className="bg-[#F2F4F7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-16">
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="text-sm font-extrabold uppercase tracking-[1.4px] text-[#0040A1]">
						DỊCH VỤ HÀNH KHÁCH
					</p>
					<h2 className="text-[32px] font-extrabold uppercase tracking-[-1.6px] text-[#191C1E] sm:text-4xl sm:leading-10 sm:tracking-[-1.8px]">
						LỘ TRÌNH PHỔ BIẾN
					</h2>
				</div>

				<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
					{popularRoutes.map((route) => (
						<li
							key={`${route.from}-${route.to}`}
							className="flex h-full flex-col overflow-hidden rounded-[8px] border border-[rgba(195,198,214,0.1)] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
							<div className="relative h-48 w-full">
								<img
									src={route.imageUrl}
									alt={`${route.from} đến ${route.to}`}
									className="h-full w-full object-cover"
								/>
								{route.hot ? (
									<span className="absolute right-4 top-4 rounded-xl bg-[#8B5000] px-3 py-1.5 text-xs font-semibold text-white">
										Hot
									</span>
								) : null}
							</div>
							<div className="flex flex-1 flex-col p-6">
								<div className="flex flex-col gap-1">
									<h3 className="text-[18px] font-bold leading-7 text-[#191C1E]">
										{route.from} &#x2194; {route.to}
									</h3>
									<div className="flex flex-wrap items-center gap-x-2 gap-y-1 pb-5 text-sm text-[#424654]">
										<div className="flex items-center gap-1">
											<MapPinIcon className="size-[15px]" />
											<span>{route.distance} &#x2022;</span>
										</div>
										<div className="flex items-center gap-1">
											<Clock3Icon className="size-[15px]" />
											<span>{route.duration}</span>
										</div>
									</div>
								</div>

								<div className="mt-auto flex items-end justify-between gap-3 border-t border-[rgba(195,198,214,0.2)] pt-4">
									<div className="min-w-0 flex-1">
										<p className="text-[10px] font-semibold uppercase tracking-[-0.5px] text-[#424654]">
											{route.vehicleName}
										</p>
										<p className="text-[20px] font-extrabold leading-7 text-[#0040A1]">
											Từ {route.price}
										</p>
									</div>
									<Button size="icon" className="size-8 shrink-0 rounded-md bg-[#0040A1] text-white">
										<ArrowRightIcon />
									</Button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
