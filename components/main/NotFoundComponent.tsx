"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

import { motion } from "framer-motion";

const NotFoundComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-8xl font-extrabold text-gray-800 dark:text-gray-100 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition-all duration-300"
        >
          <FaHome size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundComponent;
