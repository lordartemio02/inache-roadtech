import { FC } from "react";
import mapBase from "../../assets/images/MapBase.png";
import { BannerProps } from "./Banner.interfaces";

const Banner: FC<BannerProps> = (props) => {
  const { desc, img, title } = props;

  return (
    <div
      className={`rounded-16 flex flex-row relative justify-between h-[100px]`}>
      <div className="flex flex-col p-4 gap-3 w-full relative z-[10]">
        <h4 className="text-mobile-h4">{title}</h4>
        <p className="text-body-p3">{desc}</p>
      </div>
      <div className="w-20 h-full z-[10]">
        <img alt="img" className="min-w-[90px] min-h-[90px]" src={img} />
      </div>
      <div className="absolute top-0 left-0 z-[1] right-0 bottom-0 w-full h-full rounded-16">
        <img
          src={mapBase}
          className={"rounded-16 h-[100px] w-full object-none"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
