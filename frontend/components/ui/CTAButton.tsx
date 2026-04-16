import Link from "next/link";
import { Button } from "./button";

const CTAButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className={`mt-6`}>
      <Button
        size="lg"
        className="px-8 py-7 font-semibold text-lg shadow-lg shadow-primary/20 transition-all active:scale-95 duration-300"
      >
        {text}
      </Button>
    </Link>
  );
};

export default CTAButton;
