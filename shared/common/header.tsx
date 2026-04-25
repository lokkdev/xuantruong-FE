'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';

interface MenuItem {
	label: string;
	href: string;
}

const menus: MenuItem[] = [
	{
		label: 'Trang chủ',
		href: '/',
	},
	{
		label: 'Giới thiệu',
		href: '/about',
	},
	{
		label: 'Dịch vụ',
		href: '/services',
	},
	{
		label: 'Tra cứu',
		href: '/lookup',
	},
	{
		label: 'Tin tức',
		href: '/news',
	},
	{
		label: 'Liên hệ',
		href: '/contact',
	},
];

export function Header() {
	const pathname = usePathname();
	return (
		<header className="bg-[#d0ddef]">
			<div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<Link href="/" title="Home" className="flex h-full items-center">
					<Image
						src="/images/home/logo-xuan-truong2-Photoroom.png"
						alt="Xuân Trường"
						width={74}
						height={48}
						className="w-[7.5rem] h-auto aspect-[73.58/48] object-contain"
						priority
					/>
				</Link>
				<nav className="hidden md:block">
					<ul className="flex items-center gap-8">
						{menus.map((menu) => (
							<li key={`${menu.label}-${menu.href}`} className="relative group">
								<Link
									href={menu.href}
									className={cn(
										'uppercase text-sm font-bold text-[#424654] group-hover:text-[#0040A1] transition-all duration-300',
										{
											'!text-[#0040A1]': pathname === menu.href,
										},
									)}>
									{menu.label}
								</Link>
								<span
									className={cn(
										'absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0040A1] group-hover:w-full transition-all duration-300',
										{
											'!w-full': pathname === menu.href,
										},
									)}></span>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center gap-2">
					<Link
						href="/"
						className="hidden uppercase text-sm font-bold text-[#0040A1] md:inline-flex">
						VN/EN
					</Link>
					<details className="relative md:hidden">
						<summary className="flex cursor-pointer list-none items-center justify-center rounded-md p-2 text-[#0040A1] hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040A1]/40">
							<span className="sr-only">Open menu</span>
							<span aria-hidden className="flex flex-col gap-1.5">
								<span className="block h-0.5 w-6 bg-current" />
								<span className="block h-0.5 w-6 bg-current" />
								<span className="block h-0.5 w-6 bg-current" />
							</span>
						</summary>
						<div className="absolute right-0 top-12 z-50 w-[min(85vw,340px)] rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5">
							<div className="flex items-center justify-between">
								<span className="text-sm font-semibold text-[#424654]">
									Menu
								</span>
								<Link
									href="/"
									className="uppercase text-sm font-bold text-[#0040A1]">
									VN/EN
								</Link>
							</div>
							<ul className="mt-3 flex flex-col gap-2">
								{menus.map((menu) => (
									<li key={`${menu.label}-${menu.href}`}>
										<Link
											href={menu.href}
											className={cn(
												'block rounded-md px-3 py-2 text-sm font-bold uppercase text-[#424654] hover:bg-[#d0ddef]/60 hover:text-[#0040A1] transition-colors',
												{
													'bg-[#d0ddef]/70 !text-[#0040A1]':
														pathname === menu.href,
												},
											)}>
											{menu.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</details>
				</div>
			</div>
		</header>
	);
}
