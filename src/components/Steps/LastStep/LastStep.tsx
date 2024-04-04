import { FC } from 'react';

import Radio from '../../Radio';
import { listTypeLastTravel } from './LastStep.config';

const LastStep: FC = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {listTypeLastTravel.map((item, index) => (
        <div key={index} className='text-natural-100 bg-natural-700 p-4 rounded-lg'>
          <Radio label={item.label} />
        </div>
      ))}
    </div>
  );
};

export default LastStep;
