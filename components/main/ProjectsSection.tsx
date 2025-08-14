"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  bannerImage: string;
  images: string[];
  client?: string;
  location?: string;
  status?: string;
  budget?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Building",
    description:
      "A state-of-the-art architectural design featuring eco-friendly materials, smart automation, and advanced building technology. The project integrates renewable energy sources, high-efficiency HVAC systems, and modern aesthetics to deliver a sustainable living and working environment.",
    startDate: "2023-01-10",
    endDate: "2023-08-25",
    bannerImage: "/carousel_1.webp",
    images: ["/carousel_2.webp", "/carousel_3.webp", "/carousel_1.webp"],
    client: "GreenTech Developers",
    location: "Lagos, Nigeria",
    status: "Completed",
    budget: "$5M",
  },
  {
    id: 2,
    title: "Solar Energy Plant",
    description:
      "Harnessing renewable energy to power communities sustainably and efficiently. This large-scale solar farm features cutting-edge photovoltaic panels, battery storage, and automated monitoring systems to ensure optimal performance year-round.",
    startDate: "2022-05-15",
    endDate: "2023-02-01",
    bannerImage: "/carousel_2.webp",
    images: ["/carousel_1.webp", "/carousel_3.webp"],
    client: "SunPower Africa",
    location: "Abuja, Nigeria",
    status: "Completed",
    budget: "$12M",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase relative inline-block after:absolute after:w-20 after:h-1 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px] mb-6 dark:text-white">
          Our Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-300">
          Explore some of our recent and notable works that showcase our
          expertise and commitment to excellence.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.bannerImage}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Banner Image */}
                <Image
                  src={selectedProject.bannerImage}
                  alt={selectedProject.title}
                  width={1000}
                  height={1000}
                  className="w-full h-64 object-cover rounded-t-lg"
                />

                <div className="p-6 text-left">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    {selectedProject.title}
                  </h3>

                  {/* Dates */}
                  <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
                    <strong>Start:</strong> {selectedProject.startDate} |{" "}
                    <strong>End:</strong> {selectedProject.endDate}
                  </p>

                  {/* Extra details */}
                  <div className="text-sm text-gray-600 mb-4 space-y-1 dark:text-gray-300">
                    {selectedProject.client && (
                      <p>
                        <strong>Client:</strong> {selectedProject.client}
                      </p>
                    )}
                    {selectedProject.location && (
                      <p>
                        <strong>Location:</strong> {selectedProject.location}
                      </p>
                    )}
                    {selectedProject.status && (
                      <p>
                        <strong>Status:</strong> {selectedProject.status}
                      </p>
                    )}
                    {selectedProject.budget && (
                      <p>
                        <strong>Budget:</strong> {selectedProject.budget}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 dark:text-gray-200">
                    {selectedProject.description}
                  </p>

                  {/* Image gallery */}
                  <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 overflow-x-hidden sm:overflow-x-hidden pb-4">
                    {selectedProject.images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        width={192}
                        height={160}
                        alt={`${selectedProject.title} ${idx + 1}`}
                        className="w-full sm:w-48 h-40 object-cover rounded-md flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
