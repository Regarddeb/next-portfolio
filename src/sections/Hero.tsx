"use client";
import { motion } from "motion/react"
import Title from "../shared/Title";

const Hero: React.FC = () => {
  return (
    <section
      className="flex h-[100vh] flex-col items-center justify-center w-full"
      id="whoami"
    >
      <motion.div
        className="w-[80%] mb-15 md:mb-13 lg:mb-9"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title title="whoami" />
      </motion.div>

      <motion.div
        className="w-[90%] md:w-[80%] flex flex-col gap-30 pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="flex md:w-[80%] items-center h-[30%] pl-10">
          <div className="flex flex-col gap-3 w-[90%] md:w-[85%] xl:w-[80%]">
            <motion.p
              className="text-4xl md:text-5xl font-semibold text-center md:text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              Humphrey Uno
            </motion.p>
            <div className="flex flex-col gap-2">
              <motion.p
                className="text-justify md:text-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Full stack developer with 3 years of experience in the field.
                Big fan of getting things done and getting straight to the
                point. Approaches problems with straightforward and effective
                solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
