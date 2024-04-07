import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdvantageIcon } from "../../assets/icons";
import map from "../../assets/images/Map.png";

import Button from "../Button";
import CarouselKit from "../CarouselKit";
import LikeButton from "../LikeButton";
import { CardRoadProps } from "./CardRoad.interface";

// const types = ["Пеший", "Велосипедный", "Автомобильный"];

const CardRoad: FC<CardRoadProps> = (props) => {
  const [indexDay, setIndexDay] = useState(0);
  const nav = useNavigate();

  const { onClick, title, points, caption, tags, days_count } = props;

  return (
    <div className="rounded-[20px] overflow-hidden flex flex-col h-full">
      <div className="h-60 w-full relative">
        {/* <Rating total={rating} className="absolute top-2 left-2 z-10" /> */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-t from-black/0 to-black/80 z-[70] rounded-16"></div>
        <div
          className="absolute top-3 left-3 z-[80] flex flex-row items-center gap-3"
          onClick={() => {
            nav("/story-location");
          }}>
          <div className="flex -space-x-2 relative">
            <img
              className="inline-block size-7 rounded-full ring-2 ring-white z-[4]"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-7 rounded-full ring-2 ring-white z-[3]"
              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <img
              className="inline-block size-7 rounded-full ring-2 ring-white z-[2]"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Image Description"
            />
          </div>
          <p className="max-w-[218px] text-white text-[12px]">
            {/* {images.length} отзывов пользователей о данном маршруте */}
          </p>
        </div>
        <CarouselKit points={points} />
        {/* <LikeButton
          className="absolute top-4 right-4 z-10"
          onClick={onLike}
          isActive={isLike}
        /> */}
        <div className="absolute bottom-2 right-2 rounded-8 px-2 py-[6px] bg-[#68CC58]">
          <p className="text-natural-100">{caption}</p>
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
          <LikeButton
            className="w-12 h-12 flex items-center justify-center"
            isActive={false}
          />
        </div>
      </div>
      <div className="p-4">
        <p className="text-mobile-subTitle mb-2">Особенно нравится</p>
        <div className="flex flex-wrap gap-1">
          {tags &&
            tags.length > 0 &&
            tags.map((tag, i) => (
              <div
                key={"tag" + i}
                className="flex flex-row gap-1 items-center justify-center bg-natural-700 px-[10px] py-1 rounded-8">
                <AdvantageIcon />
                <p>{tag}</p>
              </div>
            ))}
        </div>
        <div onClick={() => nav("/map")} className="my-5">
          <img className="w-[375px] h-[275px]" src={map} alt="map" />
        </div>
        <div className="flex flex-row gap-6 mt-4 mb-2">
          {Array(days_count)
            .fill("0")
            .map((_, i) => (
              <div
                key={i + "days"}
                className={`flex flex-row gap-6 pb-2 ${
                  i === indexDay
                    ? "text-natural-100 border-b-2 border-b-yellow-100"
                    : "text-natural-400"
                }`}
                onClick={() => setIndexDay(i)}>{`${i + 1} день`}</div>
            ))}
        </div>
        <div className="h-60 w-full relative">
          <CarouselKit
            singleSlide={false}
            points={points.filter((el) => el.day_number === indexDay + 1)}
            showLike
          />
        </div>
      </div>
    </div>
  );
};

export default CardRoad;
