import { FC } from "react";
import { CircleImageProps } from "./CircleImage.interfaces";

const CircleImage: FC<CircleImageProps> = (props) => {
  const { img, size = "w-8 h-8" } = props;

  return (
    <div className={`rounded-full border-2 border-white`}>
      <img
        src={img}
        alt="avatar"
        className={`rounded-full ${size} object-cover`}
      />
    </div>
  );
};

export default CircleImage;
