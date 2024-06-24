import ConversationFallback from "@/components/shared/Conversation/ConversationFallback";
import ItemList from "@/components/shared/itemsList/ItemList";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";

type Props = {};

const FriendsPage = (props: Props) => {
  return (
    <div className="flex w-full">
      <ItemList title="Friends" action={<AddFriendDialog />}>
        Firend page
      </ItemList>

      <ConversationFallback />
    </div>
  );
};

export default FriendsPage;
