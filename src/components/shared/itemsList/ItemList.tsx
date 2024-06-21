"use client";
import React from "react";
import { useConversation } from "../../../../hooks/useConversation";
import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

const ItemList = ({ children, title, action: Action }: Props) => {
  const { isActive } = useConversation();
  // const isActive = true;
  console.log("active main", isActive);
  return (
    <div
      className={cn(
        "h-full hidden w-full lg:flex-none lg:w-80 p-2 border-r-2 shadow-lg",
        {
          block: !isActive,
          "lg:block": isActive,
        }
      )}
      // className={`h-full  w-full lg:flex-col lg:w-80 p-2 border-r-2 shadow-lg ${isActive ? "hidden lg:block" : "block"}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {Action ? Action : null}
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start gap-2">
        {children}
      </div>
    </div>
  );
};

export default ItemList;
