import Image from "next/image";

import Heading from "@/components/main/Heading";
import HomeCarousel from "@/components/main/HomeCarousel";

import ProjectsSection from "@/components/main/ProjectsSection";
import ServicesSection from "@/components/main/ServicesSection";
import { Button } from "@/components/ui/button";

import AboutImage from "@/assets/about_rexoray.webp";
import CertificateOfIncorporation from "@/assets/rexoray_icoporation_cert.png";
import RevealOnScroll from "@/components/main/RevealOnScroll";

export default function Home() {
  return (
    <>
      <HomeCarousel />

      {/* About Section */}
      <section className="py-6 md:py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <RevealOnScroll>
          <Heading
            title="About Us"
            text="Driving innovation and excellence across industries"
          />
        </RevealOnScroll>

        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Image */}
          <div className="w-full h-full">
            <RevealOnScroll>
              <Image
                src={AboutImage}
                alt="About REXORAY ACE"
                className="w-full rounded-lg shadow-lg"
              />
            </RevealOnScroll>
          </div>

          {/* About Text */}
          <div>
            <RevealOnScroll>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
                Building a Better Future
              </h3>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-lg">
                Incorporated in 2024, <strong>REXORAY ACE LTD</strong> is a
                dynamic, diversified company headquartered in Abuja, Nigeria.
                Operating across sectors including general contracting,
                petroleum marketing, manufacturing, agriculture, transportation,
                and event management, we are committed to delivering exceptional
                services with integrity, professionalism, and innovation.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-lg">
                Guided by a vision to be a leading service provider in Nigeria
                and beyond, we continually invest in people, technology, and
                processes to ensure sustainable growth while exceeding client
                expectations.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <Button asChild className="rounded-full">
                <a
                  href="/about"
                  className="inline-block bg-primary px-6 py-6 rounded-full font-semibold shadow transition"
                >
                  Learn More
                </a>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Incorporation & Trust Section */}
      <section className="py-6 md:py-16 px-6 bg-white dark:bg-gray-800">
        <RevealOnScroll>
          <Heading
            title="Our Incorporation"
            text="Recognized and trusted in the business landscape"
          />
        </RevealOnScroll>
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Certificate Image */}
          <div className="flex justify-center">
            <RevealOnScroll>
              <Image
                src={CertificateOfIncorporation}
                alt="Certificate of Incorporation"
                className="max-w-md w-full rounded-lg shadow-lg border dark:border-gray-700"
              />
            </RevealOnScroll>
          </div>

          {/* Trust Text */}
          <div>
            <RevealOnScroll>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
                Why You Can Trust REXORAY ACE
              </h3>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-lg">
                Our incorporation is a testament to our commitment to
                transparency, compliance, and professionalism. As a registered
                private limited liability company, we operate under the highest
                standards of corporate governance.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Legally registered and recognized by the Corporate Affairs
                  Commission of Nigeria.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Proven track record in multiple industries.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Commitment to delivering quality and exceeding client
                  expectations.
                </li>
              </ul>
            </RevealOnScroll>
            <RevealOnScroll>
              <Button asChild className="rounded-full">
                <a
                  href="https://drive.google.com/uc?export=download&id=13A1U4y-4Dy7Y3Ah_NR2SDI5dEJLLbjU6"
                  download
                  className="mt-6 inline-block bg-primary px-6 py-6 rounded-full font-semibold shadow transition"
                >
                  Download Company Profile
                </a>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <ServicesSection />

      <ProjectsSection />
    </>
  );
}
