/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReactDOMServer from 'react-dom/server';
import { IClassConstructor, IShape, layout } from "yandex-maps";
import { loadScript } from "./loadScript";
import { ReactElement } from "react";
import { MarkerTypes } from './mapUtils';
import { IMapPoints } from '../store/thunk/mapThunk';
import { BalloonImagesSrc } from '../components/Balloon/Balloon.interface';

const YANDEX_API_KEY = "2abb6e36-ee29-4a88-9a1e-8c46287f042e";

export const defaultZoomValue = 15;

export const mapContainerId = "YandexMapId";

export const enum LoadingStates {
  unset = "unset",
  loading = "loading",
  ready = "ready",
  error = "error",
}

export type TLoadingState = "unset" | "loading" | "ready" | "error";

export let loadingState: TLoadingState = LoadingStates.unset;
export let loadingPromise: Promise<void>

type TMapInstance = any

export declare const ymaps: any

export let mapInstance: TMapInstance


export const destroyMap = () => {
  if (!mapInstance) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  mapInstance.destroy();
  mapInstance = undefined;
}

export const setCenter = (coord: number[]) => {
  if (!mapInstance) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  mapInstance?.setCenter(coord, defaultZoomValue, {
    checkZoomRange: true,
  })
}

interface ILoadMap {
  version?: string,
  updateLoadingState?: (state: TLoadingState) => void
}

const loadMap = ({ updateLoadingState, version = "2.1"}: ILoadMap) => {
  const src = `https://api-maps.yandex.ru/${version}/?lang=ru_RU&apikey=${YANDEX_API_KEY}`;

  switch (loadingState) {
    case LoadingStates.loading:
    case LoadingStates.ready:
      return loadingPromise;
    default:
      loadingPromise = new Promise((resolve, reject) => {
        loadScript(
          src,
          () => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ymaps.ready(() => {
              loadingState = LoadingStates.ready;
              resolve();

              if (updateLoadingState) {
                updateLoadingState(loadingState)
              }
            });
          },
          () => {
            loadingState = LoadingStates.error;
            reject();
          },
        );
      });

      return loadingPromise;
  }
}

interface IGenerateLayoutProps {
  markup: string
  onBuild?: (context: layout.templateBased.Base) => void
  onDestroy?: (context: layout.templateBased.Base) => void
  onGetShape?: (context: layout.templateBased.Base) => IShape
}

const generateLayout = ({
  markup,
  onBuild,
  onDestroy,
  onGetShape,
}: IGenerateLayoutProps): IClassConstructor<layout.templateBased.Base> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  ymaps.templateLayoutFactory.createClass(markup, {
    build() {
      this.constructor.superclass.build.call(this)

      if (onBuild) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onBuild(this)
      }
    },

    destroy() {
      if (onDestroy) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onDestroy(this)
      }

      this.constructor.superclass.destroy.call(this)
    },

    getShape() {
      if (onGetShape !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return onGetShape(this)
      }

      if (!ymaps.shape?.Rectangle) {
        return null
      }

      const rect =
        this.getParentElement()?.firstElementChild?.firstElementChild?.getBoundingClientRect()

      const coords =
        rect === undefined
          ? [[0, 0], [0], 0]
          : [
              [-rect.width / 2, -rect.height], // верхний левый угол относительно точки
              [rect.width / 2, 0], // нижний правый угол относительно точки
            ]

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle(coords))
    },
  })

const generateLayoutWithCloseButtons = (
  markup: string,
  dataId?: string,
): IClassConstructor<layout.templateBased.Base> =>
  generateLayout({
    markup,
    onBuild: (context) => {
      if (!dataId) {
        return;
      }

      const handleClick = (event: Event) => {
        event.preventDefault()

        context.events.fire('userclose')
      };

      const parentNode = context.getParentElement();
      const closeButtons = parentNode.querySelectorAll(`[data-id=${dataId}]`);

      closeButtons.forEach((element: Element) => {
        element.addEventListener('click', handleClick)
      });
    },
  })

export interface IPoint {
  coordinates: number[]
  iconComponent?: ReactElement
  balloonComponent?: ReactElement
  balloonCloseButtonDataId?: string
}

interface IInitMapProps {
  points?: { routePoints: IPoint[]; promoPoints: IPoint[]; partnersPoints: IPoint[]; }
  onPinClick?: (id: number) => void
  emitMapLoadState?: (state: TLoadingState) => void
  // onBoundsChange?: (e: MapEvent) => void
}

export const generateGeoData = (points: IPoint[]): Record<string, unknown> => ({
  type: 'FeatureCollection',
  features: points.map((point, index) => ({
    type: 'Feature',
    id: index,
    geometry: { type: 'Point', coordinates: point.coordinates },
    options: {
      pane: 'balloon',
      hideIconOnBalloonOpen: false,

      iconLayout:
        point.iconComponent === undefined
          ? undefined
          : generateLayout({
              markup: ReactDOMServer.renderToStaticMarkup(point.iconComponent),
            }),
      balloonAutoPan: true,
      balloonPanelMaxMapArea: 0,
      balloonAutoPanMargin: [-250, 200, 640, -350], //верхний, правый, нижний и левый
      balloonLayout: point.balloonComponent
        ? generateLayoutWithCloseButtons(
            ReactDOMServer.renderToStaticMarkup(point.balloonComponent),
            point.balloonCloseButtonDataId,
          )
        : null,
    },
  })),
});

export const generateRouteGeoData = (points: IPoint[]): Record<string, unknown> => ({
  type: 'FeatureCollection',
  features: points.map((point, index) => ({
    type: 'Feature',
    id: index,
    geometry: { type: 'Point', coordinates: point.coordinates },
    options: {
      pane: 'balloon',
      hideIconOnBalloonOpen: false,

      iconContentLayout:
        point.iconComponent === undefined
          ? undefined
          : generateLayout({
              markup: ReactDOMServer.renderToStaticMarkup(point.iconComponent),
            }),
      balloonAutoPan: true,
      balloonPanelMaxMapArea: 0,
      balloonAutoPanMargin: [-50, 200, 640, -350], //верхний, правый, нижний и левый
      balloonContentLayout: point.balloonComponent
        ? generateLayoutWithCloseButtons(
            ReactDOMServer.renderToStaticMarkup(point.balloonComponent),
            point.balloonCloseButtonDataId,
          )
        : null,
    },
  })),
});

const prepareMapOptions = (top: string) => {
  const options = {
    size: "small",
    float: "none",
    position: {
      top,
      right: "10px",
    }
  };

  return options;
};

const getMapOptions = (points: IPoint[], customButtons: any[]) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      ...prepareMapOptions("300px"),
    },
  });

  const zoomControl = new ymaps.control.ZoomControl({
    options: {
      ...prepareMapOptions("223px"),
    },
  });

  return [
    {
      center: points[0]?.coordinates || [55.739625, 37.54120],
      zoom: defaultZoomValue,
      controls: [geolocationControl, zoomControl, ...customButtons],
    },
    {
      buttonMaxWidth: 300,
    }
  ]
}

const init = ({ points, onPinClick }: IInitMapProps) => {
  let referencePoints = points?.routePoints.map(({ coordinates }) => coordinates);
  const location = ymaps.geolocation;
  // const city = location.city;
  // const country = location.country;

  
  // Создаем мультимаршрут и настраиваем его внешний вид с помощью опций.
  let multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: referencePoints,
  });

  // Настраиваем внешний вид второй точки через прямой доступ к ней.
  const customizePoint = () => {
    /**
     * Ждем, пока будут загружены данные мультимаршрута и созданы отображения путевых точек.
     */
    multiRoute.model.events.add("requestsuccess", () => {
      const geoData = generateRouteGeoData(points?.routePoints as IPoint[]);
      const wayPoint = multiRoute.getWayPoints();
      // let way
      // let coordinates
      
      for (let i = 0; i < wayPoint.getLength(); i++) {
        const way = wayPoint.get(i);
        // const coordinates = wayPoint.get(i).properties.get('coordinates');
        // console.log(coordinates, coord,
        //   coordinates.every((element, index) => { return element === points?.routePoints[i].coordinates[index] }));
        ymaps.geoObject.addon.balloon.get(way);
        const customLayout = ymaps.templateLayoutFactory.createClass('<img src="src/assets/images/image_215.png" width="30" height="30">');
        wayPoint.options.set(
          // geoData
          {
            iconContentLayout: customLayout,
            // generateLayout({
            //   markup: ReactDOMServer.renderToStaticMarkup(points?.routePoints[i].iconComponent),
            // }),
            // balloonAutoPan: true,
            // balloonPanelMaxMapArea: 0,
            // balloonAutoPanMargin: [-50, 200, 640, -350], //верхний, правый, нижний и левый
            balloonContentLayout: customLayout,
          },
        );
      }
    })
  };

  const referencePointsWithGeolocation = () => {
    multiRoute.model.events.once("requestsuccess", () => {
      location.get({
        provider: 'browser',
        mapStateAutoApply: true
      }).then((result: any) => {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        referencePoints = [result.geoObjects.get(0).geometry.getCoordinates(), ...referencePoints as number[][]];
        multiRoute = new ymaps.multiRouter.MultiRoute({
          referencePoints: referencePoints,
          params: {
            //Тип маршрутизации - пешеходная маршрутизация.
            routingMode: 'pedestrian' // общест. тран - 'masstransit', авто auto
          }
        }, {
          // Внешний вид путевых точек.
          // Задаем собственную картинку для последней путевой точки.
          // wayPointIconRadius: 50,
          wayPointIconLayout: "default#image",
          wayPointIconImageHref: "src/assets/images/route.png",
          wayPointIconImageSize: [30, 30],
          wayPointIconImageOffset: [-15, -15],
          // wayPointStartIconColor: "#333",
          // wayPointStartIconFillColor: "#B3B3B3",
          // wayPointStartPointIconLayout: "default#image",
          // wayPointStartPointIconImageHref: "src/assets/images/Pin.png",
          // wayPointStartIconImageSize: [30, 30],
          // wayPointStartIconImageOffset: [-15, -15],
          // Позволяет скрыть иконки путевых точек маршрута.
          // wayPointVisible:false,
          // Внешний вид транзитных точек.
          // viaPointIconRadius: 7,
          // viaPointIconFillColor: "#000088",
          // viaPointActiveIconFillColor: "#E63E92",
          // Транзитные точки можно перетаскивать, при этом
          // маршрут будет перестраиваться.
          // viaPointDraggable: true,
          // Позволяет скрыть иконки транзитных точек маршрута.
          // viaPointVisible:false,
          // Внешний вид точечных маркеров под путевыми точками.
          // pinIconFillColor: "#000088",
          // pinActiveIconFillColor: "#B3B3B3",
          // Позволяет скрыть точечные маркеры путевых точек.
          // pinVisible:false,
          // Внешний вид линии маршрута.
          routeStrokeWidth: 2,
          routeStrokeColor: "#007470",
          routeActiveStrokeWidth: 2,
          routeActiveStrokeColor: "#B21500",
          // Внешний вид линии пешеходного маршрута.
          routeActivePedestrianSegmentStrokeStyle: "solid",
          routeActivePedestrianSegmentStrokeColor: "#007470",
          // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
          boundsAutoApply: true
        });
        // customizePoint();
        mapInstance.geoObjects.add(multiRoute);
      });
    });
  };

  // const mapOptionControlsButtons = [routingModeButton];

  const mapOptions = getMapOptions(points?.partnersPoints as IPoint[], []);

  // Создаем карту с добавленной на нее кнопкой.
  mapInstance = new ymaps.Map(mapContainerId, mapOptions[0], mapOptions[1]);

  // Добавляем мультимаршрут на карту.
  // mapInstance.geoObjects.add(multiRoute);
  const objectManager = new ymaps.ObjectManager(mapOptions);
  // mapInstance.geoObjects.add(multiRoute);
  referencePointsWithGeolocation();
  // customizePoint();
  mapInstance.geoObjects.add(objectManager);


  const geoData = generateGeoData(points?.partnersPoints as IPoint[]);
  objectManager.add(geoData);

  const generatePointsWithContent = (points: IMapPoints) => {
    points.routePoints.map((point) => {
      let myPlacemark

      switch (point.type) {
        case MarkerTypes.promo:
          myPlacemark = new ymaps.Placemark(point.coordinates, { }, 
            {
              iconLayout: 'default#image',
              iconImageHref: BalloonImagesSrc.promo, 
              iconImageSize: [30, 30], 
              iconImageOffset: [-6, -19], 
            });
            mapInstance.geoObjects.add(myPlacemark);
          break;
        case MarkerTypes.selfie:
          // eslint-disable-next-line no-case-declarations
          myPlacemark = new ymaps.Placemark(point.coordinates, { }, 
            {
              iconLayout: 'default#image',
              iconImageHref: BalloonImagesSrc.selfie, 
              iconImageSize: [30, 30], 
              iconImageOffset: [-6, -19], 
            });
            mapInstance.geoObjects.add(myPlacemark);
          break;
        case MarkerTypes.partners:
          // eslint-disable-next-line no-case-declarations
          myPlacemark = new ymaps.Placemark(point.coordinates, { }, 
            {
              iconLayout: 'default#image',
              iconImageHref: BalloonImagesSrc.pin, 
              iconImageSize: [30, 30], 
              iconImageOffset: [-6, -19], 
            });
            mapInstance.geoObjects.add(myPlacemark);
          break;
        default:
          break;
      }
    });
  }
  generatePointsWithContent(points as IMapPoints);
  // const myPlacemark = new ymaps.Placemark([55.61815671990187, 37.02327668669118], { }, 
  //   {
  //     iconLayout: 'default#image',
  //     iconImageHref: 'src/assets/images/Camera.png', 
  //     iconImageSize: [30, 30], 
  //     iconImageOffset: [-6, -19], 
  //   });
  // const myPlacemark2 = new ymaps.Placemark([55.61815671990187, 37.02327668669118], { }, 
  //   {
  //     iconLayout: 'default#image',
  //     iconImageHref: 'src/assets/images/Diamond.png', 
  //     iconImageSize: [30, 30], 
  //     iconImageOffset: [-6, -19], 
  //   });
    
    // mapInstance.geoObjects.add(myPlacemark);
    // mapInstance.geoObjects.add(myPlacemark2);
  // customizePoint();

  // mapInstance.container.events.add('click', (event: any) => {
  //   if (onPinClick) {
  //     const clickedElement = event.originalEvent?.domEvent?.originalEvent?.target?.parentNode
  //       ?.parentNode as HTMLDivElement
  //     const isBalloon = clickedElement?.dataset?.id === pointMarkerDataIdName;
  //     const balloonCId = Number(clickedElement?.dataset?.clinicId);

  //     if (isBalloon && balloonClinicId !== null && !Number.isNaN(balloonClinicId)) {
  //       if (
  //         earlierClickedId !== null &&
  //         earlierClickedId !== balloonId
  //       ) {
  //         const earlierClickedElement = document.querySelector(
  //           `[data-clinic-id='${earlierClickedId}']`,
  //         ) as Element
  //         ;(
  //           earlierClickedElement?.firstElementChild?.firstElementChild as HTMLInputElement
  //         ).checked = false;
  //       }

  //       onPinClick(balloonId);

  //       earlierClickedId = balloonId;
  //     }
  //   }
  // })
};

export const prepareMap = async ({
  points,
  onPinClick,
  emitMapLoadState,
  // onBoundsChange,
}: IInitMapProps) => {
  await loadMap({ updateLoadingState: emitMapLoadState })

  init({
    points,
    onPinClick,
    // onBoundsChange,
  })
}