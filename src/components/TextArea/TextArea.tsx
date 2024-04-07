import { FC } from 'react';

import { ITextArea } from './TextArea.interface';

const TextArea: FC<ITextArea> = ({ className, label, id, ...props }) => {
  return (
    <label htmlFor={id}>
      {label && (
        <div className='text-body-p2 font-normal text-natural-400 mb-2'>{label}</div>
      )}
      <textarea
        {...props}
        id={id}
        className={`px-4 py-3 w-full placeholder:text-base font-medium placeholder:text-natural-400 hover:outline-2 outline outline-natural-500 bg-white focus:outline-2 focus:outline-yellow-200 flex items-center rounded-xl resize-none ${className}`}
      />
    </label>
  );
};

export default TextArea;
