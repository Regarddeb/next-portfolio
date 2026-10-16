"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Images } from "lucide-react";
import SectionTitle from "@/shared/SectionTitle";
import Chip from "@/shared/Chip";
import ScreensDrawer from "@/shared/ScreensDrawer";
import projectsData, { ProjectData } from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import { fadeUp, inView, stagger } from "@/lib/motion";

const ProjectCard: React.FC<ProjectData> = ({
  title,
  affiliation,
  summary,
  highlights,
  stack,
  projectId,
  thumbnail,
  screens,
  link,
  linkLabel,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      data-project={projectId}
      className="group grid xl:grid-cols-2 gap-6 xl:gap-8 rounded-2xl border border-border bg-background/60 p-4 md:p-6 transition-colors hover:border-highlight/70"
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.button
        type="button"
        variants={fadeUp}
        onClick={() => setOpen(true)}
        aria-label={`View screenshots of ${title}`}
        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted cursor-pointer"
      >
        <Image
          src={thumbnail}
          alt=""
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 60vw, 90vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-end justify-start p-3 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium">
            <Images className="size-4" /> {screens.length} screenshots
          </span>
        </span>
      </motion.button>

      <div className="flex flex-col gap-4">
        <motion.div variants={fadeUp} className="flex flex-col gap-1">
          <p className="text-xs md:text-sm font-medium tracking-wide uppercase text-highlight-ink">
            {affiliation}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        </motion.div>

        <motion.p variants={fadeUp} className="leading-relaxed text-muted-foreground">
          {summary}
        </motion.p>

        <ul className="flex flex-col gap-2">
          {highlights.map((item) => (
            <motion.li key={item} variants={fadeUp} className="flex gap-3 items-start text-sm md:text-base">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-highlight shrink-0" />
              <p className="leading-relaxed">{item}</p>
            </motion.li>
          ))}
        </ul>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mt-auto pt-2">
          <Button className="cursor-pointer" onClick={() => setOpen(true)}>
            <Images /> View screenshots
          </Button>
          {Boolean(link) && (
            <Button asChild variant="link" className="group/link">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <span>{linkLabel ?? "Visit live site"}</span>
                <ArrowUpRight className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </Button>
          )}
        </motion.div>
      </div>

      <ScreensDrawer title={title} screens={screens} open={open} onOpenChange={setOpen} />
    </motion.article>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col items-center w-full pt-16 pb-24">
      <SectionTitle title="projects" />

      <div className="w-[85%] md:w-[80%] z-2 flex flex-col gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.projectId} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
