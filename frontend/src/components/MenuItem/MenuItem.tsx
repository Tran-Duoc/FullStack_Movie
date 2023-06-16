import React from "react";

type Props = {
  children: React.ReactNode;
};

const MenuItem: React.FC<Props> = ({ children }) => {
  return (
    <li className="flex w-full hover:bg-blue-400 duration-300 p-3 gap-3 rounded-xl items-center  ">
      {children}
    </li>
  );
};

export default MenuItem;
