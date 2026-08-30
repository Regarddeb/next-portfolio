"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ContactCTAProps {
  className?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ className = "" }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleContactClick = () => {
    setIsNavigating(true);
    router.push("/contact");
  };

  return (
    <div
      className={`relative w-full h-[280px] lg:h-[350px] xl:h-[400px] rounded-lg overflow-hidden border flex flex-col items-center justify-center gap-5 text-white group transition-all duration-500 ${className}`}
    >
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
  );
};

export default ContactCTA;
