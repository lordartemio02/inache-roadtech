export interface IBalloon {
  closeButtonId: string;
  title: string;
  imageSrc: string;
  description: string;
  buttonTitle: string;
  isLike: boolean;
  onClick: () => void;
  onLike: () => void;
}

export const enum BalloonNames {
  promo = "promo",
  winning = "winning",
  selfie = "selfie",
  start = "start",
};

export const enum BalloonButtonTitles {
  add = "Добавить",
  pickedUp = "Забрать",
  clearly = "Понятно",
  watch = "Посмотреть",
};

export const enum BalloonImagesSrc {
  promo = "../assets/images/Diamond.png",
  winning = "../assets/images/Prize.png",
  selfie = "../assets/images/Camera.png",
  start = "../assets/images/Flag.png",
};

export const enum BalloonTitles {
  promo = "Вы нашли часть промокода!",
  winning = "Победа!",
  selfie = "Классное место для селфи!",
  start = "Стартуем здесь",
};

export const enum BalloonDescription {
  promo = "частей! Собирайте еще алмазы на следующих локациях",
  winning = "Вы собрали весь промокод!",
  selfie = "Делайте снимки ваших путешествий и делитесь в историях вашими впечатлениями!",
  start = "Вперед за впечатлениями!",
};