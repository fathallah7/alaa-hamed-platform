import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src={logo}
        alt="Alaa Hamed Academy Logo"
        width={64}
        height={64}
        priority
        className="w-auto h-16 object-contain"
      />
    </Link>
  );
};

export default Logo;
