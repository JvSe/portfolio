"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const Nav = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-8">
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
