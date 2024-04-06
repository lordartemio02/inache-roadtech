import { FC } from "react";

import { CloseIcon } from "../../assets/icons";

interface IButtonClose {
  onClick: () => void;
  className?: string;
  id: string;
}

const ButtonClose: FC<IButtonClose> = ({ onClick, className = "", id = "" }) => {
  return (
    <button id={id} onClick={onClick} className={`p-3 cursor-pointer ${className}`}>
      <div
        className={`w-6 h-6 rounded-full bg-natural-600 flex justify-center items-center`}>
        <CloseIcon className="w-1/2 h-1/2 [&>path]:stroke-natural-100/50" />
      </div>
    </button>
  );
};

export default ButtonClose;
