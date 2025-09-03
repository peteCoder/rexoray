"use client";

import { useState, useEffect, useRef } from "react";
import { companyInfo } from "@/lib/utils";
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
  const [showSticky, setShowSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
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

  // Detect scroll direction to show/hide sticky bottom navbar
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setShowSticky(false);
      } else if (currentScrollY < lastScrollY) {
        setShowSticky(true);
      } else if (currentScrollY > lastScrollY) {
        setShowSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="relative">
      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[80%] sm:w-[300px] bg-white dark:bg-gray-900 h-screen z-[2000] transform transition-transform duration-300 ease-in-out shadow-lg
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <Image
            src={LogoDark}
            alt="Rexoray Logo"
            width={300}
            height={300}
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto block dark:hidden"
            priority
          />
          <Image
            src={LogoLight}
            alt="Rexoray Logo"
            width={300}
            height={300}
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto hidden dark:block"
            priority
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            ✕
          </button>
        </div>

        {/* Links */}
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

        {/* Social */}
        <div className="mt-auto px-6 py-4 border-t dark:border-gray-700">
          <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400">
            {[
              FaFacebook,
              FaGooglePlusG,
              FaInstagram,
              FaTwitter,
              FaWhatsapp,
            ].map((Icon, i) => (
              <a href="#" key={i}>
                <Icon size={20} className="hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* TOP NAVBAR */}
      <div className="bg-[#292929] dark:bg-gray-950 text-[#7d7d7d] dark:text-gray-400">
        {/* Mobile toggle */}
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

        {/* Desktop */}
        <div className="hidden md:flex container mx-auto p-2 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {[
              FaFacebook,
              FaGooglePlusG,
              FaInstagram,
              FaTwitter,
              FaWhatsapp,
            ].map((Icon, i) => (
              <a href="#" key={i}>
                <Icon size={17} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <IoCall size={17} />
            <span className="text-sm">{companyInfo.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdAccessTime size={17} />
            <span className="text-sm">{companyInfo.workDays}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosMail size={17} />
            <span className="text-sm">{companyInfo.emails[0]}</span>
          </div>
        </div>

        {/* Mobile accordion content */}
        {isOpenTop && (
          <div className="flex flex-col gap-3 p-2 md:hidden text-center">
            <div className="flex justify-center gap-3">
              {[
                FaFacebook,
                FaGooglePlusG,
                FaInstagram,
                FaTwitter,
                FaWhatsapp,
              ].map((Icon, i) => (
                <a href="#" key={i}>
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <div className="flex justify-center items-center gap-1">
              <IoCall size={17} />
              <span className="text-sm">{companyInfo.phoneNumber}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <MdAccessTime size={17} />
              <span className="text-sm">{companyInfo.workDays}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <IoIosMail size={17} />
              <span className="text-sm">{companyInfo.emails[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* MIDDLE NAVBAR (Desktop only) */}
      <div className="p-3 bg-[#363636] dark:bg-gray-900 text-[#7d7d7d] dark:text-gray-300 min-h-[80px] hidden md:block text-sm">
        <div className="container mx-auto p-2">
          <div className="flex justify-between items-center gap-1">
            <Image
              src={LogoLight}
              width={400}
              height={400}
              alt="Rexoray Logo"
              className="h-20 md:h-28 lg:h-36 xl:h-40 w-auto"
              priority
            />
            <div className="flex flex-row gap-8 text-base">
              <div className="flex flex-col gap-2">
                <span className="text-[#d6d6d6] dark:text-gray-200">
                  Address
                </span>
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#d6d6d6] dark:text-gray-200">
                  Call us anytime
                </span>
                <span>{companyInfo.phoneNumber}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#d6d6d6] dark:text-gray-200">
                  Send us a mail
                </span>
                <span>{companyInfo.emails[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div
        className={`p-3 bg-[#f2f2f2] dark:bg-gray-800 min-h-[70px] transition-all duration-300 ${
          showSticky
            ? "fixed top-0 left-0 w-full z-[999] shadow-md"
            : "relative"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-2">
            {/* Mobile Logo */}
            <div className="block md:hidden">
              <Image
                src={LogoDark}
                alt="Rexoray Logo Dark"
                width={300}
                height={300}
                className="h-16 sm:h-20 md:h-24 w-auto block md:hidden dark:hidden"
                priority
              />
              <Image
                width={300}
                height={300}
                src={LogoLight}
                alt="Rexoray Logo Light"
                className="h-16 sm:h-20 md:h-24 w-auto hidden md:hidden dark:block"
                priority
              />
            </div>

            
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
            <div className="sm:flex items-center gap-6 ml-auto hidden text-lg">
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

      {/* Spacer when sticky */}
      {showSticky && <div className="h-[90px]"></div>}
    </div>
  );
};

export default Navbar;
