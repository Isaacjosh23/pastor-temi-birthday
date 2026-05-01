"use client";

import { allVideos } from "@/data/videos";
import Image from "next/image";

interface VideoGridProps {
  onSelectVideo: (id: string) => void;
}

function VideoGrid({ onSelectVideo }: VideoGridProps) {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-cream">
      <div className="max-w-480 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.2rem]">
          {allVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => onSelectVideo(video.id)}
            >
              <div className="relative h-112 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-[1.6rem]">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
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
                  {video.provider === "vimeo" ? "Vimeo" : "Video"}
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className="text-mahogany text-[1.8rem] font-bold mb-[0.8rem] group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {video.title}
              </h3>
              <p className="text-mahogany/70 text-[1.4rem] leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoGrid;
