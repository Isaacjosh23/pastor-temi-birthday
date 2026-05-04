"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/photo";
import Link from "next/link";
import EnvelopeIcon from "./ui/icons/envelope";

const SLIDE_INTERVAL = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 400);
    },
    [current, isAnimating],
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % heroSlides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen min-h-240 overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center select-none pointer-events-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany/60 via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gold/5 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-[2.4rem] md:px-[4.8rem]">
        <div className="flex items-center gap-[1.6rem] mb-[2.4rem]">
          <div className="h-px w-16 md:w-32 bg-gold/60" />
          <p
            className="text-gold text-[1.1rem] md:text-[1.2rem] tracking-[0.3em] uppercase font-medium"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Celebrating a life of impact
          </p>
          <div className="h-px w-16 md:w-32 bg-gold/60" />
        </div>

        <h1
          className="text-cream text-[4.8rem] md:text-[7.2rem] lg:text-[9.6rem] font-bold leading-[1.05] tracking-tight mb-[1.6rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pastor&apos;s
          <br />
          <span className="text-gold italic">Birthday</span>
        </h1>

        <p
          className="text-cream/70 text-[1.6rem] md:text-[1.8rem] max-w-208 leading-relaxed mb-[4.8rem]"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          A woman of faith, grace & love.
          <br />
          Today, we celebrate her.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[1.6rem]">
          <Link
            href="/gallery"
            className="px-[3.2rem] py-[1.4rem] rounded-full bg-gold text-mahogany text-[1.4rem] font-bold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:scale-105"
          >
            View Gallery
          </Link>

          <Link
            href="/letters"
            className="px-[3.2rem] py-[1.4rem] rounded-full border-2 border-cream/50 text-cream text-[1.4rem] font-medium tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 flex items-center gap-2.5"
          >
            Write a Letter
            <EnvelopeIcon className="size-6" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 cursor-pointer ${
              i === current
                ? "w-[3.2rem] h-1.5 bg-gold"
                : "w-1.5 h-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-16 right-[3.2rem] z-20 flex flex-col items-center gap-[0.8rem]">
        <div className="h-20 w-px bg-gradient-to-b from-gold/0 to-gold/60 animate-pulse" />
        <p
          className="text-cream/40 text-[1rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Scroll
        </p>
      </div>
    </section>
  );
}
