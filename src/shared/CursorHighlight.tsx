"use client";
import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const CursorHighlight: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    springX.set(pos.x - 75);
    springY.set(pos.y - 75);
  }, [pos, springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 rounded-full mix-blend-difference bg-white"
      style={{
        width: 150,
        height: 150,
        left: springX,
        top: springY,
        boxShadow: "0 0 30px 10px rgba(255,255,255,0.2)",
      }}
    />
  );
};

export default CursorHighlight;
