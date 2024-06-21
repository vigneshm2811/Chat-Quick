import ChatIcon from "@/components/iconComponents/ChatIcon";
import Friendsicon from "@/components/iconComponents/Friendsicon";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathname = usePathname();

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <ChatIcon />,
        activeIcon: <ChatIcon stroke="white" />,
        active: pathname.startsWith("/conversations"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <Friendsicon />,
        activeIcon: <Friendsicon stroke="white" className="" />,
        active: pathname === "/friends",
      },
    ],
    [pathname]
  );
  return paths;
};
