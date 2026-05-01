"use client";

import { useState } from "react";
import VideoGrid from "./components/VideoGrid";
import VideoHeader from "./components/VideoHeader";
import { allVideos } from "@/data/videos";
import VideoLightModal from "./components/VideoLightModal";

function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const selectedVideoData =
    allVideos.find((v) => v.id === selectedVideo) ?? null;

  const extractVimeoId = (url: string): string => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : "";
  };
  return (
    <main className="flex flex-col flex-1 pt-28">
      <VideoHeader />

      <VideoGrid onSelectVideo={setSelectedVideo} />

      <VideoLightModal
        allVideos={allVideos}
        selectedVideo={selectedVideo}
        onSelectedVideo={setSelectedVideo}
        selectedVideoData={selectedVideoData}
        onExtractVimeoId={extractVimeoId}
      />
    </main>
  );
}

export default VideoPage;
