"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Nav } from ".";
import { Logo } from "../logo";

export const MobileNav = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-around">
        <div className="mt-10 text-center text-2xl">
          <Logo />
        </div>
        <Nav className="flex-col mt-auto mb-auto text-center w-min self-center" />
      </SheetContent>
    </Sheet>
  );
};
