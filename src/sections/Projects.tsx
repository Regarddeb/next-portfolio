"use client";
import Title from "../shared/Title";
import projectsData, { ProjectData } from "@/lib/projectsData";
import ScreensDrawer from "@/shared/ScreensDrawer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps extends ProjectData {}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  affiliation,
  description,
  projectId,
  screens,
  link,
}) => {
  return (
    <div className="flex items-center pl-3 md:pl-10" data-project={projectId}>
      <div className="flex flex-col gap-3">
        <p className="text-2xl md:text-4xl font-semibold">{title}</p>
        <div className="flex flex-col gap-5">
          <p className="text-lg">Affiliation: {affiliation}</p>
          <div className="w-[95%] md:w-[80%] relative">
            <p className="leading-relaxed">{description}</p>
          </div>

          <div className="flex gap-2">
            <ScreensDrawer title={title} screens={screens} />
            {Boolean(link) && (
              <Button
                asChild
                size="lg"
                variant="link"
                className="cursor-pointer group"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span>Visit Live Site</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center w-full">
      <div className="w-[80%] mb-2">
        <Title title="projects" />
      </div>

      <div className="w-[80%] flex flex-col gap-30 pb-20">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
