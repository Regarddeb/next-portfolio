"use client";
import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] bg-highlight origin-left z-[70]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
