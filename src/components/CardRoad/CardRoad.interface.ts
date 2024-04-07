import { Routes } from "../../store/interfaces/Routes";

export type CardRoadProps = {
  // title: string;
  // images: CarouselItem[];
  // rating?: string;
  // geo?: string;
  // time?: string;
  // type: string;
  // location?: string;
  isLike: boolean;
  onClick: () => void;
  onLike: () => void;
} & Routes;
