"use client";
import { motion } from "motion/react";
import Title from "../shared/Title";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  bullets,
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
        <ul className="w-[95%] lg:w-[80%] flex flex-col gap-2 mt-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-current shrink-0" />
              <p className="text-justify md:text-start">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
    {
      role: "Computer Programmer II",
      company: "Department of Social Welfare and Development",
      period: "Feb 2026 – Present",
      bullets: [
        "Developed a vehicle booking module with status tracking, dispatching, notifications, and reports; provided post-deployment support and gathered user feedback.",
        "Initiated an inventory system by conducting requirement analysis through review of SOPs, existing reports, and databases.",
      ],
    },
    {
      role: "Junior Python Developer",
      company: "Freelance · Part-time",
      period: "Nov 2024 – Jun 2025",
      bullets: [
        "Contributed to a social media platform by resolving UI bugs and implementing a user suspension feature as a safer alternative to account deletion.",
      ],
    },
    {
      role: "Computer Programmer",
      company: "Bicol Regional Hospital and Medical Center",
      period: "Oct 2023 – Feb 2026",
      bullets: [
        "Built and maintained multiple systems including a Cancer Registry UI, a Telehealth teleconsultation platform with scheduling, and an inventory system with large-scale data migration and improved reporting.",
        "Developed a document management system from scratch for centralized access and version tracking; automated recurring tasks via bash/batch scripts.",
      ],
    },
  ];

  return (
    <section
      className="flex flex-col items-center w-full min-h-screen mb-50 text-center md:text-start"
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
