"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الدورات", href: "/courses" },
  { name: "تواصل معنا", href: "/contact" },
];

const NavActions = () => {
  const pathname = usePathname();
  return (
    <div className={`flex justify-end items-center gap-8 grow max-w-[60%]`}>
      <ul className={`flex gap-10 items-center font-medium grow text-primary`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="relative py-2">
              <Link
                href={link.href}
                className={cn(
                  "transition-all duration-300 hover:opacity-100",
                  isActive ? "opacity-100" : "opacity-70",
                )}
              >
                {link.name}
              </Link>

              {isActive && (
                <span className="absolute bottom-0 right-0 h-0.5 w-full bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </li>
          );
        })}
      </ul>

      <Button
        variant={"outline"}
        className={`p-6 py-5 text-md border-primary text-primary hover:[&_svg]:stroke-foreground hover:bg-primary/10 flex flex-row-reverse items-center gap-2`}
      >
        <LogIn
          className={`stroke-primary mb-0.5 transition-colors duration-300`}
        />
        <span>سجل الآن</span>
      </Button>
    </div>
  );
};

export default NavActions;
