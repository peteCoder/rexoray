"use client";

import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import { useEffect, useState } from "react";
import { formatNumber } from "@/lib/utils";
import RevealOnScroll from "@/components/main/RevealOnScroll";

const ProjectClient = ({ project }: { project: Project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const callSelectedImage = (url: string) => {
    setSelectedImage(url);
    document.body.style.overflow = "hidden";
  };
  const removeSelectedImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        removeSelectedImage();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    // Re-enable scrolling in case it was disabled by modal
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <RevealOnScroll>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary font-medium hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
        </RevealOnScroll>

        {/* Banner Image */}
        <RevealOnScroll>
          <div className="rounded-lg overflow-hidden shadow-lg mb-10">
            <Image
              src={project.bannerImage}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </RevealOnScroll>

        {/* Title + Description */}
        <div className="text-center mb-10">
          <RevealOnScroll>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
              {project.description}
            </p>
          </RevealOnScroll>
          {project.moreDescription && (
            <RevealOnScroll>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
                {project.moreDescription}
              </p>
            </RevealOnScroll>
          )}
        </div>

        {/* Project Meta Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <RevealOnScroll>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <h3 className="text-sm text-gray-500">Start Date</h3>
              <p className="font-semibold dark:text-white">
                {project.startDate}
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <h3 className="text-sm text-gray-500">End Date</h3>
              <p className="font-semibold dark:text-white">{project.endDate}</p>
            </div>
          </RevealOnScroll>
          {project.client && (
            <RevealOnScroll>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Client</h3>
                <p className="font-semibold dark:text-white">
                  {project.client}
                </p>
              </div>
            </RevealOnScroll>
          )}
          {project.location && (
            <RevealOnScroll>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Location</h3>
                <p className="font-semibold dark:text-white">
                  {project.location}
                </p>
              </div>
            </RevealOnScroll>
          )}
          {project.status && (
            <RevealOnScroll>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Status</h3>
                <p className="font-semibold dark:text-white">
                  {project.status}
                </p>
              </div>
            </RevealOnScroll>
          )}
          {project.budget && (
            <RevealOnScroll>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Budget</h3>
                <p className="font-semibold dark:text-white">
                  <span>{project?.currency}</span>
                  <span>{formatNumber(project.budget)}</span>
                </p>
              </div>
            </RevealOnScroll>
          )}
        </div>

        {/* Image Gallery */}
        {project.images.length > 0 && (
          <div>
            <RevealOnScroll>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Project Gallery
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.images.map((img, idx) => (
                <RevealOnScroll key={idx}>
                  <div
                    className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => callSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[5000] p-4"
            onClick={() => removeSelectedImage()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => removeSelectedImage()}
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Selected Project Image"
                width={1200}
                height={800}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectClient;
