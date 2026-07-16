"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {
  Target,
  Eye,
  Sparkles,
  Layers,
  Handshake,
  CalendarCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import AboutImage from "@/assets/about_rexoray.webp";
import Image from "next/image";
import Link from "next/link";

import { TeamMember } from "@/lib/types";
import RevealOnScroll from "@/components/main/RevealOnScroll";

const CORE_VALUES = [
  "Integrity",
  "Professionalism",
  "Innovation",
  "Customer Satisfaction",
  "Sustainability",
];

const ACHIEVEMENTS = [
  {
    icon: Layers,
    title: "13 Service Lines",
    description:
      "Diversified execution across construction, trade, energy, agriculture, and more.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Long-term relationships built with leading businesses and communities.",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    description:
      "Consistent delivery of projects within budget and on schedule.",
  },
  {
    icon: Award,
    title: "Service Excellence",
    description:
      "Recognized for excellence and professionalism in every engagement.",
  },
];

const About = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("/api/teams", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch team data");
        const data = await res.json();
        setTeam(data);
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="pb-16 pt-16 sm:pt-20">
        <div className="container mx-auto max-w-4xl px-6">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              Who we are
            </span>
          </RevealOnScroll>
          <RevealOnScroll>
            <h1 className="mt-4 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              About <span className="text-primary">REXORAY ACE LTD</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              REXORAY ACE LTD is a dynamic, multi-disciplinary Nigerian
              company delivering excellence across general contracting,
              trade, petroleum, manufacturing, agriculture, transportation,
              event management, media production, and more. With a
              relentless drive for innovation, we are committed to
              integrity, professionalism, and sustainable growth.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              Explore all our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-white/10 py-20">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
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
              <span className="text-xs uppercase tracking-widest text-white/40">
                Our story
              </span>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
                From humble beginnings to trusted partner
              </h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Incorporated in 2024, <strong className="text-white">REXORAY ACE LTD</strong> was
                founded on a vision to provide superior solutions across
                multiple sectors while maintaining a people-first approach.
                From humble beginnings, we&apos;ve grown into a trusted brand
                known for delivering high-quality projects and services that
                exceed expectations.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="mt-4 text-lg leading-relaxed text-white/50">
                Our journey is defined by bold ideas, collaborative
                partnerships, and a steadfast commitment to adding measurable
                value in every endeavor.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="border-t border-white/10 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              What drives us
            </span>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Mission, Vision & Core Values
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <RevealOnScroll>
              <div className="h-full border border-white/10 p-8 transition-colors hover:border-primary">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-xl text-white">Our Mission</h3>
                <p className="mt-3 text-white/60">
                  To provide world-class services and products across
                  multiple industries by leveraging innovation, strategic
                  partnerships, and deep market expertise — driving growth,
                  creating value for stakeholders, and contributing to
                  national and continental development through excellence
                  in every project we undertake.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="h-full border border-white/10 p-8 transition-colors hover:border-primary">
                <Eye className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-xl text-white">Our Vision</h3>
                <p className="mt-3 text-white/60">
                  To be a premier multi-sector company in Africa — renowned
                  for innovation, integrity, and excellence in delivering
                  sustainable solutions across construction, real estate,
                  trade, energy, manufacturing, agriculture, logistics and
                  events.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="h-full border border-white/10 p-8 transition-colors hover:border-primary">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-xl text-white">Our Core Values</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {CORE_VALUES.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-white/10 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              Track record
            </span>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Our Achievements
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <RevealOnScroll key={achievement.title}>
                  <div className="h-full border border-white/10 p-8 transition-colors hover:border-primary">
                    <Icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 text-lg text-white">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {achievement.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-white/10 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/40">
              The people
            </span>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Meet Our Team
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {loading
              ? [...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden border border-white/10"
                  >
                    <div className="h-[28rem] w-full animate-pulse bg-white/5" />
                    <div className="p-4 text-center">
                      <div className="mx-auto mb-3 h-4 w-3/4 animate-pulse rounded bg-white/5" />
                      <div className="mx-auto h-3 w-1/2 animate-pulse rounded bg-white/5" />
                    </div>
                  </div>
                ))
              : team.map((member) => (
                  <RevealOnScroll
                    key={member._id}
                    className="group relative overflow-hidden border border-white/10 transition-colors hover:border-primary"
                  >
                    <div className="relative h-[28rem] w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition group-hover:opacity-100">
                        {member.socials.facebook && (
                          <a
                            href={member.socials.facebook}
                            className="text-white hover:text-primary"
                          >
                            <FaFacebookF size={20} />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="text-white hover:text-primary"
                          >
                            <FaLinkedinIn size={20} />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            className="text-white hover:text-primary"
                          >
                            <FaTwitter size={20} />
                          </a>
                        )}
                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            className="text-white hover:text-primary"
                          >
                            <FaInstagram size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="text-lg text-white">{member.name}</h3>
                      <p className="text-sm text-white/50">
                        {member.position}
                      </p>
                    </div>
                  </RevealOnScroll>
                ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-light sm:text-4xl">
              Let&apos;s Build the Future Together
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Partner with REXORAY ACE LTD today and experience unmatched
              professionalism, innovation, and results that exceed
              expectations.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default About;
