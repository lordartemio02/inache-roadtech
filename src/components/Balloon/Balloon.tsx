import { IBalloon } from "./Balloon.interface";
import Button from "../Button";
import LikeButton from "../LikeButton";
// import Title from "../Title";
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
    <div className="flex flex-col bg-white border shadow-sm rounded-xl">
      <ButtonClose
        id={closeButtonId}
      />
      <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt={imageSrc} />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-gray-500">
          {description}
        </p>
        <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          {buttonTitle}
        </a>

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
    </div>
  );
};

{/* <div className="p-2.5 rounded-[20px] overflow-hidden bg-natural-700 flex flex-col h-auto w-[320px]">
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
    </div> */}
