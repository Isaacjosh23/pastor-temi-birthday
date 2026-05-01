"use client";

import { Video } from "@/data/videos";
import Image from "next/image";

interface VideoLightModalProps {
  selectedVideo: string | null;
  onSelectedVideo: (id: string | null) => void;
  allVideos: Video[];
  selectedVideoData: Video | null;
  onExtractVimeoId: (url: string) => string;
}

function VideoLightModal({
  selectedVideo,
  onSelectedVideo,
  allVideos,
  selectedVideoData,
  onExtractVimeoId,
}: VideoLightModalProps) {
  return (
    <>
      {selectedVideo !== null && selectedVideoData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-[2.4rem] bg-black/80 backdrop-blur-sm"
          onClick={() => onSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-[90vw] md:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Container */}
            <div className="relative w-full bg-black rounded-lg overflow-hidden">
              {selectedVideoData.provider === "vimeo" ? (
                <iframe
                  src={`https://player.vimeo.com/video/${onExtractVimeoId(selectedVideoData.embedUrl)}?h=&autoplay=1&title=0&byline=0&portrait=0`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                  title={selectedVideoData.title}
                />
              ) : (
                <Image
                  src={selectedVideoData.thumbnailUrl}
                  alt={selectedVideoData.title}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>

            {/* Video Info */}
            <div className="mt-[2.4rem] text-cream">
              <h2
                className="text-[2rem] font-bold mb-[0.8rem]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedVideoData.title}
              </h2>
              <p className="text-cream/70 text-[1.4rem] mb-[2.4rem] leading-relaxed">
                {selectedVideoData.description}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => onSelectedVideo(null)}
              className="absolute -top-12 right-0 text-cream hover:text-gold transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg
                className="w-[3.2rem] h-[3.2rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-[2.4rem]">
              <button
                onClick={() => {
                  const currentIndex = allVideos.findIndex(
                    (v) => v.id === selectedVideo,
                  );
                  const prevVideo =
                    allVideos[
                      currentIndex === 0
                        ? allVideos.length - 1
                        : currentIndex - 1
                    ];
                  onSelectedVideo(prevVideo.id);
                }}
                className="px-[2.4rem] py-4 rounded-full bg-gold/20 text-cream hover:bg-gold/40 transition-colors duration-300 font-semibold"
              >
                ← Previous
              </button>
              <span className="text-cream/70 text-[1.4rem]">
                {allVideos.findIndex((v) => v.id === selectedVideo) + 1} /{" "}
                {allVideos.length}
              </span>
              <button
                onClick={() => {
                  const currentIndex = allVideos.findIndex(
                    (v) => v.id === selectedVideo,
                  );
                  const nextVideo =
                    allVideos[
                      currentIndex === allVideos.length - 1
                        ? 0
                        : currentIndex + 1
                    ];
                  onSelectedVideo(nextVideo.id);
                }}
                className="px-[2.4rem] py-4 rounded-full bg-gold/20 text-cream hover:bg-gold/40 transition-colors duration-300 font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoLightModal;
