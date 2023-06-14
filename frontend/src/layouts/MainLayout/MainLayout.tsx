import React from "react";
import Header from "../../components/Header/Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-5 md:px-10">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
