"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isSolid = !isHomePage || isScrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-mahogany shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-mahogany-light to-transparent"
      }`}
    >
      <div className="max-w-480 mx-auto px-[2.4rem] md:px-[4.8rem]">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-gold text-[1.1rem] tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Celebrating
            </span>
            <span
              className="text-cream text-[1.8rem] font-bold tracking-wide leading-tight transition-colors duration-300 group-hover:text-gold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pastor&apos;s Birthday
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-[3.2rem]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[1.4rem] tracking-[0.08em] uppercase font-medium transition-colors duration-300 pb-[0.4rem]
                  after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300
                  ${
                    pathname === link.href
                      ? "text-gold after:w-full"
                      : "text-cream/70 hover:text-cream after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/letters"
              className={`text-[1.4rem] tracking-[0.06em] uppercase font-semibold px-[2.4rem] py-[0.9rem] rounded-full border-2 transition-all duration-300
                ${
                  pathname === "/letters"
                    ? "bg-gold border-gold text-mahogany"
                    : "border-gold text-gold hover:bg-gold hover:text-mahogany"
                }`}
            >
              Write a Letter
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-16 h-16 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-cream rounded-full transition-all duration-300 ${menuOpen ? "w-[2.8rem] rotate-45 translate-y-2" : "w-[2.8rem]"}`}
            />
            <span
              className={`block h-0.5 bg-cream rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-8"}`}
            />
            <span
              className={`block h-0.5 bg-cream rounded-full transition-all duration-300 ${menuOpen ? "w-[2.8rem] -rotate-45 -translate-y-2" : "w-[2.8rem]"}`}
            />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} />
    </nav>
  );
}
