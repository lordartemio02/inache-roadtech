import { createAsyncThunk } from "@reduxjs/toolkit";
import { prepareMap } from "../../services/yandexMap";
import { points } from "../../__mocks__/mapPoints";
import { emitMapLoadState, generatePointsWithContent, onPinClick } from "../../services/mapUtils";


export interface IRoutePoints {
  coordinates: number[];
  id: number;
  price: number;
  count: number;
  type: string;
  preview_image: string;
}

export interface IPromoPoints {
  coordinates: number[];
  id: number;
  promo: number;
  step: number;
  type: string;
  preview_image: string;
}

export interface IPartnersPoints {
  coordinates: number[];
  id: number;
  title: string;
  content: string;
  type: string;
  preview_image: string;
}

export interface IExcursionPoints {
  coordinates: number[];
  id: number;
  title: string;
  content: string;
  type: string;
  preview_image: string;
}

export interface ISelfiePoints {
  coordinates: number[];
  id: number;
  title: string;
  content: string;
  type: string;
  preview_image: string;
}

export interface IMapPoints {
  routePoints: IRoutePoints[];
  promoPoints: IPromoPoints[];
  partnersPoints: IPartnersPoints[];
  excursionPoints: IExcursionPoints[];
  selfiePoints: ISelfiePoints[];
}
// export const fetchMapPoint = createAsyncThunk<IMapPoints, void, IThunkConfig>('mapPage/fetchMapPoint', async () => {
//   return points;
// });

const fetchMapPoint = () => {
  return points as unknown as IMapPoints;
};

export const loadMap = createAsyncThunk<void, void>('mapPage/loadMap', async () => {
  // let objectManager: ObjectManager | null = null

  await prepareMap({
    points: generatePointsWithContent(fetchMapPoint()),
    onPinClick,
    emitMapLoadState,
  })
});
