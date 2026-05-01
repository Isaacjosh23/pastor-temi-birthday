"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/NavBar";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-160 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-mahogany border-t border-gold/20 px-[2.4rem] py-[2.4rem] flex flex-col gap-[0.8rem]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[1.6rem] font-medium tracking-wide py-[1.2rem] border-b border-cream/10 transition-colors duration-200 ${
              pathname === link.href
                ? "text-gold"
                : "text-cream/80 hover:text-gold"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/letters"
          className="mt-[1.6rem] text-center text-[1.5rem] font-semibold tracking-wider uppercase px-[2.4rem] py-[1.4rem] rounded-full bg-gold text-mahogany hover:bg-gold-light transition-colors duration-300"
        >
          ✉ Write a Letter
        </Link>
      </div>
    </div>
  );
}
