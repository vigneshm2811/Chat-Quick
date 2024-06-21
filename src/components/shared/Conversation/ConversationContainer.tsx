import React from "react";

type Props = React.PropsWithChildren<{}>;

const ConversationContainer = ({ children }: Props) => {
  return (
    <div className=" h-[clac(100svh-32px)] lg:h-full p-2 flex flex-col gap-2 w-full ">
      {children}
    </div>
  );
};

export default ConversationContainer;
