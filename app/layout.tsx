import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import { Toaster } from "@/components/ui/sonner";
import LiveChatAndWhatsapp from "@/components/main/LiveChatAndWhatsapp";
import CursorFollower from "@/components/main/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REXORAY ACE LTD",
  description:
    "REXORAY ACE LTD is committed to delivering excellence across industries, from construction to energy, agriculture, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorFollower />
        <Navbar />
        <Toaster />

        <main>
          {children}
          <Footer />
        </main>

        <LiveChatAndWhatsapp />
      </body>
    </html>
  );
}
