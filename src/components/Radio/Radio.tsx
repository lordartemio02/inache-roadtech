import { FC, InputHTMLAttributes } from 'react';

interface IRadio extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Radio: FC<IRadio> = ({ label, id, className, ...props }) => {
  return (
    <div className='inline-flex items-center'>
      <label
        className='relative flex items-center p-1 rounded-full cursor-pointer'
        htmlFor={id}
      >
        <input
          {...props}
          type='radio'
          className={`before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none hover:border-yellow-100 active:border-yellow-100 rounded-full border-2 border-natural-400 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-yellow-100 checked:hover:border-yellow-200 checked:active:border-yellow-300 before:bg-yellow-100 active:before:opacity-30 hover:before:opacity-20 checked:hover:before:opacity-0 ${className}`}
          id={id}
        />
        <span className='absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-2 w-2'
            viewBox='0 0 16 16'
            fill='#CCA500'
          >
            <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
          </svg>
        </span>
      </label>
      <label
        className='mt-px font-light text-gray-700 cursor-pointer select-none ml-2'
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
