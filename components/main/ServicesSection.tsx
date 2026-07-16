import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import Heading from "./Heading";
import RevealOnScroll from "./RevealOnScroll";

const featured = services.filter((service) => service.highlight);

const ServicesSection = () => {
  return (
    <section id="services" className="border-t border-white/10 bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <RevealOnScroll>
          <Heading
            title="Our Services"
            text="At REXORAY ACE LTD, we provide innovative and reliable solutions
          across multiple sectors, delivering exceptional value to our clients."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full overflow-hidden border border-white/10 text-left transition-colors hover:border-primary"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-black">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 pt-10">
                    <h3 className="text-xl font-light text-white transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/50">
                      {service.tagline}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-primary"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ServicesSection;
