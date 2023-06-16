import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 ">
      <div className="px-5 lg:px-10">
        <Header />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
