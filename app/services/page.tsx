import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import RevealOnScroll from "@/components/main/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Services | REXORAY ACE LTD",
  description:
    "Explore the full range of services REXORAY ACE LTD delivers across construction, trade, energy, manufacturing, agriculture, logistics, and more.",
};

export default function ServicesIndex() {
  return (
    <section className="min-h-screen bg-black pb-24">
      <div className="container mx-auto px-6 pt-16">
        <RevealOnScroll>
          <span className="text-xs uppercase tracking-widest text-white/40">
            What we do
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Diversified expertise, one dependable partner.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
            REXORAY ACE LTD delivers across {services.length} distinct
            service lines — from general contracting to media production —
            each backed by the same commitment to quality, integrity, and
            results.
          </p>
        </RevealOnScroll>

        <div className="mt-16 border-t border-white/10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-4 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="w-8 shrink-0 text-sm text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-primary">
                    <Icon className="h-5 w-5 text-white/70 transition-colors group-hover:text-primary" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-light text-white transition-colors group-hover:text-primary sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/40">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden sm:block md:h-24 md:w-36">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-primary sm:block" />
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll>
          <div className="mt-16 border border-white/10 p-10 text-center sm:p-14">
            <h2 className="text-2xl font-light text-white sm:text-3xl">
              Not sure which service fits your project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Tell us what you&apos;re trying to achieve and we&apos;ll point
              you to the right team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
