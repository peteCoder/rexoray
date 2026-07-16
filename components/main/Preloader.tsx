"use client";

import { useEffect, useState } from "react";
import { motion, animate as animateValue } from "framer-motion";
import Image from "next/image";
import LogoLight from "@/assets/logo_light.png";

const COUNT_DURATION = 2.2;
const COUNT_EASE = [0.16, 1, 0.3, 1] as const;
const EXIT_EASE = [0.76, 0, 0.24, 1] as const;
const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const controls = animateValue(0, 100, {
      duration: COUNT_DURATION,
      ease: COUNT_EASE,
      onUpdate: (value) => setProgress(Math.round(value)),
      onComplete: () => {
        setTimeout(() => setExiting(true), 350);
      },
    });

    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (!exiting) return;
    document.body.style.overflow = "";
    const timeout = setTimeout(() => setMounted(false), 1000);
    return () => clearTimeout(timeout);
  }, [exiting]);

  if (!mounted) return null;

  const dashOffset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: EXIT_EASE }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-black p-6 md:p-10"
    >
      {/* decorative corner accent */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full border border-primary/30" />

      {/* logo + circular progress ring */}
      <div className="flex items-center gap-5">
        <Image
          src={LogoLight}
          alt="Rexoray Ace"
          width={200}
          height={200}
          priority
          className="h-14 w-auto md:h-16"
        />
        <svg width="44" height="44" viewBox="0 0 44 44" className="-rotate-90">
          <circle
            cx="22"
            cy="22"
            r={RADIUS}
            fill="none"
            stroke="oklch(1 0 0 / 12%)"
            strokeWidth="1.25"
          />
          <circle
            cx="22"
            cy="22"
            r={RADIUS}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset 0.15s linear" }}
          />
        </svg>
      </div>

      {/* percentage + loading label */}
      <div className="flex items-end justify-between">
        <div>
          <span className="font-extralight leading-none text-white tabular-nums text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem]">
            {progress}%
          </span>
          <div className="mt-4 h-px w-12 bg-white/40" />
        </div>
        <div className="animate-pulse pb-2 text-sm tracking-wide text-white/70 md:text-base">
          Loading
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
