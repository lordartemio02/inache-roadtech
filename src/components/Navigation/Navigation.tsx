import { FC } from 'react';
import { Link } from 'react-router-dom';

import { navList } from './Navigation.config';

const Navigation: FC = () => {
  return (
    <div className='w-full py-8 border-t border-t-natural-600'>
      <div className='container flex gap-[72px]'>
        {navList.map((item) => (
          <div key={item.title} className='flex flex-col gap-4'>
            <div className='text-natural-400 text-2xl leading-7'>{item.title}</div>
            <div className='flex flex-col'>
              {item.list.map((el, elIndex) => (
                <Link
                  className='py-2 text-natural-100 text-p1 flex items-center gap-1'
                  key={`${el.path}_${elIndex}`}
                  to={el.path}
                >
                  {el?.img && el.img}
                  <span>{el.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
