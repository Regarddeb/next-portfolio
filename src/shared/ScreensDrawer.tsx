"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Title from "./Title";
import { Screen } from "@/lib/projectsData";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface ScreensDrawerProps {
  screens: Screen[];
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ScreensDrawer: React.FC<ScreensDrawerProps> = ({
  title,
  screens,
  open,
  onOpenChange,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = screens.map((s) => ({ src: s.url, title: s.title }));

  return (
    <>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom]}
      />

      <Sheet open={open} onOpenChange={onOpenChange}>

        <SheetContent side="bottom" className="h-[93%]">
          <SheetHeader>
            <SheetTitle className="sr-only">{title}</SheetTitle>
            <SheetDescription className="sr-only">
              Screenshots of {title}
            </SheetDescription>
          </SheetHeader>

          <div className="container mx-auto text-center flex flex-col items-center">
            <ScrollArea className="w-full lg:h-[80vh] h-[84vh] mt-6">
              <div className="relative">
                <div className="sticky top-0 z-0">
                  <Title size="text-8xl" title={title} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-[80%] mx-auto relative z-1">
                  {screens.map((screen, idx) => (
                    <button
                      type="button"
                      key={screen.title}
                      className="flex justify-center cursor-pointer"
                      onClick={() => {
                        setLightboxIndex(idx);
                        setLightboxOpen(true);
                      }}
                    >
                      <div className="bg-background rounded-lg relative group overflow-hidden">
                        <Image
                          src={screen.url}
                          alt={screen.title}
                          width={800}
                          height={600}
                          className="rounded-lg border relative z-4 transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg z-5">
                          <h3 className="text-white font-semibold text-lg">
                            {screen.title}
                          </h3>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ScreensDrawer;