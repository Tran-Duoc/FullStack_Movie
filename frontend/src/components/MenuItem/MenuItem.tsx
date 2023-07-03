import React from "react";
import { useNavigate } from "react-router-dom";
interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
  pathName: string;
}

const MenuItem: React.FC<Props> = ({ children, pathName, ...rest }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(pathName)}
      {...rest}
      className="flex items-center justify-start gap-5 dark:hover:bg-blue-700 py-3 pl-4 duration-300 rounded-lg hover:bg-cyan-700"
    >
      {children}
    </li>
  );
};

export default MenuItem;
