import {
  IExcursionPoints,
  IMapPoints,
  IPartnersPoints,
  IPromoPoints,
  IRoutePoints
} from "../store/thunk/mapThunk";
import Event from '../services/eventEmitter';
import { IPoint, TLoadingState } from "./yandexMap";
// import { Balloon } from "../components/Balloon";
// import { BalloonButtonTitles } from "../components/Balloon/Balloon.interface";

const balloonCloseButtonDataId = "balloonCloseButtonDataId";

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
        <span>Point of promo</span>
        // <Balloon
        //   closeButtonId={balloonCloseButtonDataId}
        //   title={BalloonButtonTitles.add}
        //   imageSrc={}
        //   description={}
        //   buttonTitle={}
        //   onClick={}
        //   onLike={}
        //   isLike={}
        // />
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

const prepareBalloonComponent = (point: IRoutePoints | IPromoPoints | IPartnersPoints | IExcursionPoints) => {
  switch (point.type) {
    case MarkerTypes.route:
      return (
        <span>Point of promo</span>
        // <Balloon
        //   closeButtonId={balloonCloseButtonDataId}
        //   title={BaloonButtonTitles.}
        //   imageSrc={}
        //   description={}
        //   buttonTitle={}
        //   onClick={}
        //   onLike={}
        //   isLike={}
        // />
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
      balloonComponent: (
        <span>Point of promo</span>
      ),
      balloonCloseButtonDataId: balloonCloseButtonDataId
    } as IPoint
  });
};