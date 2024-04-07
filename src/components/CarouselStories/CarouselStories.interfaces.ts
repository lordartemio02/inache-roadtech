export type CarouselStoriesProps = {
  images: CarouselItemStories[];
  onChangeIndex: (index: number) => void;
};

export type CarouselItemStories = {
  image: string;
  type?: string;
  title?: string;
  desc?: string;
  avatar: string;
  name?: string;
  date?: string;
};

export type ButtonGroupProps = {
  itemWidth?: number;
  slidesToShow?: number;
  currentSlide?: number;
  totalItems?: number;
  deviceType?: string;
  domLoaded?: boolean;
  transform?: number;
  containerWidth?: number;
};
