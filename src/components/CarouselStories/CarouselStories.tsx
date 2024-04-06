import { FC } from "react";
import Carousel from "react-multi-carousel";
import ReviewAvatar from "../CircleImage";
import ButtonGroupCarousel from "./ButtonGroupCarousel";
import { responsiveMultiplySlide } from "./CarouselStories.config";
import { CarouselStoriesProps } from "./CarouselStories.interfaces";

const CarouselStories: FC<CarouselStoriesProps> = ({
  images,
  onChangeIndex,
}) => {
  return (
    <Carousel
      showDots={false}
      partialVisible={true}
      responsive={responsiveMultiplySlide}
      dotListClass="[&>.react-multi-carousel-dot_button]:bg-white/30 [&>.react-multi-carousel-dot_button]:border-none [&>.react-multi-carousel-dot--active_button]:!bg-white"
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroupCarousel />}
      centerMode={false}
      slidesToSlide={1}
      itemClass={"mr-3"}
      beforeChange={(nextSlide) => {
        onChangeIndex(nextSlide + 1);
      }}
      className={`w-full z-0 ml-3`}>
      {images.map((item, index) => (
        <div
          key={index}
          className="w-full rounded-32 p-3 bg-white shadow-reviewCard">
          <img
            src={item.image}
            alt="img"
            className={`w-full object-cover rounded-24 mb-3 h-48`}
          />
          <h4 className="text-mobile-h4 mb-2 break-words line-clamp-2">
            {item.title}
          </h4>
          <p className="break-words line-clamp-3 text-mobile-subTitle mb-2">
            {item.desc}
          </p>
          <div className="flex flex-row items-center gap-3">
            <ReviewAvatar size="w-6 h-6" img={item.avatar} />
            <p className="text-body-p2">{item.name}</p>
            <p className="text-body-p2">2 недели назад</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselStories;
