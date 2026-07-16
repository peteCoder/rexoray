"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import RevealOnScroll from "./RevealOnScroll";
import Heading from "./Heading";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
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

  return (
    <section id="projects" className="border-t border-white/10 bg-black py-16 md:py-24">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <Heading
            title="Our Projects"
            text="Explore some of our recent and notable works that showcase our commitment to excellence."
          />
        </RevealOnScroll>

        <div className="mt-10 border-t border-white/10">
          {loading
            ? [...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex animate-pulse items-center gap-6 border-b border-white/10 py-8"
                >
                  <div className="h-4 w-8 rounded bg-white/10" />
                  <div className="h-6 flex-1 rounded bg-white/10" />
                  <div className="hidden h-20 w-28 rounded bg-white/10 sm:block" />
                </div>
              ))
            : projects.map((project, i) => (
                <RevealOnScroll key={project._id}>
                  <Link
                    href={`/projects/${project._id}`}
                    className="group flex items-center gap-6 border-b border-white/10 py-8"
                  >
                    <span className="w-8 shrink-0 text-sm text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="truncate text-xl font-light text-white transition-colors group-hover:text-primary sm:text-2xl md:text-3xl">
                        {project.title}
                      </h3>
                      {project.location && (
                        <p className="mt-1 text-sm text-white/40">
                          {project.location}
                        </p>
                      )}
                    </div>
                    <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden sm:block md:h-24 md:w-36">
                      <Image
                        src={project.bannerImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
        </div>

        {!loading && projects.length > 0 && (
          <RevealOnScroll>
            <div className="mt-10 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-primary"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealOnScroll>
        )}

        {!loading && projects.length === 0 && (
          <p className="mt-6 text-center text-white/40">No projects found.</p>
        )}
      </div>
    </section>
  );
}
