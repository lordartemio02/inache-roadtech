import { FC } from 'react';
import { Link } from 'react-router-dom';

import footerLogo from '/footerLogo.svg';

import { dzenIcon, okIcon, telegramIcon, vkIcon } from '../../assets/icons';

const Footer: FC = () => {
  return (
    <div className='bg-natural-100 text-white'>
      <div className='container'>
        <div className='pt-[80px] pb-[40px] flex justify-between'>
          <div className='flex gap-[88px] text'>
            <div className='flex flex-col gap-3'>
              <div className='text-white/50 text-body-p2'>Контакты</div>
              <a href='tel:88003006122' className='text-body-p1'>
                8 (800) 300-6-122
              </a>
              <a href='mailto:press@welcome.moscow' className='text-body-p1'>
                press@welcome.moscow
              </a>
            </div>
            <div className='flex flex-col gap-3'>
              <Link to={''} className='text-body-p2'>
                О проекте
              </Link>
              <Link to={''} className='text-body-p2'>
                Вход для партнеров
              </Link>
            </div>
          </div>
          <div className='flex gap-2 items-center h-fit'>
            <img src={vkIcon} alt='vkontakte' />
            <img src={dzenIcon} alt='dzen' />
            <img src={telegramIcon} alt='telegram' />
            <img src={okIcon} alt='okIcon' />
          </div>
        </div>
        <div className='py-6 flex justify-between border-t border-t-white/20'>
          <img src={footerLogo} alt='logo' />
          <div className='flex gap-8'>
            <Link className='text-body-p3' to={'/'}>
              Политика конфиденциальности
            </Link>
            <Link className='text-body-p3' to={'/'}>
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
