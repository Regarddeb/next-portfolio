"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("whoami");
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

  const renderItemWithIndicator = (text: string, isActive: boolean) => (
    <span className="flex items-center gap-2">
      {isActive && <span className="">&gt;</span>}
      <span>{text}</span>
    </span>
  );

  const getItemClassName = (sectionId: string) => {
    return `cursor-pointer hover:text-blue-600 transition-colors ${
      activeSection === sectionId
        ? "font-semibold"
        : "text-gray-700"
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
            activeSection === "experience"
          )}
        </p>
        <p
          className={getItemClassName("projects")}
          onClick={() => scrollToSection("projects")}
        >
          {renderItemWithIndicator("projects", activeSection === "projects")}
        </p>
        {/* <p
              className={getItemClassName("interactive-chat")}
              onClick={() => scrollToSection("interactive-chat")}
            >
              {renderItemWithIndicator(
                "interactive chat",
                activeSection === "interactive-chat"
              )}
            </p> */}
      </div>
      <div className="bg-white xl:w-[60%] text-gray-900 h-[350px] xl:h-[400px] p-2 rounded-lg flex flex-col items-center border justify-center gap-5">
        <p className="text-center text-lg flex flex-col font-light">
          <span>Let's create</span>
          <span>something together</span>
        </p>
        <Button
          onClick={() => router.push("/contact")}
          className="w-fit cursor-pointer"
          size="lg"
        >
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default TableOfContents;
