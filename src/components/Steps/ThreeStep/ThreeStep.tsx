import { FC } from 'react';

import Radio from '../../Radio';
import { listTypeThreeTravel } from './ThreeStep.config';

const ThreeStep: FC = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {listTypeThreeTravel.map((item, index) => (
        <div key={index} className='text-natural-100 bg-natural-700 p-4 rounded-lg'>
          <Radio label={item.label} />
        </div>
      ))}
    </div>
  );
};

export default ThreeStep;
