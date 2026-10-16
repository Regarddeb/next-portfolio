"use client";
import { useEffect, useState } from "react";
import { sections, type SectionId } from "./sections";

export const useActiveSection = () => {
  const [active, setActive] = useState<SectionId>("whoami");

  useEffect(() => {
    const handleScroll = () => {
      // The last section may never reach the top, so treat page bottom as it
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};
