import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Footer from "../../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 ">
      <div className="px-5 lg:px-10 fixed left-0 right-0 top-0 z-[1000] dark:bg-slate-900/80 bg-slate-50/10  ">
        <Header />
      </div>
      <div className="">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
