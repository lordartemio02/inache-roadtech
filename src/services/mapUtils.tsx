import {
  IExcursionPoints,
  IMapPoints,
  IPartnersPoints,
  IPromoPoints,
  IRoutePoints
} from "../store/thunk/mapThunk";
import Event from '../services/eventEmitter';
import { IPoint, TLoadingState } from "./yandexMap";
import { BalloonInfo } from "../components/BalloonInfo";
import { BalloonButtonTitles, BalloonDescription, BalloonImagesSrc, BalloonTitles } from "../components/Balloon/Balloon.interface";

const balloonCloseButtonDataId = "balloonCloseButtonDataId";

export interface IMapPoint {
  id: string;
  type: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  attachments: string[];
  preview_image: string;
  address: string;
  day_number: number;
  order_number: number;
  routeId: string;
  route: string;
  stories: string[];
};

export interface IMapPoints {
  points: IMapPoint[];
};

const enum MarkerTypes {
  start = "start",
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
        <span>Point of 1</span>
        // <Balloon
        //   closeButtonId={balloonCloseButtonDataId}
        //   title={BalloonButtonTitles.}
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
        <BalloonInfo
          closeButtonId={balloonCloseButtonDataId}
          title={BalloonTitles.promo}
          imageSrc={BalloonImagesSrc.promo}
          description={BalloonDescription.promo}
          buttonTitle={BalloonButtonTitles.add}
          onClick={() => console.log("CLICK Take promo")}
        />
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
  return points.promoPoints.map((point) => {
    return {
      iconComponent: prepareIconComponent(point),
      coordinates: point.coordinates,
      balloonComponent: prepareBalloonComponent(point),
      balloonCloseButtonDataId: balloonCloseButtonDataId,
    } as IPoint
  });
};