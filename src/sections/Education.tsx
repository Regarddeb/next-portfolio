"use client";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import SectionTitle from "@/shared/SectionTitle";
import { fadeUp, inView } from "@/lib/motion";

const Education: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full pt-16 pb-24" id="education">
      <SectionTitle title="education" />

      <motion.div
        className="w-[85%] md:w-[80%] z-2 flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-5 md:p-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-highlight text-highlight-foreground">
          <GraduationCap className="size-5" />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-xs md:text-sm font-medium tracking-wide uppercase text-highlight-ink">
            Aug 2019 – Jul 2023
          </p>
          <h3 className="text-xl md:text-2xl font-semibold">BS Information Technology</h3>
          <p className="text-muted-foreground">Bicol University, College of Science</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
