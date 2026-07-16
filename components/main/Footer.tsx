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
import RevealOnScroll from "./RevealOnScroll";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: companyInfo.socialMedia.facebook, icon: FaFacebook, label: "Facebook" },
  { href: companyInfo.socialMedia.instagram, icon: FaInstagram, label: "Instagram" },
  { href: companyInfo.socialMedia.twitter, icon: FaTwitter, label: "Twitter" },
  { href: companyInfo.socialMedia.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
  { href: companyInfo.socialMedia.gmail, icon: FaGooglePlusG, label: "Google" },
].filter((social) => social.href);

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <RevealOnScroll>
            <div>
              <Image src={LogoLight} alt="REXORAY ACE" className="h-12 w-auto" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
                Delivering excellence across construction, energy, agriculture,
                and more — one dependable partner for every sector.
              </p>
              {SOCIALS.length > 0 && (
                <div className="mt-6 flex gap-3">
                  {SOCIALS.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/40">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/60 transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/40">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                <li>{companyInfo.address}</li>
                <li>
                  <a
                    href={`mailto:${companyInfo.emails[0]}`}
                    className="transition-colors hover:text-primary"
                  >
                    {companyInfo.emails[0]}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${companyInfo.phoneNumber}`}
                    className="transition-colors hover:text-primary"
                  >
                    {companyInfo.phoneNumber}
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/40">
            © {new Date().getFullYear()} REXORAY ACE LTD. All Rights Reserved.
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
