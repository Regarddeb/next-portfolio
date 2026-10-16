"use client";
import { motion } from "motion/react";
import { FileText, Mail } from "lucide-react";
import Title from "../shared/Title";
import Chip from "@/shared/Chip";
import Magnetic from "@/shared/Magnetic";
import { GithubIcon, LinkedinIcon } from "@/shared/BrandIcons";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/motion";
import { links } from "@/lib/links";
import { scrollToSection } from "@/lib/sections";

const keyStack = ["React", "TypeScript", "NestJS", "Laravel", "PostgreSQL", "MySQL"];

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center w-full overflow-hidden"
      id="whoami"
    >
      <div aria-hidden className="absolute inset-0 bg-dots" />

      <motion.div
        className="relative w-[85%] md:w-[80%] flex flex-col items-start gap-6 py-24"
        variants={stagger(0.1, 0.2)}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="self-center lg:-mb-14">
          <Title title="whoami" />
        </motion.div>

        <motion.div variants={fadeUp} className="relative flex flex-col gap-2">
          <h1 className="font-playfair text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tight">
            Humphrey Uno
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            <span className="relative inline-block isolate">
              Full Stack Web Developer
              <motion.span
                aria-hidden
                className="absolute left-0 right-0 bottom-0.5 h-2.5 -z-10 bg-highlight/70 origin-left rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              />
            </span>
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          3+ years designing, building, and maintaining production web
          applications for government and healthcare. I turn real-world
          processes into working software and own projects end to end, from
          requirements to deployment and support.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg" className="rounded-full">
              <a href={links.resume} target="_blank" rel="noopener noreferrer">
                <FileText /> View resume
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full cursor-pointer hover:border-highlight"
              onClick={() => scrollToSection("contact")}
            >
              <Mail /> Contact me
            </Button>
          </Magnetic>
          <div className="flex items-center gap-1">
            <Button asChild size="icon" variant="ghost" className="rounded-full">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="size-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="rounded-full">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="size-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {keyStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
