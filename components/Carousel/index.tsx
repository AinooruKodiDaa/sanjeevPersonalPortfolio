import React, { useState } from "react";
import {
	StyledCarousel,
	StyledCarouselImage,
	StyledCarouselInner,
	StyledCarouselItem,
} from "./styled";
import { Button } from "@components/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import { Text } from "@components/Typography";


export const Carousel: React.FC<any> = (props) => {
	const { items } = props;

	const [activeIndex, setActiveIndex] = useState(0);

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= items.length) {
			newIndex = items.length - 1;
		}

		setActiveIndex(newIndex);
	};

	const canPreviousImage = activeIndex > 0;
	const canNextImage = activeIndex < items.length - 1;


	

	return (
		<StyledCarousel className="relative">
			<StyledCarouselInner
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{items.map((item: any) => {
					return <CarouselItem key={item.id} item={item} />;
				})}
			</StyledCarouselInner>

			<div className="absolute flex justify-between items-center mx-3 bg-[rgba(0,0,0,0)] w-[23.5vw] bottom-2">
				<div>
                <Button
						onClick={() => {
							if (canPreviousImage) {
								updateIndex(activeIndex - 1);
							}
						}}
						color="accent"
						variant="outline"
						iconButton
						noPadding
						disabled={!canPreviousImage}
						className={` rounded-full
${
	canPreviousImage
		? "hover:fill-white hover:bg-accent fill-accent bg-white"
		: "fill-gray-500 bg-white"
}`}
					>
						<ChevronLeftIcon fill="inherit" width={20} height={20} />
					</Button>
				</div>

				<div className={`flex justify-center items-center w-1/6 gap-2`}>
					{items.map((item: any, index: number) => (
						<Button
							key={index}
							onClick={() => {
								updateIndex(index);
							}}
							color="accent"
							variant="circularIcon"
							size="xs"
							className={`
							w-[0.5em] h-[0.5em]
								${activeIndex === index ? "text-white bg-white" : "text-black bg-[#A8B9CA]"}
							`}
						>
							{/* <Text color="inherit" size="xs">
								{index + 1}
							</Text> */}

                            
						</Button>
					))}
				</div>

				<div>
					<Button
						onClick={() => {
							if (canNextImage) {
								updateIndex(activeIndex + 1);
							}
						}}
						color="accent"
						variant="outline"
						iconButton
						noPadding
						disabled={!canNextImage}
						className={` rounded-full
${
	canNextImage
		? "hover:fill-white hover:bg-accent fill-accent bg-white"
		: "fill-gray-500 bg-white"
}`}
					>
						<ChevronRightIcon fill="inherit" width={20} height={20} />
					</Button>
				</div>
			</div>
		</StyledCarousel>
	);
};

const CarouselItem: React.FC<any> = ({ item }) => {
	return (
		<StyledCarouselItem>
			<div></div>
			<StyledCarouselImage src={`data:image/jpeg;base64,${item}`} alt={"Images"} loading="lazy" />
		</StyledCarouselItem>
	);
};
