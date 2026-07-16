"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Images
import Carousel1 from "@/assets/carousel_1.webp";
import Carousel2 from "@/assets/carousel_2.webp";
import Carousel3 from "@/assets/carousel_3.webp";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";

const slides = [
  {
    img: Carousel3,
    title: "Building the Future with Precision",
    description:
      "From infrastructure projects to architectural marvels, we bring your vision to life with unmatched expertise and quality.",
    cta: "Explore Our Projects",
    href: "/projects",
  },
  {
    img: Carousel2,
    title: "Innovative Designs, Reliable Execution",
    description:
      "We combine creative designs with solid engineering to deliver projects that stand the test of time.",
    cta: "View Our Services",
    href: "#services",
  },
  {
    img: Carousel1,
    title: "Powering Industries, Building Communities",
    description:
      "Our industrial solutions and community projects transform landscapes and empower growth.",
    cta: "Contact Us Today",
    href: "/contact",
  },
];

const HomeCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full cursor-pointer overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[560px] w-full sm:h-[640px]">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/85 via-black/40 to-black/10">
                <div className="max-w-3xl px-6 text-white md:px-12 lg:px-20">
                  <RevealOnScroll>
                    <h2 className="mb-5 text-3xl font-light leading-tight sm:text-4xl md:text-6xl">
                      {slide.title}
                    </h2>
                  </RevealOnScroll>
                  <RevealOnScroll>
                    <p className="mb-8 text-sm text-white/70 sm:text-base md:text-lg">
                      {slide.description}
                    </p>
                  </RevealOnScroll>
                  <RevealOnScroll>
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      {slide.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </RevealOnScroll>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:border-primary hover:bg-black/60 hover:text-primary" />
        <CarouselNext className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:border-primary hover:bg-black/60 hover:text-primary" />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
