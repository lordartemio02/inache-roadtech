import { IMarker } from "./Marker.interface";
import Button from "../Button";
import LikeButton from "../LikeButton";
import Title from "../Title";
import ButtonClose from "../ButtonClose";

const prepareMarkerContent = (type: string) => {
  switch (type) {
    case value:
      
      break;
  
    default:
      break;
  }
};

export const Marker = ({
  id,
  imageSrc,
  type,
}: IMarker) => {
  return (
    <div className="p-2.5 rounded-[20px] overflow-hidden bg-natural-700 flex flex-col h-full">
      <div className="h-60 w-full">
        <div className="w-max-[288px] max-h-[203px] min-h-[166px]">
          <ButtonClose
            id={closeButtonId}
            onClick={() => {}}
          />

          <img
            src={imageSrc}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Title
          content={title}
        />

        <p className="text-[14px] font-suisseIntl font-normal leading-[22px]">
          {description}
        </p>
      </div>

      <div className="flex flex-raw gap-2">
        <Button subtitle={buttonTitle} onClick={onClick}>
          {buttonTitle}
        </Button>

        <LikeButton
          onClick={onLike}
          isActive={Boolean(isLike)}
        />
      </div>
    </div>
  );
};
