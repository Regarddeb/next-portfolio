"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, PhoneOutgoing } from "lucide-react";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    if (pathname === "/contact") {
      router.push("/"); 
    } else {
      router.push("/contact");
    }
  };

  return (
    <div
      className={`lg:hidden w-full p-2 container mx-auto z-50 flex justify-between sticky top-0 bg-white border-b items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "" : "shadow-[0_2px_8px_rgba(0,0,0,0.06)]"}`}
    >
      <p className="font-medium">Humphrey Uno</p>
      <Button size="icon" onClick={handleClick}>
        {pathname === "/contact" ? <Home /> : <PhoneOutgoing />}
      </Button>
    </div>
  );
};

export default Header;
