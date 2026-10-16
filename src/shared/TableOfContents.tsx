"use client";

import { AnimatePresence, motion } from "motion/react";
import ContactCTA from "@/shared/ContactCTA";
import ThemeToggle from "@/shared/ThemeToggle";
import { scrollToSection, sections } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

const TableOfContents: React.FC = () => {
  const activeSection = useActiveSection();

  return (
    <nav
      aria-label="Table of contents"
      className="xl:w-4/12 lg:w-3/12 hidden lg:flex flex-col gap-6 sticky top-20 px-4"
    >
      <div className="flex items-center justify-between xl:w-[60%]">
        <p className="text-xl">Table of contents</p>
        <ThemeToggle />
      </div>
      <ul className="flex flex-col gap-1">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center gap-3 py-1.5 pl-4 cursor-pointer transition-colors hover:text-foreground ${
                  isActive ? "font-semibold text-foreground" : "text-muted-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-full bg-highlight"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <AnimatePresence>
        {activeSection !== "contact" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <ContactCTA className="xl:w-[60%]" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TableOfContents;
