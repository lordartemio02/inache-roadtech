import { IBalloon } from "./Balloon.interface";
import Button from "../Button";
import LikeButton from "../LikeButton";
import Title from "../Title";
import ButtonClose from "../ButtonClose";

export const Balloon = ({
  closeButtonId,
  title,
  imageSrc,
  description,
  buttonTitle,
  onClick,
  onLike,
}: IBalloon) => {
  return (
    <div className="p-2.5 rounded-[20px] overflow-hidden bg-natural-700 flex flex-col h-auto w-[320px]">
      <div className="h-60 w-full">
        <div className="w-max-[320px] max-h-[203px] min-h-[166px]">
          <ButtonClose
            id={closeButtonId}
            onClick={() => {}}
          />

          <img
            src={imageSrc}
            alt="img"
            className="w-max-[320px] max-h-[203px] min-h-[166px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Title
          content={title}
        />

        <p className="text-body-p2 font-suisseIntl font-normal">
          {description}
        </p>
      </div>

      <div className="flex flex-row gap-3 w-full">
        <Button className="w-full" onClick={onClick}>
          {buttonTitle}
        </Button>

        <div className="w-12 h-12">
          <LikeButton
            className="w-12 h-12 flex items-center justify-center"
            isActive={true}
            onClick={onLike}
          />
        </div>
      </div>
    </div>
  );
};
