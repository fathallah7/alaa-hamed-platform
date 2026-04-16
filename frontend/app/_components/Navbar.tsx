import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <nav
      className={`w-full h-16 flex px-4 p-2 backdrop-blur-3xl bg-zinc-100 justify-center`}
    >
      <div className={` w-full max-w-10/12 flex justify-between items-center`}>
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Alaa Hamed Academy Logo"
            width={72}
            height={72}
            priority
          />
        </Link>
        {/* Nav items + log in */}
        <NavActions />
      </div>
    </nav>
  );
};

export default Navbar;
