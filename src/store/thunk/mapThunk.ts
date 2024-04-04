import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ObjectManager } from "yandex-maps";

import { prepareMap } from "../../services/yandexMap";
import { points } from "../../__mocks__/mapPoints";
import { emitMapLoadState, generatePointsWithContent, onPinClick } from "../../services/mapUtils";
// import { TState } from "../slices/mapSlice";

// interface IThunkConfig {
//   state: TState;
// }

export interface IRoutePoints {
  coordinates: number[];
  id: number;
  price: number;
  count: number;
  type: string;
}

export interface IPromoPoints {
  coordinates: number[];
  id: number;
  promo: number;
  step: number;
  type: string;
}

export interface IPartnersPoints {
  coordinates: number[];
  id: number;
  title: string;
  content: string;
  type: string;
};

export interface IExcursionPoints {
  coordinates: number[];
  id: number;
  title: string;
  content: string;
  type: string;
};

export interface IMapPoints {
  routePoints: IRoutePoints[];
  promoPoints: IPromoPoints[];
  partnersPoints: IPartnersPoints[];
  excursionPoints: IExcursionPoints[];
};

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
