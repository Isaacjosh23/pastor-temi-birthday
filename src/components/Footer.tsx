"use client";

export default function Footer() {
  return (
    <footer className="bg-mahogany text-cream py-[4.8rem] px-[2.4rem] md:px-[4.8rem] mt-auto">
      <div className="max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.2rem] mb-[3.2rem]">
          {/* Brand */}
          <div>
            <h3
              className="text-gold text-[1.8rem] font-bold mb-[1.2rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Celebrating
            </h3>
            <p className="text-cream/70 text-[1.4rem] leading-relaxed">
              A digital tribute to a life of faith, grace, and love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-[1.4rem] font-bold mb-[1.6rem]">
              Pages
            </h4>
            <ul className="space-y-[0.8rem]">
              {[
                { label: "Home", href: "/" },
                { label: "Gallery", href: "/gallery" },
                { label: "Videos", href: "/videos" },
                { label: "Letters", href: "/letters" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-[1.4rem]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold text-[1.4rem] font-bold mb-[1.6rem]">
              Info
            </h4>
            <p className="text-cream/70 text-[1.4rem] leading-relaxed">
              This is a private, invitation-only celebration created with love
              and care.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-[2.4rem]">
          <p className="text-cream/60 text-[1.2rem] text-center">
            © 2026 Birthday Celebration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
