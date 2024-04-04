import { FC, useMemo } from 'react';

import { IButton } from './Button.interface';

const Button: FC<IButton> = ({
  children,
  className,
  htmlType = 'submit',
  leftIcon,
  rightIcon,
  subtitle,
  type = 'primary',
  ...props
}) => {
  const typeButton = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300 disabled:bg-natural-600 disabled:!text-natural-400 disabled:cursor-not-allowed';

      case 'secondary':
        return 'bg-natural-600 hover:bg-natural-500 active:bg-natural-400 disabled:bg-natural-600 disabled:!text-natural-400 disabled:cursor-not-allowed';

      case 'secondary2':
        return 'bg-yellow-500 hover:bg-yellow-400 outline outline-transparent active:outline-yellow-200 disabled:bg-natural-600 disabled:!text-natural-400 disabled:cursor-not-allowed';

      case 'outline':
        return 'outline outline-natural-500 hover:bg-natural-700 hover:outline-none active:bg-natural-600 active:outline-none disabled:bg-natural-600 disabled:!text-natural-400 disabled:cursor-not-allowed disabled:outline-none';

      case 'outline-yellow':
        return 'outline outline-yellow-100 hover:bg-yellow-500 hover:outline-none active:outline-none active:bg-yellow-400 disabled:bg-natural-600 disabled:!text-natural-400 disabled:cursor-not-allowed disabled:outline-none';

      case 'thetriary':
        return 'bg-white hover:bg-yellow-500 active:bg-yellow-400 disabled:!text-natural-400 disabled:cursor-not-allowed disabled:bg-white';
    }
  }, [type]);

  const paddingIsSubtitle = subtitle ? 'py-1' : 'py-3';

  return (
    <button
      {...props}
      type={htmlType}
      className={`flex justify-center gap-2 transition-all items-center px-3 rounded-xl font-medium text-natural-100 ${paddingIsSubtitle} ${typeButton} ${className}`}
    >
      {leftIcon}
      <div className='flex flex-col'>
        <div className='text-bhs-l font-medium'>{children}</div>
        {subtitle && (
          <div className='text-bhs-xs font-medium text-natural-100/50'>{subtitle}</div>
        )}
      </div>
      {rightIcon}
    </button>
  );
};

export default Button;
