'use client';
import { Button, buttonVariants } from '@/shared/components/ui/button';
import { Calendar } from '@/shared/components/ui/calendar';
import { Field, FieldLabel } from '@/shared/components/ui/field';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/shared/components/ui/popover';
import { cn } from '@/shared/lib/utils';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/select';
import {
	CalendarDaysIcon,
	ChevronDownIcon,
	MapPinIcon,
	NavigationIcon,
	SearchIcon,
} from 'lucide-react';
import { useState } from 'react';

function formatTripDate(date: Date): string {
	return date.toLocaleDateString('vi-VN', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}

export function TripSearchForm() {
	const [date, setDate] = useState<Date | undefined>(undefined);
	return (
		<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-[1fr_1fr_1fr_auto] xl:items-end">
			<Field className="w-full">
				<FieldLabel className="flex items-center gap-2 text-xs font-semibold tracking-[0.6px] text-[#424654]">
					<MapPinIcon className="size-3.5" />
					ĐIỂM ĐI
				</FieldLabel>
				<Select>
					<SelectTrigger size="lg" className="w-full bg-[#E0E3E6] px-4 py-3.5">
						<SelectValue placeholder="Hà Nội" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fruits</SelectLabel>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
							<SelectItem value="grapes">Grapes</SelectItem>
							<SelectItem value="pineapple">Pineapple</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</Field>
			<Field className="w-full">
				<FieldLabel className="flex items-center gap-2 text-xs font-semibold tracking-[0.6px] text-[#424654]">
					<NavigationIcon className="size-3.5" />
					ĐIỂM ĐẾN
				</FieldLabel>
				<Select>
					<SelectTrigger size="lg" className="w-full bg-[#E0E3E6] px-4 py-3.5">
						<SelectValue placeholder="Hạ Long" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fruits</SelectLabel>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
							<SelectItem value="grapes">Grapes</SelectItem>
							<SelectItem value="pineapple">Pineapple</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</Field>
			<Field className="w-full">
				<FieldLabel className="flex items-center gap-2 text-xs font-semibold tracking-[0.6px] text-[#424654]">
					<CalendarDaysIcon className="size-3.5" />
					NGÀY ĐI
				</FieldLabel>
				<Popover>
					<PopoverTrigger
						data-empty={!date}
						className={cn(
							buttonVariants({
								variant: 'outline',
								className:
									'h-12 w-full justify-between rounded-md bg-[#E0E3E6] px-4 py-3.5',
							}),
							'h-12 w-full justify-between rounded-md bg-[#E0E3E6] px-4 py-3.5 text-left',
						)}>
						{date ? formatTripDate(date) : <span>mm/dd/yyyy</span>}
						<ChevronDownIcon className="size-4 opacity-60" />
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							defaultMonth={date}
						/>
					</PopoverContent>
				</Popover>
			</Field>
			<Button size="lg" className="h-12 w-full bg-[#8B5000] px-6 md:col-span-2 xl:col-span-1 xl:w-auto xl:px-9">
				<SearchIcon data-icon="inline-start" />
				<span className="text-base text-white">TÌM CHUYẾN XE</span>
			</Button>
		</div>
	);
}
