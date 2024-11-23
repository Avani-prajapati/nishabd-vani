import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselWithIndicators() {
  return (
    <div className="relative">
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-auto  after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              
            <img
              src="/ImagesNV/Home/homeimage1.jpeg"
              className="block h-[34rem] w-full"
              alt="..."
            />
        </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/Home/homeimage2.webp"
              className="block h-[34rem] w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/Home/homeimage3.avif"
              className="block h-[34rem] w-full "
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}