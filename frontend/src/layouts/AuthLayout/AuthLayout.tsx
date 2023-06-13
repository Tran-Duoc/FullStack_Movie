import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import ToggleDarkMode from "../../components/ToggleDarkMode/ToggleDarkMode";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-white  dark:bg-slate-900 relative flex items-center justify-center flex-col">
      <div className=" py-5 fixed top-0 left-0 right-0 ">
        <div className="max-w-8xl mx-auto w-full px-5  md:px-10  lg:px-0   ">
          <div className="flex items-center justify-between">
            <Logo />
            <ToggleDarkMode />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
