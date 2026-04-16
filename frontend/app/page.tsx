import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import sectionBg from "@/public/textures.jpg";

const Page = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-72px)] py-8 md:py-0 p-4 flex flex-col items-center w-full overflow-hidden"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={sectionBg}
          alt="Arabic texture background"
          fill
          priority
          className="object-cover brightness-95"
        />
      </div>

      <div className="container relative z-10 w-11/12 md:w-10/12 h-full min-h-[calc(100vh-72px)] grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Hero content */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6 text-right order-1 md:order-1">
          <h2 className="text-4xl md:text-6xl text-primary2 font-bold tracking-tight">
            أكاديمية علاء حامد
          </h2>

          <h4 className="text-2xl md:text-3xl font-semibold bg-linear-to-l from-primary to-brand-light/20 bg-clip-text text-transparent py-1">
            دليلك لبناء شخصية المسلم
          </h4>

          <p className="leading-[1.8] text-lg text-zinc-800 max-w-2xl">
            انطلق في رحلةٍ إيمانيةٍ شاملة لبناء الشخصية المسلمة الواعية، عبر 7
            مسارات تخصصية تجمعُ بين تزكية النفس، وتدبر القرآن، وأصول العلم
            الشرعي.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/start">
              <Button
                size="lg"
                className="px-8 py-7 font-bold text-lg shadow-lg shadow-primary/20 "
              >
                ابدأ رحلتك الآن
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual Element / Placeholder */}
        <div className="col-span-1 md:col-span-2 flex justify-center order-2">
          <div className="w-full aspect-square max-w-md bg-zinc-200/50 rounded-2xl border border-zinc-300/50 backdrop-blur-sm shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Page;
