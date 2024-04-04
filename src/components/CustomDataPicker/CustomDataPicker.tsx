import { ru } from "date-fns/locale/ru"; // the locale you want
import moment from "moment";
import { FC } from "react";
import {
  default as DatePicker,
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";

registerLocale("ru", ru);

const CustomDataPicker: FC<ReactDatePickerProps<true, true>> = ({
  className,
  ...props
}) => {
  const startOfMonth = moment().startOf("month").toDate();
  // const years = range(1990, getYear(new Date()) + 1, 1);
  // const months = [
  //   'Январь',
  //   'Февраль',
  //   'Март',
  //   'Апрель',
  //   'Май',
  //   'Июнь',
  //   'Июль',
  //   'Август',
  //   'Сентябрь',
  //   'Октябрь',
  //   'Ноябрь',
  //   'Декабрь',
  // ];
  return (
    <DatePicker
      {...props}
      showIcon
      className={`w-full rounded-xl hover:outline-2 outline outline-natural-500 bg-white focus-within:outline-2 focus-within:outline-yellow-200 placeholder:text-base placeholder:font-medium placeholder:text-natural-100 !py-[13px] !pr-4 !pl-12 focus:outline-yellow-200 ${className}`}
      locale={"ru"}
      minDate={startOfMonth}
      calendarIconClassname="!pl-4 !py-3"
      wrapperClassName="w-full"
      icon={
        <div className="w-fit h-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11V9ZM3 22H2C2 22.5523 2.44772 23 3 23V22ZM21 22V23C21.5523 23 22 22.5523 22 22H21ZM21 4H22C22 3.44772 21.5523 3 21 3V4ZM3 4V3C2.44772 3 2 3.44772 2 4H3ZM17 2V1H15V2H17ZM15 6V7H17V6H15ZM9 2V1H7V2H9ZM7 6V7H9V6H7ZM21 9H3V11H21V9ZM3 5H21V3H3V5ZM20 10V22H22V10H20ZM21 21H3V23H21V21ZM4 22V4H2V22H4ZM15 2V6H17V2H15ZM7 2V6H9V2H7ZM20 4V10H22V4H20Z"
              fill="#747474"
            />
          </svg>
        </div>
      }
      // renderCustomHeader={({
      //   date,
      //   changeYear,
      //   changeMonth,
      //   decreaseMonth,
      //   increaseMonth,
      //   prevMonthButtonDisabled,
      //   nextMonthButtonDisabled,
      // }) => (
      //   <div className=''>
      //     <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      //       {'<'}
      //     </button>
      //     <select
      //       value={getYear(date)}
      //       onChange={({ target: { value } }) => changeYear(Number(value))}
      //     >
      //       {years.map((option) => (
      //         <option key={option} value={option}>
      //           {option}
      //         </option>
      //       ))}
      //     </select>

      //     <select
      //       value={months[getMonth(date)]}
      //       onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      //     >
      //       {months.map((option) => (
      //         <option key={option} value={option}>
      //           {option}
      //         </option>
      //       ))}
      //     </select>

      //     <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      //       {'>'}
      //     </button>
      //   </div>
      // )}
    />
  );
};

export default CustomDataPicker;
