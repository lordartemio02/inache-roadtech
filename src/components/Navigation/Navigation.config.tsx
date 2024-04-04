import { MapIcon, MessageIcon, SearchIcon } from '../../assets/icons';
import { INavList } from './Navigation.interface';

export const navList: INavList[] = [
  {
    title: 'Куда поехать',
    list: [
      {
        path: '/',
        title: 'Жилье',
      },
      {
        path: '/',
        title: 'Направления',
      },
      {
        path: '/tours',
        title: 'Туры',
      },
    ],
  },
  {
    title: 'Что посмотреть',
    list: [
      {
        path: '/',
        title: 'Места и события',
      },
      {
        path: '/',
        title: 'Маршруты и экскурсии',
      },
      {
        path: '/',
        title: 'Рестораны и кафе',
      },
      {
        path: '/',
        title: 'Видеоматериалы',
      },
    ],
  },
  {
    title: 'Как добраться',
    list: [
      {
        path: '/',
        title: 'Авиабилеты',
      },
      {
        path: '/',
        title: 'Ж/Д билеты',
      },
      {
        path: '/',
        title: 'Речные прогулки',
      },
      {
        path: '/',
        title: 'Мультимаршруты',
      },
      {
        path: '/',
        title: 'Аэроэкспресс',
      },
      {
        path: '/',
        title: 'Карта Тройка',
      },
    ],
  },
  {
    title: 'Может пригодиться',
    list: [
      {
        path: '/',
        title: 'Карта',
        img: <MapIcon />,
      },
      {
        path: '/',
        title: 'Поиск',
        img: <SearchIcon />,
      },
      {
        path: '/',
        title: 'Поддержка',
        img: <MessageIcon />,
      },
    ],
  },
];
