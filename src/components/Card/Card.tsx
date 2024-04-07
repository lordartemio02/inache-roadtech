import { FC } from "react";

import CarouselKit from "../CarouselKit";
import LikeButton from "../LikeButton";
import { ICard } from "./Card.interface";

const Card: FC<ICard> = ({ points, onLike, isLike, caption }) => {
  return (
    <div className="rounded-[20px] overflow-hidden bg-natural-700 flex flex-col h-full">
      <div className="h-60 w-full relative">
        {/* <Rating total={rating} className="absolute top-4 left-4 z-10" /> */}
        <CarouselKit points={points} />
        <LikeButton
          className="absolute top-4 right-4 z-10"
          onClick={onLike}
          isActive={isLike || false}
        />
      </div>
      <div className="p-4 flex flex-col gap-[30px] h-full">
        <div className="flex flex-col gap-2 flex-1 h-full">
          <div className="text-natural-100 text-[20px] leading-6 font-protoGrotesk line-clamp-2">
            {caption}
          </div>
          {/* <div className="flex flex-wrap gap-3">
            <div className="flex gap-1 items-center text-body-p3">
              <CameraIcon />
              {type}
            </div>
            <div className="flex gap-1 items-center text-body-p3">
              <MapPinIcon />
              {geo}
            </div>
            <div className="flex gap-1 items-center text-body-p3">
              <ClockIcon />
              {time}
            </div>
            <div className="flex gap-1 items-center text-body-p3">
              <BookIcon />
              {location}
            </div>
          </div> */}
        </div>

        {/* <Button subtitle="Купить билеты" onClick={onClick}>
          от {price} ₽
        </Button> */}
      </div>
    </div>
  );
};

export default Card;
