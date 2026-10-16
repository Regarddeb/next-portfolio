"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/sections";

interface ContactCTAProps {
  className?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative isolate w-full h-[280px] lg:h-[320px] rounded-xl overflow-hidden border flex flex-col items-center justify-center gap-5 text-white group ${className}`}
    >
      <div className="absolute inset-0 -z-20 bg-[url('/bg-contact.jpg')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 -z-10 bg-neutral-900/80 group-hover:bg-neutral-900/60 transition-colors duration-500" />
      <div className="p-2 text-center flex flex-col items-center">
        <p className="text-2xl font-medium text-white text-center">
          Let’s build
          <br />
          something together
        </p>
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-fit mt-4 px-6 rounded-full cursor-pointer bg-highlight text-highlight-foreground hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
          size="lg"
        >
          Contact me
          <ArrowDown className="transition-transform group-hover:translate-y-0.5" />
        </Button>
      </div>
    </div>
  );
};

export default ContactCTA;
