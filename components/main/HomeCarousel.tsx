"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Images
import Carousel1 from "@/assets/carousel_1.webp";
import Carousel2 from "@/assets/carousel_2.webp";
import Carousel3 from "@/assets/carousel_3.webp";
import Image from "next/image";

const slides = [
  {
    img: Carousel3,
    title: "Building the Future with Precision",
    description:
      "From infrastructure projects to architectural marvels, we bring your vision to life with unmatched expertise and quality.",
    cta: "Explore Our Projects",
  },
  {
    img: Carousel2,
    title: "Innovative Designs, Reliable Execution",
    description:
      "We combine creative designs with solid engineering to deliver projects that stand the test of time.",
    cta: "View Our Services",
  },
  {
    img: Carousel1,
    title: "Powering Industries, Building Communities",
    description:
      "Our industrial solutions and community projects transform landscapes and empower growth.",
    cta: "Contact Us Today",
  },
];

const HomeCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="w-full rounded-b-2xl overflow-hidden cursor-pointer relative">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-[500px] relative">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent dark:from-black/80 dark:to-black/30 flex items-center">
                <div className="max-w-3xl px-6 md:px-12 lg:px-20 text-white dark:text-gray-200">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight dark:text-white">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90 dark:opacity-80">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-6 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-black"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white rounded-full p-2 shadow dark:bg-gray-800/60 dark:hover:bg-gray-800 dark:text-white" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white rounded-full p-2 shadow dark:bg-gray-800/60 dark:hover:bg-gray-800 dark:text-white" />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
