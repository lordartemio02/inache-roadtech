
import ReactDOMServer from 'react-dom/server';
import { IClassConstructor, IShape, layout } from "yandex-maps";
import { loadScript } from "./loadScript";
import { ReactElement } from "react";

const YANDEX_API_KEY = "2abb6e36-ee29-4a88-9a1e-8c46287f042e";

export const defaultZoomValue = 15;

export const mapContainerId = "YandexMapId";

export const enum LoadingStates {
  unset = "unset",
  loading = "loading",
  ready = "ready",
  error = "error",
};

export type TLoadingState = "unset" | "loading" | "ready" | "error";

export let loadingState: TLoadingState = LoadingStates.unset;
export let loadingPromise: Promise<void>

type TMapInstance = any

declare const ymaps: any

let mapInstance: TMapInstance


export const destroyMap = () => {
  if (!mapInstance) {
    return;
  }

  mapInstance.destroy();
  mapInstance = undefined;
}

export const setCenter = (coord: number[]) => {
  if (!mapInstance) {
    return;
  }

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
  ymaps.templateLayoutFactory.createClass(markup, {
    build() {
      this.constructor.superclass.build.call(this)

      if (onBuild) {
        onBuild(this)
      }
    },

    destroy() {
      if (onDestroy) {
        onDestroy(this)
      }

      this.constructor.superclass.destroy.call(this)
    },

    getShape() {
      if (onGetShape !== undefined) {
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
  points?: IPoint[]
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
      balloonLayout: point.balloonComponent
        ? generateLayoutWithCloseButtons(
            ReactDOMServer.renderToStaticMarkup(point.balloonComponent),
            point.balloonCloseButtonDataId,
          )
        : null,
    },
  })),
});

const getMapOptions = (points: IPoint[], customButtons: any[]) => {
  return [
    {
      center: points[0]?.coordinates || [55.739625, 37.54120],
      zoom: defaultZoomValue,
      controls: ['geolocationControl', 'zoomControl', ...customButtons],
    },
    {
      // Зададим опции для элементов управления.
      geolocationControlFloat: 'right',
      zoomControlFloat: 'right',
      geolocationControlSize: 'small',
      zoomControlSize: 'small',
      buttonMaxWidth: 300,
    }
  ]
}

const init = ({ points, onPinClick }: IInitMapProps) => {
  // Объявляем набор опорных точек и массив индексов транзитных точек.
  const referencePoints = [
    "Москва, Ленинский проспект",
    "Москва, Льва Толстого, 16",
    "Москва, Кремлевская набережная",
    "Москва, парк Сокольники"
  ]
  const viaIndexes = [2];

  // Создаем мультимаршрут и настраиваем его внешний вид с помощью опций.
  var multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: referencePoints,
      params: {
        viaIndexes,
        //Тип маршрутизации - пешеходная маршрутизация.
        routingMode: 'pedestrian' // общест. тран - 'masstransit', авто auto
      }
  }, {
      // Внешний вид путевых точек.
      wayPointStartIconColor: "#333",
      wayPointStartIconFillColor: "#B3B3B3",
      // Задаем собственную картинку для последней путевой точки.
      wayPointFinishIconLayout: "default#image",
      wayPointFinishIconImageHref: "images/sokolniki.png",
      wayPointFinishIconImageSize: [30, 30],
      wayPointFinishIconImageOffset: [-15, -15],
      // Позволяет скрыть иконки путевых точек маршрута.
      // wayPointVisible:false,

      // Внешний вид транзитных точек.
      viaPointIconRadius: 7,
      viaPointIconFillColor: "#000088",
      viaPointActiveIconFillColor: "#E63E92",
      // Транзитные точки можно перетаскивать, при этом
      // маршрут будет перестраиваться.
      viaPointDraggable: true,
      // Позволяет скрыть иконки транзитных точек маршрута.
      // viaPointVisible:false,

      // Внешний вид точечных маркеров под путевыми точками.
      pinIconFillColor: "#000088",
      pinActiveIconFillColor: "#B3B3B3",
      // Позволяет скрыть точечные маркеры путевых точек.
      // pinVisible:false,

      // Внешний вид линии маршрута.
      routeStrokeWidth: 2,
      routeStrokeColor: "#000088",
      routeActiveStrokeWidth: 1,
      routeActiveStrokeColor: "#E63E92",

      // Внешний вид линии пешеходного маршрута.
      routeActivePedestrianSegmentStrokeStyle: "solid",
      routeActivePedestrianSegmentStrokeColor: "#00CDCD",

      // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
      boundsAutoApply: true
  });

  // Настраиваем внешний вид второй точки через прямой доступ к ней.
  customizeSecondPoint();

  // Создаем кнопки.
  var removePointsButton = new ymaps.control.Button({
          data: {content: "Удалить промежуточные точки"},
          options: {selectOnClick: true}
      }),
      routingModeButton = new ymaps.control.Button({
          data: {content: "Пешком"},
          options: {selectOnClick: true}
      });

  // Объявляем обработчики для кнопок.
  removePointsButton.events.add('select', function () {
      multiRoute.model.setReferencePoints([
          referencePoints[0],
          referencePoints[referencePoints.length - 1]
      ], []);
  });

  removePointsButton.events.add('deselect', function () {
      multiRoute.model.setReferencePoints(referencePoints, viaIndexes);
      // Т.к. вторая точка была удалена, нужно заново ее настроить.
      customizeSecondPoint();
  });

  routingModeButton.events.add('select', function () {
      multiRoute.model.setParams({routingMode: 'pedestrian'}, true);
  });

  routingModeButton.events.add('deselect', function () {
      multiRoute.model.setParams({routingMode: 'auto'}, true);
  });

  // Функция настройки внешнего вида второй точки.
  function customizeSecondPoint() {
      /**
       * Ждем, пока будут загружены данные мультимаршрута и созданы отображения путевых точек.
       */
      multiRoute.model.events.once("requestsuccess", function () {
          var yandexWayPoint = multiRoute.getWayPoints().get(1);
          // Создаем балун у метки второй точки.
          ymaps.geoObject.addon.balloon.get(yandexWayPoint);
          yandexWayPoint.options.set({
              preset: "islands#grayStretchyIcon",
              iconContentLayout: ymaps.templateLayoutFactory.createClass(
                  '<span style="color: red;">Я</span>ндекс'
              ),
              balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                  '{{ properties.address|raw }}'
              )
          });
      });
  }

  const mapOptionControlsButtons = [removePointsButton, routingModeButton];

  const mapOptions = getMapOptions(points as IPoint[], mapOptionControlsButtons)

  // Создаем карту с добавленной на нее кнопкой.
  mapInstance = new ymaps.Map(mapContainerId, mapOptions[0], mapOptions[1]);

  // Добавляем мультимаршрут на карту.
  mapInstance.geoObjects.add(multiRoute);
};

// ymaps.ready(init);

export const prepareMap = async ({
  points = [],
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