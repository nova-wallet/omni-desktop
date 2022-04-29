/* eslint-disable react/require-default-props */
import { PropsWithChildren } from 'react';

const SizeClass = {
  sm: 'text-sm py-1 px-4',
  md: 'text-base py-2 px-6',
  lg: 'text-lg py-4 px-8',
};

type Props = {
  disabled?: boolean;
  submit?: boolean;
  onClick?: () => void;
  className?: string;
  size?: keyof typeof SizeClass;
};

const Button = ({
  disabled = false,
  submit = false,
  onClick,
  children,
  className = '',
  size = 'md',
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={`
        bg-black hover:bg-gray-800
        rounded-lg text-white
        text-center text-base shadow-md
        flex justify-center items-center
        ${disabled ? ' opacity-70 cursor-not-allowed' : ''}
        ${SizeClass[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
export default Button;
