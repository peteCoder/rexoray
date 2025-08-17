"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaGooglePlusG,
} from "react-icons/fa";

import { companyInfo } from "@/lib/utils";

import LogoLight from "@/assets/logo_light.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#292929] dark:bg-gray-900 text-white p-8 rounded-t-2xl dark:rounded-t-none">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <Image src={LogoLight} alt="REXORAY ACE Logo" className="w-32 mb-4" />
          <p className="text-gray-400 dark:text-gray-300 text-sm">
            REXORAY ACE LTD is committed to delivering excellence across
            industries, from construction to energy, agriculture, and more.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Contact Us
          </h3>
          <p className="text-gray-400 dark:text-gray-300 text-sm">
            {companyInfo.address}
          </p>
          <p className="text-gray-400 dark:text-gray-300 text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:info@rexorayace.com"
              className="hover:text-primary transition"
            >
              {companyInfo.emails[0]}
            </a>
          </p>
          <p className="text-gray-400 dark:text-gray-300 text-sm mt-2">
            Phone: {companyInfo.phoneNumber}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition dark:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition dark:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary transition dark:text-gray-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition dark:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href={companyInfo.socialMedia.facebook}
              target="_blank"
              className="bg-white/10 dark:bg-gray-700 p-2 rounded-full hover:bg-primary transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={companyInfo.socialMedia.instagram}
              target="_blank"
              className="bg-white/10 dark:bg-gray-700 p-2 rounded-full hover:bg-primary transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={companyInfo.socialMedia.twitter}
              target="_blank"
              className="bg-white/10 dark:bg-gray-700 p-2 rounded-full hover:bg-primary transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={companyInfo.socialMedia.linkedin}
              target="_blank"
              className="bg-white/10 dark:bg-gray-700 p-2 rounded-full hover:bg-primary transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href={companyInfo.socialMedia.gmail}
              target="_blank"
              className="bg-white/10 dark:bg-gray-700 p-2 rounded-full hover:bg-primary transition"
            >
              <FaGooglePlusG size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 dark:border-gray-700 mt-10 pt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} REXORAY ACE LTD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
