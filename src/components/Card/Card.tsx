import { FC } from 'react';
import Carousel from 'react-multi-carousel';

import { BookIcon, CameraIcon, ClockIcon, MapPinIcon } from '../../assets/icons';
import Button from '../Button';
import LikeButton from '../LikeButton';
import Rating from '../Rating';
import { ICard } from './Card.interface';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 320 },
    items: 1,
  },
};

const Card: FC<ICard> = ({
  title,
  images,
  price,
  geo,
  time,
  type,
  location,
  rating,
  onClick,
  onLike,
  isLike,
}) => {
  return (
    <div className='rounded-[20px] overflow-hidden bg-natural-700 flex flex-col h-full'>
      <div className='h-60 w-full relative'>
        <Rating total={rating} className='absolute top-4 left-4 z-10' />

        <LikeButton
          className='absolute top-4 right-4 z-10'
          onClick={onLike}
          isActive={isLike}
        />

        <Carousel
          showDots={true}
          responsive={responsive}
          dotListClass='[&>.react-multi-carousel-dot_button]:bg-white/30 [&>.react-multi-carousel-dot_button]:border-none [&>.react-multi-carousel-dot--active_button]:!bg-white'
          arrows={false}
          className='w-full h-full z-0'
        >
          {images.map((item, index) => (
            <div key={index} className='w-full h-full'>
              <img src={item} alt='img' className='w-full h-full object-cover' />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='p-4 flex flex-col gap-[30px] h-full'>
        <div className='flex flex-col gap-2 flex-1 h-full'>
          <div className='text-natural-100 text-[20px] leading-6 font-protoGrotesk line-clamp-2'>
            {title}
          </div>
          <div className='flex flex-wrap gap-3'>
            <div className='flex gap-1 items-center text-body-p3'>
              <CameraIcon />
              {type}
            </div>
            <div className='flex gap-1 items-center text-body-p3'>
              <MapPinIcon />
              {geo}
            </div>
            <div className='flex gap-1 items-center text-body-p3'>
              <ClockIcon />
              {time}
            </div>
            <div className='flex gap-1 items-center text-body-p3'>
              <BookIcon />
              {location}
            </div>
          </div>
        </div>

        <Button subtitle='Купить билеты' onClick={onClick}>
          от {price} ₽
        </Button>
      </div>
    </div>
  );
};

export default Card;
