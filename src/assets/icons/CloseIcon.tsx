import { FC } from "react";
import { IconProps } from "../../interfaces/Icon.interfaces";

const CloseIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      width="25"
      height="24"
      onClick={onClick}
      viewBox="0 0 25 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.2593 6L6.25928 18M6.25928 6L18.2593 18"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
