import {
  IExcursionPoints,
  IMapPoints,
  IPartnersPoints,
  IPromoPoints,
  IRoutePoints
} from "../store/thunk/mapThunk";
import Event from '../services/eventEmitter';
import { IPoint, TLoadingState } from "./yandexMap";

const enum MarkerTypes {
  route = "route",
  promo ="promo",
  partners ="partners",
  excursion = "excursion",
  selfie = "selfie",
};

export const onPinClick = (pinData: any) => {
  Event.emit("add", { pinData });
};

export const emitMapLoadState = (state: TLoadingState) => {
  Event.emit("add", { loadingState: state });
};

const prepareIconComponent = (point: IRoutePoints | IPromoPoints | IPartnersPoints | IExcursionPoints) => {
  switch (point.type) {
    case MarkerTypes.route:
      return (
        <span>Point of route</span>
      );
    case MarkerTypes.promo:
      return (
        <span>Point of promo</span>
      );
    case MarkerTypes.partners:
      return (
        <span>Point of partners</span>
      );
    default:
      return (
        <span>Point of excursion</span>
      );
  }
};

export const generatePointsWithContent = (points: IMapPoints) => {
  return points.routePoints.map((point) => {
    return {
      iconComponent: prepareIconComponent(point),
      coordinates: point.coordinates,
      balloonComponent: <span>balloonComponent - ${point.type}</span>,
      balloonCloseButtonDataId: "close"
    } as IPoint
  });
};