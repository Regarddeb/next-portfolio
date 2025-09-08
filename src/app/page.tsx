"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Footer from "@/shared/Footer";

export default function Home() {
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
    handleScroll(); // Call once to set initial state

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
      {isActive && <span className="text-blue-600">&gt;</span>}
      <span>{text}</span>
    </span>
  );

  const getItemClassName = (sectionId: string) => {
    return `cursor-pointer hover:text-blue-600 transition-colors ${
      activeSection === sectionId
        ? "text-blue-600 font-semibold"
        : "text-gray-700"
    }`;
  };

  const getProjectItemClassName = (projectTitle: string) => {
    const isProjectsActive = activeSection === "projects";
    return `cursor-pointer hover:text-blue-600 transition-colors ${
      isProjectsActive ? "text-blue-500" : "text-gray-600"
    }`;
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-start">
        <div className="flex flex-col gap-5 w-8/12">
          <Hero />
          <Experience />
          <Projects />
        </div>
        <div className="w-4/12 flex flex-col gap-6 sticky top-20">
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
              {renderItemWithIndicator(
                "projects",
                activeSection === "projects"
              )}
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
          <div className="bg-white w-[60%] text-gray-900 h-[500px] p-2 rounded-lg flex flex-col items-center border justify-center gap-5">
            <p className="text-center text-2xl flex flex-col font-light">
              <span>Let's create</span>
              <span>something together</span>
            </p>
            <Button className="w-fit cursor-pointer" size="lg">
              Contact me
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
