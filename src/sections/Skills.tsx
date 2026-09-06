"use client";
import { motion } from "motion/react";
import Title from "../shared/Title";

interface SkillGroupProps {
  label: string;
  items: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ label, items }) => (
  <motion.div
    className="flex xl:w-[80%] items-center pl-3 md:pl-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col gap-4">
      <p className="text-2xl md:text-4xl font-semibold">{label}</p>
      <div className="flex flex-wrap gap-3 w-[95%] lg:w-[80%]">
        {items.map((item) => (
          <span
            key={item}
            className="border border-border rounded-full px-4 py-1.5 text-sm md:text-base"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const skillGroups: SkillGroupProps[] = [
    {
      label: "Skills",
      items: [
        "Full Stack Web Development",
        "Relational Databases",
        "AI Tools",
        "REST API",
        "Version Control (Git)",
        "Software Documentation",
        "UI/UX",
        "Requirements Analysis",
        "Testing",
        "Automation",
      ],
    },
    {
      label: "Tech Stack",
      items: [
        "Laravel",
        "Nest.js",
        "TypeScript",
        "React",
        "MySQL",
        "Claude",
        "Git",
        "Python",
        "Linux",
        'Django',
        'Tanstack',
        'Mantine'
      ],
    },
  ];

  return (
    <section
      className="flex flex-col items-center w-full min-h-screen mb-50 text-center md:text-start"
      id="skills"
    >
      <motion.div
        className="w-[80%] mb-1 sticky top-0 bg-white/80 backdrop-blur-sm z-1"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title title="skills" />
      </motion.div>

      <div className="w-[80%] flex flex-col gap-16 pb-20 z-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
