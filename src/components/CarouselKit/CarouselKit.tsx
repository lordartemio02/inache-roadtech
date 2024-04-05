import { FC } from "react";
import Carousel from "react-multi-carousel";
import {
  responsiveMultiplySlide,
  responsiveSingleSlide,
} from "./CarouselKit.config";
import { CarouselKitProps } from "./CarouselKit.interfaces";

const CarouselKit: FC<CarouselKitProps> = ({ images, singleSlide = true }) => {
  return (
    <Carousel
      showDots={singleSlide}
      partialVisible={singleSlide ? false : true}
      responsive={singleSlide ? responsiveSingleSlide : responsiveMultiplySlide}
      dotListClass="[&>.react-multi-carousel-dot_button]:bg-white/30 [&>.react-multi-carousel-dot_button]:border-none [&>.react-multi-carousel-dot--active_button]:!bg-white"
      arrows={false}
      sliderClass="h-full"
      centerMode={false}
      slidesToSlide={1}
      itemClass={singleSlide ? "" : "mr-3"}
      className={`w-full z-0 ${singleSlide ? "h-full" : "h-[240px]"}`}>
      {images.map((item, index) => (
        <div key={index} className="w-full h-full relative">
          <img src={item} alt="img" className="w-full h-full object-cover" />
          <div></div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselKit;
