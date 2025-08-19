"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>; // ✅ allow onClick safely
};

const RevealOnScroll = ({
  children,
  className,
  delay = 0,
  onClick,
}: RevealOnScrollProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // element shows when 20% is visible
    triggerOnce: true, // animate only once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      onClick={onClick} // ✅ clickable
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
