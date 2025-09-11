"use client";
import { motion } from "motion/react"
import Title from "../shared/Title";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  description,
}) => (
  <motion.div
    className="flex xl:w-[80%] items-center h-[30%] pl-3 md:pl-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="flex flex-col gap-3">
      <p className="text-2xl md:text-4xl font-semibold">{role}</p>
      <div className="flex flex-col gap-2">
        <p>{company}</p>
        <p>{period}</p>
        <div className="w-[95%] lg:w-[80%] relative">
          <p className="text-justify md:text-start">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Computer Programmer II",
      company: "Bicol Regional Hospital and Medical Center",
      period: "Sep 2024 – Present",
      description:
        "⚡ Maintains and enhances two hospital information systems. Contributed to the development of a cancer registry system.",
    },
    {
      role: "Junior Python Developer",
      company: "Freelance (Part-time)",
      period: "Nov 2024 – Jun 2025",
      description:
        "⚡ Improved frontend bugs and delivered full-stack features for a social media web app, including an account suspension module.",
    },
    {
      role: "Computer Programmer",
      company: "Bicol Regional Hospital and Medical Center",
      period: "Oct 2023 – Sep 2024",
      description:
        "⚡ Designed and deployed an internal document management system with a feature-rich file manager module used across hospital departments.",
    },
  ];

  return (
    <section
      className="flex flex-col items-center w-full min-h-[100vh] mb-50 text-center md:text-start"
      id="experience"
    >
      <motion.div
        className="w-[80%] mb-1 sticky top-0 bg-white/80 backdrop-blur-sm z-1"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title title="experience" />
      </motion.div>

      <div className="w-[80%] flex flex-col gap-30 pb-20 z-2">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
