"use client";
import { useState, useCallback } from "react";
import Title from "../shared/Title";
import projectsData, { ProjectData, Screen } from "@/lib/projectsData";
import ImageViewer from "@/shared/ImageViewer";
import ScreensDrawer from "@/shared/ScreensDrawer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps extends ProjectData {
  openImageViewer: (screen: Screen) => void;
  isImageViewerOpen: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  affiliation,
  description,
  projectId,
  screens,
  link,
  openImageViewer,
  isImageViewerOpen,
}) => {
  return (
    <div className="flex items-center pl-10" data-project={projectId}>
      <div className="flex flex-col gap-3">
        <p className="text-4xl md:text-5xl font-semibold">{title}</p>
        <div className="flex flex-col gap-5">
          <p className="text-lg">Affiliation: {affiliation}</p>
          <div className="w-[80%] relative">
            <p className="leading-relaxed">{description}</p>
          </div>

          <div className="flex gap-2">
            <ScreensDrawer
              title={title}
              screens={screens}
              openImageViewer={openImageViewer}
              isImageViewerOpen={isImageViewerOpen} // <- pass down
            />
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
  const [selectedImage, setSelectedImage] = useState<
    { url: string; title: string } | undefined
  >();
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const openImageViewer = useCallback((screen: Screen) => {
    setSelectedImage({ url: screen.url, title: screen.title });
    setIsImageViewerOpen(true);
  }, []);

  const closeImageViewer = useCallback(() => {
    setIsImageViewerOpen(false);
    setTimeout(() => setSelectedImage(undefined), 150);
  }, []);

  return (
    <div id="projects" className="flex flex-col items-center w-full">
      <div className="w-[80%] mb-2">
        <Title title="projects" />
      </div>

      <div className="w-[80%] flex flex-col gap-30 pb-20">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            openImageViewer={openImageViewer}
            isImageViewerOpen={isImageViewerOpen} // <- pass down
          />
        ))}
      </div>

      <ImageViewer
        imageData={selectedImage}
        onClose={closeImageViewer}
        isImageViewerOpen={isImageViewerOpen}
      />
    </div>
  );
};

export default Projects;
