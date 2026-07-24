"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("whoami");
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["whoami", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setIsNavigating(true);
    router.push("/contact");
  };

  const renderItemWithIndicator = (text: string, isActive: boolean) => (
    <span className="flex items-center gap-2">
      {isActive && <span className="">&gt;</span>}
      <span>{text}</span>
    </span>
  );

  const getItemClassName = (sectionId: string) => {
    return `cursor-pointer hover:text-blue-600 transition-colors ${
      activeSection === sectionId ? "font-semibold" : "text-gray-700"
    }`;
  };

  return (
    <div className="xl:w-4/12 lg:w-3/12 hidden lg:flex flex-col gap-6 sticky top-20 px-4">
      <p className="text-xl">Table of contents</p>
      <div className="flex flex-col gap-3">
        <p
          className={getItemClassName("whoami")}
          onClick={() => scrollToSection("whoami")}
        >
          {renderItemWithIndicator("whoami", activeSection === "whoami")}
        </p>
        <p
          className={getItemClassName("experience")}
          onClick={() => scrollToSection("experience")}
        >
          {renderItemWithIndicator(
            "experience",
            activeSection === "experience",
          )}
        </p>
        <p
          className={getItemClassName("projects")}
          onClick={() => scrollToSection("projects")}
        >
          {renderItemWithIndicator("projects", activeSection === "projects")}
        </p>
      </div>
      <div className="relative xl:w-[60%] h-[350px] xl:h-[400px] rounded-lg overflow-hidden border flex flex-col items-center justify-center gap-5 text-white group transition-all duration-500">
        <div className="absolute inset-0 bg-[url('/bg-contact.jpg')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/50 transition-colors duration-500" />
        <div className="relative z-10 p-2 text-center text-lg font-light flex flex-col items-center">
          <p className="text-2xl font-medium text-white text-center">
            Let’s build
            <br />
            something together
          </p>
          <Button
            onClick={handleContactClick}
            disabled={isNavigating}
            className="w-fit mt-4 px-6 py-3 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-80"
            size="lg"
          >
            {isNavigating ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Redirecting...
              </span>
            ) : (
              "Contact me"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
