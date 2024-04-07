export interface IBalloon {
  closeButtonId: string;
  title: string;
  imageSrc: string;
  description: string;
  buttonTitle: string;
  isLike?: boolean;
  onClick: () => void;
  onLike: () => void;
}

export const enum BalloonNames {
  route = "route",
  promo = "promo",
  winning = "winning",
  selfie = "selfie",
  start = "start",
}

export const enum BalloonButtonTitles {
  add = "Добавить",
  pickedUp = "Забрать",
  forward = "Вперед",
  watch = "Посмотреть",
  next = "Дальше",
}

export const enum BalloonImagesSrc {
  route = "/src/assets/images/image 215.png",
  promo = "/src/assets/images/Diamond.png",
  promoLarge = "/src/assets/images/DiamondLarge.png",
  winning = "/src/assets/images/Prize.png",
  selfie = "/src/assets/images/Camera.png",
  start = "/src/assets/images/Flag.png",
  pin = "/src/assets/images/Pin.png",
  ej = "/src/assets/images/ежик 2.png"
}

export const enum BalloonTitles {
  route = "route",
  promo = "Вы нашли часть промокода!",
  winning = "Победа!",
  selfie = "Классное место для селфи!",
  start = "Стартуем здесь",
  ej = "Казанский кремль",
}

export const enum BalloonDescription {
  route = "route Description",
  promo = "частей! Собирайте еще алмазы на следующих локациях",
  winning = "Вы собрали весь промокод!",
  selfie = "Делайте снимки ваших путешествий и делитесь в историях вашими впечатлениями!",
  start = "Вперед за впечатлениями!",
  ej = "Добро пожаловать в Казанский Кремль! Здесь мы стоим у стен кремля, защищавших город с давних времен.",
}