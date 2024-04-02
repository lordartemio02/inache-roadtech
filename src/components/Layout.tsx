import { ReactNode } from "react";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-full flex flex-col h-full min-h-screen">
        <div className="relative flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
