import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ content, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
