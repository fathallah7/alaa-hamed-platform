import { containerVariants, itemVariants } from "@/types/framerTypes";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  description: string;
};

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-3 items-center justify-center`}
    >
      <motion.h4
        variants={itemVariants}
        className={`text-5xl font-semibold text-center text-primary2`}
      >
        {title}
      </motion.h4>
      <motion.p
        variants={itemVariants}
        className={`text-zinc-700 text-center text-xl`}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeading;
