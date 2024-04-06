import { FC } from "react";

import Footer from "../Footer";
import Header from "../Header";
import { ILayout } from "./Layout.interface";

const Layout: FC<ILayout> = ({ children, hideHeader, hideFooter }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {hideHeader ? null : <Header />}
      <main className={`flex-1 ${hideHeader ? "" : "mt-[72px] pt-6"}`}>
        {children}
      </main>
      {hideFooter ? null : <Footer />}
    </div>
  );
};

export default Layout;
