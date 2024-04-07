export type CarouselKitProps = {
  images: CarouselItem[];
};

type CarouselItem = {
  image: string;
  type?: string;
  title?: string;
  name?: string;
};
