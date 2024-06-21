import ConversationFallback from "@/components/shared/Conversation/ConversationFallback";
import ItemList from "@/components/shared/itemsList/ItemList";
import React from "react";

type Props = {};

const FriendsPage = (props: Props) => {
  return (
    <div className="flex w-full">
      <ItemList title="Friends">Firend page</ItemList>

      <ConversationFallback />
    </div>
  );
};

export default FriendsPage;
