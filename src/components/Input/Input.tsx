import { FC, InputHTMLAttributes, useRef } from "react";

import { CloseIcon } from "../../assets/icons";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  onClearInput?: () => void;
  rightIcon?: JSX.Element;
}

const Input: FC<IInput> = ({
  className,
  id,
  label,
  error,
  value,
  disabled,
  rightIcon,
  onChange,
  onClearInput,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const classNameIsError = error ? "outline-2 outline-warning-100" : "";
  const classNameIsDisabled = disabled ? "bg-natural-600" : "";

  const handleClearInput = () => {
    if (ref.current && onClearInput) {
      ref.current.value = "";
      ref.current.focus();
      onClearInput();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          aria-hidden
          onClick={() => ref.current?.focus()}
          className="block text-p2 text-natural-100 mb-2">
          {label}
        </label>
      )}
      <div
        className={`overflow-hidden  hover:outline-2 rounded-12 outline outline-1 outline-natural-500 bg-white focus-within:outline-2 focus-within:outline-yellow-200 flex items-center ${classNameIsError} ${classNameIsDisabled}`}>
        <input
          {...props}
          ref={ref}
          id={id}
          onChange={onChange}
          disabled={disabled}
          className={`w-full rounded-12 pl-4 py-3 outline-none placeholder:text-base font-medium placeholder:text-natural-400`}
          value={value}
        />
        {value && (
          <div
            aria-hidden
            onClick={handleClearInput}
            className="p-3 cursor-pointer">
            <div
              className={`w-6 h-6 rounded-full bg-natural-600 flex justify-center items-center`}>
              <CloseIcon className="w-1/2 h-1/2 [&>path]:stroke-natural-100/50" />
            </div>
          </div>
        )}
        {!value && rightIcon && (
          <div className="mr-4 ml-2 flex justify-center items-center">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <div className="text-sm text-warning-100">{error}</div>}
    </div>
  );
};

export default Input;
