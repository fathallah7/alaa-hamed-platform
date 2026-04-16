"use client";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { containerVariants, itemVariants } from "@/types/framerTypes";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedCourses = () => {
  return (
    <section id="about" className={`bg-white py-16`}>
      <div className={`container p-12 space-y-4 mx-auto`}>
        {/* Section Heading */}
        <SectionHeading
          title="الدورات المميزة"
          description="ابدأ رحلتك مع أفضل الدورات الدينية"
        />

        {/* Paths cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12`}
        >
          {/* TODO: when courses are implemented course Card  */}

          <motion.div
            variants={itemVariants}
            className=" bg-zinc-200/50 border border-zinc-300/50 backdrop-blur-sm shadow-xl h-96 rounded-xl p-8 text-center"
          >
            Placeholder card
          </motion.div>
          <motion.div
            variants={itemVariants}
            className=" bg-zinc-200/50 border border-zinc-300/50 backdrop-blur-sm shadow-xl h-96 rounded-xl p-8 text-center"
          >
            Placeholder card
          </motion.div>
          <motion.div
            variants={itemVariants}
            className=" bg-zinc-200/50 border border-zinc-300/50 backdrop-blur-sm shadow-xl h-96 rounded-xl p-8 text-center"
          >
            Placeholder card
          </motion.div>
        </motion.div>

        <Link href={"/courses"} className={`flex justify-center mt-12`}>
          <Button variant={"outline"} className={`p-4 py-6 `}>
            استكشف جميع الدورات
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCourses;
