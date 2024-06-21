import ItemList from "@/components/shared/itemsList/ItemList";
import React from "react";

type Props = React.PropsWithChildren<{}>;

const ConversstionLayout = ({ children }: Props) => {
  return (
    <div className=" flex w-full">
      <ItemList title="Conversation">Conversation page</ItemList>
      {/* <div className="w-full"> </div> */}
      {children}
    </div>
  );
};

export default ConversstionLayout;
