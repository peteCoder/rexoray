"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaGooglePlusG,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import LogoLight from "@/assets/logo_light.png";
import LogoDark from "@/assets/logo_dark.png";
import Image from "next/image";
import { ModeToggle } from "./mode-toggler";

const Navbar = () => {
  const [isOpenTop, setIsOpenTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[80%] sm:w-[300px] bg-white dark:bg-gray-900 h-screen z-[2000] transform transition-transform duration-300 ease-in-out shadow-lg
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="block dark:hidden">
            <Image
              src={LogoDark}
              alt="Rexoray Logo"
              width={120}
              height={40}
              className="h-10 w-auto block md:hidden dark:hidden"
              priority
            />
          </div>
          <div className="hidden dark:block">
            <Image
              src={LogoLight}
              width={120}
              height={40}
              alt="Rexoray Logo"
              className="h-10 w-auto block md:hidden"
              priority
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col gap-4 px-6 py-6 text-base font-medium text-gray-800 dark:text-gray-200">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <Link
              key={i}
              href={path}
              className="uppercase hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {["Home", "About", "Projects", "Contact"][i]}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-auto px-6 py-4 border-t dark:border-gray-700">
          <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400">
            <a href="#">
              <FaFacebook size={20} className="hover:text-primary" />
            </a>
            <a href="#">
              <FaGooglePlusG size={20} className="hover:text-primary" />
            </a>
            <a href="#">
              <FaInstagram size={20} className="hover:text-primary" />
            </a>
            <a href="#">
              <FaTwitter size={20} className="hover:text-primary" />
            </a>
            <a href="#">
              <FaWhatsapp size={20} className="hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Top Navbar Accordion */}
      <div className="bg-[#292929] dark:bg-gray-950 text-[#7d7d7d] dark:text-gray-400">
        <div className="container mx-auto p-2 flex justify-center items-center md:hidden">
          <button onClick={() => setIsOpenTop(!isOpenTop)} className="p-1">
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isOpenTop ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {/* Desktop top navbar */}
        <div className="hidden md:flex container mx-auto p-2 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a href="#">
              <FaFacebook size={17} />
            </a>
            <a href="#">
              <FaGooglePlusG size={17} />
            </a>
            <a href="#">
              <FaInstagram size={17} />
            </a>
            <a href="#">
              <FaTwitter size={17} />
            </a>
            <a href="#">
              <FaWhatsapp size={17} />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <IoCall size={17} />
            <span className="text-sm">+2347014270059</span>
          </div>
          <div className="flex items-center gap-1">
            <MdAccessTime size={17} />
            <span className="text-sm">Mon - Sat: 7:00 - 17:00</span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosMail size={17} />
            <span className="text-sm">rex.Uku@rexoray.com</span>
          </div>
        </div>
        {/* Mobile Accordion Content */}
        {isOpenTop && (
          <div className="flex flex-col gap-3 p-2 md:hidden text-center">
            <div className="flex justify-center gap-3">
              <a href="#">
                <FaFacebook size={17} />
              </a>
              <a href="#">
                <FaGooglePlusG size={17} />
              </a>
              <a href="#">
                <FaInstagram size={17} />
              </a>
              <a href="#">
                <FaTwitter size={17} />
              </a>
              <a href="#">
                <FaWhatsapp size={17} />
              </a>
            </div>
            <div className="flex justify-center items-center gap-1">
              <IoCall size={17} />
              <span className="text-sm">+2347014270059</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <MdAccessTime size={17} />
              <span className="text-sm">Mon - Sat: 9:00am - 5:00pm</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <IoIosMail size={17} />
              <span className="text-sm">Uku.raynald@rexoray.com</span>
            </div>
          </div>
        )}
      </div>

      {/* Middle Navbar (Desktop) */}
      <div className="p-3 bg-[#363636] dark:bg-gray-900 text-[#7d7d7d] dark:text-gray-300 min-h-[60px] hidden md:block text-sm">
        <div className="container mx-auto p-2">
          <div className="flex justify-between items-center gap-1">
            <Image
              src={LogoLight}
              width={120}
              height={40}
              alt="Rexoray Logo"
              className="h-10 w-auto"
              priority
            />
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[#d6d6d6] dark:text-gray-200">
                  Number 6, Philip Shaibu,
                </span>
                <span>Wuye, Abuja, FCT.</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#d6d6d6] dark:text-gray-200">
                  Call us anytime
                </span>
                <span>+2347014270059</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#d6d6d6] dark:text-gray-200">
                  Send us a mail
                </span>
                <span>Uku.raynald@rexoray.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="p-3 bg-[#f2f2f2] dark:bg-gray-800 min-h-[60px] sticky top-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-2">
            <div className="block dark:hidden">
              <Image
                src={LogoDark}
                alt="Rexoray Logo"
                width={120}
                height={40}
                className="h-10 w-auto block md:hidden dark:hidden"
                priority
              />
            </div>
            <div className="hidden dark:block">
              <Image
                width={120}
                height={40}
                src={LogoLight}
                alt="Rexoray Logo"
                className="h-10 w-auto block md:hidden"
                priority
              />
            </div>

            <ModeToggle />
            {/* Hamburger */}
            <div
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center cursor-pointer p-2 sm:hidden relative h-6 w-7"
            >
              <span
                className={`absolute h-[2px] w-full bg-black dark:bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute h-[2px] w-full bg-black dark:bg-white transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-[2px] w-full bg-black dark:bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>

            {/* Desktop Menu */}
            <div className="sm:flex items-center gap-4 ml-auto hidden">
              <Link className="uppercase hover:text-primary" href="/">
                Home
              </Link>
              <Link className="uppercase hover:text-primary" href="/about">
                About
              </Link>
              <Link className="uppercase hover:text-primary" href="/projects">
                Projects
              </Link>
              <Link className="uppercase hover:text-primary" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
