"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

const CTASection = () => {
  return (
    <section id="cta" className={`w-full min-h-96 py-16`}>
      {/* CTA */}
      <div className="container max-w-5xl mx-auto px-4 py-12 text-center flex items-center justify-center bg-neutral-200/50 rounded-4xl relative overflow-hidden min-h-80">
        {/* Circles */}
        <div
          className={`bg-zinc-300/85 rounded-full absolute -top-18 -right-18 w-56 h-56 `}
        ></div>
        <div
          className={`bg-zinc-300/85 rounded-full absolute -bottom-18 -left-18 w-56 h-56 `}
        ></div>

        {/* CTA-Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative z-5 flex flex-col items-center gap-4`}
        >
          <h5 className={`font-bold text-5xl text-primary`}>
            هل أنت مستعد لبدء رحلتك التعليمية؟
          </h5>
          <p className={`text-xl font-normal`}>
            انضم إلى آلاف الطلاب واستفد من منهج تعليمي شامل ومتكامل
          </p>
          {/* FIXME: handle href later */}
          <CTAButton text="ابدأ الآن مجاناً" href="/" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
