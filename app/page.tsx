import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import Heading from "@/components/main/Heading";
import HomeCarousel from "@/components/main/HomeCarousel";

import ProjectsSection from "@/components/main/ProjectsSection";
import ServicesSection from "@/components/main/ServicesSection";

import AboutImage from "@/assets/about_rexoray.webp";
import CertificateOfIncorporation from "@/assets/rexoray_icoporation_cert.png";
import RevealOnScroll from "@/components/main/RevealOnScroll";
import Preloader from "@/components/main/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />

      <HomeCarousel />

      {/* About Section */}
      <section className="border-t border-white/10 bg-black py-16 md:py-24">
        <RevealOnScroll>
          <Heading
            title="About Us"
            text="Driving innovation and excellence across industries"
          />
        </RevealOnScroll>

        <div className="container mx-auto mt-10 grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={AboutImage}
                alt="About REXORAY ACE"
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <h3 className="mb-4 text-2xl font-light text-white md:text-3xl">
                Building a Better Future
              </h3>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="mb-6 leading-relaxed text-white/60">
                Incorporated in 2024, <strong className="text-white">REXORAY ACE LTD</strong> is a
                dynamic, diversified company headquartered in Abuja, Nigeria.
                Operating across sectors including general contracting,
                petroleum marketing, manufacturing, agriculture, transportation,
                and event management, we are committed to delivering exceptional
                services with integrity, professionalism, and innovation.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="mb-8 leading-relaxed text-white/60">
                Guided by a vision to be a leading service provider in Nigeria
                and beyond, we continually invest in people, technology, and
                processes to ensure sustainable growth while exceeding client
                expectations.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Incorporation & Trust Section */}
      <section className="border-t border-white/10 bg-black py-16 md:py-24">
        <RevealOnScroll>
          <Heading
            title="Our Incorporation"
            text="Recognized and trusted in the business landscape"
          />
        </RevealOnScroll>
        <div className="container mx-auto mt-10 grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10">
              <Image
                src={CertificateOfIncorporation}
                alt="Certificate of Incorporation"
                fill
                className="object-contain p-6"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <h3 className="mb-4 text-2xl font-light text-white md:text-3xl">
                Why You Can Trust REXORAY ACE
              </h3>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="mb-6 leading-relaxed text-white/60">
                Our incorporation is a testament to our commitment to
                transparency, compliance, and professionalism. As a registered
                private limited liability company, we operate under the highest
                standards of corporate governance.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Legally registered and recognized by the Corporate Affairs
                  Commission of Nigeria.
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Proven track record in multiple industries.
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Commitment to delivering quality and exceeding client
                  expectations.
                </li>
              </ul>
            </RevealOnScroll>
            <RevealOnScroll>
              <a
                href="https://drive.google.com/uc?export=download&id=13A1U4y-4Dy7Y3Ah_NR2SDI5dEJLLbjU6"
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Download Company Profile
                <ArrowRight className="h-4 w-4" />
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <ServicesSection />

      <ProjectsSection />
    </>
  );
}
