import { FC } from "react";
import ReviewAvatar from "../ReviewAvatar";
import { ReviewsCardProps } from "./ReviewsCard.interfaces";

const ReviewsCard: FC<ReviewsCardProps> = ({ reviewsImages }) => {
  return (
    <div className="flex flex-row gap-10">
      {reviewsImages.slice(0, 4).map((item, index) => (
        <ReviewAvatar key={`reviewsCard-${index}`} img={item} />
      ))}
      <p className="max-w-[218px] text-white text-mobile-subTitle">
        {reviewsImages.length} отзывов пользователей о данном маршруте
      </p>
    </div>
  );
};

export default ReviewsCard;
