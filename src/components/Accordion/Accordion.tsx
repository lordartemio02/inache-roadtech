import { FC, useState } from 'react';

interface AccordionItem {
  key: string;
  label: string;
  children: React.ReactNode;
}

interface IAccordion {
  title: string;
  data: AccordionItem[];
}

const Accordion: FC<IAccordion> = ({ data, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const classNameRotation = isOpen ? 'rotate-0' : 'rotate-180';

  return (
    <div className='flex flex-col w-full gap-8 text-natural-100'>
      <div
        aria-hidden
        onClick={triggerOpen}
        className='flex items-center justify-between cursor-pointer'
      >
        <div className='font-protoGrotesk text-pc-h4 font-normal'>{title}</div>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={classNameRotation}
        >
          <path
            d='M6 15.5L12 9.5L18 15.5'
            stroke='#1D1D1D'
            strokeWidth='2'
            strokeLinecap='square'
          />
        </svg>
      </div>
      {isOpen && (
        <div>
          {data.map((item) => (
            <div key={item.key}>{item.children}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
