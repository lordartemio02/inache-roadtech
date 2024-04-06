export type CarouselStoriesProps = {
  images: CarouselItemStories[];
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
