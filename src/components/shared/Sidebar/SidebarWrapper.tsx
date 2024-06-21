import React from "react";
import DekstopNav from "./nav/DekstopNav";
import MobileNav from "./nav/MobileNav";

type Props = React.PropsWithChildren<{}>;

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-4 lg:gap-0 lg:p-0 p-4">
      <MobileNav />
      <DekstopNav />
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex">
        {children}
      </main>
    </div>
  );
};

export default SidebarWrapper;
