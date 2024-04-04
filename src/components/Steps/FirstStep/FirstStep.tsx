import { FC } from 'react';

import Radio from '../../Radio';
import { listTypeFirstTravel } from './FirstStep.config';

const FirstStep: FC = () => {
  return (
    <div className='flex gap-6'>
      {listTypeFirstTravel.map((item, index) => (
        <div key={index} className='flex flex-col gap-1'>
          <div className='w-full h-[220px] rounded-2xl overflow-hidden'>
            <img className='w-full h-full object-cover' src={item.img} alt='img' />
          </div>
          <Radio label={item.label} />
        </div>
      ))}
    </div>
  );
};

export default FirstStep;
