"use client";
import { motion, useMotionValue, useSpring } from "motion/react";

// Nudges its child slightly toward the cursor on hover
const Magnetic: React.FC<{ children: React.ReactNode; strength?: number }> = ({
  children,
  strength = 6,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 18 });
  const springY = useSpring(y, { stiffness: 300, damping: 18 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(dx * strength * 2);
    y.set(dy * strength * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="inline-block"
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
