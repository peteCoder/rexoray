"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import AboutImage from "@/assets/about_rexoray.webp";
import Image from "next/image";

const About = () => {
  const team = [
    {
      name: "Raynald Uku",
      position: "Chief Executive Officer",
      image: "/team_1.webp",
      socials: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
      name: "Samantha James",
      position: "Head of Operations",
      image: "/team_2.webp",
      socials: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
      name: "Angela Jacobs",
      position: "Lead Engineer",
      image: "/team_3.webp",
      socials: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 dark:bg-gray-950 text-white py-20 px-6">
        <div className="container mx-auto text-left max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">REXORAY ACE LTD</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-400">
            We are a dynamic, diversified Nigerian company delivering excellence
            in general contracting, petroleum marketing, manufacturing,
            agriculture, transportation, and event management. With a relentless
            drive for innovation, we are committed to integrity,
            professionalism, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={AboutImage}
              alt="About REXORAY ACE"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
              Incorporated in 2024, <strong>REXORAY ACE LTD</strong> was founded
              on a vision to provide superior solutions across multiple sectors
              while maintaining a people-first approach. From humble beginnings,
              we’ve grown into a trusted brand known for delivering high-quality
              projects and services that exceed expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Our journey is defined by bold ideas, collaborative partnerships,
              and a steadfast commitment to adding measurable value in every
              endeavor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Mission, Vision & Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide high-quality products and services that consistently
                meet the needs of our clients while upholding integrity,
                innovation, and excellence in all aspects of our operations.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be a leading diversified company in Nigeria and beyond,
                recognized for delivering outstanding solutions and fostering
                lasting relationships built on trust.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Our Core Values
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Integrity</li>
                <li>Professionalism</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Our Achievements
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            <li>
              ✅ Successful execution of projects across 6 major industries.
            </li>
            <li>
              ✅ Built long-term partnerships with leading businesses and
              communities.
            </li>
            <li>
              ✅ Consistent delivery of projects within budget and on time.
            </li>
            <li>✅ Recognized for excellence in service delivery.</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="relative group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                {/* Portrait Image */}
                <div className="relative w-full h-[28rem] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Hover Overlay with Social Icons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                    <a
                      href={member.socials.facebook}
                      className="text-white hover:text-primary"
                    >
                      <FaFacebookF size={22} />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="text-white hover:text-primary"
                    >
                      <FaLinkedinIn size={22} />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="text-white hover:text-primary"
                    >
                      <FaTwitter size={22} />
                    </a>
                    <a
                      href={member.socials.instagram}
                      className="text-white hover:text-primary"
                    >
                      <FaInstagram size={22} />
                    </a>
                  </div>
                </div>

                {/* Name & Position */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let&apos;s Build the Future Together
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Partner with REXORAY ACE LTD today and experience unmatched
          professionalism, innovation, and results that exceed expectations.
        </p>
        <Button asChild variant="secondary">
          <a href="/contact">Get in Touch</a>
        </Button>
      </section>
    </>
  );
};

export default About;
