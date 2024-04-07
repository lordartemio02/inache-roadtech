import { FC } from "react";
import { BannerProps } from "./Banner.interfaces";

const Banner: FC<BannerProps> = (props) => {
  const { desc, img, title } = props;

  return (
    <div
      className={`rounded-16 flex flex-row relative justify-between bg-banner`}>
      <div className="flex flex-col p-4 gap-3 w-full relative z-[10]">
        <h4 className="text-mobile-h4">{title}</h4>
        <p className="text-body-p3">{desc}</p>
      </div>
      <div className="w-20 h-full z-[10]">
        <img alt="img" className="min-w-[90px] min-h-[90px]" src={img} />
      </div>
    </div>
  );
};

export default Banner;
