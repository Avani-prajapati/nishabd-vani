import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselWithIndicators() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-auto  after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              
            <img
              src="/ImagesNV/homeimage1.jpeg"
              className="block h-[32rem] w-full"
              alt="..."
            />
        </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/homeimage2.webp"
              className="block h-[32rem] w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/homeimage3.avif"
              className="block h-[32rem] w-full "
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}