"use client";

import Link from "next/link";
import Image from "next/image";
import { featuredPhotos } from "@/data/photo";

export default function GalleryPreview() {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-cream">
      <div className="max-w-480 mx-auto">
        <div className="text-center mb-[4.8rem]">
          <p
            className="text-gold text-[1.1rem] md:text-[1.2rem] tracking-[0.3em] uppercase font-medium mb-[1.6rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gallery
          </p>
          <h2
            className="text-mahogany text-[3.2rem] md:text-[4.8rem] font-bold leading-tight mb-[1.6rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Life of Memories
          </h2>
          <p className="text-mahogany/70 text-[1.6rem] max-w-240 mx-auto leading-relaxed">
            Celebrating the beautiful moments and cherished memories we&apos;ve
            shared.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-[4.8rem]">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative h-120 sm:h-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mahogany/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block px-[3.2rem] py-[1.4rem] rounded-full bg-mahogany text-cream text-[1.4rem] font-bold tracking-wider uppercase hover:bg-mahogany-mid transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
