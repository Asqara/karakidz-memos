"use client";
import { useState, useRef } from "react";
import { Music } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/music/backsound.m4a" preload="auto" loop />
      <button
        onClick={togglePlay}
        className="flex items-center space-x-2 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Music
          className={`w-5 h-5 ${
            isPlaying ? "text-green-500" : "text-gray-500"
          }`}
        />
        <span className="text-sm">{isPlaying ? "Musik ON" : "Musik OFF"}</span>
      </button>
    </div>
  );
}
