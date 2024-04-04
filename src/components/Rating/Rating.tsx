import { ButtonHTMLAttributes, FC } from 'react';

interface IRating {
  total: string;
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
}

const Rating: FC<IRating> = ({ total, className }) => {
  return (
    <button
      className={`bg-system-success py-3 w-10 text-white text-bhs-xs rounded-[12px] font-medium ${className}`}
    >
      {total}
    </button>
  );
};

export default Rating;
