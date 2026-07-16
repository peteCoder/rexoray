import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  ClipboardList,
  Clock,
  Hammer,
  Search,
  ShieldCheck,
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import RevealOnScroll from "@/components/main/RevealOnScroll";

type tParams = Promise<{ slug: string }>;

const APPROACH = [
  {
    icon: Search,
    title: "Consultation",
    description:
      "We start by understanding your goals, site, and constraints before proposing a way forward.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "A structured plan — scope, schedule, budget, and risk register — agreed before work begins.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "Mobilized teams and tracked milestones, with regular progress reporting throughout.",
  },
  {
    icon: Check,
    title: "Delivery & Support",
    description:
      "Final inspection, handover, and after-delivery support so the result holds up long-term.",
  },
];

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Transparent pricing and honest timelines, from quote to handover.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Certified materials, trained personnel, and inspections at every phase.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Projects tracked against milestones so deadlines are met, not missed.",
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | REXORAY ACE LTD`,
    description: service.overview,
    openGraph: {
      title: `${service.title} | REXORAY ACE LTD`,
      description: service.overview,
      type: "website",
    },
  };
}

export default async function ServiceDetail(props: { params: tParams }) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const Icon = service.icon;
  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <section className="min-h-screen bg-black pb-24">
      <div className="container mx-auto max-w-5xl px-6 pt-14">
        <RevealOnScroll>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
        </RevealOnScroll>

        {/* Hero */}
        <RevealOnScroll>
          <div className="mt-12 flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h1 className="mt-8 max-w-3xl text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-white/50">{service.tagline}</p>
          </div>
        </RevealOnScroll>

        {/* Hero banner */}
        <RevealOnScroll>
          <div className="relative mt-12 h-[260px] w-full overflow-hidden sm:h-[420px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </RevealOnScroll>

        {/* Overview + Offerings */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-white/10 py-16 md:grid-cols-3">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              Overview
            </span>
          </RevealOnScroll>
          <div className="md:col-span-2">
            <RevealOnScroll>
              <p className="text-lg leading-relaxed text-white/70">
                {service.overview}
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <ul className="mt-10 space-y-6">
                {service.offerings.map((offering) => (
                  <li key={offering.title} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <span className="block font-medium text-white">
                        {offering.title}
                      </span>
                      <span className="mt-1 block text-sm text-white/50">
                        {offering.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>

        {/* Our Approach */}
        <div className="border-t border-white/10 py-16">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              Our approach
            </span>
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <RevealOnScroll key={step.title}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <StepIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Why REXORAY ACE */}
        <div className="border-t border-white/10 py-16">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              Why REXORAY ACE
            </span>
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {TRUST_POINTS.map((point) => {
              const PointIcon = point.icon;
              return (
                <RevealOnScroll key={point.title}>
                  <div className="border border-white/10 p-6">
                    <PointIcon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 text-lg text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {point.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <RevealOnScroll>
          <div className="border-t border-white/10 py-16 text-center">
            <h2 className="text-2xl font-light text-white sm:text-3xl">
              Ready to get started with {service.title.split(" & ")[0]}?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Reach out and our team will get back to you with next steps.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Other services */}
        <RevealOnScroll>
          <div className="border-t border-white/10 pt-16">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Other services
            </span>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {otherServices.map((other) => {
                const OtherIcon = other.icon;
                return (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="group block overflow-hidden border border-white/10 transition-colors hover:border-primary"
                  >
                    <div className="relative h-32 w-full">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <OtherIcon className="h-5 w-5 text-white/60 transition-colors group-hover:text-primary" />
                      <h3 className="mt-4 text-base text-white transition-colors group-hover:text-primary">
                        {other.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
