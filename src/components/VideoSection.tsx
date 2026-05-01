"use client";

import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { featuredVideos } from "@/data/videos";

export default function VideoSection() {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-mahogany-light">
      <div className="max-w-480 mx-auto">
        <div className="text-center mb-[4.8rem]">
          <p
            className="text-gold text-[1.1rem] md:text-[1.2rem] tracking-[0.3em] uppercase font-medium mb-[1.6rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Video Tributes
          </p>
          <h2
            className="text-cream text-[3.2rem] md:text-[4.8rem] font-bold leading-tight mb-[1.6rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Heartfelt Messages
          </h2>
          <p className="text-cream/70 text-[1.6rem] max-w-240 mx-auto leading-relaxed">
            Watch inspiring tributes and messages from family, friends, and
            community members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.2rem] mb-[4.8rem]">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/videos"
            className="inline-block px-[3.2rem] py-[1.4rem] rounded-full bg-gold text-mahogany text-[1.4rem] font-bold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Watch All Videos →
          </Link>
        </div>
      </div>
    </section>
  );
}
