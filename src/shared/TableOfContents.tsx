"use client";

import { useEffect, useState } from "react";
import ContactCTA from "@/shared/ContactCTA";

const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("whoami");

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
      <ContactCTA className="xl:w-[60%]" />
    </div>
  );
};

export default TableOfContents;
