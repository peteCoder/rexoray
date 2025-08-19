"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { formatNumber } from "@/lib/utils";
import { Project } from "@/lib/types";
import RevealOnScroll from "./RevealOnScroll";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/projects?limit=3`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data.projects || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6 dark:text-white">
            Our Projects
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-300">
            Explore some of our recent and notable works that showcase our
            expertise and commitment to excellence.
          </p>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="w-full h-64 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : projects.map((project) => (
                <RevealOnScroll key={project._id}>
                  <div
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
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
                    <div className="p-4 text-left">
                      <h4 className="text-lg font-semibold dark:text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
        </div>

        {!loading && projects.length > 0 && (
          <div className="mt-8">
            <RevealOnScroll>
              <Link
                href="/projects"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
              >
                View More Projects
              </Link>
            </RevealOnScroll>
          </div>
        )}

        {!loading && projects.length === 0 && (
          <p className="text-gray-500 mt-6">No projects found.</p>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-[5000] p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                <Image
                  src={selectedProject.bannerImage}
                  alt={selectedProject.title}
                  width={1000}
                  height={1000}
                  className="w-full h-64 object-cover rounded-t-lg"
                />

                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
                    <strong>Start:</strong> {selectedProject.startDate} |{" "}
                    <strong>End:</strong> {selectedProject.endDate}
                  </p>

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
                        <strong>Budget:</strong>{" "}
                        <span>{selectedProject?.currency}</span>
                        <span>{formatNumber(selectedProject.budget)}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6 dark:text-gray-200">
                    {selectedProject.description}
                  </p>

                  <div className="flex justify-center items-center my-5">
                    <Button asChild>
                      <Link href={`/projects/${selectedProject._id}`}>
                        View to Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
