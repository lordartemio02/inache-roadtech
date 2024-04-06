import { FC, useState } from "react";
import { AdvantageIcon } from "../../assets/icons";
import { tags } from "../../mock/tagsList";

import Button from "../Button";
import CarouselKit from "../CarouselKit";
import LikeButton from "../LikeButton";
import { CardRoadProps } from "./CardRoad.interface";

const types = ["Пеший", "Велосипедный", "Автомобильный"];

const CardRoad: FC<CardRoadProps> = (props) => {
  const [indexDay, setIndexDay] = useState(0);

  const { title, images, rating, onClick, onLike, isLike } = props;

  return (
    <div className="rounded-[20px] overflow-hidden flex flex-col h-full">
      <div className="h-60 w-full relative">
        {/* <Rating total={rating} className="absolute top-2 left-2 z-10" /> */}
        <CarouselKit images={images} />
        <LikeButton
          className="absolute top-4 right-4 z-10"
          onClick={onLike}
          isActive={isLike}
        />
        <div className="absolute bottom-2 right-2 rounded-8 px-2 py-[6px] bg-[#68CC58]">
          <p className="text-natural-100">Бесплатный</p>
        </div>
      </div>
      <div className="mx-4 mt-4 pb-4 flex flex-col gap-[30px] h-full border-b">
        <div className="flex flex-col gap-2 flex-1 h-full">
          <div className="text-natural-100 text-[20px] leading-6 font-protoGrotesk line-clamp-2">
            {title}
          </div>
        </div>
        <div className="flex flex-row gap-3 w-full">
          <Button className="w-full" onClick={onClick}>
            Добавить
          </Button>
          <div className="w-12 h-12">
            <LikeButton
              className="w-12 h-12 flex items-center justify-center"
              isActive={false}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-mobile-subTitle mb-2">Особенно нравится</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <div className="flex flex-row gap-1 items-center justify-center bg-natural-700 px-[10px] py-1 rounded-8">
              <AdvantageIcon />
              <p>{tag.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-6 mt-4 mb-2">
          {types.map((_, i) => (
            <div
              className={`flex flex-row gap-6 pb-2 ${
                i === indexDay
                  ? "text-natural-100 border-b-2 border-b-yellow-100"
                  : "text-natural-400"
              }`}
              onClick={() => setIndexDay(i)}>{`${i} день`}</div>
          ))}
        </div>
        <div className="h-60 w-full relative">
          <CarouselKit singleSlide={false} images={images} />
        </div>
      </div>
    </div>
  );
};

export default CardRoad;
