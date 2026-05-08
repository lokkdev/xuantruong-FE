'use client';

import { useState } from 'react';
import { MapPinIcon } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

type Office = {
	city: string;
	name: string;
	address: string;
	directionsUrl: string;
	mapSrc: string;
};

const offices: Office[] = [
	{
		city: 'Hà Nội',
		name: 'Xuân Trường Office - Hà Nội',
		address: '33 Lê Trọng Tấn, La Khê, Hà Đông, Hà Nội',
		directionsUrl:
			'https://www.google.com/maps/dir/?api=1&destination=33+L%C3%AA+Tr%E1%BB%8Dng+T%E1%BA%A5n%2C+La+Kh%C3%AA%2C+H%C3%A0+%C4%90%C3%B4ng%2C+H%C3%A0+N%E1%BB%99i',
		mapSrc:
			'https://www.google.com/maps?output=embed&z=10&hl=vi&ll=20.98379330799173,105.80370942920485',
	},
	{
		city: 'Nam Định',
		name: 'Xuân Trường Office - Nam Định',
		address: 'Xuân Trường, Nam Định',
		directionsUrl:
			'https://www.google.com/maps/dir/?api=1&destination=Xu%C3%A2n+Tr%C6%B0%E1%BB%9Dng%2C+Nam+%C4%90%E1%BB%8Bnh',
		mapSrc:
			'https://www.google.com/maps?output=embed&z=12&hl=vi&q=Xu%C3%A2n+Tr%C6%B0%E1%BB%9Dng%2C+Nam+%C4%90%E1%BB%8Bnh',
	},
	{
		city: 'Ninh Bình',
		name: 'Xuân Trường Office - Ninh Bình',
		address: 'Ninh Bình',
		directionsUrl:
			'https://www.google.com/maps/dir/?api=1&destination=Ninh+B%C3%ACnh',
		mapSrc:
			'https://www.google.com/maps?output=embed&z=12&hl=vi&q=Ninh+B%C3%ACnh',
	},
];

export function ContactMapSection() {
	const [selectedOffice, setSelectedOffice] = useState(offices[0]);

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
						{offices.map((office) => (
							<Button
								key={office.city}
								variant="ghost"
								size="sm"
								onClick={() => setSelectedOffice(office)}
								className={
									selectedOffice.city === office.city
										? 'h-9 rounded-xl bg-[#0040A1] px-4 text-sm font-medium text-white hover:bg-[#003486] hover:text-white'
										: 'h-9 rounded-xl bg-[#E6E8EB] px-4 text-sm font-medium text-[#424654] hover:bg-[#DCE0E6] hover:text-[#424654]'
								}>
								{office.city}
							</Button>
						))}
					</div>
				</div>

				<div className="relative h-[320px] md:h-[450px]">
					<iframe
						title={`Bản đồ ${selectedOffice.city}`}
						src={selectedOffice.mapSrc}
						className="absolute inset-0 h-full w-full border-0"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					/>
					<div className="absolute inset-0 bg-white/15" />
					<div className="absolute inset-0 flex items-center justify-center px-4">
						<div className="flex max-w-[384px] gap-4 rounded-lg bg-white p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
							<div className="flex size-9 items-center justify-center rounded-md bg-[#EAF0FF]">
								<MapPinIcon className="size-5 text-[#0040A1]" />
							</div>
							<div>
								<p className="text-base font-semibold leading-6 text-[#0040A1]">
									{selectedOffice.name}
								</p>
								<p className="text-xs leading-4 text-[#424654]">
									{selectedOffice.address}
								</p>
								<a
									href={selectedOffice.directionsUrl}
									target="_blank"
									rel="noreferrer"
									className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.6px] text-[#8B5000]">
									Chỉ đường
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
