import { IBalloonInfo } from "./BalloonInfo.interface";
import Button from "../Button";
import ButtonClose from "../ButtonClose";

export const BalloonInfo = ({
  closeButtonId,
  title,
  imageSrc,
  description,
  buttonTitle,
  onClick,
}: IBalloonInfo) => {
  return (
    <div className="p-2.5 rounded-[20px] overflow-hidden bg-natural-800 flex flex-col h-auto w-[320px]">
      <div className="flex align-center w-full h-[166px] relative">
        <ButtonClose
          className="absolute top-0 right-0"
          id={closeButtonId}
        />
        <img
          src={imageSrc}
          alt="img"
          className="w-[140px] h-[140px] object-cover"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className='text-pc-subTitle font-suisseIntl font-normal '>
          {title}
        </h1>

        <p className="text-sm font-suisseIntl font-normal leading-[22px]">
          {description}
        </p>
      </div>

      <div className="flex flex-row gap-3 w-full">
        <Button className="w-full" onClick={onClick}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};
