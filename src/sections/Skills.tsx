"use client";
import { motion } from "motion/react";
import SectionTitle from "@/shared/SectionTitle";
import Chip from "@/shared/Chip";
import { fadeUp, inView, stagger } from "@/lib/motion";

interface SkillGroupProps {
  label: string;
  items: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ label, items }) => (
  <motion.div
    className="flex flex-col gap-3"
    variants={stagger(0.03)}
    initial="hidden"
    whileInView="show"
    viewport={inView}
  >
    <motion.h3 variants={fadeUp} className="text-lg md:text-xl font-semibold">
      {label}
    </motion.h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <motion.span key={item} variants={fadeUp}>
          <Chip>{item}</Chip>
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const skillGroups: SkillGroupProps[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "TanStack", "Mantine", "UI/UX (Figma)"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Laravel", "Django", "Python", "REST APIs", "Microservices"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Large-scale data migration"],
  },
  {
    label: "Systems & scripting",
    items: ["Linux", "Bash / Batch scripting"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "GitLab", "Claude"],
  },
  {
    label: "Ways of working",
    items: [
      "Requirements analysis",
      "Software documentation",
      "Testing",
      "End-user support",
      "Clear communication",
      "Adaptability",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full pt-16 pb-24" id="skills">
      <SectionTitle title="skills" />

      <div className="w-[85%] md:w-[80%] z-2 grid md:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
