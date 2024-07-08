"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./route";

export const Nav = ({ className }: { className?: string }) => {
  const path = usePathname();
  return (
    <nav className={cn("flex gap-8", className)}>
      {links.map((link, index) => (
        <Link
          key={`${link.name}-${index}`}
          href={link.path}
          data-active={link.path === path}
          className="data-[active=true]:text-accent data-[active=true]:border-b-2 data-[active=true]:border-accent capitalize font-medium hover:text-accent transition-all"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
