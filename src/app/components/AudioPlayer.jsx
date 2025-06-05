"use client"; // Required since we're using browser APIs

import { useRef, useState } from "react";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button onClick={togglePlay} className="theme-toggle" aria-label={isPlaying ? "Stop sound" : "Play sound"}>
        {isPlaying ? <HiMiniSpeakerWave /> : <HiMiniSpeakerXMark />}
      </button>

      <audio ref={audioRef} src="/audio/jungle.mp3" loop={true} preload="metadata" />
    </>
  );
}
