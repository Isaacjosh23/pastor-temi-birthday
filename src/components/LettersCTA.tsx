"use client";

import Link from "next/link";

export default function LettersCTA() {
  return (
    <section className="py-32 px-[2.4rem] md:px-[4.8rem] bg-mahogany">
      <div className="max-w-480 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.8rem] items-center">
          {/* Left Content */}
          <div>
            <p
              className="text-gold text-[1.1rem] md:text-[1.2rem] tracking-[0.3em] uppercase font-medium mb-[1.6rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Share Your Story
            </p>
            <h2
              className="text-cream text-[3.2rem] md:text-[4.8rem] font-bold leading-tight mb-[2.4rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Write a Birthday Letter
            </h2>
            <p className="text-cream/80 text-[1.6rem] leading-relaxed mb-[1.6rem]">
              We&apos;d love to hear from you! Share your favorite memories,
              words of encouragement, and heartfelt wishes. Your message will be
              part of this special celebration.
            </p>

            {/* CTA Button */}
            <Link
              href="/letters"
              className="inline-block px-[3.2rem] py-[1.4rem] rounded-full bg-gold text-mahogany text-[1.4rem] font-bold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Write a Letter Now →
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/10 to-cream/10 rounded-lg p-[3.2rem] border border-gold/30">
              {/* Letter Icon Illustration */}
              <div className="flex flex-col items-center justify-center h-128">
                <div className="mb-[2.4rem]">
                  <svg
                    className="w-32 h-32 text-gold opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p
                  className="text-gold text-[1.8rem] font-bold text-center mb-[1.2rem]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Join the Celebration
                </p>
                <p className="text-cream/60 text-[1.4rem] text-center">
                  Join 20+ messages celebrating this special day
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-[-1rem] right-[-1rem] w-[4rem] h-[4rem] bg-gold/20 rounded-full" />
              <div className="absolute bottom-[-1rem] left-[-1rem] w-[6rem] h-[6rem] bg-cream/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
