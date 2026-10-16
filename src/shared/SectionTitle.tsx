"use client";
import { motion } from "motion/react";
import Title from "./Title";

// Sticky ghost title shared by every content section
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <motion.div
    className="w-[85%] md:w-[80%] mb-4 sticky top-0 bg-background/80 backdrop-blur-sm z-1"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="sr-only">{title}</h2>
    <Title title={title} />
  </motion.div>
);

export default SectionTitle;
