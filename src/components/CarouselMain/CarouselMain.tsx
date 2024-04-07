import { FC } from "react";
import Carousel from "react-multi-carousel";
import { responsiveMultiplySlide } from "./CarouselMain.config";
import { CarouselKitProps } from "./CarouselMain.interfaces";

const CarouselMain: FC<CarouselKitProps> = ({ images }) => {
  return (
    <Carousel
      showDots={false}
      partialVisible={true}
      responsive={responsiveMultiplySlide}
      dotListClass="[&>.react-multi-carousel-dot_button]:bg-white/30 [&>.react-multi-carousel-dot_button]:border-none [&>.react-multi-carousel-dot--active_button]:!bg-white"
      arrows={false}
      sliderClass="h-full"
      centerMode={false}
      slidesToSlide={1}
      itemClass={"mr-3"}
      className={`w-full z-0`}>
      {images.map((item, index) => (
        <div
          key={index}
          className="w-full h-full relative rounded-20 flex flex-row p-1 bg-white">
          <img
            src={item.image}
            alt="img"
            className={`w-[140px] h-[136px] object-cover rounded-20`}
          />
          <div className="flex flex-col justify-between p-4">
            <p className="mt-1 break-words line-clamp-2">{item.title}</p>
            <p className="mt-1 break-words line-clamp-2">{item.name}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMain;
