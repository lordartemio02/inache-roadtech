import { CarouselItem } from "../CarouselKit/CarouselKit.interfaces";

export interface CardRoadProps {
  title: string;
  images: CarouselItem[];
  rating?: string;
  geo?: string;
  time?: string;
  type: string;
  location?: string;
  isLike: boolean;
  onClick: () => void;
  onLike: () => void;
}
