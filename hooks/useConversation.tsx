import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    return params ? params["conversation-id"] : "";
  }, [params]);

  const isActive = useMemo(() => !!conversationId, [conversationId]);

  return {
    isActive,
    conversationId,
  };
};
