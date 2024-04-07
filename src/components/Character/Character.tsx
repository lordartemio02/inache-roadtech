import { useState } from "react";
import img from "../../assets/images/e.png";

const enum Contents {
  first = "Привет! Отправимся вместе исследовать удивительный город Казань!",
  second = "Мы пришли на место! Нажми на пин для подсказки",
}

const Character = () => {
  const [activeContent, setActiveContent] = useState(Contents.first);

  const onClick = () => {
    setActiveContent(
      activeContent === Contents.first ? Contents.second : Contents.first
    );
  };

  return (
    <div className="absolute flex items-center flex-row z-[3] top-[80px] h-[112px]">
      <img
        className="inline-block size-[98px] z-[4]"
        src={img}
        alt="Character"
        onClick={onClick}
      />

      <div
        className="
        w-[226px] bg-natural-800 flex flex-col rounded-16 p-[8px] text-natural-100 text-sm shadow-[4px_0px_16px_0px_rgba(0, 0, 0, 0.25)]
      ">
        {activeContent}
      </div>
    </div>
  );
};

export default Character;
