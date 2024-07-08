import Link from "next/link";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { MobileNav } from "./nav/mobile-nav";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="py-9 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
