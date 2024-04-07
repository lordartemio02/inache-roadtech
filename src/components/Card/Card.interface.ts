import { Routes } from "../../store/interfaces/Routes";

export type ICard = {
  isLike?: boolean;
  onClick: () => void;
  onLike: () => void;
} & Routes;
