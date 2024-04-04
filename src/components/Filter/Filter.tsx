import { FC } from 'react';

import Accordion from '../Accordion';
import Button from '../Button';
import Checkbox from '../Checkbox';

const Filter: FC = () => {
  const pupularList = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: (
        <div className='w-full flex flex-col'>
          <Checkbox label='С проживанием' />
          <Checkbox label='2 ночи' />
          <Checkbox label='Экотуры' />
        </div>
      ),
    },
  ];
  const featureList = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: (
        <div className='w-full flex flex-col'>
          <Checkbox label='Только мгновенное подтверждение' />
          <Checkbox label='С проживанием' />
          <Checkbox label='С питанием' />
        </div>
      ),
    },
  ];
  const whomList = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: (
        <div className='w-full flex flex-col'>
          <Checkbox label='Семейный' />
          <Checkbox label='Романтический' />
          <Checkbox label='Большой компанией' />
          <Checkbox label='Корпоративный' />
        </div>
      ),
    },
  ];
  const durationList = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: (
        <div className='w-full flex flex-col'>
          <Checkbox label='2 ночи' />
          <Checkbox label='3 ночи' />
          <Checkbox label='4 ночи' />
        </div>
      ),
    },
  ];
  const typeList = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: (
        <div className='w-full flex flex-col'>
          <Checkbox label='Экотуры' />
          <Checkbox label='Дневные' />
          <Checkbox label='Вечерние' />
        </div>
      ),
    },
  ];
  const ratingList = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: (
        <div className='w-full flex flex-col'>
          <Checkbox label='Превосходно: 9+' />
          <Checkbox label='Очень хорошо: 8+' />
          <Checkbox label='Хорошо: 7+' />
          <Checkbox label='Достаточно хорошо: 6+' />
        </div>
      ),
    },
  ];

  return (
    <div className='col-span-4 bg-natural-700 rounded-[20px] h-fit flex flex-col gap-10 px-5 relative'>
      <h3 className='font-protoGrotesk text-pc-h3 font-normal mt-5'>Фильтры</h3>
      <Accordion title='Выбранные' data={[]} />
      <Accordion title='Популярное' data={pupularList} />
      <Accordion title='Категория отеля' data={[]} />
      <Accordion title='Особенности' data={featureList} />
      <Accordion title='Для кого' data={whomList} />
      <Accordion title='Продолжительность' data={durationList} />
      <Accordion title='Тип' data={typeList} />
      <Accordion title='Бюджет' data={[]} />
      <Accordion title='Рейтинг' data={ratingList} />
      <div className='grid grid-cols-2 gap-3 py-6'>
        <Button type='secondary'>Сбросить все</Button>
        <Button>Применить</Button>
      </div>
    </div>
  );
};

export default Filter;
