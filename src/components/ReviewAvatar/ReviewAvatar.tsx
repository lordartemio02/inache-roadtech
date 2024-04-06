import { FC } from "react";
import { ReviewAvatarProps } from "./ReviewAvatar.interfaces";

const ReviewAvatar: FC<ReviewAvatarProps> = (props) => {
  const { img, size = "w-8 h-8" } = props;

  return (
    <div className={`rounded-full border-2 border-white ${size}`}>
      <img src={img} alt="avatar" className="rounded-full" />
    </div>
  );
};

export default ReviewAvatar;
