"use client";

import { useEffect, useRef, useState } from "react";

function parseDuration(duration: string): number {
  const [m, s] = duration.split(":").map(Number);
  return (m ?? 0) * 60 + (s ?? 0);
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function useMusicPlayer(duration: string, playing: boolean) {
  const totalSeconds = parseDuration(duration);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentSeconds(0);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrentSeconds((prev) => {
        if (prev >= totalSeconds) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return totalSeconds;
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, totalSeconds]);

  return {
    currentTime: formatTime(currentSeconds),
    progress: totalSeconds > 0 ? currentSeconds / totalSeconds : 0,
    isPlaying: playing && currentSeconds < totalSeconds,
  };
}
