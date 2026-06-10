"use client";

import { Music, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Equalizer } from "@/shared/components/ui/equalizer";
import { Spotlight } from "@/shared/components/ui/spotlight";
import { cn } from "@/shared/lib/utils";
import { TRACK } from "../../data/music.data";
import { useMusicPlayer } from "../../hooks/use-music-player";

export function MusicCard() {
  const [hovered, setHovered] = useState(false);
  const { currentTime, progress, isPlaying } = useMusicPlayer(
    TRACK.duration,
    hovered,
  );

  return (
    <Link
      href={TRACK.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block h-full"
    >
      <Spotlight className="card-luxe group flex h-full min-h-36 w-full flex-col justify-between overflow-hidden rounded-2xl">
        <div className="flex gap-4 p-4">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-border">
            <Image
              src={TRACK.image}
              alt={TRACK.title}
              fill
              className={cn(
                "object-cover transition-transform duration-500",
                hovered && "scale-110",
              )}
            />
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center rounded-xl bg-black/45 backdrop-blur-[2px] transition-opacity duration-200",
                hovered ? "opacity-100" : "opacity-0",
              )}
            >
              <Play className="size-6 fill-primary text-primary drop-shadow-[0_0_8px_var(--primary-glow)]" />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Now playing
                </p>
                <Equalizer className="h-2.5" playing={isPlaying} />
              </div>
              <p
                className={cn(
                  "mt-1 text-sm font-semibold leading-tight",
                  isPlaying && "text-shimmer",
                )}
              >
                {TRACK.title}
              </p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Music className="size-3" />
                {TRACK.artist}
              </p>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>{TRACK.year}</span>
              <span className="text-primary/70">
                {isPlaying ? currentTime : TRACK.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex h-6 items-end gap-px px-4 pb-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="w-full rounded-sm bg-primary/40"
              style={{
                height: `${30 + Math.sin(i * 0.8) * 20 + (i % 3) * 10}%`,
                animation: isPlaying
                  ? `equalize ${0.6 + (i % 4) * 0.15}s ease-in-out ${i * 0.04}s infinite`
                  : undefined,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-0.75 w-full bg-border/60">
          <div
            className="h-full bg-linear-to-r from-primary to-primary-soft transition-all duration-1000"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </Spotlight>
    </Link>
  );
}
