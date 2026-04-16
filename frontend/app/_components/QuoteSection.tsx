"use client";

import ArabicTexture from "@/components/ui/ArabicTexture";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section
      id="quote"
      className="relative min-h-100 w-full flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ArabicTexture />
        {/* Subtle radial gradient to focus the center */}
        <div className="absolute inset-0 bg-radial-at-c from-transparent to-white" />
      </div>

      {/* Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl w-full p-12 backdrop-blur-md bg-white/10  rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] flex flex-col items-center gap-6"
      >
        {/* Decorative Quote Icon */}
        <Quote className="text-primary/40 w-32 h-16 rotate-180" />

        <blockquote className="text-3xl z-10 md:text-5xl font-bold text-center text-primary2 leading-[1.6] md:leading-[1.4]">
          إذا استطعت أن لا يسبقك إلى الله أحدٌ فافعل.
        </blockquote>

        <div className="h-1 w-32 bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default QuoteSection;
