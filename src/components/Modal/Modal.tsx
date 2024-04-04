import { FC } from 'react';

import ButtonClose from '../ButtonClose';

interface IModal {
  children: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
}

const Modal: FC<IModal> = ({ children, className, open, onClose, onOpen }) => {
  if (!open) {
    return null;
  }

  const handleClick = () => {
    if (open) return onOpen();
    return onClose();
  };

  return (
    <div
      aria-hidden
      className='z-[999] bg-natural-100/50 fixed top-0 left-0 w-full h-screen overflow-y-auto flex justify-center items-center'
    >
      <div className={`p-6 rounded-[20px] bg-white relative ${className}`}>
        <ButtonClose className='absolute right-0 top-0' onClick={handleClick} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
