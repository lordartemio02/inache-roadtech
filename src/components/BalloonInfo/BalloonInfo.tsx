import { IBalloonInfo } from "./BalloonInfo.interface";
import Button from "../Button";
import ButtonClose from "../ButtonClose";
import img from "../../assets/images/Diamond.png"

export const BalloonInfo = ({
  closeButtonId,
  title,
  imageSrc,
  description,
  buttonTitle,
  onClick,
}: IBalloonInfo) => {
  return (
    <div className="p-2.5 rounded-[20px] overflow-hidden bg-natural-800 flex flex-col h-auto w-[320px] gap-[12px]">
      <div className="flex justify-center align-center w-full h-[166px] relative">
        <ButtonClose
          className="absolute top-0 right-0"
          id={closeButtonId}
        />
        <img
          src={imageSrc}
          alt="img"
          className="w-[160px] h-[140px] object-cover items-center"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className='text-pc-subTitle font-suisseIntl font-normal text-center'>
          {title}
        </h1>

        <div className="flex text-center text-sm font-suisseIntl align-center justify-center font-normal leading-[22px]">
          {description}
        </div>
      </div>

      <div className="
        text-center items-center justify-center w-[300px] bg-[#FFF5CC] flex flex-col rounded-16 p-[8px] text-natural-100 text-sm shadow-[4px_0px_16px_0px_rgba(0, 0, 0, 0.25)]">
        Что можно посмотреть: <br/> Вы можете заметить уличных художников, рисующих красивые картинки на асфальте
      </div>

      <div className="
        text-center items-center justify-center w-[300px] bg-[#FFF] flex flex-raw rounded-16 p-[8px] text-natural-300 text-sm shadow-[4px_0px_16px_0px_rgba(0, 0, 0, 0.25)]">
        <img src={img} alt="Rosspass" />
        <div className="
          text-center items-center justify-center w-[300px] bg-[#FFF] flex flex-col rounded-16 p-[8px] text-natural-400 text-sm shadow-[4px_0px_16px_0px_rgba(0, 0, 0, 0.25)]">
          Найдена часть промокода
          <div className="text-sm">1 из 3 частей</div>
        </div>
      </div>

      <div className="flex text-center text-xsm font-suisseIntl align-center justify-center font-normal leading-[22px] text-[12px] text-natural-300">
        Следующая остановка - улица Баумана!
      </div>

      <div className="flex flex-row gap-3 w-full">
        <Button className="w-full" onClick={onClick}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};
