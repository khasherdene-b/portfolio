"use client";

import { Equalizer } from "@/components/ui/equalizer";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { Music, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TRACK = {
  artist: "Billie Eilish",
  title: "Birds of a Feather",
  duration: "3:30",
  year: 2024,
  image: "/assets/music.jpeg",
  url: "https://www.youtube.com/watch?v=V9PVRfjEBTI",
};

export function MusicCard() {
  const [hovered, setHovered] = useState(false);

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
          {/* Album art */}
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

          {/* Info */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Now playing
                </p>
                <Equalizer className="h-2.5" />
              </div>
              <p className="mt-1 text-sm font-semibold leading-tight">
                {TRACK.title}
              </p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Music className="size-3" />
                {TRACK.artist}
              </p>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>{TRACK.year}</span>
              <span className="text-primary/70">{TRACK.duration}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.75 w-full bg-border/60">
          <div className="h-full w-1/3 bg-linear-to-r from-primary to-primary-soft transition-all duration-500 group-hover:w-2/3" />
        </div>
      </Spotlight>
    </Link>
  );
}
