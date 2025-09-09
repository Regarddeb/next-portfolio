"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Title from "./Title";
import { Screen } from "@/lib/projectsData";
import ImageViewer from "./ImageViewer";

interface ScreensDrawerProps {
  screens: Screen[];
  title: string;
}

const ScreensDrawer: React.FC<ScreensDrawerProps> = ({ title, screens }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  }>();
  const [openImageViewer, setOpenImageViewer] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <SheetTrigger asChild>
        <div className="inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-fit">
          View Project
        </div>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-[93%]">
        <SheetHeader>
          <SheetTitle className="sr-only">{title}</SheetTitle>
          <SheetDescription className="sr-only">
            Screenshots of {title}
          </SheetDescription>
        </SheetHeader>

        <div className="container mx-auto text-center flex flex-col items-center">
          <ImageViewer
            isImageViewerOpen={openImageViewer}
            imageData={selectedImage}
            onClose={() => {
              setOpenImageViewer(false);
              setSelectedImage(undefined);
            }}
          />
          <ScrollArea className="w-full lg:h-[80vh] h-[100vh] mt-6">
            <div className="relative">
              <div className="sticky top-0 z-0">
                <Title size="text-8xl" title={title} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-[80%] mx-auto relative z-[1]">
                {screens.map((screen) => (
                  <div
                    key={screen.title}
                    className="flex justify-center cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedImage(screen);
                      setOpenImageViewer(true);
                    }}
                  >
                    <div className="bg-background rounded-lg relative group overflow-hidden">
                      <Image
                        src={screen.url}
                        alt={screen.title}
                        width={800}
                        height={600}
                        className="rounded-lg border relative z-[4] transition-transform duration-300 group-hover:scale-101"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg z-[5]">
                        <h3 className="text-white font-semibold text-lg">
                          {screen.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ScreensDrawer;
