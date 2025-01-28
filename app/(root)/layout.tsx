import { FC, ReactNode } from "react";
import Header from "@/components/Header";

 const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="root-container">
        <Header />
      <div className="mx-auto mt-20 pb-20 max-w-7xl">{children}</div>
    </main>
  );
};


export default Layout;