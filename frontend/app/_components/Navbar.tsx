import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import NavActions from "./NavActions";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full h-18 flex items-center justify-center backdrop-blur-md bg-zinc-100/80 border-b border-zinc-200">
      <div className="w-full max-w-[90%] md:max-w-10/12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Alaa Hamed Academy Logo"
            width={64}
            height={64}
            priority
            className="w-auto h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end">
          <NavActions />
        </div>

        {/* Mobile Navigation*/}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="p-2 cursor-pointer hover:bg-zinc-200 rounded-md transition-colors duration-300">
              <Menu className="h-6 w-6 text-primary" />
            </SheetTrigger>
            <SheetContent side="right" className="w-75 bg-zinc-100 p-6">
              <SheetTitle className="text-right mt-8">القائمة</SheetTitle>
              <div className="flex flex-col gap-6 mt-10">
                <NavActions isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
