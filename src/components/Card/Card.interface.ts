import { CarouselItem } from "../CarouselKit/CarouselKit.interfaces";

export interface ICard {
  title: string;
  images: CarouselItem[];
  geo: string;
  type: string;
  location: string;
  isLike: boolean;
  onClick: () => void;
  onLike: () => void;
}
