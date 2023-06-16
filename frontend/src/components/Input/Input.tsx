import { useState } from "react";
import Eye from "../Icon/Aye/Aye";
import EyeSlash from "../Icon/EyeSlash/EyeSlash";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type OptionType = {
  eye: boolean;
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  options?: OptionType;
  rules?: RegisterOptions;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

const Input = ({
  className,
  name,
  type,
  placeholder,
  options,
  register,
  errorMessage,
  rules,
  ...rest
}: Props) => {
  const [toggleEye, setToggleEye] = useState<boolean>(false);
  const handleToggle = (): void => {
    setToggleEye((currentState) => !currentState);
  };
  const registerResult = name ? register(name, rules) : null;

  return (
    <div className={className}>
      <input
        type={toggleEye ? "text" : type}
        id={name}
        className="w-full rounded-xl border border-gray-200  p-3  outline-none focus:border-gray-700  focus:bg-slate-50 focus:shadow-sm  bg-slate-50 text-slate-950 font-normal"
        placeholder={placeholder}
        autoComplete="off"
        {...registerResult}
        {...rest}
      />
      {options?.eye &&
        (!toggleEye ? (
          <Eye
            className="absolute top-1/2 -translate-y-6 right-5"
            onClick={handleToggle}
          />
        ) : (
          <EyeSlash
            className="absolute top-1/2 -translate-y-6 right-5"
            onClick={handleToggle}
          />
        ))}

      <div className="mt-1 min-h-[1.25rem] text-sm text-red-600 ">
        {errorMessage}
      </div>
    </div>
  );
};

export default Input;
