"use client";
import logo from "../../../../../public/chatQuickLogo.png";
import { UserButton } from "@clerk/nextjs";
import { useNavigation } from "../../../../../hooks/useNavigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme/themeToggle";

const DekstopNav = () => {
  const paths = useNavigation();
  return (
    <div className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-[80px] border-r-[1px] shadow-lg lg:px-2 lg:py-4">
      <nav>
        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-[40px] cursor-pointer" />
          </Link>
        </div>
        <ul className="flex flex-col items-center gap-4 py-5">
          {paths?.map((path, id) => {
            return (
              <li key={id} className="relative">
                <Link href={path.href}>
                  <TooltipProvider>
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
                  </TooltipProvider>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default DekstopNav;
