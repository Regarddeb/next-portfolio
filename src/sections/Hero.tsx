"use client";
import { motion } from "motion/react";
import Title from "../shared/Title";

const Hero: React.FC = () => {
  return (
    <section
      className="flex h-[100vh] flex-col items-center justify-center w-full"
      id="whoami"
    >
      <motion.div
        className="w-[80%] mb-0 lg:mb-[-30]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title title="whoami" />
      </motion.div>

      <motion.p
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center md:text-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        Humphrey Uno
      </motion.p>

      <motion.p
        className="text-justify max-w-2xl mt-6 px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Full stack developer with 3 years of experience in the field. Big fan of
        getting things done and getting straight to the point. Approaches
        problems with straightforward and effective solutions.
      </motion.p>
    </section>
  );
};

export default Hero;
