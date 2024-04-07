import {
  IExcursionPoints,
  IMapPoints as IYandexMapPoints,
  IPartnersPoints,
  IPromoPoints,
  IRoutePoints
} from "../store/thunk/mapThunk";
import Event from '../services/eventEmitter';
import { IPoint, TLoadingState } from "./yandexMap";
import { BalloonInfo } from "../components/BalloonInfo";
import { BalloonButtonTitles, BalloonDescription, BalloonImagesSrc, BalloonTitles } from "../components/Balloon/Balloon.interface";
import Marker from "../components/Marker";

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
}

export interface IMapPoints {
  points: IMapPoint[];
}

export const enum MarkerTypes {
  start = "start",
  route = "route",
  promo ="promo",
  partners ="partners",
  excursion = "excursion",
  selfie = "selfie",
}

export const onPinClick = (pinData: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Event.emit("add", { pinData });
};

export const emitMapLoadState = (state: TLoadingState) => {
  Event.emit("add", { loadingState: state });
};

const prepareIconComponent = (point: IRoutePoints | IPromoPoints | IPartnersPoints | IExcursionPoints) => {
  switch (point.type) {
    case MarkerTypes.route:
      return (
        <Marker
          id={point.id}
          type={point.type}
          imageSrc={point.preview_image}
        />
      );
    case MarkerTypes.promo:
      return (
        <Marker
          id={point.id}
          type={point.type}
          imageSrc={point.preview_image}
        />
      );
    case MarkerTypes.partners:
      return (
        <Marker
          id={point.id}
          type={point.type}
          imageSrc={point.preview_image}
        />
      );
    default:
      return (
        <Marker
          id={point.id}
          type={point.type}
          imageSrc={point.preview_image}
        />
      );
  }
};

const prepareBalloonComponent = (point: IRoutePoints | IPromoPoints | IPartnersPoints | IExcursionPoints) => {
  switch (point.type) {
    case MarkerTypes.route:
      return (
        <BalloonInfo
          closeButtonId={balloonCloseButtonDataId}
          title={BalloonTitles.route}
          imageSrc={BalloonImagesSrc.route}
          description={BalloonDescription.route}
          buttonTitle={BalloonButtonTitles.add}
          onClick={() => console.log("CLICK Take route")}
        />
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
        <BalloonInfo
          closeButtonId={balloonCloseButtonDataId}
          title={BalloonTitles.selfie}
          imageSrc={BalloonImagesSrc.selfie}
          description={BalloonDescription.selfie}
          buttonTitle={BalloonButtonTitles.add}
          onClick={() => console.log("CLICK Take promo")}
        />
      );
    default:
      return (
        <BalloonInfo
          closeButtonId={balloonCloseButtonDataId}
          title={BalloonTitles.selfie}
          imageSrc={BalloonImagesSrc.selfie}
          description={BalloonDescription.selfie}
          buttonTitle={BalloonButtonTitles.add}
          onClick={() => console.log("CLICK Take promo")}
        />
      );
  }
};

const preparePointsWithContent = (point: IRoutePoints | IPromoPoints | IPartnersPoints | IExcursionPoints) => {
  return {
    // iconComponent: prepareIconComponent(point),
    coordinates: point.coordinates,
    balloonComponent: prepareBalloonComponent(point),
    balloonCloseButtonDataId: balloonCloseButtonDataId,
  } as IPoint
};

export const generatePointsWithContent = (points: IYandexMapPoints) => {
  const routePoints: IPoint[] = [];
  const partnersPoints: IPoint[] = [];
  const excursionPoints: IPoint[] = [];
  const promoPoints: IPoint[] = [];
  const selfiePoints: IPoint[] = [];

  points.routePoints.map((point) => { //routePoints !!!!!!!!!!!!!!
    switch (point.type) {
      case MarkerTypes.route:
        routePoints.push(preparePointsWithContent(point));
        break;
      case MarkerTypes.promo:
        promoPoints.push(preparePointsWithContent(point));
        break;
      case MarkerTypes.selfie:
        selfiePoints.push(preparePointsWithContent(point));
        break;
      case MarkerTypes.excursion:
        excursionPoints.push(preparePointsWithContent(point));
        break;
      default:
        partnersPoints.push(preparePointsWithContent(point));
        break;
    }
  });

  const allPoint = {
    routePoints,
    promoPoints,
    partnersPoints,
    // excursionPoints,
  };
  
  return allPoint;
  // return points.promoPoints.map((point) => {
  //   return {
  //     iconComponent: prepareIconComponent(point),
  //     coordinates: point.coordinates,
  //     balloonComponent: prepareBalloonComponent(point),
  //     balloonCloseButtonDataId: balloonCloseButtonDataId,
  //   } as IPoint
  // });

};