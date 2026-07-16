"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Project } from "@/lib/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/utils";
import RevealOnScroll from "@/components/main/RevealOnScroll";
import useEmblaCarousel from "embla-carousel-react";

const hasValue = (val?: string) =>
  val !== undefined && val !== null && val.trim() !== "";

const ZOOM_STEP = 0.25;
const ZOOM_MIN = 1;
const ZOOM_MAX = 4;

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="block text-xs uppercase tracking-widest text-white/40">
      {label}
    </span>
    <span className="mt-2 block text-base text-white/90">{value}</span>
  </div>
);

const ProjectClient = ({ project }: { project: Project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // User-controlled zoom
  const [zoom, setZoom] = useState(1);
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const carouselAreaRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    dragX.set(0);
    dragY.set(0);
  }, [dragX, dragY]);

  const zoomIn = useCallback(
    () => setZoom((z) => Math.min(ZOOM_MAX, parseFloat((z + ZOOM_STEP).toFixed(2)))),
    []
  );

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(ZOOM_MIN, parseFloat((z - ZOOM_STEP).toFixed(2)));
      if (next === 1) {
        dragX.set(0);
        dragY.set(0);
      }
      return next;
    });
  }, [dragX, dragY]);

  // Reset zoom and pan whenever the active slide changes
  useEffect(() => {
    resetZoom();
  }, [currentIndex, resetZoom]);

  // Jump to correct slide after embla mounts inside lightbox
  useEffect(() => {
    if (lightboxOpen && emblaApi) {
      emblaApi.scrollTo(lightboxIndex, true);
    }
  }, [lightboxOpen, emblaApi, lightboxIndex]);

  // Track selected dot index
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Mouse-wheel zoom (passive: false so we can preventDefault)
  useEffect(() => {
    const el = carouselAreaRef.current;
    if (!el || !lightboxOpen) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom((z) => Math.min(ZOOM_MAX, parseFloat((z + ZOOM_STEP).toFixed(2))));
      } else {
        setZoom((z) => {
          const next = Math.max(ZOOM_MIN, parseFloat((z - ZOOM_STEP).toFixed(2)));
          if (next === 1) {
            dragX.set(0);
            dragY.set(0);
          }
          return next;
        });
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [lightboxOpen, dragX, dragY]);

  // Keyboard: arrows navigate, Escape closes, +/- zoom
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft" && zoom === 1) scrollPrev();
      if (e.key === "ArrowRight" && zoom === 1) scrollNext();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, zoom, closeLightbox, scrollPrev, scrollNext, zoomIn, zoomOut, resetZoom]);

  // Ensure scroll is restored on unmount
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const currencySymbol = project.currency === "NGN" ? "₦" : "$";

  // Drag constraints grow proportionally with zoom level
  const dragConstraints = {
    left: -((zoom - 1) * 600),
    right: (zoom - 1) * 600,
    top: -((zoom - 1) * 400),
    bottom: (zoom - 1) * 400,
  };

  return (
    <section className="min-h-screen bg-black pb-24">
      <div className="container mx-auto max-w-5xl px-6 pt-14">
        {/* Back */}
        <RevealOnScroll>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </RevealOnScroll>

        {/* Title + meta */}
        <RevealOnScroll>
          <h1 className="mt-12 text-center text-4xl font-light leading-tight text-white sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
        </RevealOnScroll>

        {(hasValue(project.client) ||
          hasValue(project.location) ||
          hasValue(project.status)) && (
          <RevealOnScroll>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/50">
              {[project.client, project.location, project.status]
                .filter(hasValue)
                .map((item, i, arr) => (
                  <span key={item} className="flex items-center gap-3">
                    {item}
                    {i < arr.length - 1 && (
                      <span className="h-px w-8 bg-white/20" />
                    )}
                  </span>
                ))}
            </div>
          </RevealOnScroll>
        )}
      </div>

      {/* Hero Banner */}
      <RevealOnScroll>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="relative mt-14 overflow-hidden">
            <Image
              src={project.bannerImage}
              alt={project.title}
              width={1600}
              height={900}
              className="h-[340px] w-full object-cover sm:h-[560px]"
              priority
            />
          </div>
        </div>
      </RevealOnScroll>

      <div className="container mx-auto max-w-5xl px-6">
        {/* Overview */}
        <div className="grid grid-cols-1 gap-6 border-t border-white/10 py-16 md:grid-cols-3 md:gap-12">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              About the project
            </span>
          </RevealOnScroll>
          <div className="space-y-5 md:col-span-2">
            <RevealOnScroll>
              <p className="text-base leading-relaxed text-white/70">
                {project.description}
              </p>
            </RevealOnScroll>
            {hasValue(project.moreDescription) && (
              <RevealOnScroll>
                <p className="text-base leading-relaxed text-white/50">
                  {project.moreDescription}
                </p>
              </RevealOnScroll>
            )}
          </div>
        </div>

        {/* Details */}
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 py-16 sm:grid-cols-4">
            {hasValue(project.startDate) && (
              <Stat label="Start Date" value={project.startDate} />
            )}
            {hasValue(project.endDate) && (
              <Stat label="End Date" value={project.endDate} />
            )}
            {hasValue(project.status) && (
              <Stat label="Status" value={project.status!} />
            )}
            {hasValue(project.budget) && (
              <Stat
                label="Budget"
                value={`${currencySymbol}${formatNumber(project.budget!)}`}
              />
            )}
          </div>
        </RevealOnScroll>

        {/* Gallery */}
        {project.images.length > 0 && (
          <div className="border-t border-white/10 py-16">
            <RevealOnScroll>
              <span className="text-xs uppercase tracking-widest text-white/40">
                Gallery
              </span>
            </RevealOnScroll>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.images.map((img, idx) => (
                <RevealOnScroll key={idx}>
                  <button
                    onClick={() => openLightbox(idx)}
                    className="group block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`View image ${idx + 1}`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={img}
                        alt={`${project.title} image ${idx + 1}`}
                        width={600}
                        height={400}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                    </div>
                  </button>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Lightbox Slider ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-[5000] flex flex-col"
            onClick={closeLightbox}
          >
            {/* ── Top bar: counter + zoom controls + close ── */}
            <div
              className="flex items-center justify-between px-4 sm:px-6 py-3 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Slide counter */}
              <span className="text-white/60 text-sm font-medium tracking-wide tabular-nums">
                {currentIndex + 1}&nbsp;/&nbsp;{project.images.length}
              </span>

              {/* Zoom controls */}
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
                <button
                  onClick={zoomOut}
                  disabled={zoom <= ZOOM_MIN}
                  aria-label="Zoom out"
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="text-white/80 text-xs font-semibold w-10 text-center tabular-nums select-none">
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  onClick={zoomIn}
                  disabled={zoom >= ZOOM_MAX}
                  aria-label="Zoom in"
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>

                {zoom !== 1 && (
                  <button
                    onClick={resetZoom}
                    aria-label="Reset zoom"
                    className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Hint when zoomed */}
            {zoom > 1 && (
              <p className="text-center text-white/40 text-xs pb-1 flex-shrink-0 select-none">
                Drag to pan · scroll to zoom · press 0 to reset
              </p>
            )}

            {/* ── Carousel area ── */}
            <div
              ref={carouselAreaRef}
              className="flex-1 flex items-center relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex h-full">
                  {project.images.map((img, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <div
                        key={idx}
                        className="flex-[0_0_100%] h-full flex items-center justify-center px-10 sm:px-16"
                      >
                        {/*
                          key trick: remounts the motion element on each slide
                          activation → replays the entry zoom animation.
                          User zoom (scale) is layered on top via the animate target.
                        */}
                        <motion.div
                          key={isActive ? `active-${currentIndex}` : `idle-${idx}`}
                          initial={isActive ? { scale: 1.12, opacity: 0.7 } : false}
                          animate={isActive ? { scale: zoom, opacity: 1 } : {}}
                          transition={{
                            duration: 0.55,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          style={{
                            height: "72vh",
                            x: isActive ? dragX : 0,
                            y: isActive ? dragY : 0,
                            cursor: zoom > 1 ? "grab" : "default",
                          }}
                          drag={zoom > 1 && isActive}
                          dragConstraints={dragConstraints}
                          dragMomentum={false}
                          dragElastic={0.08}
                          whileDrag={{ cursor: "grabbing" }}
                          onDoubleClick={() => {
                            if (zoom > 1) {
                              resetZoom();
                            } else {
                              setZoom(2);
                            }
                          }}
                          className="flex items-center justify-center w-full select-none"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} image ${idx + 1}`}
                            width={1200}
                            height={800}
                            className="max-h-full w-auto max-w-full object-contain rounded-lg"
                            draggable={false}
                          />
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Prev — hidden when zoomed so drag isn't confused */}
              {zoom === 1 && (
                <button
                  onClick={scrollPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 sm:p-3 transition-all backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Next */}
              {zoom === 1 && (
                <button
                  onClick={scrollNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 sm:p-3 transition-all backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>

            {/* ── Dot indicators ── */}
            <div
              className="flex justify-center items-center gap-2 py-5 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectClient;
