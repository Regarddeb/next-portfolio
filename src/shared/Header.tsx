"use client";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/shared/ThemeToggle";
import { scrollToSection } from "@/lib/sections";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`lg:hidden w-full px-4 py-2 z-50 flex justify-between sticky top-0 bg-background/85 backdrop-blur-md border-b items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "" : "shadow-[0_2px_8px_rgba(0,0,0,0.06)]"}`}
    >
      <button
        type="button"
        className="font-playfair font-semibold text-lg cursor-pointer"
        onClick={() => scrollToSection("whoami")}
      >
        Humphrey Uno
      </button>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <Button
          size="sm"
          className="rounded-full cursor-pointer bg-highlight text-highlight-foreground hover:bg-highlight/85"
          onClick={() => scrollToSection("contact")}
        >
          <Mail /> Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
