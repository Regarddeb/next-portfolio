"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

// Soft yellow glow that lazily trails the cursor inside its parent
const CursorGlow: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      x.set(e.clientX - rect.left - 250);
      y.set(e.clientY - rect.top - 250);
    };
    parent.addEventListener("pointermove", handleMove);
    return () => parent.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute size-[500px] rounded-full bg-highlight opacity-[0.12] dark:opacity-[0.08] blur-3xl"
      style={{ x: springX, y: springY }}
    />
  );
};

export default CursorGlow;
