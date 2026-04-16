"use client"; // Required for Framer Motion

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import sectionBg from "@/public/textures.jpg";
import { motion, Variants } from "framer-motion";
import { containerVariants, itemVariants } from "@/types/framerTypes";

const stats = [
  { label: "طالب وطالبة", value: "1M+" },
  { label: "دورة دينية", value: "60+" },
  { label: "درس تعليمي", value: "1000+" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-72px)] py-8 md:py-0 p-4 flex flex-col items-center w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={sectionBg}
          alt="Arabic texture background"
          fill
          priority
          className="object-cover brightness-90"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container relative z-10 w-11/12 md:w-10/12 h-full min-h-[calc(100vh-72px)] grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
      >
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6 text-right order-1">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl text-primary2 font-bold tracking-tight"
          >
            أكاديمية علاء حامد
          </motion.h2>

          <motion.h4
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold bg-linear-to-l from-primary to-brand-light/20 bg-clip-text text-transparent py-1"
          >
            دليلك لبناء شخصية المسلم
          </motion.h4>

          <motion.p
            variants={itemVariants}
            className="leading-[1.8] text-lg text-zinc-800 max-w-2xl"
          >
            انطلق في رحلةٍ إيمانيةٍ شاملة لبناء الشخصية المسلمة الواعية، عبر 7
            مسارات تخصصية تجمعُ بين تزكية النفس، وتدبر القرآن، وأصول العلم
            الشرعي.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Link href="/start">
              <Button
                size="lg"
                className="px-8 py-7 font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
              >
                ابدأ رحلتك الآن
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-end items-center gap-10 mt-2 px-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-0">
                <span className="text-4xl text-primary font-semibold">
                  {stat.value}
                </span>
                <span className="text-md text-zinc-700">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-1 md:col-span-2 flex justify-center order-2"
        >
          <div className="w-full aspect-square max-w-md bg-zinc-200/50 rounded-2xl border border-zinc-300/50 backdrop-blur-sm shadow-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
