import SidebarWrapper from "@/components/shared/Sidebar/SidebarWrapper";
import React from "react";

type Props = React.PropsWithChildren<{}>;

const layout = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default layout;
