"use client";

import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  provider: "vimeo" | "cloudinary";
}

export default function VideoCard({
  id,
  title,
  description,
  thumbnailUrl,
  embedUrl,
  provider,
}: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-112 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-[1.6rem]">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-12 h-12 text-mahogany ml-[0.4rem]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-gold/90 text-mahogany px-[1.2rem] py-[0.6rem] rounded-full text-[0.9rem] font-semibold uppercase tracking-wider">
          {provider === "vimeo" ? "Vimeo" : "Video"}
        </div>
      </div>

      <h3
        className="text-cream-dark text-[1.8rem] font-bold mb-[0.8rem] group-hover:text-cream transition-colors duration-300"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-cream/70 text-[1.4rem] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
