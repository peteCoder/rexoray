"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING = { damping: 25, stiffness: 300, mass: 0.5 };

const isInteractive = (target: EventTarget | null) =>
  target instanceof Element &&
  !!target.closest("a, button, [role='button'], input, textarea, select");

const CursorFollower = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => setHovering(isInteractive(e.target));

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
      style={{ x: springX, y: springY }}
      animate={{
        width: hovering ? 52 : 24,
        height: hovering ? 52 : 24,
        backgroundColor: hovering
          ? "color-mix(in oklch, var(--primary) 12%, transparent)"
          : "transparent",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  );
};

export default CursorFollower;
