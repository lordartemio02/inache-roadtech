import { FC } from "react";

import { HeartIcon } from "../../assets/icons";

interface ILikeButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const LikeButton: FC<ILikeButton> = ({
  className,
  onClick,
  isActive,
  ...props
}) => {
  const classNameHeartIcon = isActive ? "likeActive" : "likeInactive";

  return (
    <button
      {...props}
      onClick={onClick}
      className={`rounded-lg p-2 transition-all bg-natural-100/30  hover:bg-natural-100/20 active:bg-natural-100/50 ${className}`}>
      <HeartIcon
        className={`min-w-[24px] min-h-[24px] ${classNameHeartIcon}`}
      />
    </button>
  );
};

export default LikeButton;
