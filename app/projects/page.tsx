"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Project } from "@/lib/types";
import RevealOnScroll from "@/components/main/RevealOnScroll";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/projects?page=1&limit=50`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data.projects ?? data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Track which slide is currently in view for the index indicator
  useEffect(() => {
    if (projects.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [projects]);

  const scrollToIndex = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (loading) {
    return (
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-black">
        <div className="w-full max-w-4xl animate-pulse px-6">
          <div className="mb-4 h-3 w-24 rounded bg-white/10" />
          <div className="mb-10 h-16 w-2/3 rounded bg-white/10" />
          <div className="aspect-[4/3] w-full rounded bg-white/10 sm:aspect-[16/9]" />
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-black text-center">
        <p className="text-white/50">No projects to show yet. Check back soon.</p>
      </section>
    );
  }

  return (
    <div className="snap-y snap-mandatory bg-black">
      {projects.map((project, index) => (
        <section
          key={project._id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className="relative flex min-h-[calc(100vh-73px)] snap-start items-center border-b border-white/5 py-16"
        >
          <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
            {/* Title + meta */}
            <RevealOnScroll>
              <Link href={`/projects/${project._id}`} className="group block">
                <h2 className="text-4xl font-light leading-[1.08] text-white transition-colors group-hover:text-primary sm:text-5xl md:text-6xl">
                  {project.title}
                </h2>
                {(project.location || project.status) && (
                  <p className="mt-5 text-sm tracking-wide text-white/40">
                    {[project.location, project.status]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                <span className="mt-6 inline-block text-sm text-white/50 underline-offset-4 transition-colors group-hover:text-primary group-hover:underline">
                  View project
                </span>
              </Link>
            </RevealOnScroll>

            {/* Image */}
            <RevealOnScroll>
              <Link
                href={`/projects/${project._id}`}
                className="relative block aspect-[4/3] w-full overflow-hidden"
              >
                <Image
                  src={project.bannerImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </Link>
            </RevealOnScroll>
          </div>

          {/* Index + tick, desktop only */}
          <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:right-14 lg:flex">
            <span className="text-xs tracking-widest text-white/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-20 w-px bg-white/15" />
          </div>
        </section>
      ))}

      {/* Slide navigation controls */}
      {projects.length > 1 && (
        <div className="fixed bottom-8 right-6 z-10 hidden flex-col gap-2 lg:right-14 lg:flex">
          <button
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={active === 0}
            aria-label="Previous project"
            className="rounded-full border border-white/15 p-2 text-white/60 transition hover:border-primary hover:text-primary disabled:opacity-30"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              scrollToIndex(Math.min(projects.length - 1, active + 1))
            }
            disabled={active === projects.length - 1}
            aria-label="Next project"
            className="rounded-full border border-white/15 p-2 text-white/60 transition hover:border-primary hover:text-primary disabled:opacity-30"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
