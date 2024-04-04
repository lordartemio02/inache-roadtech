export interface ICard {
  title: string;
  images: string[];
  price: number;
  rating: string;
  geo: string;
  time: string;
  type: string;
  location: string;
  isLike: boolean;
  onClick: () => void;
  onLike: () => void;
}
