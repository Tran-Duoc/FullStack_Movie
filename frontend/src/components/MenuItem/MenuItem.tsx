import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  pathName: string;
};

const MenuItem: React.FC<Props> = ({ children, pathName }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(pathName)}
      className="flex w-full hover:bg-blue-400 duration-300 p-3 gap-3 rounded-xl items-center  "
    >
      {children}
    </li>
  );
};

export default MenuItem;
