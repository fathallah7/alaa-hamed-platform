import NavActions from "./NavActions";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "@/components/ui/Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-100 w-full h-18 flex items-center justify-center backdrop-blur-md shadow-sm bg-zinc-100/80 border-b border-zinc-200">
      <div className="w-full max-w-[90%] md:max-w-10/12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex flex-row-reverse items-center gap-3">
            <div className="text-right">
              <h2 className="font-bold text-xl text-primary2">
                أكاديمية علاء حامد
              </h2>
              <p className="text-zinc-400 text-sm font-medium" dir="ltr">
                Alaa Hamed Academy
              </p>
            </div>
            {/* Logo */}
            <Logo />
          </div>
        </div>

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
