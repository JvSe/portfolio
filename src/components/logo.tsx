import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <h1 className={cn("text-4xl font-semibold", className)}>
        JvSen<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};
