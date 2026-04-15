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
import { ChevronDownIcon, SearchIcon } from 'lucide-react';
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
		<div className="flex flex-wrap md:flex-nowrap items-end justify-start gap-6">
			<Field>
				<FieldLabel>ĐIỂM ĐI</FieldLabel>
				<Select>
					<SelectTrigger size="lg" className="w-full bg-[#E0E3E6] px-4 py-3.5">
						<SelectValue placeholder="Chọn địa điểm xuất phát" />
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
			<Field>
				<FieldLabel>ĐIỂM ĐẾN</FieldLabel>
				<Select>
					<SelectTrigger size="lg" className="w-full bg-[#E0E3E6] px-4 py-3.5">
						<SelectValue placeholder="Chọn địa điểm đến" />
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
			<Field>
				<FieldLabel>NGÀY ĐI</FieldLabel>
				<Popover>
					<PopoverTrigger
						data-empty={!date}
						className={cn(
							buttonVariants({
								variant: 'outline',
								className:
									'w-full h-12 flex px-4 py-3.5 bg-[#E0E3E6] rounded-md justify-between',
							}),
							'w-full h-12 flex px-4 py-3.5 bg-[#E0E3E6] rounded-md justify-between',
						)}>
						{date ? formatTripDate(date) : <span>Chọn ngày</span>}
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
			<Button
				size="lg"
				className="flex h-12 items-center gap-2 bg-[#8B5000] px-9 py-2 w-full md:w-auto">
				<SearchIcon />
				<span className="text-base text-white">TÌM CHUYẾN XE</span>
			</Button>
		</div>
	);
}
