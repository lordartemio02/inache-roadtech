import { FC, InputHTMLAttributes } from 'react';

interface IRadio extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const Checkbox: FC<IRadio> = ({ label, id, className, ...props }) => {
  return (
    <div className='inline-flex items-center'>
      <label
        className='relative flex items-center p-1 rounded-[4px] cursor-pointer'
        htmlFor={id}
      >
        <input
          {...props}
          type='checkbox'
          className={`before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none hover:border-yellow-100 active:border-yellow-100 rounded-[4px] border-2 border-natural-400 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-yellow-100 checked:hover:border-yellow-200 checked:active:border-yellow-300 before:bg-yellow-100 active:before:opacity-30 hover:before:opacity-20 checked:hover:before:opacity-0 ${className}`}
          id={id}
        />
        <span className='absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_619_143829)'>
              <rect width='16' height='16' rx='4' fill='#E6B900' />
              <mask
                id='mask0_619_143829'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='16'
                height='16'
              >
                <rect width='16' height='16' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_619_143829)'>
                <path
                  d='M6.36641 12L2.56641 8.2L3.51641 7.25L6.36641 10.1L12.4831 3.98334L13.4331 4.93334L6.36641 12Z'
                  fill='#1D1D1D'
                />
              </g>
            </g>
            <defs>
              <clipPath id='clip0_619_143829'>
                <rect width='16' height='16' rx='4' fill='white' />
              </clipPath>
            </defs>
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

export default Checkbox;
