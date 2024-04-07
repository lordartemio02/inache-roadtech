export type CarouselKitProps = {
  images: CarouselItem[];
  singleSlide?: boolean;
  showLike?: boolean;
};

export type CarouselItem = {
  image: string;
  type?: string;
  title?: string;
};
