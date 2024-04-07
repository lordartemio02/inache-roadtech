import { FC } from "react";
import Carousel from "react-multi-carousel";
import LikeButton from "../LikeButton";
import {
  responsiveMultiplySlide,
  responsiveSingleSlide,
} from "./CarouselKit.config";
import { CarouselKitProps } from "./CarouselKit.interfaces";

const CarouselKit: FC<CarouselKitProps> = ({
  points,
  singleSlide = true,
  showLike,
}) => {
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
      {points.map((item, index) => (
        <div key={index} className="w-full h-full relative rounded-16">
          <img
            src={item.preview_image}
            alt="img"
            className={`w-full h-full object-cover ${
              singleSlide ? "" : "rounded-16"
            }`}
          />
          {showLike ? (
            <div className="absolute right-3 top-3">
              <LikeButton isActive />
            </div>
          ) : null}
          {singleSlide ? null : (
            <>
              <div className="top-3 left-3 absolute flex z-[30] items-center justify-center bg-white w-6 h-6 rounded-full text-body-p3">
                {index}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-black/0 to-black/80 z-[20] rounded-16"></div>
              <div className="absolute bottom-0 left-3 right-0 h-[104px] z-[25]">
                <p className="mt-4 text-white/80">{item.type}</p>
                <p className="mt-1 break-words line-clamp-2 text-white">
                  {item.name}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselKit;
