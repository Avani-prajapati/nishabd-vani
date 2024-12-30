import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselWithIndicators() {
  return (
    <div className="relative px-1">
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/Home/homeimage1.jpeg"
              className="block h-[24rem] md:h-[34rem] w-screen object-cover md:object-fill"
              alt="Home Image 1"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/Home/homeimage2.webp"
              className="block h-[24rem] md:h-[34rem] w-full object-cover md:object-fill"
              alt="Home Image 2"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/ImagesNV/Home/homeimage3.avif"
              className="block h-[24rem] md:h-[34rem] w-full object-cover md:object-fill"
              alt="Home Image 3"
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}
