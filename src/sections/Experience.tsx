"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import SectionTitle from "@/shared/SectionTitle";
import Chip from "@/shared/Chip";
import { fadeUp, inView, stagger } from "@/lib/motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  type?: string;
  period: string;
  bullets: string[];
  stack: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  type,
  period,
  bullets,
  stack,
}) => (
  <motion.article
    className="relative pl-8 md:pl-12"
    variants={stagger(0.06)}
    initial="hidden"
    whileInView="show"
    viewport={inView}
  >
    {/* Timeline dot, fills with the accent once in view */}
    <span
      aria-hidden
      className="absolute left-0 top-2 -translate-x-1/2 size-3.5 rounded-full border-2 border-highlight bg-background flex items-center justify-center"
    >
      <motion.span
        className="size-full rounded-full bg-highlight"
        variants={{
          hidden: { scale: 0 },
          show: { scale: 1, transition: { duration: 0.4, delay: 0.2 } },
        }}
      />
    </span>

    <motion.div variants={fadeUp} className="flex flex-col gap-1">
      <p className="text-xs md:text-sm font-medium tracking-wide uppercase text-highlight-ink">
        {period}
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold">{role}</h3>
      <p className="text-muted-foreground">
        {company}
        {type && <span> · {type}</span>}
      </p>
    </motion.div>

    <ul className="flex flex-col gap-2.5 mt-4 max-w-3xl">
      {bullets.map((bullet, i) => (
        <motion.li key={i} variants={fadeUp} className="flex gap-3 items-start">
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
          <p className="leading-relaxed">{bullet}</p>
        </motion.li>
      ))}
    </ul>

    <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-4">
      {stack.map((tech) => (
        <Chip key={tech}>{tech}</Chip>
      ))}
    </motion.div>
  </motion.article>
);

const experiences: ExperienceItemProps[] = [
  {
    role: "Computer Programmer II",
    company: "Department of Social Welfare and Development",
    period: "Feb 2026 – Present",
    bullets: [
      "Designed and developed a vehicle booking module for an existing administrative system, with status tracking, dispatching, automated notifications, and reporting.",
      "Provided ongoing end-user support after deployment, acting on feedback to improve usability.",
      "Building a new asset inventory system that runs alongside a legacy system users reported as slow and unreliable, filling the functional gaps it doesn't cover while policy requires the legacy system to stay in use.",
    ],
    stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    role: "Computer Programmer",
    company: "Bicol Regional Hospital and Medical Center",
    period: "Oct 2023 – Feb 2026",
    bullets: [
      "Built a document management system from scratch, providing centralized document access and version tracking.",
      "Built the frontend for the Hospital-Based Cancer Registry: chemotherapy cycle monitoring, patient profiles, and printable forms.",
      "Maintained Telehealth, the hospital's teleconsultation platform, and developed a patient scheduling feature with automated email notifications.",
      "Migrated hundreds of thousands of inventory records across systems while preserving data integrity, and improved report customization and print styling.",
      "Automated recurring tasks such as database backups with bash (Linux) and batch (Windows) scripts.",
    ],
    stack: ["Laravel", "React", "MySQL", "Bash"],
  },
  {
    role: "Junior Python Developer",
    company: "Freelance",
    type: "Part-time",
    period: "Nov 2024 – Jun 2025",
    bullets: [
      "Contributed to the development and maintenance of a social media platform.",
      "Fixed UI bugs and styling inconsistencies to improve overall usability.",
      "Implemented user suspension as a safer alternative to account deletion.",
    ],
    stack: ["Python", "Django"],
  },
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      className="flex flex-col items-center w-full pt-16 pb-24"
      id="experience"
    >
      <SectionTitle title="experience" />

      <div ref={timelineRef} className="relative w-[85%] md:w-[80%] z-2 flex flex-col gap-16 md:gap-20">
        <div aria-hidden className="absolute left-0 top-2 bottom-0 w-px bg-border" />
        <motion.div
          aria-hidden
          className="absolute left-0 top-2 bottom-0 w-px bg-highlight origin-top"
          style={{ scaleY }}
        />
        {experiences.map((exp) => (
          <ExperienceItem key={exp.role} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
