"use client";
import logo from "../../../../../public/chatQuickLogo.png";
import { UserButton } from "@clerk/nextjs";
import { useNavigation } from "../../../../../hooks/useNavigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useConversation } from "../../../../../hooks/useConversation";
import { ThemeToggle } from "@/components/ui/theme/themeToggle";

const MobileNav = () => {
  const paths = useNavigation();
  // const isActive = false;
  const { isActive } = useConversation();
  console.log("active main 2", isActive);
  if (isActive) return null;
  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden shadow-lg">
      <nav className="w-full">
        <ul className="flex items-center justify-evenly gap-4 py-5">
          <li className="">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="w-[40px] cursor-pointer"
              />
            </Link>
          </li>
          {paths?.map((path, id) => {
            return (
              <li key={id} className="relative">
                <Link href={path.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant={path?.active ? "default" : "outline"}>
                        {path?.active ? path?.activeIcon : path?.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{path?.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
          <li className="flex flex-col items-center gap-4">
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
