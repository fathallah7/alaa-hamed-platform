"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { containerVariants, itemVariants } from "@/types/framerTypes";
import { Book, BookOpen, ScrollText, SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";

const paths = [
  {
    title: "المسار التربوي",
    description: "بناء الشخصية المسلمة المتوازنة",
    icon: Book,
  },
  {
    title: "المسار القرآني",
    description: "تعلم وحفظ القرآن الكريم",
    icon: BookOpen,
  },
  {
    title: "العلوم الشرعية",
    description: "العلوم الشرعية والمعرفية",
    icon: SparklesIcon,
  },
  {
    title: "السيرة النبوية والصحابة",
    description: "سير الأنبياء والصحابة",
    icon: ScrollText,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className={`bg-muted py-16`}>
      <div className={`container p-12 space-y-4 mx-auto`}>
        {/* Section Heading */}
        <SectionHeading
          title="المسارات التعليمية"
          description="سبع مسارات متخصصة لبناء شخصية إسلامية متكاملة"
        />

        {/* Paths cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12`}
        >
          {/* Card Item */}
          {paths.map((path, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className="flex flex-col max-xl:items-center gap-5 bg-white border border-border rounded-2xl p-8  shadow-xl shadow-zinc-500/10 hover:shadow-2xl hover:shadow-zinc-500/25 hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`bg-primary rounded-xl w-16 h-16 flex items-center justify-center`}
              >
                <path.icon className={`stroke-muted`} size={30} />
              </div>
              <span className={`font-medium text-xl`}>{path.title}</span>
              <p className={`text-zinc-700 text-md`}>{path.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
