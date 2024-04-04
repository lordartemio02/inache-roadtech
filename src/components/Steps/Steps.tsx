import { FC, useMemo } from 'react';

import Step from './Step';

interface ISteps {
  current: number;
  total: number;
}

const Steps: FC<ISteps> = ({ current, total }) => {
  const listSteps = useMemo(() => {
    const list = [];

    for (let index = 1; index <= total; index++) {
      list.push(index === current);
    }

    return list;
  }, [current, total]);

  return (
    <div className='flex flex-col gap-1'>
      <div className='text-[20px] leading-9 text-natural-100'>
        Вопрос <strong>{current}</strong> из <strong>{total}</strong>
      </div>
      <div className='flex items-center gap-2'>
        {listSteps.map((item, index) => (
          <Step key={index} isActive={item} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
