import { Point } from "../../store/interfaces/Routes";

export type CarouselKitProps = {
  points: Point[];
  singleSlide?: boolean;
  showLike?: boolean;
};

export type CarouselItem = {
  image: string;
  type?: string;
  title?: string;
};
