import { FC } from "react";
import { ButtonGroupProps } from "react-multi-carousel";
import Button from "../Button";

const ButtonGroupCarousel: FC<ButtonGroupProps> = ({
  next,
  previous,
  goToSlide,
  ...rest
}) => {
  const { carouselState } = rest;

  return (
    <div className="px-4 mt-2">
      <Button className="w-full" onClick={next}>
        Следующая локация {carouselState ? carouselState.currentSlide + 1 : 1}/
        {carouselState?.totalItems}
      </Button>
    </div>
  );
};

export default ButtonGroupCarousel;
